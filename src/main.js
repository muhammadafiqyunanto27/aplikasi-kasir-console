"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var input_1 = require("./utils/input");
console.log('Halo Selamat Datang di Aplikasi Kasir');
var name = (0, input_1.getInput)('Masukan Nama Anda');
console.log("Halo ".concat(name, "! Selamat datang di aplikasi kasir"));
var showMenu = function () {
    console.log('\n=== Menu Kasir ===');
    console.log('1. Tambah Barang');
    console.log('2. Hapus Barang');
    console.log('3. Lihat Keranjang');
    console.log('4. Keluar');
};
var main = function () {
    var running = true;
    while (running) {
        showMenu();
        var choice = (0, input_1.getInput)('Pilih opsi: ');
        switch (choice) {
            case '1':
                console.log('Fitur Tambah Barang belum tersedia.');
                break;
            case '2':
                console.log('Fitur Hapus Barang belum tersedia.');
                break;
            case '3':
                console.log('Fitur Lihat Keranjang belum tersedia.');
                break;
            case '4':
                console.log('Terima kasih telah menggunakan aplikasi kasir.');
                running = false;
                break;
            default:
                console.log('Opsi tidak valid. Silakan coba lagi.');
        }
    }
};
main();
