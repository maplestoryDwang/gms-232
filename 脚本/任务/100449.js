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
            cm.sendNormalTalk("就是这个！\r\n我现在可以动了！", 4, 9062248, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("没有#b发条#k和#b汽油#k，身体就无法活动……\r\n你果然是#r智能机器人#k。", 2, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("嗯……没错。\r\n我确实是#b智能机器人#k#n。", 4, 9062248, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("不过我已经很久没听过这个叫法了。\r\n一般我都被叫作#r破铜烂铁#k或是#r废品#k#n。", 4, 9062248, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("看来你受到了很不友好的对待……", 2, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("嗯？不过……\r\n智能机器人也有#r灵魂#k#n吗？", 2, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("#r“灵魂”#k#n是什么？", 4, 9062248, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("也是，说不定盲目断定智能机器人没有灵魂也是一个很自以为是的行为。", 4, 9062243, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("世上所有的东西都有灵魂。\r\n说不定连人偶也是……", 4, 9062243, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("#b哭泣的假面……#k \r\n你知道自己命不久矣吗？", 4, 9062243, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.curNodeEventEnd(true);
                                                    cm.setInGameDirectionMode(true, false, false);
                                                    cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1600)
                                                } else {
                                                    if (status === a++) {
                                                        cm.inGameDirectionEvent_Monologue("#fs24#告诉了他假面的诅咒和舞会的真相。", 1)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1600)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                cm.setInGameDirectionMode(false, true, false);
                                                                cm.sendNormalTalk("命不久矣？我死了？\r\n听不懂你在说什么。\r\n那为什么要我在#b00点00分#k时摘下假面呢？", 4, 9062248, false, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk("你难道没有#r留恋#k或是#b愿望#k什么之类的吗？", 2, 0, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk("留恋？愿望？这又是什么，不懂。\r\n今天好像学到了不少新单词。", 4, 9062248, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk("就是说……你想做的事。\r\n你没什么想要的东西吗？", 4, 9062243, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk("有，有的！\r\n你们可以帮我实现吗？", 4, 9062248, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk("虽然能不能实现取决于你想要的东西……", 2, 0, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk("我……我吧……\r\n从很久以前就一直想着一件事。", 4, 9062248, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk("我啊……", 4, 9062248, true, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.dispose();
                                                                                                cm.warp(993175432, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/100449.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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