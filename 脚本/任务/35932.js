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
            cm.askAcceptDecline_Bottom("#face3##b（腰间的遗物在发光。\r\n光又想把我引导到什么地方。跟过去看看吧。）#k", 36, 1013359)
        } else {
            if (status === a++) {
                cm.dispose();
                cm.forceStartQuest(35932, "");
                cm.warp(910090316, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/35932.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, false);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.sendNormalTalk_Bottom("#face3##b(受到刚才涌入的力量的影响,遗物正在发生变化。\r\n将所有精神都集中在遗物上吧。)#k", 37, 1013358, false, true, 1)
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_AskAnswerTime(500)
            } else {
                if (status === a++) {
                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/pathfinder/relic", 100);
                    cm.fieldEffect_复合图片动画(["Effect/Direction22.img/effect/PF_relic/skeleton", "3-->4", "", "00"], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0]);
                    cm.inGameDirectionEvent_AskAnswerTime(3500)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0##b(终于可以使用遗物的全部力量了。\r\n感觉到了连诅咒都能控制住的强大力量。)#k", 37, 1013358, false, true, 1)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_AskAnswerTime(500)
                        } else {
                            if (status === a++) {
                                cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                cm.inGameDirectionEvent_PushScaleInfo(0, 1, 256000, -256, -129, -129)
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
                                                cm.teachSkill(3320011, 0, 10);
                                                cm.teachSkill(3320010, 0, 10);
                                                cm.teachSkill(3320009, 0, 10);
                                                cm.teachSkill(3320008, 0, 10);
                                                cm.teachSkill(3321024, 0, 5);
                                                cm.teachSkill(3321023, 0, 10);
                                                cm.teachSkill(3321022, 0, 10);
                                                cm.teachSkill(3321014, 0, 10);
                                                cm.teachSkill(3321012, 0, 10);
                                                cm.teachSkill(3320002, 0, 10);
                                                cm.updateInfoQuest(1073, "332=101;301=10;330=30;331=62");
                                                cm.teachSkill(1298, 4, 4);
                                                cm.openUI(2);
                                                cm.openUIWithOption(3, 3320000);
                                                cm.forceCompleteQuest(35932);
                                                cm.finishAchievement(264);
                                                cm.forceStartQuest(35936, "");
                                                cm.forceCompleteQuest(35936);
                                                cm.teachSkill(3320002, 6, 10);
                                                cm.changeJob(332);
                                                cm.playerMessage(-1, "恭喜您获得勋章 <寻路者>");
                                                cm.gainItem(1143164, 1);
                                                cm.gainItem(1592007, 1);
                                                cm.gainItem(1353703, 1);
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
};