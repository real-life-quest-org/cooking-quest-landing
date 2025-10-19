# ミニLP — 献立提案ツール（最小構成）

このワークスペースには、Next.js のミニLP と、事前登録を受け取る簡単な API（Prisma + SQLite）が含まれます。デザインは極力シンプルです。

前提:
- Node.js と npm/yarn がインストールされていること

素早く試す手順:

1. 依存をインストール

```bash
npm install
```

2. Prisma のセットアップ（SQLite を使います）

```bash
npx prisma generate
npx prisma db push
```

3. 開発サーバーを起動

```bash
npm run dev
```

4. 開いて確認: http://localhost:3000

注意:
- 本例はローカル SQLite を前提にしており、実運用では環境変数や本番用データベース（Postgres 等）に切り替えてください。

デプロイ時の環境変数設定（Vercel / GitHub Actions）

1. Vercel

 - Vercel ダッシュボード -> Projects -> 対象プロジェクト -> Settings -> Environment Variables
 - KEY: `DATABASE_URL`  VALUE: `postgres://<user>:<password>@<host>:5432/<db>?sslmode=require`
 - （必要なら）KEY: `PRISMA_DATABASE_URL` に Prisma Data Platform 用の URL を設定

2. GitHub Actions (CI)

 - リポジトリ Settings -> Secrets -> Actions に `DATABASE_URL` を登録
 - workflow 内で `secrets.DATABASE_URL` を参照して `npx prisma generate` と `npm run build` を実行

これによりデプロイ時に Prisma Client が正しい DB に接続されます。
