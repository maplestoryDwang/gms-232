var status = -1;

function start() {
    action(1, 0, 0)
}

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom("#face0#准备好了。出发吧。", 36, 3003500, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face3#没关系吗？那个#r蜘蛛军团长#k应该不会坐以待毙。", 36, 3003502, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("伤势怎么样了……", 56, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.fieldEffect_ProcessOnOffLayer("00", "Map/Effect3.img/esfera/wound/0", 0, 500, 0, -80, 12, 4, 1);
                        cm.sendNormalTalk_Bottom("#face0#已经全好了。", 36, 3003500, true, true)
                    } else {
                        if (status === a++) {
                            cm.fieldEffect_ProcessOnOffLayer("00", "", 2, 500, 0, 0, 0, 0, 0);
                            cm.sendNormalTalk_Bottom("#face0#休麦，你负责看船。通信应该不会有问题吧？", 36, 3003500, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#嗯，马上就能进行短距离传送了。如果有危险，我应该可以把一个人传送到这里。", 36, 3003502, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#救出塔纳之后，马上传送回来就行了。", 36, 3003500, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face3#如果发生危险情况，先把#h0#传送到这里，别管我……", 36, 3003500, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("那个……", 56, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face3#因为#h0#是对付#r黑魔法师#k的人。", 36, 3003500, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("……", 56, 0, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face3#好的，知道了。别担心。", 36, 3003502, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.askAcceptDecline_Bottom("#face0#好，那就出发吧。", 36, 3003500)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.forceStartQuest(34571, "");
                                                                cm.updateInfoQuest(34560, "30=h0;50=h0;31=h1;51=h0;32=h1;52=h0;33=h0;53=h0;34=h0;54=h0;35=h0;55=h0;36=h0;56=h0;37=h0;57=h0;38=h0;58=h0;39=h0;59=h0;40=h0;60=h0;41=h0;42=h0;43=h0;44=h0;45=h0;46=h0;47=h0;48=h0;49=h0");
                                                                cm.updateInfoQuest(34560, "30=h0;50=h0;31=h1;51=h0;32=h1;52=h0;33=h0;53=h0;34=h0;54=h0;35=h0;55=h0;36=h0;56=h0;37=h0;57=h0;38=h0;58=h0;39=h0;59=h0;40=h0;60=h0;41=h0;42=h0;43=h0;44=h0;45=h0;46=h1;47=h0;48=h0;49=h0");
                                                                cm.forceStartQuest(34571, "");
                                                                cm.dispose();
                                                                cm.warp(450007100, 0)
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
        if (status == a++) {
            cm.setInGameDirectionMode(true, false, true);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.onTeleport(0, 3, cm.getPlayer().getId(), -1358, 206);
            cm.inGameDirectionEvent_ForcedFlip(1);
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
                        cm.sendNormalTalk_Bottom("#face0#我先回去了。这里的事情结束了。", 37, 3003501, false, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face3#梅尔朗，你不想帮我们吗……", 37, 3003500, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#如果是蜘蛛，请不用担心。\r\n因为他好像被塔纳的镜世界压制着。", 37, 3003501, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face3#被压制？那是什么意思？", 37, 3003500, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#只要塔纳还在坚持，就无法在这里使用镜之力量。因为两种力量是相互冲突的。", 37, 3003501, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face3#那不和电波干涉很像吗？要是相同波长的电波碰到一起……", 37, 3003502, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face1#原……原来是……电波干涉。明……明白了。", 37, 3003500, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#据说要是没有镜之力量，他没什么了不起的……不过千万不要大意。\r\n他之所以强大，还有其他原因。", 37, 3003501, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(300)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                    cm.npc_LeaveField("oid=2001461");
                                                                    cm.forceCompleteQuest(34571);
                                                                    cm.sendNormalTalk_Bottom("又走掉了……", 57, 0, false, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face3#没什么了不起……", 37, 3003500, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#face3#但是真的很疼耶……", 37, 3003500, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("沃莉？", 57, 0, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#啊，没什么。哈哈……走吧。", 37, 3003500, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.setStandAloneMode(false);
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
};