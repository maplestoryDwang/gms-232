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
            cm.sendNormalTalk_Bottom("啊啊，真是位美丽的小姐，不是吗？", 37, 1530030, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("变态。", 57, 1530027, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("你居然说我是变态？我只是为了转移希纳斯的注意力啊。这附近现在到处都是尘土。", 37, 1530030, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("虽然平时尘土都躲了起来，很不起眼……不过如果数量增多，普通人还是能看出来的。你能去那~边的尘土地带消灭一些尘土吗？", 37, 1530030, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("我在这里等着你。\r\n#b(去喷泉公园的尘土地带消灭90只尘土。)#k", 37, 1530030, true, true)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(32746, "");
                                cm.dispose()
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
            cm.sendNormalTalk_Bottom("你已经消灭足够的尘土怪了吗？", 37, 1530030, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("很好，你做得不错。不过，学校里好像有人对希纳斯图谋不轨。", 37, 1530030, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("你知道狗的听力比人类好很多吧？在学校里呆着，偶尔就会听到一些奇怪的话。", 37, 1530030, true, true)
                } else {
                    if (status === a++) {
                        cm.curNodeEventEnd(true);
                        cm.setInGameDirectionMode(true, true, true);
                        cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(1600)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_Monologue("希纳斯, 这个可恶的丫头……", 0)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_Monologue("等着瞧吧……我就要……哈哈哈哈……", 1)
                            } else {
                                if (status === a++) {
                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(1600)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("是得罪什么人了吗？", 57, 1530027, false, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("这个嘛，说不定尘土怪逐渐增多的事，也和希纳斯有关呢？总之，她可能会出什么事，你最好是能够多加注意。", 37, 1530030, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(500)
                                            } else {
                                                if (status === a++) {
                                                    cm.setInGameDirectionMode(false, true, false);
                                                    cm.dispose();
                                                    cm.warp(330002110, 1)
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