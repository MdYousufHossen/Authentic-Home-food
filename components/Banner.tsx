import Cooke from "@assets/images/cooke.svg";
import FormStyle from "styles/Input";
import AppHeader from "./AppBar";
import Container from "./Container";
import Typography from "./Typography";
const Banner = () => {
  return (
    <Container height="100vh" width="100%" background="#0C1712">
      <AppHeader />
      <Container displayFlex mobile={"flex-direction:column;width:100%"}>
        <Container width="50%" mobile={"width:100%"}>
          <Typography color="white" variant="title1">
            Authentic Home
          </Typography>
          <Typography color="white" variant="title1">
            Food in UK
          </Typography>
          <br />
          <Typography color="white" variant="body1">
            What2Eat is a courier service in which authentic home cook food is
            delivered to a customer.
          </Typography>
          <br />
          <FormStyle.Wrapper>
            <FormStyle.Input
              br="10px 0px 0px 10px"
              width="285px"
              height="58px"
              placeholder="Search food you love."
            />
            <FormStyle.Button>Search</FormStyle.Button>
          </FormStyle.Wrapper>
        </Container>
        <Cooke />
      </Container>
    </Container>
  );
};

export default Banner;
