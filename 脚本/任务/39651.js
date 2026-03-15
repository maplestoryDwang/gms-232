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
            cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(我跑进人迹罕至的角落，靠在墙上歇息。\r\n回想刚才发生的事，怎么想都觉得很可疑。)", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1)
        } else {
            if (status === a++) {
                cm.askAcceptDecline_Bottom("#face0##fc0xFFbfbfbf#(我想起那座雕像的声音，那股力量似乎会给我指引。\r\n响应声音的召唤，暂时集中精神试试！)", 36, 3001951 - cm.getPlayer().getGender(), 1)
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
                        cm.inGameDirectionEvent_AskAnswerTime(500)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_AskAnswerTime(2500);
                            cm.effect_Text(["#fn黑体##fs30##fc0xFFd8d8d8#笼罩记忆的迷雾会渐渐散去……", "SampleType00"], [50, 1000, 4, 0, 0, 0, 4, 3, 0, 0, 0, 0])
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_AskAnswerTime(5000);
                                cm.effect_Text(["#fn黑体##fs30##fc0xFFd8d8d8#然而，那同时也是另一场考验的开始……", "SampleType00"], [50, 1000, 4, 0, 0, 0, 4, 3, 0, 0, 0, 0])
                            } else {
                                if (status === a++) {
                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(1600)
                                } else {
                                    if (status === a++) {
                                        cm.changeJob(15100);
                                        cm.forceCompleteQuest(39651);
                                        cm.forceStartQuest(39601, "");
                                        cm.updateInfoQuest(39601, "50=h0;51=h0;52=h0;53=h0;j=1;54=h0;55=h0;56=h0;57=h0;58=h0;59=h0");
                                        cm.teachSkill(150020241, 0, -1);
                                        cm.updateInfoQuest(1073, "15100=10");
                                        cm.openUIWithOption(3, 151000000);
                                        cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(我有种灵魂深处的力量被释放出来的感觉。\r\n是那个声音拂去了遮蔽我记忆的迷雾吗？)\r\n\r\n #r ※ 按基本快捷键（K）可以分配SP。\r\n   　常用的技能可加入快捷栏，方便施放。", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1)
                                    } else {
                                        if (status === a++) {
                                            cm.openUI(2);
                                            cm.forceStartQuest(39690, "");
                                            cm.forceCompleteQuest(39690);
                                            cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(不过……是因为在亚空间里被关了太久的缘故吗？\r\n身手变弱了许多，估计要花点时间恢复。)\r\n\r\n #r ※ 按基本快捷键（S）/ 选择型（C），可以分配AP。", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1)
                                        } else {
                                            if (status === a++) {
                                                cm.openUIWithOption(0, 2);
                                                cm.gainItem(1354000, 1);
                                                cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(对了，口袋里还装着这个。\r\n战斗时应该用得上。)\r\n\r\n #r ※ 在村里的武器杂货商人处，可以购买武器和药水。", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39651.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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