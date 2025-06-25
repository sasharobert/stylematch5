import { useState } from "react";

export default function Home() {
  const [occasion, setOccasion] = useState("");
  const [look, setLook] = useState(null);

  const outfits = {
    casual: ["Футболка", "Джинсы", "Кеды"],
    office: ["Рубашка", "Брюки", "Лоферы"],
    party: ["Платье", "Туфли", "Клатч"],
    sport: ["Худи", "Легинсы", "Кроссовки"]
  };

  const handleGenerate = () => {
    const key = Object.keys(outfits).find(k =>
      occasion.toLowerCase().includes(k)
    ) || "casual";
    setLook(outfits[key]);
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif", textAlign: "center" }}>
      <h1>StyleMatch MVP</h1>
      <p>Введите повод (офис, спорт...)</p>
      <input
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        placeholder="Куда вы идёте?"
        style={{ padding: "0.5rem", borderRadius: "5px", border: "1px solid #ccc" }}
      />
      <br />
      <button
        onClick={handleGenerate}
        style={{ marginTop: "1rem", padding: "0.5rem 1rem" }}
      >
        Подобрать образ
      </button>
      {look && (
        <ul style={{ marginTop: "1.5rem", listStyle: "none", padding: 0 }}>
          {look.map((item, i) => (
            <li key={i}>✔️ {item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
