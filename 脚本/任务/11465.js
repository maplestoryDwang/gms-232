var status = -1;

function start(c, b, a) {
    if (c == 0 && status == 0) {
        cm.sendOk("这可是免费赠送的……如果你想领取礼物，请再来和我说话。");
        cm.dispose();
        return
    } else {
        if (c == 0) {
            status--
        } else {
            status++
        }
    }
    if (status == 0) {
        cm.askYesNo("你好，#b#h0##k。在传说嘉年华期间，每天都会发放可以移动到任何村庄的#b#t2430455##k一次。你想现在领取吗？")
    } else {
        if (status == 1) {
            if (cm.canHold(2430455)) {
                cm.gainItem(2430455, 1);
                cm.forceCompleteQuest();
                cm.sendOk("#b#t2430455##k存在30分钟的冷却时间。希望你好好使用，在冒险岛度过快乐的时光～")
            } else {
                cm.sendOk("背包空间不足.")
            }
            cm.dispose()
        }
    }
}

function end(c, b, a) {};