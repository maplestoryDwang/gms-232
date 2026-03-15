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
            cm.sendNormalTalk_Bottom("徽章我以后再还给你吧。\r\n等我证明我能够好好使用冒险能量。", 36, 2052014, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("我对徽章不感兴趣。", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face2#哦……真的吗？", 36, 2052014, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#fc0xFFAAAAAA#(其实我也有不少好东西呢……)#k", 56, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face2#什么？你说什么？", 36, 2052014, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("没有，我没说什么。\r\n阿琳的力量还没有完全恢复吧？我来打头阵吧。", 56, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#不要当我是小孩子看待！我知道你很厉害，可这是我……", 36, 2052014, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("这里是A组！这里是A组！", 36, 2052015, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("直接这么开打太无趣了，不如我们赌一赌，看谁会最先结束吧？", 36, 2052015, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face1#又开始了……", 36, 2052013, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("就赌谁先#b消灭200个外星章鱼激光棒#k！来，开始！", 36, 2052015, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.askYesNo_Bottom("#face0#干什么呢！突击！", 36, 2052014)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.forceStartQuest(3489, "");
                                                            cm.setPartner(1, 2052036, 80002246, 0);
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
            cm.sendNormalTalk_Bottom("C组完毕！！", 36, 2052014, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("哈欠~现在才结束啊？我早就收拾完了，正在打盹呢。", 36, 2052015, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("不……不可能！", 36, 2052014, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face1#总之这哈欠……", 36, 2052012, true, true)
                    } else {
                        if (status === a++) {
                            cm.forceCompleteQuest(3489);
                            cm.gainExp(11004938);
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};