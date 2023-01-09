import AddToCart from "@assets/icons/addToCart.svg";
import Card from "@assets/icons/Card.svg";
import Cross from "@assets/icons/cross.svg";
import Facebook from "@assets/icons/Facebook.svg";
import Instagram from "@assets/icons/instagram.svg";
import Logo from "@assets/icons/logo.svg";
import Minus from "@assets/icons/minus.svg";
import Plus from "@assets/icons/plus.svg";
import Search from "@assets/icons/search.svg";
import Star from "@assets/icons/star.svg";
import { MouseEventHandler } from "react";
import styled from "styled-components";
import AbsoluteContent from "./AbsoluteContent";
import EmptyHolderDiv from "./EmptyHolderDiv";
export interface IconProps {
  name: string;
  height: number;
  width: number;
  color?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
  mt?: string;
  mr?: string;
  mb?: string;
  ml?: string;
  margin?: string;
}
interface StyledContainerProps {
  color?: string;
  clickable?: boolean;
  mt?: string;
  mr?: string;
  mb?: string;
  ml?: string;
  margin?: string;
}

const StyledContainer = styled.div<StyledContainerProps>`
  * {
    ${(p) => p.color && `fill: ${p.color};`}
    ${(p) => p.clickable && `cursor: pointer;`}
       margin-top: ${(p) => p.mt};
    margin-right: ${(p) => p.mr};
    margin-bottom: ${(p) => p.mb};
    margin-left: ${(p) => p.ml};
    margin: ${(p) => p.margin};
  }
`;

const ICON = {
  Card,
  AddToCart,
  Facebook,
  Instagram,
  Logo,
  Search,
  Star,
  Minus,
  Plus,
  Cross,
};
export const ICON_NAME: { [key: string]: string } = {
  AddToCart: "AddToCart",
  Card: "Card",
  Facebook: "Facebook",
  Instagram: "Instagram",
  Logo: "Logo",
  Search: "Search",
  Star: "Star",
  Minus: "Minus",
  Plus: "Plus",
  Cross: "Cross",
};

export const Icon = (props: IconProps) => {
  const Component = ICON[props.name as keyof typeof ICON];
  return (
    <EmptyHolderDiv height={`${props.height}px`} width={`${props.width}px`}>
      <AbsoluteContent height={`${props.height}px`} width={`${props.width}px`}>
        <StyledContainer color={props.color} clickable={!!props.onClick}>
          <Component
            height={props.height}
            width={props.width}
            onClick={props.onClick}
            color={props.color}
            fill={props.color}
          />
        </StyledContainer>
      </AbsoluteContent>
    </EmptyHolderDiv>
  );
};
