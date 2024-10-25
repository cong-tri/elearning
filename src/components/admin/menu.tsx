import { useEffect, useState } from "react";

import {
    BookOutlined,
    DatabaseOutlined,
    DesktopOutlined,
    HomeOutlined,
    LogoutOutlined,
    ProfileOutlined,
    QuestionCircleOutlined,
    ReadOutlined,
    SettingOutlined,
    TeamOutlined,
    UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu, message } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { removeCookie } from "typescript-cookie";
import { key } from "../../constants/constants";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase-config";

const items: MenuProps["items"] = [
    {
        key: "admin",
        label: "Welcome Dao Cong Tri",
        type: "group",
        children: [
            {
                icon: <HomeOutlined />,
                key: "home",
                label: "Dashboard",
            },
            {
                icon: <ProfileOutlined />,
                key: "profile",
                label: "My Profile",
            },
            {
                icon: <UserOutlined />,
                key: "teachers",
                label: "Teachers",
            },
            {
                icon: <ReadOutlined />,
                key: "course",
                label: "Courses",
            },
            {
                icon: <TeamOutlined />,
                key: "user",
                label: "Users",
            },
            {
                icon: <DatabaseOutlined />,
                key: "category",
                label: "Category",
            },
            {
                icon: <BookOutlined />,
                key: "blog",
                label: "Blog",
            },
            {
                icon: <BookOutlined />,
                key: "event",
                label: "Event",
            },
            {
                icon: <DesktopOutlined />,
                key: "zoom",
                label: "Zoom",
            },
            {
                icon: <QuestionCircleOutlined />,
                key: "quiz",
                label: "Quiz Attempts",
            },
        ],
    },
    {
        type: "divider",
    },
    {
        key: "setting",
        label: "Setting",
        type: "group",
        children: [
            {
                key: "update",
                icon: <SettingOutlined />,
                label: "Update Profile",
            },
            {
                key: "logout",
                icon: <LogoutOutlined />,
                label: "Logout",
            },
            {
                key: "callback",
                icon: <HomeOutlined />,
                label: "Back to Home",
            },
        ],
    },
    // {
    //     key: "homeuser",
    //     icon: <HomeOutlined />,
    //     label: "Back to Home",
    // },
];
const MenuNav = () => {
    const [currentPath, setCurrentPath] = useState<string>("home");

    const navigate = useNavigate();

    const location = useLocation();

    useEffect(() => {
        const path = location.pathname.replace("/admin/", "")
        setCurrentPath(path)
    }, [location.pathname])

    const handleLogout = async (): Promise<void> => {
        try {
            await signOut(auth);

            removeCookie(key.info, {
                path: "/",
            });
            removeCookie(key.token, {
                path: "/",
            });
            removeCookie(key.uid, {
                path: "/",
            });

            message.success("User signed out successfully", 2, () => navigate("/authen"));

        } catch (error) {
            if (error instanceof Error) {
                message.error(error.message)
                return
            }
        }
    };
    const onClick: MenuProps["onClick"] = (e) => {
        setCurrentPath(e.key);
        console.log(e.key);

        if (e.key !== "logout") {
            navigate(`/admin/${e.key}`);
        }
        else {
            handleLogout()
        }

        if (e.key === "callback") {
            navigate(`/`);
        }
    };

    return (
        <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={[currentPath]}
            selectedKeys={[currentPath]}
            items={items}
            onClick={onClick}
        />
    );
};

export default MenuNav;
