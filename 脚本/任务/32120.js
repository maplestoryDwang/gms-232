var status = -1;

function start(c, b, a) {
    if (c == 1) {
        status++
    } else {
        status--
    }
    if (status == 0) {
        cm.sendNormalTalk("我研究的是森林里的各种生物。在森林中，需要精确捕捉所需生命体的声音时，有时也会用上这个工具。只要捕捉到声音的话，就能大致知道方向和距离。\r\n\r\n#i4033830##b#t4033830##k", 0, 1032104, false, true)
    } else {
        if (status == 1) {
            cm.askAcceptDecline("虽然不知道是否能派上用场，但总比没有强啊。请把那些不幸的孩子拯救出来吧。\r\n\r\n（接受后，移动到妖精学院艾利涅。）")
        } else {
            if (status == 2) {
                cm.forceStartQuest();
                cm.warp(101071300, 0);
                cm.gainItem(4033830, 1);
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
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk("你来啦。有收获吗？", 4, 1500001, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("(给妖精们看巴缇博士的东西，并说明其功能。)", 2, 1500001, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("……那么，现在要让我们使用这不纯洁的人类的东西？不行！绝对不行！死也不行！", 4, 1500002, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("可现在别无他法，副校长先生。", 4, 1500009, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("罗雯的话没错。现在最首要的任务就是要找到那些孩子，不是吗？", 4, 1500008, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("我虽不赞同，但目前只有这个方法。", 4, 1500001, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("……呃……只好那样了，不过只此一回……不，不管怎么说……", 4, 1500002, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("我来启动试试。请大家暂时安静。", 4, 1500000, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.curNodeEventEnd(true);
                                            cm.eventSKill(0);
                                            cm.setInGameDirectionMode(true, true, true);
                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                        } else {
                                            if (status === a++) {
                                                cm.fieldEffect_PlayBGM("Bgm34.img/TheFairyForest", 0, 0);
                                                cm.sendNormalTalk("…………", 5, 1500000, false, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("好像捕捉到了森林里的各种声音……", 5, 1500000, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.playerMessage(-1, "吱吱吱…");
                                                            cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("？？？", 5, 1500000, false, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.playerMessage(-1, "嘭……嘭……");
                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk("什么嘛，除了杂音什么也听不见。", 5, 1500002, false, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk("嘘……安静。", 5, 1500009, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(3000)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.playerMessage(-1, "呜呜……救命啊……呜呜。");
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk("！！这声音是！", 5, 1500001, false, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk("是后院的方向。", 5, 1500000, true, true)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk("等着我，孩子们！我副校长去救你们啦！", 5, 1500002, true, true)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk("艾温，我们也一起去寻找孩子们吧！", 5, 1500009, true, true)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.sendNormalTalk("各位，请等一下……！", 5, 1500001, true, true)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.fieldEffect_PlayBGM("Bgm34.img/TheFairyAcademy", 0, 0);
                                                                                                                cm.eventSKill(0);
                                                                                                                cm.setInGameDirectionMode(false, true, false);
                                                                                                                cm.gainExp(8409);
                                                                                                                cm.forceCompleteQuest(32120);
                                                                                                                cm.gainItem(4033830, -1);
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
};