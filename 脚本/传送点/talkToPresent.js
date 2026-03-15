function enter() {
    cm.openScriptNpc()
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (cm.isQuestActive(38066)) {
        cm.sendNormalTalk("我分明看到了门是开启的。这就意味着我不属于冒险岛世界了。", 16, 0, false, true);
        cm.updateInfoQuest(38066, "");
        cm.forceStartQuest(38066, "");
        cm.forceCompleteQuest(38066);
        cm.gainExp(40000);
        cm.dispose();
        return
    }
    if (cm.isQuestFinished(38066) && !cm.isQuestFinished(38068)) {
        cm.warp(927030060, 0, false);
        cm.dispose();
        return
    }
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.askMenu("这是位于时间神殿中央的现在之门。\r\n#L2#进入现在之门。#l", 4, 1520021)
        } else {
            if (status === a++) {
                if (cm.isQuestActive(32307)) {
                    cm.sendNormalTalk("这是从没有人进入过的时间之门。", 16, 0, false, true);
                    cm.dispose();
                    return
                } else {
                    if ((cm.isQuestFinished(32307) && cm.getQuestStatus(32308) == 0) || cm.isQuestActive(32312)) {
                        cm.warp(927020200, 0, false)
                        cm.dispose();
                    } else {
                        if (cm.isQuestFinished(1465)) {
                            cm.warp(450001003, 0)
                        } else {
                            cm.sendNormalTalk("只有唤醒新力量的人才能进入。\r\n(必须先完成5转及五转任务。)", 4, 1520021, false, false)
                        }
                        cm.dispose()
                    }
                }
                cm.dispose()
            }
        }
    }
};