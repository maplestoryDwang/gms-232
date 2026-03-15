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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.sendNormalTalk_Bottom("#b艾丽卡，有什么事吗？", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#啊… #h0#……", 37, 9400580, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#因为投石器的问题。", 37, 9400580, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#b是之前造了一般的那个投石器吗？有什么问题", 57, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#投石器的框架都做好了，而且巨石也都准备好了。", 37, 9400580, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#问题是… 斯库亚斯内找不到可以支撑那巨石的绳索。", 37, 9400580, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#b那我们快去找绳索吧？", 57, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#发现芬里斯也已经过去很久了，怪物们马上就要攻过来了。", 37, 9400580, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#这么危机的时刻… 谁也不能冒险出城。", 37, 9400580, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#b(…) ", 57, 0, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#b(怎么办… 我一个人快去快回行不行？) ", 57, 0, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#b… 需要多么强力的绳索？", 57, 0, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0##h0#，别想着出城，那很危险。", 37, 9400580, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#b如果能完成投石器的话，我可以快去快回。万一碰到怪物了，我一个人也好脱身。", 57, 0, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#不，当然不能让你一个人去那么危险的地方。", 37, 9400580, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#就当我没听见吧，应该还有别的方法。", 37, 9400580, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#b(… 我还是去一趟吧。) ", 57, 0, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.forceStartQuest(64133, "");
                                                                                cm.warp(867202200, 1);
                                                                                cm.setInGameDirectionMode(false, true, false);
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
            cm.sendNormalTalk_Bottom("#b(收集好了，赶快回去。) ", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(64133);
                cm.dispose();
                cm.warp(867202313, 0)
            }
        }
    }
};