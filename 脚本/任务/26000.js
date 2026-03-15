var status = -1;

function start(c, b, a) {
    if (c == 1) {
        status++
    } else {
        cm.sendNext("你不想现在领取吗？需要的话，请在周一之内领走。");
        cm.dispose();
        return
    }
    if (cm.getGuild().getLevel() < 1 || !cm.getGuild().hasSkill(91000006)) {
        cm.dispose();
        return
    }
    if (status == 0) {
        cm.askYesNo("家族定期支援物品到了。来，拿着。希望你不要有什么不满。努力活动，等家族等级提高之后，就可以获得更多的东西了。")
    } else {
        if (!cm.canHold(2002037, cm.getGuild().getLevel() * 20)) {
            cm.sendOk("请确保您有足够的背包空间。")
        } else {
            cm.gainItemPeriod(2002037, cm.getGuild().getLevel() * 20, 7);
            cm.forceCompleteQuest();
            cm.sendNext("这一周辛苦你了。下周一的时候，还会有新的支援物品，到时你再过来看看。")
        }
        cm.dispose()
    }
}

function end(c, b, a) {
    if (c == 1) {
        status++
    } else {
        cm.sendNext("你不想现在领取吗？需要的话，请在周一之内领走。");
        cm.dispose();
        return
    }
    if (cm.getGuild().getLevel() < 1 || !cm.getGuild().hasSkill(91000006)) {
        cm.dispose();
        return
    }
    if (status == 0) {
        cm.askYesNo("家族定期支援物品到了。来，拿着。希望你不要有什么不满。努力活动，等家族等级提高之后，就可以获得更多的东西了。")
    } else {
        if (!cm.canHold(2002037, cm.getGuild().getLevel() * 20)) {
            cm.sendOk("请确保您有足够的背包空间。")
        } else {
            cm.gainItemPeriod(2002037, cm.getGuild().getLevel() * 20, 7);
            cm.forceCompleteQuest();
            cm.sendNext("这一周辛苦你了。下周一的时候，还会有新的支援物品，到时你再过来看看。")
        }
        cm.dispose()
    }
};