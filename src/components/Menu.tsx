import { Dropdown, Menu, MenuProps, Space } from "antd";
import { memo } from "react";
import { Link } from "react-router-dom";
import HamburgerIcon from "./HamburgerIcon";

// Define menu items outside the component for better reusability and separation of concerns.
const dropdownItems: MenuProps["items"] = [
  {
    label: (
      <Link to="/" rel="noopener noreferrer">
        Home
      </Link>
    ),
    key: "0",
  },
  {
    label: (
      <Link to="/cryptocurrencies" rel="noopener noreferrer">
        Cryptocurrencies
      </Link>
    ),
    key: "1",
  },
  {
    label: (
      <Link to="/news" rel="noopener noreferrer">
        News
      </Link>
    ),
    key: "2",
  },
];

const MenuDemo = memo(() => {
  // Define menu items for the main menu.
  const menuItems: MenuProps["items"] = [
    {
      key: "hamburger",
      label: (
        <Dropdown
          menu={{ items: dropdownItems }}
          trigger={["click"]}
          placement="bottomRight"
          arrow={{ pointAtCenter: true }}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <div className="flex justify-center items-center bg-black">
                <HamburgerIcon />
              </div>
            </Space>
          </a>
        </Dropdown>
      ),
    },
  ];

  return (
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={[]}
      items={menuItems}
      style={{
        flex: 1,
        minWidth: 0,
        display: "flex",
        justifyContent: "flex-end",
        marginRight: "-30px",
      }}
    />
  );
});

export default MenuDemo;