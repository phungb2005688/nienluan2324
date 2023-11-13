import { Upload } from "antd";
import styled from "styled-components";

export const WrapperHeader = styled.h1`
    color: #000;
    font-weight: 600;
    font-size: 18px;
    margin: 6px 0;
    padding-top: 10px;
`
export const WrapperContentProfile = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #ccc;
    width: 600px;
    margin: 0 auto;
    padding: 30px;
    border-radius: 10px;
    gap: 30px;
`

export const WrapperLabel = styled.label`
    color: #000;
    font-size: 14px;
    line-height: 30px;
    font-weight: 600;
    width: 60px;
    text-align: left;
    padding-top: 7px;
`
export const WrapperInput = styled.div`
    display: flex;
    align-items: cemter;
    gap: 20px;
`
export const WrapperUploadFile = styled(Upload)`
    & .ant-upload.ant-upload-select.ant-upload-select-picture-card {
        width: 60px;
        height: 60px;
        border-radius: 50%;
    }
    & .ant-upload-list-item-info {
        display: none
    }
    & .ant-upload-list-item-name {
        display: none
    }
    & .ant-upload-icon {
        display: none;
    }
    & .ant-btn-icon {
        display: none;
    }

    // & .ant-upload-wrapper .ant-upload-list .ant-upload-list-item-error {
    //     display: none;
    // }
`