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
            cm.sendNormalTalk("你好！你超过#e80级#n啦。你知道#b托德之锤#k吗？", 4, 9010061, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b托德之锤#k是一种神秘的魔法之锤，可以#b提取低级装备的能力#k，并将其#b传授给高级装备#k。", 4, 9010061, true, true)
            } else {
                if (status === a++) {
                    cm.askMenu("怎么样，要我给你解释一下托德之锤吗？\r\n\r\n#b#L0#是，告诉我吧。#l\r\n#b#L1#不，不用了。#l", 4, 9010061)
                } else {
                    if (status === a++) {
                        if (b == 1) {
                            cm.forceStartQuest(14950, "");
                            cm.dispose();
                            return
                        } else {
                            cm.sendNormalTalk("从40级以上开始，点击#b背包窗右下方#k的#i3800871#按钮，可以使用#b托德之锤#k。", 4, 9010061, false, true)
                        }
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("如果当前拥有的装备之中，不存在可以提取/传授能力的装备，就会像这样没有登记任何装备。", 37, 9010061, true, true);
                            cm.effect_REPEAT("Map/Effect2.img/ToadsHammer/0", 1, 1, 1, 0, -80)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("如果有#b星之力强化1星以上的#k装备道具和#b相同分类的装备#k中高#b+1~+10级#k的装备，就能#b自动登录#k为#b可提取的装备#k 。", 37, 9010061, true, true)
                            } else {
                                if (status === a++) {
                                    cm.effect_REPEAT("Map/Effect2.img/ToadsHammer/1", 1, 1, 1, 0, -80);
                                    cm.sendNormalTalk_Bottom("首先请选择#b要提取的装备#k，这样一来，右侧背包处就会自动登记可以#b传授能力的装备#k了。", 37, 9010061, true, true);
                                    cm.effect_REPEAT("Map/Effect2.img/ToadsHammer/2", 1, 1, 1, 0, -80)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("在登记的装备之中，如果选择#b要接受传授的装备#k，就可以像这样提前查看确认#b最终的结果#k，此时要将鼠标悬停在大图标上，确认变化的能力值。", 37, 9010061, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.effect_REPEAT("Map/Effect2.img/ToadsHammer/3", 1, 1, 1, 0, -80);
                                            cm.sendNormalTalk_Bottom("可如果#b接受传授的装备#k还存在可升级次数，就会像这样出现可以使用的#b100%卷轴#k目录，需要在其中选择一个。", 37, 9010061, true, true);
                                            cm.effect_REPEAT("Map/Effect2.img/ToadsHammer/4", 1, 1, 1, 0, -80)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("选择要使用的#b100%卷轴#k后，就会将剩余的可升级次数全部消耗掉，#b接受传授的装备#k也会被强化，当然使用卷轴的费用是#b免费#k的。", 37, 9010061, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("在仔细确认过装备变化的能力值后，点击继承按钮，就会弹出#r最终确认信息#k，因为使用过一次托德之锤，对装备的能力进行过提取/传授后，#r就无法再次逆转#k，所以请一定要好好确认。", 37, 9010061, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.effect_REPEAT("Map/Effect2.img/ToadsHammer/5", 1, 1, 1, 0, -80);
                                                        cm.sendNormalTalk_Bottom("在详细了解过所有的变化内容之后，点击确定按钮，就会像这样！形成#b传授到能力值的装备道具#k，而能力值#r被提取的道具会消失不见#k。", 37, 9010061, true, true);
                                                        cm.effect_REPEAT("Map/Effect2.img/ToadsHammer/6", 1, 1, 1, 0, 0)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("来，现在你已经对托德之锤足够了解了吧？", 4, 9010061, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("所谓#b百闻不如一见#k！我会特别送勇士#b两个#k可以使用托德之锤的装备。", 4, 9010061, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk("对这个#i1032256##t1032256##r星之力强化到1星以上#k后，试着将其能力转移到#i1032257##t1032257#吧。", 4, 9010061, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk("对了，#i1032256##t1032256#的卷轴强化已经作为特别服务完成了，勇士只要进行一次以上的#r星之力强化#k即可。", 4, 9010061, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk("那现在就使用托德之锤吧~", 4, 9010061, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.forceStartQuest(14950, "");
                                                                                cm.gainItem(1032256, 1);
                                                                                cm.gainItem(1032257, 1);
                                                                                cm.forceCompleteQuest();
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