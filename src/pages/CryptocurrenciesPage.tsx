import {useEffect, useState} from "react";
import {Col, Layout, Row, Typography, Input} from "antd";
import {Link} from "react-router-dom";
import millify from "millify";

import useGetCoins from "../hooks/useGetCoins.ts";
import Card from "../components/Card.tsx";


type  coin = {
    uuid: string,
    name: string,
    iconUrl: string,
    price: string,
    marketCap: string,
    change: string
}


const CryptocurrenciesPage = () => {
    const {data,isLoading} = useGetCoins();
    const coins: coin[] = data?.data?.coins;

    const [filteredCryptocurrencies, setFilteredCryptocurrencies] = useState(coins)
    const [searchingText, setSearchingText] = useState("")

    useEffect(() => {
        setFilteredCryptocurrencies(coins.filter((coin)=>{
            return coin.name.toLowerCase().includes(searchingText.toLowerCase())
        }))
    }, [coins,searchingText]);


    if (isLoading) {
        return (
          <div className="flex justify-center items-center w-full h-full">
            Loading...
          </div>
        );
      }

    return (
        <Layout.Content className="overflow-y-scroll p-4 w-full h-full">
            <div className={"flex justify-between items-center"}>
                <Typography.Title level={2}>Cryptos</Typography.Title>
                <Input.Search size={"middle"} placeholder="Search Cryptocurrency" className={"w-52"} onSearch={setSearchingText}/>
            </div>
            <Row gutter={[32, 32]} className={"mt-3"}>
                {filteredCryptocurrencies?.map((coin) => (
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
                    )
                )}
            </Row>
        </Layout.Content>
    );
};


export default CryptocurrenciesPage;