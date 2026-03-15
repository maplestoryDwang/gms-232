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
            cm.forceStartQuest(20899, "");
            cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/20899.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("欢迎你，#b#h0##k。我一直在等你。\r\n你还记得最初来到#b圣地#k的时候吗？修炼教官奇库教你握剑时的情景，至今仍然记忆犹新，没想到一转眼你就变得这么强了。你现在已经足以和#b米哈尔#k、#b奥兹、伊莉娜、伊卡尔特，#k还有#b胡克#k比肩了。", 0, 1101000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("在五位骑士团长之后，#b#h0##k，我和神兽认可你为#b冒险骑士团的第六颗星星#k。", 0, 1101000, true, true)
            } else {
                if (status === a++) {
                    cm.teachSkill(10001215, 0, -1);
                    cm.teachSkill(10001215, 1, 0);
                    cm.sendNormalTalk("在太阳升起的时候，人们看不见星星。平时谦逊地将自己隐藏起来，在黑暗的时候才会发出光芒。在黑魔法师的魔爪逐渐张开的危机时刻……#b#h0##k，你出现在了圣地。", 0, 1101000, true, true)
                } else {
                    if (status === a++) {
                        cm.gainItem(1142597, 1);
                        cm.sendNormalTalk("#b#h0##k，为了对抗#b黑魔法师#k的黑暗，冒险岛世界需要更多像你一样的人。希望今后你能继续与我同行。", 0, 1101000, true, true)
                    } else {
                        if (status === a++) {
                            cm.forceCompleteQuest(20899);
                            cm.sendNormalTalk("好了，就到这里……\r\n希望你能经常来找我，#b#h0##k。#b神兽#k离开之后，这里对我来说太大了。", 0, 1101000, true, false);
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};