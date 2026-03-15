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
            cm.sendNormalTalk("……是嘛，有人向乐迪安求婚了啊。呼，这也算是好事。像我这么穷的男人，她嫁给我肯定会是吃苦。爱一个人就该让她更幸福，这才是我的爱……", 0, 2450007, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("别说这些没用的话，赶紧想办法让乐迪安回心转意啊？好像乐迪安一直等待着你的求婚。", 2, 2450007, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("我也很想向她求婚！但是……别说拳头那么大的钻戒了，我连芝麻绿豆大的钻戒都拿不出来。我们曾经约定过，求婚的时候一定要让她带上宝石戒指的……", 0, 2450007, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("所以，你打算把乐迪安送给别的男人了？", 2, 2450007, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("不，不，那也不是。", 0, 2450007, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("那你还磨蹭什么？只要你们两个心有灵犀，哪怕是螺帽都足够了。我先帮你去弄个#r#t4009038##k，你就将就一下吧，顺便想想该怎么求婚。", 2, 2450007, true, true)
                            } else {
                                if (status === a++) {
                                    cm.updateInfoQuest(41204, "");
                                    cm.forceStartQuest(41204, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/41204.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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