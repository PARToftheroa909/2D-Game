import React from 'react';
import { Item } from '../game/types';

interface InventoryProps {
  items: Item[];
  onSelectItem: (item: Item) => void;
}

export function Inventory({ items, onSelectItem }: InventoryProps) {
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-75 p-4">
      <div className="flex gap-2">
        {items.map((item, index) => (
          <div
            key={index}
            onClick={() => onSelectItem(item)}
            className="w-12 h-12 bg-gray-700 border border-gray-600 flex items-center justify-center cursor-pointer hover:bg-gray-600"
          >
            <span className="text-white text-xs">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}