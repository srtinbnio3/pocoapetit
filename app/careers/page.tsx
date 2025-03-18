import Navigation from '@/components/ui/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChefHat, Utensils, GraduationCap } from 'lucide-react';

export default function CareersPage() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[50vh]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1577106263724-2c8e03bfe9cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Careers header"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <h1 className="heading-xl text-white">Careers</h1>
        </div>
      </section>

      {/* Message Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-md mb-6">一緒に創り上げる美食の世界</h2>
            <p className="text-lg leading-relaxed mb-8">
              POCO A PETITは、料理への情熱と探究心を持った仲間を募集しています。
              フランス料理の伝統と和の技法を融合させた独創的な料理を、
              お客様に提供する喜びを分かち合える方をお待ちしています。
            </p>
          </div>
        </div>
      </section>

      {/* Positions Section */}
      <section className="py-24 bg-muted">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-12">募集職種</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-8">
                <ChefHat className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-xl font-serif mb-4">シェフ・調理スタッフ</h3>
                <ul className="space-y-4 mb-6">
                  <li>・経験：3年以上</li>
                  <li>・フランス料理の基礎知識</li>
                  <li>・創作意欲のある方</li>
                </ul>
                <Button variant="outline" className="w-full">
                  詳細を見る
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <Utensils className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-xl font-serif mb-4">サービススタッフ</h3>
                <ul className="space-y-4 mb-6">
                  <li>・経験：2年以上</li>
                  <li>・ワインの知識</li>
                  <li>・接客が好きな方</li>
                </ul>
                <Button variant="outline" className="w-full">
                  詳細を見る
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <GraduationCap className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-xl font-serif mb-4">見習い・研修生</h3>
                <ul className="space-y-4 mb-6">
                  <li>・未経験可</li>
                  <li>・料理への情熱</li>
                  <li>・向上心のある方</li>
                </ul>
                <Button variant="outline" className="w-full">
                  詳細を見る
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}