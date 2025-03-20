import Navigation from '@/components/ui/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChefHat, MapPin, Clock, Phone, Instagram } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="POCO A PETIT"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative h-full flex items-center justify-center text-white text-center">
          <div>
            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-medium tracking-wider mb-6">POCO A PETIT</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              福岡・桜坂で愛され続ける創作和フレンチ。
              <br />
              伝統的なフレンチと和の技法を融合させた独創的な料理をご提供いたします。
            </p>
          </div>
        </div>
      </section>

      {/* Concept Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                alt="Restaurant interior"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="heading-md mb-6">Concept</h2>
              <p className="text-lg mb-6 leading-relaxed">
                "少しずつ色々楽しむ"をコンセプトに、名物の【9種の前菜小鉢プレート】をはじめ、
                様々な味わいを一度にお楽しみいただける料理の数々をご提供いたします。
                桜坂の閑静な住宅街に佇む一軒家レストランで、落ち着いた雰囲気の中、
                大切な方との特別な日に、また日常の贅沢として、心に残るお食事のひとときをご堪能ください。
              </p>
              <Button variant="default" size="lg">
                詳しく見る
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Overview Section */}
      <section className="py-24 bg-muted">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-12">Menu</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <img
                  src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Casual Lunch Course"
                  className="w-full aspect-[4/3] object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-serif mb-2">《選べるメイン》カジュアルランチコース</h3>
                <p className="text-muted-foreground mb-4">
                  メインディッシュは当日お選びいただけるカジュアルなランチコース。
                  当店名物の9種の前菜プレートと共にお楽しみください。
                </p>
                <p className="font-serif text-lg">¥3,950</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <img
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Dinner Full Course"
                  className="w-full aspect-[4/3] object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-serif mb-2">ディナーフルコース</h3>
                <p className="text-muted-foreground mb-4">
                  前菜小鉢プレート含む最大15品のお料理、2品のデザートを少しずつ楽しめるフルコース。
                  季節感のあるお料理の数々をお楽しみください。
                </p>
                <p className="font-serif text-lg">¥6,600</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <img
                  src="https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
                  alt="Sobaco Canelé"
                  className="w-full aspect-[4/3] object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-serif mb-2">【TAKE OUT】sobacoカヌレ</h3>
                <p className="text-muted-foreground mb-4">
                  当店のスペシャリテである蕎麦粉のカヌレ。
                  蕎麦粉とラム酒が合わさる事で唯一無二の香りを楽しめます。
                </p>
                <p className="font-serif text-lg">¥450</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Restaurant Information Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-12">Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.846338317795!2d130.39!3d33.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDM0JzQ4LjAiTiAxMzDCsDIzJzI0LjAiRQ!5e0!3m2!1sen!2sjp!4v1620000000000!5m2!1sen!2sjp"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-serif text-lg mb-2">住所</h3>
                    <p>〒810-0024 福岡県福岡市中央区桜坂X-XX-XX</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-serif text-lg mb-2">営業時間</h3>
                    <p>ディナー 17:30〜22:00 (L.O. 20:30)<br />定休日：月曜日</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-serif text-lg mb-2">ご予約・お問い合わせ</h3>
                    <p>092-XXX-XXXX</p>
                  </div>
                </div>
                <Button size="lg" className="w-full">
                  オンライン予約
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="py-24 bg-muted">
        <div className="container-custom">
          <div className="flex items-center justify-center gap-4 mb-12">
            <Instagram className="w-6 h-6" />
            <h2 className="heading-md">Instagram</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <a
                key={i}
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-square overflow-hidden rounded-lg hover:opacity-90 transition-opacity"
              >
                <img
                  src={`https://images.unsplash.com/photo-${i}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80`}
                  alt={`Instagram post ${i}`}
                  className="w-full h-full object-cover"
                />
              </a>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="default" size="lg">
              Instagramをフォロー
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}