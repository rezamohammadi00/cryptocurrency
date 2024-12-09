import millify from "millify";
import { Col, Layout, Row, Statistic, Typography, Grid } from "antd";

import useGetCoins from "../hooks/useGetCoins.ts";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import Loader from "../components/Loader.tsx";
import useGetFontSize from "../hooks/useGetFontSize.ts";

const formatValue = (value: number, title: string = "") => {
  const isCurrency =
    title.toLowerCase().includes("marketcap") ||
    title.toLowerCase().includes("volume");
  const formattedValue = millify(value);

  return isCurrency ? `$${formattedValue}` : formattedValue;
};

type coin = {
  uuid: string;
  name: string;
  iconUrl: string;
  price: string;
  marketCap: string;
  change: string;
};

const HomePage = () => {
  const { data, isLoading } = useGetCoins();
  const stats = data?.data?.stats;
  const coins: coin[] = data?.data?.coins;
  const fontSize = useGetFontSize();
  
  const screens = Grid.useBreakpoint();
  // console.log(data)
  // console.log(coins)

  if (isLoading) return <Loader />;
  return (
    <Layout.Content className="overflow-y-scroll p-4 w-full h-full">
      {/*Global Crypto Stats section*/}
      {/* <Typography.Title level={2}>Global Crypto Stats</Typography.Title> */}
      <Typography.Title style={{ fontSize: fontSize }}>
        Global Crypto Stats
      </Typography.Title>
      <Row gutter={[16, 20]} className="mt-3">
        {stats &&
          Object.entries(stats)?.map(([key, value]) => (
            //Stat (card)
            <Col span={12} key={key}>
              <Statistic
                title={key}
                value={value as number}
                formatter={(val) => formatValue(val as number, key)}
                valueStyle={{ fontSize: screens.sm ? "18px" : "14px"}}
              />
            </Col>
          ))}
      </Row>

      {/*Top 10 section*/}
      <div className={"flex justify-between items-center mt-10"}>
        {/* <Typography.Title level={2}>
          Top 10 Cryptos In The World
        </Typography.Title> */}
        <Typography.Title style={{ fontSize: fontSize }}>
          Top 10 Cryptos In The World
        </Typography.Title>
        <Typography.Link>
          <Link to="/cryptocurrencies" className="text-xs lg:text-base">
            Show more
          </Link>
        </Typography.Link>
      </div>
      <Row gutter={[32, 32]} className={"mt-3"}>
        {coins?.slice(0, 10)?.map((coin) => (
          // Coin Card
          <Col key={coin.uuid} span={6} xs={24} sm={12} lg={6}>
            <Link to={"/news"}>
              <Card
                title={coin.name}
                avatarSrc={coin.iconUrl}
                price={millify(Number(coin.price))}
                marketCap={millify(Number(coin.marketCap))}
                change={coin.change}
              />
            </Link>
          </Col>
        ))}
      </Row>
    </Layout.Content>
  );
};

export default HomePage;
