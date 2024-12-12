import { useEffect, useRef } from 'react';
import { Player } from './types';
import { GRAVITY, JUMP_FORCE, MOVE_SPEED } from './constants';

export function useGameLoop(player: Player, setPlayer: (p: Player) => void) {
  const keysPressed = useRef<Set<string>>(new Set());

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      keysPressed.current.add(e.code);
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      keysPressed.current.delete(e.code);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    const gameLoop = () => {
      setPlayer(prev => {
        let velocityX = 0;
        let velocityY = prev.velocityY + GRAVITY;

        if (keysPressed.current.has('ArrowLeft')) {
          velocityX = -MOVE_SPEED;
        }
        if (keysPressed.current.has('ArrowRight')) {
          velocityX = MOVE_SPEED;
        }
        if (keysPressed.current.has('Space') && !prev.isJumping) {
          velocityY = JUMP_FORCE;
        }

        // Simple ground collision
        if (prev.y + velocityY > 400) {
          velocityY = 0;
          return {
            ...prev,
            y: 400,
            velocityX,
            velocityY,
            isJumping: false
          };
        }

        return {
          ...prev,
          x: prev.x + velocityX,
          y: prev.y + velocityY,
          velocityX,
          velocityY,
          isJumping: true
        };
      });
    };

    const intervalId = setInterval(gameLoop, 1000 / 60);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [setPlayer]);
}