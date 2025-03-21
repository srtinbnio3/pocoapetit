import Navigation from '@/components/ui/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Clock, Phone, Car, Train, Bus, Utensils } from 'lucide-react';
import Footer from '@/components/ui/footer';

export default function AccessPage() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[50vh]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1515668236457-83c3b8764839?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Restaurant exterior"
            className="w-full h-full object-cover"
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
                フランス料理の伝統と和の技法を融合させた独創的な料理を、
                落ち着いた空間でお楽しみいただけます。
              </p>
            </div>
            <div className="relative aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                alt="Restaurant interior"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Chef Introduction */}
          <div className="mb-24">
            <h2 className="heading-md text-center mb-16">シェフ紹介</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1977&q=80"
                  alt="Chef portrait"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-4xl font-serif mb-2">YUYA TAKESUE</h3>
                  <p className="text-xl font-serif text-muted-foreground">Executive Chef</p>
                </div>
                <div className="space-y-4 text-lg leading-relaxed">
                  <p>
                    フレンチをメインに、イタリアンや和食まで幅広い料理を学び、
                    ハイアット リージェンシーや群馬・草津町の旅館での経験を重ねる。
                    2022年にワインソムリエの資格を取得し、27歳で「POCO A PETIT」をオープン。
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
                <div className="space-y-2 text-muted-foreground">
                  <p>・ワインソムリエ</p>
                  <p>・元ハイアット リージェンシーシェフ</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            <Card>
              <CardContent className="p-8">
                <Clock className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-serif mb-4">営業時間</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>ディナー 17:30〜22:00</p>
                  <p>(L.O. 20:30)</p>
                  <p>定休日：月曜日</p>
                  <p className="text-sm">※祝日の場合は営業、翌日休業</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <Utensils className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-serif mb-4">席数情報</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>テーブル席：24席</p>
                  <p>カウンター席：6席</p>
                  <p>個室：1室（4名様まで）</p>
                  <p className="text-sm">※貸切は20名様より承ります</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <Car className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-serif mb-4">駐車場</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>専用駐車場：4台</p>
                  <p>提携駐車場：近隣に有料駐車場あり</p>
                  <p className="text-sm">※ご予約時にお申し付けください</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
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
                      <Phone className="w-6 h-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-serif text-lg mb-2">お電話</h3>
                        <p>092-XXX-XXXX</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          ※ご予約・お問い合わせはお電話にて承ります
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Train className="w-6 h-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-serif text-lg mb-2">電車でお越しの場合</h3>
                        <ul className="space-y-2">
                          <li>・地下鉄七隈線 桜坂駅 1番出口より徒歩3分</li>
                          <li>・西鉄バス 桜坂バス停より徒歩1分</li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Car className="w-6 h-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-serif text-lg mb-2">お車でお越しの場合</h3>
                        <ul className="space-y-2">
                          <li>・福岡都市高速「天神北」出口より約10分</li>
                          <li>・国道202号線より桜坂方面へ</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.9797367238248!2d130.38439247637405!3d33.57987537333846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x354193b2162cbac7%3A0x41c4e08711f30949!2zUE9DTyBBIFBFVElUKOODneOCs-OCouODmuODhuOCoynmoZzlnYI!5e0!3m2!1sja!2sjp!4v1742553678193!5m2!1sja!2sjp"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '500px' }}
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