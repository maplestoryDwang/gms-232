var status = -1;

function start() {
    action(1, 0, 0)
}

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.sendNormalTalk("好吧，你尽管开口~来，有我风精灵在呢~赶紧，赶紧的~", 4, 3003302, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("风精灵啊，那你能带我们去这悬崖之下，有草叶笛的地方吗？", 4, 3003301, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("悬崖下面发出“嗡~嗡~”声的笛子吧？嗡嗡~", 4, 3003302, true, true)
                } else {
                    if (status === a++) {
                        cm.askAcceptDecline("好吧，我带你们过去~乘着风~比风还要快，咻一下子~准备好了吗？", 0, 3003302)
                    } else {
                        if (status === a++) {
                            cm.dispose();
                            cm.warp(940200206, 0)
                        }
                    }
                }
            }
        }
    }
}

function end(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("它的脚本位于： #b /脚本/任务/#e" + e + "#n.js#k你要立刻完成这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceCompleteQuest();
                cm.dispose()
            }
        }
    }
};