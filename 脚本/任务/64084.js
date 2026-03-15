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
            cm.askYesNo("这个任务的开始脚本还没有修复哦。它的脚本位于： #b 脚本/任务/64084.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.updateInfoQuest(64084, "chk1=1;chk2=1");
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.sendNormalTalk_Bottom("#b你上来的时候小心点！", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#谢谢你，#h0#！", 37, 9400580, true, true)
            } else {
                if (status === a++) {
                    cm.sendNewEffects(17, [2000, 1000, 2000, 1540, 500])
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_AskAnswerTime(2000)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#啊啊啊！吓死我了。", 37, 9400580, false, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#呃……我在上去了。", 37, 9400580, true, true)
                            } else {
                                if (status === a++) {
                                    cm.npc_ChangeController(9400580, "oid=7617489", 1630, 440, 35, 1580, 1680, 1, true, false);
                                    cm.npc_SetSpecialAction("oid=7617489", "summon", 0, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#你先跟我说一声啊！", 37, 9400580, false, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face3#本来因为太黑了，所以看不到是什么，到了中间我就感觉到了这是粉红触手，差点就要松手了。", 37, 9400580, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#哎~！总之……谢……谢谢你。", 37, 9400580, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#b这周围能用来当绳子的就只有这个了。", 57, 0, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#没事，虽然有点滑，但是还是能抓住的。", 37, 9400580, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0#总之！这个不重要！", 37, 9400580, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face0#这肯定是人为挖的洞！这代表着有人生活在附近吧？", 37, 9400580, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face2#如果是老婆婆的小屋就好了，快点找找吧！", 37, 9400580, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.npc_setForceFlip("oid=7617489", 1);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(250)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.npc_SetForceMove("oid=7617489", 1, 200, 100);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(3000)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNewEffects(19, [0])
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                    cm.forceCompleteQuest(64084);
                                                                                    cm.gainItem(2439168, -1);
                                                                                    cm.npc_LeaveField("oid=7616633");
                                                                                    cm.npc_LeaveField("oid=7616633");
                                                                                    cm.npc_LeaveField("oid=7617489");
                                                                                    cm.npc_LeaveField("oid=7617489");
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
};