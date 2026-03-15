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
            cm.sendNormalTalk("怎，怎么回事。瞬间消失了。去哪儿啦？", 0, 9390244, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("莱文看那里！", 2, 9390244, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("不知何时已经回到了自己的舰船上去了嘛。岂有此理！到嘴的鸭子飞了！！", 0, 9390244, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("怎么办呢？就这么放弃太可惜了，但是对方可是被称为海盗王的男人啊。随便进入敌人的根据地会……", 2, 9390244, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("我也知道。可是到目前为止见过无数的普赛依远征队。但一次也没有成功过。现在这是我们走运。如果现在放弃的话说不定就再也没可能了。", 0, 9390244, true, true)
                        } else {
                            if (status === a++) {
                                cm.askYesNo("这也许是普赛依布下的陷阱。你不和我一起去也没关系。但是我要去。为了我，为了我们的商团，为了凯梅尔兹！", 0, 9390244)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("嗯……那么好吧。我也和你一块去。", 2, 9390244, false, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("真的吗？也许可能就像你说的那样是陷阱呢。", 0, 9390244, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("啊哎，没关系。我自己会想办法逃出来的。", 2, 9390244, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("我也一起去吧？", 4, 9390204, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("你就别去了。你留下来守好这条船。", 0, 9390244, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("好了，#h0#走吧！我来开条活路！", 0, 9390244, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("等会，你在这儿等着。那地方我要一个人去。", 2, 9390244, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("你说什么呢。你一个人去置身死地，让我装作视而不见吗？", 0, 9390244, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk("我说莱文。你现在是这船的舰长。舰长如果离开了这船万一发生什么事的话可怎么办。我们必须得顾虑到万一若是发生不测的情况啊。", 2, 9390244, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk("虽说是那样……可是也……", 0, 9390244, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk("作为舰长你必须守住船。", 2, 9390244, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk("……拜托你了。", 0, 9390244, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.fieldEffect_SetObjectState(848000, "PuPotal");
                                                                                    cm.forceStartQuest(17678, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/17678.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("普赛依！", 2, 9390246, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("我正等着你们呢。", 0, 9390246, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(17678);
                    cm.dispose()
                }
            }
        }
    }
};