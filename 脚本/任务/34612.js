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
            cm.sendNormalTalk_Bottom("#face0#切，竟然被抓住了……好吧……喏，东西还给你。这总行了吧？那我走了。", 37, 3001257, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face2#不、不！干嘛啊，放手！好疼啊！", 37, 3001257, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face1#可恶，停一下。我看你还没搞清楚状况吧？我你也敢招惹，简直是引火自焚。", 37, 3001270, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face3#谁敢招惹我，我绝不轻易放过。知道吗，嗯？今天你死定了。", 37, 3001270, true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face2#那、那你到底想怎么样，可恶！", 37, 3001257, true, true, 1)
                        } else {
                            if (status === a++) {
                                cm.askAcceptDecline_Bottom("#face1##b(没教养的小子。我这就让你知道偷我东西是什么下场。)#k", 37, 3001270, 1)
                            } else {
                                if (status === a++) {
                                    cm.curNodeEventEnd(true);
                                    cm.setInGameDirectionMode(true, false, false);
                                    cm.setStandAloneMode(true);
                                    cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                } else {
                                    if (status === a++) {
                                        cm.fieldEffect_ProcessOnOffLayer("00", "Effect/Direction19.img/effect/cadena_dir/3", 0, 900, 0, -80, 12, 4, 0, -1, 0, 0, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face3#咔咔，剩下的晚餐食材你去找吧。找到了我就饶了你，怎么样？", 37, 3001270, false, true, 1)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face2#那我先去偷个懒，你别想逃跑，全部完成了记得叫我。", 37, 3001270, true, true, 1)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face2#呃啊，气死我了……怎么这么倒霉……可恶的家伙，切，诅咒你出门摔个狗吃屎！", 37, 3001257, true, true, 1)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face2#哈啊，太好了！太好了！终于摆脱那烦人的任务了！", 37, 3001270, true, true, 1)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.fieldEffect_ProcessOnOffLayer("00", "", 2, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                cm.inGameDirectionEvent_AskAnswerTime(1200)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1400)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                        cm.setStandAloneMode(false);
                                                                        cm.forceStartQuest(34612, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/34612.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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