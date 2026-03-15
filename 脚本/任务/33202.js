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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的开始脚本还没有修复哦。它的脚本位于： #b 脚本/任务/33202.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
            }
        }
    }
}

function stage0(d, c, b) {
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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/33202.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.askMenu_Bottom("你们这么做很愚蠢。\r\n你们根本没有胜算。\r\n#b#L0#这你怎么知道呢？#l", 37, 1540652)
        } else {
            if (status === a++) {
                cm.askMenu_Bottom("你看到黑色天堂还不知道吗？\r\n一个人是根本无法对付黑色天堂的。\r\n#b#L0#………………#l", 37, 1540652)
            } else {
                if (status === a++) {
                    cm.askMenu_Bottom("搞什么啊……你为什么这副表情？？\r\n\r\n\r\n#b#L0#你的名字和行为完全吻合。#l", 37, 1540652)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("你想说我看起来总是不高兴？\r\n我和你真是谈不到一块去。", 37, 1540652, false, true)
                    } else {
                        if (status === a++) {
                            cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 3);
                            cm.forceCompleteQuest(33192);
                            cm.gainExp(Math.pow(cm.getLevel(), 3) / 3);
                            cm.forceCompleteQuest(33202);
                            cm.updateInfoQuest(33200, "failCount=7;underAttack=1;androidHelmet=2");
                            cm.gainItem(4034235, -10);
                            cm.gainItem(4034237, -2);
                            cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};