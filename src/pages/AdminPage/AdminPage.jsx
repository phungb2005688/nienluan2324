import { Menu } from 'antd'
import React, { useEffect, useState } from 'react'
import { UserOutlined, AppstoreOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { getItem } from '../../Utils';
import HeaderComponent from '../../Components/HeaderComponent/HeaderComponent';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const AdminPage = () => {
    const items = [
        getItem('Người dùng', 'sub1', <UserOutlined />, [
            getItem('Option 1', '1'),
            getItem('Option 2', '2'),
            getItem('Option 3', '3'),
            getItem('Option 4', '4'),
        ]),
        getItem('Sản phẩm', 'sub2', <AppstoreOutlined />, [
            getItem('Option 5', '5'),
            getItem('Option 6', '6'),
            getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
        ]),
    ];

    const rootSubmenuKeys = ['user', 'product'];
    const [openKeys, setOpenKeys] = useState(['user']);
    const [KeySelected, setKeySelected] = useState('')
    const user = useSelector((state) => state.user)
    const navigate = useNavigate()

    const onOpenChange = (keys) => {

        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };

    const handleOnCLick = ({ key }) => {
        setKeySelected(key)
    }
    useEffect(() => {
        if (!user.isAdmin) {
            navigate('/')
        }
    });
    return (
        <>
            <HeaderComponent isHiddenSearch isHiddenCart></HeaderComponent>
            <div style={{ display: 'flex', }}>

                <Menu
                    mode="inline"
                    openKeys={openKeys}
                    onOpenChange={onOpenChange}
                    style={{
                        width: 256,
                    }}
                    items={items}
                    onClick={handleOnCLick}

                />
                <div>
                    {KeySelected === '6' && <span>Key la 6</span>}
                </div>
            </div>
        </>
    )
}

export default AdminPage