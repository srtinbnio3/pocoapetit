# POCO A PETIT ウェブサイト要件定義書

## 1. プロジェクト概要

### 1.1 プロジェクトの目的

- 福岡・桜坂の創作和フレンチレストラン「POCO A PETIT」の公式ウェブサイトを制作
- ブランドの世界観を表現し、予約導線の最適化を図る

### 1.2 参考サイト

- デザイン・構成参考：https://www.ristorante-fanfare.com/
- 予約システム連携：TableCheck
- SNS連携：Instagram

## 2. 機能要件

### 2.1 ページ構成

1. **トップページ**
    - ヒーローセクション（フルスクリーン画像スライダー）
    - コンセプト
    - メニュー概要
    - 店舗情報
    - インスタグラムフィード連携
2. **メニューページ**
    - ランチコース
    - ディナーコース
    - カヌレ(TakeOut)
    - 写真ギャラリー
3. **アクセスページ**
    - 地図（Google Maps埋め込み）
    - 詳細な店舗情報
    - 営業時間
    - 駐車場情報
4. 採用情報ページ
5. お問い合わせページ

### 2.2 共通機能

- ヘッダー
    - ロゴ
    - ナビゲーションメニュー
    - 予約ボタン（TableCheckリンク）
- フッター
    - SNSリンク
    - 店舗基本情報
    - プライバシーポリシー
    - サイトマップ

## 3. 非機能要件

### 3.1 技術仕様

- **フレームワーク**：Next.js 13
- **UIライブラリ**：
    - Tailwind CSS
    - Shadcn/ui
- **ビルド方式**：SSG（Static Site Generation）

### 3.2 パフォーマンス要件

- Lighthouse スコア
    - パフォーマンス：90以上
    - アクセシビリティ：90以上
    - SEO：95以上

### 3.3 レスポンシブ対応

- ブレイクポイント
    - モバイル：〜767px
    - タブレット：768px〜1023px
    - デスクトップ：1024px〜

### 3.4 ブラウザ対応

- モダンブラウザ最新版
    - Chrome
    - Safari
    - Firefox
    - Edge

## 4. デザイン要件

### 4.1 カラーパレット

- プライマリーカラー：#013984
- セカンダリーカラー：白
- アクセントカラー：オレンジよりの黄色

### 4.2 タイポグラフィ

- 和文フォント：未定
- 欧文フォント：未定

### 4.3 デザインコンセプト

- モダンで上質な和フレンチの世界観を表現
- 写真を活かしたミニマルなデザイン 