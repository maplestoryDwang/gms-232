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
            cm.sendNormalTalk_Bottom("#face0#我们仔仔细细地找了一遍……\r\n但最后还是没找到你拜托的那把钥匙。", 36, 3001962, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#不过，我在报纸上看到一则奇怪的消息，\r\n所以特地带来给大哥看看。", 36, 3001963, true, true, 1)
            } else {
                if (status === a++) {
                    cm.curNodeEventEnd(true);
                    cm.setInGameDirectionMode(true, false, false);
                    cm.setStandAloneMode(true);
                    cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
                    cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 2);
                    cm.inGameDirectionEvent_AskAnswerTime(1600)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#OO月 OO日 星期O", 0)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#\r\n<<笼罩在面纱下的里斯托尼亚王国参展作品>>", 0)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#\r\n王国主办的艺术节即将在两天后开幕。虽然截止目前，尚未公布将作为王国代表参展的作品，但几天前，塞德里克伯爵在访谈中的发言吸引了众人的关注。伯爵自信地表示，本次艺术节将办成不负王国盛名的重大活动，并透露说，他们正在准备一件意义深奥的作品，涉及隐秘的过去。另一方面，本次艺术节的主题为“过去与未来”。\r\n（后略）", 1)
                            } else {
                                if (status === a++) {
                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(1600)
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
                                                        cm.setStandAloneMode(false);
                                                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                        cm.setInGameDirectionMode(false, true, false);
                                                        cm.sendNormalTalk_Bottom("#face0#隐秘的过去……是说他们已拿到了钥匙吗？", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face10#如果他们在艺术节上公开钥匙……\r\n我们无论如何必须阻止此事！", 36, 3001952, true, true, 1)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.forceCompleteQuest(39621);
                                                                cm.gainExp(2016);
                                                                cm.gainExp(1528);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39621.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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