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
            cm.sendNormalTalk_Bottom("#face0#总之，就这样一口气突破这里！好的，前进！", 36, 3004652, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#哔哔哔。保密资料有泄漏危险！！", 36, 3004663, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#下达命令，毁掉重要资料。", 36, 3004663, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#重要资料？我们一定要抢到手！", 36, 3004652, true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.askYesNo_Bottom("#face0#好了，到下一格去吧！", 36, 3004652, 1)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(37609, "");
                                cm.updateInfoQuest(37600, "10=h0;11=h0;02=h0;12=h0;13=h1;09=h0");
                                cm.OnStartNavigation(450014120, 0, "", 37609);
                                cm.sendNormalTalk_Bottom("#face0#都给我让开！勇士要出去了！", 36, 3004652, false, true, 1)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("……", 56, 0, true, true, 1)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/37609.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#东西就在这些家伙身上！", 36, 3004652, false, true, 1)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(37609);
                cm.gainExp(8782820);
                cm.dispose()
            }
        }
    }
};