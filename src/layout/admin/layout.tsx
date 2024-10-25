import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

import { Avatar, Breadcrumb, Layout, theme } from "antd";
import { UserOutlined } from "@ant-design/icons";

import MenuNav from "../../components/admin/menu";
import { MainProvider } from "../../context/main-provider";
import { AdminProvider } from "../../context/admin-provider";

import { getCookie } from "typescript-cookie";

import { key } from "../../constants/constants";
import { IUsers } from "../../types/types";

const { Header, Content, Footer, Sider } = Layout;

const AdminLayout: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);

    const token: string = getCookie(key.info) ?? ""

    const user = token !== "" ? JSON.parse(token) as IUsers : null

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const location = useLocation();
    const pathname = location.pathname.replace("/admin/", "");

    return (
        <MainProvider>
            <Layout style={{ minHeight: '100vh' }}>
                <Sider
                    collapsible
                    collapsed={collapsed}
                    onCollapse={(value) => setCollapsed(value)}
                >
                    <div className="demo-logo-vertical" />
                    <MenuNav />
                </Sider>
                <Layout>
                    <Header className="bg-light border-bottom border-2 shadow-lg py-2">
                        <div className="hstack gap-3">
                            <div>
                                <Breadcrumb
                                    separator=">"
                                    style={{ fontSize: 30, textTransform: "capitalize", fontWeight: "bold" }}
                                    items={[
                                        {
                                            title: "Admin",
                                        },
                                        {
                                            title: pathname,
                                        }
                                    ]}
                                />
                            </div>
                            <div className="ms-auto">
                                <Avatar size={50} icon={<UserOutlined />} />
                                <span className="ms-2">
                                    Welcome {user?.name.firstname}{" "}
                                    {user?.name.lastname}
                                </span>
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
                        COPYRIGHT &copy; {new Date().getFullYear()} Created by E-LEARNING TEAM
                    </Footer>
                </Layout>
            </Layout>
        </MainProvider>
    );
};

export default AdminLayout;
