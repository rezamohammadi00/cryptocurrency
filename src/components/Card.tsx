import { Card as CardAntd, Avatar, Typography } from "antd";

import { LazyLoadImage } from "react-lazy-load-image-component";

type CardProps = {
  title: string;
  avatarSrc: string;
  price: string;
  marketCap: string;
  change: string;
};

const Card = ({ title, marketCap, avatarSrc, price, change }: CardProps) => {
  return (
    <CardAntd
      title={title}
      extra={
        <LazyLoadImage
          src={avatarSrc} // Your image source
          alt="image-crypto"
          effect="blur" // Add a blur effect while loading
          width="30"
          height="30"
          className="rounded-full"
        />
      }
      hoverable
    >
      <Typography.Paragraph type="secondary">
        Price: {price}
      </Typography.Paragraph>
      <Typography.Paragraph type="secondary">
        Market Cap: {marketCap}
      </Typography.Paragraph>
      <Typography.Paragraph type="secondary">
        Daily Change: {change}%
      </Typography.Paragraph>
    </CardAntd>
  );
};

export default Card;
