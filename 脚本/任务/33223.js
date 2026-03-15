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
            cm.inGameDirectionEvent_AskAnswerTime(1000)
        } else {
            if (status === a++) {
                cm.onTeleport(0, 3, cm.getPlayer().getId(), 1402, -31);
                cm.inGameDirectionEvent_ForcedFlip(-1);
                cm.inGameDirectionEvent_AskAnswerTime(1000)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#h0#。\r\n你的身体完全恢复了吗？", 45, 1540450, false, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("先遣队已经前往#b黑色天堂内部#k，确保进入通道了。\r\n我们大家正在等你。", 45, 1540450, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("……作为朋友，我很想劝你不要参加这次作战。\r\n你已经为联盟做了很多事情了。", 45, 1540450, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#但作为联盟的首领，我无法放弃你这个战斗力。", 45, 1540450, true, true)
                            } else {
                                if (status === a++) {
                                    cm.askMenu_Bottom("#face0#请跟我保证，#h0#，你一定会平安回来的。\r\n#b#L0#请相信我。#l\r\n#L1#你这担忧有些多余了。#l", 37, 1540450)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("嗯，我相信你。", 37, 1540450, false, true)
                                    } else {
                                        if (status === a++) {
                                            cm.npc_ChangeController(1540704, "oid=283972424", 1750, 0, 3, 1700, 1800, 1, true, 0, false);
                                            cm.npc_SetSpecialAction("oid=283972424", "summon", 0, 0);
                                            cm.npc_ChangeController(1540451, "oid=283972425", 1810, 0, 3, 1760, 1860, 1, true, 0, false);
                                            cm.npc_SetSpecialAction("oid=283972425", "summon", 0, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(1500)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("你的体力已经恢复了吗？\r\n年轻就是好啊。", 37, 1540704, false, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                                } else {
                                                    if (status === a++) {
                                                        cm.inGameDirectionEvent_ForcedFlip(1);
                                                        cm.npc_SetForceMove("oid=283972424", -1, 220, 100);
                                                        cm.npc_SetForceMove("oid=283972425", -1, 220, 100);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1300)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("我收到消息，先遣队已经确保了进入通道。\r\n我们也出发吧。", 37, 1540451, false, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#h0#，你一定要平安。", 45, 1540450, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    if (cm.getPlayer().getGender() == 0) {
                                                                        cm.sendNormalTalk_Bottom("呼。不要担心，希纳斯！这个小伙子是我见过的最棒的家伙。", 37, 1540704, true, true)
                                                                    } else {
                                                                        cm.sendNormalTalk_Bottom("呼。不要担心，希纳斯！这个小姑娘是我见过的最棒的家伙。", 37, 1540704, true, true)
                                                                    }
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.npc_LeaveField("oid=283972424");
                                                                            cm.npc_LeaveField("oid=283972424");
                                                                            cm.npc_LeaveField("oid=283972425");
                                                                            cm.npc_LeaveField("oid=283972425");
                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                            cm.setPartner(1, 1540704, 80001632, 0);
                                                                            cm.setPartner(1, 1540765, 80001601, 0);
                                                                            cm.addPopupSay(1540704, 1000, "这让我想起了我年轻的时候!\r\n前面开路吧, 勇士!", "", 0);
                                                                            cm.forceCompleteQuest(33223);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/33223.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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