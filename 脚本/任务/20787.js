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
            cm.sendNext("你好，米哈尔。你是不是有什么事情找我？说说看。\r\n#L0##b骑士库洛姆是什么样的人？#k#l")
        } else {
            if (status == a++) {
                cm.sendNext("我也没有见过。但是我经常会听到关于他的传闻，那些传闻中的故事都说他是保护人们的骑士、正义善良的骑士。\r\n#L0##b那你是因为想知道他的长相，才找的我吗？#k#l")
            } else {
                if (status == a++) {
                    cm.sendNext("不是的，米哈尔。我听着他的传奇故事，非常向往见到他本人，但并不是因为你说的那样才这么努力找你的。因为你的光芒和我的期待符合。\r\n#L0##b你见到我的第一刻开始，你就说我是库洛姆的儿子！但是我的记忆很模糊，你确定我是光之骑士的后代吗？#k#l")
                } else {
                    if (status == a++) {
                        cm.sendNext("当然啦，米哈尔。你就是那个人的儿子。我能感觉到，那光的力量通过血液遗传。你一定是库洛姆的儿子，不会错的。\r\n#L0##b如果那真是事实的话，那我岂不是也很危险？他被黑暗吞噬了，我是不是也会变成那样啊？#k#l")
                    } else {
                        if (status == a++) {
                            cm.askAcceptDecline("光明因黑暗而存在。黑暗未必一无是处。你远比你想象的强大。你一定可以走向光明。试着沉下心来吧。")
                        } else {
                            if (status == a++) {
                                cm.forceStartQuest();
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/20787.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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