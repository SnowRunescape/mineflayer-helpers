import { Bot } from "mineflayer";
import { Item } from "prismarine-item";
import minecraftData from "minecraft-data"

export const tryGetItemIdByNome = (bot: Bot, value: number|string) => {
    if (/^[0-9]+$/.test(`${value}`)) {
        return Number.parseInt(`${value}`);
    }

    const mcData = minecraftData(bot.version);
    const item = mcData.itemsByName[value];

    return item.id ?? 0;
}

export const getItemBySlotId = (slotId: number, items: Item[]) => {
    return items.find(item => item.slot == slotId);
}
