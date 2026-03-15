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
            cm.sendNormalTalk("这件事情在大家的帮助下终于告一段落了，不过还是留有一个疑问。黑色之翼为何发疯似地要寻找封印石呢？", 0, 1012100, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("这么说来……", 4, 1520068, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("(伦多把在洞穴里听到的有关变身术士和其他黑色之翼干部的对话内容详细地告诉了我。)", 4, 1520068, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("连黑色之翼的干部都不知道封印石的用途。那作为我的话，也很难猜到其用途。不过……", 0, 1012100, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("不过？", 2, 1012100, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("我听说，黑色之翼的首长以前曾是黑魔法师的军团长之一。所以我觉得，黑色之翼的所作所为会不会和黑魔法师有关联。", 0, 1012100, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("总之，今天辛苦你了。你找回了封印石，这样一来，其他村庄的冒险家也能安心了。一旦有其他线索，到时候我会再次联系#h0#你的。", 0, 1012100, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("…………。", 4, 1520065, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("(修嘉好像有话要对我说。)怎么了？", 2, 1012100, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("……那个，刚刚为了救#h #你，我是不是推得太重了啊……。你没有因我而受伤吧？", 4, 1520065, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("那种程度，没什么大碍。", 2, 1012100, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("真的吗？呵呵，太好了！刚刚从洞穴里被赶出来后，我一直在担心呢。虽然我力气很大，不过偶尔也会控制不好力道。", 4, 1520065, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("(刚刚那一记的劲道确实很大……。)", 2, 1012100, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("呵呵，#h #你没事真是太好了。", 4, 1520065, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.gainExp(100000);
                                                                    cm.forceStartQuest(32296, "");
                                                                    cm.forceCompleteQuest(32296);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/32296.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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