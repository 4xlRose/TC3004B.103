import { useFetch } from "../hooks/useFetch";
import { useCounter } from "../hooks/useCounter";
import { LoadingMessage } from "./Loading";
import { OnePieceFruitCard } from "./Card";

export const CustomHook = () => {
  const { counter, decrement, increment } = useCounter(1);
  console.log(counter);
  const url = `https://api.api-onepiece.com/v2/fruits/en/${counter}`;
  const { data, error, loading } = useFetch(url);

  return (
    <>
      <h1>Información de Frutas del Diablo</h1>
      <hr />

      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
        <button className="btn btn-primary" onClick={decrement}>
          Anterior
        </button>
        <button className="btn btn-primary" onClick={increment}>
          Siguiente
        </button>
      </div>

      {loading && <LoadingMessage />}
      {error && <p>Error: {error}</p>}
      {data && (
        <OnePieceFruitCard
          id={counter}
          roman_name={data.roman_name}
          filename={data.filename}
        />
      )}
    </>
  );
};
