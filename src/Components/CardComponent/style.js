import { Card } from "antd";
import styled from "styled-components";

export const WrapperCardStyle = styled(Card)`
    width: 200px;
    & img {
        width: 200px;
        height: 200px;
    }
    position: relative;
    // Hình ảnh=================================================================
`   

export const StyleNameProduct = styled.div`
    font-weight: 600;
    font-size: 13px;
    line-height: 16px;
    color: green; //mau chu ten cua san pham
`
export const WrapperTextReport = styled.div`
    font-size: 12px;
    color: rgb(128, 128, 137);
    display: flex;
    align-items: center;
`
export const WrapperTextPrice = styled.div`
    font-size: 16px;
    color: #ff6600;
    font-weight: 700;
    margin: 6px 0px 0px;
`
export const WrapperTextDiscount = styled.span`
    font-size: 14px;
    color: red;
    font-weight: 600;
`

export const WrapperStyleTextSell = styled.span`
    color: rgb(120, 120, 120);
    font-size: 13px;
    line-height: 22px;
`
