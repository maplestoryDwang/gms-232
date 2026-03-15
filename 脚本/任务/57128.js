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
            cm.sendNormalTalk_Bottom("#face0#我还以为你是有事要找我，才特意来到这所弓箭手修炼场的……刚想起来，我忘记问你的名字了。", 37, 1012100, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("（我对赫丽娜说明了有关我们的敌人织田信长的情况，以及日本的一部分区域通过次元移动来到了这座冒险岛。）", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#也就是说，你不是冒险岛出身，而是来自其他的世界？这话说的真让人难以置信呢。啊，请你不要误会。我并没有认为剑斗你在对我说谎。只是，你突然这么说，实在让我有些……", 37, 1012100, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#不过，看来你们确实遇到麻烦事了。我也希望能够尽量帮助你们……但实在是不好意思，我并不清楚什么是次元移动和第六天魔王。", 37, 1012100, true, true)
                    } else {
                        if (status === a++) {
                            cm.askAcceptDecline_Bottom("#face0#在魔法密林的魔法图书馆有一位名为汉斯的人。他的学识非常渊博。我可以帮你写一封介绍信。你要不要去找这位汉斯谈谈看呢？", 37, 1012100)
                        } else {
                            if (status === a++) {
                                cm.OnStartNavigation(101000003, 0, "", 0);
                                cm.sendNormalTalk_Bottom("#face0#要前往魔法密林，你可以直接步行，或是选择搭乘中型出租车，这样会方便很多。我会去帮你联系出租车司机的，如果有需要你可以随时使用。", 37, 1012100, false, true)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(57128, "");
                                    cm.gainItem(4033308, 1);
                                    cm.dispose()
                                }
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
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/57128.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#你就是剑斗啊。我已经通过赫丽娜的飞鸽传书了解了你来找我的理由。没想到居然能遇到来自不同世界的访客，我真是太高兴了。欢迎来到冒险岛。", 37, 1032001, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("谢谢你这么热情。抱歉问得这么唐突，不过如果你知道什么是次元移动和第六天魔王，就请把你所了解到的内容全部告诉我吧。", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.askYesNo_Bottom("#face0#非常遗憾，我对这些也不太清楚啊。特别是第六天魔王，完全是我第一次听说到的新名词。不过，魔法图书馆里有着这么多的藏书，或许其中能有可以帮到你的内容。要不要和我一起找找看呢？", 37, 1032001)
                } else {
                    if (status === a++) {
                        cm.gainExp(3201);
                        cm.sendNormalTalk_Bottom("（我和汉斯一起将图书馆里的所有藏书都看了个遍。虽然花费了大量时间，但却没有找到任何可以派上用处的资料。毕竟这些都是与日本有关的内容，在这个异世界里确实很难找到……）", 57, 0, false, true)
                    } else {
                        if (status === a++) {
                            cm.updateInfoQuest(25980, "normal=#;hard=#");
                            cm.gainItem(4033308, -1);
                            cm.sendNormalTalk_Bottom("#face0#我本以为可以找到什么有用的内容，这个结果真是太令人遗憾了。实在抱歉，没能帮上你的忙。其实我个人对你所说的事情还是非常感兴趣的……", 37, 1032001, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("这并不是汉斯你的责任。你愿意为了我这个异邦人花费这么多的时间，我已经很是感动了。", 57, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#还请你不要失望，这里的藏书不过是冒险岛全部知识的冰山一角而已。只要你继续在冒险岛各地寻找，相信总有一日你一定能找到自己想要知道的结论。不过到时，还请把你的知识也分给我一些哦。", 37, 1032001, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.forceCompleteQuest(57128);
                                        cm.dispose()
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};