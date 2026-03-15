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
            cm.sendNormalTalk_Bottom("#h0#，你是不是很想问我，为什么偏偏会喜欢奥尔卡？呼……你就这么想听听我的爱情故事？", 37, 1530140, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("哎呀，你要是真想听的话，我就说给你听听呗。这可是我至今为止都没和任何人说过的爱情故事……", 37, 1530140, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("那个，你不用非得和我说……", 56, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("那是一个春天。\r\n\r\n#b（弗朗西斯完全无视我的话，开始了他的讲述。）#k", 37, 1530140, true, true)
                    } else {
                        if (status === a++) {
                            cm.dispose();
                            cm.warp(330002207, 0)
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
            cm.sendNormalTalk_Bottom("#face0#……什么……", 37, 1530120, false, true);
            cm.effect_Voice("Voice2.img/Friends/CH2_05/1", 100)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("封印应该是真的……", 37, 1530110, true, true);
                cm.effect_Voice("Voice2.img/Friends/CH2_05/2", 100)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("哎呀妈呀！！你们在那儿多久了？！", 37, 1530140, true, true);
                    cm.effect_Voice("Voice2.img/Friends/CH2_05/3", 100)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("听说你又闯祸，然后又病倒了？", 37, 1530120, true, true);
                        cm.effect_Voice("Voice2.img/Friends/CH2_05/4", 100)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("对那种看不到希望的事，还不如趁早放弃？事已至此，看来你们是没有缘分啊。", 37, 1530110, true, true);
                            cm.effect_Voice("Voice2.img/Friends/CH2_05/5", 100)
                        } else {
                            if (status === a++) {
                                cm.askMenu_Bottom("呃……怎么可能？我和奥尔卡明明就是天生的一对！#h0#，你怎么看！\r\n#b\r\n#L0#看不到任何希望#l\r\n#L1#再接再厉的话说不定还有希望#l", 37, 1530140);
                                cm.effect_Voice("Voice2.img/Friends/CH2_05/6", 100)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("呼……不管你怎么看，我已经无所谓了。反正我注定会一辈子在这种相思病的折磨下度过了。", 37, 1530140, false, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("不过……还是有一种药能治的……朋友，你愿意帮帮我吗？咳咳，咳咳……", 37, 1530140, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.forceStartQuest(32774, "");
                                            cm.forceCompleteQuest(32774);
                                            cm.updateInfoQuest(32719, "sms=1;gal=1;add=1");
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
};