import { Bot } from "mineflayer";

export const getDirection = (bot: Bot) => {
    const yaw = bot.entity.yaw;

    if (yaw >= 45 && yaw < 135) {
        return "E";
    } else if (yaw >= 135 && yaw < 225) {
        return "S";
    } else if (yaw >= 225 && yaw < 315) {
        return "W";
    } else {
        return "N";
    }
}

export const getHeldItemId = (bot: Bot) => {
    const item = bot.entity.heldItem;

    if (!item) {
        return 0;
    }

    return item.type;
}

export const getHeldItemDurability = (bot: Bot) => {
    const item = bot.entity.heldItem;

    if (!item || item.maxDurability <= 0) {
        return 0;
    }

    return item.maxDurability - item.durabilityUsed;
}
