const prdk = ['Pilih Produk' , 'TV', 'AC', 'KULKAS'];
var select = document.getElementById("produk");

for(let n in prdk){
    select.innerHTML += `<option value="${prdk[n]}">${prdk[n]}</option>`;
}

function print(){
    let form = document.getElementById("input");
    let nama = form.nama.value;
    let produk = form.produk.value;
    let jumlah = form.jumlah.value;
    var jml = Number(jumlah);
    let grup = Intl.NumberFormat('id-ID');
    
    switch(produk){
        case 'TV':
            var harga = 2000000;
            break;
        case 'AC':
            var harga = 3000000;
            break;
        case 'KULKAS':
            var harga = 4000000;
            break;
        default:
            var harga = 0;
            break;
    }
    
    var harga_kotor = harga * jml;

    if( produk == 'KULKAS' && jml >= 3){
        var diskon = harga_kotor * 0.3;
    }
    else if( produk == 'AC' && jml >= 3){
        var diskon = harga_kotor * 0.2;
    }
    else{
        var diskon = harga_kotor * 0.1;
    }

    var total = harga_kotor - diskon;

    var ppn = total * 0.1;

    var total_akhir = total + ppn;

    if(nama == ''){
        alert(`Nama tidak boleh kosong`);
    }
    else if(produk == 'Pilih Produk'){
        alert(`Produk tidak boleh kosong`);
    }
    else if(jumlah == ''){
        alert(`Jumlah tidak boleh kosong`);
    }
    else{
    alert(` Nama Pelanggan : ${nama}\n Produk yang dibeli : ${produk} \n Harga Satuan : Rp. ${grup.format(harga)} \n Jumlah Item Produk yg dibeli : ${jumlah}\n Harga Kotor : Rp. ${grup.format(harga_kotor)} \n Diskon : Rp. ${grup.format(diskon)} \n Pajak Pertambahan Nilai (PPN) : ${grup.format(ppn)} \n Harga Bayar: Rp. ${grup.format(total_akhir)}`);
    }

}

