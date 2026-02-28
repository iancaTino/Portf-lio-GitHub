import styles from "styled-components";
import { Props } from ".";

export const Titulo = styles.h3<Props>`
color: #282A35;
font-size: ${(props) => props.fontSize ? props.fontSize + "px" : "14px"};
font-weight: bold;
margin-bottom: 16px;
`
