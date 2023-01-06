import { useAppSelector } from "app/hooks";
import { Fragment, useState } from "react";
import styled from "styled-components";
import AbsoluteContent from "./AbsoluteContent";
import Container from "./Container";
import { Icon, ICON_NAME } from "./Icon";
import Modal from "./Modal";
import Typography from "./Typography";
const StyledWrapper = {
  Wrapper: styled.div`
    /* display: flex; */
    /* flex-direction: column; */
    /* align-items: center; */
    /* justify-content: flex-start; */
    /* margin-bottom: 2vw; */
    /* padding: 3.3vw 0; */
  `,
  // StyledLink: styled(NavLink)`
  //     text-decoration: none;
  //     cursor: pointer;
  // `,
  Logo: styled.img`
    height: 4.5vw;
    width: 17.5vw;
  `,
  From: styled.img`
    height: 3.2vw;
    width: 10vw;
    margin-top: -1.5vw;
  `,
};

const AppBar = () => {
  const { items, isProductavailable } = useAppSelector((state) => state.cart);
  const quantity = items.reduce((a, b) => a + b.quantity, 0);
  const [opened, setOpened] = useState<boolean>(false);
  const controleModal = () => {
    setOpened((prevState) => !prevState);
  };
  // useEffect(() => {
  //   if (isProductavailable) {
  //     controleModal();
  //   }
  // }, [isProductavailable]);
  return (
    <Fragment>
      <Container width="80%" padding="20px" displayFlex justifyBetween>
        <Container width="100%">
          <Icon name={ICON_NAME.Logo} height={65} width={128} />
        </Container>
        <Container width="100%" displayFlex alignItemsCenter>
          <Typography pr="10px" color="white" variant="title">
            Home
          </Typography>
          <Typography pr="10px" color="white" variant="title">
            About
          </Typography>
          <Typography pr="10px" color="white" variant="title">
            Menu
          </Typography>
          <Typography pr="10px" color="white" variant="title">
            Blog
          </Typography>
          <Typography pr="10px" color="white" variant="title">
            Contact
          </Typography>
        </Container>
        <Container width="20%" alignItemsCenter justifyBetween displayFlex>
          <Icon name={ICON_NAME.Search} height={21} width={21} />
          <Container width="fit-content">
            <Icon
              name={ICON_NAME.Card}
              onClick={controleModal}
              height={21}
              width={21}
            />
            <AbsoluteContent top="-13px" left="12px">
              <Typography
                background="red"
                br="20px"
                pl="5px"
                pr="5px"
                pt="3px"
                pb="3px"
                color="white"
                variant="body2"
              >
                {quantity}
              </Typography>
            </AbsoluteContent>
          </Container>
        </Container>
      </Container>
      <Modal open={opened} control={controleModal} />
    </Fragment>
  );
};

export default AppBar;
