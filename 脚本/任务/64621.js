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
            cm.npc_ChangeController(9400938, "oid=211809", 90, 305, 11, 40, 140, 5, true, false);
            cm.npc_ChangeController(9400939, "oid=211810", 0, 305, 7, -50, 50, 5, true, false);
            cm.sendNormalTalk_Bottom("#face0#你该有多辛苦啊……", 37, 9400923, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#b居然是素食主义者狼人，我还是第一次听说呢。", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#嗯？你也是第一次听说吧？等一下……他有可能在说谎啊？", 37, 9400923, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face2#没错！对！我们怎么能相信狼人说的话呢？", 37, 9400923, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face3#如果你们信不过我，那就来测试一下吧！如果我能吃下#t2020000:#，你们总该相信我了吧？", 37, 9400925, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#好……好啊！", 37, 9400923, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#b那我去买#t2020000:#，艾丹就在这里守着他吧。", 57, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face2#我？！！！我一个人？！", 37, 9400923, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#b那不然就艾丹去买#t2020000:#……", 57, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#不，我就守在这里吧……你……你快点去。", 37, 9400923, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.forceStartQuest(64621, "");
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
            cm.sendNormalTalk_Bottom("#face0#啊！我等了好久啊，#h0#。", 37, 9400923, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face1#请把沙拉给我。", 37, 9400925, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(64621);
                    cm.gainItem(2020000, -10);
                    cm.dispose()
                }
            }
        }
    }
};