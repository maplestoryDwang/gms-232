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
            cm.askMenu("你是冒险家？在你身上，可以感觉到异常强大的气息。像你这样的人，到这里来有什么事吗？嗯？你好像找我有事吧？是什么事呢？\r\n#b#L0##t4032472#在你这里吗？#l\n#k", 0, 2092001)
        } else {
            if (status === a++) {
                cm.askMenu("雪龟岛……？那是很久以前我去深海里打渔的时候看到过的岛。没错，我这里确实有地图。因为有海盗，所以我没敢走太远，但地图我没有弄丢。\r\n#b#L0#你能把#t4032472#送给我吗？#l\n#k", 0, 2092001)
            } else {
                if (status === a++) {
                    cm.askMenu("那个岛周围有很多暗礁，浪也很大，所以很难到达。我也只去过那里一次，那个岛看上去像是一只覆盖着雪的海龟，所以我才给它取了这样一个名字。事实上，那原来是个无名岛。你还是想要去吗？\r\n#b#L0#我还是想得到地图。#l\n#k", 0, 2092001)
                } else {
                    if (status === a++) {
                        cm.askYesNo("……嗯，既然你这么说，那就没办法了。如果你能答应我一个请求，我就把地图送给你。不是别的，请你帮我消灭对#m251000000#造成威胁的红鼻子海盗团的#r#o9001029##k和#r#o9001030##k各#r100个#k。你可以做到吗？", 0, 2092001)
                    } else {
                        if (status === a++) {
                            cm.askYesNo("需要的话，我可以把你送到海盗的巢穴去。你想现在就出发吗？", 0, 2092001)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(22587, "");
                                cm.dispose();
                                cm.warp(925110001, 1, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/22587.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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