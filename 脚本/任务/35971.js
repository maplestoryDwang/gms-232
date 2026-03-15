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
            cm.sendNormalTalk("遗物全部找到了，现在必须举行召唤仪式。根据#r被诅咒的魔道书#k，应该就在右边……。", 4, 1013440, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("被诅咒的魔道书？", 2, 1013413, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("那是我们冒险的开始。我们在荒凉的沙漠中战胜了毒蝎，找到了那个东西。", 4, 1013440, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("其实是在游乐园的沙坑里和虫子战斗……。", 4, 1013442, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("嘘！", 4, 1013441, true, true)
                        } else {
                            if (status === a++) {
                                cm.askYesNo("好了，现在我们到#b#m100051060##k去吧。", 4, 1013440)
                            } else {
                                if (status === a++) {
                                    cm.updateInfoQuest(35950, "00=h1;10=h0;01=h0;11=h0;02=h0;12=h0;03=h0;13=h0;04=h0;14=h0;05=h0;15=h1;06=h0;16=h1;07=h0;17=h1;08=h0;09=h0;27=h0;28=h0");
                                    cm.OnStartNavigation(100051060, 0, "west00", 35971);
                                    cm.forceStartQuest(35971, "");
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
            cm.sendNormalTalk("气氛有点阴森。", 2, 1013417, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("大哥……这里好可怕。", 4, 1013442, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("没，没关系。有我在呢。", 4, 1013440, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("还有古代怪兽0号在，不会有事的。", 4, 1013441, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("嗯？该不会是在说我吧？", 2, 1013417, true, true)
                        } else {
                            if (status === a++) {
                                cm.gainExp(713849);
                                cm.forceCompleteQuest(35971);
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
};