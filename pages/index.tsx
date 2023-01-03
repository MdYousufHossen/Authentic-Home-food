import Banner from "@components/Banner";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";

export default function Home() {
  const count = useAppSelector((state: RootState) => state.counter.value);
  console.log("hello", count);
  const dispatch = useAppDispatch();

  return <Banner />;
}
