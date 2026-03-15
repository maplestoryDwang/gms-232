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
            cm.askYesNo("这个任务的开始脚本还没有修复哦。它的脚本位于： #b 脚本/任务/64901.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/64901.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face1##b为迎接新年，你来寻找爆竹#k了啊！谢谢你！", 37, 9400921, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face2#棒呆了！那我又可以开始玩鞭炮了~！", 37, 9400920, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face4#艾米！", 37, 9400921, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face4#我开玩笑，开玩笑！哼，欧巴都不让人开玩笑！\r\n等着庆典开始不就好了吗~！", 37, 9400920, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#谢谢你，#h0#。多亏了你，我可以再一次着手准备爆竹了。", 37, 9400921, true, true)
                        } else {
                            if (status === a++) {
                                cm.forceCompleteQuest(64901);
                                cm.fieldEffect_PlayFieldSound("Sound/Game.img/QuestClear", 100);
                                cm.gainItem(4036629, -100);
                                cm.effect_OnUserEff("Effect/BasicEff.img/QuestClear");
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
};