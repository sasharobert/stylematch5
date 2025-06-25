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
    const key = Object.keys(outfits).find(k => occasion.toLowerCase().includes(k)) || "casual";
    const items = outfits[key];
    setLook(items);
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif", textAlign: "center" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>StyleMatch MVP</h1>
      <p style={{ fontSize: "1.1rem", marginBottom: "2rem" }}>
        Введите повод (например: "офис", "вечеринка", "спорт", "повседневно") и получите готовый образ.
      </p>
      <input
        type="text"
        placeholder="Куда вы идёте?"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        style={{
          padding: "0.5rem 1rem",
          fontSize: "1rem",
          borderRadius: "0.5rem",
          border: "1px solid #ccc",
          width: "300px"
        }}
      />
      <br />
      <button
        onClick={handleGenerate}
        style={{
          marginTop: "1rem",
          padding: "0.75rem 2rem",
          fontSize: "1rem",
          borderRadius: "0.5rem",
          backgroundColor: "black",
          color: "white",
          cursor: "pointer"
        }}
      >
