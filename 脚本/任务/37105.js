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
            cm.sendNormalTalk_Bottom("#face0#好，我们来推理一下。", 36, 3004000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#飞艇的出入口紧闭，裂开的缝隙十分狭窄。\r\n这时候可以推论犯人衣着相貌的线索是……", 36, 3004000, true, true)
            } else {
                if (status === a++) {
                    cm.askMenu_Bottom("答案是……\r\n\r\n#b#L0# 身高？#l\r\n#L1# 年龄？#l\r\n#L2# 种族？#l", 56, 3004035)
                } else {
                    if (status === a++) {
                        if (selectionLog[3] == 0) {
                            cm.sendNormalTalk_Bottom("身高？", 56, 0, false, true)
                        } else {
                            if (selectionLog[3] == 1) {
                                cm.sendNormalTalk_Bottom("年龄？", 56, 0, false, true)
                            } else {
                                cm.sendNormalTalk_Bottom("种族？", 56, 0, false, true)
                            }
                        }
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#严格来说应该是身高，但其实三个都算正确答案。\r\n犯人既然能钻进狭窄的缝隙盗出物品，很可能是年纪小，或者小个子的种族。", 36, 3004000, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#我看看……\r\n这里留下许多不同种类的脚印……如此说来犯人……应该", 36, 3004000, true, true)
                            } else {
                                if (status === a++) {
                                    cm.askMenu_Bottom("犯人应该……\r\n\r\n#b#L0# 长了好几条腿。#l\r\n#L1# 多次进进出出。#l\r\n#L2# 不止一个。#l", 56, 3004035)
                                } else {
                                    if (status === a++) {
                                        if (selectionLog[7] == 0) {
                                            cm.sendNormalTalk_Bottom("犯人长了好几条腿。", 56, 0, false, true)
                                        } else {
                                            if (selectionLog[7] == 1) {
                                                cm.sendNormalTalk_Bottom("犯人多次进出了狭窄的缝隙。", 56, 0, false, true)
                                            } else {
                                                cm.sendNormalTalk_Bottom("犯人不止一个。", 56, 0, false, true)
                                            }
                                        }
                                    } else {
                                        if (status === a++) {
                                            if (selectionLog[7] == 0) {
                                                cm.sendNormalTalk_Bottom("#face0#我没见过这里有什么蜈蚣种族之类的……", 36, 3004000, true, true)
                                            } else {
                                                if (selectionLog[7] == 1) {
                                                    cm.sendNormalTalk_Bottom("#face0#……他要是不嫌麻烦频繁换鞋走来走去，倒是有可能。", 36, 3004000, true, true)
                                                } else {
                                                    cm.sendNormalTalk_Bottom("#face0#答对了。没想到你还挺有用的。", 36, 3004000, true, true)
                                                }
                                            }
                                        } else {
                                            if (status === a++) {
                                                if (selectionLog[7] == 0 || selectionLog[7] == 1) {
                                                    cm.dispose();
                                                    cm.sendNormalTalk_Bottom("#face0#你重新想想看。", 36, 3004000, true, true)
                                                } else {
                                                    cm.askAcceptDecline_Bottom("#face0#总之，我大致猜到犯人是谁了。我们到#b危险的垃圾场3#k去。", 36, 3004000)
                                                }
                                            } else {
                                                if (status === a++) {
                                                    cm.forceStartQuest(37105, "");
                                                    cm.updateInfoQuest(37100, "31=h0;32=h0;33=h1;dir=off;35=h1");
                                                    cm.updateInfoQuest(37100, "31=h0;32=h0;33=h1;dir=off;35=h1;36=h0");
                                                    cm.OnStartNavigation(402000126, 0, "", 0);
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
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.setStandAloneMode(true);
            cm.onTeleport(0, 3, cm.getPlayer().getId(), -89, 500);
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1200)
        } else {
            if (status === a++) {
                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1400)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#哦哟，一群孩童。你们怎么样？是我，黑鸦。", 37, 3004000, false, true)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction21.img/SavageT/effect/4"], [2000, -30, 210, 1, 0, 1, 1, 0]);
                        cm.inGameDirectionEvent_AskAnswerTime(700)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_头顶图片(["Effect/Direction21.img/SavageT/effect/3"], [2000, -169, 328, 1, 0, 1, 1, 0]);
                            cm.inGameDirectionEvent_AskAnswerTime(700)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction21.img/SavageT/effect/3"], [2000, 88, 395, 1, 0, 1, 1, 0]);
                                cm.inGameDirectionEvent_AskAnswerTime(2500)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("谁？", 57, 0, false, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#是这个垃圾场的居民吧！\r\n他们住在离坠落地点很近的地方。", 37, 3004000, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#我再说一遍，他是最大嫌疑人。", 37, 3004000, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#一群孩童！！", 37, 3004000, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction21.img/SavageT/effect/4"], [2000, -30, 210, 1, 0, 1, 1, 0]);
                                                    cm.inGameDirectionEvent_AskAnswerTime(300)
                                                } else {
                                                    if (status === a++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(1800);
                                                        cm.effect_NormalSpeechBalloon("我不和陌生人说话。黑鸦，和你也一样。", 1, 0, 0, 1500, 0, 96, -320, 0, 4, 0, cm.getPlayer().getId())
                                                    } else {
                                                        if (status === a++) {
                                                            cm.inGameDirectionEvent_头顶图片(["Effect/Direction21.img/SavageT/effect/3"], [2000, -169, 328, 1, 0, 1, 1, 0]);
                                                            cm.inGameDirectionEvent_AskAnswerTime(300)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(2300);
                                                                cm.effect_NormalSpeechBalloon("是吗？笨蛋！", 1, 0, 0, 1500, 0, -90, -210, 0, 4, 0, cm.getPlayer().getId())
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#嗯…。没办法了。要不要点一堆篝火，往洞里煽烟？", 37, 3004000, false, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.npc_ChangeController(3004004, "oid=7096986", -229, 348, 1, -279, -179, 0, false, 500, false);
                                                                        cm.npc_SetSpecialAction("oid=7096986", "summon", 0, 0);
                                                                        cm.npc_ChangeController(3004005, "oid=7096987", -161, 181, 6, -211, -111, 0, false, 500, false);
                                                                        cm.npc_SetSpecialAction("oid=7096987", "summon", 0, 0);
                                                                        cm.npc_ChangeController(3004005, "oid=7096988", 35, 361, 16, -15, 85, 1, false, 500, false);
                                                                        cm.npc_SetSpecialAction("oid=7096988", "summon", 0, 0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#笨黑鸦！", 37, 3004004, false, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#笨蛋笨蛋！！", 37, 3004005, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("难道长大后就成天惹是生非吗？", 57, 0, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#成长环境很重要呀！", 37, 3004000, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                                            cm.setStandAloneMode(false);
                                                                                            cm.npc_LeaveField("oid=7096986");
                                                                                            cm.npc_LeaveField("oid=7096986");
                                                                                            cm.npc_LeaveField("oid=7096987");
                                                                                            cm.npc_LeaveField("oid=7096987");
                                                                                            cm.npc_LeaveField("oid=7096988");
                                                                                            cm.npc_LeaveField("oid=7096988");
                                                                                            cm.updateInfoQuest(37100, "31=h0;32=h0;33=h1;dir=off;35=h1;36=h0;37=h0");
                                                                                            cm.updateInfoQuest(37100, "31=h0;50=h0;32=h0;33=h1;dir=off;35=h1;36=h0;37=h0");
                                                                                            cm.gainExp(9487412);
                                                                                            cm.forceCompleteQuest(37105);
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
};