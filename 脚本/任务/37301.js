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
            cm.sendNormalTalk("#h0#，你可以立刻到前哨基地来吗？", 4, 1540451, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("有什么事吗？", 2, 3004203, true, true)
            } else {
                if (status === a++) {
                    cm.askYesNo("有要事相商，详情见面再说。\r\n我在前哨基地等着你。\r\n\r\n#r（※ 接受后，立即前往前哨基地。） \r\n（※ 包含泰涅布里斯黎曼区域之后的剧情。）\r\n（※ 建议开启背景音乐。）", 4, 1540451)
                } else {
                    if (status === a++) {
                        cm.updateInfoQuest(37301, "dir=1");
                        cm.dispose();
                        cm.warp(993120000, 2, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/37301.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face2#还好你很快就过来了。", 36, 1540451, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face2#我是因为#r“那个男人”#k，才叫#h0#你过来的。", 36, 1540451, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("（哪个男人？是在说谁？）", 56, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face2#那个知晓了黑魔法师的全部计划，仍然支持他的唯一一个男人。", 36, 1540451, true, true)
                    } else {
                        if (status === a++) {
                            cm.askMenu_Bottom("啊！如果是那样的人……#b\r\n#L0#威尔#l\r\n#L1#班·雷昂#l\r\n#L2#阿卡伊勒#l\r\n#L3#戴米安#l", 56, 0)
                        } else {
                            if (status === a++) {
                                if (selectionLog[5] == 0) {
                                    cm.sendNormalTalk_Bottom("#face2#没错。你果然很清楚。", 36, 1540451, false, true)
                                } else {
                                    if (selectionLog[5] == 1) {
                                        cm.dispose();
                                        cm.sendNormalTalk_Bottom("#face2#班·雷昂只是被复仇蒙蔽了双眼，\r\n他对黑魔法师的计划并不感兴趣。", 36, 1540451, false, true)
                                    } else {
                                        if (selectionLog[5] == 2) {
                                            cm.sendNormalTalk_Bottom("#face2#阿卡伊勒作为黑魔法师的忠实部下，\r\n却不知道黑魔法师的全部计划。", 36, 1540451, false, true)
                                        } else {
                                            cm.dispose();
                                            cm.sendNormalTalk_Bottom("#face2#黛米安他……不知道黑魔法师的计划。\r\n一心只想要变强。", 36, 1540451, false, true)
                                        }
                                    }
                                }
                            } else {
                                if (status === a++) {
                                    if (selectionLog[5] == 0) {
                                        cm.sendNormalTalk_Bottom("#face2#关于那个人，我有很多话要说。\r\n此事非同小可，容我酝酿。", 36, 1540451, true, true)
                                    } else {
                                        cm.sendNormalTalk_Bottom("#face2#反而被利用了。", 36, 1540451, true, true);
                                        cm.dispose()
                                    }
                                } else {
                                    if (status === a++) {
                                        cm.forceCompleteQuest(37301);
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