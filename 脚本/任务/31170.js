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
            cm.sendNext("喂，这里！")
        } else {
            if (status == a++) {
                cm.sendNextPrevS("发生了什么事？……咦，这是战神……？！但怎么变成了……")
            } else {
                if (status == a++) {
                    cm.sendNextPrev("你认识主人吗？我看你好像不是这个世界的人……不管怎样都没关系，你看着很顺眼。")
                } else {
                    if (status == a++) {
                        cm.sendNextPrev("我是战斧之魂摩词。旁边是我的主人，我和主人一起打败了黑魔法师，把他永远地封印了起来。但是黑魔法师在被封印的瞬间，用最后的力里给英雄们下了强大的诅咒。主人因此失去了意识，倒下了。")
                    } else {
                        if (status == a++) {
                            cm.sendNextPrev("这样下去的话，他可能永远都站不起来了。必须尽快把主人带到安全的地方去才行，但是我也变成了这个样子。所以希望你能帮帮我。")
                        } else {
                            if (status == a++) {
                                cm.forceStartQuest();
                                cm.forceCompleteQuest();
                                cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b %SCRIPT_PATH%#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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