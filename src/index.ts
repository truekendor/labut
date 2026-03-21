import createModule from './native/chess_api.js';
import type { MainModule, ChessGame } from './native/chess_api.d.ts';

export type { MainModule, ChessGame };

let mod: MainModule;
let modulePromise: Promise<MainModule>;

export async function init() {
  if (!modulePromise) {
    modulePromise = createModule().then((mod) => {
      mod.initChess();
      return mod;
    });
  }
  return modulePromise;
}

