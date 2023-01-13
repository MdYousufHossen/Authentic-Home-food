import { usePlaceOrderMutation } from "@features/cart/cartApi";
import { resetCart, toggleSnackbarOpen } from "@features/cart/cartSlice";
import FormStyle from "@styles/form";
import ModalStyle from "@styles/modal";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import getPrice from "utils/getPrice";
import Container from "./Container";
import Typography from "./Typography";

interface ModalPropType {
  open: boolean;
  control: () => void;
}

const Modal = ({ open, control }: ModalPropType) => {
  const dispatch = useAppDispatch();
  const [name, setName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [placeOrder, { data, isLoading, error, isError, isSuccess }] =
    usePlaceOrderMutation();
  const router = useRouter();
  const { cart } = useAppSelector((state) => state.cart);
  const totalPrice = getPrice(cart, "totalPrice");
  const totalVat = getPrice(cart, "totalVat");
  const postItems = cart.map((item) => {
    return {
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: item.quantity,
      vat: item.vat,
      addon: item.addons,
    };
  });
  const postData = {
    customer: { name, address, phone },
    calculation: {
      price: totalPrice,
      vat: totalVat,
      total: totalPrice + totalVat,
    },
    items: postItems,
  };

  useEffect(() => {
    if (isSuccess) {
      control();
      setName("");
      setAddress("");
      setPhone("");
      dispatch(resetCart());
      router.push("/");
      dispatch(
        toggleSnackbarOpen({
          message: "Successfully order placed!",
          variant: "success",
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    placeOrder(postData);
  };

  return open ? (
    <Fragment>
      <ModalStyle.Background onClick={control}> </ModalStyle.Background>
      <ModalStyle.Content>
        <Container width="100%">
          <Typography pt="20px" align="center" variant="title">
            Please Give your Info
          </Typography>
          <FormStyle.Wrapper onSubmit={handleSubmit}>
            <FormStyle.Input
              onChange={(e) => setName(e.target.value)}
              placeholder="Write your name"
            />
            <FormStyle.Input
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Write your address"
            />
            <FormStyle.Input
              onChange={(e) => setPhone(e.target.value)}
              type="tel"
              placeholder="Write your phone"
            />
            <FormStyle.Button type="submit">Place Order</FormStyle.Button>
          </FormStyle.Wrapper>
        </Container>
      </ModalStyle.Content>
    </Fragment>
  ) : null;
};

export default Modal;
