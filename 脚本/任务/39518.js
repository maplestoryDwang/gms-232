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
            cm.sendNormalTalk_Bottom("#face0#你的第一份工作……好吧，就是替我去调查村庄。\r\n哎呀……你也看到了，我有太多事要忙。", 36, 3001653, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#看起来完全没有啊？", 36, 3001674 + cm.getPlayer().getGender(), true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face1#行家从不会显山露水，\r\n等虎影你继续干一阵子，总有一天你会明白的。", 36, 3001653, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face1#切……所以现在起到底要做什么？", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face3#我收到举报说，最近坛子经常会破碎，\r\n虽然我心里也觉得我们不至于还得做这种事吧……不过这毕竟也是件事，也没办法嘛。", 36, 3001653, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#原来这种时候就会流露本心啊。", 36, 3001651, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face2##fc0xFFbfbfbf#（这将杂务推卸给别人的本事可不一般啊……\r\n师父也总是用这种方式让我做家务活来着，还说什么这些都是修炼，哼！）", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face3#反正最近这周围人心惶惶是不争的事实……\r\n有必要调查看看坛子为什么会破。", 36, 3001653, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.askAcceptDecline_Bottom("#face0#你能前往#r#m410000212##k，消灭#r30只#k#r#o2400552##k，\r\n找到#b15个#k#b足以成为线索的战利品#k吗？", 36, 3001653)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face2##fc0xFFbfbfbf#（虽说这也极有可能是小孩子的玩笑……\r\n但搞不好那里有怪物，赶紧过去看看吧。）", 36, 3001674 + cm.getPlayer().getGender(), false, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.forceStartQuest(39518, "");
                                                    cm.OnStartNavigation(410000212, 0, "", 39518);
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
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39518.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face2#你来了啊，虎影。你似乎按照我说的拿来了\r\n足以成为线索的战利品呢，那就让我来看一看……", 36, 3001653, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face3#完全没这个必要……这是……动物的……粪便。", 36, 3001674 + cm.getPlayer().getGender(), true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#嗯……你是怎么……", 36, 3001653, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face2#当然是味道了啊？虽然已经有一阵子了，\r\n也许其他人感觉不出来，但我的嗅觉可是相当特殊的。", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face2#从坛子上洞的大小来看，感觉块头还挺大的，\r\n奇怪的是，粑粑……不，是排泄物的大小有点小。", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face1#那什么，倒不像是怪物所为，\r\n哈欠……还是将此次事件记录在事件集内，先去处理下一个事件吧。", 36, 3001653, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face7##fc0xFFbfbfbf#（……就这么稀里糊涂地混过去真的没问题吗？）", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                                } else {
                                    if (status === a++) {
                                        cm.forceCompleteQuest(39518);
                                        cm.gainExp(637);
                                        cm.gainExp(239);
                                        cm.gainItem(4036578, -15);
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