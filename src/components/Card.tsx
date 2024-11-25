import {Card as CardAntd, Avatar, Typography} from 'antd';

type CardProps = {
    title: string;
    avatarSrc: string;
    price: string;
    marketCap:string;
    change:string;
};

const Card = ({title,marketCap, avatarSrc, price,change}: CardProps) => (
    <CardAntd
        title={title}
        extra={<Avatar src={avatarSrc}/>}
        hoverable
    >

            <Typography.Paragraph type="secondary">Price: {price}</Typography.Paragraph>
            <Typography.Paragraph type="secondary">Market Cap: {marketCap}</Typography.Paragraph>
            <Typography.Paragraph type="secondary">Daily Change: {change}%</Typography.Paragraph>
    </CardAntd>
);

export default Card