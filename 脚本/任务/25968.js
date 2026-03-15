var status = -1;
var selectionLog = [];

function start(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return
    }(mode == 1) ? status++ : status--;
    selectionLog[status] = selection;
    var i = -1;
    if (status <= i++) {
        cm.dispose()
    } else {
        if (status == i++) {
            cm.askMenu("你有什么想知道的吗？\r\n\r\n#b#L0#卷轴强化#l\r\n#b#L1#星之力强化#l\r\n#b#L2#装备继承#l\r\n#b#L3#结束帮助#l", 0, 9010061)
        } else {
            var reactor = "action分支" + selectionLog[1];
            eval(reactor)(mode, type, selection, i)
        }
    }
}

function action分支0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("从现在开始，我会告诉你有关消耗装备可升级次数并强化装备的#b卷轴强化#k功能。", 0, 9010061, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk("卷轴强化需要#b咒语痕迹#k，通过狩猎和分解卷轴可以获取，卷轴分解可以利用其他玩家的卷轴分解机进行，或者在超过35级时通过可以学习的专业技能-炼金术进行分解。", 0, 9010061, true, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("放上装备后就会显示可以使用的卷轴，在其中选择想要强化的卷轴后，按下开始强化，就可以挑战强化了！简单吧？只不过，需要充足的#b咒语痕迹#k当材料！", 0, 9010061, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("根据你选择的卷轴，也可能会失败，一定要多加注意。一旦失败，装备就不会被强化，而只会减少可升级次数。", 0, 9010061, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("如果通过卷轴强化消耗了所有升级次数，就可以进行星之力强化了，也有一些装备无法进行星之力强化，还请一定要记住。", 0, 9010061, true, false)
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

function action分支1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("那从现在开始我就告诉你有关消耗装备可升级次数之后可以进行的#b星之力强化#k的功能吧。", 0, 9010061, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk("通过卷轴强化需要消耗所有升级次数的装备，根据装备等级的不同，也可以使用金币尝试强化，根据装备当前强化等级的不同，成功率也会有所不同。", 0, 9010061, true, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("开始强化后，就会开始将星之力附着在装备上的工序，如果在时间内可以准确地让星星停止，让中央星星的所有部分都能进去，工序成功后，强化成功率就会提升，即便是失败，成功率也不会减少。", 0, 9010061, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("连续尝试星之力强化后，工序就会变得越来越难。", 0, 9010061, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("开始强化后，会开始将星之力附着在装备上的抓星。在规定时间内让星星的所有部位都进入中央，准确让星星停下来，就成功完成抓星，这样强化成功率就会提升，即便失败，成功率也不会减少。", 0, 9010061, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("连续尝试星之力强化，抓星就会变得越来越难。", 0, 9010061, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("如果不进行抓星，只想要快速完成强化，请取消抓星，只不过，你将无法获取抓星成功后能够得到的强化成功率提升效果。", 0, 9010061, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("12星以上强化失败后，装备有可能会被破坏，但是获得了装备的痕迹后可以继承装备，详细的内容可以参考装备继承帮助。", 0, 9010061, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("如果不希望装备被破坏，可以额外消耗金币，将破坏率变为0%，只不过只能在强化12星到16星之间的装备时使用。", 0, 9010061, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("最后根据装备的等级限制，装备的可强化值也有一定限制，这一点还请记住。", 0, 9010061, true, false)
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
        }
    }
}

function action分支2(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("那从现在开始我就来告诉你如何用从破坏的装备中所获得的装备痕迹进行#b装备继承#k。", 0, 9010061, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk("进行12星以上的强化失败后，装备有可能会被破坏，装备破坏后，就可以获得相应的#b装备痕迹#k。", 0, 9010061, true, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("装备痕迹拥有着和装备所具备的#b最多可以到12星的星之力强化#k相不同的所有能力，就算是进行了超过13星的星之力强化，装备痕迹上也只会留下12星。", 0, 9010061, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("通过#b装备继承#k，装备痕迹所拥有的能力可以转移到和#b之前装备相同的装备#k上。", 0, 9010061, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("举例来说，如果获得了“法弗纳银槲之剑”的痕迹，就可以转移“法弗纳银槲之剑”破坏装备所拥有的星之力强化除外的能力。", 0, 9010061, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("无法转移到拥有其他名字和外形的装备，另外，继承到的装备所有能力都会被痕迹上的能力所取代。", 0, 9010061, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("比方说，用没有潜能的装备做成装备痕迹后，如果继承在存在潜能的装备上，继承到的装备的潜能就会消失。", 0, 9010061, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("继承到的装备的能力值不高会比较好吧？这一点可要记住。", 0, 9010061, true, false)
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
}

function action分支3(d, c, b, a) {
    if (status <= a++) {
        cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/25968.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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