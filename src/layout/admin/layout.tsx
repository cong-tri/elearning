import React, { useContext } from "react";
import { Outlet, useLocation } from "react-router-dom";

import { Avatar, Layout, theme } from "antd";

import MenuNav from "../../components/admin/menu";
import { MainContext, MainProvider } from "../../context/main-provider";
import { AdminProvider } from "../../context/admin-provider";
import { RightOutlined, UserOutlined } from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;

const siderStyle: React.CSSProperties = {
    overflow: "auto",
    width: "auto",
    height: "100vh",
    position: "fixed",
    insetInlineStart: 0,
    top: 0,
    bottom: 0,
    scrollbarWidth: "thin",
    scrollbarColor: "unset",
    maxWidth: "auto",
    maxHeight: "auto",
};

const AdminLayout: React.FC = () => {
    const { userProfile } = useContext(MainContext)
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const location = useLocation();
    const pathname = location.pathname.replace("/admin/", "");

    return (
        <MainProvider>
            <Layout hasSider>
                <Sider style={siderStyle}>
                    <div className="demo-logo-vertical" />
                    <MenuNav />
                </Sider>
                <Layout style={{ marginInlineStart: 200 }}>
                    <Header className="bg-light border-bottom border-2 shadow-lg py-4">
                        <div className="hstack gap-3">
                            <div>
                                <h4>
                                    {" "}
                                    <span className="text-secondary">Admin</span>{" "}
                                    <RightOutlined /> <span className="text-capitalize">{pathname}</span>
                                </h4>
                            </div>
                            <div className="ms-auto">
                                <Avatar size={50} icon={<UserOutlined />} />
                                <span className="ms-2">Welcome {userProfile?.name.firstname} {userProfile?.name.lastname}</span>
                            </div>
                        </div>
                    </Header>
                    <Content style={{ margin: "32px", overflow: "initial" }}>
                        <div
                            style={{
                                padding: 32,
                                background: colorBgContainer,
                                borderRadius: borderRadiusLG,
                            }}
                        >
                            <AdminProvider>
                                <Outlet />
                            </AdminProvider>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: "center" }}>
                        Ant Design ©{new Date().getFullYear()} Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        </MainProvider>
    );
};

export default AdminLayout;
