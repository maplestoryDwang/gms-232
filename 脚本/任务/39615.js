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
            cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(我告诉少年，荆棘丛后面有三个门。\r\n并提议说去找火种，把荆棘丛烧掉。)", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#我去找火种。\r\n你在这里等着。", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face10#这里阴森森的……你要快点回来哦，阿黛尔！", 36, 3001952, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face1#布乌……", 36, 3001960, true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#如果发生什么事，你就喊我。", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1)
                        } else {
                            if (status === a++) {
                                cm.askAcceptDecline_Bottom("#face0##fc0xFFbfbfbf#(#r#o2400603##k#fc0xFFbfbfbf#在#r#m410000331##k#fc0xFFbfbfbf#。\r\n去收集#b10个#k#b#i4036659# #t4036659##k#fc0xFFbfbfbf##fc0xFFbfbfbf#带回来。)", 36, 3001951 - cm.getPlayer().getGender(), 1)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(这少年似乎挺大胆的，有时又像个胆小鬼。\r\n说真的……他真是个令人捉摸不透的家伙。)", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1)
                                } else {
                                    if (status === a++) {
                                        cm.forceStartQuest(39615, "");
                                        cm.OnStartNavigation(410000331, 0, "", 39615);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39615.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.dispose();
            cm.warp(993162021, 0, false)
        }
    }
};