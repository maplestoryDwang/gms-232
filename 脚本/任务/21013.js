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
            cm.askMenu("英、英雄大人……我一直都很想见你。\r\n#b#L0#（做腼腆状。）#l", 0, 1202005)
        } else {
            if (status === a++) {
                cm.askAcceptDecline("我从很久以前就想送英雄大人一件礼物……既然今天遇见了英雄，不知英雄能否赏脸收下我这份薄礼？", 0, 1202005)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(21013, "");
                    cm.sendNormalTalk("制作礼物的材料放在这附近的箱子里了。劳烦英雄大人找到这个箱子，把#b#t4032309##k和#b#t4032310##k带来给我。然后我就能立刻把礼物做好。", 1, 1202005, false, true)
                } else {
                    if (status === a++) {
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/21013.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("材料都拿来了吗？请稍等。这么混合一样…… \r\n\r\n#fUI/UIWindow2.img/QuestIcon/4/0# \r\n#i3010062# #t3010062# 1个 \r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 95 exp", 0, 1202005, false, true)
        } else {
            if (status === a++) {
                cm.forceStartQuest(21013, "");
                cm.forceCompleteQuest(21013);
                cm.gainExp(95);
                cm.sendNormalTalk("好了，椅子做好了！嘿嘿！就算是英雄肯定也会有需要歇歇的时候，所以我一直想送你一把椅子。", 1, 1202005, true, true)
            } else {
                if (status === a++) {
                    cm.gainItem(4032309, -1);
                    cm.gainItem(4032310, -1);
                    cm.gainItem(3010062, 1);
                    cm.sendNormalTalk("我想就算是英雄也不能永远活力充沛，肯定也有疲劳、困倦的时候。但真正的英雄是能够克服万难取得最后胜利的。", 1, 1202005, true, true)
                } else {
                    if (status === a++) {
                        cm.OnStartNavigation(140000000, 1, "1201000", 0);
                        cm.dispose()
                    }
                }
            }
        }
    }
};