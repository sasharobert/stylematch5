export default function Home() {
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif", textAlign: "center" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>StyleMatch</h1>
      <p style={{ fontSize: "1.2rem", maxWidth: "600px", margin: "0 auto 2rem" }}>
        Умное приложение, которое подбирает стильные образы из вашего гардероба или по картинке — 
        и позволяет купить всё в один клик через маркетплейсы.
      </p>
      <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap", marginBottom: "2rem" }}>
        <div style={{ background: "#fff", padding: "1rem", borderRadius: "1rem", width: "250px", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}>
          <h2>👕 Виртуальный гардероб</h2>
          <p>Загрузи фото своей одежды — и получай готовые луки по любому поводу.</p>
        </div>
        <div style={{ background: "#fff", padding: "1rem", borderRadius: "1rem", width: "250px", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}>
          <h2>🧠 AI-стилист</h2>
          <p>Алгоритм подбирает модные образы с учётом сезона и событий.</p>
        </div>
        <div style={{ background: "#fff", padding: "1rem", borderRadius: "1rem", width: "250px", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}>
          <h2>🛍️ Покупка в 1 клик</h2>
          <p>Собери весь образ и купи на Wildberries или OZON — быстро и просто.</p>
        </div>
      </div>
      <a href="#" style={{ display: "inline-block", padding: "1rem 2rem", backgroundColor: "black", color: "white", borderRadius: "0.75rem", textDecoration: "none" }}>
        🚀 Попробовать прототип
      </a>
      <footer style={{ marginTop: "3rem", fontSize: "0.8rem", color: "gray" }}>
        © 2025 StyleMatch. Все права защищены.
      </footer>
    </div>
  );
}
