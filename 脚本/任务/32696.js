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
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_SetHideEffect(1);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 379, 70)
        } else {
            if (status === a++) {
                cm.npc_SetSpecialAction("oid=5063152", "summon", 0, 0);
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1200)
            } else {
                if (status === a++) {
                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1400)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("女皇陛下？虽然在住处发现了奇怪的东西，但是……", 37, 1540451, false, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face2#哈啊～", 37, 1540450, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("什么呀，这老掉牙的天琴弓是从哪儿来的？", 37, 1540451, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face2#这个……哈啊，好像是前任女皇陛下的遗物呢。", 37, 1540450, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("晃一晃还能听到声音呢。里面好像有纸条一类的东西。", 37, 1540451, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                        } else {
                                            if (status === a++) {
                                                cm.fieldEffect_ProcessOnOffLayer("0", "Map/Effect3.img/DLep4/4", 0, 1500, 0, -80, 0, 4, 1, -1, 0, 0, 0);
                                                cm.sendNormalTalk_Bottom("#face2#哎呀？", 37, 1540450, false, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face2#上面写着……#b英雄之歌#k呢。", 37, 1540450, false, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("吟游诗人……", 37, 1540451, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#fs20#柳……德？", 37, 1540451, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.fieldEffect_ProcessOnOffLayer("0", "", 2, 1500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                    cm.npc_LeaveField("oid=5063152");
                                                                    cm.npc_LeaveField("oid=5063152");
                                                                    cm.forceCompleteQuest(32696);
                                                                    cm.gainExp(186336);
                                                                    cm.playerMessage(5, "使用埃欧雷的音乐盒可以播放英雄之歌。");
                                                                    cm.playerMessage(-1, "使用埃欧雷的音乐盒可以播放英雄之歌。");
                                                                    cm.setStandAloneMode(false);
                                                                    cm.eventSKill(0);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/32696.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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