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
            cm.askAcceptDecline_Bottom("#face3##b(腰间的遗物在发光。\r\n光似乎想把我引导到什么地方。要跟过去看看吗？)#k", 36, 1013358, 1)
        } else {
            if (status === a++) {
                cm.updateInfoQuest(35931, "rMap=104000000");
                cm.dispose();
                cm.warp(910090315, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/35931.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face3##b(是受到了刚才涌入的力量的影响吗？遗物正在发生变化。\r\n将所有精神都集中在遗物上吧。)#k", 37, 1013358, false, true, 1)
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_AskAnswerTime(500)
            } else {
                if (status === a++) {
                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/pathfinder/relic", 100);
                    cm.fieldEffect_复合图片动画(["Effect/Direction22.img/effect/PF_relic/skeleton", "2-->3", "", "00"], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0]);
                    cm.inGameDirectionEvent_AskAnswerTime(3500)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face3##b(遗物之力又解放了一个阶段。\r\n感觉到强大的古代之力在奔涌而出。)#k", 37, 1013358, false, true, 1)
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
                                                cm.updateInfoQuest(1073, "301=10;330=30;331=62");
                                                cm.teachSkill(1298, 3, 4);
                                                cm.openUI(2);
                                                cm.openUIWithOption(3, 3310000);
                                                cm.forceCompleteQuest(35931);
                                                cm.forceStartQuest(35935, "");
                                                cm.forceCompleteQuest(35935);
                                                cm.teachSkill(3310001, 10, 0);
                                                cm.changeJob(331);
                                                cm.playerMessage(-1, "恭喜您获得勋章 <黑暗追踪者>");
                                                cm.gainItem(1143163, 1);
                                                cm.gainItem(1592003, 1);
                                                cm.gainItem(1353702, 1);
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