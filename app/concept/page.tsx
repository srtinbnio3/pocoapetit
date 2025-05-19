import Navigation from '@/components/ui/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Utensils, Wine, Leaf } from 'lucide-react';
import Footer from '@/components/ui/footer';

export default function ConceptPage() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[50vh]">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/ConceptHeroSection.JPG"
            alt="Concept header"
            className="w-full h-full object-cover object-[100%_0%] scale-125 md:object-[50%_20%] md:scale-125"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <h1 className="heading-xl text-white">Concept</h1>
        </div>
      </section>

      {/* Main Concept Section */}
      <section className="py-24 bg-white">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="heading-md mb-8">"少しずつ色々楽しむ"</h2>
            <p className="text-lg leading-relaxed mb-8">
              福岡市桜坂の閑静な住宅街の中にある、カジュアルフレンチレストラン「POCO A PETIT」。
              <br />
              名物の【9種の前菜小鉢プレート】をはじめ、少しずつ様々な味わいをお楽しみいただける
              料理の数々で、特別な食事のひとときをご提供いたします。
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
            <div className="relative aspect-[4/3]">
              <img
                src="/IMG_4128.JPG"
                alt="Restaurant ambiance"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div>
              <h3 className="heading-md mb-6">心地よい空間で</h3>
              <p className="text-lg leading-relaxed">
                桜坂の閑静な住宅街に佇む一軒家レストラン。
                <br />
                落ち着いた雰囲気の中で、ゆったりとしたお時間をお過ごしください。
                <br />
                大切な方との特別な日に、日常の贅沢として、
                様々なシーンでご利用いただけます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted">
        <div className="container-custom max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-8 text-center">
                <Utensils className="w-12 h-12 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-serif mb-4">名物の前菜プレート</h3>
                <p className="text-muted-foreground">
                  9種の前菜小鉢プレートは、シェフの創意工夫が詰まった自慢の一品。
                  <br />
                  様々な味わいを少しずつお楽しみいただけます。
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-8 text-center">
                <Wine className="w-12 h-12 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-serif mb-4">カジュアルなワイン</h3>
                <p className="text-muted-foreground">
                  ソムリエが厳選した、気軽に楽しめるワインをご用意。
                  <br />
                  お料理に合わせたペアリングもご提案いたします。
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-8 text-center">
                <Leaf className="w-12 h-12 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-serif mb-4">新鮮な食材</h3>
                <p className="text-muted-foreground">
                  農家さんから直接仕入れる旬の野菜を中心に、
                  季節の食材を活かした料理をご提供いたします。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="aspect-square">
              <img
                src="/GallerySection1.jpeg"
                alt="Dish presentation"
                className="w-full h-full object-cover object-[30%_center] rounded-lg"
              />
            </div>
            <div className="aspect-square">
              <img
                src="/GallerySection2.jpeg"
                alt="Restaurant interior"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="aspect-square">
              <img
                src="/GallerySection3.jpeg"
                alt="Wine selection"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="aspect-square">
              <img
                src="/GallerySection4.JPG"
                alt="Gallery image 4"
                className="w-full h-full object-cover object-[100%_0%] rounded-lg"
              />
            </div>
            <div className="aspect-square">
              <img
                src="/GallerySection5.JPG"
                alt="Gallery image 5"
                className="w-full h-full object-cover object-[90%_0%]  rounded-lg"
              />
            </div>
            <div className="aspect-square">
              <img
                src="/GallerySection7.JPG"
                alt="Gallery image 7"
                className="w-full h-full object-cover object-[0%_100%] rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}