/* eslint-disable @typescript-eslint/no-explicit-any */
import { browser } from '$app/env';
import { Buffer } from 'buffer/';
import Gun from 'gun/gun';
import 'gun/lib/then';
import 'gun/lib/radix';
import 'gun/lib/radisk';
import 'gun/lib/store';
import 'gun/lib/rindexed';
import 'gun/nts';

if (browser) {
	(window as any).Buffer = Buffer;
	(window as any).setImmediate = setTimeout;
}

export { default as SEA } from 'gun/sea.js';
export const gun = new Gun({ peers: [import.meta.env.VITE_GUN_PEER] });
export const user = gun.user();
