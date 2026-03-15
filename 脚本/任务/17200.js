var status = -1;

function end(c, b, a) {
    if (c == 1) {
        status++
    } else {
        status--
    }
    if (status == 0) {
        cm.sendNext("想了解冒险岛世界改善过的强化方式吗？很简单，现在只需要点击物品栏的强化按钮，或者双击卷轴等，即可强化装备。")
    } else {
        if (status == 1) {
            cm.sendNextS("这样吗？真是好方便啊。")
        } else {
            if (status == 2) {
                cm.sendNext("是的，点击装备栏的强化按钮，就可以查看可适用的卷轴及潜能道具。此时只要双击卷轴,即可应用到装备。好好体验吧！");
                cm.forceStartQuest();
                cm.forceCompleteQuest();
                cm.dispose();
                cm.gainExp(500)
            }
        }
    }
};