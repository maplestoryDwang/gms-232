var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

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
            cm.sendNormalTalk_Bottom("竟然是来狩猎的……\r\n一个小姑娘竟然到这雪山深处来狩猎，\r\n太令人惊讶了。", 36, 2550001, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("呃呃呃……好冷好冷……", 36, 2550003, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("我是在那边的峡谷发现她的。\r\n她被冻得不行呢，先生起火让她暖暖身子吧。", 56, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("可是我们的柴火不够了啊。", 36, 2550001, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("再收集一些不就行了。", 56, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("…………", 36, 2550001, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("………… ", 56, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("…………", 36, 2550001, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("……要我去吗？", 56, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("那我去？", 36, 2550001, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("切。", 56, 0, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.askYesNo_Bottom("这附近是火山虫栖息地，你去那边找找吧。", 36, 2550001)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.OnStartNavigation(306000100, 0, "", 0);
                                                            cm.forceStartQuest(32672, "");
                                                            cm.sendNormalTalk_Bottom("火山虫怎么会在这里？", 56, 0, false, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("好像是因为勇士部落的火山活动越来越弱，所以才迁徙到这边来了。", 36, 2550001, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("往上去狩猎#b火山虫#k就行了。\r\n#b柴火10个#k就够了。", 36, 2550001, true, false);
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
            cm.sendNormalTalk_Bottom("你收集到柴火了？我这就生火。", 36, 2550001, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("对了，队长你出去收集柴火的时候，#b迈勒#k回来了。", 36, 2550001, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("是吗？真巧。", 56, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(32672);
                        cm.Hidden_background("DLep4_fire", 1);
                        cm.removeAll(4036137);
                        cm.dispose()
                    }
                }
            }
        }
    }
};