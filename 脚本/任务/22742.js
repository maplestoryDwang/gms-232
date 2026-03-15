var status = -1;
var selectionLog = [];

function start(e, d, c) {
    if (cm.getPlayer().getGender() == 0) {
        var a = 1531000
    } else {
        var a = 1531052
    }
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status == b++) {
            cm.sendNormalTalk_Bottom("#face1#是10个鸟蛋！没错，辛苦你了。", 37, 1531003, false, true)
        } else {
            if (status === b++) {
                cm.sendNormalTalk_Bottom("那现在就算结束了吧，内罗？", 37, a, true, true)
            } else {
                if (status === b++) {
                    cm.sendNormalTalk_Bottom("#face2##fs25##r我说了我的名字并不是内罗……！", 37, 1531003, true, true)
                } else {
                    if (status === b++) {
                        cm.sendNormalTalk_Bottom("#face3#哈，你随便叫好了。\r\n汉斯还没有来，我们也需要烧菜用的柴火。", 37, 1531003, true, true)
                    } else {
                        if (status === b++) {
                            cm.sendNormalTalk_Bottom("柴火？还得去砍树吗？", 37, a, true, true)
                        } else {
                            if (status === b++) {
                                cm.sendNormalTalk_Bottom("#face0#嗯……我们并不是砍树获取柴火的，而是通过打猎怪物获取的，不过也差不多啦。", 37, 1531003, true, true)
                            } else {
                                if (status === b++) {
                                    cm.sendNormalTalk_Bottom("怪物？那又得干一架咯。\r\n看来这个世界主要是靠这种方式获取材料的吧？", 37, a, true, true)
                                } else {
                                    if (status === b++) {
                                        cm.askYesNo_Bottom("#face0#没错，捕猎#b斧木妖#k，只要收集15个就可以了。\r\n集齐后就拿去给#b亚乌#k。", 36, 1531003)
                                    } else {
                                        if (status === b++) {
                                            cm.sendNormalTalk_Bottom("#face1#从右边出去吧喵。\r\n一想到可以烤鸟蛋吃，口水就流不停了喵。\r\n#b斧木妖#k在 #b日出之地、林语之地#k大量盘踞喵", 37, 1531003, false, true)
                                        } else {
                                            if (status === b++) {
                                                cm.forceStartQuest(22742, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/22742.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
            }
        }
    }
}

function end(e, d, c) {
    if (cm.getPlayer().getGender() == 0) {
        var a = 1531000
    } else {
        var a = 1531052
    }
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status == b++) {
            cm.sendNormalTalk_Bottom("嗯，辛苦了。", 37, 1531004, false, true)
        } else {
            if (status === b++) {
                cm.forceCompleteQuest(22742);
                cm.gainExp(5700);
                cm.gainItem(4000018, -15);
                cm.dispose()
            }
        }
    }
};