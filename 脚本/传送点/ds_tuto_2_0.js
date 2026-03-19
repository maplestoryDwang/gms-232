function enter() {
    cm.openScriptNpc()
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(d, c, b) {
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
            cm.setInGameDirectionMode(true, true, false);
            cm.inGameDirectionEvent_MoveAction(2);
            cm.inGameDirectionEvent_AskAnswerTime(10)
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_MoveAction(0);
                cm.sendNormalTalk("这不是#h0#吗？外游怎么样啊？不惜违抗命令出去，应该很快乐吧？你的家人都还好吧？替我跟她们问声好啊！哈哈哈哈！", 1, 2159308, false, true);
                cm.effect_Voice("Voice.img/DemonSlayertutorial_B/0", 100)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("…没时间和你拌嘴，让开，#r#p2159309##k!", 3, 2159308, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("擅离职守，违抗命令…还用这种充满杀气的眼神盯着我。还想见黑魔法师？那可不行。", 1, 2159308, true, true);
                        cm.effect_Voice("Voice.img/DemonSlayertutorial_B/1", 100)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/balloonMsg1/14"], [2000, 0, -100, 0, 0, 0, 0, 0, 0]);
                            cm.inGameDirectionEvent_OneTimeAction(332, 0);
                            cm.fieldEffect_PlayFieldSound("demonSlayer/31111003", 100);
                            cm.inGameDirectionEvent_头顶图片(["Skill/3111.img/skill/31111003/effect"], [0, 0, 0, 0, 0, 0, 0, 0, 0]);
                            cm.npc_SetSpecialAction("oid=923623", "teleportation", 0, 1);
                            cm.inGameDirectionEvent_AskAnswerTime(570)
                        } else {
                            if (status === a++) {
                                cm.npc_LeaveField("oid=923623");
                                cm.inGameDirectionEvent_AskAnswerTime(1200)
                            } else {
                                if (status === a++) {
                                    cm.npc_ChangeController(2159309, "oid=923655", 180, 50, 3, 130, 230, 0, false, 0, false);
                                    cm.npc_SetSpecialAction("oid=923655", "summon", 0, 0);
                                    cm.setSessionValue("arkyrim1", "923655");
                                    cm.inGameDirectionEvent_AskAnswerTime(360)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("哦哦~这可是赤裸裸的背叛啊。你还没抛弃人类的心吗？居然为了这种小事大张旗鼓，真是无聊！", 1, 2159308, false, true);
                                        cm.effect_Voice("Voice.img/DemonSlayertutorial_B/2", 100)
                                    } else {
                                        if (status === a++) {
                                            cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/balloonMsg1/15"], [2000, 0, -100, 0, 0, 0, 0, 0, 0]);
                                            cm.inGameDirectionEvent_MoveAction(1);
                                            cm.inGameDirectionEvent_OneTimeAction(371, 0);
                                            cm.fieldEffect_PlayFieldSound("demonSlayer/31121001", 100);
                                            cm.inGameDirectionEvent_头顶图片(["Skill/3112.img/skill/31121001/effect", "oid=0"], [0, 295, 71, 1, 0, 1, 1, 0, 0]);
                                            cm.npc_SetSpecialAction("oid=923655", "teleportation", 0, 1);
                                            cm.inGameDirectionEvent_AskAnswerTime(570)
                                        } else {
                                            if (status === a++) {
                                                cm.npc_LeaveField("oid=923655");
                                                cm.inGameDirectionEvent_AskAnswerTime(870)
                                            } else {
                                                if (status === a++) {
                                                    cm.npc_ChangeController(2159309, "oid=923656", 500, 50, 5, 450, 550, 1, false, 0, false);
                                                    cm.npc_SetSpecialAction("oid=923656", "summon", 0, 0);
                                                    cm.setSessionValue("arkyrim2", "923656");
                                                    cm.sendNormalTalk("像你这种无法领悟那位伟大大人真正意图的家伙，我实在是失望致极啊。警卫兵，出来把这个叛逆者干掉！", 1, 2159308, false, true);
                                                    cm.effect_Voice("Voice.img/DemonSlayertutorial_B/3", 100)
                                                } else {
                                                    if (status === a++) {
                                                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                        cm.setInGameDirectionMode(false, true, false);
                                                        cm.playerMessage(-1, "请打倒所有卫兵。");
                                                        cm.fieldEffect_PlayFieldSound("demonSlayer/summonGuard", 100);
                                                        cm.spawnMobLimit(9300455, 1, 450, 71, 100);
                                                        cm.spawnMobLimit(9300455, 1, 400, 71, 100);
                                                        cm.spawnMobLimit(9300455, 1, 350, 71, 100);
                                                        cm.forceCompleteQuest(23204);
                                                        cm.forceStartQuest(23205, "");
                                                        cm.effect_Direction("Effect/Direction6.img/DemonTutorial/Scene4", 0, 0, 0);
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
};