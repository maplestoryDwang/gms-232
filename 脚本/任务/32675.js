var status = -1;

function start() {
    action(1, 0, 0)
}

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom("是怪物，队长。你见过这种怪物吗？", 36, 2550002, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("没见过。那家伙到底是从哪儿来的？", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("恐怕是邪恶魔法的产物吧。", 36, 2550002, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("城里的士兵不会都中招了吧？", 56, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("队长，气氛不大对劲。我们最好赶快出去。", 36, 2550002, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("等一下，你们没听到#r惨叫声#k吗？\r\n迈勒，能使用探测魔法吗？", 56, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("能是能，但是施展魔法需要高度集中精神，现在这种情况我很难做到……", 36, 2550002, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("嗯……", 56, 0, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("又听到惨叫声了。似乎正在靠近我们。\r\n不过光靠声音没法判断位置。", 36, 2550002, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("切，没办法了。只要消灭周围的怪物就行了吧？", 56, 0, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.askYesNo_Bottom("减少#b200只#k左右应该足够了。我已经准备好魔法了。", 36, 2550002)
                                                } else {
                                                    if (status === a++) {
                                                        cm.forceStartQuest(32675, "");
                                                        cm.sendNormalTalk_Bottom("千万不要放松警惕，队长他总是……", 36, 2550002, false, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("我知道，别再唠叨了。", 56, 0, true, false);
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

function end(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom("探测到了一个看上去像人类的生命体。就在附近。", 36, 2550002, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(32675);
                cm.dispose()
            }
        }
    }
};