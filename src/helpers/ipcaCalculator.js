
export class IpcaCalculator{
    constructor(ipcaData){
      this.ipcaData = ipcaData
    }
  
    calculateAccumulatedTax(){
      const initialPrice = 100
  
      const finalPrice = this.ipcaData.reduce((acc, elem) => {
        const priceAtMonth = (1  + (elem.valor/100)) * acc
        return priceAtMonth
      }, initialPrice)
  
      return ((finalPrice - initialPrice)).toFixed(2)
  
    }
  
  
  
  }
  
  