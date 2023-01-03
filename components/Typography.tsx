import styled from "styled-components";

interface TypographyProps {
  children: React.ReactNode;
  color?: string;
  margin?: string;
  align?: "center" | "left" | "right" | "justify";
  variant:
    | "title1"
    | "title2"
    | "title3"
    | "title4"
    | "title5"
    | "title6"
    | "body1"
    | "body2";
  clickable?: boolean;
  pt?: string;
  pr?: string;
  pb?: string;
  pl?: string;
  background?: string;
  br?: string;
}

const fontSize: { [key: string]: string } = {
  title: "18px",
  title1: "48px",
  title2: "40px",
  title3: "32px",
  title4: "28px",
  title5: "24px",
  title6: "20px",
  body1: "16px",
  body2: "12px",
};

const fontWeight: { [key: string]: number } = {
  title1: 600,
  title2: 600,
  title3: 700,
  title4: 700,
  title5: 600,
  title6: 600,
  body1: 500,
  body2: 500,
};

const fontFamily: { [key: string]: string } = {
  title1: "Space Grotesk",
  title2: "Space Grotesk",
  body1: "Inter",
};
const lineHeight: { [key: string]: string } = {
  title1: "30px",
  title2: "40px",
  body1: "25px",
};

const Typography = styled.h6<TypographyProps>`
  font-size: ${(props) => fontSize[props.variant]};
  font-weight: ${(props) => fontWeight[props.variant]};
  font-family: ${(p) => fontFamily[p?.variant]};
  line-height: ${(p) => lineHeight[p?.variant]};
  margin: ${(props) => props.margin || 0};
  color: ${(props) => props.color};
  text-align: ${(props) => props.align || ""};
  padding-top: ${(p) => p.pt || ""};
  padding-right: ${(p) => p.pr || ""};
  padding-bottom: ${(p) => p.pb || ""};
  padding-left: ${(p) => p.pl || ""};
  background: ${(p) => p.background || ""};
  border-radius: ${(p) => p.br || ""};
  ${(props) =>
    props.clickable &&
    `
        cursor: pointer;
        -webkit-touch-callout: none; /* iOS Safari */
          -webkit-user-select: none; /* Safari */
           -khtml-user-select: none; /* Konqueror HTML */
             -moz-user-select: none; /* Old versions of Firefox */
              -ms-user-select: none; /* Internet Explorer/Edge */
                  user-select: none; /* Non-prefixed version, currently
                                        supported by Chrome, Edge, Opera and Firefox */
    `};
`;

export default Typography;
