import { Dropdown, Menu, MenuProps, Space } from "antd";
import { Link } from "react-router-dom";
import HamburgerIcon from "./HamburgerIcon";

const items: MenuProps["items"] = [
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

const MenuDemo = () => {
  const menuItems: MenuProps["items"] = [
    {
      key: "hamburger",
      label: (
        <div>
          <Dropdown
            menu={{ items }}
            trigger={["click"]}
            placement="bottomRight"
            arrow={{ pointAtCenter: true }}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <div className="bg-black">
                  <HamburgerIcon />
                </div>
              </Space>
            </a>
          </Dropdown>
        </div>
      ),
    },
  ];

  return (
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
  );
};

export default MenuDemo;
