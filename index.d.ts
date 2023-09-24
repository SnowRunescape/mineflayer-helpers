import { Bot } from "mineflayer";
import { Item } from "prismarine-item";
import { Entity } from "prismarine-entity"
import { Block } from "prismarine-block"

declare module "mineflayer-utils";

export function getDirection(bot: Bot): string;
export function getHotBarItems(bot: Bot): Item[];
export function getHeldItemId(bot: Bot): number;
export function getHeldItemDurability(bot: Bot): number;
export function getEntityOrBlockAtCursor(bot: Bot): Entity | Block | null;

export function tryGetItemIdByNome(bot: Bot, value: number|string): number;
export function getItemBySlotId(slotId: number, items: Item[]): Item | undefined;
