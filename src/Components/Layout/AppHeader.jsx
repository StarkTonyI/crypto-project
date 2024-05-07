import { Layout, Select, Space, Button, Modal, Drawer}from "antd";
import { useCrypto } from "../../Context/CryptoContext";
import { useEffect, useState } from "react";
import CoinInfoModal from "../CoinfoModal";
import AddAsset from "../AddAssetForm";
const headerStyle = {
    display:'flex',
    width:'100%',
    textAlign: 'center',
    color: 'black',
    height: 60,
    paddingInline: 48,
    lineHeight: '64px',
    backgroundColor: '#001529',
    justifyContent:'space-between',
    alignItems:'center'
};


  
  
  

export default function AppHeader(){

  
  const [drawer, setDrawer] = useState(false)    
  const [coin, setCoin] = useState(null)  
  const [modal, setModal] = useState(false)
  const [select, setSelect] = useState(false)

  useEffect(()=>{
    const keypress = (event) => {if(event.key === '/'){
      setSelect(true)
    }}

    document.addEventListener('keypress', keypress)
  
  }, [])

  function handleSelect(value){
    console.log(value)
    setCoin(crypto.find(c => c.id === value))
    setModal(true)
  }

  const { crypto } = useCrypto()

  return (
        <Layout.Header style={headerStyle}>
            <Select
  
    onSelect={handleSelect}
    open={select}
    onClick={()=>setSelect(false)}
    style={{
      width: '200px',
    }}
    value={'press / to open'}

    optionLabelProp="label"
    options={crypto.map(coin => ({
      label:coin.name,
      value:coin.id,
      icon:coin.icon
    }))}
    optionRender={(option) => (
<Space>
    <img style={{width:'20px'}} src={option.data.icon} alt={option.data.label}/> {option.data.label}
</Space>
    )}/>
     <Button onClick={()=> setDrawer(true)} type="primary">Primary Button</Button>
     <Modal 
     open={modal} 
      onOk={()=> setModal(false)} 
      onCancel={()=> setModal(false)}>
      <CoinInfoModal coin={coin}/>
      </Modal>

      <Drawer
      destroyOnClose
      title="Add Crypro" onClose={()=>setDrawer(false)} open={drawer}>
      <AddAsset onClose={()=> setDrawer(false)}/>
      </Drawer>

        </Layout.Header>
    )
}