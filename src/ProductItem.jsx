const ProductItem = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      quantity: 1,
      price: product.price,
    });
  };

  return (
    <Card>
      <Card.Title>{product.name}</Card.Title>
      <Card.Text>{product.description}</Card.Text>
      <Button onClick={handleAddToCart}>Add to Cart</Button>
    </Card>
  );
};

