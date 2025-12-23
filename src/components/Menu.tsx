import { Dropdown, Menu, MenuProps, Space } from "antd";
import { memo } from "react";
import { Link } from "react-router-dom";
import HamburgerIcon from "./HamburgerIcon";

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
      <Link to="/about" rel="noopener noreferrer">
        About
      </Link>
    ),
    key: "1",
  },
  {
    label: (
      <Link to="/cryptocurrencies" rel="noopener noreferrer">
        Cryptocurrencies
      </Link>
    ),
    key: "2",
  },
  {
    label: (
      <Link to="/news" rel="noopener noreferrer">
        News
      </Link>
    ),
    key: "3",
  },
];

const MenuDemo = memo(() => {
  const menuItems: MenuProps["items"] = [
    {
      key: "hamburger",
      label: (
        <Dropdown
          menu={{ items: dropdownItems }}
          trigger={["click"]}
          placement="bottomRight"
          arrow={{ pointAtCenter: true }}
          overlayClassName="custom-dropdown-overlay"
          overlayStyle={{
            backgroundColor: "transparent",
            width:"75%"
          }}
        >
          <a onClick={(e) => e.preventDefault()} style={{ color: "white" }}>
            <Space>
              <div className="flex justify-center items-center">
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
