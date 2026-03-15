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
            cm.onTeleport(0, 3, cm.getPlayer().getId(), 490, 20);
            cm.inGameDirectionEvent_ForcedFlip(1);
            cm.sendNewEffects(17, [0, 1000, 2000, 720, 60])
        } else {
            if (status === a++) {
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(100)
            } else {
                if (status === a++) {
                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 250, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(300)
                } else {
                    if (status === a++) {
                        cm.npc_SetForceMove("oid=9400580", -1, 20, 20);
                        cm.npc_SetSpecialAction("oid=9400584", "skill2", 0, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(2000)
                    } else {
                        if (status === a++) {
                            cm.npc_setForceFlip("oid=9400580", 1);
                            cm.inGameDirectionEvent_AskAnswerTime(250)
                        } else {
                            if (status === a++) {
                                cm.npc_SetForceMove("oid=9400580", 1, 20, 20);
                                cm.sendNormalTalk_Bottom("#b(……看来她正忙着照顾伤员。) ", 57, 0, false, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#b(没什么我能帮忙做的吗……) ", 57, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_ForcedFlip10(2, 30);
                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#b扎奈特，我能帮你什么吗？", 57, 0, false, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#啊……不用了，我只要有亚皮纳斯的祝福就够了。", 37, 9400584, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#b但是你需不需要……", 57, 0, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#不需要。", 37, 9400584, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0##h0#？", 37, 9400580, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.npc_setForceFlip("oid=9400580", -1);
                                                                cm.inGameDirectionEvent_AskAnswerTime(250)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.npc_SetForceMove("oid=9400580", -1, 60, 30);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#b啊，艾丽卡，我在想有没有什么我能帮得上忙的地方。", 57, 0, false, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#那可就多了！", 37, 9400580, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#你能先去帮我找来一些治疗需要的材料吗？", 37, 9400580, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#你也看到了，我们救护队和扎奈特的治愈能力都有限……我们都已经很累了，药物也有些不足……", 37, 9400580, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("#b当然了，但是这里有能作为药材的东西吗？", 57, 0, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#幸好在阿布鲁的民间疗法中，有用小白雪鬼的结晶融化后来涂抹的方法。虽然这个方法的疗效尚未得到证实，但是受伤的猎人都那么说，我也只能试一试了。", 37, 9400580, true, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#据说在江附近的雪原就有小白雪鬼，凯恩也已经过去了，你应该很容易就能找到的。", 37, 9400580, true, true)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.forceStartQuest(64067, "");
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.warp(867201180, 0);
                                                                                                        cm.setInGameDirectionMode(false, true, false);
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
            cm.sendNormalTalk_Bottom("#b艾丽卡，这是小白雪鬼结晶。", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#我找到的更多！", 37, 9400582, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#谢谢-谢谢你们。", 37, 9400580, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#b……", 57, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#b扎奈特，你能治疗这么多人，真是太厉害了，你不累吗？", 57, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#……", 37, 9400584, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#没错，真是好厉害啊！坚定的信念和使命感……她真是个特别的人。", 37, 9400580, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#……我只是将从亚皮纳斯那里获得的祝福分享给别人罢了。", 37, 9400584, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#咳~~~ ", 37, 9400582, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#凯恩，你先休息吧。如果还需要什么我会叫你的。", 37, 9400580, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0##h0#也是，请烤烤火，休息下吧。", 37, 9400580, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.forceCompleteQuest(64067);
                                                        cm.gainItem(4036382, -30);
                                                        cm.dispose();
                                                        cm.warp(867201101, 2, true)
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