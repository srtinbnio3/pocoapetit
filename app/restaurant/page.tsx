import Navigation from '@/components/ui/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Clock, Phone, Car, Train, Bus, Utensils } from 'lucide-react';
import Footer from '@/components/ui/footer';
import Image from 'next/image';

export default function AccessPage() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[50vh]">
        <div className="absolute inset-0">
          <Image
            src="/IMG_4125.JPG"
            alt="Restaurant exterior"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <h1 className="heading-xl text-white">Restaurant</h1>
        </div>
      </section>

      {/* Restaurant Information */}
      <section className="py-24 bg-white">
        <div className="container-custom max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
            <div className="space-y-6">
              <h2 className="heading-md">POCO A PETIT</h2>
              <p className="text-lg leading-relaxed">
                福岡・桜坂の閑静な住宅街に佇む一軒家レストラン。
                <br />
                フランス料理の伝統と和の技法を融合させた独創的な料理を、
                落ち着いた空間でお楽しみいただけます。
              </p>
            </div>
            <div className="relative aspect-[4/3]">
              <Image
                src="/IMG_2646.jpeg"
                alt="Restaurant interior"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Chef Introduction */}
          <div className="mb-24">
            <h2 className="heading-md text-center mb-16">シェフ紹介</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[3/4]">
                <Image
                  src="/IMG_7351.jpg"
                  alt="Chef portrait"
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-4xl font-serif mb-2">YUYA TAKESUE</h3>
                  <p className="text-xl font-serif text-muted-foreground">Executive Chef</p>
                </div>
                <div className="space-y-4 text-lg leading-relaxed">
                  <p>
                    フレンチをメインにイタリアンや和食まで幅広い料理を学び
                    ハイアット リージェンシー福岡や群馬・草津町の旅館での経験を重ねる。
                  </p>
                  <p>
                    2022年にソムリエの資格を取得し、26歳で「POCO A PETIT」を地元福岡にオープン。
                  </p>
                  <p>
                    多彩な料理経験を活かし、ジャンルを超えた創造的な料理で、
                    お客様に新しい味わいの体験を提供することを心がけている。
                  </p>
                  <p>
                    「素材の持ち味を最大限に引き出し、五感で楽しんでいただける料理を」
                    という想いで、日々新たな挑戦を続けている。
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Card className="mb-12">
            <CardContent className="p-8">
              <Clock className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-serif mb-4">営業時間</h3>
              <div className="space-y-6 text-muted-foreground">
                  <p className="font-medium text-foreground mb-2">【ランチ】</p>
                  <p>12:00 一斉スタートのみ</p>
                <div>
                  <p className="font-medium text-foreground mb-2">【ディナー】</p>
                  <p>《コース》18:00〜19:00の間でお好きなお時間をお選びいただけます</p>
                </div>
                <p className="pt-4 border-t">
                  店休日は不定休です、営業日は<a href="https://www.instagram.com/poco_a_petit/" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:underline">Instagram</a>からご確認ください。
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
            <Card>
              <CardContent className="p-8">
                <Utensils className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-serif mb-4">席数情報</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p className="text-2xl font-medium text-foreground">8席</p>
                  <p>（カウンター4席、テーブル4席）</p>
                  <p className="pt-4 border-t text-sm">※全席禁煙</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <div className="w-8 h-8 text-primary mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a5 5 0 0 1 5 5v2a5 5 0 0 1-10 0V7a5 5 0 0 1 5-5z" />
                    <path d="M8 14v.5a4 4 0 0 0 8 0V14" />
                    <path d="M12 2v2" />
                    <path d="M12 20v2" />
                    <path d="M4 9h2" />
                    <path d="M18 9h2" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif mb-4">お子様について</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p className="text-2xl font-medium text-foreground">ベビーカー入店OK</p>
                  <p className="pt-4 border-t text-sm">※お子様のご利用はご予約時にお伝えください。</p>
                </div>
              </CardContent>
            </Card>
          </div>
          {/* 駐車場と住所情報を横並びにするグリッド */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
            <Card>
              <CardContent className="p-8">
                <Car className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-serif mb-4">駐車場</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p className="text-2xl font-medium text-foreground">無</p>
                  <p>近隣にコインパーキング有り</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-serif text-lg mb-2">住所</h3>
                      <p>〒810-0024<br />福岡県福岡市中央区桜坂２丁目７−１１ Ｙｏｓｈｉｄａ Ｈｏｕｓｅ 101</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Train className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-serif text-lg mb-2">電車でお越しの場合</h3>
                      <ul className="space-y-2">
                        <li>・地下鉄七隈線 桜坂駅より徒歩5分</li>
                        <li>・西鉄バス 桜坂バス停より徒歩5分</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          {/* 地図を一番下に中央寄せで表示 */}
          <div className="flex justify-center mt-12">
            <div className="rounded-lg overflow-hidden w-full max-w-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.9797367238248!2d130.38439247637405!3d33.57987537333846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x354193b2162cbac7%3A0x41c4e08711f30949!2zUE9DTyBBIFBFVElUKOODneOCs-OCouODmuODhuOCoynmoZzlnYI!5e0!3m2!1sja!2sjp!4v1742553678193!5m2!1sja!2sjp"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}