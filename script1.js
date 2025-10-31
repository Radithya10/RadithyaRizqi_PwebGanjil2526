var nama,barang,jumlah,total;
nama=prompt("Masukkan Nama Barang:")||'';
barang=prompt("Masukkan Jumlah Barang:")||'';
jumlah=prompt("Masukkan Harga Satuan:")||'';
total=jumlah*barang;
document.writeln("<table border='1'>")||'';
document.writeln("<tr><td>Nama Barang</td><td>jumlah Barang</td><td>Harga Satuan</td><td>Total Harga</td></tr>")||'';
document.writeln("<tr><td>"+ nama + "</td><td>" + barang + "</td><td>" +jumlah + "</td><td>" + (barang * jumlah) + "</td></tr>")||'';
document.writeln("<tr><td colspan='4'>Radithya Rizqi</td></tr>")||'';
document.writeln("</table>")||'';



