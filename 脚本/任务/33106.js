var status = -1;
var selectionLog = [];

function start(e, c, b) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }
    if (!cm.isQuestFinished(33530)) {
        cm.sendNormalTalk_Bottom("喵喵~这幢建筑物就是神兽国际学校的旧楼。", 37, 1530050, false, false);
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var d = ["最近只要看到眼前有东西在晃动, 我就会失去理性, 冲上去……你瞧瞧我这记性！我有什么能帮助你的吗?", "埃尔文跑哪里去了！你有什么事情吗?"];
            cm.askMenu_Bottom(d[cm.rand(0, d.length - 1)] + "\r\n#b#L0# 这里是什么地方？#l\r\n#b#L2# 我把徽章弄丢了。#l\r\n#b#L3# 我想知道今天剩余的入场次数。#l", 37, 1530050)
        } else {
            if (status === a++) {
                if (selectionLog[1] == 0) {
                    cm.askYesNo_Bottom("为了进行说明，必须暂时移动下场所。你现在要听说明吗？", 37, 1530050)
                } else {
                    if (selectionLog[1] == 2) {
                        if (cm.haveItem(1182079)) {
                            cm.sendNormalTalk_Bottom("你已经拥有#e#b#t1182079##k#n了。请仔细确认下装备背包或者仓库背包吧。", 37, 1530050, false, false)
                        } else {
                            cm.sendNormalTalk_Bottom("一定要收好#e#b#t1182079##k#n啊！下次可别弄丢了！", 37, 1530050, false, false);
                            cm.gainItem(1182079)
                        }
                    } else {
                        cm.sendNormalTalk_Bottom("今日剩余可入场次数为#r" + (10 - cm.getPQLog("副本_好友故事_旧楼")) + "次#k。", 37, 1530050, false, false)
                    }
                }
            } else {
                if (status === a++) {
                    cm.dispose();
                    if (selectionLog[1] == 0) {
                        cm.warp(330003002, 0)
                    }
                } else {
                    if (status === a++) {
                        cm.dispose()
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
            cm.sendNormalTalk_Bottom("你来了，你也感觉到了吗？嗯？你说什么？就是尘土啊，尘土。教室里全部都是。黑暗的气息都快要让人窒息了。", 37, 1530030, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(33504);
                cm.dispose()
            }
        }
    }
};