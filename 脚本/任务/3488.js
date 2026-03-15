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
            cm.sendNormalTalk_Bottom("虽然阿琳大话说得很漂亮，不过冒险能量一旦被消耗，可没那么快能恢复。", 36, 2052013, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("说不定她内心也在等待有人过去呢。", 36, 2052013, true, true)
            } else {
                if (status === a++) {
                    cm.askYesNo_Bottom("麻烦了，#b#h0##k。\r\n去右边帮帮阿琳吧。", 36, 2052013)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(3488, "");
                        cm.sendNormalTalk_Bottom("借此机会，从我们老幺那里赢得些好感也不错。", 36, 2052013, false, false)
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
            cm.sendNormalTalk_Bottom("等一下，本部正在尝试通讯。", 37, 2052014, false, true)
        } else {
            if (status === a++) {
                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/radionoise", 100);
                cm.sendNormalTalk_Bottom("#face0#这里是本部……无线电干扰很严重。", 37, 2052006, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0##b外星章鱼激光棒#k似乎释放出了干扰电波……滋滋。", 37, 2052006, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0##b降落伞#k……滋滋……传送……滋滋……祝你们好运……滋滋……", 37, 2052006, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("我是阿哲，好像没法再继续和本部通讯了。", 37, 2052010, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("我们分为三组，去消灭外星章鱼激光棒，恢复和本部的通讯吧。", 37, 2052010, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("A组是阿海、阿哲、小俊，\r\nB组是我和阿英，\r\nC组是阿琳和#h0#。", 37, 2052010, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("开始作战~！", 37, 2052010, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("好的。", 37, 2052011, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("好的。", 37, 2052014, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.gainExp(3668312);
                                                    cm.forceCompleteQuest(3488);
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