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
            cm.sendNormalTalk_Bottom("总之，很高兴见到你，我是冒险家代表赫丽娜。\r\n狼牙应该也正在为万神殿的事情忙碌吧，哈哈……", 36, 3003658, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("那我问你，你想通过冒险获得什么？\r\n你来这里是想达成什么目标？", 36, 3003658, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("我有预感，你将展开一场漫长的旅程。\r\n为此，你需要多结识一些人。", 36, 3003658, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("你去给此地的居民们帮忙，顺便进行探险吧？\r\n我可以给你介绍一下需要帮助的地方。", 36, 3003658, true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.askAcceptDecline_Bottom("阿黛尔，我想听听你的意向。\r\n你愿意去见见那些需要帮助的居民吗？", 36, 3003658, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("知道了。那请你稍等。\r\n我要在各地送来的事件委托中，找找适合你的工作。", 36, 3003658, false, true, 1)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(39636, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39636.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("最合适的委托有如下4个。\r\n“妖精学院艾利涅”，“金海滩度假村”，“列娜海峡”，“秘密森林艾洛丁”。\r\n这些都是需要帮助的地区。", 36, 3003658, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("你可以在四个委托中任选，\r\n或者全部接受也行。\r\n\r\n#r　※ 可通过画面左侧的灯泡提示栏接受委托。", 36, 3003658, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("祝你今后在冒险岛世界积累众多人脉……\r\n希望在这里的冒险之旅能让你度过一段有意义的时光。", 36, 3003658, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(39636);
                        cm.dispose()
                    }
                }
            }
        }
    }
};