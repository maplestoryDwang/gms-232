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
            cm.sendNormalTalk("#h0#，你现在方便到前哨基地来吗？", 4, 1540451, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("有什么事吗？", 2, 3004203, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("我们在前哨基地召开了联盟会议。", 4, 1540451, true, true)
                } else {
                    if (status === a++) {
                        cm.askYesNo("有要事相商。详情我们见面再说。\r\n我在前哨基地等着你。\r\n\r\n#r（※ 接受后，立即前往前哨基地。） \r\n（※ 包含泰涅布里斯黎曼区域之后的剧情。）\r\n（※ 建议开启背景音乐。）", 4, 1540451)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(37401, "");
                            cm.updateInfoQuest(37400, "11=h1");
                            cm.dispose();
                            cm.warp(993120000, 2, false);
                            cm.setNumberForQuestCustomData(3004300, 993141000)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/37401.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.warp(993141000, 0, false);
            cm.dispose()
        }
    }
};