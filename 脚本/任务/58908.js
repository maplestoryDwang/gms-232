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
            cm.sendNormalTalk_Illus_II("哇，我还以为来这儿会死呢！我总是掉进奇怪的地方，真是累死了~", 9130103, 5, false, true, 9130106)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("武田信玄大人想知道你是怎么来到这里的。", 17, 9130103, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Illus_II("武田信玄？我所知道的那个武田信玄？…… ", 9130103, 5, true, true, 9130106)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Illus_II("那个爷爷真可笑。你要告诉武田信玄！我菖蒲可没什么好说的！那个死老头真没良心，也不看看是因为谁才做成了那件事的。", 9130103, 5, true, true, 9130106)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk(" (她似乎对武田信玄大人没有好感……)", 17, 9130103, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Illus_II("话说回来，樱乃在哪儿？我有很多话要和她说呢。樱乃~樱乃~樱乃~你在哪儿~", 9130103, 5, true, true, 9130106)
                            } else {
                                if (status === a++) {
                                    cm.curNodeEventEnd(true);
                                    cm.eventSKill(0);
                                    cm.setInGameDirectionMode(true, true, true);
                                    cm.inGameDirectionEvent_PushMoveInfo(0, 550, -270, 135)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1500)
                                    } else {
                                        if (status === a++) {
                                            cm.npc_ChangeController(9130124, "oid=538192736", -660, 167, 1, -710, -610, 1, true, 0, false);
                                            cm.npc_SetSpecialAction("oid=538192736", "summon", 0, 0);
                                            cm.npc_SetForceMove("oid=538192736", 1, 500, 100);
                                            cm.inGameDirectionEvent_AskAnswerTime(3000)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Illus_II("菖蒲！", 9130103, 5, false, true, 9130124)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Illus_II("啊！樱乃。哈哈，樱乃，你还好吗？我可想死你了？", 9130103, 5, true, true, 9130106)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Illus_II("……", 9130103, 5, true, true, 9130124)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Illus_II("听说你回来了……我……我…………", 9130103, 5, true, true, 9130124)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Illus_II("哎~哎？别哭啊，樱乃。我这不是回来了吗！", 9130103, 5, true, true, 9130106)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.warp(811000008, 0, false);
                                                                    cm.npc_LeaveField("oid=538192736");
                                                                    cm.npc_LeaveField("oid=538192736");
                                                                    cm.eventSKill(0);
                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                    cm.forceStartQuest(58949, "2nd_2");
                                                                    cm.forceCompleteQuest(58908);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/58908.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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