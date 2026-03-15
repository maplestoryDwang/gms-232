var status = -1;

function start() {
    action(1, 0, 0)
}

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.setInGameDirectionMode(false, false, false);
            cm.setStandAloneMode(false);
            cm.npc_ChangeController(3003143, "oid=1", -323, 42, 22, -373, -273, 1, false, false);
            cm.sendNormalTalk_Bottom("#b（拾取了卡奥离开时留下的神秘徽章：消亡旅途。）", 16, 3003143, false, true)
        } else {
            if (status === a++) {
                cm.forceStartQuest(39364, "000");
                cm.forceStartQuest(34120, "");
                cm.forceCompleteQuest(34120);
                cm.gainItem(1712001, 1);
                cm.getTopMsgFont("现在你可以在神秘河打猎获取神秘徽章了，怪物公园公关也可以获取神秘徽章了。", 3, 20, 20, 0);
                cm.dispose()
            }
        }
    }
}

function end(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的结束脚本还没有修复哦。它的脚本位于： #b /脚本/任务/#e" + e + "#n.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻完成这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceCompleteQuest();
                cm.dispose()
            }
        }
    }
};