import { Icons } from "@assets/icons";
import Container from "./Container";
import Typography from "./Typography";

const Footer = () => {
  return (
    <Container width="100%" background="#1AC073" color="white">
      <Container
        pt="20px"
        pb="20px"
        displayFlex
        justifyBetween
        alignItemsCenter
      >
        <Container width="100%">
          <Typography pr="10px" color="white" variant="title">
            WHAT2EAT
          </Typography>
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
        <Container width="20%" displayFlex justifyBetween>
          <Icons.Facebook />
          <Icons.Instagram />
        </Container>
      </Container>
      <Container>
        <hr
          style={{
            height: "1px",
            margin: "20px 0 16px 0",
            backgroundColor: "white",
            border: "none",
          }}
        />
      </Container>
      <Typography align="center" color="white" variant="body1">
        Copyright @2021 What2Eat
      </Typography>
    </Container>
  );
};

export default Footer;
