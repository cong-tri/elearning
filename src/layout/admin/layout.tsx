import React from "react";
import { Outlet } from "react-router-dom";

import { Layout, theme } from "antd";

import MenuNav from "../../components/admin/menu";
import { MainProvider } from "../../context/main-provider";
import { AdminProvider } from "../../context/admin-provider";

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
    maxHeight: "auto"
};

const AdminLayout: React.FC = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <MainProvider>
            <Layout hasSider>
                <Sider style={siderStyle}>
                    <div className="demo-logo-vertical" />
                    <MenuNav />
                </Sider>
                <Layout style={{ marginInlineStart: 200 }}>
                    <Header className="bg-primary py-4">
                        <div className="row g-0 justify-content-between align-items-center">
                            <div className="col-4">
                                <div className="row align-items-center">
                                    <div className="col-auto">
                                        <img
                                            src="https://i.pravatar.cc/100"
                                            className="img-thumbnail rounded-circle d-inline"
                                            alt="avatar"
                                        />
                                    </div>
                                    <div className="col-auto">
                                        <h3 className="text-white">
                                            Admin
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-auto text-end">
                                <h3 className="text-white">
                                    Welcome Dao Cong Tri
                                </h3>
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
