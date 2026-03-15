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
            cm.sendNormalTalk_Bottom("喂～～等一下～～ ", 37, 9401052, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#b我吗？", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("嗯～你好～～↗我是来研究深渊生物的米西蒂↗～ ", 37, 9401052, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#b啊，好的，幸会。", 57, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("这几天↗我一直在关注你哦，我想交给你一个特殊的任务……我会给你满↗满的报酬。", 37, 9401052, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#b我只通过远征队本部接受调查任务，而且是在我可以做到的难度以下。", 57, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("哦哦～～真可惜。我觉得你很适合干这个。我还打算给你两倍于芽芽的报酬呢！两倍哟～～ ", 37, 9401052, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("2倍？", 37, 9401029, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("嗯～～两倍，通过芽芽太慢了～～ ", 37, 9401052, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("好的！我们接受！", 37, 9401029, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#b莫妮卡还不知道任务内容呢吧？", 57, 0, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("不用担心哦，捕获2个迪格和2个食石者，简单↗吧？", 37, 9401052, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("那简直小菜一碟！请您稍等片刻，客人。", 37, 9401029, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("队长，队长！居然2倍，这样的机会可不多~！你会接受的吧？", 37, 9401029, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#b好，好……接受吧。（虽然总感觉有些不安……既然调查内容与平时一样……)", 57, 0, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.forceStartQuest(64773, "");
                                                                        cm.gainItem(2270053, 2);
                                                                        cm.gainItem(2270055, 2);
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
        }
    }
}

function stage0(d, c, b) {
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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/64773.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.warp(867147005, 0, false);
            cm.dispose()
        }
    }
};