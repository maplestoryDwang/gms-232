var status = -1;

function start(e, d, c) {
    if (e === 0) {
        status--
    } else {
        status++
    }
    if (cm.getPlayer().getGender() == 0) {
        var a = 1531000
    } else {
        var a = 1531052
    }
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status === b++) {
            cm.sendNormalTalk("嗯？签名？\r\n既然是学生会长提出来的，当然要帮忙了。", 9, 1531047, false, true)
        } else {
            if (status === b++) {
                cm.sendNormalTalk("那个，听说这次超能力者抓住了银行劫匪，\r\n你看过这个新闻了吧？", 9, 1531047, true, true)
            } else {
                if (status === b++) {
                    cm.curNodeEventEnd(true);
                    cm.eventSKill(0);
                    cm.setInGameDirectionMode(true, false, true);
                    cm.setStandAloneMode(true);
                    cm.inGameDirectionEvent_AskAnswerTime(1500)
                } else {
                    if (status === b++) {
                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(500)
                    } else {
                        if (status === b++) {
                            cm.fieldEffect_ProcessOnOffLayer("2", "Map/Effect2.img/kinesis/news3", 0, 1000, 0, 0, 12, 4, 0, -1, 0, 0, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(1500)
                        } else {
                            if (status === b++) {
                                cm.sendNormalTalk_Bottom("#b(照片拍得不错，为了配合编队，能更上相一点，我是没少受累。)#k", 37, a, false, true)
                            } else {
                                if (status === b++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1500)
                                } else {
                                    if (status === b++) {
                                        cm.fieldEffect_ProcessOnOffLayer("2", "", 2, 1500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(1500)
                                    } else {
                                        if (status === b++) {
                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(1200)
                                        } else {
                                            if (status === b++) {
                                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(1400)
                                            } else {
                                                if (status === b++) {
                                                    cm.setStandAloneMode(false);
                                                    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                    cm.eventSKill(0);
                                                    cm.setInGameDirectionMode(false, true, false);
                                                    cm.sendNormalTalk("那个，这可是高级情报，\r\n根据可靠传言，超能力者的真实身份……", 9, 1531047, false, true)
                                                } else {
                                                    if (status === b++) {
                                                        cm.sendNormalTalk("是通过基因实验孕育出的变异人，他先是被恐怖分子绑架，后来又被虫子咬了，就变成了绿色皮肤的超级军人。", 9, 1531047, true, true)
                                                    } else {
                                                        if (status === b++) {
                                                            cm.sendNormalTalk("平时一副戴着眼镜的新闻记者的架势，但实际上是个超级有钱的土豪呢？", 9, 1531047, true, true)
                                                        } else {
                                                            if (status === b++) {
                                                                cm.sendNormalTalk("……就说大家伙电影看太多了。", 3, 1531047, true, true)
                                                            } else {
                                                                if (status === b++) {
                                                                    cm.getTopMsgFont("学生的签名已经全都到手了,  回去找尤娜吧. ", 3, 20, 20, 0, 0);
                                                                    cm.forceStartQuest(22724, "");
                                                                    cm.forceCompleteQuest(22724);
                                                                    cm.gainExp(300);
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

function end(c, b, a) {
    cm.forceCompleteQuest();
    cm.dispose()
};