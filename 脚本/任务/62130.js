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
            cm.emotion(14, 3000);
            cm.sendNormalTalk_Bottom("#fs16#啊？！难道！！这是？！", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#e公元150年制造的青铜香炉？！#n看这栩栩如生的形态，漂亮的色彩！\r\n这准是明朝皇室的王子拿在手里把玩的香炉！", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("交给#p9310537#吧！", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest();
                        cm.dispose()
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
            cm.sendNormalTalk_Bottom("嗯？你看什么？想买什么啊？", 37, 9310537, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("我在狩猎过程中捡到了#e明朝青铜香炉#n陶器！", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("要是真如你所说，那可就要赚大发了！让我先瞧瞧！", 37, 9310537, true, true)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(62130);
                        cm.updateInfoQuest(62130, "lastday=" + cm.getNowTimeString(3));
                        cm.sendNormalTalk_Bottom("啊……这是……", 37, 9310537, true, true);
                        cm.gainItem(4001857, -1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("这个？是#e明朝青铜香炉#n吧？！", 57, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("这个香炉应该是上海博物馆里出售的纪念品。\r\n嗯……你别太失望。既然你这么有诚意，那我就帮你制成有用的东西吧。", 37, 9310537, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("来！接着！这是你要的#i1202175:##t1202175#！\r\n 制作费很亲民哦，你只要给我5个#i4310177:##t4310177#就可以了！", 37, 9310537, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("…", 57, 0, true, true);
                                        cm.gainItem(1202175, 1, 30)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("吓尿了？玩笑而已啦。好啦，免费送你啦。下次再找到稀有的东西再来找我。", 37, 9310537, true, false)
                                        } else {
                                            if (status === a++) {
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
};