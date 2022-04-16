import Gun from 'gun/gun';

export const db = new Gun({ peers: [import.meta.env.VITE_GUN_PEER] });
