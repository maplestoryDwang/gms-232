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
            cm.askAcceptDecline_Bottom("#face3##b(遗物发出了明亮的光,似乎会有什么事情发生。\r\n必须集中精神。)#k", 36, 1013358, 1)
        } else {
            if (status === a++) {
                cm.curNodeEventEnd(true);
                cm.setInGameDirectionMode(true, false, false);
                cm.setStandAloneMode(true);
                cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/pathfinder/relic", 100);
                cm.fieldEffect_复合图片动画(["Effect/Direction22.img/effect/PF_relic/skeleton", "1-->2", "", "00"], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0]);
                cm.inGameDirectionEvent_AskAnswerTime(3500)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face3##b(伴随着神秘的光,遗物的力量又解放了一个阶段。\r\n感觉古代之力变得更强了。)#k", 37, 1013358, false, true, 1)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0##i03801377# #b(运用强化的古代之力,应该就可以使用更强的技能了……)#k", 37, 1013358, false, true, 1)
                        } else {
                            if (status === a++) {
                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                cm.inGameDirectionEvent_AskAnswerTime(500)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face2##b(真厉害……不试不知道,一试吓一跳。刚刚掌握,就已经这么厉害了……)#k", 37, 1013358, false, true, 1)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0##i03801374#  #b(根据使用的#s3011004#暗红之力技能,遗物的纹样改变了。)#k", 37, 1013358, true, true, 1)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0##i03801373#  #b(用#s3011004#暗红之力技能攻击敌人时,数值条会逐渐充满。)#k", 37, 1013358, true, true, 1)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face1##b(消耗充满的数值条,可以使用强力技能#s3301008#……\r\n好好使用,今后一定能起到很大的作用。)#k", 37, 1013358, true, true, 1)
                                                } else {
                                                    if (status === a++) {
                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1200)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1400)
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
                                                                                cm.teachSkill(260, 0, -1);
                                                                                cm.updateInfoQuest(1073, "301=10;330=30");
                                                                                cm.teachSkill(1298, 2, 4);
                                                                                cm.openUI(1);
                                                                                cm.openUI(2);
                                                                                cm.changeJob(330);
                                                                                cm.gainItem(1592001, 1);
                                                                                cm.gainItem(1353701, 1);
                                                                                cm.openUIWithOption(3, 3310000);
                                                                                cm.forceCompleteQuest(35939);
                                                                                cm.forceStartQuest(35934, "");
                                                                                cm.forceCompleteQuest(35934);
                                                                                cm.teachSkill(3301003, 1, 0);
                                                                                cm.teachSkill(3300006, 1, 0);
                                                                                cm.teachSkill(3011004, 20, 0);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/35939.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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