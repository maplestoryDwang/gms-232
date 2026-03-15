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
            cm.sendNormalTalk("#b#p9400215#！如果你放不下金银财宝，那带着它们出去怎么样？", 2, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("带出去也不行！", 4, 9400215, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("#b为什么不行？", 2, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("外面有很多垂涎我的金银财宝的#o9402046#。对你这样厉害的人可能没有威胁，但是对我们这种人……", 4, 9400215, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("哎呀，我光想想都吓得一身鸡皮疙瘩。总之，我要守着#o9402046#不能出去！", 4, 9400215, true, true)
                        } else {
                            if (status === a++) {
                                cm.askMenu("#b#L0#我帮你消灭#o9402046#吧。#l\r\n#L1#既然害怕#o9402046#，那就只能待在这里了", 16, 0)
                            } else {
                                if (status === a++) {
                                    if (b == 0) {
                                        cm.askYesNo("你要帮我消灭#o9402046#？至少得干掉100只，我才能安心点……", 4, 9400215)
                                    } else {
                                        cm.sendNormalTalk("果然很难吧？……", 4, 9400215, false, false);
                                        cm.dispose()
                                    }
                                } else {
                                    if (status === a++) {
                                        cm.forceStartQuest(63067, "");
                                        cm.sendNormalTalk("你都开口说要帮忙，我没理由拒绝……你我等你的好消息！", 4, 9400215, false, false)
                                    } else {
                                        if (status === a++) {
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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/63067.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("你真的消灭了100只吗~~！？真厉害！", 4, 9400215, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(63067);
                cm.gainExp(952800);
                cm.updateInfoQuest(63067, "exp=1");
                cm.sendNormalTalk("#b呼哧，呼哧……现在你敢出去了吧？", 2, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("你这么为我劳心费力，我也要鼓起勇气来。", 4, 9400215, true, true)
                } else {
                    if (status === a++) {
                        cm.askYesNo("我先出去了，你帮我搬运我的金银财宝好吗？", 4, 9400215)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("谢谢！那我们城墙外见！", 4, 9400215, false, true)
                        } else {
                            if (status === a++) {
                                cm.getMap().spawnReactorIfNotExist(8659070, 0, 623, 68, 0, "q63068_reactor");
                                cm.afterlandChangeMapObject("q63068_in", 1, 0, 3000, 0, 0, 0, 0);
                                cm.afterlandChangeMapObject("q63068_out_pos", 1, 1, 0, 0, 0, 0, 0);
                                cm.curNodeEventEnd(true);
                                cm.setInGameDirectionMode(true, false, true);
                                cm.hideNpc(9400215);
                                cm.npc_ChangeController(9400215, "oid=113884", 616, 69, 1, 616, 716, 5, true, 0, true);
                                cm.npc_SetForceMove("oid=113884", -1, 300, 100);
                                cm.inGameDirectionEvent_AskAnswerTime(4000)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(63068, "");
                                    cm.inGameDirectionEvent_AskAnswerTime(100)
                                } else {
                                    if (status === a++) {
                                        cm.npc_SetForceMove("oid=113884", 1, 300, 80);
                                        cm.inGameDirectionEvent_AskAnswerTime(100)
                                    } else {
                                        if (status === a++) {
                                            cm.setInGameDirectionMode(false, true, false);
                                            cm.forceStartQuest(63068, "");
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
};