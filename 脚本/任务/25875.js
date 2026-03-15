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
            cm.sendNext("你就是爆莉萌天使吗？我是万神殿的议会长贝尔德。如果你真的是诺巴的正义勇士，有个任务要你去执行。\r\n\r\n#b#L0#是什么人物呢？我愿意去做。#l")
        } else {
            if (status == a++) {
                cm.sendNext("好的，虽然你的穿着看着很别扭，但态度不错。最近孩子们都穿得奇奇怪怪的。\r\n\r\n#b#L0#(我也不喜欢……)……。#l")
            } else {
                if (status == a++) {
                    cm.sendNext("我来跟你说一下，我们诺巴为了夺回赫里希安，决定进攻暴君城堡。但是以我们的实力可能有困难，所以需要援军。\r\n\r\n#b#L0#你是想让我当援军吗？#l")
                } else {
                    if (status == a++) {
                        cm.sendNext("理解力怎么这么差呢？你一个人能干什么吗？我们需要大量的援军！\r\n\r\n#b#L0#……#l")
                    } else {
                        if (status == a++) {
                            cm.askAcceptDecline("嗯，总之出于这个原因，评议会决定派你和狂龙战士去执行寻找援军的任务。怎么样？你想接受这个正义的任务吗？")
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/25875.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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