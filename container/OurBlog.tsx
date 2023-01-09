import Card from "@components/Card";
import Container from "@components/Container";
import Typography from "@components/Typography";
const OurBlog = () => {
  return (
    <Container pt="50px">
      <Typography variant="title5">Our Blog</Typography>
      <Container width="100%" displayFlex justifyContentCenter justifyBetween>
        <div>
          <Card
            image="https://res.cloudinary.com/duzw4loaz/image/upload/v1672840254/job-task/food-images/images/unsplash_vrrhv7.svg"
            blog
            product={undefined}
          />
          <Card
            image="https://res.cloudinary.com/duzw4loaz/image/upload/v1672840253/job-task/food-images/images/unsplash1_jhexee.svg"
            blog
            product={undefined}
          />
        </div>

        <div>
          <Card
            image="https://res.cloudinary.com/duzw4loaz/image/upload/v1672840254/job-task/food-images/images/unsplash2_xx9ytt.svg"
            blog
            blogMiddle
            product={undefined}
          />
        </div>

        <div>
          <Card
            image="https://res.cloudinary.com/duzw4loaz/image/upload/v1672840253/job-task/food-images/images/unsplash3_gwm33j.svg"
            blog
            product={undefined}
          />
          <Card
            image="https://res.cloudinary.com/duzw4loaz/image/upload/v1672840255/job-task/food-images/images/unsplash4_rxul2m.svg"
            blog
            product={undefined}
          />
        </div>
      </Container>
    </Container>
  );
};

export default OurBlog;
