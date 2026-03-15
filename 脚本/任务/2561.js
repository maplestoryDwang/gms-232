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
            cm.sendNormalTalk("吱吱～吱，吱！吱吱吱！吱吱～！吱！吱？！", 0, 1096003, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("我明明是想到冒险岛世界去当一个冒险家的……到底是怎么回事？", 2, 1096003, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("吱吱吱吱～吱！吱吱！吱吱吱吱吱！", 0, 1096003, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("和船长说话的时候看了看守卫，好像是……没错！蝙蝠怪！蝙蝠怪出现了！然后我……就那样掉下了船？那怎么会没事呢？虽然我#b知道游泳的方法#k，但是在这个过程中，我不可能神智清醒啊……难道，我是个游泳神童吗？！", 2, 1096003, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("吱吱吱吱吱！吱！吱！(有只小猴子好像很不满地在那里上窜下跳。看上去好像还很小。我醒来之后看到的第一个面孔，好像就是它……)", 0, 1096003, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("嗯……？从刚才开始，你就一直想跟我说话吗？嗯？手上拿着的是……(猴子从怀里拿出一个苹果。看上去很好吃的熟透的苹果。但是……给我苹果干什么？)\r\n\r\n#i2010000#", 2, 1096003, true, true)
                            } else {
                                if (status === a++) {
                                    cm.askAcceptDecline("吱吱吱吱吱～咕嘟！(猴子一脸郁闷的表情，把苹果递给我，做出吃的动作。难道……它知道我体力很虚弱，让我吃掉它！这家伙，心地还挺善良的！)", 0, 1096003)
                                } else {
                                    if (status === a++) {
                                        cm.forceStartQuest(2561, "");
                                        cm.sendNormalTalk("(获得了看上去很好吃的苹果。吃一口看看吧。按#bI#k键，可以打开背包吗～？)", 2, 1096003, false, true)
                                    } else {
                                        if (status === a++) {
                                            cm.gainItem(2010000, 1);
                                            cm.effect_OnUserEff("UI/tutorial.img/cannon/2");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/2561.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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