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
            cm.askMenu("……如果继续对音乐有所留恋就是我犯蠢了吧，虽然很可惜，但看来现在已经是不行了吧。\r\n\r\n#b#L0#由阿赫唱歌。#l#k\r\n#b#L1#让秘书迪亚唱歌。#l#k\r\n#b#L2#挖掘新人歌手。#l#k\r\n", 0, 1052203)
        } else {
            if (status === a++) {
                if (b == 0) {
                    cm.dispose();
                    cm.sendNormalTalk("哈哈，我总不能这个样子去面对粉丝们吧，我也已经从音乐界退出很久了。", 0, 1052203, false, false)
                } else {
                    if (b == 0) {
                        cm.dispose();
                        cm.sendNormalTalk("#p1052212#也曾经在我们经纪公司当过歌手吧，可是出道专辑卖得并不太好……对她来说也不是什么好的回忆，再提起这件事有点……", 0, 1052203, false, false)
                    } else {
                        cm.sendNormalTalk("新人歌手，尚未被打磨过的原石，若是能由新鲜的嗓音与这首歌相遇……啊，我脑中已经有画面了，应该可行。不过，我们经纪公司现在已经没有星探了……", 0, 1052203, false, true)
                    }
                }
            } else {
                if (status === a++) {
                    cm.askAcceptDecline("……#b#ho##k，不知可否请你帮我这个忙呢？暂时担任我们大火娱乐的星探。", 0, 1052203)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(34404, "");
                        cm.sendNormalTalk("谢谢，#b#ho##k，从现在起请你去招募大概四位候选人，这段时间我会完成编曲工作的。", 0, 1052203, false, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("对了，走之前你不妨先去和我的秘书#b#p1052212##k聊一聊，她会告诉你一些简单的挖角诀窍。", 0, 1052203, true, false)
                        } else {
                            if (status === a++) {
                                cm.dispose()
                            }
                        }
                    }
                }
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