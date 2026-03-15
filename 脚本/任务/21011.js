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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/21011.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("和#p1201000#在一起的，难道……难道就是传说中的英雄？#p1201000#！别不耐烦地点头，给我们介绍介绍呀！这位就是传说中的英雄吗？！", 0, 1202003, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("   #i4001171#", 0, 1202003, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("……真对不起，太激动了，忍不住嗓门大了些。呜呜～真是令人激动……唉，眼泪都快出来了……#p1201000#这回可开心了。", 0, 1202003, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("等等……英雄大人怎么能没有武器呢？我听说每个英雄都有自己的独特武器……啊，估计是和黑魔法师战斗的时候遗失了。", 0, 1202003, true, true)
                    } else {
                        if (status === a++) {
                            cm.askYesNo("虽然寒碜了点，不过#b先拿这把剑用着吧#k。算是送给英雄的礼物。英雄如果没有武器，岂不是会有些奇怪？\r\n\r\n#fUI/UIWindow2.img/QuestIcon/4/0# \r\n#i1302000# #t1302000# 1个\r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 35 exp", 0, 1202003)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(21011, "");
                                cm.forceCompleteQuest(21011);
                                cm.gainExp(35);
                                cm.sendNormalTalk("#b（看自己这技能水平没一点英雄的样子……这把剑感觉也很陌生。以前的我是用剑的吗？这把剑怎么用呢？）#k", 3, 1202003, false, true)
                            } else {
                                if (status === a++) {
                                    cm.gainItem(1302000, 1);
                                    cm.OnStartNavigation(140090300, 0, "", 0);
                                    cm.dispose()
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};