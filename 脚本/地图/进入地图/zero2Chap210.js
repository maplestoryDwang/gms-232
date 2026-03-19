var status = -1;
var selectionLog = [];

function action(c, b, a) {
    if (cm.isQuestActive(40209)) {
        action2(c, b, a)
    } else {
        if (cm.isQuestFinished(40209)) {
            cm.dispose()
        } else {
            action1(c, b, a)
        }
    }
}

function action1(d, c, b) {
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
        if (status === a++) {
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, true, true);
            cm.npc_ChangeController(2410002, "oid=1820871", 1604, 675, 130, 1554, 1654, 1, false, 0, false);
            cm.npc_SetSpecialAction("oid=1820871", "summon", 0, 0);
            cm.npc_ChangeController(2410010, "oid=1820872", 1488, 522, 15, 1438, 1538, 1, false, 0, false);
            cm.npc_SetSpecialAction("oid=1820872", "summon", 0, 0);
            cm.npc_ChangeController(2410010, "oid=1820873", 1358, 522, 24, 1308, 1408, 1, false, 0, false);
            cm.npc_SetSpecialAction("oid=1820873", "summon", 0, 0);
            cm.npc_ChangeController(2410010, "oid=1820874", 1759, 522, 134, 1709, 1809, 1, false, 0, false);
            cm.npc_SetSpecialAction("oid=1820874", "summon", 0, 0);
            cm.npc_ChangeController(2410010, "oid=1820875", 1930, 624, 145, 1880, 1980, 0, false, 0, false);
            cm.npc_SetSpecialAction("oid=1820875", "summon", 0, 0);
            cm.npc_ChangeController(2410010, "oid=1820876", 2026, 624, 152, 1976, 2076, 0, false, 0, false);
            cm.npc_SetSpecialAction("oid=1820876", "summon", 0, 0);
            cm.inGameDirectionEvent_MoveAction(0);
            cm.inGameDirectionEvent_AskAnswerTime(500);
            cm.curNodeEventEnd(true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("……真黑啊，不过湿气倒不大，应该可以生火，如果能给点吃的就更好了。", 41, 2400005, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("#face10#…………", 41, 2400006, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("从刚才起，为什么一直不说话？莫非害怕黑暗？", 41, 2400005, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("我不怕。", 41, 2400006, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("#b(……看上去像是紧绷着神经一样，难道是我的错觉？这家伙本来就面无表情……)", 41, 2400005, true, true)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_MoveAction(2);
                                    cm.inGameDirectionEvent_AskAnswerTime(2000)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_MoveAction(0);
                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("#face11#……停下，前面好像有人，数量还不少。", 41, 2400005, false, true)
                                        } else {
                                            if (status === a++) {
                                                cm.inGameDirectionEvent_PushMoveInfo(0, 1000, 1800, 760)
                                            } else {
                                                if (status === a++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1874)
                                                } else {
                                                    if (status === a++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.inGameDirectionEvent_PushMoveInfo(0, 300, 389, 760)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(4707)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk("#face11#……影子骑士团？他们怎么会到这里来……难道他们发现了#p2430000#是女神之泪吗？还是我们被尾随了？可恶……先撤退。", 41, 2400005, false, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk("……#p2430000#呢？不管了？", 41, 2400006, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk("#face11#出去再说。", 41, 2400005, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                if (cm.getNumberFromQuestCustomData(40213) == 0) {
                                                                                    cm.forceStartQuest(40213, "1");
                                                                                }
                                                                                cm.dispose();
                                                                                cm.warp(323090200, 2, false);
                                                                                cm.setInGameDirectionMode(false, true, false)
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

function action2(d, c, b) {
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
        if (status === a++) {
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, true, true);
            cm.spawnMobLimit(9300764, 1, 1604, 709, 100);
            cm.spawnMobLimit(9300765, 1, 1488, 695, 100);
            cm.spawnMobLimit(9300765, 1, 1358, 709, 100);
            cm.spawnMobLimit(9300765, 1, 1759, 695, 100);
            cm.inGameDirectionEvent_AskAnswerTime(500);
            cm.curNodeEventEnd(true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#face3#不用犹豫了，全都消灭掉。", 41, 2400005, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("#face4#嗯！", 41, 2400006, true, true)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_AskAnswerTime(500)
                    } else {
                        if (status === a++) {
                            cm.setInGameDirectionMode(false, true, false);
                            cm.spawnMobLimit(9300765, 1, 2220, 640, 100);
                            cm.spawnMobLimit(9300765, 1, 1749, 696, 100);
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
}

function start() {
    status = -1;
    action(1, 0, 0)
};