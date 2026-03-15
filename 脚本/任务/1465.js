var status = -1;
var selectionLog = [];

function start(e, c, b) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk("三块神秘石会引导你找到新的力量。", 4, 2140001, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo("好了，请闭上眼睛。我会在你的力量中唤醒新的潜力。\r\n\r\n#b（点击确认时，完成5转）", 4, 2140001)
            } else {
                if (status === a++) {
                    cm.updateInfoQuest(1465, "phase=1");
                    cm.updateInfoQuest(1465, "phase=2");
                    cm.updateInfoQuest(1465, "phase=2;new=1");
                    cm.updateInfoQuest(1465, "phase=2;new2=1;new=1");
                    cm.forceCompleteQuest(1465);
                    cm.updateInfoQuest(500631, "vcheck=1");
                    cm.fieldEffect_SaveEff("Effect/5skill.img/screen");
                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/5thJob", 100);
                    cm.sendNormalTalk("神秘石可以用来累积#r战斗经验#k。激活后狩猎经验值会累积在神秘石中，积累完成后可以通过经验值药水再获得一次。", 4, 2140001, false, true);
                    cm.gainItem(2435902, 5);
                    cm.effect_OnUserEff("Effect/5skill.img/character_delayed")
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("我送了你只有你才能使用的专属技能。请确认一下。", 4, 2140001, true, true);
                        var d = Math.floor(cm.getJob() / 100);
                        switch (d) {
                            case 101:
                                break;
                            case 151:
                                break;
                            default:
                                break
                        }
                    } else {
                        if (status === a++) {
                            cm.openUI(1130);
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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/1465.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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