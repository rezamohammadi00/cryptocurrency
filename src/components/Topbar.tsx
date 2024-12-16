import { Layout, Typography } from "antd";
import React, { memo } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import Menu from "./Menu";

// Memoized Topbar Component
const Topbar: React.FC = memo(() => {
  console.log("Topbar rendered");

  return (
    <Layout.Header className="flex items-center lg:hidden justify-between -mx-5">
      <div className="flex items-center h-full">
        <LazyLoadImage
          src={"https://i.ibb.co/Z11pcGG/cryptocurrency.png"} // Your image source
          alt="Logo"
          effect="blur" // Add a blur effect while loading
          width="45"
          height="45"
          className="rounded-full -ml-1"
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
