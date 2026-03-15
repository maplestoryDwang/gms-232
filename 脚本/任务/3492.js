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
            cm.sendNormalTalk_Bottom("#face5#收到博士的信号了。", 36, 2052027, false, true)
        } else {
            if (status === a++) {
                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/radionoise", 100);
                cm.sendNormalTalk_Bottom("#face0#你说阿琳没法变身？", 36, 2052006, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#嗯……知道了，事已至此，看来得赶紧将阿琳传送回本部了。", 36, 2052006, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face5#……", 36, 2052027, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#不过姑且不说传送，现在就连通讯也勉强才能……滋滋……", 36, 2052006, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#遥控飞机也……滋滋……在干扰……", 36, 2052006, true, true)
                            } else {
                                if (status === a++) {
                                    cm.askYesNo_Bottom("#face0##b白色遥控飞机#k……滋滋……#b200个#k……毁掉……", 36, 2052006)
                                } else {
                                    if (status === a++) {
                                        cm.forceStartQuest(3492, "");
                                        cm.sendNormalTalk_Bottom("你在这里等着，我很快会处理好回来的。", 57, 0, false, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face5#是……", 37, 2052027, true, false)
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
            cm.sendNormalTalk_Bottom("#face0#辛苦了。", 36, 2052006, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face5#博士！其他队员都在干什么呢？", 36, 2052027, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#阿英正在黑掉白外星人们的计算机，查找情报。", 36, 2052006, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#遥控飞机实在是太多了，通讯起来不太容易啊……", 36, 2052006, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#我们也抓紧时间吧，滋滋……要是遥控飞机一拥而上，到时候通讯会再次中断的。", 36, 2052006, true, true)
                        } else {
                            if (status === a++) {
                                cm.gainExp(11004938);
                                cm.forceCompleteQuest(3492);
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
};