export const OnePieceFruitCard = ({ id, roman_name, filename }) => {
  return (
    <section style={{ height: 200, display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h2 className="text-capitalize">#{id} - {roman_name}</h2>

      {/* Imagen de la fruta */}
      <div>
        <img src={filename} alt={roman_name} style={{ maxWidth: "100%", height: "auto" }} />
      </div>
    </section>
  );
};
