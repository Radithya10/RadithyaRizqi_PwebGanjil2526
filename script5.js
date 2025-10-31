const tugas5 = [];
const jumlahBarang = 3;


for (let i = 0; i < jumlahBarang; i++) {
    const nama = prompt(`Masukkan nama barang ke-${i + 1}:`);
    const harga = Number(prompt(`Masukkan harga barang ke-${i + 1}:`));
    const jumlah = Number(prompt(`Masukkan jumlah barang ke-${i + 1}:`));

    tugas5.push({ nama, harga, jumlah });
}


let total = 0;
tugas5.forEach(item => {
    total += item.harga * item.jumlah;
});


document.writeln('<table border="1" cellpadding="5" cellspacing="0">');
document.writeln('<tr class="table-header">');
document.writeln('<th>Nama Barang</th><th>Harga Barang</th><th>Jumlah Beli</th><th>Sub Total</th>');
document.writeln('</tr>');


tugas5.forEach(item => {
    const subtotal = item.harga * item.jumlah;
    document.writeln(`<tr>
        <td>${item.nama}</td>
        <td>${item.harga}</td>
        <td>${item.jumlah}</td>
        <td>${subtotal}</td>
    </tr>`);
});


document.writeln(`<tr>
    <td colspan="3"><strong>Total Harga Semua Barang</strong></td>
    <td><strong>${total}</strong></td>
</tr>`);


document.writeln(`<tr>
    <td colspan="2"></td>
    <td colspan="2"><button onclick="bayar()">Bayar</button></td>
</tr>`);


document.writeln(`<tr><td colspan="4">Radithya Rizqi</td></tr>`);
document.writeln('</table>');


function bayar() {
    const uang = Number(prompt("Masukkan jumlah uang:"));
    const kembalian = uang - total;

    if (uang < total) {
        alert("Uang anda kurang!");
    } else {
        alert(`Bayar: ${uang}\nTotal Belanjaan: ${total}\nKembalian: ${kembalian}`);
    }
}
