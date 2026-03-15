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
            cm.sendNormalTalk("呜哇啊啊啊-", 4, 9400225, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("呜呜---，唔，抽泣", 4, 9400224, true, true)
            } else {
                if (status === a++) {
                    cm.askAcceptDecline("#b(要让孩子们停止哭泣，#t4034997:#最有效！去收集10个#t4034997:#吧。)", 2, 0)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#b孩子们，等我一会儿！", 2, 0, false, true)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(63057, "");
                            cm.dispose()
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
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/63057.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
            }
        }
    }
}

function end(f, d, c) {
    if (status == 0 && f == 0) {
        cm.dispose();
        return
    }(f == 1) ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status == b++) {
            cm.sendNormalTalk("呜哇啊啊啊-", 4, 9400225, false, true)
        } else {
            if (status === b++) {
                cm.sendNormalTalk("#b孩子们！别哭了，尝尝这个！是好吃的零食哦。", 2, 0, true, true)
            } else {
                if (status === b++) {
                    cm.sendNormalTalk("呜哇哇---，嗝，零食？", 5, 9400225, true, true);
                    cm.gainItem(4034997, -10)
                } else {
                    if (status === b++) {
                        cm.sendNormalTalk("#b(果然有效，马上就不哭了。)", 3, 0, true, true)
                    } else {
                        if (status === b++) {
                            cm.forceCompleteQuest(63057);
                            cm.gainExp(158800);
                            cm.addNumberForQuestInfo(63057, "count", 1);
                            cm.setNumberForQuestInfo(63090, "raining", 0);
                            cm.setQuestCustomData(63092, "");
                            cm.setQuestCustomData(63096, "happy");
                            cm.setQuestCustomData(63252, "click");
                            var a = cm.getNumberFromQuestInfo(63090, "DnN") == 0;
                            var e = cm.getNumberFromQuestInfo(63090, "lightning") == 1;
                            if (!e) {
                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/PL_AfterLand/RotationBack", 128);
                                cm.updateInfoQuest(63095, "angle=" + (a ? 90 : 180));
                                cm.afterlandChangeMapObject("RotationBack", 0, 0, 0, 1, a ? 90 : -90, 100, 1)
                            }
                            cm.afterlandUpdateEnvironment();
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};