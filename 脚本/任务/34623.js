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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, false);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.sendNormalTalk_Bottom("#face0#别在这捣乱，从今天起，这附近我们Mr.哈扎尔支部接手了。", 37, 3001262, false, true, 1)
        } else {
            if (status === b++) {
                cm.sendNormalTalk_Bottom("#face0#……看来你是肯恩支部的人，想必你还没收到消息吧。", 37, 3001263, true, true, 1)
            } else {
                if (status === b++) {
                    cm.sendNormalTalk_Bottom("#face0#呵呵，从今天起，你们支部由我们Mr.哈扎尔支部接手了。", 37, 3001262, true, true, 1)
                } else {
                    if (status === b++) {
                        cm.sendNormalTalk_Bottom("#face0#所以说按排位你可在我们后头，你这个蠢货！", 37, 3001263, true, true, 1)
                    } else {
                        if (status === b++) {
                            cm.sendNormalTalk_Bottom("#face5#吵死了，支部长的话我都当耳边风，你们的话更是屁都不如！", 37, 3001270, true, true, 1)
                        } else {
                            if (status === b++) {
                                cm.sendNormalTalk_Bottom("#face5#少跟我来官场那一套，干嘛搞那么复杂，倒不如简单直接点。", 37, 3001270, true, true, 1)
                            } else {
                                if (status === b++) {
                                    cm.sendNormalTalk_Bottom("#face3#……哈哈，我有个好主意。谁打赢了就听谁的，怎么样，很简单吧？", 37, 3001270, true, true, 1)
                                } else {
                                    if (status === b++) {
                                        cm.sendNormalTalk_Bottom("#face0#哈，你会后悔刚刚所说的话！这么多人看你如何应付！", 37, 3001262, true, true, 1)
                                    } else {
                                        if (status === b++) {
                                            cm.npc_ChangeController(3001267, "oid=682680", -550, 3, 53, -600, -500, 0, true, 0, false);
                                            cm.npc_SetSpecialAction("oid=682680", "summon", 0, 0);
                                            cm.npc_ChangeController(3001267, "oid=682681", -440, 3, 51, -490, -390, 0, true, 0, false);
                                            cm.npc_SetSpecialAction("oid=682681", "summon", 0, 0);
                                            cm.npc_ChangeController(3001267, "oid=682682", -330, 3, 51, -380, -280, 0, true, 0, false);
                                            cm.npc_SetSpecialAction("oid=682682", "summon", 0, 0);
                                            cm.npc_ChangeController(3001267, "oid=682683", -260, 3, 51, -310, -210, 0, true, 0, false);
                                            cm.npc_SetSpecialAction("oid=682683", "summon", 0, 0);
                                            cm.npc_ChangeController(3001267, "oid=682684", -145, 3, 52, -195, -95, 0, true, 0, false);
                                            cm.npc_SetSpecialAction("oid=682684", "summon", 0, 0);
                                            cm.npc_ChangeController(3001267, "oid=682685", -40, 3, 52, -90, 10, 0, true, 0, false);
                                            cm.npc_SetSpecialAction("oid=682685", "summon", 0, 0);
                                            cm.npc_SetSpecialAction("oid=682680", "regen", 0, 1);
                                            cm.npc_SetSpecialAction("oid=682681", "regen", 0, 1);
                                            cm.npc_SetSpecialAction("oid=682682", "regen", 0, 1);
                                            cm.npc_SetSpecialAction("oid=682683", "regen", 0, 1);
                                            cm.npc_SetSpecialAction("oid=682684", "regen", 0, 1);
                                            cm.npc_SetSpecialAction("oid=682685", "regen", 0, 1);
                                            cm.fieldEffect_PlayFieldSound("Sound/Mob.img/2400317/Regen", 100);
                                            cm.inGameDirectionEvent_AskAnswerTime(1200)
                                        } else {
                                            if (status === b++) {
                                                cm.npc_SetSpecialAction("oid=682680", "stand", 0, 1);
                                                cm.npc_SetSpecialAction("oid=682681", "stand", 0, 1);
                                                cm.npc_SetSpecialAction("oid=682682", "stand", 0, 1);
                                                cm.npc_SetSpecialAction("oid=682683", "stand", 0, 1);
                                                cm.npc_SetSpecialAction("oid=682684", "stand", 0, 1);
                                                cm.npc_SetSpecialAction("oid=682685", "stand", 0, 1);
                                                cm.npc_ChangeController(3001267, "oid=682687", 680, 3, 57, 630, 730, 1, true, 0, false);
                                                cm.npc_SetSpecialAction("oid=682687", "summon", 0, 0);
                                                cm.npc_ChangeController(3001267, "oid=682688", 550, 3, 57, 500, 600, 1, true, 0, false);
                                                cm.npc_SetSpecialAction("oid=682688", "summon", 0, 0);
                                                cm.npc_ChangeController(3001267, "oid=682689", 430, 3, 56, 380, 480, 1, true, 0, false);
                                                cm.npc_SetSpecialAction("oid=682689", "summon", 0, 0);
                                                cm.npc_ChangeController(3001267, "oid=682690", 340, 3, 56, 290, 390, 1, true, 0, false);
                                                cm.npc_SetSpecialAction("oid=682690", "summon", 0, 0);
                                                cm.npc_ChangeController(3001267, "oid=682691", 245, 3, 56, 195, 295, 1, true, 0, false);
                                                cm.npc_SetSpecialAction("oid=682691", "summon", 0, 0);
                                                cm.npc_ChangeController(3001267, "oid=682692", 100, 3, 52, 50, 150, 1, true, 0, false);
                                                cm.npc_SetSpecialAction("oid=682692", "summon", 0, 0);
                                                cm.npc_SetSpecialAction("oid=682687", "regen", 0, 1);
                                                cm.npc_SetSpecialAction("oid=682688", "regen", 0, 1);
                                                cm.npc_SetSpecialAction("oid=682689", "regen", 0, 1);
                                                cm.npc_SetSpecialAction("oid=682690", "regen", 0, 1);
                                                cm.npc_SetSpecialAction("oid=682691", "regen", 0, 1);
                                                cm.npc_SetSpecialAction("oid=682692", "regen", 0, 1);
                                                cm.fieldEffect_PlayFieldSound("Sound/Mob.img/2400317/Regen", 100);
                                                cm.inGameDirectionEvent_AskAnswerTime(1200)
                                            } else {
                                                if (status === b++) {
                                                    cm.npc_SetSpecialAction("oid=682687", "stand", 0, 1);
                                                    cm.npc_SetSpecialAction("oid=682688", "stand", 0, 1);
                                                    cm.npc_SetSpecialAction("oid=682689", "stand", 0, 1);
                                                    cm.npc_SetSpecialAction("oid=682690", "stand", 0, 1);
                                                    cm.npc_SetSpecialAction("oid=682691", "stand", 0, 1);
                                                    cm.npc_SetSpecialAction("oid=682692", "stand", 0, 1);
                                                    cm.sendNormalTalk_Bottom("#face0#喂，小的们，给我好好教训他们！千万别手下留情！", 37, 3001263, false, true, 1)
                                                } else {
                                                    if (status === b++) {
                                                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                                    } else {
                                                        if (status === b++) {
                                                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                            cm.setInGameDirectionMode(false, true, false);
                                                            cm.setStandAloneMode(false);
                                                            cm.askAcceptDecline_Bottom("#face3##b(哼，我看今天受死的是你们吧。好，尽管出手吧！)#k\r\n\r\n#r ※ 接受时，将自动前往狩猎任务区域。", 37, 3001270, 1)
                                                        } else {
                                                            if (status === b++) {
                                                                cm.playerMessage(5, "需要消灭扑过来的Mr.哈扎尔的部下们。");
                                                                cm.npc_LeaveField("oid=682680");
                                                                cm.npc_LeaveField("oid=682681");
                                                                cm.npc_LeaveField("oid=682682");
                                                                cm.npc_LeaveField("oid=682683");
                                                                cm.npc_LeaveField("oid=682684");
                                                                cm.npc_LeaveField("oid=682685");
                                                                cm.npc_LeaveField("oid=682687");
                                                                cm.npc_LeaveField("oid=682688");
                                                                cm.npc_LeaveField("oid=682689");
                                                                cm.npc_LeaveField("oid=682690");
                                                                cm.npc_LeaveField("oid=682691");
                                                                cm.npc_LeaveField("oid=682692");
                                                                var a = cm.getEventManager("魔链影士_战斗3_击杀数");
                                                                a.startInstance(cm.getPlayer(), cm.getMap());
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/34623.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, false);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.OverlapScreenDetail19(0, 1000, 3000, 1);
            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_AskAnswerTime(300)
            } else {
                if (status === a++) {
                    cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                    cm.onTeleport(0, 3, cm.getPlayer().getId(), 47, -129);
                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                } else {
                    if (status === a++) {
                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(1200)
                    } else {
                        if (status === a++) {
                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(1400)
                        } else {
                            if (status === a++) {
                                cm.npc_ChangeController(3001265, "oid=682811", 115, -95, 8, 65, 165, 1, false, 0, false);
                                cm.npc_SetSpecialAction("oid=682811", "summon", 0, 0);
                                cm.npc_ChangeController(3001266, "oid=682812", 165, -95, 9, 115, 215, 1, false, 0, false);
                                cm.npc_SetSpecialAction("oid=682812", "summon", 0, 0);
                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction19.img/effect/cadena/0", "oid=682812"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cadena/appear", 100);
                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                                cm.inGameDirectionEvent_AskAnswerTime(2000)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_ForcedFlip10(0, 30);
                                    cm.inGameDirectionEvent_AskAnswerTime(300)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_ForcedFlip10(1, 30);
                                        cm.inGameDirectionEvent_AskAnswerTime(300)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face1#我、我带着同伴们来帮忙了……呃，竟然每次坏事都被我料中。", 37, 3001254, false, true, 1)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face1#呃，这么多人我们两个根本无法应付。", 37, 3001254, true, true, 1)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face1#说不定那些家伙还有救兵……还、还是先躲起来吧。", 37, 3001254, true, true, 1)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face1#我也赞成。", 37, 3001255, true, true, 1)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0#呃，这群蠢货！进来容易，想出去就难了！哼，看招！", 37, 3001263, true, true, 1)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction19.img/effect/cadena/2"], [30000, -253, -285, 1, 0, 0, 0, 0, 0]);
                                                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction19.img/effect/cadena/2"], [30000, -813, -35, 1, 0, 0, 0, 0, 0]);
                                                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction19.img/effect/cadena/2"], [30000, 447, -285, 1, 0, 0, 0, 0, 0]);
                                                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction19.img/effect/cadena/2"], [30000, -353, -285, 1, 0, 0, 0, 0, 0]);
                                                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction19.img/effect/cadena/2"], [30000, 347, 65, 1, 0, 0, 0, 0, 0]);
                                                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction19.img/effect/cadena/2"], [30000, -213, -185, 1, 0, 0, 0, 0, 0]);
                                                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction19.img/effect/cadena/2"], [30000, 647, -335, 1, 0, 0, 0, 0, 0]);
                                                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction19.img/effect/cadena/2"], [30000, -553, -485, 1, 0, 0, 0, 0, 0]);
                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cadena/gas", 100);
                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.inGameDirectionEvent_MoveAction(4);
                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction19.img/effect/cadena/2"], [30000, -253, 115, 1, 0, 0, 0, 0, 0]);
                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction19.img/effect/cadena/2"], [30000, 547, -285, 1, 0, 0, 0, 0, 0]);
                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction19.img/effect/cadena/2"], [30000, -173, 215, 1, 0, 0, 0, 0, 0]);
                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction19.img/effect/cadena/2"], [30000, 947, -185, 1, 0, 0, 0, 0, 0]);
                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction19.img/effect/cadena/2"], [30000, 1247, -185, 1, 0, 0, 0, 0, 0]);
                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cadena/gas", 100);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction19.img/effect/cadena/2"], [30000, 147, -285, 1, 0, 0, 0, 0, 0]);
                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction19.img/effect/cadena/2"], [30000, -253, 15, 1, 0, 0, 0, 0, 0]);
                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction19.img/effect/cadena/2"], [30000, -953, 15, 1, 0, 0, 0, 0, 0]);
                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction19.img/effect/cadena/2"], [30000, 1047, -385, 1, 0, 0, 0, 0, 0]);
                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction19.img/effect/cadena/2"], [30000, 1047, 215, 1, 0, 0, 0, 0, 0]);
                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction19.img/effect/cadena/2"], [30000, 947, -485, 1, 0, 0, 0, 0, 0]);
                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cadena/gas", 100);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#face1#糟糕，看来这次很难安然脱身了……我、我喘不过气……", 37, 3001254, false, true, 1)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("#face4#该死，根本使不上力气……呃呃，你到底对我做了什么？", 37, 3001270, true, true, 1)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.effect_Voice("Voice3.img/cadena/Q3/Female/0", 128);
                                                                                    cm.sendNormalTalk_Bottom("#face0#哦吼，可恶，竟然……同属影子商团，下手怎么能这么粗鲁。", 37, 3001261, true, true, 1)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.effect_Voice("Voice3.img/cadena/Q3/Female/1", 128);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.npc_ChangeController(3001261, "oid=682823", 600, 10, 57, 550, 650, 1, false, 0, false);
                                                                                            cm.npc_SetSpecialAction("oid=682823", "summon", 0, 0);
                                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/Direction19.img/effect/cadena/1", "oid=682823"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cadena/appear", 100);
                                                                                            cm.sendNormalTalk_Bottom("#face0#嘿，Mr.哈扎尔大人来了！看看那游刃有余的气场，真是帅呆了！恶人也能如此优雅！太让人崇敬了！", 37, 3001262, false, true, 1)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#你也太乱来了……可这也没办法，因为……", 37, 3001261, true, true, 1)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.effect_Voice("Voice3.img/cadena/Q3/Female/2", 128);
                                                                                                    cm.sendNormalTalk_Bottom("#face1#Mr.哈扎尔和肯恩说好要和睦相处。互相着想，同舟共济……", 37, 3001261, true, true, 1)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.effect_Voice("Voice3.img/cadena/Q3/Female/3", 128);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face1#我是和平主义者，最讨厌打打杀杀。换做以前，这件事应该移交总部处理……", 37, 3001261, false, true, 1)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.effect_Voice("Voice3.img/cadena/Q3/Female/4", 128);
                                                                                                                cm.sendNormalTalk_Bottom("#face1#这件事就这么算了吧。哼，你懂我的意思吧？", 37, 3001261, true, true, 1)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.effect_Voice("Voice3.img/cadena/Q3/Female/5", 128);
                                                                                                                    cm.sendNormalTalk_Bottom("#face2#那今后就拜托了，影子商团的同僚们……", 37, 3001261, true, true, 1)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.effect_Voice("Voice3.img/cadena/Q3/Female/6", 128);
                                                                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction19.img/effect/cadena/1", "oid=682823"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cadena/appear", 100);
                                                                                                                        cm.npc_LeaveField("oid=682823");
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2500)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face1#呃，好像在哪见过……那人难道是影子商团的二当家……", 37, 3001254, false, true, 1)
                                                                                                                            } else {
                                                                                                                                if (status === a++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#face1#灾难终结者……Mr.哈扎尔……据说他所到达的行星，全都化为一片焦土……", 37, 3001254, true, true, 1)
                                                                                                                                } else {
                                                                                                                                    if (status === a++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("#face1#……赶快扶着考尔保到安全的地方去……", 37, 3001254, true, true, 1)
                                                                                                                                    } else {
                                                                                                                                        if (status === a++) {
                                                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/radionoise", 100);
                                                                                                                                            cm.sendNormalTalk_Bottom("#face1#肯、肯恩，支部长好像发来消息了……看来是回来跟我们会合了。", 37, 3001254, true, true, 1)
                                                                                                                                        } else {
                                                                                                                                            if (status === a++) {
                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                            } else {
                                                                                                                                                if (status === a++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("#face1#呃，还是快点回据点吧……大家迅速归队……", 37, 3001254, false, true, 1)
                                                                                                                                                } else {
                                                                                                                                                    if (status === a++) {
                                                                                                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                                                    } else {
                                                                                                                                                        if (status === a++) {
                                                                                                                                                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                                                                                                                                        } else {
                                                                                                                                                            if (status === a++) {
                                                                                                                                                                cm.npc_LeaveField("oid=682788");
                                                                                                                                                                cm.npc_LeaveField("oid=682789");
                                                                                                                                                                cm.npc_LeaveField("oid=682790");
                                                                                                                                                                cm.npc_LeaveField("oid=682791");
                                                                                                                                                                cm.npc_LeaveField("oid=682792");
                                                                                                                                                                cm.npc_LeaveField("oid=682793");
                                                                                                                                                                cm.npc_LeaveField("oid=682794");
                                                                                                                                                                cm.npc_LeaveField("oid=682795");
                                                                                                                                                                cm.npc_LeaveField("oid=682796");
                                                                                                                                                                cm.npc_LeaveField("oid=682797");
                                                                                                                                                                cm.npc_LeaveField("oid=682798");
                                                                                                                                                                cm.npc_LeaveField("oid=682799");
                                                                                                                                                                cm.npc_LeaveField("oid=682811");
                                                                                                                                                                cm.npc_LeaveField("oid=682812");
                                                                                                                                                                cm.forceCompleteQuest(34623);
                                                                                                                                                                cm.dispose();
                                                                                                                                                                cm.warp(402000001, 0, false);
                                                                                                                                                                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                                                                cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                cm.setStandAloneMode(false)
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