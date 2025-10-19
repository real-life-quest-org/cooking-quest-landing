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
