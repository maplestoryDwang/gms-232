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
            cm.sendNormalTalk_Bottom("可是希纳斯，我们忘记带钱包了。嘤嘤……", 37, 1530110, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("是吗，别担心。正好我也要吃呢。今天的年糕串我来请客吧！", 37, 1530060, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("真的？太棒了~！", 37, 1530110, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("真大方~不愧是有钱人家的小姐！", 37, 1530120, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("呼呼呼~哇，咱们一人一份吧！", 37, 1530171, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("大婶，支票可以吗？", 37, 1530060, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("什么东西被撕坏的声音？", 37, 1530171, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("……。", 37, 1530060, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("……。", 37, 1530110, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#那么我们中间没有一个人有现金吗？", 37, 1530120, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("……呃，看样子我不请客是不行了？？\r\n\r\n#b（从商店购买3个年糕串吧。）#k", 57, 1530116, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.forceStartQuest(32742, "");
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
            cm.sendNormalTalk_Bottom("哎呀，是转校生请吃年糕串吗？真帅！", 37, 1530110, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("谢谢啦~", 37, 1530120, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("天啊，真好吃！原来你们整天吃这么好吃的东西都不带我啊……", 37, 1530060, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("可是你，每天不都是呆在办公室里一个人吃午餐的吗？那么下次午餐时间和我们一起吃吧。", 37, 1530120, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("太好了！明天一定要带我一起哦。", 37, 1530060, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("转校生，真不好意思，第一次见面就让你请客。下次我来请吧。", 37, 1530120, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("这是我们的电话号码！", 37, 1530110, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.forceCompleteQuest(32742);
                                        cm.updateInfoQuest(32719, "gal=0;sms=1;add=1");
                                        cm.gainItem(2010028, -3);
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
};