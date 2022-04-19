import Gun from 'gun/gun';

export const gun = new Gun({ peers: [import.meta.env.VITE_GUN_PEER] });
export const user = gun.user();
