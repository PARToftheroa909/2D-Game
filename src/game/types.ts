export interface Player {
  x: number;
  y: number;
  velocityX: number;
  velocityY: number;
  isJumping: boolean;
  health: number;
  inventory: Item[];
}

export interface Item {
  id: string;
  name: string;
  type: 'weapon' | 'block' | 'material';
  damage?: number;
}

export interface Block {
  x: number;
  y: number;
  type: string;
}