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
            {/* Casual Lunch Course */}
            <div>
              <div className="relative aspect-[16/9] mb-12">
                <img
                  src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Casual Lunch Course"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <Card>
                <CardContent className="p-12">
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-serif mb-4">《選べるメイン》カジュアルランチコース</h3>
                    <p className="text-xl font-serif mb-4">Casual Lunch Course</p>
                    <p className="text-2xl font-serif">¥3,950</p>
                    <p className="text-sm text-muted-foreground">(税込)</p>
                  </div>
                  <div className="max-w-2xl mx-auto">
                    <p className="text-lg text-center mb-8">
                      メインディッシュは当日お選びいただけるカジュアルなランチコースです。
                      当店名物の9種の前菜プレートと共にお楽しみください。
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
                      <div className="text-center space-y-4">
                        <p className="text-lg font-medium">選べるメインディッシュ</p>
                        <p className="text-sm text-muted-foreground">(内容は変更になる場合がございます)</p>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>◯旬野菜を楽しむガレット</li>
                          <li>◯チキンとお野菜のGREENグラタン</li>
                          <li>◯本日のお魚料理(+450)</li>
                          <li>◯アメリケーヌソースの濃厚海老ガレット(+600)</li>
                          <li>◯国産牛ほほ肉の赤ワイン煮込み(+1,100)</li>
                        </ul>
                      </div>
                      <div className="text-center">
                        <p className="text-lg">デセール3種盛り合わせ</p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg">食後のお飲み物</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Dinner Full Course */}
            <div>
              <div className="relative aspect-[16/9] mb-12">
                <img
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Dinner Full Course"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <Card>
                <CardContent className="p-12">
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-serif mb-4">ディナーフルコース</h3>
                    <p className="text-xl font-serif mb-4">Dinner Full Course</p>
                    <p className="text-2xl font-serif">¥6,600</p>
                    <p className="text-sm text-muted-foreground">(税込)</p>
                  </div>
                  <div className="max-w-2xl mx-auto">
                    <p className="text-lg text-center mb-8">
                      前菜小鉢プレート含む最大15品のお料理、2品のデザートを少しずつ楽しめるフルコースです。
                      季節感のあるお料理の数々をお楽しみください。
                    </p>
                    <div className="space-y-6">
                      <div className="text-center space-y-2">
                        <p className="text-lg">アミューズ</p>
                        <p className="text-sm text-muted-foreground">(例:レバームース最中)</p>
                      </div>
                      <div className="text-center space-y-2">
                        <p className="text-lg">季節のスープ</p>
                        <p className="text-sm text-muted-foreground">(例:とうもろこしのポタージュ)</p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg">9種の前菜小鉢プレート</p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg">自家製パン</p>
                      </div>
                      <div className="text-center space-y-2">
                        <p className="text-lg">お魚料理</p>
                        <p className="text-sm text-muted-foreground">(例:イサキのポワレ)</p>
                      </div>
                      <div className="text-center space-y-2">
                        <p className="text-lg">お肉料理</p>
                        <p className="text-sm text-muted-foreground">(例:蝦夷鹿のロースト)</p>
                      </div>
                      <div className="text-center space-y-2">
                        <p className="text-lg">〆のお料理</p>
                        <p className="text-sm text-muted-foreground">(例:五島うどんのカルボナーラ)</p>
                        <p className="text-sm text-muted-foreground">(プラス料金)</p>
                      </div>
                      <div className="text-center space-y-2">
                        <p className="text-lg">今月のディナー限定デセール</p>
                        <p className="text-sm text-muted-foreground">(例:塩チョコテリーヌ)</p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg">お茶菓子「蕎麦粉のカヌレ」</p>
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
                  src="https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
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
                        蕎麦粉とラム酒が合わさる事で唯一無二の香りを楽しめるカヌレです。
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