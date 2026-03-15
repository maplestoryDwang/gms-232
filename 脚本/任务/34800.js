var status = -1;
var selectionLog = [];

function start(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom("#face0#为确保在外部区域的人身安全,最好提前装配为你提供的装备。", 36, 3001300, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#没、没错。现在不能犹豫不决了。", 37, 3001351, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#为防止战斗发生意外,看来要戴上手套了。", 37, 3001351, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#可是主人……你的体力有些下降。我这就发放药水帮你恢复体力。", 37, 3001300, true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#打开背包,双击药水,就能补充体力。", 37, 3001300, true, true, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#戴上#i1282021##b魔力手套#k后,再使用#i2000046##r药水#k吧？\r\n是啊,感觉这里可怕极了……必须做好万全的准备才行。", 37, 3001351, true, true, 1)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(34800, "");
                                    cm.gainItem(2000046, 1);
                                    cm.gainItem(2000000, 1);
                                    cm.gainItem(2000005, 30);
                                    cm.effect_OnUserEff("UI/tutorial.img/28");
                                    cm.dispose()
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

function stage0(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/34800.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
            }
        }
    }
}

function end(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.updateInfoQuest(34800, "back=1;weapon=1;out=1;item2=1;012=1");
            cm.forceCompleteQuest(34800);
            cm.updateInfoQuest(34800, "back=1;weapon=1;out=1;item2=1;exp=1;012=1");
            cm.sendNormalTalk_Bottom("#face0#你的体力已经恢复了。为你额外准备了一些药水,希望以备不时之需。", 37, 3001300, false, true, 1);
            cm.gainItem(2001502, 30);
            cm.gainItem(2001506, 30);
            cm.dispose()
        }
    }
};