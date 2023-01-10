import { useState } from "react";
import { Layout, Menu } from "antd";
import {
  LogoutOutlined,
  PieChartOutlined,
  SettingOutlined,
  AreaChartOutlined,
  UserOutlined,
} from "@ant-design/icons";
// import { useNavigate } from 'react-router-dom';

import classes from "./SideBar.module.css";
// import ClickEvent from '../../../types/click-event';
// import { useDispatch } from 'react-redux';
// import { logoutReducer } from '../../../store/slices/authSlice';

const { Sider } = Layout;

const iconStyle = {
  fontSize: "1.2rem",
};

const SideBar = () => {
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const [selectedKey, setSelectedKey] = useState<string>("1");

  //   const navigate = useNavigate();
  //   const dispatch = useDispatch();

  //   const clickHandler = (event: ClickEvent) => {
  //     if (event.key === 'logout') return setSelectedKey('/');
  //     setSelectedKey(event.key);
  //     navigate(`/app/${event.key}`);
  //   };

  const onCollapse = (collapsed: boolean) => {
    setCollapsed(collapsed);
  };
  //   const logoutHandler = () => {
  //     dispatch(logoutReducer());
  //     notification.success({ message: 'Logged out successfully' });
  //     navigate('/');
  //   };

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <div className={classes["sidebar__logo"]}>LOGO</div>
      <Menu
        selectedKeys={[selectedKey]}
        // onClick={clickHandler}
        theme="dark"
        mode="inline"
      >
        <Menu.Item
          key="dashboard"
          icon={<PieChartOutlined style={iconStyle} />}
        >
          Dashboard
        </Menu.Item>
        <Menu.Item key="stat" icon={<AreaChartOutlined style={iconStyle} />}>
          Statistics
        </Menu.Item>
        <Menu.Item key="accounts" icon={<UserOutlined style={iconStyle} />}>
          Accounts
        </Menu.Item>
        <Menu.Item key="settings" icon={<SettingOutlined style={iconStyle} />}>
          Settings
        </Menu.Item>
        <Menu.Item
          key="logout"
          //   onClick={logoutHandler}
          icon={<LogoutOutlined style={iconStyle} />}
        >
          Logout
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SideBar;
