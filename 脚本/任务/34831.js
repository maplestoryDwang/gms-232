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
            cm.sendNormalTalk_Bottom("#face0#伊利温！我给在冒险岛世界新交的朋友看了#b水晶门#k，他说见过类似的东西！", 36, 3001308, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#去哪能见到你的朋友？", 37, 3001354, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#可以在勇士部落内的#m102040200#见面！我们一会儿就在那里碰头吧！", 37, 3001308, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.askAcceptDecline_Bottom("#face0#决定立即前往勇士部落的#m102040200#吗？\r\n#b（接受时将自动移动。）", 37, 3001300, 1)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(34831, "");
                            cm.dispose();
                            cm.warp(102040200, 2, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/34831.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#这是我的朋友，修安。", 36, 3001308, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("啊！原来是卡尼里恩的朋友！", 37, 3001359, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("咦，这个好像机器人啊？长得真奇特！太可爱了！", 37, 3001359, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#这破土坑的地方真的有水晶门吗？", 37, 3001311, true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#土坑？那是发掘团潜心研究遗迹的地方。不要随口乱说，知道吗？", 37, 3001308, true, true, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#大家冷静点。", 37, 3001354, true, true, 1)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("……", 37, 3001359, true, true, 1)
                                } else {
                                    if (status === a++) {
                                        cm.forceCompleteQuest(34831);
                                        cm.updateInfoQuest(34831, "exp=1");
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
};