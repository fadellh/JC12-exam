
function cekkoin(koin) {
    var jumlahKoin = 0
    var currentKoin = koin
    if(currentKoin%25 !== 0){
        jumlahKoin = jumlahKoin + Math.floor(currentKoin/25)
        currentKoin = currentKoin-(Math.floor(currentKoin/25)*25)
    }else{
        jumlahKoin = currentKoin/25
        currentKoin = currentKoin-(currentKoin/25*25)     
    }
    if(currentKoin%10 !== 0){
        jumlahKoin = jumlahKoin + Math.floor(currentKoin/10)
        currentKoin = currentKoin-(Math.floor(currentKoin/10)*10) 
    }else{
        jumlahKoin = jumlahKoin + currentKoin/10
        currentKoin = currentKoin-(Math.floor(currentKoin/10)*10)     
    }
    if(currentKoin%5 !== 0 && currentKoin>0){
        jumlahKoin = jumlahKoin + Math.floor(currentKoin/5)
        currentKoin = currentKoin-(Math.floor(currentKoin/5)*5)
    }else if(currentKoin > 0){
        jumlahKoin = jumlahKoin + currentKoin/5
        currentKoin = currentKoin-(Math.floor(currentKoin/5)*5)
        
    }
    if(currentKoin%1 !==0){
        jumlahKoin = jumlahKoin + Math.floor(currentKoin/1)
        currentKoin = currentKoin-(Math.floor(currentKoin/1)*1)
    }else{
        jumlahKoin = jumlahKoin + currentKoin/1
        currentKoin = currentKoin-(Math.floor(currentKoin/1)*1)
    }

    return jumlahKoin
}

console.log(cekkoin(49))
console.log(cekkoin(31))
console.log(cekkoin(50))