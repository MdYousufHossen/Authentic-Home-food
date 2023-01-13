import { addToCart } from "@features/cart/cartSlice";
import { useAppDispatch } from "app/hooks";
import Image from "next/image";
import { Fragment } from "react";
import styled from "styled-components";
import Container from "./Container";
import { Icon, ICON_NAME } from "./Icon";
import Typography from "./Typography";
const CardStyled = {
  Wrapper: styled.div<{ width?: string; height?: string }>`
    width: ${(p) => p.width || "277px"};
    height: ${(p) => p.height || "330px"};
    background: #ffffff;
    box-shadow: 0px 0px 1px rgba(187, 187, 187, 0.25);
    border-radius: 0px 0px 10px 10px;
  `,
  Image: styled(Image)`
    border-radius: 10px 10px 0px 0px;
  `,
};
interface cardPropTypes {
  blogMiddle?: boolean;
  blog?: boolean;
  image?: String;
  product: ProductType;
}
const Card = ({ blogMiddle, blog, image, product }: cardPropTypes) => {
  const myLoader = () => {
    return `${image}`;
  };
  const dispatch = useAppDispatch();

  // const acceptableProduct = {
  //   id: product?.id,
  //   name: product?.name,
  //   vat: product?.vat,
  //   image: product?.image,
  //   addon: {
  //     name: product?.addons[0]?.name,
  //     price: product?.addons[0]?.price,
  //   },
  //   price: product?.price,
  //   quantity_available: product?.quantity_available,
  //   quantity: 1,
  // };
  const acceptableProduct = {
    ...product,
    quantity: 1,
  };
  const handleAddToCard = () => {
    dispatch(addToCart(acceptableProduct));
  };

  return (
    <CardStyled.Wrapper
      width={blogMiddle && "400px"}
      height={blogMiddle && "320px"}
    >
      <CardStyled.Image
        loader={myLoader}
        src={image.toString()}
        width={blogMiddle ? 400 : 277}
        height={blogMiddle ? 320 : 250}
        alt="hello"
      />
      {blog ? (
        <Container width="90%">
          <Typography pb="2px" variant="body1">
            Most Satisfying Cake decorating Cake ideas
          </Typography>
          <Typography color="gray" variant="body2">
            Quis hendrerit nibh mauris sed faucibus.
          </Typography>
          <Typography color="gray" variant="body2">
            Quis hendrerit nibh mauris sed faucibus.
          </Typography>
        </Container>
      ) : (
        <Fragment>
          <Container width="90%" displayFlex justifyBetween>
            <Typography variant="body1">{product.name}</Typography>
            <Typography variant="body1">${product.price} </Typography>
          </Container>
          <Container width="90%" displayFlex justifyBetween alignItemsCenter>
            <Container width="100%" displayFlex alignItemsCenter>
              <Typography
                pl="5px"
                pr="5px"
                background="#F7F8FA"
                br="10px"
                variant="body1"
              >
                <Icon name={ICON_NAME.Star} height={13} width={13} />
                4.7
              </Typography>
              <Typography
                pl="5px"
                pr="5px"
                background="#F7F8FA"
                br="10px"
                variant="body1"
              >
                50-79 min
              </Typography>
            </Container>

            {/* <button > */}
            <Icon
              onClick={handleAddToCard}
              name={ICON_NAME.AddToCart}
              height={21}
              width={23}
            />
            {/* </button> */}
          </Container>
        </Fragment>
      )}
    </CardStyled.Wrapper>
  );
};

export default Card;
