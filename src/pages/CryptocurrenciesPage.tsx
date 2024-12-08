import { useEffect, useState } from "react";
import { Col, Layout, Row, Typography, Input } from "antd";
import { Link } from "react-router-dom";
import millify from "millify";

import useGetCoins from "../hooks/useGetCoins.ts";
import Card from "../components/Card.tsx";
import Loader from "../components/Loader.tsx";

type Coin = {
  uuid: string;
  name: string;
  iconUrl: string;
  price: string;
  marketCap: string;
  change: string;
};

const CryptocurrenciesPage = () => {
  const { data, isLoading } = useGetCoins();
  const coins: Coin[] = data?.data?.coins || [];

  const [filteredCryptocurrencies, setFilteredCryptocurrencies] =
    useState<Coin[]>(coins);
  const [searchingText, setSearchingText] = useState<string>("");

  // Filter coins based on the search query
  useEffect(() => {
    const filtered = coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchingText.toLowerCase())
    );
    setFilteredCryptocurrencies(filtered);
  }, [coins, searchingText]);

  // Render a loading state
  if (isLoading) return <Loader />;

  return (
    <Layout.Content className="overflow-y-scroll p-4 w-full h-full">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <Typography.Title level={2} className="">Cryptos</Typography.Title>
        <Input.Search
          size="middle"
          placeholder="Search Cryptocurrency"
          className="w-52"
          onSearch={(value) => setSearchingText(value)}
        />
      </div>

      {/* Crypto Cards Section */}
      <Row gutter={[32, 32]} className="mt-3">
        {filteredCryptocurrencies.map((coin) => (
          <Col key={coin.uuid} span={6} xs={24} sm={12} lg={6}>
            <Link to={`/news`}>
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

export default CryptocurrenciesPage;
