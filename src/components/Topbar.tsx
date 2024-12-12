import { Avatar, Layout, Typography } from "antd";
import React, { memo } from "react";
import Menu from "./Menu";

// Memoized Topbar Component
const Topbar: React.FC = memo(() => {
  console.log("Topbar rendered");

  return (
    <Layout.Header className="flex items-center lg:hidden">
      <div className="flex items-center">
        <Avatar
          size={40}
          src="https://i.ibb.co/Z11pcGG/cryptocurrency.png"
          className="mr-2 demo-log"
          style={{ marginLeft: "-30px" }}
        />
        <Typography.Title
          level={4}
          style={{ color: "white", fontSize: "12px", marginBottom: "-2px" }}
        >
          Cryptocurrency
        </Typography.Title>
      </div>

      <Menu />
    </Layout.Header>
  );
});

export default Topbar;
