import { Row } from "antd";
import styled from "styled-components";

export const WrapperHeader = styled(Row)`
    padding: 15px 120px;
    background-color: #008000;
    align-items: center;
    gap: 16px;
    flex-wrap: nowrap;
`
//https://beau.vn/sites/default/files/2020-12/brand_logo_mau_xanh_la_copy.jpg
export const WrapperHeaderText = styled.span`
    font-size: 18px;
    color: white;
    font-weight: bold;
`
// export const WrapperIMGHeader = styled.image`
//     width: 10px;
//     height: 10px
// `
export const WrapperHeaderAccount = styled.div`
    display: flex;
    align-items: center;
    color: white;
    gap: 10px;
`
export const WrapperHeaderTextSmall = styled.span`
    font-size: 13px;
    color: white;
    white-space: nowrap;
`