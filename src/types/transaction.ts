export interface Transaction {
    id: string;
    date: string;
    status: 'lunas' | 'belum lunas';
    method: 'cash' | 'transfer';
    total: number;
  }
  