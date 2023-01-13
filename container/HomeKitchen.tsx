import Card from "@components/Card";
import Container from "@components/Container";
import Snackbar from "@components/Snackbar";
import Typography from "@components/Typography";
import { useGetProductsQuery } from "@features/product/productsApi";

const HomeKitchen = () => {
  const { data, isLoading, isError, error } = useGetProductsQuery();
  let content = null;
  if (isLoading) {
    content = (
      <Typography align="center" variant="body1">
        Loading....
      </Typography>
    );
  } else if (!isLoading && isError) {
    content = <Typography variant="title4">Error</Typography>;
  } else if (!isLoading && !isError && data?.length === 0) {
    content = <Typography variant="title4">Product Not Found!</Typography>;
  } else if (!isLoading && !isError && data && data?.length > 0) {
    console.log(data);
    content = (
      <Container width="100%" padding="20px 0" displayFlex flexWrape gap="10px">
        {data.map((pd) => {
          return <Card key={pd.id} product={pd} image={pd.image} />;
        })}
      </Container>
    );
  }
  return (
    <Container width="100%" background="#F7F8FA">
      <Container displayFlex flexCol justifyContentCenter>
        <Typography pb="20px" variant="title5">
          Home Kitchen
        </Typography>
        {content}
      </Container>

      <Snackbar variant="warning" timeout={3000} />
    </Container>
  );
};

export default HomeKitchen;
