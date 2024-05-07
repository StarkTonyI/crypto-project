import { createContext, useState, useEffect, useContext } from "react"; 
import { fakeFunction, fetchFunction } from "../api";
import { percentDiff } from '../Components/Layout/Utils.js'

const CryptoContext = createContext({
    assets:[],
    crypto:[],
    loading:[]
})

function MapAsset(assets, result){
 return assets.map(asseet => {
    const coin = result.find((c) => c.id === asseet.id)
    return {
      grow:asseet.price < coin.price,
      growPrecent:percentDiff(asseet.price, coin.price), 
     totalAmount:asseet.amount * coin.price,
     totalProfit:asseet.amount * coin.price - asseet.amount * asseet.price,
     name:coin.name,
      ...asseet
    }
  } 
  )
}

export function CryptoContextDevider({children}){
  const [loading, setLoading] = useState(false);
  const [crypto, setCrypto] = useState([]);
  const [assets, setAssets] = useState([])
    useEffect(()=>{
        setLoading(true)
       async function preload(){
        const assets = await fetchFunction();
        const { result } = await fakeFunction();

        setAssets(MapAsset(assets, result));
        setCrypto(result)
        setLoading(false)   
    }

    preload()
    }, [])
    
    function AddAsset(newAsset){
      setAssets((prev) => MapAsset([...prev, newAsset], crypto))
    }
    
    return <CryptoContext.Provider value={{loading, crypto, assets, AddAsset}}> 
        {children}
    </CryptoContext.Provider>
}
export default CryptoContext

export function useCrypto(){
  return useContext(CryptoContext)
}