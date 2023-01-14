import Delivery from "@assets/images/delivery.png";
import Container from "@components/Container";
import Typography from "@components/Typography";
import { StyledImage } from "@styles/image";
import FormStyle from "@styles/Input";

const Contact = () => {
  return (
    <Container width="100%" background="#F7F8FA">
      <Container
        pb="50px"
        pt="50px"
        displayFlex
        mobile={"flex-direction:column; width:100%;"}
        tablet={"flex-direction:column; width:100%;"}
        landscape={"flex-direction:column; width:100%;"}
      >
        <Container width="70%" mobile={"width:100%"}>
          <Typography variant="title5">Do you have a question</Typography>
          <Typography variant="title5">or want to become a seller?</Typography>
          <Typography pb="20px" variant="body1">
            Fill this form and our manager will contact you next 48 hours.
          </Typography>
          <FormStyle.Wrapper>
            <Container
              width="100%"
              displayFlex
              gap="10px"
              mobile={"flex-direction:column; width:100%;"}
              tablet={"flex-direction:column; width:100%;"}
            >
              <FormStyle.Input
                width="300px"
                height="58px"
                br="10px"
                // mobile={"width:150px; height:25px"}
                placeholder="Your Name"
              />
              <FormStyle.Input
                width="300px"
                height="58px"
                br="10px"
                placeholder="Your e-mail"
              />
            </Container>
            <FormStyle.TextArea width="600px" height="200px" br="10px" />
          </FormStyle.Wrapper>
        </Container>
        <Container width="auto" mobile={"width:auto"}>
          <StyledImage src={Delivery} alt="Food delivery" />
        </Container>
      </Container>
    </Container>
  );
};

export default Contact;
