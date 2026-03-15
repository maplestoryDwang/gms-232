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
            cm.sendNormalTalk_Bottom("。……镰鼬，你没事吧？这是哪里？", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#这里是昭和村的火狸金融。是流氓团伙的老巢。我听说这帮家伙近来在搞些暗箱交易。", 37, 9111003, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#看样子他们在暗中活捉妖怪来进行交易。我们估计是不小心掉进他们的陷阱了。", 37, 9111003, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("我们得赶紧出去。不过估计不会太容易……", 57, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#我觉得这个主意很好。喏，你先去好好说服一下满肚子怨气的无头鬼吧。", 37, 9111003, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("…………………………………。", 57, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(58811, "");
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

function stage0(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/58811.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
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
            cm.sendNormalTalk_Bottom("无……无头鬼……你还好吗。", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#我是妖怪。我才没弱到要一个人类来担心我。", 37, 9111005, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("刚才你在旁边应该也都听见了，我们要想出去的话，必须大家合作才行。", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("你跟镰鼬的决斗改天再说，好吗？", 57, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#……我就暂且忍到逃出这里再说。之后我还是要亲手灭了那只死镰鼬。", 37, 9111005, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#哎呀，你就别磨蹭了！我们快出去吧。", 37, 9111003, true, true)
                            } else {
                                if (status === a++) {
                                    cm.forceCompleteQuest(58811);
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