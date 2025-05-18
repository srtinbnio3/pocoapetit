import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/ui/navigation';
import Footer from '@/components/ui/footer';
import Image from 'next/image';

export default function MenuPage() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[50vh]">
        <div className="absolute inset-0">
          <Image
            src="/IMG_4129.JPG"
            alt="Menu header"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <h1 className="heading-xl text-white">Menu</h1>
        </div>
      </section>

      {/* Course Introduction */}
      <section className="py-24 bg-white">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-16">
            <p className="text-lg text-muted-foreground mb-4">
              旬の食材と伝統的なフレンチの技法、そして和の要素を織り交ぜた
              <br />
              シェフ渾身のコースメニューをご用意しております
            </p>
            <p className="text-sm text-muted-foreground">
              ※食材の仕入れ状況により、メニュー内容が変更になる場合がございます
            </p>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-24 bg-muted">
        <div className="container-custom max-w-5xl">
          <div className="grid grid-cols-1 gap-24">
            {/* Light Course */}
            <div>
              <div className="relative aspect-[16/9] mb-12">
                <img
                  src="/(ランチ限定)《3800yen》ライトコース　(5:1〜).jpg"
                  alt="Light Course"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <Card>
                <CardContent className="p-12">
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-serif mb-4">(ランチ限定)ライトコース</h3>
                    <p className="text-xl font-serif mb-4">Light Course</p>
                    <p className="text-2xl font-serif">¥3,800</p>
                    <p className="text-sm text-muted-foreground">(税込)</p>
                  </div>
                  <div className="max-w-2xl mx-auto">
                    <p className="text-lg text-center mb-8">
                      カジュアルに当店のお料理をお楽しみいただけるランチ限定のライトコースです。
                      旬のお野菜を美味しさを活かすフレンチベースに和食のエッセンスを散りばめたお料理。
                      12品のお料理と3品のデザートを少しずつ様々な味わいをご堪能ください。
                    </p>
                    <div className="space-y-6">
                      <div className="text-center">
                        <p className="text-lg">本日のスープ</p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg">9種の前菜小鉢プレート</p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg">自家製パン</p>
                      </div>
                      <div className="text-center space-y-2">
                        <p className="text-lg">季節のSTAUBごはん</p>
                        <p className="text-sm text-muted-foreground">(例:自家製パンチェッタとそら豆、ペコリーノチーズのご飯)</p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg">小さなお菓子3種盛り合わせ</p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg">食後のお飲み物</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Standard Course */}
            <div>
              <div className="relative aspect-[16/9] mb-12">
                <img
                  src="/(ランチ:ディナー共通)《5500yen》スタンダードコース(5:1〜).jpg"
                  alt="Standard Course"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <Card>
                <CardContent className="p-12">
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-serif mb-4">(ランチ/ディナー共通)スタンダードコース</h3>
                    <p className="text-xl font-serif mb-4">Standard Course</p>
                    <p className="text-2xl font-serif">¥5,500</p>
                    <p className="text-sm text-muted-foreground">(税込)</p>
                  </div>
                  <div className="max-w-2xl mx-auto">
                    <p className="text-lg text-center mb-8">
                      クマのモナカを使用したアミューズ、メインディッシュのお肉料理、デザートまで当店の魅力を最大限楽しめるコースです。
                      旬のお野菜を美味しさを活かすフレンチベースに和食のエッセンスを散りばめたお料理。
                      14品のお料理と4品のデザートを少しずつ様々な味わいをご堪能ください。
                    </p>
                    <div className="space-y-6">
                      <div className="text-center">
                        <p className="text-lg">クマのおつまみ最中</p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg">本日のスープ</p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg">9種の前菜小鉢プレート</p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg">自家製パン</p>
                      </div>
                      <div className="text-center space-y-2">
                        <p className="text-lg">メインディッシュお肉料理</p>
                        <p className="text-sm text-muted-foreground">(黒豚や蝦夷鹿など)</p>
                      </div>
                      <div className="text-center space-y-2">
                        <p className="text-lg">季節のSTAUBご飯</p>
                        <p className="text-sm text-muted-foreground">(例:自家製パンチェッタとそら豆、ペコリーノチーズのご飯)</p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg">今月のデセール</p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg">小さなお菓子3種盛り合わせ</p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg">食後のお飲み物</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Beef Cheek Course */}
            <div>
              <div className="relative aspect-[16/9] mb-12">
                <img
                  src="/(ランチ:ディナー共通)《6600yen》メインディッシュ「牛ホホ肉赤ワイン煮」コース(5:1〜).jpg"
                  alt="Beef Cheek Course"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <Card>
                <CardContent className="p-12">
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-serif mb-4">(ランチ/ディナー共通)メインディッシュ「牛ホホ肉赤ワイン煮」コース</h3>
                    <p className="text-xl font-serif mb-4">Beef Cheek Course</p>
                    <p className="text-2xl font-serif">¥6,600</p>
                    <p className="text-sm text-muted-foreground">(税込)</p>
                  </div>
                  <div className="max-w-2xl mx-auto">
                    <p className="text-lg text-center mb-8">
                      スタンダードコースのメインディッシュお肉料理を「国産牛ほほ肉の赤ワイン煮込み」でお楽しみいただける特別なコースです。
                      旬のお野菜を美味しさを活かすフレンチベースに和食のエッセンスを散りばめたお料理。
                      14品のお料理と4品のデザートを少しずつ様々な味わいをご堪能ください。
                    </p>
                    <div className="space-y-6">
                      <div className="text-center">
                        <p className="text-lg">クマのおつまみ最中</p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg">本日のスープ</p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg">9種の前菜小鉢プレート</p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg">自家製パン</p>
                      </div>
                      <div className="text-center space-y-2">
                        <p className="text-lg">メインディッシュお肉料理「国産牛ホホ肉の赤ワイン煮込み」</p>
                      </div>
                      <div className="text-center space-y-2">
                        <p className="text-lg">季節のSTAUBご飯</p>
                        <p className="text-sm text-muted-foreground">(例:自家製パンチェッタとそら豆、ペコリーノチーズのご飯)</p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg">今月のデセール</p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg">小さなお菓子3種盛り合わせ</p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg">食後のお飲み物</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sobaco Canelé */}
            <div>
              <div className="relative aspect-[16/9] mb-12">
                <img
                  src="/【TAKE OUT】sobacoカヌレ.jpeg"
                  alt="Sobaco Canelé"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <Card>
                <CardContent className="p-12">
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-serif mb-4">【TAKE OUT】sobacoカヌレ</h3>
                    <p className="text-xl font-serif mb-4">Sobaco Canelé</p>
                    <p className="text-2xl font-serif">¥450</p>
                    <p className="text-sm text-muted-foreground">(税込)</p>
                  </div>
                  <div className="max-w-2xl mx-auto">
                    <div className="text-lg text-center space-y-4">
                      <p>
                        当店のスペシャリテである蕎麦粉のカヌレです。
                        蕎麦粉とラム酒が合わさる事で唯一無二の香りを楽しめ
                        外はカリッと、中はしっとり食感にこだわったカヌレです。
                      </p>
                      <p>
                        小麦粉不使用、粉類は蕎麦粉100%でお作りしています。
                      </p>
                      <p className="text-muted-foreground">
                        ※前日までのご予約が必要です。
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}