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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, true, false);
            cm.sendNormalTalk("如果你听过#p1090000#的说明，应该就会知道。军团长是黑魔法师最危险的7个部下……发现了古瓦洛的纹样，到底意味着什么呢？", 1, 1012134, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("希望发现的只是几百年前的痕迹……如果这是黑魔法师复活的征兆，那该怎么办呢……", 1, 1012134, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("必须先对散发出危险气息的纹样进行净化。可能会很刺眼，你最好遮住眼睛。好的，那么……！", 1, 1012134, true, true)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(1504, "");
                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                        cm.setInGameDirectionMode(false, true, false);
                        cm.effect_Direction("Effect/Direction5.img/unitedMaple/Quest1504", 0, 0, 0);
                        cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/1504.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("这下清楚了，这个纹样的含义。这是古瓦洛向冒险岛世界发出的警告。……告知黑魔法师的复活……！", 0, 1012134, false, true)
        } else {
            if (status === a++) {
                cm.forceStartQuest(1504, "");
                cm.forceCompleteQuest(1504);
                cm.dispose();
                cm.warp(100000201, 2, false)
            }
        }
    }
};