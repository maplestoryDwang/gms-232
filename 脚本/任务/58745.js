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
            cm.sendNormalTalk("啊~好羡慕鵺大人啊。", 4, 9112010, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("啊……？", 16, 9112010, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("你知道吗？\r\n听说鵺大人在死后6天内就复活了。", 4, 9112010, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("真是羡慕死我了！", 4, 9112010, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("要是我也能复活该多好啊~", 4, 9112010, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("请问……你能不能跟我说说鵺大人的事？", 16, 9112010, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("嗬~你一个大活人为啥对鵺大人感到好奇啊……\r\n天下没有白吃的午餐~你拿出点诚意来我就告诉你~！\r\n你去给我找本干净的鵺福音回来。", 4, 9112010, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("这个嘛……我还进不了亡者窟……", 16, 9112010, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("关我什么事？弄不来圣经，我也无可奉告~", 4, 9112010, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("……（妖怪们还真是任性啊……去找本鵺福音回来吧。）", 16, 9112010, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.forceStartQuest(58745, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/58745.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("喂……我拿来鵺福音了。", 16, 9112010, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("哦，你拿来了！", 4, 9112010, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(58745);
                    cm.sendNormalTalk("嗯……\r\n（鬼童子正在阅读鵺福音。）", 4, 9112010, true, true);
                    cm.gainItem(4034858, -1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("哎？什么嘛，这是假的呀！\r\n你看这字体歪歪扭扭的，估计是哪个家伙手抄的吧？", 4, 9112010, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("这事有古怪。我明明听说这是从太古时期流传下来的书，可看这玩意儿，跟小孩子的图画日记有什么区别！切。", 4, 9112010, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("怎么，你还有话要说？", 4, 9112010, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("没……没有。", 16, 9112010, true, false)
                                } else {
                                    if (status === a++) {
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
};