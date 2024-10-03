import { useState } from "react";

import {
    HomeOutlined,
    LogoutOutlined,
    ProfileOutlined,
    QuestionCircleOutlined,
    SettingOutlined,
    UnorderedListOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

const items: MenuProps["items"] = [
    {
        key: 'admin',
        label: 'Welcome Dao Cong Tri',
        type: 'group',
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
                icon: <UnorderedListOutlined />,
                key: "course",
                label: "Courses",
            },
            {
                icon: <UnorderedListOutlined />,
                key: "user",
                label: "Users"
            },
            {
                icon: <UnorderedListOutlined />,
                key: "category",
                label: "Category"
            },
            {
                icon: <QuestionCircleOutlined />,
                key: "quiz",
                label: "Quiz Attempts"
            },
        ],
    },
    {
        type: "divider"
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
                label: "Logout"
            }
        ]
    }

];
const MenuNav = () => {
    const [currentPath, setCurrentPath] = useState<string>("home")

    const navigate = useNavigate();

    const onClick: MenuProps["onClick"] = (e) => {
        setCurrentPath(e.key)

        switch (e.key) {
            case "home":
                navigate("/admin/home")
                break;
            case "profile":
                navigate("/admin/profile")
                break;
            case "course":
                navigate("/admin/course")
                break;
            case "category":
                navigate("/admin/category")
                break;
            case "user":
                navigate("/admin/user");
                break;
            case "quiz":
                navigate("/admin/quiz")
                break;
            case "update":
                navigate("/admin/update")
                break;
            default:
                break;
        }
    };

    return (
        <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={[currentPath]}
            items={items}
            onClick={onClick}
        />
    );
};

export default MenuNav;
