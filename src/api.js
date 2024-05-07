import { cryptoAssests, cryptoData } from "./data";

export function fakeFunction(){
    return(
       new Promise(resolve => {
            setTimeout(()=>{
                resolve(cryptoData)
            },100)
        })
    )
}
export function fetchFunction(){
    return(
        new Promise(resolve => {
            setTimeout(()=>{
                resolve(cryptoAssests)
            },100)
        })
    )
}
