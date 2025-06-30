import Navigation from '@/components/ui/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Instagram, Calendar, Package, Utensils, Wine, Flower2, Heart } from 'lucide-react';
import Footer from '@/components/ui/footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'sobaco no cannelé - 蕎麦粉100%のグルテンフリーカヌレ | POCO A PETIT',
  description: 'POCO A PETIT の蕎麦粉100%で作るグルテンフリーカヌレ専門ブランド「sobaco no cannelé」。7月から毎週日曜日限定でテイクアウト販売開始。',
  keywords: 'sobaco no cannelé, カヌレ, 蕎麦粉, グルテンフリー, POCO A PETIT, 桜坂, 福岡, テイクアウト',
};

export default function CanelePage() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[50vh]">
        <div className="absolute inset-0">
          <img
            src="/【TAKE OUT】sobacoカヌレ.jpeg"
            alt="sobaco no cannelé"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative h-full flex items-center justify-center text-white text-center">
          <div>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium tracking-wider">
              sobaco no cannelé
            </h1>
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-24 bg-white">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="heading-md mb-8">Brand Story</h2>
            <p className="text-lg leading-relaxed mb-8">
              当店のスペシャリテのデザートとして
              <br />
              お出ししている蕎麦粉のカヌレ
              <br />
              <br />
              ご自宅でもお楽しみいただけるよう
              <br />
              蕎麦粉のカヌレ専門ブランド
              <br />
              <span className="text-2xl font-serif text-primary font-medium">【sobaco no cannelé】</span>
              <br />
              を立ち上げました
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative aspect-[4/3]">
              <img
                src="/【TAKE OUT】sobacoカヌレ.jpeg"
                alt="sobaco no cannelé 商品写真"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div>
              <h3 className="heading-md mb-6">蕎麦粉100%グルテンフリーカヌレ</h3>
              <p className="text-lg leading-relaxed mb-6">
                九州産そば粉100%で作る小麦粉不使用のグルテンフリーな蕎麦粉のカヌレ。
                <br />
                熊本阿蘇産の牛乳、鹿児島奄美産のサトウキビから作られる素焚糖など厳選素材で作る
                身体にも優しいカヌレです。
              </p>
              <p className="text-lg leading-relaxed text-primary font-medium">
                蕎麦の実と一緒に焼き上げることで他にないカリッと感が楽しめます。
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="heading-md mb-6">フレンチシェフの作るカヌレ</h3>
              <p className="text-lg leading-relaxed mb-6">
                フレンチだけでなく和食でも研鑽を積んだシェフが営む
                <br />
                《和×フレンチ》福岡桜坂にあるレストラン「POCO A PETIT」で
                名物としてお出ししているスペシャリテの焼き菓子です
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                日々のちょっとしたご褒美や贈り物として是非お楽しみください♪
              </p>
            </div>
            <div className="relative aspect-[4/3]">
              <img
                src="/IMG_4136.JPG"
                alt="POCO A PETIT シェフ"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Three Flavors Section */}
      <section className="py-24 bg-muted">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-md mb-8">3つの味わい</h2>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto">
              蕎麦粉のカヌレは定番で3種の味わい
              <br />
              《ボルドー》《蜂蜜》《ショコラ》をご用意しています。
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Wine className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-serif mb-2">《ボルドー》</h3>
                  <p className="text-sm text-primary font-medium">フラッグシップ</p>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  伝統的なカヌレに使われるラム酒に蕎麦粉の香りが合わさることで
                  優しい甘みとお芋のような香りが広がる唯一無二のカヌレです。
                  当店の味を代表するフラッグシップな味わいのカヌレです。
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Flower2 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-serif mb-2">《蜂蜜》</h3>
                  <p className="text-sm text-primary font-medium">アルコール不使用</p>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  伝統的なカヌレにはラム酒が使われますがこちらの《蜂蜜》はアルコール類不使用。
                  長野県の鈴木養蜂場さんのそば蜂蜜を贅沢に使用し深みのある香りと優しい甘みの
                  蕎麦粉のカヌレに仕上げました。
                  カヌレに苦手意識がある方にも是非味わって頂きたい味わいです。
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-700 to-amber-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-serif mb-2">《ショコラ》</h3>
                  <p className="text-sm text-primary font-medium">アルコール不使用・リッチな仕上がり</p>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  長野県の鈴木養蜂場さんのそば蜂蜜を贅沢に使用し深みのある香りと優しい甘みに
                  クーベルチュールチョコレートをたっぷり加えリッチな仕上がりに。
                  ケーキのようなしっとりとした食感と蕎麦の実のカリッとした食感のコントラストをお楽しみください。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sales Information Section */}
      <section className="py-24 bg-muted">
        <div className="container-custom max-w-5xl">
          <h2 className="heading-md text-center mb-12">販売について</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Utensils className="w-12 h-12 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-serif mb-4">TAKE OUT</h3>
                <p className="text-muted-foreground mb-4">
                  レストランご利用のお客様は、
                  <br />
                  ご予約時にご注文いただければTAKE OUTのご用意可能です​
                </p>
                <p className="font-serif text-lg text-primary">¥450</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Calendar className="w-12 h-12 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-serif mb-4">イートイン</h3>
                <p className="text-muted-foreground mb-4">
                  《毎週日曜日限定》で
                  <br />
                  予約なしでもお買い求めいただける
                  <br />
                  テイクアウト販売&カフェ営業を行います✨
                </p>
                <p className="text-sm text-muted-foreground">
                  (場所は POCO A PETIT)
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Package className="w-12 h-12 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-serif mb-4">ネット販売</h3>
                <p className="text-muted-foreground mb-6">
                  遠方のお客様にも
                  <br />
                  お楽しみいただけるよう
                  <br />
                  専用サイトからご注文いただけます
                </p>
                <Button 
                  asChild
                  variant="outline"
                >
                  <a 
                    href="https://pocoapetit.base.shop/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    通販サイト
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-24 bg-white">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-8">Follow Us</h2>
          <div className="max-w-lg mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-12">
                <Instagram className="w-16 h-16 text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-serif mb-4">sobaco no cannelé</h3>
                <p className="text-lg mb-6 text-muted-foreground">
                  蕎麦粉のカヌレ専用のアカウント
                  <br />
                  最新情報をお届けします
                </p>
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                >
                  <a 
                    href="https://www.instagram.com/sobaco_no_cannele/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <Instagram className="w-5 h-5" />
                    @sobaco_no_cannele
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
} 