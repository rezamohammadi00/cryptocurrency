import { Link, useLocation } from "react-router-dom";
import { Menu, MenuProps, Avatar, Typography, Layout } from "antd";

const items: MenuProps["items"] = [
  {
    key: "/",
    label: <Link to="/">Home</Link>,
  },
  {
    key: "/cryptocurrencies",
    label: <Link to="/cryptocurrencies">Cryptocurrencies</Link>,
  },
  {
    key: "/news",
    label: <Link to="/news">News</Link>,
  },
  {
    key: "/about",
    label: <Link to="/about">About</Link>,
  },
];

const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

    return (
    <Layout.Sider
      width={"18%"}
      className="min-h-screen !min-w-60 hidden lg:flex"
    >
      <div className="flex gap-2 items-center p-3">
        <Avatar size={64} src="https://i.ibb.co/Z11pcGG/cryptocurrency.png" />
        <Typography.Title level={4} style={{ color: "white" }}>
          Cryptocurrency
        </Typography.Title>
      </div>

      <Menu
        theme="dark"
        mode="vertical"
        defaultSelectedKeys={["/"]}
        selectedKeys={[currentPath]}
        items={items}
      />
    </Layout.Sider>
  );
};

export default Sidebar;
