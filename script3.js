var jenisMinuman;
jenisMinuman = prompt('Masukkan jenis minuman :');
switch (jenisMinuman.toLowerCase()) {
    case 'power f':
        document.writeln('<h2>Hari Ini Minum Power F</h2>');
    break;
    case 'Kopi Nongkrong':
        document.writeln('<h2>Hari Ini Minum Kopi Nongkrong</h2>');
    break;
    case 'teh gelas':
        document.writeln('<h2>Hari Ini Minum Teh Gelas</h2>');
    break;
    case 'montea':
    document.writeln('<h2>Hari Ini Minum Montea</h2>');
    break;
    default:
        document.writeln('<h2>Minuman Tidak Tersedia</h2>');
    break;
}
