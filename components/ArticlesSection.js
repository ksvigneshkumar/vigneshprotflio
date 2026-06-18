import styles from './ArticlesSection.module.css'

const articles = [
  { tag: 'Full Stack', title: 'Building a REST API with Django REST Framework', desc: 'Step-by-step walkthrough of designing, building, and deploying a production-ready Django REST API with authentication, serializers, and viewsets.', time: '8 min', year: '2025' },
  { tag: 'AI / LLM', title: 'RAG Architecture in Production: Lessons from Gemini', desc: 'Practical lessons from implementing Retrieval-Augmented Generation in a real product — chunking strategies, embedding models, and retrieval tuning.', time: '12 min', year: '2025' },
  { tag: 'React / Next.js', title: 'Next.js 14 App Router: Real-World Patterns', desc: 'Beyond the docs — practical patterns for data fetching, error boundaries, and performance optimization when shipping production Next.js apps.', time: '10 min', year: '2025' },
  { tag: 'IoT + ML', title: 'Smart Agriculture: IoT Sensors + Machine Learning', desc: 'How I built a plant disease detection system using Python ML models, soil sensors, and automated irrigation — from prototype to working system.', time: '9 min', year: '2025' },
]

export default function ArticlesSection() {
  return (
    <section className={`page-section ${styles.articles}`} id="articles">
      <div className="gblur" style={{ width: 300, height: 300, background: 'rgba(16,185,129,0.06)', top: '10%', right: '10%' }} />
      <div className="sec-label reveal-up">featured articles</div>
      <h2 className="sec-title reveal-up">What I Write About</h2>
      <p className="sec-sub reveal-up">Thoughts on full-stack development, AI, and the craft of building software.</p>
      <div className={styles.grid}>
        {articles.map((a, i) => (
          <div key={i} className={`${styles.card} reveal-up`} style={{ transitionDelay: `${i * 0.1}s` }}>
            <div className={styles.tag}>{a.tag}</div>
            <div className={styles.title}>{a.title}</div>
            <p className={styles.desc}>{a.desc}</p>
            <div className={styles.meta}>
              <span>📅 {a.year}</span>
              <span>⏱ {a.time}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
