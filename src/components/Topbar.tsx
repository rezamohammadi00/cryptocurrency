import "../styles/topbar.css";

import { useState } from "react";
import { Avatar, Layout, Menu, Typography } from "antd";
import type { MenuProps } from "antd";
import { Link } from "react-router-dom";
import HamburgerIcon from "./HamburgerIcon";

const Topbar: React.FC = () => {
  const [showNavItems, setShowNavItems] = useState(false);

  const toggleNavItems = () => {
    setShowNavItems((prev) => !prev);
  };

  const menuItems: MenuProps["items"] = [
    {
      key: "hamburger",
      label: (
        <div onClick={toggleNavItems}>
          <HamburgerIcon />
        </div>
      ),
    },
  ];

  return (
    <div>
      {/* Header Section */}
      <Layout.Header className="flex items-center lg:hidden">
        
        <div className="flex items-center">
          <Avatar
            size={40}
            src="https://i.ibb.co/Z11pcGG/cryptocurrency.png"
            className="mr-2 demo-log"
            style={{ marginLeft: "-30px" }}
          />{" "}
          <Typography.Title level={4} style={{ color: "white",fontSize:"12px",marginBottom:"-2px" }}>
            Cryptocurrency
          </Typography.Title>
        </div>
        
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[""]}
          items={menuItems}
          style={{
            flex: 1,
            minWidth: 0,
            display: "flex",
            justifyContent: "flex-end",
            marginRight: "-30px",
          }}
        />
      </Layout.Header>

      {/* Navigation Items with Animation */}
      <div
        className={`pl-8 flex lg:hidden flex-col gap-4 justify-between py-2 px-4 bg-[#001529] text-white transition-all duration-300 ${
          showNavItems ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <Link to="/" onClick={toggleNavItems}>
          Home
        </Link>
        <Link to="/cryptocurrencies" onClick={toggleNavItems}>
          Cryptocurrencies
        </Link>
        <Link to="/news" onClick={toggleNavItems}>
          News
        </Link>
      </div>
    </div>
  );
};

export default Topbar;
