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
            cm.askAcceptDecline_Bottom("#face0#我们探测到坠落的飞艇位置在垃圾场里。\r\n你从村子#b左边#k出去就到了。", 36, 3004014)
        } else {
            if (status === a++) {
                cm.forceStartQuest(37103, "");
                cm.updateInfoQuest(37100, "31=h0;32=h0;33=h1;dir=off");
                cm.OnStartNavigation(402000100, 0, "", 0);
                cm.sendNormalTalk_Bottom("#face0#对了，我提醒你一句，千万别妄想逃跑哦~", 36, 3004014, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#那样一来，我们只好找塞妮娅索要维修费和治疗费等一系列费用了。", 36, 3004014, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("……", 56, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("（看样子他们把塞妮娅扣留做人质了。）", 56, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.updateInfoQuest(37103, "");
                                cm.dispose()
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
            cm.sendNormalTalk_Bottom("#face0#你站住。", 36, 3001259, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#喂，外地人。\r\n如果你是想进去里面，我劝你最好打消这个念头。", 36, 3001259, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("此话怎讲？", 56, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#这里的地头蛇十分凶狠，估计你走不了几步就会被洗劫一空了。", 36, 3001259, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("（说明情况。）", 56, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#免费观光大礼包？\r\n这么肤浅的手段，居然现在还会有人上当。", 36, 3001259, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("……", 56, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#可飞弹和少女又是怎么回事？是他们的新伎俩吗？", 36, 3001259, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#嗯……总之不关我的事。你自己看着办吧。", 36, 3001259, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("你有没有见到飞艇……", 56, 0, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#飞艇坠落在那边，#b危险的垃圾场1#k。\r\n你爬到垃圾堆顶上，翻过铁丝网就能看见。", 36, 3001259, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#话说这下又要热闹起来了。那家伙肯定不会坐视不管……", 36, 3001259, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("？", 56, 0, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.updateInfoQuest(37103, "NpcSpeech=30012191");
                                                                cm.OnStartNavigation(402000124, 0, "", 0);
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

function stage1(c, b, a) {
    end(c, b, a)
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
            cm.sendNormalTalk_Bottom("找到飞艇了！！去搜索一下内部。", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.curNodeEventEnd(true);
                cm.setInGameDirectionMode(true, false, true);
                cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                cm.setStandAloneMode(true);
                cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -200, 566)
            } else {
                if (status === a++) {
                    cm.onTeleport(0, 3, cm.getPlayer().getId(), -282, 532);
                    cm.inGameDirectionEvent_ForcedFlip(1);
                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1200)
                } else {
                    if (status === a++) {
                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(1400)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("（虽然有缝隙，但是太窄了，进不去。）", 57, 0, false, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#什么人？", 37, 3001358, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("嗯？！", 57, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_ForcedFlip(-1);
                                        cm.inGameDirectionEvent_PushScaleInfo(300, 1500, 300, -387, 720)
                                    } else {
                                        if (status === a++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                        } else {
                                            if (status === a++) {
                                                cm.npc_ChangeController(3001358, "oid=7085738", -500, 740, 30, -550, -450, 0, true, false);
                                                cm.npc_SetSpecialAction("oid=7085738", "summon", 0, 0);
                                                cm.npc_ChangeController(3001358, "oid=7085739", -620, 740, 31, -670, -570, 0, true, false);
                                                cm.npc_SetSpecialAction("oid=7085739", "summon", 0, 0);
                                                cm.npc_ChangeController(3001358, "oid=7085740", -740, 740, 31, -790, -690, 0, true, false);
                                                cm.npc_SetSpecialAction("oid=7085740", "summon", 0, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(500)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#看你好像是外地人，竟敢擅闯这里，不想活了？", 37, 3001358, false, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#喂，那家伙想动我们的东西！", 37, 3001358, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("你们的东西？", 57, 0, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face0#垃圾场里的东西全部都归我们所有，这不理所当然的吗？", 37, 3001358, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("哪有这样不讲理的……。", 57, 0, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#不讲理？要不要让你看看什么叫真正的不讲理？", 37, 3001358, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("嘁。", 57, 0, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.askAcceptDecline_Bottom("要跟他们打吗？", 57, 3004034)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.dispose();
                                                                                    cm.warp(940203260, 0);
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
};