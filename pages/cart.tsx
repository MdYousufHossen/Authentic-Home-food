import Container from "@components/Container";
import { Icon, ICON_NAME } from "@components/Icon";
import Modal from "@components/Modal";
import Row from "@components/Row";
import Typography from "@components/Typography";
import {
  addToCart,
  decreaseProductQuantity,
  removeToCart,
} from "@features/cart/cartSlice";
import FormStyle from "@styles/form";
import { useAppDispatch, useAppSelector } from "app/hooks";
import Image from "next/image";
import { Fragment, useState } from "react";
import getPrice from "utils/getPrice";

const Cart = () => {
  const { cart } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const totalPrice = getPrice(cart, "totalPrice");
  const totalVat = getPrice(cart, "totalVat");

  const [opened, setOpened] = useState<boolean>(false);
  const controleModal = () => {
    setOpened((prevState) => !prevState);
  };
  return (
    <Fragment>
      {cart.length >= 1 ? (
        <Container width="100%" displayFlex>
          <Container pt="20px" width="50%">
            <Typography pb="20px" align="center" variant="title3">
              Shopping Cart
            </Typography>
            <Container displayFlex flexCol gap="10px">
              {cart.map((item) => {
                const myLoader = () => {
                  return `${item.image}`;
                };
                return (
                  <Container
                    brb="10px"
                    brt="10px"
                    padding="10px"
                    background="#F5F5F5"
                    displayFlex
                    justifyBetween
                    key={item.id}
                  >
                    <Image
                      loader={myLoader}
                      src={item.image}
                      alt={item.name}
                      width={80}
                      height={80}
                    />
                    <Container pl="10px">
                      <Typography variant="title">Name: {item.name}</Typography>
                      <Typography variant="body1">
                        {item.quantity + "x" + "$" + item.price}
                      </Typography>
                    </Container>
                    <Container displayFlex>
                      <Icon
                        name={ICON_NAME.Plus}
                        onClick={() =>
                          dispatch(
                            addToCart({
                              id: item.id,
                            })
                          )
                        }
                        height={21}
                        width={21}
                      />

                      <Typography pl="10px" pr="10px" variant="body1">
                        {item.quantity}
                      </Typography>
                      <Icon
                        name={ICON_NAME.Minus}
                        onClick={() =>
                          dispatch(decreaseProductQuantity(item.id))
                        }
                        height={21}
                        width={21}
                      />
                    </Container>
                    <Container displayFlex alignItemsCenter>
                      <Typography pr="10px" variant="body1">
                        ${item.quantity * item.price}
                      </Typography>
                      <Icon
                        name={ICON_NAME.Cross}
                        onClick={() => dispatch(removeToCart(item.id))}
                        height={15}
                        width={15}
                      />
                    </Container>
                  </Container>
                );
              })}
            </Container>
          </Container>
          <Container width="40%">
            <Typography align="center" variant="title3">
              Cart Details
            </Typography>

            <Container pt="20px" width="80%">
              <Row name="Total Items" value={cart.length} />
              <Row dollar name="Price" value={totalPrice} />
              <Row dollar name="Vat" value={totalVat} />
              <hr />
              <Row dollar name="Total" value={totalPrice + totalVat} />

              <FormStyle.Button onClick={controleModal}>
                Checkout
              </FormStyle.Button>
            </Container>
          </Container>
        </Container>
      ) : (
        <Typography align="center" variant="title3">
          Please add to Cart.
        </Typography>
      )}
      <Modal open={opened} control={controleModal} />
    </Fragment>
  );
};
export default Cart;
