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
            cm.sendNormalTalk_Bottom("#h0#，你把信交给奥尔卡了吗？弗朗西斯已经到屋顶上去了。", 37, 1530110, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo_Bottom("虽然这事儿明摆着是没戏，不过谁能说得准呢？是不是很想知道结果？一定会很有意思吧？", 37, 1530110)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("怎么能错过这么精彩的场面呢。赶快来屋顶吧！\r\n\r\n#b（前往屋顶看看情况吧。）#k", 37, 1530110, false, true)
                } else {
                    if (status === a++) {
                        cm.dispose();
                        cm.warp(330002214, 2)
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
            cm.sendNormalTalk_Bottom("我还以为是谁呢……你有什么事吗，跟踪狂？", 37, 1530130, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("我都说了，那是个误会……总之，我有话要和你说。", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("有话说？", 37, 1530130, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("给，这是你的跟踪狂写给你的最后一封信。你的回答到屋顶上去和他说吧。", 56, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#等等，你不是女生嘛……女生之间还送什么情书，这不是很奇怪吗？不对，应该这也太奇怪了……吧？", 37, 1530130, true, true);
                            cm.effect_NormalSpeechBalloon("!!", 1, 0, 0, 2000, 1530136, cm.getPlayer().getId())
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#呃，不管怎样，我们认识的时间还这么短……这是不是有点太突然了！哪有你这么不顾及别人感受的？奥尔卡也是需要时间考虑的啊……那样的话说不定还会对你产生点意思呢！因为奥尔卡就是这样……", 37, 1530130, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("……我看你是误会了吧？这是1年级的一个叫弗朗西斯的朋友让我转交给你的。", 56, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                        cm.setAmbience("Ambience.img/wind", 100, 60);
                                        cm.setAmbience("Ambience.img/crow", 100, 60);
                                        cm.sendNormalTalk_Bottom("#face0#………………", 37, 1530130, true, true);
                                        cm.effect_NormalSpeechBalloon("......", 1, 0, 0, 2000, 1530136, cm.getPlayer().getId())
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face1#……\r\n\r\n#b（奥尔卡的表情突然间变得阴冷起来。怎么回事呢？）#k", 37, 1530130, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("那我就先走了。", 56, 0, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.forceStartQuest(32787, "");
                                                    cm.forceCompleteQuest(32787);
                                                    cm.playSoundEffDirectly("Ambience.img/crow");
                                                    cm.playSoundEffDirectly("Ambience.img/wind");
                                                    cm.gainItem(4030041, -1);
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
};