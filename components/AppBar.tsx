import { Icons } from "@assets/icons";
import styled from "styled-components";
import Container from "./Container";
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
  return (
    <Container width="80%" padding="20px" displayFlex justifyBetween>
      <Container width="100%">
        <Icons.Logo />
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
        <Icons.Search />
        <Icons.Card />
      </Container>
    </Container>
  );
};

export default AppBar;
