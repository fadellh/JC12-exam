let barangLelang = [

]

function lelangArr (num) {
    var baju = 10000
    var celana = 20000
    var kacamata = 30000
    for(i=1; i<=num; i++){
    baju = Math.ceil(baju + (baju*10/100))
    celana = Math.ceil(celana + (celana*20/100))
    kacamata = Math.ceil(kacamata + (kacamata*30/100))
    }
    return ('Di menit ke ' + num + '\n\n Nama Barang = Baju, harga = '+ baju +
    '\n Nama barang = celana, harga ' + celana +
    '\n Nama barang = kacamata, harga ' + kacamata
    
    )
}


console.log(lelangArr(1))
console.log(lelangArr(5))
console.log(lelangArr(10))