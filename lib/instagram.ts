type InstagramPost = {
  id: string;
  media_type: string;
  media_url: string;
  permalink: string;
  caption?: string;
  thumbnail_url?: string;
};

export async function getInstagramFeed(): Promise<InstagramPost[]> {
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
  const accountId = process.env.INSTAGRAM_BUSINESS_ACCOUNT_ID;

  if (!accessToken || !accountId) {
    console.error('Instagram credentials are not configured');
    return [];
  }

  try {
    const response = await fetch(
      `https://graph.instagram.com/v12.0/${accountId}/media?fields=id,media_type,media_url,permalink,caption,thumbnail_url&access_token=${accessToken}&limit=4`
    );

    if (!response.ok) {
      throw new Error(`Instagram API responded with status: ${response.status}`);
    }

    const data = await response.json();
    return data.data as InstagramPost[];
  } catch (error) {
    console.error('Error fetching Instagram feed:', error);
    return [];
  }
} 