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
            cm.sendNormalTalk("……这就是女神之泪沙马尔吗……", 44, 2400005, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("嗯。#p2420000#原来是这种形态啊……", 44, 2400006, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("我们也回到神殿吧，告诉#p2400000#我们找到女神之泪了。", 44, 2400005, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("嗯。", 44, 2400006, true, true)
                    } else {
                        if (status === a++) {
                            cm.updateInfoQuest(40112, "");
                            cm.forceStartQuest(40112, "");
                            cm.forceStartQuest(41912, "0");
                            cm.dispose();
                            cm.warp(320000000, 1, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/40112.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, true, true);
            cm.inGameDirectionEvent_AskAnswerTime(500)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("女神之泪竟然会是个人，而且还是主动找到两位的宰相……真是太神奇了。我们也从来没有考虑到这种情况，到底是怎么回事？是女神之泪被分离后的副作用？还是镜世界的特殊现象？", 33, 2400000, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("我觉得两个都有可能。就像两位所说的，女神之泪以沙马尔的名字存活了数十年，就说明在这个镜世界中时间和空间也被扭曲了，我们短暂的时间在那里却变成了长久的岁月。", 33, 2400000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("被分离的女神之泪，在扭曲的时间里获得了自我重生成为宰相，并等待着两位的到来。嗯~我估计其他的女神之泪也有可能会如此……呵呵，那么今后两位要找的就不是宝石，也有可能是人类了。", 33, 2400000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("那么，虽然只收集了一部分，但有了女神之泪，那现在就可以从困住神之子的#r镜世界的束缚中摆脱出来。#k怎么样？为了纪念你们从束缚中解放出来，请二位手拉着手，在冒险岛世界中到处看看吧！", 33, 2400000, true, true)
                        } else {
                            if (status === a++) {
                                cm.teachSkill(100000279, 1, 0);
                                cm.forceCompleteQuest(40112);
                                cm.teachSkill(100000280, 1, 5);
                                cm.forceCompleteQuest(40914);
                                cm.setInGameDirectionMode(false, true, false);
                                cm.gainExp(5000000);
                                cm.playerMessage(-1, "镜世界中的所有束缚解除。可以在冒险岛世界中执行任务和获得经验值。");
                                cm.playerMessage(5, "[决意时刻]、[伦娜的祝福]技能提高等级了。");
                                cm.teachSkill(100000271, cm.getPlayer().getId(), 5);
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
};