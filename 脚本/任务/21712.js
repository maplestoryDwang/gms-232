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
            cm.sendNormalTalk("你找回的这些人偶总是会#b发出奇怪的声音#k。当然，你是听不见的。因为那是只有怪物才能听到的声音。在这种声音的影响下，怪物们的性格似乎发生了变化。", 0, 1300007, false, true)
        } else {
            if (status === a++) {
                cm.askAcceptDecline("性格变得怪异的怪物们开始和没有发生变化的怪物战斗，这导致#m100000000#附近的怪物全部变得残暴起来了。#b使得最近怪物们发生变化的根源就是这个人偶#k！你明白了吧？", 0, 1300007)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(21712, "");
                    cm.sendNormalTalk("怎么会发生这种事情呢…………这种人偶不可能是自然形成的，一定是有人故意而为…………看来要对怪物们的状态观察一段时间了。", 9, 1300007, false, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#b（#m100000000#周边的怪物发生变化的原因找到了。现在把搜集到的信息告诉#p1002104#吧。）#k\r\n\r\n #r ※ 自动移动到任务地图。#k", 2, 1300007, true, true)
                    } else {
                        if (status === a++) {
                            cm.dispose();
                            cm.warp(104000004, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/21712.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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