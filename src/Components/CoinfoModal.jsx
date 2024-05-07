import { Divider, Flex, Tag, Typography } from "antd"

export default function CoinInfoModal({coin}){
    return(
    <> 
    <Flex align="center">
        <img src={coin.icon} alt={coin.name} style={{width:'40px'}}></img>
        <Typography.Title level={2}>({coin.symbol}) {coin.name} </Typography.Title>
    </Flex>
 <Divider/>
 <Typography.Paragraph>
    <Typography.Text strong>1 hour:</Typography.Text>
        <Tag color={coin.priceChange1h > 0 ? 'green' : 'red'}>{coin.priceChange1h}%</Tag>
 </Typography.Paragraph>

 <Typography.Paragraph>
    <Typography.Text strong>1 day:</Typography.Text>
        <Tag color={coin.priceChange1d > 0 ? 'green' : 'red'}>{coin.priceChange1d}%</Tag>
 </Typography.Paragraph>

 <Typography.Paragraph>
    <Typography.Text strong>1 week:</Typography.Text>
        <Tag color={coin.priceChange1w > 0 ? 'green' : 'red'}>{coin.priceChange1w}%</Tag>
 </Typography.Paragraph>

 <Typography.Paragraph>
    <Typography.Text strong>Price:</Typography.Text>
        {coin.price}$
 </Typography.Paragraph>

 <Typography.Paragraph>
    <Typography.Text strong>PriceBTC:</Typography.Text>
        {coin.priceBtc}$
 </Typography.Paragraph>

 <Typography.Paragraph>
    <Typography.Text strong>Market Cap:</Typography.Text>
        {coin.marketCap}$
 </Typography.Paragraph>

 <Typography.Paragraph>
    <Typography.Text strong>ContractAdress:</Typography.Text>
        {coin.contractAddress}$
 </Typography.Paragraph>
    
    </>)


} 