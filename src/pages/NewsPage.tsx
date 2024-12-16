import { useEffect } from "react";
import { Layout, Typography, Row, Col, Card } from "antd";
import { LazyLoadImage } from "react-lazy-load-image-component";

import useGetNews from "../hooks/useGetNews";
import Loader from "../components/Loader";
import Error from "../components/Error";

const { Title } = Typography;

const NewsPage = () => {
  const { data, isLoading, error } = useGetNews();

  useEffect(() => {
    if (data?.data) {
      console.log(data.data);
    }
  }, [data]);

  if (isLoading) return <Loader />;
  if (error) return <Error error={error} />;

  return (
    <Layout.Content className="overflow-y-scroll p-4 w-full h-full">
      <Title level={2}>News</Title>
      <Row gutter={[32, 32]} className="mt-3">
        {data?.data.map(
          (
            news: {
              title: string;
              thumbnail: string;
              description: string;
              url: string;
            },
            index: number
          ) => (
            <Col
              key={index}
              xs={24} // Full width on extra small screens
              sm={12} // Two items per row on small screens
              md={8} // Three items per row on medium screens and above
            >
              <a href={news.url} target="_blank" rel="noopener noreferrer">
                <Card
                  hoverable
                  cover={
                    // <img
                    //   alt={news.title}
                    //   src={news.thumbnail}
                    //   className="object-cover w-full h-40"
                    // />
                    <LazyLoadImage
                      src={news.thumbnail} // Your image source
                      alt="Image"
                      effect="blur" // Add a blur effect while loading
                      width="100%"
                      height="160"
                      className="object-cover w-full h-40"
                    />
                  }
                  className="h-[350px]"
                >
                  <Title level={5} className="line-clamp-2">
                    {news.title}
                  </Title>
                  <p className="pt-1 line-clamp-4">
                    {news.description}
                    {/* <span className="ml-2 text-sm text-sky-500">(read more)</span> */}
                  </p>
                </Card>
              </a>
            </Col>
          )
        )}
      </Row>
    </Layout.Content>
  );
};

export default NewsPage;
