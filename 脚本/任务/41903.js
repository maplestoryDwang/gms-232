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
            cm.askYesNo("听我的重点讲座，就能马上熟悉专业技术。\r\n采药和采矿要不要一次学习？", 0, 2400001)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("所谓专业技术，是指从匠人街的匠人那里……", 0, 2400001, false, true);
                cm.gainSkillBuff(100001263)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("…………\r\n因此，药草采集……\r\n\r\n（戴尔罗的说明持续了一小时。）", 0, 2400001, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("现在你可以通过药材采集和采矿，获得制作所需要的材料。在野外的时候也顺便留意一下有没有药材和矿石！", 0, 2400001, true, true)
                    } else {
                        if (status === a++) {
                            cm.teachSkill(92000000, 16777216, 10);
                            cm.teachSkill(92010000, 16777216, 10);
                            cm.fieldEffect_PlayFieldSound("profession/levelup", 100);
                            cm.forceCompleteQuest(41903);
                            cm.effect_OnUserEff("Effect/OnUserEff.img/professions/equip_product_levelup");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/41903.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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