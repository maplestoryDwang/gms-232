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
            cm.sendNormalTalk_Bottom("#face0#我好像听到了什么奇怪的声音。", 36, 3001300, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face2#呜呜呜……", 37, 3001308, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#……？", 37, 3001351, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#我好像听到抽泣声了？", 37, 3001351, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#哦，真的呢！我也听到了！", 37, 3001310, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#我这就顺着声音来源带你过去。", 37, 3001300, true, true)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(34809, "");
                                    cm.OnStartNavigation(402000513, 0, "", 34809);
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
            cm.sendNormalTalk_Bottom("#face0#啊，那个！是我们班的卡尼里恩啊！", 37, 3001310, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#(看起来心情不太好。过去跟她聊聊吧。)", 37, 3001351, true, true)
            } else {
                if (status === a++) {
                    cm.spawnMobLimit(2400400, 1, -696, 73, 1);
                    cm.spawnMobLimit(2400400, 1, -514, 29, 1);
                    cm.spawnMobLimit(2400400, 1, 1083, 29, 1);
                    cm.spawnMobLimit(2400400, 1, 344, -391, 1);
                    cm.spawnMobLimit(2400400, 1, -68, -391, 1);
                    cm.spawnMobLimit(2400400, 1, 1075, -511, 1);
                    cm.spawnMobLimit(2400400, 1, 862, 29, 1);
                    cm.spawnMobLimit(2400400, 1, -342, 29, 1);
                    cm.spawnMobLimit(2400400, 1, 647, 29, 1);
                    cm.spawnMobLimit(2400400, 1, 781, -511, 1);
                    cm.spawnMobLimit(2400400, 1, 924, -511, 1);
                    cm.spawnMobLimit(2400400, 1, 150, -391, 1);
                    cm.sendNormalTalk_Bottom("#face0#卡尼里恩……？", 36, 3001351, false, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face2#莫里奥……伊利温……", 37, 3001308, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#有什么……事吗？", 37, 3001351, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face2#那是……我的水晶……呜呜……", 37, 3001308, true, true)
                            } else {
                                if (status === a++) {
                                    cm.forceCompleteQuest(34809);
                                    cm.updateInfoQuest(34809, "exp=1");
                                    cm.dispose()
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};