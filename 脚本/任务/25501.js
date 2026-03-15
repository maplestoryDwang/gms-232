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
            cm.sendNormalTalk("尊敬的夜光法师，现在是时候该将光之力量和黑暗力量混合，使其全部为你所用了。", 0, 1032209, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b光明和黑暗不是互不相容的吗？怎么混合？", 2, 1032209, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("我叫你来正是为了跟你说说此事。对了，你掌握驾驭光之力量与黑暗力量的方法了吧？", 0, 1032209, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#b嗯，已经掌握了。", 2, 1032209, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("那就很简单了。夜光法师使用点数在光明与黑暗状态间切换，即，#r#v3800309#太阳火焰和#v3800310#月蚀状态相互切换时，#k可以在短暂时间内达到#b平衡状态#v3800311##k。进入平衡状态时，你可以通过以下特效查看到。\r\n<太阳火焰切换为月蚀>\r\n#v3800308#\r\n<月蚀切换为太阳火焰>\r\n#v3800306#", 0, 1032209, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("进入平衡状态后，#b夜光法师的眼神和宝珠#k会产生如下变化。\r\n#v3800322#", 0, 1032209, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("#b嗯，那么在那段时间内我可以获得什么好处？", 2, 1032209, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("真是个尖锐的问题。很好。在平衡状态下，#b可以同时获得光之力量和暗之力量，与此同时可以获得#e100%稳如泰山#n效果，普通魔法没有冷却时间。#k最重要的是……由于受到平衡影响的魔法会同时获得光明和黑暗效果，因此可以造成100%的额外伤害。相关魔法目录可以在状态条下方的强化的技能目录中查看。\r\n<平衡技能目录>\r\n#v3800319#", 0, 1032209, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("#b嗯……那如果获得平衡增益，平时存在冷却时间的死亡之刃魔法就能连续使用了。", 2, 1032209, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.askAcceptDecline("你果然很聪明，可以举一反三。当然，没有平衡增益时的死亡之刃也很强，但是#r和平衡增益一起使用时#k，死亡之刃的威力会超乎想象。因为可以造成#b两倍的伤害#k，还#b没有冷却时间#k。好了，你想实际练习一下吗？", 0, 1032209)
                                            } else {
                                                if (status === a++) {
                                                    cm.forceStartQuest(25501, "");
                                                    cm.forceCompleteQuest();
                                                    cm.sendNormalTalk("你试着#b进入平衡状态#k后再来吧，我等你的好消息，", 0, 1032209, false, true);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/25501.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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