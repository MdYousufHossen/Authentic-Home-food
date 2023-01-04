import Card from "@components/Card";
import Container from "@components/Container";
import Typography from "@components/Typography";

const HomeKitchen = () => {
  return (
    <Container width="100%" background="#F7F8FA">
      <Container displayFlex flexCol justifyContentCenter>
        <Typography pb="20px" variant="title5">
          Home Kitchen
        </Typography>
        <Container
          width="100%"
          padding="20px 0"
          displayFlex
          // justifyContentCenter
          flexWrape
          gap="10px"
        >
          <Card image="https://munchiesprod.s3.ap-southeast-1.amazonaws.com/f8624bf6-1ae8-48dc-8793-d4d071530489.png" />
          <Card image="https://munchiesprod.s3.ap-southeast-1.amazonaws.com/f8624bf6-1ae8-48dc-8793-d4d071530489.png" />
          <Card image="https://munchiesprod.s3.ap-southeast-1.amazonaws.com/f8624bf6-1ae8-48dc-8793-d4d071530489.png" />
          <Card image="https://munchiesprod.s3.ap-southeast-1.amazonaws.com/f8624bf6-1ae8-48dc-8793-d4d071530489.png" />
          <Card image="https://munchiesprod.s3.ap-southeast-1.amazonaws.com/f8624bf6-1ae8-48dc-8793-d4d071530489.png" />
        </Container>
      </Container>
    </Container>
  );
};

export default HomeKitchen;
