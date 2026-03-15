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
            cm.sendNormalTalk("#h0#！你究竟去了什么地方？我找了你好久！", 5, 1540763, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("奥尔卡？！你还活着？", 3, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("哼！现在问题不是这个。\r\n现在有件事急需你来做决定。", 5, 1540763, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("急需我做决定的事？", 3, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("哎呀，那个自大的家伙说自己救了你？救你的人明明是我啊！", 5, 1540763, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("自大的家伙？究竟是谁啊？", 3, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("是我，#h0#。", 5, 1540764, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("赫丽娜？", 3, 0, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("#h0#，虽然我自己也是这样的，但我这次真要好好改改那个没礼貌的精灵的脾气。", 5, 1540764, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("这不是我自夸……救你的人明明是我啊？请快把这一切跟那小鬼头说清楚。", 5, 1540764, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("你在说什么啊！明明是我救的！", 5, 1540763, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("并不是只要耍赖就能解决所有事情的，小鬼头……", 5, 1540764, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("什么小鬼头！你几岁！", 5, 1540763, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("喔喔，你们别吵了！", 3, 0, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk("所以说，你的想法是什么啊？你觉得是谁救了你？", 5, 1540763, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk("让我想想……", 3, 0, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk("嗯，你慢慢想想。真正救你的人到底是谁。", 5, 1540764, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.askAcceptDecline("好的，我给你点时间。等你整理好自己的思绪就告诉我！", 1, 1540763)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.forceStartQuest(33287, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/33287.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("你整理好了吗？嗯，救你的人到底是谁？", 5, 1540763, false, true)
        } else {
            if (status === a++) {
                cm.askMenu("慎重作出选择…… #b\r\n#L0# 救我的人是奥尔卡。#l\r\n#L1# 救我的人是赫丽娜 #l", 1, 1540763)
            } else {
                if (status === a++) {
                    if (selectionLog[2] == 0) {
                        cm.sendNormalTalk("我很失望……", 5, 1540764, false, true);
                        cm.gainItem(2433405, 1)
                    } else {
                        cm.sendNormalTalk("愚蠢的人类！", 5, 1540763, false, true);
                        cm.gainItem(2433406, 1)
                    }
                    cm.forceCompleteQuest(33287)
                } else {
                    if (status === a++) {
                        if (selectionLog[2] == 0) {
                            cm.sendNormalTalk("果不其然！我还以为你很愚笨，没想到重要的事情你还是记得的嘛？\r\n如果以后你有什么困难，就告诉我！我会扶持你的！", 5, 1540763, true, true)
                        } else {
                            cm.sendNormalTalk("谢谢你。我还生怕你会忘记，所以一直很担心。\r\n 如果以后你有什么困难，请告诉我。我会扶持你的。", 5, 1540764, true, false)
                        }
                    } else {
                        if (status === a++) {
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};