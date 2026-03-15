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
            cm.askAcceptDecline("好，#h0#！和我一起击退敌人吧！虽然我一个人的时候被敌人击败了，但和你一起，我们一定能消灭黑魔女！", 0, 2531005)
        } else {
            if (status === a++) {
                cm.forceStartQuest(32660, "");
                cm.curNodeEventEnd(true);
                cm.eventSKill(0);
                cm.setInGameDirectionMode(true, true, true);
                cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1600)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_Monologue("#fs30#\r\n\r\n#fNpc/2500001.img/stand/0#    Mission : 粉碎入侵者\r\n\r\n\r\n#fs18##fn黑体#                  把入侵者全部粉碎吧. \r\n                  通过右侧传送口入场！", 1);
                    cm.effect_Voice("Voice.img/Library/Knight/M/0", 100)
                } else {
                    if (status === a++) {
                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(1600);
                        cm.effect_Voice("Voice.img/Library/Knight/M/7", 100)
                    } else {
                        if (status === a++) {
                            cm.eventSKill(0);
                            cm.setInGameDirectionMode(false, true, false);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/32660.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("啊哈哈哈！傻了吧唧的骑士，多亏了你，事情才会如此简单。", 0, 2530004, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("咳……黑魔女！ 你做了什么！", 4, 2531001, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("算不了什么。因为神兽力量的存在，诅咒无法通过圣地外围。要想解决的方法也很简单。那就是圣地内部有人亲自做诅咒的媒介。", 0, 2530004, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("诅咒在持续进行中。新的女皇看起来很可爱……马上她就会成为一块漂亮的石头。哇哈哈。", 0, 2530004, true, true)
                    } else {
                        if (status === a++) {
                            cm.forceCompleteQuest(32660);
                            cm.gainExp(233711);
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};