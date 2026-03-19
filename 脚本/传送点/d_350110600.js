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
    }
    if (cm.getNumberFromQuestInfo(33910, "check1") > 0) {
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
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_SetHideEffect(1);
            cm.npc_ChangeController(1540805, "oid=287724627", 3076, 399, 1, 3026, 3126, 0, true, 0, false);
            cm.npc_SetSpecialAction("oid=287724627", "summon", 0, 0);
            cm.npc_ChangeController(1540807, "oid=287724629", 2926, 399, 1, 2876, 2976, 0, true, 0, false);
            cm.npc_SetSpecialAction("oid=287724629", "summon", 0, 0);
            cm.setNumberForQuestCustomData(33900, 6);
            cm.getPlayer().removeDragon();
            cm.mapleHeroBecomeNpc(9, 0);
            cm.onActionBarResult(6, -1);
            cm.onActionBarResult(5, 32);
            cm.sendNormalTalk_Bottom("#face3#那上面有个洞穴的入口。", 45, 1540805, false, true);
            cm.effect_Voice("Voice3.img/HofM/ACT1/LOOKINGUP/1", 128)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("哎呀，你打算怎么上去，主人？", 45, 1540807, true, true);
                cm.effect_Voice("Voice3.img/HofM/ACT1/LOOKINGUP/2", 128)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("多简单啊？坐在米乐的背上飞上去就好了嘛。", 45, 1540805, true, true);
                    cm.effect_Voice("Voice3.img/HofM/ACT1/LOOKINGUP/3", 128)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("          #face0#不行，风太大了，我的块头还不够大。", 45, 1540807, true, true);
                        cm.effect_Voice("Voice3.img/HofM/ACT1/LOOKINGUP/4", 128)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#你可以做到的，米乐，得有点自信。", 45, 1540805, true, true);
                            cm.effect_Voice("Voice3.img/HofM/ACT1/LOOKINGUP/5", 128)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("          #face0#我先上去看看有没有警卫。", 45, 1540807, true, true);
                                cm.effect_Voice("Voice3.img/HofM/ACT1/LOOKINGUP/6", 128)
                            } else {
                                if (status === a++) {
                                    cm.npcMove(1540807, 0, -700, 2000);
                                    cm.inGameDirectionEvent_AskAnswerTime(2000)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face2#你说什么？！喂，等一下！米乐！！！", 45, 1540805, false, true);
                                        cm.effect_Voice("Voice3.img/HofM/ACT1/LOOKINGUP/7", 128)
                                    } else {
                                        if (status === a++) {
                                            cm.npc_LeaveField("oid=287724629");
                                            cm.npc_LeaveField("oid=287724629");
                                            cm.sendNormalTalk_Bottom("#face6#额，这个不讲义气的家伙！看我以后还给不给你买芝士蛋糕！", 45, 1540805, true, true);
                                            cm.effect_Voice("Voice3.img/HofM/ACT1/LOOKINGUP/8", 128)
                                        } else {
                                            if (status === a++) {
                                                cm.Hidden_background("arrow_up", 1, 1, 0, 0);
                                                cm.npc_LeaveField("oid=287724627");
                                                cm.npc_LeaveField("oid=287724627");
                                                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                            } else {
                                                if (status === a++) {
                                                    cm.inGameDirectionEvent_SetHideEffect(0);
                                                    cm.setInGameDirectionMode(false, true, false);
                                                    cm.setNumberForQuestInfo(33910, "check1", 1);
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
};