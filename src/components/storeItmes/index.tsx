import { Card, Button } from "react-bootstrap";
import { formatCurrency } from "../../utils/formatterCurrency";
import { useShoppingCart } from "../../context/shoppingCartContext";

type StoreItemsProps = {
  id: number;
  name: string;
  price: number;
  img: string;
};

export function StoreItems({ name, price, id, img }: StoreItemsProps) {
  const { getQuantity, increaseQuantity, decreaseQuantity, removeFromCart } =
    useShoppingCart();
  const quantity = getQuantity(id);
  return (
    <>
      <Card style={{ cursor: "pointer" }}>
        <Card.Img
          variant="top"
          height="300px"
          width="300px"
          style={{ objectFit: "cover", padding: "16px" }}
          src={img}
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
            <span className="fs-5">{name}</span>
            <span className="ms-2 text-muted">{formatCurrency(price)}</span>
          </Card.Title>
          <div className="mt-auto">
            {quantity <= 0 ? (
              <Button className="w-100" onClick={() => increaseQuantity(id)}>+ Add To Cart</Button>
            ) : (
              <div
                className="d-flex align-items-center flex-column"
                style={{ gap: "0.5rem" }}
              >
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{ gap: "0.5rem" }}
                >
                  <Button onClick={() => decreaseQuantity(id)}>-</Button>
                  <span className="fs-4 text-muted"> {quantity} </span>
                  <Button onClick={() => increaseQuantity(id)}>+</Button>
                </div>
                <Button variant="danger" size="sm" onClick={() => removeFromCart(id)}>
                  Remove
                </Button>
              </div>
            )}
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
