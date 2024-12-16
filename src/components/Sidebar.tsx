import { Menu, MenuProps, Avatar, Typography, Layout } from "antd";
import { Link } from "react-router-dom";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: <Link to="/">Home</Link>,
  },
  {
    key: "2",
    label: <Link to="/cryptocurrencies">Cryptocurrencies</Link>,
  },

  // {
  //   key: "3",
  //   label: <Link to="/exchanges">Exchanges</Link>,
  // },
  {
    key: "4",
    label: <Link to="/news">News</Link>,
  },
];

const Sidebar = () => {
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
        defaultSelectedKeys={["1"]}
        items={items}
      />
    </Layout.Sider>
  );
};

export default Sidebar;
