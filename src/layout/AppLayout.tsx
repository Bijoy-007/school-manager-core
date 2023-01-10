import { Layout } from "antd";

import classes from "./AppLayout.module.css";
import SideBar from "../components/app/ui/SideBar";
import AppHedaer from "../components/app/ui/Header";
import Props from "../types/Props";
import PageWrapper from "./PageWrapper";

const { Header, Content } = Layout;

const Applayout = (props: Props) => {
  return (
    <Layout className={classes["app-layout__wrapper"]}>
      <SideBar />

      <Layout>
        <Header className={classes["app-layout__header"]}>
          <AppHedaer />
        </Header>

        <Content>
          <PageWrapper>{props.children}</PageWrapper>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Applayout;
