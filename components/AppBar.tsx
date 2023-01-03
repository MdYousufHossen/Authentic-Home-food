import { Icons } from "@assets/icons";
import styled from "styled-components";
import Container from "./Container";
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

const AppHeader = () => {
  return (
    <Container displayFlex>
      <Icons.Logo />

      <div> hello </div>
      <div></div>
    </Container>
  );
};

export default AppHeader;
