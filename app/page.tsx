import { Suspense } from 'react';
import Image from 'next/image';
import Navigation from '@/components/ui/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Phone, Instagram } from 'lucide-react';
import Footer from '@/components/ui/footer';
import { getInstagramFeed, type InstagramPost } from '@/lib/instagram';
import Loading from '@/components/ui/loading';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

export default async function Home() {
  // 一時的にInstagram投稿の取得を無効化
  const instagramPosts: InstagramPost[] = [];

  return (
    <Suspense fallback={<Loading />}>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/IMG_4128.JPG"
            alt="POCO A PETIT"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative h-full flex items-center justify-center text-white text-center">
          <div>
            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-medium tracking-wider mb-6">
              <span className="md:hidden text-center block">
                POCO
                <br />
                A
                <br />
                PETIT
              </span>
              <span className="hidden md:inline">POCO A PETIT</span>
            </h1>
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
              <Image
                src="/IMG_4136.JPG"
                alt="Restaurant interior"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="heading-md mb-6">Concept</h2>
              <p className="text-lg mb-6 leading-relaxed">
                "少しずつ色々楽しむ"をコンセプトに
                <br />
                名物の【9種の前菜小鉢プレート】をはじめ
                様々な味わいを一度にお楽しみいただける料理の数々をご提供いたします。
                <br />
                <br />
                桜坂の閑静な住宅街に佇む小さなレストランで落ち着いた雰囲気の中
                大切な方との特別な日に、また日常の贅沢として、心に残るお食事のひとときをご堪能ください。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Overview Section */}
      <section className="py-24 bg-muted">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-12">Menu</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <img
                  src="/(ランチ限定)《3800yen》ライトコース　(5:1〜).jpg"
                  alt="Light Course"
                  className="w-full aspect-[4/3] object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-serif mb-2">(ランチ限定)ライトコース</h3>
                <p className="text-muted-foreground mb-4">
                  カジュアルに当店のお料理をお楽しみいただけるランチ限定のライトコースです。
                  <br />
                  旬のお野菜を美味しさを活かすフレンチベースに和食のエッセンスを散りばめたお料理。
                  <br />
                  12品のお料理と3品のデザートを少しずつ様々な味わいをご堪能ください。
                </p>
                <p className="font-serif text-lg">¥3,800</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <img
                  src="/(ランチ:ディナー共通)《5500yen》スタンダードコース(5:1〜).jpg"
                  alt="Standard Course"
                  className="w-full aspect-[4/3] object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-serif mb-2">スタンダードコース</h3>
                <p className="text-muted-foreground mb-4">
                  クマのモナカを使用したアミューズ、メインディッシュのお肉料理、デザートまで当店の魅力を最大限楽しめるコースです。
                  <br />
                  旬のお野菜を美味しさを活かすフレンチベースに和食のエッセンスを散りばめたお料理。
                  <br />
                  14品のお料理と4品のデザートを少しずつ様々な味わいをご堪能ください。
                </p>
                <p className="font-serif text-lg">¥5,500</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <img
                  src="/(ランチ:ディナー共通)《6600yen》メインディッシュ「牛ホホ肉赤ワイン煮」コース(5:1〜).jpg"
                  alt="Beef Cheek Course"
                  className="w-full aspect-[4/3] object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-serif mb-2">メインディッシュ「牛ホホ肉赤ワイン煮」コース</h3>
                <p className="text-muted-foreground mb-4">
                  スタンダードコースのメインディッシュお肉料理を「国産牛ほほ肉の赤ワイン煮込み」でお楽しみいただける特別なコースです。
                  <br />
                  旬のお野菜を美味しさを活かすフレンチベースに和食のエッセンスを散りばめたお料理。
                  <br />
                  14品のお料理と4品のデザートを少しずつ様々な味わいをご堪能ください。
                </p>
                <p className="font-serif text-lg">¥6,600</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <img
                  src="/【TAKE OUT】sobacoカヌレ.jpeg"
                  alt="Sobaco Canelé"
                  className="w-full aspect-[4/3] object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-serif mb-2">【TAKE OUT】sobacoカヌレ</h3>
                <p className="text-muted-foreground mb-4">
                  当店のスペシャリテである蕎麦粉のカヌレです。
                  <br />
                  蕎麦粉とラム酒が合わさる事で唯一無二の香りを楽しめ
                  <br />
                  外はカリッと、中はしっとり食感にこだわったカヌレです。
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.9797367238248!2d130.38439247637405!3d33.57987537333846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x354193b2162cbac7%3A0x41c4e08711f30949!2zUE9DTyBBIFBFVElUKOODneOCs-OCouODmuODhuOCoynmoZzlnYI!5e0!3m2!1sja!2sjp!4v1742553678193!5m2!1sja!2sjp"
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
                    <p>〒810-0024 福岡県福岡市中央区桜坂２丁目７−１１ Ｙｏｓｈｉｄａ Ｈｏｕｓｅ 101</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-serif text-lg mb-2">営業時間</h3>
                    <p>ランチ：12:00一斉スタートのみです</p>
                    <p>ディナー：18:00〜19:00の間でお好きなお時間をお選びいただけます<br />定休日：不定休です、営業日は<a href="https://www.instagram.com/poco_a_petit/" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:underline">Instagram</a>からご確認ください</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-serif text-lg mb-2">ご予約</h3>
                    <p>TableCheckから24時間受付中。空席情報もこちらからご確認いただけます。</p>
                  </div>
                </div>
                <Button size="lg" className="w-full" asChild>
                  <a
                    href="https://www.tablecheck.com/ja/shops/pocoapetit/reserve"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    オンライン予約
                  </a>
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
          <div className="text-center mt-8">
            <a
              href="https://www.instagram.com/poco_a_petit/"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({
                  variant: "default",
                  size: "lg",
                }),
                "no-underline"
              )}
            >
              Instagramをフォロー
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </Suspense>
  );
}