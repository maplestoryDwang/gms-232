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
            cm.sendNormalTalk_Bottom("虽然现在还没出什么大事，但是我的预感很不好。总感觉有什么大事就要发生了。", 37, 1530030, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("嗅嗅！变成狗太久了，连感官都变得发达了吗？", 37, 1530030, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("这么说来，最近总是想刨地，还想吃骨头什么的。要是有谁扔了像球一样的东西，我就想跑过去接住……", 37, 1530030, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("哎呀，我说地太多了。总感觉和你好久不见，所以一开心就说了这么多。", 37, 1530030, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("啊，总之这个不重要，现在重要的是这个骚乱。肯定是#b转学生#k的问题。", 37, 1530030, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("转学生？", 57, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("是啊。那是个#b长得黑黝黝的家伙#k，他出现的时候，我就觉得他是个危险的家伙！", 37, 1530030, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("所以，你如果见到转学生，要格外注意，留心观察。看看他是不是会闯什么祸，那家伙的身边有没有尘土。", 37, 1530030, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("我会守卫运动场的。汪汪！漂亮的女人！那就辛苦你了。", 37, 1530030, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#b(我得去办公室。)#k", 57, 0, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.forceStartQuest(33502, "");
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
            cm.setInGameDirectionMode(true, false, true);
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
            cm.inGameDirectionEvent_AskAnswerTime(500)
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_AskAnswerTime(1500)
            } else {
                if (status === a++) {
                    cm.dispose();
                    cm.warp(330002604, 0)
                }
            }
        }
    }
};