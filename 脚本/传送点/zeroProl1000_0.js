function enter() {
    if (cm.getMap().getNumMonsters() > 0) {
        cm.playerMessage(-1, "必须要先击败对手才能离开。");
        cm.playerMessage(5, "必须要先击败对手才能离开。")
    } else {
        cm.openScriptNpc()
    }
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(c, b, a) {
    if (cm.getNumberFromQuestCustomData(40011) == 2) {
        action1(c, b, a)
    } else {
        action2(c, b, a)
    }
}

function action1(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, true, true);
            cm.sendNormalTalk("……你要去哪里？你不是不参加这次的战斗了吗？和受伤的我在一起，在村里等待不是你的任务吗？你应该没有忘记你的任务吧？", 33, 2410004, false, true);
            cm.effect_Voice("Voice.img/Ken/7", 100)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("你绝对不能去#m321000600#。就像#p2410000#医疗队长所说，安静地待在这里等待所有事情结束吧。", 33, 2410004, true, true);
                cm.effect_Voice("Voice.img/Ken/8", 100)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_MoveAction(1);
                    cm.inGameDirectionEvent_AskAnswerTime(500)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_MoveAction(0);
                        cm.inGameDirectionEvent_AskAnswerTime(100)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_OneTimeAction(5, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(500)
                        } else {
                            if (status === a++) {
                                cm.npc_SetSpecialAction("oid=1356551", "punch", 0, 1);
                                cm.fieldEffect_PlayFieldSound("demonSlayer/punch", 100);
                                cm.inGameDirectionEvent_AskAnswerTime(500)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("……！你这是干什么？你竟敢攻击骑士团的同僚！你不知道我们不会放过叛徒吗？", 33, 2410004, false, true);
                                    cm.effect_Voice("Voice.img/Ken/10", 100)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("#face3#叛徒？如果打从一开始就不是一伙的……那何有背叛可言？不是吗？", 41, 2410008, true, true);
                                        cm.effect_Voice("Voice.img/Alpha/87", 100)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("你小子……果然被你发现了？！", 33, 2410004, true, true);
                                            cm.effect_Voice("Voice.img/Ken/11", 100)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("#face2#你以为我会被你们一直骗到什么时候？你以为那个把戏能持续吗？", 41, 2410008, true, true);
                                                cm.effect_Voice("Voice.img/Alpha/88", 100)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("哼！现在发现了也没用！所有人都去了#m321000600#，你只有死路一条！", 33, 2410004, true, true);
                                                    cm.effect_Voice("Voice.img/Ken/12", 100)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("#face3#你还是先担心你自己的路吧……你以为我会乖乖地把你放走吗？", 41, 2410008, true, true);
                                                        cm.effect_Voice("Voice.img/Alpha/89", 100)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("要和我打吗！哈哈！愚蠢的家伙！", 33, 2410004, true, true);
                                                            cm.effect_Voice("Voice.img/Ken/13", 100)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.forceStartQuest(40011, "1");
                                                                cm.npc_LeaveField("oid=1356551");
                                                                cm.spawnMobLimit(9300746, 1, 1170, -6, 100);
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

function action2(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.forceStartQuest(40007, "1");
            cm.dispose();
            cm.startQuestScript(0, 40004)
        }
    }
};