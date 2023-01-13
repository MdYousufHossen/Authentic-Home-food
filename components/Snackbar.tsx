import { toggleSnackbarClose } from "@features/cart/cartSlice";
import { useAppSelector } from "app/hooks";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled, { keyframes } from "styled-components";
import { Icon, ICON_NAME } from "./Icon";

const backgroundColor: { [key: string]: string } = {
  error: "#D32F2F",
  warning: "#ED6C02",
  info: "#0288D1",
  success: "#2E7D32",
};

interface PropsType {
  variant: "error" | "warning" | "info" | "success";
  timeout?: number;
  time?: string;
}

const Snackbar = ({ timeout, variant }: PropsType) => {
  const dispatch = useDispatch();

  // select the UI states from the redux store
  const SHOW = useAppSelector((state) => state.cart.toggleSnackbar);
  const MESSAGE = useAppSelector((state) => state.cart.snackbarMessage);
  const Variant = useAppSelector((state) => state.cart.snackbarVariant);
  // convert the timeout prop to pass into the styled component
  let TIME = (timeout - 500) / 1000 + "s";

  let TIMER;
  function handleTimeout() {
    TIMER = setTimeout(() => {
      dispatch(toggleSnackbarClose(undefined));
    }, timeout);
  }

  function handleClose() {
    clearTimeout(TIMER);
    dispatch(toggleSnackbarClose(undefined));
  }

  useEffect(() => {
    if (SHOW) {
      handleTimeout();
    }
    return () => {
      clearTimeout(TIMER);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [SHOW, TIMER]);

  return (
    SHOW && (
      <Container variant={Variant as PropsType["variant"]} time={TIME}>
        <p>{MESSAGE}</p>
        <Button>
          <Icon
            onClick={handleClose}
            color="white"
            name={ICON_NAME.Cross}
            height={13}
            width={13}
          />
        </Button>
      </Container>
    )
  );
};

const fadein = keyframes`
    from {
      bottom: 0;
      opacity: 0;
    }
    to {
      bottom: 1rem;
      opacity: 1;
    }
`;

const fadeout = keyframes`
    from {
      bottom: 1rem;
      opacity: 1;
    }
    to {
      bottom: 0;
      opacity: 0;
    }
`;

const Container = styled.div<PropsType>`
  position: fixed;
  z-index: 1000;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  height: auto;
  padding: 0.625rem 1rem;
  border-radius: 0.75rem;
  border: transparent;
  background-color: ${(p) => backgroundColor[p.variant]};
  color: white;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  display: flex;
  justify-content: center;
  align-items: center;

  animation: ${fadein} 0.5s, ${fadeout} 0.5s ${(p) => p.time};
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0.875rem;
  padding: 0;
  margin-left: 1rem;
  height: 1.75rem;
  width: 1.75rem;
  text-align: center;
  border: none;
  border-radius: 50%;
  background-color: transparent;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #bfbfbf;
  }
`;

export default Snackbar;
