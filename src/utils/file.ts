
import fs from 'fs';
import path from 'path';
import { Item } from '../types/item';

const filePath = path.join(__dirname, '../../data.json');

export const saveItemsToFile = (items: Item[]): void => {
  fs.writeFileSync(filePath, JSON.stringify(items, null, 2), { encoding: 'utf-8' });
};

export const loadItemsFromFile = (): Item[] => {
  if (!fs.existsSync(filePath)) {
    return [];
  }
  const data = fs.readFileSync(filePath, { encoding: 'utf-8' });
  return JSON.parse(data);
};

export const addItem = (item: Item): void => {
  const items = loadItemsFromFile();
  items.push(item);
  saveItemsToFile(items);
};

export const deleteItem = (id: string): void => {
  let items = loadItemsFromFile();
  items = items.filter(item => item.id !== id);
  saveItemsToFile(items);
};