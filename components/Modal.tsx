import ModalStyle from "@styles/modal";
import { useAppSelector } from "app/hooks";
import Image from "next/image";
import { Fragment, useEffect } from "react";
import Container from "./Container";
import Typography from "./Typography";

interface ModalPropType {
  open: boolean;
  control: () => void;
}

const Modal = ({ open, control }: ModalPropType) => {
  const { items, calculation } = useAppSelector((state) => state.cart);
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);
  return open ? (
    <Fragment>
      <ModalStyle.Background onClick={control}> </ModalStyle.Background>
      <ModalStyle.Content width="80%" height="80%">
        <Container width="100%" displayFlex>
          <Container width="50%">
            {items.map((item) => {
              const myLoader = () => {
                return `${item.image}`;
              };
              return (
                <Container padding="10px" displayFlex key={item.id}>
                  <Image
                    loader={myLoader}
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                  />
                  <Container>
                    <Typography variant="title">Name: {item.name}</Typography>
                    <Typography variant="title">
                      Quantity: {item.quantity}
                    </Typography>
                    <Typography variant="title">Price: {item.price}</Typography>
                    <Typography variant="title">Vat: {item.vat}</Typography>
                  </Container>
                </Container>
              );
            })}
          </Container>
          <Container width="50%">
            <Typography variant="title">Price: {calculation.price}</Typography>
            <Typography variant="title">vat: {calculation.vat}</Typography>
            <Typography variant="title">Total: {calculation.total}</Typography>
          </Container>
        </Container>
      </ModalStyle.Content>
    </Fragment>
  ) : null;
};

export default Modal;
