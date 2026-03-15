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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的开始脚本还没有修复哦。它的脚本位于： #b 脚本/任务/34813.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.setStandAloneMode(true);
            cm.sendNormalTalk_Bottom("#face0#哦，这就可以了。", 37, 3001306, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face2#水晶魔力全部提取完了吗？", 37, 3001301, true, true)
            } else {
                if (status === a++) {
                    cm.npc_ChangeController(3001301, "oid=535270", -1470, 50, 15, -1520, -1420, 0, true, false);
                    cm.npc_SetSpecialAction("oid=535270", "summon", 0, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(600)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#阿加特大人！", 37, 3001351, false, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#啊，你好！阿加特大人！", 37, 3001306, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face1#你好。", 37, 3001301, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#我们平民翼人的士兵……也很可靠吧？", 37, 3001301, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#哈哈，哪的话！", 37, 3001306, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#没想到你们竟然这么卖力……", 37, 3001351, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#眼前阿叙隆的和平都是牺牲大家换来的……无论是过去还是现在……", 37, 3001301, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#我从士兵那听说了……现在不断有外敌入侵……", 37, 3001351, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#如果真有那一天……我会保护……阿加特大人的……", 37, 3001351, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0#谢谢你，伊利温。放心吧，绝不会有那一天的。", 37, 3001301, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face1#先收下药水吧。说不定今后用得到。", 37, 3001301, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.updateInfoQuest(34813, "m=0;item2=1;d2=1");
                                                                    cm.sendNormalTalk_Bottom("#face2#好，那开始练习吧？", 37, 3001301, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.gainItem(2001502, 50);
                                                                        cm.gainItem(2001506, 50);
                                                                        cm.sendNormalTalk_Bottom("#face0#嗯，好吧！", 37, 3001351, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#(嗯，我会保护阿加特大人的。你只管认真修炼吧！)", 37, 3001351, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.npc_LeaveField("oid=535270");
                                                                                    cm.npc_LeaveField("oid=535270");
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(100)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.forceCompleteQuest(34813);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(100)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.updateInfoQuest(34813, "m=0;item2=1;exp=1;d2=1");
                                                                                            cm.updateInfoQuest(15710, "lasttime=19/12/02/12/18");
                                                                                            cm.dispose();
                                                                                            cm.warp(402000521, 14);
                                                                                            cm.setStandAloneMode(false);
                                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                                            cm.OnStartNavigation(402000529, 0, "", 0);
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