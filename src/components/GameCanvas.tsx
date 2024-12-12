import React, { useRef, useEffect } from 'react';
import { Player, Block } from '../game/types';
import { PLAYER_SIZE, BLOCK_SIZE } from '../game/constants';

interface GameCanvasProps {
  player: Player;
  blocks: Block[];
}

export function GameCanvas({ player, blocks }: GameCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw player
    ctx.fillStyle = '#ff0000';
    ctx.fillRect(player.x, player.y, PLAYER_SIZE, PLAYER_SIZE);

    // Draw blocks
    blocks.forEach(block => {
      ctx.fillStyle = '#8b4513';
      ctx.fillRect(block.x, block.y, BLOCK_SIZE, BLOCK_SIZE);
    });

    // Draw health bar
    ctx.fillStyle = '#00ff00';
    ctx.fillRect(10, 10, (player.health / 100) * 200, 20);
    ctx.strokeStyle = '#000000';
    ctx.strokeRect(10, 10, 200, 20);
  }, [player, blocks]);

  return (
    <canvas
      ref={canvasRef}
      width={800}
      height={600}
      className="border border-gray-800"
    />
  );
}