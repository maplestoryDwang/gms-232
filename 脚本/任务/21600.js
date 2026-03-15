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
            cm.askAcceptDecline("英雄，你好！我是看管雪橇哈士奇犬的#p1202007#。不好意思打扰你了，只是能够帮助我的只有英雄你一人了……如果你不是太忙的话，能否听听我的苦衷？", 0, 1202007)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("就是不久前的事情。我像平时一样照看可爱的哈士奇犬们，却发现有个奇怪的家伙夹在他们中间。毛色光泽都很不一样，牙齿也锐利很多……怎么看都不像一只哈士奇犬。", 0, 1202007, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("我开始还以为是只变种的哈士奇犬。后来一查才发现那家伙不是哈士奇，而是只#b狼#k！#m140000000#岛上根本没有狼，也不知道是从哪里混进来的……很奇怪不是吗？", 0, 1202007, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("我也知道不能把狗和狼一起养，但这小狼崽才刚刚出生，丢掉又太不近人情了。再加上小狼崽的身体还很弱。所以，我打算把这只小狼崽养到他能自食其力的大小。", 0, 1202007, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("虽然我很精通犬类的饲养，但如何养狼却是一窍不通。所以必须找人帮忙。#b水下世界的某个地方#k住着一个叫#b#p2060000##k的人，懂得饲养狼的办法。所以想请英雄去见见她，请求她的帮助。谢谢你了。", 0, 1202007, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("得到纳努科的同意后，她应该会给你一个东西，你把那个东西带回来给我就行。我的家就在里恩村旁边，#b白雪平原2附近#k。", 0, 1202007, true, false);
                                cm.forceCompleteQuest(21600);
                                cm.forceCompleteQuest(21601);
                                cm.forceCompleteQuest(21602);
                                cm.forceCompleteQuest(21603);
                                cm.forceCompleteQuest(21604);
                                cm.forceCompleteQuest(21605);
                                cm.forceCompleteQuest(21606);
                                cm.forceCompleteQuest(21607);
                                cm.forceCompleteQuest(21608);
                                cm.forceCompleteQuest(21609);
                                cm.forceCompleteQuest(21610);
                                cm.forceCompleteQuest(21611);
                                cm.forceCompleteQuest(21612);
                                cm.forceCompleteQuest(21613);
                                cm.forceCompleteQuest(21614);
                                cm.forceCompleteQuest(21615);
                                cm.forceCompleteQuest(21616);
                                cm.forceCompleteQuest(21617);
                                cm.forceCompleteQuest(21618);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/21600.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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