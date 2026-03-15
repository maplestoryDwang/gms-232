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
            cm.forceStartQuest();
            cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/32624.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Illus("#h0#，你好啊。有什么事吗？", 2520002, 5, false, true, 4)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Illus("……嗯？这是命运之花？故事里说的就是那个花吗？？", 2520002, 5, true, true, 4)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Illus("谢谢你。为了鼓励我，居然把这花……这让耍脾气的我，感到非常羞愧呢。我一定不会忘记 #h0#你的努力的。\r\n\r\n          #fUI/UIWindow4.img/libraryCygnus/0/2#  #fUI/UIWindow4.img/libraryCygnus/1/3#  #fUI/UIWindow4.img/libraryCygnus/2/3#  ", 2520002, 5, true, true, 4)
                } else {
                    if (status === a++) {
                        cm.dispose();
                        cm.warp(303090500, 0, false);
                        cm.removeAll(4033970)
                    }
                }
            }
        }
    }
};