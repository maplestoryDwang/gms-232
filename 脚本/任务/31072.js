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
            cm.sendNormalTalk("冒险家大人能听我说一下吗？", 0, 2170016, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("我的宠物薛西斯又犯了什么事儿。它利用手下们，不停地在建造高塔。", 0, 2170016, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("它有种要把塔建到月球上的气势啊……\r\n我真不明白，它打算在塔上做什么。", 0, 2170016, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("我们也不能坐视不管，我想了几个到塔上去的方案，制作了#b把绳索射出去然后快速倒卷的装置#k。\r\n但是……", 0, 2170016, true, true)
                    } else {
                        if (status === a++) {
                            cm.askYesNo("绳索无论如何都无法支撑我们巨人族的重量……冒险家大人身体轻，应该能使用那个绳索装置。\r\n身体轻盈的冒险家大人能不能帮帮我们呢？", 0, 2170016)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("真的很感谢你。\r\n请你使用次元之镜，来到#b休彼德蔓的客房#k，我会将你送到克里塞。", 0, 2170016, false, true)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(31072, "");
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
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/31072.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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