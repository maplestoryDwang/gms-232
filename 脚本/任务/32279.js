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
            cm.sendNormalTalk("尼哈沙漠的宝石是在盗贼公会发现，并要交给赫丽娜的东西。你敢偷那个东西，胆子可不小啊。黑暗领主已经下令一定要抓住你。", 0, 1520010, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("我不是小偷！你口口声声说别人是小偷，这不是很可笑嘛！", 4, 1520008, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("居然如此诬陷我，不可原谅。我不是小偷，我是飞侠。", 0, 1520010, true, true)
                } else {
                    if (status === a++) {
                        cm.askMenu("我不是小偷呀，对吧，#h0#？那个时候偷走宝石的人不是我，对吧？\r\n#b#L0#犯人不是奥利维亚。#l\r\n#L1#犯人确实是奥利维亚。#l\r\n#L2#两位都冷静一下。#l", 5, 1520008)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("哼，是你看错了吧。", 0, 1520010, false, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("总之得把你移送到盗贼公会。你老老实实跟我来。", 0, 1520010, true, true)
                            } else {
                                if (status === a++) {
                                    cm.askMenu("#h0#！这家伙实在太顽固了，你没有什么好方法吗？\r\n#b#L0#我也不知道。#l\r\n#L1#帽子是他的弱点。#l", 5, 1520008)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("!!!", 0, 1520010, false, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("帽子？啊，真的吗？", 4, 1520008, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("啊哈~看来帽子的确是他的弱点！你怎么会看出来那是他的弱点呢？", 4, 1520008, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("别过来！\r\n#h0#，这可怎么办呀！", 0, 1520010, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("到底是谁不听别人的解释还反复折腾啊？总之，偷走宝石的小偷不是我，而是变身术士。我是为了找到那个证据才来到这圣地的。#h0#，真是太感谢你了。这家伙就先让他去，我们去找#b南哈特#k吧。", 4, 1520008, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.forceStartQuest(32279, "");
                                                            cm.sendNormalTalk("~~~~~~~~~!", 0, 1520010, true, false);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/32279.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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