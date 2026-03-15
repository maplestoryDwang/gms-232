var status = -1;
var selectionLog = [];

function start(e, d, c) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status == b++) {
            if (cm.getMapId() < 871200001 || cm.getMapId() > 871200150) {
                cm.sendOkS("得先回到我的小屋里才行。\r\n#b#r※ 在小屋里才能开启故事。");
                cm.dispose();
                return
            }
            cm.setNumberForQuestInfo(500773, "managerHide", 1);
            cm.updateInfoQuest(500927, "hideRevert=1");
            cm.curNodeEventEnd(true);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, true);
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.sendNewEffects(17, [0, 2000, 2000, -50, 150])
        } else {
            if (status === b++) {
                var d = cm.getNumberFromQuestInfo(500767, "type");
                var a = 2;
                if (d == 2 || d == 6) {
                    a = 4
                } else {
                    if (d == 3) {
                        a = 3
                    } else {
                        if (d == 8 || d == 9 || d == 10) {
                            a = 7
                        }
                    }
                }
                cm.npc_ChangeController(9400928, "oid=2511015", 100, 100, a, 50, 150, 1, true, 0, true);
                cm.npc_SetSpecialAction("oid=2511015", "summon", 0, 0);
                cm.npc_SetSpecialAction("oid=2511015", "stand", -1, 0);
                cm.npc_ChangeController(9400929, "oid=2511016", 20, 100, a, -30, 70, 1, true, 0, true);
                cm.npc_SetSpecialAction("oid=2511016", "summon", 0, 0);
                cm.npc_SetSpecialAction("oid=2511016", "stand", -1, 0);
                cm.onTeleport(0, 3, cm.getPlayer().getId(), -200, 100);
                cm.inGameDirectionEvent_ForcedFlip10(2, 10);
                cm.inGameDirectionEvent_AskAnswerTime(1000)
            } else {
                if (status === b++) {
                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 3000, 0);
                    cm.sendNormalTalk_Bottom("#face0#新年就要来了！今年的新年庆典比往年的更加特别呢！", 37, 9400920, false, true)
                } else {
                    if (status === b++) {
                        cm.sendNormalTalk_Bottom("#face1##h0#，新年快乐。虽然你2019年很快乐，但希望你在2020年更加快乐，好运多多。", 37, 9400921, true, true)
                    } else {
                        if (status === b++) {
                            cm.sendNormalTalk_Bottom("#b艾米、埃尔宾，新年快乐！", 57, 0, true, true)
                        } else {
                            if (status === b++) {
                                cm.sendNormalTalk_Bottom("#face1#欧巴真的是，像个老爷爷一样！\r\n现在说新年快乐为时尚早吧。", 37, 9400920, true, true)
                            } else {
                                if (status === b++) {
                                    cm.sendNormalTalk_Bottom("#face2#今年凯兰西亚迎新春庆典，艾米要比任何人都玩得开心！\r\n为了实现这个目标，从现在开始要做好万全准备！", 37, 9400920, true, true)
                                } else {
                                    if (status === b++) {
                                        cm.sendNormalTalk_Bottom("#face1#你让我为新年做准备，我突然就想起了。\r\n#h0#，你听说过吗？听说自古以来，每当新年来临的时候，就会有凶猛的怪物袭击村庄。", 37, 9400921, true, true)
                                    } else {
                                        if (status === b++) {
                                            cm.sendNormalTalk_Bottom("#b怪物？", 57, 0, true, true)
                                        } else {
                                            if (status === b++) {
                                                cm.sendNormalTalk_Bottom("#face1#没错。听说要想击退这一年一度的怪物，大家就应该一起热热闹闹的度过。\r\n燃放爆竹或聚在一起吃东西或者……所以在怪物来临前，我们不应该提前做准备吗？", 37, 9400921, true, true)
                                            } else {
                                                if (status === b++) {
                                                    cm.sendNormalTalk_Bottom("#face1#呼呼~可怕的怪物在庆典中夹着尾巴逃走了呢~\r\n我可是有精心筹备，打算好好享受庆典呢！怎么样#h0#，做好欢度迎新春庆典的准备了吗？", 37, 9400920, true, true)
                                                } else {
                                                    if (status === b++) {
                                                        cm.inGameDirectionEvent_头顶图片(["Map/Obj/myHome.img/direction/NewYear/3", "oid=2511017"], [15000, -1150, 0, 1, 0, 1, 0, 0]);
                                                        cm.npc_SetForceMove("oid=2511017", 1, 100, 20);
                                                        cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/firecracker_far", 40);
                                                        cm.sendNewEffects(17, [1000, 2000, 2000, -150, 150])
                                                    } else {
                                                        if (status === b++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(4000)
                                                        } else {
                                                            if (status === b++) {
                                                                cm.sendNormalTalk_Bottom("#face0#艾米真是的……\r\n不过……这是什么情况？", 37, 9400921, false, true)
                                                            } else {
                                                                if (status === b++) {
                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/what", "oid=2511016"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                    cm.sendNewEffects(17, [500, 2000, 2000, -20, 150])
                                                                } else {
                                                                    if (status === b++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                    } else {
                                                                        if (status === b++) {
                                                                            cm.npc_SetForceMove("oid=2511015", -1, 10, 100);
                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/what", "oid=2511015"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                        } else {
                                                                            if (status === b++) {
                                                                                cm.sendNewEffects(17, [2000, 2000, 2000, -650, 150])
                                                                            } else {
                                                                                if (status === b++) {
                                                                                    cm.inGameDirectionEvent_头顶图片(["Map/Obj/myHome.img/direction/NewYear/3", "oid=2511015"], [6000, -1300, 0, 1, 0, 1, 0, 0]);
                                                                                    cm.inGameDirectionEvent_头顶图片(["Map/Obj/myHome.img/direction/NewYear/3", "oid=2511016"], [6000, -1650, 0, 1, 0, 1, 0, 0]);
                                                                                    cm.inGameDirectionEvent_头顶图片(["Map/Obj/myHome.img/direction/NewYear/3", "oid=2511017"], [6000, -1450, 0, 1, 0, 1, 0, 0]);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                } else {
                                                                                    if (status === b++) {
                                                                                        cm.sendNewEffects(17, [1000, 2000, 2000, -50, 150])
                                                                                    } else {
                                                                                        if (status === b++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#外面怎么这么吵？快出去看看！", 37, 9400920, false, true)
                                                                                        } else {
                                                                                            if (status === b++) {
                                                                                                cm.forceStartQuest(64900, "");
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                            } else {
                                                                                                if (status === b++) {
                                                                                                    cm.forceStartQuest(500927, "");
                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/UI.img/Invite", 100);
                                                                                                    cm.OnStartNavigation(cm.getMapId(), 0, "myHomeExit", 0);
                                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 600, 0);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                } else {
                                                                                                    if (status === b++) {
                                                                                                        cm.npc_LeaveField("oid=2511015");
                                                                                                        cm.npc_LeaveField("oid=2511015");
                                                                                                        cm.npc_LeaveField("oid=2511016");
                                                                                                        cm.npc_LeaveField("oid=2511016");
                                                                                                        cm.npc_LeaveField("oid=2511017");
                                                                                                        cm.npc_LeaveField("oid=2511017");
                                                                                                        cm.setNumberForQuestInfo(500773, "managerHide", 0);
                                                                                                        cm.updateInfoQuest(500927, "name=" + cm.getPlayer().getName() + ";CID=" + cm.getPlayer().getId());
                                                                                                        cm.sendNewEffects(14, [0, 2000, 1000, 0, 0])
                                                                                                    } else {
                                                                                                        if (status === b++) {
                                                                                                            cm.sendNewEffects(19, [0])
                                                                                                        } else {
                                                                                                            if (status === b++) {
                                                                                                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 600, 0);
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                                            } else {
                                                                                                                if (status === b++) {
                                                                                                                    cm.eventSKill(0);
                                                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                                                    cm.addPopupSay(9400920, 10000, "#face0#凯兰西亚广场上出现了奇异的现象！快出来看看吧！", "", 0);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/500927.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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