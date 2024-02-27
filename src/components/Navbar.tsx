import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@nextui-org/react";

interface NavbarProps {
    activeMenu: "home" | "ranking" | "users";
    onMenuChange: (menu: "home" | "ranking" | "users") => void;
}

const NavbarComponent: React.FC<NavbarProps> = ({ activeMenu, onMenuChange }) => {
    const activeColor = 'text-white';
    const inactiveColor = 'text-gray-500';
    return (
        <Navbar
            position="sticky"
            style={{ backgroundColor: "#ff9900" }} // Laranja
        >
            <NavbarBrand>
                <h1 className="text-2xl text-white">NO-KCAL</h1>
            </NavbarBrand>
            <NavbarContent className="flex justify-center">
                <NavbarItem isActive={activeMenu === "home"}>
                    <Link color="foreground" href="/" onClick={() => onMenuChange("home")}>
                        <span className={`text-2xl ${activeMenu === "home" ? activeColor : inactiveColor}`}>HOME</span>
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={activeMenu === "users"}>
                    <Link color="foreground" href="/users" onClick={() => onMenuChange("users")}>
                        <span className={`text-2xl ${activeMenu === "users" ? activeColor : inactiveColor}`}>USUÁRIOS</span>
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={activeMenu === "ranking"}>
                    <Link color="foreground" href="/ranking" onClick={() => onMenuChange("ranking")}>
                        <span className={`text-2xl ${activeMenu === "ranking" ? activeColor : inactiveColor}`}>RANKING</span>
                    </Link>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}

export default NavbarComponent;
