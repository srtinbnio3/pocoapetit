/*
 * このページは一時的に非表示となっています。
 * ナビゲーションメニューからも削除されています。
 * 必要に応じて再度有効化することができます。
 */

import Navigation from '@/components/ui/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Footer from '@/components/ui/footer';

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
          <h1 className="heading-xl text-white">Recruit</h1>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-serif mb-4">社員募集</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-2">■業務内容</h4>
                    <p>調理業務、サービス業務</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">■勤務時間</h4>
                    <p>9：00～23：00　実働8Hのシフト制／時間外勤務あり</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">■給与</h4>
                    <p>月給23万円～　（試用期間：アルバイト雇用）</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">■賞与</h4>
                    <p>年2回</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">■諸手当</h4>
                    <p>残業手当、深夜手当、通勤交通費支給</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">■休日・休暇</h4>
                    <p>週休二日制、夏季休暇、年末年始休暇、シフト制<br />
                    有給休暇　入社後6カ月後より年間10日～</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">■その他</h4>
                    <ul className="space-y-1">
                      <li>・試用期間あり（3カ月～）</li>
                      <li>・社会保険完備</li>
                      <li>・1日6時間以上勤務の場合賄いあり</li>
                      <li>・昇給、賞与は本人実績、会社実績による</li>
                      <li>・ソムリエ有資格者、ワインに詳しい方歓迎</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-serif mb-4">アルバイト募集</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-2">■業務内容</h4>
                    <ul className="space-y-1">
                      <li>A：ホール業務</li>
                      <li>B：キッチン業務（食材の切り出しや仕込み）</li>
                      <li>C：清掃、皿洗い、片付けなど</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">■勤務時間</h4>
                    <p>10:00～23:00の間で、1日5時間～相談可能</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">■給与</h4>
                    <p>時給1000円～</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">■諸手当</h4>
                    <p>残業手当、深夜手当、通勤交通費支給（上限1日500円）</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">■休日・休暇</h4>
                    <p>シフト制</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">■その他</h4>
                    <ul className="space-y-1">
                      <li>・試用期間あり（1カ月～）</li>
                      <li>・勤務条件に応じて保険加入</li>
                      <li>・1日6時間以上勤務の場合賄いあり</li>
                      <li>・昇給は本人実績による</li>
                      <li>・ソムリエ有資格者、ワインに詳しい方歓迎</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Application Form */}
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <form className="space-y-8">
                  <div className="space-y-4">
                    <Label htmlFor="position">希望職種</Label>
                    <RadioGroup defaultValue="社員" id="position" className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="社員" id="employee" />
                        <Label htmlFor="employee">社員</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="アルバイト" id="parttime" />
                        <Label htmlFor="parttime">アルバイト</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-4">
                    <Label htmlFor="name">お名前</Label>
                    <Input id="name" placeholder="山田 太郎" required />
                  </div>

                  <div className="space-y-4">
                    <Label htmlFor="kana">フリガナ</Label>
                    <Input id="kana" placeholder="ヤマダ タロウ" required />
                  </div>

                  <div className="space-y-4">
                    <Label htmlFor="phone">ご連絡先TEL</Label>
                    <Input id="phone" type="tel" placeholder="090-XXXX-XXXX" required />
                  </div>

                  <div className="space-y-4">
                    <Label htmlFor="email">メールアドレス</Label>
                    <Input id="email" type="email" placeholder="example@email.com" required />
                  </div>

                  <div className="space-y-4">
                    <Label htmlFor="message">志望動機や自己PR</Label>
                    <Textarea
                      id="message"
                      placeholder="志望動機や自己PRを記入してください"
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    応募する
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}