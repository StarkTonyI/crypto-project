export function percentDiff(a,b){
    return +(100 * Math.abs((a-b)/(a+b) / 2)).toFixed()
  }
  
export function Capitalse(str){
  return str.charAt(0).toUpperCase() + str.substr(1)
}