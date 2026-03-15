var status = -1;
var selectionLog = [];

function start(d, c, b) {
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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.sendNewEffects(17, [2000, 1000, 2000, 440, 120])
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#你怎么还在修房子？要我说多少遍，现在不是搞这些 的时候？！", 37, 9400587, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("不是说会再回来的吗……所以……我就想……", 37, 9400617, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#回来再修也不迟。当务之急是准备起程。你不会没看见暴风雪正在涌来吧？", 37, 9400587, true, true)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/shade", "oid=3660661"], [2000, 0, 0, 1, 0, 1, 0, 0]);
                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("可我既没有要收拾的行李……也没有家人。", 37, 9400617, false, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#那你去帮帮其他人。现在没工夫干别的。", 37, 9400587, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("……可汗村长……我不想离开村子……", 37, 9400617, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#这事没得商量，卡夫塔佩的村民将一个不少地前往河对岸的村子。", 37, 9400587, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("我的意思不是要留下来。尽管不愿离开村子，但村长你已经做了决定，我正在努力遵从……可是，……", 37, 9400617, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("我只是在想如何才能填补心里空落落的感受，把倒塌的屋子重新搭起来或许会好受些！所以……所以我才这么做。出发之前连这点时间都不能让我自己支配的话……我真是……", 37, 9400617, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0#既然你一意孤行就没办法了，我不能让你这颗老鼠屎影响到其他人，你不用做事了，歇着吧。", 37, 9400587, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("天啊……有必要说得这么难听吗？", 37, 9400617, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("……嘴太毒了。", 37, 9400617, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.npc_setForceFlip("oid=3660661", 1);
                                                                            cm.npc_SetForceMove("oid=3660661", 1, 100, 100);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.npc_LeaveField("oid=3660661");
                                                                                cm.npc_LeaveField("oid=3660661");
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("#b可汗村长。", 57, 0, false, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNewEffects(12, [1000, 456, 163, 0, 0])
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0##h0#……", 37, 9400587, false, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("#b……", 57, 0, true, true)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0#我知道你在想什么，觉得我很过分吧。", 37, 9400587, true, true)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face0#我也是无奈。留在这里的话，将没法保障安全。我的职责就是无论如何都要把所有人带到下个村子。", 37, 9400587, true, true)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face0#我是在执行身为村长的职责……请你不要多管。", 37, 9400587, true, true)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.sendNormalTalk_Bottom("#b可汗村长现在也在伤心吧？", 57, 0, true, true)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face0#……我没这种闲工夫。", 37, 9400587, true, true)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.npc_setForceFlip("oid=3660660", 1);
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(300)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.npc_SetForceMove("oid=3660660", 1, 100, 50);
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(300)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.sendNewEffects(14, [0, 2000, 1000, 0, 0])
                                                                                                                            } else {
                                                                                                                                if (status === a++) {
                                                                                                                                    cm.sendNewEffects(19, [0])
                                                                                                                                } else {
                                                                                                                                    if (status === a++) {
                                                                                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                                                                                        cm.forceCompleteQuest(64028);
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