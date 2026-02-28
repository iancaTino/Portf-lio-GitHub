import styled from "styled-components";

import { Props } from ".";

export const P = styled.p<Props>`
font-size: 14px;
color: ${(props) => (props.tipo === "principal" ? "#282a35" : "#7b7b7b")};
line-height: 22px;
`
