import Container from "./Container";
import Typography from "./Typography";

const Row = ({
  name,
  value,
  dollar,
}: {
  name: String;
  value: number;
  dollar?: true;
}) => {
  return (
    <Container padding="5px 0" width="100%" displayFlex justifyBetween>
      <Typography variant="title">{name}:</Typography>
      <Typography variant="title">
        {dollar && "$"}
        {value}
      </Typography>
    </Container>
  );
};

export default Row;
