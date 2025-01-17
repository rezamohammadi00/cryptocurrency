import { Layout, Typography } from "antd";
import React, { memo } from "react";

import Menu from "./Menu";

// Memoized Topbar Component
const Topbar: React.FC = memo(() => {
  console.log("Topbar rendered");

  return (
    <Layout.Header className="flex items-center lg:hidden justify-between -mx-5">
      <div className="flex items-center h-full">
        <img
          src="https://i.ibb.co/Z11pcGG/cryptocurrency.png" // Your image source
          alt="Logo"
          className="rounded-full -ml-1 w-[45px] h-[45px]"
        />
        <Typography.Title
          level={4}
          style={{ color: "white", fontSize: "12px", marginBottom: "-2px" }}
        >
          Cryptocurrency
        </Typography.Title>
      </div>

      <div className="mt-3">
        <Menu />
      </div>
    </Layout.Header>
  );
});

export default Topbar;
