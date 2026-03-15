var status = -1;

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.curNodeEventEnd(true);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, true, true);
            cm.setStandAloneMode(true);
            cm.sendNormalTalk("封印全部解开了，这下终于可以到外面去了！", 1, 1064002, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("(南哈特让我把世界树带到圣地去，该怎么办呢？她刚刚解开了封印，看她那么开心……)", 3, 1064002, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("祝贺你恢复了自由。但是……冒险岛联盟希望你到圣地去。", 3, 1064002, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("圣地……？", 1, 1064002, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("嗯，因为有很多人都在打你的主意，在圣地有女皇和神兽的保护，应该会比较安全。但是选择权在你自己，不愿意的话，不去也可以。他们没有权利逼迫你做出选择。", 3, 1064002, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("……你说的对，如果在外面乱走，我的力量也许会被邪恶的家伙夺走。冒险岛联盟的判断是正确的。虽然有点不太乐意，但是在力量完全恢复之前，我会待在圣地。", 1, 1064002, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("真的没关系吗？被关了这么久，你难道不想到外面的世界去看看吗？", 3, 1064002, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("没关系。等力量完全恢复之后，再去享受自由也不迟。到了那时，想动坏主意的家伙，我一下子就能解决！", 1, 1064002, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("好的。那我们到圣地去吧。为了防止发生什么事，冒险骑士团会护送你过去。", 3, 1064002, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                            } else {
                                                if (status === a++) {
                                                    cm.npc_ChangeController(1064021, "oid=11854070", -240, 210, 26, -290, -190, 1, false, 0, false);
                                                    cm.npc_SetSpecialAction("oid=11854070", "summon", 0, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                                } else {
                                                    if (status === a++) {
                                                        cm.npc_ChangeController(1064018, "oid=11854071", -140, 210, 26, -190, -90, 1, false, 0, false);
                                                        cm.npc_SetSpecialAction("oid=11854071", "summon", 0, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.npc_ChangeController(1064019, "oid=11854073", 100, 210, 27, 50, 150, 1, false, 0, false);
                                                            cm.npc_SetSpecialAction("oid=11854073", "summon", 0, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.npc_ChangeController(1064020, "oid=11854093", 200, 210, 27, 150, 250, 1, false, 0, false);
                                                                cm.npc_SetSpecialAction("oid=11854093", "summon", 0, 0);
                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk("准备好了吗？那就出发吧！", 3, 1064002, false, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.fieldEffect_ScreenMsg("rootabyss/goEreb");
                                                                        cm.inGameDirectionEvent_AskAnswerTime(3000)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.warp(913080001, 0, false);
                                                                            cm.forceStartQuest(30013, "");
                                                                            cm.npc_LeaveField("oid=11854070");
                                                                            cm.npc_LeaveField("oid=11854070");
                                                                            cm.npc_LeaveField("oid=11854071");
                                                                            cm.npc_LeaveField("oid=11854071");
                                                                            cm.npc_LeaveField("oid=11854073");
                                                                            cm.npc_LeaveField("oid=11854073");
                                                                            cm.npc_LeaveField("oid=11854093");
                                                                            cm.npc_LeaveField("oid=11854093");
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

function end(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.forceCompleteQuest();
            cm.dispose()
        } else {
            cm.dispose()
        }
    }
};