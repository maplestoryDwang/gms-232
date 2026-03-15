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
            cm.sendNormalTalk_Bottom("#face5#欢迎来到尖耳守备队#b作战基地#k！", 36, 3002110, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#fc0xFFAAAAAA#(作战基地……不就是个烂树桩吗……)", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face5#好了，作战现在开始！代号粉粉！！！", 36, 3002110, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("嗯…………很酷的代号。", 56, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face5#是吧？哈哈！", 36, 3002110, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#好，我来下达第一个任务！去#b#m410000111##k消灭闪粉蝶，可以获得#b蝴蝶粉#k。只要搜集50个就够了。", 36, 3002110, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("蝴蝶粉……？是用来干什么的呢？", 56, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face17#嘿嘿……你很快就会知道的！", 36, 3002110, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.askYesNo_Bottom("#face0#好了，别磨蹭，快去。\r\n在这段时间，我这个队长要在这里研究核心材料的搭配！哈哈！", 36, 3002110)
                                        } else {
                                            if (status === a++) {
                                                cm.forceStartQuest(34745, "");
                                                cm.OnStartNavigation(410000111, 0, "", 0);
                                                cm.sendNormalTalk_Bottom("#face0##b左边往上走#k。别迷路。", 36, 3002110, false, true)
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
            cm.sendNormalTalk_Bottom("#face17#你想知道……这是什么粉末吗？", 36, 3002110, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("嗯？嗯……（有种不祥的预感。）", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face17#那么……哈！", 36, 3002110, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("啊啊啊～阿嚏！！！阿嚏！！！啊啊啊啊嚏！", 56, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face5#哇哈哈！成功了！干得不错！", 36, 3002110, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("你在干什么！阿嚏！！！！！", 56, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face5#代号粉粉准备完成！\r\n快用这种喷嚏粉末去#b训练村民们#k吧！", 36, 3002110, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("那是要干什么……", 56, 0, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.forceCompleteQuest(34745);
                                            cm.gainExp(48338098);
                                            cm.updateInfoQuest(34745, "exp=1");
                                            cm.gainItem(4036315, -50);
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