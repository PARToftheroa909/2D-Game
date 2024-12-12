import React, { useState } from 'react';
import { GameCanvas } from './components/GameCanvas';
import { Inventory } from './components/Inventory';
import { useGameLoop } from './game/useGameLoop';
import { Player, Block, Item } from './game/types';
import { ITEMS } from './game/constants';

function App() {
  const [player, setPlayer] = useState<Player>({
    x: 400,
    y: 300,
    velocityX: 0,
    velocityY: 0,
    isJumping: false,
    health: 100,
    inventory: [ITEMS.WOODEN_SWORD, ITEMS.DIRT_BLOCK]
  });

  const [blocks, setBlocks] = useState<Block[]>([
    { x: 200, y: 500, type: 'dirt' },
    { x: 232, y: 500, type: 'dirt' },
    { x: 264, y: 500, type: 'dirt' },
  ]);

  useGameLoop(player, setPlayer);

  const handleSelectItem = (item: Item) => {
    console.log('Selected item:', item.name);
  };

  return (
    <div className="relative min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="relative">
        <GameCanvas player={player} blocks={blocks} />
        <Inventory items={player.inventory} onSelectItem={handleSelectItem} />
      </div>
    </div>
  );
}

export default App;