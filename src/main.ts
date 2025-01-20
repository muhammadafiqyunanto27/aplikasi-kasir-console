
import {  getInput } from './utils/input';
import { addItem, deleteItem, loadItemsFromFile } from './utils/file';
import { Item } from './types/item';
import { v4 as uuidv4 } from 'uuid';

const showMenu = () => {
  console.log('\n=== Menu Kasir ===');
  console.log('1. Tambah Barang');
  console.log('2. Hapus Barang');
  console.log('3. Lihat Keranjang');
  console.log('4. Keluar');
};

(async () => {
  let running = true;

  while (running) {
    showMenu();
    const choice = await getInput( 'Pilih opsi: ');

    switch (choice) {
      case '1': {
        const name = await getInput( 'Nama barang: ');
        const price = parseFloat(await getInput( 'Harga barang: '));
        const quantity = parseInt(await getInput( 'Jumlah barang: '), 10);

        const newItem: Item = {
          id: uuidv4(),
          name,
          price,
          quantity
        };

        addItem(newItem);
        console.log('Barang berhasil ditambahkan.');
        break;
      }
      case '2': {
        const id = await getInput( 'Masukkan ID barang yang akan dihapus: ');
        deleteItem(id);
        console.log('Barang berhasil dihapus.');
        break;
      }
      case '3': {
        const items = loadItemsFromFile();
        console.log('\n=== Daftar Barang ===');
        items.forEach(item => {
          console.log(`ID: ${item.id}, Nama: ${item.name}, Harga: ${item.price}, Jumlah: ${item.quantity}`);
        });
        break;
      }
      case '4':
        console.log('Terima kasih telah menggunakan aplikasi kasir.');
        running = false;
        break;
      default:
        console.log('Opsi tidak valid. Silakan coba lagi.');
    }
  }

//   rl.close();
})();