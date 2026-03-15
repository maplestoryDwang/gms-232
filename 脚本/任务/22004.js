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
            cm.sendNormalTalk("最近农场上的#o1210100#有点奇怪。经常无缘无故地发脾气，做出一些烦人的事情。我对此很担心，所以今天很早就出来了。果然有一只#o1210100#钻过了篱笆，逃到外面去了。", 0, 1013103, false, true)
        } else {
            if (status === a++) {
                cm.askAcceptDecline("在找到#o1210100#之前，必须先把坏了的篱笆修好。还好坏得不是太严重，只要有几个#t4032498#应该就能修好了。小不点，要是你能帮我搜集#b3个#t4032498##k就好了……", 0, 1013103)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(22004, "");
                    cm.sendNormalTalk("哦，真是谢谢你。#b#t4032498##k可以从周围的#r#o0130100##k身上搜集到。它们虽然不是很强，但不小心的话，可能会遇到危险。你一定要好好使用技能道具。", 1, 1013103, false, true)
                } else {
                    if (status === a++) {
                        cm.onScriptMessage_显示教程引导图片(["UI/tutorial/evan/6/0"])
                    } else {
                        if (status === a++) {
                            cm.updateInfoQuest(56552, "MOB=1");
                            cm.teachSkill(20011000, 3, 0);
                            cm.updateInfoQuest(16027, "ComboK=2");
                            cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/22004.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("哦，#t4032498#搜集到了吗？真了不起。我应该给你什么作为奖赏呢……对了，我有那个东西。\r\n\r\n#fUI/UIWindow2.img/QuestIcon/4/0# \r\n#i3010097# #t3010097#1个\r\n#i2022621# #t2022621#15个\r\n#i2022622# #t2022622#15个\r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 210 exp", 0, 1013103, false, true)
        } else {
            if (status === a++) {
                cm.gainExp(210);
                cm.sendNormalTalk("好了，我用修理篱笆剩下的木板做了一把椅子。虽然不太好看，但却很结实。就给你用吧。", 1, 1013103, true, true)
            } else {
                if (status === a++) {
                    cm.gainItem(4032498, -3);
                    cm.gainItem(3010097, 1);
                    cm.gainItem(2022621, 15);
                    cm.gainItem(2022622, 15);
                    cm.onScriptMessage_显示教程引导图片(["UI/tutorial/evan/7/0"]);
                    cm.updateInfoQuest(16025, "MultiKC=1");
                    cm.forceCompleteQuest(16025);
                    cm.updateInfoQuest(16025, "");
                    cm.forceStartQuest(22004, "");
                    cm.forceCompleteQuest(22004);
                    cm.dispose()
                }
            }
        }
    }
};