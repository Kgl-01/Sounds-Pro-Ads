import "./product-card.styles.scss";

const ProductCard = ({ item }) => {
  const { title, image, price } = item;
  return (
    <div className="product-card">
      <img className="product-image" src={`${item.image}`} />
      <div className="title">{item.title}</div>
      <span className="price">{item.price}</span>
    </div>
  );
};

export default ProductCard;
