export type InstagramPost = {
  id: string;
  media_type: string;
  media_url: string;
  permalink: string;
  caption?: string;
  thumbnail_url?: string;
};

export async function getInstagramFeed(): Promise<InstagramPost[]> {
  if (process.env.NODE_ENV === 'production' && process.env.NEXT_PHASE === 'build') {
    // ビルド時は空の配列を返す
    return [];
  }

  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
  const accountId = process.env.INSTAGRAM_BUSINESS_ACCOUNT_ID;

  if (!accessToken || !accountId) {
    console.error('Instagram credentials are not configured');
    return [];
  }

  try {
    const response = await fetch(
      `https://graph.instagram.com/v12.0/${accountId}/media?fields=id,media_type,media_url,permalink,caption,thumbnail_url&access_token=${accessToken}&limit=4`,
      { 
        next: { revalidate: 3600 },
        headers: {
          'Accept': 'application/json'
        }
      }
    );

    if (!response.ok) {
      console.error(`Instagram API error: ${response.status} ${response.statusText}`);
      return [];
    }

    const data = await response.json();
    if (!data || !Array.isArray(data.data)) {
      console.error('Invalid Instagram API response format');
      return [];
    }

    return data.data as InstagramPost[];
  } catch (error) {
    console.error('Error fetching Instagram feed:', error);
    return [];
  }
} 