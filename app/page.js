export default function Home() {
    return (
        <>
            <div class="container">
                <header aria-label="サイトヘッダー">
                    <div class="brand">
                        <div class="logo" aria-hidden="true">
                            {/* ミニチーズアイコン */}
                            <svg viewBox="0 0 64 64" role="img" aria-label="Cheese icon">
                                <path d="M6 26c14-8 28-12 52-12v26c0 4-3 8-8 8H14c-4 0-8-4-8-8V26z" fill="#ffde59" />
                                <path d="M58 14c-10 0-20 2-30 6-5 2-9 4-14 6v16c0 2 2 4 4 4h36c2 0 4-2 4-4V14z" fill="#f5c63a" />
                                <g fill="#c9990f">
                                    <circle cx="22" cy="40" r="3" />
                                    <circle cx="38" cy="36" r="4" />
                                    <circle cx="48" cy="44" r="2.5" />
                                </g>
                            </svg>
                        </div>
                        <h1>Sumire Portfolio</h1>
                    </div>
                    <nav aria-label="グローバルナビ">
                        <a href="#works">Works</a>
                        <a href="#about">About</a>
                        <a href="#contact">Contact</a>
                    </nav>
                </header>

                <main>
                    <section class="hero" aria-labelledby="hero-title">
                        <div class="panel">
                            <span class="badge">Sumireのポートフォリオサイトです</span>
                            <h2 id="hero-title">私の作品と人となりをまとめていきます！まだ何もないけど！
                            </h2>
                            <p>
                                ポートフォリオを載せていく。予定。
                            </p>
                            <div class="actions">
                                <a class="btn primary" href="#works">作品を見る</a>
                                <a class="btn" href="#about">自己紹介</a>
                            </div>
                        </div>

                        <div class="cheese-card" aria-hidden="true">
                            <img
                                src="/images/ポートフォリオ用_背景透過.png"
                                alt="私のイラスト"
                                style={{ width: "100%", height: "auto" }}
                            />
                        </div>
                    </section>

                    <section id="works" aria-labelledby="works-title">
                        <h2 id="works-title">Works</h2>
                        <div class="grid" role="list">
                            <article class="card" role="listitem">
                                <span class="tag">Java / Training</span>
                                <h3>自慢</h3>
                                <p class="muted">チーズが好きすぎて常に家にチーズがある</p>
                                <a class="btn" href="#" aria-label="チーズ好きへの詳細へ">詳細をみる</a>
                            </article>
                            <article class="card" role="listitem">
                                <span class="tag">Web</span>
                                <h3>Next.jsを試してみた</h3>
                                <p class="muted">可愛い後輩にNext.jsをお勧めされたので頑張って試した</p>
                                <a class="btn" href="#" aria-label="認証サンプルの詳細へ">詳細をみる</a>
                            </article>
                            <article class="card" role="listitem">
                                <span class="tag">Note</span>
                                <h3>イラスト自慢</h3>
                                <p class="muted">ゆるい絵を使って活躍できるかもしれない。</p>
                                <a class="btn" href="#" aria-label="イラスト自慢の詳細へ">詳細をみる</a>
                            </article>
                        </div>
                    </section>

                    <section id="about" aria-labelledby="about-title">
                        <h2 id="about-title">About</h2>
                        <div class="panel">
                            <p>
                                教育系のSEやってます。漫画やイラストも描いてます。
                            </p>
                            <p class="muted">好きなもの：チーズ</p>
                        </div>
                    </section>

                    <section id="contact" aria-labelledby="contact-title">
                        <h2 id="contact-title">Contact</h2>
                        <div class="panel">
                            <div class="actions">
                                <a class="btn" href="https://github.com/Sumire2125/" aria-label="GitHubへ">GitHub</a>
                                <a class="btn" href="https://x.com/Sumirecheese" aria-label="Xへ">X</a>
                            </div>
                        </div>
                    </section>
                </main>

                <footer>
                    © <span id="y"></span> Sumire Aoki
                </footer>
            </div>
        </>
    );
}
