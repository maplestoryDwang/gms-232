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
            cm.sendNormalTalk("看不出来你还是一个看到宅子的幽灵#b也不会逃走#k，只要遇到好奇的事，#b不管是什么都要查清楚的#k人啊。", 4, 9062243, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("嗯……幽灵没什么可怕的，规定呢……也不是我故意想要违背的……", 2, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("我没有责怪你。\r\n我反而一直在等你这样的人出现。\r\n即使与幽灵对视也不会逃走的#b胆量过人的人#k，有问题就一定打破砂锅问到底的#b勇敢的人#k，还有……#b不会无视他人的善良的人#k。", 4, 9062243, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("难道不是请我来参加假面舞会的吗？", 2, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("对，虽然邀请函上写的是让你参加舞会……\r\n但真正的目的#r并非如此#k。其实我是想拜托你#b结束这个受到诅咒的假面舞会#k。", 4, 9062243, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("让我结束舞会？", 2, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("对。 让它以后都#b不能再#k举行。", 4, 9062243, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("这是怎么一回事？", 2, 0, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("在我向你解释这一切之前，你先回#b客房1#k去吧。\r\n你不是还有#r必须要转告的事#k需要告诉向你请求帮助的#b可怕的假面#k吗？", 4, 9062243, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("....!", 2, 0, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("可是可怕的假面连自己已经死了都不知道……\r\n要告诉他真相实在是太#r残忍#k了。", 2, 0, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("如果这就叫#r残忍#k的话，那以后我们还必须#b重复好几次#k这样的残忍行为。我们一起去#b客房1#k吧。", 4, 9062243, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.forceStartQuest(100439, "");
                                                            cm.OnStartNavigation(993175460, 0, "pt_go993175400", 100439);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/100439.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("哦，你回来了！有关侵略#b五洞村#k的怪物，你有没有查到什么！", 4, 9062246, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(100439);
                cm.dispose()
            }
        }
    }
};