import "./product-card.styles.scss";

const ProductCard = ({ item }) => {
  const { title, image, price } = item;
  return (
    <div className="product-card">
      <img className="product-image" alt={title} src={`${image}`} />
      <div className="title">{title}</div>
      <span className="price">{price}</span>
    </div>
  );
};

export default ProductCard;
