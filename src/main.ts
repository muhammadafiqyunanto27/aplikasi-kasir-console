import { getInput } from "./utils/input";

console.log('Halo Selamat Datang di Aplikasi Kasir');
const name = getInput('Masukan Nama Anda')
console.log(`Halo ${name}! Selamat datang di aplikasi kasir`)

const showMenu = () => {
    console.log('\n=== Menu Kasir ===');
    console.log('1. Tambah Barang');
    console.log('2. Hapus Barang');
    console.log('3. Lihat Keranjang');
    console.log('4. Keluar');
}


const main = () => {
    let running = true;
  
    while (running) {
      showMenu();
      const choice = getInput('Pilih opsi: ');
  
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
  
  