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
            cm.askAcceptDecline_Bottom("女皇大人想亲自跟伊利温谈谈。不如你也一起参与吧？", 37, 1540451, 1)
        } else {
            if (status === a++) {
                cm.forceStartQuest(34837, "");
                cm.sendNormalTalk_Bottom("#face0#希纳斯女皇在我的右边。希望你能亲自跟女皇对话。", 37, 1540451, false, true, 1);
                cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/34837.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face2#你好，伊利温大人。我是圣地女皇希纳斯。", 36, 1540450, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#很荣幸能见到你。", 37, 3001354, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#我们迫切需要像伊利温大人这样的人才。最近冒险岛的‘黑魔法师’和他的军团形迹十分可疑，因此我们组建了一个正义联盟。", 37, 1540450, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.askAcceptDecline_Bottom("#face0#可以拜托你加入我们的联盟吗？", 37, 1540450, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#联盟的……一员？", 37, 3001354, false, true, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#我是来自异次元的异邦人。我也不知道自己能为冒险岛做些什么。身为平民翼人，加入异次元世界的争斗……不知是否是个正确的决定。", 37, 3001354, true, true, 1)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#嗯，你这么想也情有可原……不过……听我们联盟的一员狂龙战士说，伊利温大人正在对抗格兰蒂斯的‘达尔莫尔’。", 37, 1540450, true, true, 1)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#这个嗜血恶魔多次屠杀我们平民翼人族，平民翼人没人能对抗他。", 37, 3001354, true, true, 1)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#那你知道他手下的‘麦格纳斯’吗？那家伙背叛了诺巴，臣服于达尔莫尔手下……同时还是冒险岛黑魔法师的军团长。", 37, 1540450, true, true, 1)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face3#我的天啊，难道达尔莫尔的势力已经蔓延到冒险岛了？", 37, 3001354, true, true, 1)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#具体情况还在调查，重要的是达尔莫尔和黑魔法师都是威胁世界和平的邪恶势力……", 37, 1540450, true, true, 1)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#如果再不赶快齐心协力对抗他们，世界马上就要臣服在他们脚下了。如果这次你愿意帮忙……今后格兰蒂斯遇到任何困难，我们希纳斯骑士团也一定鼎力相助。", 37, 1540450, true, true, 1)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0#我必须跟同伴商量一下，稍后再跟你说可以吗？", 37, 3001354, true, true, 1)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face0#当然。希望能有个好结果。", 37, 1540450, true, true, 1)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.curNodeEventEnd(true);
                                                                    cm.setInGameDirectionMode(true, false, false);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(100)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(100)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(100)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.updateInfoQuest(34837, "exp=1");
                                                                                cm.inGameDirectionEvent_AskAnswerTime(100)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.gainExp(70646);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(100)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.forceCompleteQuest(34837);
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
                }
            }
        }
    }
};