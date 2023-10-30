import { Col } from "antd";
import styled from "styled-components";

export const WrapperProducts = styled.div`
    display: flex;   
    margin-top: 12px;
    // align-items: center;
    // justify-content: center;
    gap: 10px; 
    flex-wrap: wrap;
`
export const WrapperNavbar = styled(Col)`
    background: #fff;
    margin-right: 10px;
    padding: 12px;
    border-radius: 5px;
    height: fit-content;
    margin-top: 12px;
    
    width: 200px; //mới thêm vào
`