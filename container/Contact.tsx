import Delivery from "@assets/images/delivery.svg";
import Container from "@components/Container";
import Typography from "@components/Typography";
import FormStyle from "@styles/Input";
const Contact = () => {
  return (
    <Container width="100%" background="#F7F8FA">
      <Container
        pb="50px"
        pt="50px"
        displayFlex
        mobile={"flex-direction:column; width:100%"}
      >
        <Container width="70%" mobile={"width:100%"}>
          <Typography variant="title5">Do you have a question</Typography>
          <Typography variant="title5">or want to become a seller?</Typography>
          <Typography pb="20px" variant="body1">
            Fill this form and our manager will contact you next 48 hours.
          </Typography>
          <FormStyle.Wrapper>
            <Container width="100%" displayFlex justifyBetween>
              <FormStyle.Input
                width="300px"
                height="58px"
                br="10px"
                placeholder="Your Name"
              />
              <FormStyle.Input
                width="300px"
                height="58px"
                br="10px"
                placeholder="Your e-mail"
              />
            </Container>
            <FormStyle.TextArea br="10px" rows={10} cols={85} />
          </FormStyle.Wrapper>
        </Container>
        <Container width="fit-content" mobile={"width:100%"}>
          <Delivery />
        </Container>
      </Container>
    </Container>
  );
};

export default Contact;
