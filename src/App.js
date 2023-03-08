import { useEffect, useState } from "react";
import "./App.scss";
import ProductCard from "./components/product-card/product-card.component";

function App() {
  const [storeItems, setStoreItems] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setStoreItems(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      {storeItems.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  );
}

export default App;
