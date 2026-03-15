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
            cm.askYesNo("你也知道，我们冒险骑士团是冒险岛世界的女皇希纳斯为了对抗黑魔法师而建立的。我们忠于女皇，正在为了阻止即将醒来的黑魔法师而积蓄力量。\r\n我看你好像需要大量的修炼才行……不过别担心，我们这些教官会把你打造成一个合格的骑士。\r\n\r\n准备好了吗？", 0, 1102100)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("奇姆负责骑士团的各种训练。你再去见见奇姆。\r\n啊，按#e#b快捷键Q#k#n，可以通过#e#r任务信息窗#k#n再次确认任务内容。希望你能记住。有什么不清楚的地方，一定要确认一下，这样才不会出问题。", 1, 1102100, false, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(20822, "");
                    cm.effect_OnUserEff("UI/tutorial.img/2");
                    cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/20822.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("你去和奇库打过招呼了吗？#h0#，我们这些教官会让你成为一名优秀的骑士。", 1, 1102101, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("欢迎会差不多该结束了，让我们开始修炼吧。做好心理准备了吗？", 1, 1102101, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(20822);
                    cm.dispose();
                    cm.warp(130030101, 0, false)
                }
            }
        }
    }
};