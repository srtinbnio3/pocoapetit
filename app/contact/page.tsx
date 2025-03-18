import Navigation from '@/components/ui/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function ContactPage() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[50vh]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1587560699334-cc4ff634909a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Contact header"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <h1 className="heading-xl text-white">Contact</h1>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-white">
        <div className="container-custom max-w-3xl">
          <Card>
            <CardContent className="p-8">
              <form className="space-y-8">
                <div className="space-y-4">
                  <Label htmlFor="name">お名前</Label>
                  <Input id="name" placeholder="山田 太郎" required />
                </div>
                
                <div className="space-y-4">
                  <Label htmlFor="email">メールアドレス</Label>
                  <Input id="email" type="email" placeholder="example@email.com" required />
                </div>
                
                <div className="space-y-4">
                  <Label htmlFor="phone">電話番号</Label>
                  <Input id="phone" type="tel" placeholder="090-XXXX-XXXX" />
                </div>
                
                <div className="space-y-4">
                  <Label htmlFor="subject">件名</Label>
                  <Input id="subject" placeholder="お問い合わせ内容の件名" required />
                </div>
                
                <div className="space-y-4">
                  <Label htmlFor="message">メッセージ</Label>
                  <Textarea
                    id="message"
                    placeholder="お問い合わせ内容をご記入ください"
                    rows={6}
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full">
                  送信する
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}