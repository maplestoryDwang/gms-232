var status = -1;
var selectionLog = [];

function start(e, d, c) {
    if (cm.getPlayer().getGender() == 0) {
        var a = 1531000
    } else {
        var a = 1531052
    }
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
            cm.askYesNo_Bottom("这次我把你送到#b列娜海峡#k去。有个叫#b利琳#k的孩子正在那里等你。\r\n\r\n#b（※ #r列娜海峡#b是特殊主题副本。提供#r59级#b以下和勇士等级对应的怪物和任务。）", 36, 1531004)
        } else {
            if (status === b++) {
                cm.sendNormalTalk_Bottom("这道料理你带着，\r\n虽说列娜海峡是个严寒之地，但只要吃了这个，你的身子就会暖和起来的。", 37, 1531004, false, true)
            } else {
                if (status === b++) {
                    cm.sendNormalTalk_Bottom("难道……是用冰独眼兽做成的吗？", 37, a, true, true)
                } else {
                    if (status === b++) {
                        cm.sendNormalTalk_Bottom("这是冰独眼兽辣汤，难道有什么问题吗？", 37, 1531004, true, true)
                    } else {
                        if (status === b++) {
                            cm.sendNormalTalk_Bottom("#face2#……没什么，我会好好吃的，谢谢，大叔。", 37, a, true, true)
                        } else {
                            if (status === b++) {
                                cm.forceStartQuest(22784, "");
                                cm.forceStartQuest(32160, "");
                                cm.gainItem(2010045, 30);
                                cm.dispose();
                                cm.warp(140000000, 0, false)
                            }
                        }
                    }
                }
            }
        }
    }
}

function stage0(e, d, c) {
    if (cm.getPlayer().getGender() == 0) {
        var a = 1531000
    } else {
        var a = 1531052
    }
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }
    status++;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status == b++) {
            cm.curNodeEventEnd(true);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, true);
            cm.setStandAloneMode(true);
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 80, -300)
        } else {
            if (status === b++) {
                cm.onTeleport(0, 3, cm.getPlayer().getId(), -1, -412);
                cm.inGameDirectionEvent_ForcedFlip(1);
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(300)
            } else {
                if (status === b++) {
                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 250, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(300)
                } else {
                    if (status === b++) {
                        cm.sendNormalTalk_Bottom("看来是地狱啊……难道这就是我污染环境的惩罚吗……", 37, 1531051, false, true)
                    } else {
                        if (status === b++) {
                            cm.sendNormalTalk_Bottom("这是第二个念叨地狱的了。", 37, a, true, true)
                        } else {
                            if (status === b++) {
                                cm.sendNormalTalk_Bottom("我是个傻瓜……洗头膏我应该用适量的，空调我也应该适度开的。\r\n我早应该听妈妈的话的，妈妈~", 37, 1531051, true, true)
                            } else {
                                if (status === b++) {
                                    cm.sendNormalTalk_Bottom("这群傻瓜人类~南极融化了~要灭亡了啊~\r\n冰川融化了啊~家庭要破灭了~", 37, 1531051, true, true)
                                } else {
                                    if (status === b++) {
                                        cm.sendNormalTalk_Bottom("#face2#等回去了，一定要适量使用洗发膏，好好保护环境~", 37, a, true, true)
                                    } else {
                                        if (status === b++) {
                                            cm.forceCompleteQuest(22797);
                                            cm.inGameDirectionEvent_头顶图片(["Effect/BasicEff.img/Teleport"], [0, 95, -350, 1, 0, 1, 1, 0]);
                                            cm.fieldEffect_PlayFieldSound("Sound/Skill.img/1111002/Use", 100);
                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                        } else {
                                            if (status === b++) {
                                                cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647)
                                            } else {
                                                if (status === b++) {
                                                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                                } else {
                                                    if (status === b++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(300)
                                                    } else {
                                                        if (status === b++) {
                                                            cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                            cm.setStandAloneMode(false);
                                                            cm.eventSKill(0);
                                                            cm.setInGameDirectionMode(false, true, false);
                                                            cm.updateInfoQuest(22784, "NpcSpeech=15310511");
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

function stage1(e, d, c) {
    if (cm.getPlayer().getGender() == 0) {
        var a = 1531000
    } else {
        var a = 1531052
    }
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }
    status++;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status == b++) {
            cm.curNodeEventEnd(true);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, true);
            cm.setStandAloneMode(true);
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 649, 135)
        } else {
            if (status === b++) {
                cm.onTeleport(0, 3, cm.getPlayer().getId(), 584, 66);
                cm.inGameDirectionEvent_ForcedFlip(1);
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(300)
            } else {
                if (status === b++) {
                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 250, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(300)
                } else {
                    if (status === b++) {
                        cm.sendNormalTalk_Bottom("啊，是失踪者。", 37, a, false, true)
                    } else {
                        if (status === b++) {
                            cm.sendNormalTalk_Bottom("哈哈哈哈哈，这里是哪儿？我是谁？", 37, 1531045, true, true)
                        } else {
                            if (status === b++) {
                                cm.sendNormalTalk_Bottom("哈哈哈哈，好痛快，痛快啊，哈哈哈哈。", 37, 1531045, true, true)
                            } else {
                                if (status === b++) {
                                    cm.sendNormalTalk_Bottom("……", 37, a, true, true)
                                } else {
                                    if (status === b++) {
                                        cm.sendNormalTalk_Bottom("你是谁啊？哈哈哈，\r\n你去过南极那里？哈哈哈。", 37, 1531045, true, true)
                                    } else {
                                        if (status === b++) {
                                            cm.forceStartQuest(22785, "");
                                            cm.forceCompleteQuest(22796);
                                            cm.inGameDirectionEvent_头顶图片(["Effect/BasicEff.img/Teleport"], [0, 731, 113, 1, 0, 1, 1, 0]);
                                            cm.fieldEffect_PlayFieldSound("Sound/Skill.img/1111002/Use", 100);
                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                        } else {
                                            if (status === b++) {
                                                cm.sendNormalTalk_Bottom("这个地区的失踪者似乎也都找到了。", 37, a, false, true)
                                            } else {
                                                if (status === b++) {
                                                    cm.sendNormalTalk_Bottom("等这里的事情结束了再回去就可以了。", 37, a, true, true)
                                                } else {
                                                    if (status === b++) {
                                                        cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647)
                                                    } else {
                                                        if (status === b++) {
                                                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                                        } else {
                                                            if (status === b++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(300)
                                                            } else {
                                                                if (status === b++) {
                                                                    cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                    cm.setStandAloneMode(false);
                                                                    cm.eventSKill(0);
                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                    cm.updateInfoQuest(22784, "NpcSpeech=15310511/15310452");
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

function stage2(e, d, c) {
    if (cm.getPlayer().getGender() == 0) {
        var a = 1531000
    } else {
        var a = 1531052
    }
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }
    status++;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status == b++) {
            var f = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/22784.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == b++) {
                cm.forceStartQuest();
                cm.dispose()
            }
        }
    }
}

function end(e, d, c) {
    if (cm.getPlayer().getGender() == 0) {
        var a = 1531000
    } else {
        var a = 1531052
    }
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
            cm.curNodeEventEnd(true);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, true);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -140, -50)
        } else {
            if (status === b++) {
                cm.curNodeEventEnd(true);
                cm.onActionBarResult(6, -1);
                cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
                cm.npc_ChangeController(1531013, "oid=5566234", -550, 0, 36, -600, -500, 0, false, 0, false);
                cm.npc_SetSpecialAction("oid=5566234", "summon", 0, 0);
                cm.npc_ChangeController(1531014, "oid=5566235", -460, 0, 36, -510, -410, 0, false, 0, false);
                cm.npc_SetSpecialAction("oid=5566235", "summon", 0, 0);
                cm.npc_ChangeController(1531015, "oid=5566236", -390, 0, 37, -440, -340, 0, false, 0, false);
                cm.npc_SetSpecialAction("oid=5566236", "summon", 0, 0);
                cm.npc_ChangeController(1531016, "oid=5566237", -320, 0, 37, -370, -270, 0, false, 0, false);
                cm.npc_SetSpecialAction("oid=5566237", "summon", 0, 0);
                cm.npc_ChangeController(1531017, "oid=5566238", 100, 0, 39, 50, 150, 1, false, 0, false);
                cm.npc_SetSpecialAction("oid=5566238", "summon", 0, 0);
                cm.npc_ChangeController(1531018, "oid=5566239", 170, 0, 39, 120, 220, 1, false, 0, false);
                cm.npc_SetSpecialAction("oid=5566239", "summon", 0, 0);
                cm.npc_ChangeController(1531019, "oid=5566240", 240, 0, 40, 190, 290, 1, false, 0, false);
                cm.npc_SetSpecialAction("oid=5566240", "summon", 0, 0);
                cm.npc_ChangeController(1531032, "oid=5566241", 310, 0, 40, 260, 360, 1, false, 0, false);
                cm.npc_SetSpecialAction("oid=5566241", "summon", 0, 0);
                cm.npc_SetSpecialAction("oid=5566234", "glad", -1, 1);
                cm.npc_SetSpecialAction("oid=5566235", "glad", -1, 1);
                cm.npc_SetSpecialAction("oid=5566236", "glad", -1, 1);
                cm.npc_SetSpecialAction("oid=5566237", "glad", -1, 1);
                cm.npc_SetSpecialAction("oid=5566238", "glad", -1, 1);
                cm.npc_SetSpecialAction("oid=5566239", "glad", -1, 1);
                cm.npc_SetSpecialAction("oid=5566240", "glad", -1, 1);
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1200)
            } else {
                if (status === b++) {
                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1400)
                } else {
                    if (status === b++) {
                        cm.inGameDirectionEvent_AskAnswerTime(500)
                    } else {
                        if (status === b++) {
                            cm.sendNormalTalk_Bottom("哦？大家都来了啊？", 37, a, false, true)
                        } else {
                            if (status === b++) {
                                cm.sendNormalTalk_Bottom("#face0#辛苦了，这件事你干得漂亮呢。\r\n大家都在等着跟超能力者打招呼呢。", 37, 1531003, true, true)
                            } else {
                                if (status === b++) {
                                    cm.sendNormalTalk_Bottom("#face0#我都让他们先走了，可就是不听话呢。\r\n非要执意来打个招呼。", 37, 1531003, true, true)
                                } else {
                                    if (status === b++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1500)
                                    } else {
                                        if (status === b++) {
                                            cm.effect_NormalSpeechBalloon("#fn黑体 ExtraBold##fs18#谢谢你,  我一直想着要来打个招呼的", 1, 0, 0, 1000, 1, 0, 0, 0, 4, 1531013, null, cm.getPlayer().getId());
                                            cm.inGameDirectionEvent_AskAnswerTime(1500)
                                        } else {
                                            if (status === b++) {
                                                cm.effect_NormalSpeechBalloon("#fn黑体 ExtraBold##fs18#不愧是超能力者啊！！！", 1, 0, 0, 1000, 1, 0, 0, 0, 4, 1531014, null, cm.getPlayer().getId());
                                                cm.inGameDirectionEvent_AskAnswerTime(1500)
                                            } else {
                                                if (status === b++) {
                                                    cm.effect_NormalSpeechBalloon("#fn黑体 ExtraBold##fs18#我现在可完全变成超能力者的脑残粉了！！", 1, 0, 0, 1000, 1, 0, 0, 0, 4, 1531015, null, cm.getPlayer().getId());
                                                    cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                } else {
                                                    if (status === b++) {
                                                        cm.effect_NormalSpeechBalloon("#fn黑体 ExtraBold##fs18#我也是！我也是超能力者的脑残粉！", 1, 0, 0, 1000, 1, 0, 0, 0, 4, 1531016, null, cm.getPlayer().getId());
                                                        cm.sendNormalTalk_Bottom("在如此陌生的地方，你们能活下来，我反而非常感激。", 37, a, false, true)
                                                    } else {
                                                        if (status === b++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                        } else {
                                                            if (status === b++) {
                                                                cm.effect_NormalSpeechBalloon("#fn黑体 ExtraBold##fs18#因为我们相信你会来救我们的！我们一直坚持撑住！", 1, 0, 0, 1000, 1, 0, 0, 0, 4, 1531017, null, cm.getPlayer().getId());
                                                                cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                            } else {
                                                                if (status === b++) {
                                                                    cm.effect_NormalSpeechBalloon("#fn黑体 ExtraBold##fs18#没错！没错！", 1, 0, 0, 1000, 1, 0, 0, 0, 4, 1531018, null, cm.getPlayer().getId());
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                } else {
                                                                    if (status === b++) {
                                                                        cm.effect_NormalSpeechBalloon("#fn黑体 ExtraBold##fs18#我爱你,  超能力者~！！", 1, 0, 0, 1000, 1, 0, 0, 0, 4, 1531019, null, cm.getPlayer().getId());
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                    } else {
                                                                        if (status === b++) {
                                                                            cm.effect_NormalSpeechBalloon("#fn黑体 ExtraBold##fs18#多亏了你我们才能活下来~！！", 1, 0, 0, 1000, 1, 0, 0, 0, 4, 1531032, null, cm.getPlayer().getId());
                                                                            cm.sendNormalTalk_Bottom("#face0#哇！超能力者的人气可非同小可啊。", 37, 1531003, false, true)
                                                                        } else {
                                                                            if (status === b++) {
                                                                                cm.sendNormalTalk_Bottom("#face2#各位……谢谢你们所有人，希望回去之后还能再见。", 37, a, true, true)
                                                                            } else {
                                                                                if (status === b++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                } else {
                                                                                    if (status === b++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#既然已经都打过招呼了，也是时候分开了。", 37, 1531003, false, true)
                                                                                    } else {
                                                                                        if (status === b++) {
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                        } else {
                                                                                            if (status === b++) {
                                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/BasicEff.img/Teleport"], [0, -550, 60, 1, 0, 1, 1, 0]);
                                                                                                cm.fieldEffect_PlayFieldSound("Sound/Skill.img/1111002/Use", 100);
                                                                                                cm.npc_LeaveField("oid=5566234");
                                                                                                cm.npc_LeaveField("oid=5566234");
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                            } else {
                                                                                                if (status === b++) {
                                                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/BasicEff.img/Teleport"], [0, -460, 60, 1, 0, 1, 1, 0]);
                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/Skill.img/1111002/Use", 100);
                                                                                                    cm.npc_LeaveField("oid=5566235");
                                                                                                    cm.npc_LeaveField("oid=5566235");
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                } else {
                                                                                                    if (status === b++) {
                                                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/BasicEff.img/Teleport"], [0, -390, 60, 1, 0, 1, 1, 0]);
                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/Skill.img/1111002/Use", 100);
                                                                                                        cm.npc_LeaveField("oid=5566236");
                                                                                                        cm.npc_LeaveField("oid=5566236");
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                    } else {
                                                                                                        if (status === b++) {
                                                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/BasicEff.img/Teleport"], [0, -320, 60, 1, 0, 1, 1, 0]);
                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/Skill.img/1111002/Use", 100);
                                                                                                            cm.npc_LeaveField("oid=5566237");
                                                                                                            cm.npc_LeaveField("oid=5566237");
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                        } else {
                                                                                                            if (status === b++) {
                                                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/BasicEff.img/Teleport"], [0, 100, 60, 1, 0, 1, 1, 0]);
                                                                                                                cm.fieldEffect_PlayFieldSound("Sound/Skill.img/1111002/Use", 100);
                                                                                                                cm.npc_LeaveField("oid=5566238");
                                                                                                                cm.npc_LeaveField("oid=5566238");
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                            } else {
                                                                                                                if (status === b++) {
                                                                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/BasicEff.img/Teleport"], [0, 170, 60, 1, 0, 1, 1, 0]);
                                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/Skill.img/1111002/Use", 100);
                                                                                                                    cm.npc_LeaveField("oid=5566239");
                                                                                                                    cm.npc_LeaveField("oid=5566239");
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                } else {
                                                                                                                    if (status === b++) {
                                                                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/BasicEff.img/Teleport"], [0, 240, 60, 1, 0, 1, 1, 0]);
                                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/Skill.img/1111002/Use", 100);
                                                                                                                        cm.npc_LeaveField("oid=5566240");
                                                                                                                        cm.npc_LeaveField("oid=5566240");
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                    } else {
                                                                                                                        if (status === b++) {
                                                                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/BasicEff.img/Teleport"], [0, 310, 60, 1, 0, 1, 1, 0]);
                                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/Skill.img/1111002/Use", 100);
                                                                                                                            cm.npc_LeaveField("oid=5566241");
                                                                                                                            cm.npc_LeaveField("oid=5566241");
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                        } else {
                                                                                                                            if (status === b++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face1#超能力者，心情怎么样啊？", 37, 1531003, false, true)
                                                                                                                            } else {
                                                                                                                                if (status === b++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#face2#……你这是什么表情啊？！？！", 37, 1531003, true, true)
                                                                                                                                } else {
                                                                                                                                    if (status === b++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("很是焦躁啊。", 37, 1531004, true, true)
                                                                                                                                    } else {
                                                                                                                                        if (status === b++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#失踪者有数千人，\r\n光是这样是没法救出所有人的。", 37, a, true, true)
                                                                                                                                        } else {
                                                                                                                                            if (status === b++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("你冷静点，你现在这是在自责。", 37, 1531004, true, true)
                                                                                                                                            } else {
                                                                                                                                                if (status === b++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("虽然#r白魔法师#k利用你的力量惹出了这么大的事情，但那并不是你的错。", 37, 1531004, true, true)
                                                                                                                                                } else {
                                                                                                                                                    if (status === b++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("你是引爆剂……这不过是把他的计划提前了而已。\r\n既然他已经下定了决心，那任何时候都有可能惹出这档子事情来。", 37, 1531004, true, true)
                                                                                                                                                    } else {
                                                                                                                                                        if (status === b++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom("只不过你现在能够做到，让这样的事情不再发生，\r\n想要不被牵扯进去，你就得变成自己力量的主人才行。\r\n这便是拥有力量者的宿命。", 37, 1531004, true, true)
                                                                                                                                                        } else {
                                                                                                                                                            if (status === b++) {
                                                                                                                                                                cm.sendNormalTalk_Bottom("#face9#狼大叔的话没错，凯内西斯。\r\n现在我们能够做的事情，就是需要冷静思考。", 37, 1531001, true, true)
                                                                                                                                                            } else {
                                                                                                                                                                if (status === b++) {
                                                                                                                                                                    cm.sendNormalTalk_Bottom("…………好吧，我知道了。", 37, a, true, true)
                                                                                                                                                                } else {
                                                                                                                                                                    if (status === b++) {
                                                                                                                                                                        cm.sendNormalTalk_Bottom("其他失踪者到底在哪儿？\r\n如果我继续在冒险岛世界四周寻找，就能找到所有人了吗？", 37, a, true, true)
                                                                                                                                                                    } else {
                                                                                                                                                                        if (status === b++) {
                                                                                                                                                                            cm.sendNormalTalk_Bottom("有关此事，有个消息我要告诉你。\r\n大部分失踪者似乎还是被束缚在了次元缝隙。", 37, 1531004, true, true)
                                                                                                                                                                        } else {
                                                                                                                                                                            if (status === b++) {
                                                                                                                                                                                cm.sendNormalTalk_Bottom("等下，这就表示……", 37, a, true, true)
                                                                                                                                                                            } else {
                                                                                                                                                                                if (status === b++) {
                                                                                                                                                                                    cm.sendNormalTalk_Bottom("被破坏过一次的城市是不会再度复原的，\r\n但是被次元缝隙吸进去的人还活着。", 37, 1531004, true, true)
                                                                                                                                                                                } else {
                                                                                                                                                                                    if (status === b++) {
                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face2#是吗？你怎么不早说！\r\n这么说来我还有机会救出所有人。", 37, a, true, true)
                                                                                                                                                                                    } else {
                                                                                                                                                                                        if (status === b++) {
                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face2#只要解决了陷坑的异常现象，\r\n这个问题也就能迎刃而解了吧？", 37, a, true, true)
                                                                                                                                                                                        } else {
                                                                                                                                                                                            if (status === b++) {
                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face10#……这可没有说得这么容易。", 37, 1531001, true, true)
                                                                                                                                                                                            } else {
                                                                                                                                                                                                if (status === b++) {
                                                                                                                                                                                                    cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                                                                                                                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647)
                                                                                                                                                                                                } else {
                                                                                                                                                                                                    if (status === b++) {
                                                                                                                                                                                                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                        if (status === b++) {
                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(300)
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                            if (status === b++) {
                                                                                                                                                                                                                cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                                                                                                                                cm.setStandAloneMode(false);
                                                                                                                                                                                                                cm.eventSKill(0);
                                                                                                                                                                                                                cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                                                                cm.forceCompleteQuest(22784);
                                                                                                                                                                                                                cm.forceCompleteQuest(22785);
                                                                                                                                                                                                                cm.forceStartQuest(22786, "");
                                                                                                                                                                                                                cm.gainExp(41420);
                                                                                                                                                                                                                cm.dispose();
                                                                                                                                                                                                                cm.warp(331005210, 0, false)
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
};