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
            cm.setNumberForQuestInfo(500773, "managerHide", 1);
            cm.curNodeEventEnd(true);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, false);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/birdsong", 100);
            cm.npc_ChangeController(9400929, "oid=91879950", 110, 120, 15, 60, 160, 0, true, 0, false);
            cm.npc_SetSpecialAction("oid=91879950", "summon", 0, 0);
            cm.npc_ChangeController(9401173, "oid=91879951", 170, 120, 15, 120, 220, 1, false, 0, false);
            cm.npc_SetSpecialAction("oid=91879951", "summon", 0, 0);
            cm.onTeleport(0, 3, cm.getPlayer().getId(), -100, 120);
            cm.sendNewEffects(17, [0, 1000, 2000, 110, 240])
        } else {
            if (status === a++) {
                cm.effect_Text(["#fn黑体##fs20##e阳光温暖照耀着的某天……"], [50, 3000, 6, -50, -50, 1, 4, 0, 0, 0, 0]);
                cm.inGameDirectionEvent_AskAnswerTime(4000)
            } else {
                if (status === a++) {
                    cm.setMobImage("PL_Sound.img/myHome/blender_loop", 100);
                    cm.npc_SetSpecialAction("oid=91879951", "action", -1, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                } else {
                    if (status === a++) {
                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                        cm.inGameDirectionEvent_ForcedFlip10(2, 50);
                        cm.inGameDirectionEvent_AskAnswerTime(500)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#b埃尔宾~~？你在干嘛？", 57, 0, false, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face5#…", 37, 9400921, true, true)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#b埃尔宾！", 57, 0, false, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face5#… ", 37, 9400921, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                            } else {
                                                if (status === a++) {
                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/whatl"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                    cm.inGameDirectionEvent_ForcedFlip10(2, 10);
                                                    cm.sendNormalTalk_Bottom("#fs30##b埃尔宾？！！！！！", 57, 0, false, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.playSoundEffDirectly("PL_Sound.img/myHome/blender_loop");
                                                            cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/blender_end", 100);
                                                            cm.setNpcSpecialActionReset("oid=91879951");
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.npc_setForceFlip("oid=91879950", -1);
                                                                cm.inGameDirectionEvent_AskAnswerTime(300)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face1#啊！#h0#，你来了？", 37, 9400921, false, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#b嗯……不过……这些是什么？", 57, 0, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(300)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.npc_setForceFlip("oid=91879950", 1);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.npc_setForceFlip("oid=91879950", -1);
                                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/shade", "oid=91879950"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(300)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("#face5#那个……呼……", 37, 9400921, false, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.askAcceptDecline_Bottom("#face5#我想我应该亲自去看一下……你要和我一起去广场吗？\r\n#b※确定开始[我的小屋EP3.艾米咖啡1号店]吗？\r\n世界内每个账号只可执行1次该任务。章节进行中不可变更执行角色，在管理员菜单中重置后，可重新启动。", 37, 9400921)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.forceStartQuest(501024, "");
                                                                                                cm.updateInfoQuest(501024, "start=1");
                                                                                                cm.npc_LeaveField("oid=91879950");
                                                                                                cm.npc_LeaveField("oid=91879951");
                                                                                                cm.sendNewEffects(14, [0, 2000, 1000, 0, 0])
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNewEffects(19, [0])
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                        cm.setNumberForQuestInfo(500773, "managerHide", 0);
                                                                                                        cm.warp(871000080, 0, false);
                                                                                                        cm.eventSKill(0);
                                                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                                                        cm.npc_LeaveField("oid=91879765");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/501024.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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