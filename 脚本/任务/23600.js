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
            cm.forceStartQuest();
            cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/23600.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.setInGameDirectionMode(true, true, false);
            cm.inGameDirectionEvent_AskAnswerTime(900)
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_PushMoveInfo(0, 100, -79, -41)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_AskAnswerTime(2604)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("呵呵呵，非常好！非常让人满意的结果。现在只要再进行细微的调整……。", 1, 2159377, false, true)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(23724, "");
                            cm.forceCompleteQuest(23600);
                            cm.fieldEffect_PlayBGM("Bgm30.img/fromUnderToUpper", 0, 0);
                            cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/tuto/BalloonMsg1/0", "oid=23861409"], [1200, 0, -120, 1, 0, 1, 0, 0, 0]);
                            cm.npc_SetForceMove("oid=23861409", -1, 1, 100);
                            cm.inGameDirectionEvent_AskAnswerTime(90)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("入侵者？难，难道是奥尔卡？快打开监视器！", 1, 2159377, false, true)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(23725, "");
                                    cm.inGameDirectionEvent_AskAnswerTime(2100)
                                } else {
                                    if (status === a++) {
                                        cm.forceCompleteQuest(23725);
                                        cm.inGameDirectionEvent_AskAnswerTime(1200)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("是反抗者吗……不过总比被奥尔卡发现要好。那些烦人的家伙，为什么偏偏要在这个时候潜入呢？", 1, 2159377, false, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("不过这也许是件好事。就最后再进行一次测试，用那些家伙作为对象，呵呵呵……。", 1, 2159377, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.npc_LeaveField("oid=23861409");
                                                    cm.dispose();
                                                    cm.warp(931050940, 0, false)
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