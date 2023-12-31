import styled from "styled-components";
import ButtonComponent from "../../Components/ButtonComponent/ButtonComponent";

export const WrapperProductType = styled.div`
    display: flex;
    align-items: center;
    gap: 27px;
    justify-contennt: flex-start;
    // border-bottom: 1px solid;
    height: 44px;
`
export const WrapperButtonMore = styled(ButtonComponent)`
    &:hover {
        color: white;
        background: #008000;
        span {
            color: #fff;
        }
    }
    width: 100%;
    text-align: center;
`
export const WrapperProducts = styled.div`
    display: flex;   
    margin-top: 25px;
    align-items: center;
    // justify-content: center;
    gap: 10px; 
    flex-wrap: wrap;
`