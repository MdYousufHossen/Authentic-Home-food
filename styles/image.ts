import Image from "next/image";
import styled from "styled-components";
import { breakpoints } from "universal/breakpoints/Breakpoint";
import { screeinBreakpoints } from "universal/breakpoints/displayBreakpoints";

export const StyledImage = styled(Image)`
  ${breakpoints("width", "px", [
    { [screeinBreakpoints.laptopL]: 450 },
    { [screeinBreakpoints.laptopS]: 400 },
    { [screeinBreakpoints.landscape]: 400 },
    { [screeinBreakpoints.tablet]: 300 },
    { [screeinBreakpoints.mobile]: 200 },
  ])};
  height: auto;
`;
