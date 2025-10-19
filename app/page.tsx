"use client";

import React, { useState } from 'react';

export default function Page() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    try {
      const res = await fetch('/api/prereg', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  }

  const accent = '#D66A3A';
  const muted = '#6B5B53';

  return (
    <main className="container" style={{ minHeight: '100vh' }}>
      <header className="header-card">
        <div className="header-row">
          <div className="hero-image">
            <img src="/images/meal-question.png" alt="献立アイコン" style={{ width: 72, height: 72, objectFit: 'contain' }} />
          </div>
          <div>
            <h1 className="header-title">今日の献立、もう悩まない。</h1>
            <p className="header-sub">あなたの作れる料理の中から、ボタン一つで献立を提案するツールを作っています。</p>
          </div>
        </div>
        <a href="#signup" className="cta">事前登録して、完成を待つ</a>
      </header>
      <section className="card">
        <h2 style={{ fontSize: 22, margin: '0 0 16px', fontWeight: 700 }}>「今日の夜ご飯、何作ろう…」</h2>
        <ul style={{ margin: 0, paddingLeft: 24, color: muted, lineHeight: 1.8 }}>
          <li>毎日「何作ろう」と考えるのに、正直うんざりしている。</li>
          <li>結局いつも同じメニューになりがちで、料理が楽しくない。</li>
          <li>レシピを探すのが面倒で、自炊のやる気がなくなってしまう。</li>
        </ul>
      </section>

  <section className="card">
        <h2 style={{ fontSize: 22, margin: '0 0 12px', fontWeight: 700 }}>それを「献立提案ツール」で解決します。</h2>
        <p style={{ margin: 0, color: muted, lineHeight: 1.8 }}>このツールは、あなたの料理レパートリーをゼロから育てるお手伝いをします。最初に覚えるべき、一番簡単な「ワザ」から提案するので、料理をしたことがない人でも大丈夫。あなたの作れる料理が、少しずつ増えていきます。</p>
      </section>

  <section className="card">
        <h2 style={{ fontSize: 22, margin: '0 0 16px', fontWeight: 700 }}>冒険の始め方</h2>
        <ol className="step-list" style={{ margin: 0, paddingLeft: 24, color: muted, lineHeight: 1.8 }}>
          <li><strong>最初のクエストに挑戦:</strong> 「まずはお米を炊いてみよう」のような、一番簡単なクエストから始まります。</li>
          <li><strong>「ワザ」を覚える:</strong> クエストをクリアすると、あなたの「ワザ帳（＝レパートリー）」に新しい料理が記録されます。</li>
          <li><strong>献立の提案を受ける:</strong> 覚えた「ワザ」の中から、ボタン一つで今日の献立を提案します。</li>
        </ol>
      </section>

  <section className="card">
        <h2 style={{ fontSize: 22, margin: '0 0 16px', fontWeight: 700 }}>不健康な食生活の友達を見て、思ったこと。</h2>
        <p style={{ margin: '0 0 12px', color: muted, lineHeight: 1.8 }}>僕の友達に、冷蔵庫はいつも空っぽで、外食ばかりしている子がいます。料理や洗い物が嫌いで、健康が心配です。</p>
        <p style={{ margin: 0, color: muted, lineHeight: 1.8 }}>僕は、彼のような「やる気が湧かない」人でも、無理なく自炊を始められるツールが作れないかと考えました。これは、そんな僕の友達と、そして僕自身が本当に欲しいと思ったから作っているツールです。</p>
      </section>

      <section id="signup" className="card">
        <h2 style={{ fontSize: 22, margin: '0 0 12px', fontWeight: 700 }}>最初のプレイヤーを、募集します。</h2>
        <p style={{ margin: '0 0 16px', color: muted, lineHeight: 1.8 }}>まだ開発中ですが、完成したら一番にお知らせします。もし「これ、使ってみたいかも」と思ったら、メールアドレスを登録してお待ちください。</p>

  <form onSubmit={handleSubmit} style={{ marginTop: 16 }}>
          <label style={{ display: 'block', marginBottom: 8, color: muted, fontWeight: 600 }}>
            メールアドレス
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
            style={{ display: 'block', width: '100%', maxWidth: 420, padding: 12, borderRadius: 8, border: '1px solid #ddd', fontSize: 16, boxSizing: 'border-box', marginBottom: 12 }}
          />
          <button type="submit" disabled={status === 'loading'} style={{ padding: '12px 24px', borderRadius: 8, border: 'none', background: accent, color: '#fff', fontWeight: 600, fontSize: 16, cursor: 'pointer', boxShadow: '0 6px 18px rgba(214,106,58,0.18)' }}>
            完成通知を受け取る
          </button>

          {status === 'success' && <p style={{ color: 'green', marginTop: 12 }}>登録が完了しました。ありがとうございます。</p>}
          {status === 'error' && <p style={{ color: 'red', marginTop: 12 }}>登録に失敗しました。時間をおいて再度お試しください。</p>}

          <p style={{ color: '#999', marginTop: 12, fontSize: 14 }}>迷惑メールは送りません。サービスの完成通知以外には使用しません。</p>
        </form>
      </section>

      <footer style={{ textAlign: 'center', padding: '24px 0', color: '#667085' }}>
        <p style={{ margin: 0, lineHeight: 1.8 }}>
          このツールは、僕が構想している『リアルライフクエスト』という、日常全体をゲーム化するプロジェクトの、最初の機能です。もし、その全体像に興味があれば、
          <a href="https://real-life-quest-landing.vercel.app/" style={{ color: accent, textDecoration: 'none', fontWeight: 600 }}>こちらもご覧ください</a>。
        </p>
      </footer>
    </main>
  );
}
