import { Input } from "antd";
import styled from "styled-components";

export const WrapperInputStyle = styled(Input)`
    border-top: none;
    border-right: none;
    border-left: none;
    outline: none;
    &:focus {
        background-color: #f2f7f2;
    }
    margin: 2px;
`