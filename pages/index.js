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
    const items = outfits[key];
    setLook(items);
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif", textAlign: "center" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>StyleMatch MVP</h1>
      <p style={{ fontSize: "1.1rem", marginBottom: "2rem" }}>
        Введ
