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
            cm.sendNormalTalk("咦？什么人在岛上……？哎呦，这不是#p1201000#吗？#p1201000#来这里是为了……这人是#p1201000#的朋友吗？啊？你说这人是英雄？", 0, 1202001, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("     #i4001170#", 0, 1202001, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("这位原来就是#p1201000#一族数百年间苦苦守候的英雄啊！啊，乍一看倒是和普通人没什么两样……", 0, 1202001, true, true)
                } else {
                    if (status === a++) {
                        cm.askAcceptDecline("但是可能是因为你被黑魔法师的诅咒困在冰里几百年时间，所以体力全都消耗完了。#b我给你一个体力恢复药水，请快点喝下去吧#k。", 0, 1202001)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("请先喝掉药水，然后再慢慢谈！", 9, 1202001, false, true)
                        } else {
                            if (status === a++) {
                                cm.gainItem(2000022, 1);
                                cm.forceStartQuest(21010, "");
                                cm.sendNormalTalk("#b（这药水怎么喝？……不记得了……）#k", 3, 1202001, true, true);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/21010.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("我们一直试图在冰层深处寻找传说中的英雄，不过从没想过真能找到你！预言果然没有错！#p1201000#做出了正确的选择！既然英雄重新回来了，我们就没有必要再惧怕黑魔法师了！", 0, 1202001, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("哎呦，我怎么抓着您聊了这么久？实在是太高兴了……其他的企鹅估计也会像我这样的。虽然知道你很忙，不过在回村子的路上，#b还是尽量和其他的企鹅搭搭话吧#k。有大英雄和他们说话，他们肯定会惊讶得要死！\r\n\r\n#fUI/UIWindow2.img/QuestIcon/4/0# \r\n#i2000022# #t2000022# 5个\r\n#i2000023# #t2000023# 5个\r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 16 exp", 0, 1202001, true, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(21010, "");
                    cm.forceCompleteQuest(21010);
                    cm.updateInfoQuest(25980, "normal=#");
                    cm.updateInfoQuest(25980, "normal=#;hard=#");
                    cm.gainExp(16);
                    cm.sendNormalTalk("你升级了吗？不知道你有没有得到技能点数？在冒险岛世界，每升1级就能获得技能点数3。按#bK键#k，打开技能栏就可确认。", 9, 1202001, true, true)
                } else {
                    if (status === a++) {
                        cm.gainItem(2000022, 5);
                        cm.gainItem(2000023, 5);
                        cm.sendNormalTalk("#b（对我这么亲切，我却什么都想不起来。我真的是英雄吗？还是先查看一下技能吧……怎么查看技能呀？）#k", 3, 1202001, true, true)
                    } else {
                        if (status === a++) {
                            cm.OnStartNavigation(140090200, 0, "", 0);
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};