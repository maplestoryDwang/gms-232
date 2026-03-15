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
            cm.sendNormalTalk_Bottom("#face0#在这里看你，越看越觉得和雷切尔长得真是一模一样呢。", 37, 9390220, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#……现在也还是长得像吗？没有变吗？", 37, 9400920, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#当然了。", 37, 9390220, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#妈妈……妈妈和爸爸去哪里了？", 37, 9400920, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#那个我就不知道了，艾米，还有埃尔宾？别担心。你们的妈妈和爸爸做完该做的事情后就会安全到家的。", 37, 9390220, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#该做的事情？", 37, 9400921, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#嗯~~我能说的就是这些了。礼物里面还有信，你们读读看吧。", 37, 9390220, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#回去的时候注意安全，你们的妈妈和爸爸如果知道你们能来到这里，肯定会很开心的。", 37, 9390220, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.curNodeEventEnd(true);
                                            cm.eventSKill(0);
                                            cm.setInGameDirectionMode(true, false, true);
                                            cm.sendNormalTalk_Bottom("#face4#这都是什么啊，为什么要留下这种东西来耍我们啊！", 37, 9400920, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#先读一下信吧，艾米 ", 37, 9400921, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1600)
                                                } else {
                                                    if (status === a++) {
                                                        cm.inGameDirectionEvent_Monologue("#fs20#亲爱的埃尔宾，艾米", 0)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.inGameDirectionEvent_Monologue("#fs20#如果你们收到明信片后找到了这里，那我现在就真的没必要担心你们了。", 0)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.inGameDirectionEvent_Monologue("#fs20#这意味着你们已经成长到可以走到这么远的地方了。嗯，如果像爸爸，个子应该也很高了吧。", 0)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.inGameDirectionEvent_Monologue("#fs20#就这么把你们俩留下，真的很抱歉。我们一直都很想你们，也一直在等待重逢的那天。", 0)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.inGameDirectionEvent_Monologue("#fs20#现在我们还不能告诉你们，但我们有一定要完成的事情。", 0)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.inGameDirectionEvent_Monologue("#fs20#在那之前，请相信并等着妈妈和爸爸。", 0)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.inGameDirectionEvent_Monologue("#fs20#……我们爱你们。", 1)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1600)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("#face4#……气死我了，真是的！", 37, 9400920, false, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#……打开礼物看看吧？", 37, 9400921, true, true)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0#算了！我要回家！", 37, 9400920, true, true)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face0##h0#，我们快点回去吧，我现在想回家了。", 37, 9400920, true, true)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.sendNormalTalk_Bottom("#b好的，辛苦你了，我们回去吧。", 57, 0, true, true)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.eventSKill(0);
                                                                                                                cm.setInGameDirectionMode(false, true, false);
                                                                                                                cm.forceStartQuest(64633, "");
                                                                                                                cm.updateInfoQuest(64633, "chk=1");
                                                                                                                cm.dispose();
                                                                                                                cm.enterHome(0)
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
            cm.sendNormalTalk_Bottom("#face0#啊啊~！终于到家了。", 37, 9400920, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face1##h0#，为了我们，真是辛苦你了！都是多亏了#h0#，我们参观了明珠港，还在金海滩度假村喝了好喝的东西，并且找到了父母留下的礼物，谢谢你！", 37, 9400921, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#……谢谢你，#h0#，真的……太感谢你了！", 37, 9400920, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#[#i2630597:##t2630597#]\r\n这是……一份小小的礼物！是凯梅尔兹砖房的建筑图纸。", 37, 9400921, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#b这是你们的父母给你们的，真的可以给我吗？", 57, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face1#是的，艾米和我觉得现在的家和父母生活的家都很好，所以不需要其他的图纸，请收下吧。", 37, 9400921, true, true)
                            } else {
                                if (status === a++) {
                                    cm.updateInfoQuest(500765, "end=1;name=" + cm.getPlayer().getName());
                                    cm.sendNormalTalk_Bottom("#b谢谢，我会好好使用的。", 57, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.gainItem(2630597, 1);
                                        cm.sendNormalTalk_Bottom("#face2#我也要谢谢你。", 37, 9400921, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.forceCompleteQuest(64633);
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