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
            cm.sendNormalTalk("你好，你来执行任务啦。", 0, 3001100, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("经过考虑，我们决定将#r特雷格罗#k的实验室作为下一个进攻目标。其实#r维克特#k和#r特雷格罗#k的力量并没有多大差距，因为我们掌握了更多#r特雷格罗#k的情报，所以才做出了这个决定。", 0, 3001100, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("请你进入#b#m401050000##k，进攻#b#m401052000##k。根据#b#p3001107##k的侦察，通往#b特雷格罗#k那里的路上有许多被化学药品强化的创造物镇守。", 0, 3001100, true, true)
                } else {
                    if (status === a++) {
                        cm.askAcceptDecline("你就当是探索战吧。请你在#r特雷格罗#k的创造物中，消灭100只#b#p3001107##k侦察发现的#r#o2400118##k，并收集50个它们头顶上的#b#t4000737##k，以便我们对其特点进行研究。\r\n\r\n#r#e（接受时，将自动移至该区域。）", 0, 3001100)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(31504, "");
                            cm.sendNormalTalk("啊，在这次的任务中，你只要直接去搜集长颈瓶带回来就行。但在今后的任务中，请通过#b卡塔利安的D-02发报机#k跟我联系。现在你手上没有，我给你吧。", 1, 3001100, false, true);
                            cm.gainItem(2430963, 1)
                        } else {
                            if (status === a++) {
                                cm.dispose();
                                cm.warp(401052000, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/31504.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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