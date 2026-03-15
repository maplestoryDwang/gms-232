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
            cm.sendNormalTalk_Bottom("部件呢？", 56, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#那群好事之徒轮流拿着，后来躲到人群里去了。", 36, 3004000, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#没办法了，去吧，华生！", 36, 3004000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("华生？", 56, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#是的，眼前要把你当成我的特别助手了。", 36, 3004000, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("啊，我吗？", 56, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.askYesNo_Bottom("#face0#去吧，华生！\r\n能击退危险的黑市好事之徒，回收#b不明部件#k的就只有你了。", 36, 3004000)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("……", 56, 0, false, true)
                                    } else {
                                        if (status === a++) {
                                            cm.forceStartQuest(37109, "");
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
            cm.sendNormalTalk_Bottom("都收集完了。", 56, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#嗯……是线索。", 36, 3004000, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("线索？", 56, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#沾在部件上的这个是热狗酱，不久前沾上的。\r\n华生，你能通过这个看出点什么吗？", 36, 3004000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("嗯……。", 56, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.askMenu_Bottom("这个……\r\n\r\n#b#L0#部件的用途。#l\r\n#L1#部件的出处。#l\r\n#L2#热狗的味道。#l", 56, 3004039)
                            } else {
                                if (status === a++) {
                                    if (selectionLog[6] == 0) {
                                        cm.sendNormalTalk_Bottom("部件的用途。", 56, 0, false, true)
                                    } else {
                                        if (selectionLog[6] == 1) {
                                            cm.sendNormalTalk_Bottom("部件的出处。", 56, 0, false, true)
                                        } else {
                                            cm.sendNormalTalk_Bottom("热狗的味道。", 56, 0, false, true)
                                        }
                                    }
                                } else {
                                    if (status === a++) {
                                        if (selectionLog[6] == 0) {
                                            cm.sendNormalTalk_Bottom("#face0#你是说通过热狗酱了解部件的用途？", 36, 3004000, true, true)
                                        } else {
                                            if (selectionLog[6] == 1) {
                                                cm.sendNormalTalk_Bottom("#face0#答案正确。你果然是个好助手。", 36, 3004000, true, true)
                                            } else {
                                                cm.sendNormalTalk_Bottom("#face0#这答案没错。\r\n但是知道热狗的味道要怎么样呢？", 36, 3004000, true, true)
                                            }
                                        }
                                    } else {
                                        if (status === a++) {
                                            if (selectionLog[6] == 0 || selectionLog[6] == 2) {
                                                cm.sendNormalTalk_Bottom("不……不对吗？", 56, 0, true, true);
                                                cm.dispose()
                                            } else {
                                                if (selectionLog[6] == 1) {
                                                    cm.sendNormalTalk_Bottom("……。", 56, 0, true, true)
                                                }
                                            }
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#你可能还记得，作为交易代价，佩隆给垃圾场孩童们发放了热狗。", 36, 3004000, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#热狗酱应该是在交易现场沾上的吧！\r\n也就是说，这就是我们在找的东西。", 36, 3004000, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("！！！", 56, 0, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0#但现在高兴还太早。这不过是部件的一部分而已。\r\n剩下的说不定早就被卖掉了。", 36, 3004000, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face0#返回#b佩隆#k那里吧！", 36, 3004000, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.updateInfoQuest(37100, "31=h0;50=h1;32=h0;51=h0;33=h1;52=h1;dir=off;35=h1;36=h1;37=h1;38=h0;39=h1");
                                                                    cm.gainExp(28462236);
                                                                    cm.forceCompleteQuest(37109);
                                                                    cm.gainItem(4036491, -50);
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
};