import { Bot } from "mineflayer";
import { Item } from "prismarine-item";

declare module 'mineflayer-utils';

export function getDirection(bot: Bot): string;
export function getHeldItemId(bot: Bot): number;
export function getHeldItemDurability(bot: Bot): number;

export function tryGetItemIdByNome(bot: Bot, value: number|string): number;
export function getItemBySlotId(bot: Bot): number;
export function getHeldItemDurability(slotId: number, items: Item[]): Item | undefined;
