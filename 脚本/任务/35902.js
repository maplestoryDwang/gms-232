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
            cm.askAcceptDecline_Bottom("#face6#也就是说，需要给守护遗迹的家伙带去祭品。\r\n然后放到刻着正确答案的柱子上就OK了。", 36, 1013358, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#正确答案已经知道了。那就去寻找#r#o2300200##k，搜集#b5个#k#b#i4036523# #t4036523##k吧。\r\n在附近找找看，应该就能找到遗迹防御兵。", 36, 1013358, false, true, 1)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(35902, "");
                    cm.gainItem(2060016, 2000);
                    cm.gainItem(2000051, 200);
                    cm.gainItem(2000052, 200);
                    cm.OnStartNavigation(910090303, 0, "", 35902);
                    cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/35902.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.npc_ChangeController(1013305, "oid=266208", -286, 7, 1, -336, -240, 1, false, 0, false);
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, false);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 250, 2);
            cm.inGameDirectionEvent_AskAnswerTime(250)
        } else {
            if (status === a++) {
                cm.onTeleport(0, 3, cm.getPlayer().getId(), -100, 50);
                cm.inGameDirectionEvent_ForcedFlip(-1);
                cm.inGameDirectionEvent_AskAnswerTime(1500)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_ForcedFlip(0);
                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
                    cm.inGameDirectionEvent_AskAnswerTime(1200)
                } else {
                    if (status === a++) {
                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(1400)
                    } else {
                        if (status === a++) {
                            cm.askMenu_Bottom("#face0##g“靠近时会让人受伤的善变的舞蹈家。”\r\n“跳着红色之舞，留下黑色的脚印。”’#k\r\n放到刻着这个谜题正确答案的柱子上吧。\r\n#b#L0# 云 #l　#L1# 火 #l　#L2# 月光#l", 37, 1013358, 1)
                        } else {
                            if (status === a++) {
                                switch (b) {
                                    case 1:
                                        cm.sendNormalTalk_Bottom("#face0##b（随着咯嘚嘚的声音，箱子的底打开了。\r\n可以看到里面有个什么东西在闪闪发光。）#k", 37, 1013358, false, true, 1);
                                        break;
                                    default:
                                        status = 3;
                                        cm.sendNextNoESC_Bottom("#face3#没有发生任何事。\r\n……这个好像不是正确答案。", 1013358)
                                }
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face3#这是……", 37, 1013358, true, true, 1)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1500)
                                    } else {
                                        if (status === a++) {
                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/pathfinder/key", 100);
                                            cm.fieldEffect_ProcessOnOffLayer("00", "Effect/Direction22.img/effect/PF_key/0", 0, 500, 0, 0, 1, 4, 0, -1, 0, 0, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                        } else {
                                            if (status === a++) {
                                                cm.fieldEffect_ProcessOnOffLayer("00", "", 2, 550, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("01", "Effect/Direction22.img/effect/PF_key/1", 0, 300, 0, 0, 1, 4, 0, -1, 0, 0, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                            } else {
                                                if (status === a++) {
                                                    cm.fieldEffect_ProcessOnOffLayer("02", "Effect/Direction22.img/effect/PF_key/2", 0, 500, 0, 0, 1, 4, 0, -1, 0, 0, 0);
                                                    cm.fieldEffect_ProcessOnOffLayer("01", "", 2, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                } else {
                                                    if (status === a++) {
                                                        cm.fieldEffect_ProcessOnOffLayer("02", "", 2, 550, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                        cm.sendNormalTalk_Bottom("#face1#啊哈，最后一把祭坛钥匙原来就在这里。\r\n呼……幸亏看了一眼谜题的内容。", 37, 1013358, false, true, 1)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face1#三把钥匙全部找到了。那接下来要做的事情……\r\n是的，就是把钥匙插在祭坛上。", 37, 1013358, false, true, 1)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face3#钥匙又开始发光了。在光指向的地方一定有什么东西。\r\n一定没错。祭坛所在的地方就是那里。", 37, 1013358, true, true, 1)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.inGameDirectionEvent_ForcedFlip10(2, 200);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.effect_Text(["#fn黑体##fs18#片刻之后，帕勒坦遗迹某处", ""], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0, 0]);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(4500)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("#face1#呵呵……发现了遗迹所在的地方。", 37, 1013358, false, true, 1)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.fieldEffect_Hero9(0, 1500);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                            cm.fieldEffect_Hero9(-2, 300);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(300)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(300)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.dispose();
                                                                                                                    cm.warp(910090304, 0, false);
                                                                                                                    cm.setStandAloneMode(false);
                                                                                                                    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                    cm.setInGameDirectionMode(false, true, false)
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