import { Layout, Card, Statistic, List, Typography, Tag } from "antd";
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons'
import { Capitalse } from "./Utils";
import { useContext } from "react";
import  CryptoContext  from "../../Context/CryptoContext";

const siderStyle = {
    textAlign: 'center',
    lineHeight: '120px',
    backgroundColor: '#001529'
  };




  export default function AppSider(){
    
    const { assets } = useContext(CryptoContext)



    return(
    
       <Layout.Sider width="25%" style={{siderStyle, backgroundColor: '#001529'}}>
              
           {assets.map((asset) => (
        
                   <Card key={asset.id} style={{marginBottom:'1rem'}}>
                   <Statistic 
                 
                    title={Capitalse(asset.id)}
                    value={asset.totalAmount}
                    precision={2}
                    valueStyle={{ color:asset.grow ? 'green' : 'red' }}
                    prefix= {asset.grow ? <ArrowUpOutlined /> :<ArrowDownOutlined />}
                    suffix="$"
                   />
               
               <List
        
               size="small"
         dataSource={[
          {title:'Total profit', value:asset.totalProfit, withTag:true},
          {title:'Asset Amount', value:asset.amount, isPlain:true},
          //{title:'Difference', value:asset.growPrecent}
         ]}
         renderItem={(item) => (
           <List.Item>
            <span>{item.title}</span>
          <span> 
            {item.withTag && <Tag color={asset.grow ? 'green' : 'red'}>{asset.growPrecent}%</Tag>}
           {item.isPlain && item.value}
           {!item.isPlain && <Typography.Text type={asset.grow ? 'success' : 'danger'}>{`${item.value.toFixed(2)}$`}</Typography.Text>}
           </span>
           </List.Item>

        
        )}

/>
</Card>      
           )

           )}
   </Layout.Sider>               
    )}
           
        {/* <Card>
            <Statistic
          title="Idle"
          value={9.3}
          precision={2}
          valueStyle={{
            color: '#cf1322',
          }}
          prefix={<ArrowDownOutlined />}
          suffix="%"
        />
            </Card>
      </Layout.Sider>
    )
}
*/}