import AppHeader from "@components/AppBar";
import { Fragment } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import { decrement, increment } from "../features/counter/counterSlice";

export default function Home() {
  const count = useAppSelector((state: RootState) => state.counter.value);
  console.log("hello", count);
  const dispatch = useAppDispatch();
  const handleI = () => {
    console.log("In");
    dispatch(increment());
  };
  const handleD = () => {
    console.log("dddic");
    dispatch(decrement());
  };
  return (
    <Fragment>
      <AppHeader />
    </Fragment>
  );
}
