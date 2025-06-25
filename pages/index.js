import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);

  const looks = {
    офис: ["Рубашка", "Брюки", "Лоферы"],
    спорт: ["Худи", "Легинсы", "Кроссовки"],
    вечеринка: ["Платье", "Туфли", "Клатч"],
    повседневно: ["Футболка", "Джинсы", "Кеды"],
  };

  const generate = () => {
    const key = Object.keys(looks).find(k =>
      text.toLowerCase().includes(k)
    );
    setItems(looks[key] || looks["повседневно"]);
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif", textAlign: "center" }}>
      <h1>StyleMatch MVP</h1>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Например: офис, спорт, вечеринка..."
        style={{ padding: "0.5rem", width: "300px", marginBottom: "1rem" }}
      />
      <br />
      <button
        onClick={generate}
        style={{ padding: "0.5rem 1rem", cursor: "pointer" }}
      >
        Подобрать образ
      </button>
      <ul style={{ marginTop: "2rem", listStyle: "none", padding: 0 }}>
        {items.map((item, i) => (
          <li key={i}>✔️ {item}</li>
        ))}
      </ul>
    </div>
  );
}
