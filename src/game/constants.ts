export const GRAVITY = 0.5;
export const JUMP_FORCE = -10;
export const MOVE_SPEED = 5;
export const PLAYER_SIZE = 32;
export const BLOCK_SIZE = 32;

export const ITEMS = {
  WOODEN_SWORD: {
    id: 'wooden_sword',
    name: 'Wooden Sword',
    type: 'weapon',
    damage: 5
  },
  DIRT_BLOCK: {
    id: 'dirt_block',
    name: 'Dirt Block',
    type: 'block'
  }
} as const;