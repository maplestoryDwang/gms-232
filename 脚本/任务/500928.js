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
            cm.sendNormalTalk_Bottom("#face0#哦，#h0#。你能听我说两句吗？", 36, 9400923, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#你知道的吧？现在整个凯兰西亚都沉浸在迎新年的庆典气氛中了。大家都在开心地品尝美食，燃放爆竹等等。", 36, 9400923, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#只是我有个想法……如果爆竹不是燃放一次就丢，而是让它随时想放就放该多好。那样即使庆典结束，大家也能继续享受欢乐的气氛了。", 36, 9400923, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#所以，如果你能帮我找来需要的材料，我就动手制作一些可以随时再次使用的爆竹装饰家具。所有材料都能在凯兰西亚找到，很简单的。怎么样，你有兴趣帮忙吗？", 36, 9400923, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face2#什么，你不感兴趣？你确定不会后悔吗？", 36, 9400923, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face1#对吧？我把材料目录交给艾米和埃尔宾了，你有空就去和他们一起收集吧。那些材料在庆典期间的凯兰西亚都不难找到。", 36, 9400923, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face1#你在购物期间一点点收集材料就好啦！埃尔宾哥哥答应帮忙了，我们也会边采购边寻找艾丹需要的材料！\r\n#b※ 完成10次以上东洋风家具或建筑采购，即可完成任务。#k", 36, 9400920, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.forceStartQuest(500928, "");
                                        cm.fieldEffect_PlayFieldSound("Sound/UI.img/Invite", 100);
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
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/500928.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的结束脚本还没有修复哦。它的脚本位于： #b /脚本/任务/#e" + e + "#n.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻完成这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceCompleteQuest();
                cm.dispose()
            }
        }
    }
};