import { Layout, Typography } from "antd"
import { useCrypto } from "../../Context/CryptoContext";
import PortofolioChartt from "./ChartPortfolio";
import PortofolioTable from "./AssetsTable";

const contentStyle = {
    textAlign: 'center',
    minHeight: 'calc(100vh - 60px)',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#001529',
  };



export default function AppContent(){
    const {assets, crypto} = useCrypto()
  const CryptoId = crypto.reduce((acc, b) => {
    acc[b.id] = b.price
return acc 
}, {})
  

    return(
        <Layout.Content style={contentStyle}>

    <Typography.Title level={3} style={{textAlign:'left', color:'white'} }>
        Portfolio:{assets.map(asset => { return asset.amount * CryptoId[asset.id]}
             ).reduce((add, v) => (add += v), 0).toFixed(2)}$
    </Typography.Title>
            <PortofolioChartt></PortofolioChartt>
            <PortofolioTable> </PortofolioTable>
        </Layout.Content>
    )
}