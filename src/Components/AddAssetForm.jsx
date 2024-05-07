import {Select, Space, Typography, Flex, Form, Input, InputNumber, Button, DatePicker, Result } from 'antd'
import { useState, useRef } from "react"
import { useCrypto } from '../Context/CryptoContext'
export default function AddAsset({onClose}){
    const [form] = Form.useForm()
    const {crypto, AddAsset} = useCrypto()
    const [coin, setCoin] = useState(null);
    const [submit,setSubmit] = useState(false)
    const AssetRef = useRef()
  if(submit){
    return(
        <Result
        status="success"
        title="New Assed added!"
        subTitle={`Added ${AssetRef.current.amount} of ${coin.name} price ${AssetRef.current.price}`}
        extra={[
          <Button type="primary" key="console" onClick={onClose}>
            Go Console
          </Button>,
         
        ]}
      />
    )
  }
  
    if(!coin){ 
   return(
        <Select
        onSelect={(v)=>setCoin(crypto.find((c) => c.id === v)) }
        style={{width:'100%'}}
     
      
        placeholder='Select coin'
    
        optionLabelProp="label"
        options={crypto.map(coin => ({
          label:coin.name,
          value:coin.id,
          icon:coin.icon
        }))}
        optionRender={(option) => (
    <Space>
        <img style={{width:'20px'}} 
        
        src={option.data.icon}
         
         alt={option.data.label}/> 
         
         {option.data.label}
    </Space>
        )}/>
    )
   }
   function onFinish(values){
    const newAsset = {
      id:coin.id,
      amount:values.amount,
      price:values.price,
      date:values.date ?.$d ?? new Date()
    }
    AssetRef.current = newAsset
    console.log(AssetRef.current)
    setSubmit(true)
    AddAsset(newAsset)
   }

   const valiadatemessege = {
    required:'${label} is required',
    types:{
        number:'${label} is not valid number'
    },
    number:{
        range:'${label} must be beetveen ${min} and ${max}'
    }
   }
   function HandlClick(value){   
    form.setFieldsValue({
        total:value * coin.price
    })
   }
   function HandlAmountClick(value){   
    const amount = form.getFieldValue('amount')
    form.setFieldsValue({
        total:value * amount
    })
   }

    return(
        <Form
        form={form}
        name="basic"
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 10,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
            price:coin.price
        }}
        onFinish={onFinish}
        valiadatemessege={valiadatemessege}

      >
        <Form.Item
        
          label="Amount"
          name="amount"
          rules={[
            {
              required: true,
              type:'number',
              min:0,
    
            },
          ]}
        >
          <InputNumber onChange={HandlClick}
          
          style={{width:'100%'}}/>
        </Form.Item>
    
        <Form.Item
          label="Price"
          name="price">
          <InputNumber onChange={HandlAmountClick} style={{width:'100%'}} />
        </Form.Item>
    
        <Form.Item
          label="Date and time"
          name="date"       
 >
          <DatePicker showTime></DatePicker>
        </Form.Item>

        <Form.Item
          label="Total"
          name="total"       
 >
          <InputNumber disabled style={{width:'100%'}} />
        </Form.Item>
    

        <Form.Item>
          <Button type="primary" htmlType="submit">
            AddAsset
          </Button>
        </Form.Item>
      
        <p style={{fontWeight:'bold'}}>So you admit the fact you like suck dick?</p>
    <Flex align="center">
        <img src={coin.icon} alt={coin.name} style={{width:'40px'}}></img>
        <Typography.Title level={2}> {coin.name} </Typography.Title>
    </Flex>
      </Form> 
  
  )
   }
