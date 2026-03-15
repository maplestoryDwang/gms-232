var status = -1;
var selectionLog = [];

function start(d, h, j) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = j;
    var c = -1;
    if (status <= c++) {
        cm.dispose()
    } else {
        if (status == c++) {
            cm.sendNormalTalk("哇啊！哥哥和姐姐就是#p2430002#姐姐说的冒险家啊！看起来真强大！可以教教我剑术吗？我也很想变强大，很想去冒险~", 32, 2430003, false, true)
        } else {
            if (status === c++) {
                cm.sendNormalTalk("#b(得抓紧问#p2430000#，这小子也太烦人了……要不就随便敷衍一下？……嗯？怎么突然声音变小了？)", 44, 2400005, true, true)
            } else {
                if (status === c++) {
                    cm.sendNormalTalk("#b(小声地说)#k哥哥和姐姐就是在寻找#p2430000#的人吧？村里的大人们绝对不会告诉你们有关#p2430000#的事情。", 32, 2430003, true, true)
                } else {
                    if (status === c++) {
                        cm.sendNormalTalk("……？", 44, 2400005, true, true)
                    } else {
                        if (status === c++) {
                            cm.sendNormalTalk("#b(小声地说)#k如果我被发现在告诉你们#p2430000#的话，可能再也见不到你们了。我们去僻静的地方去说吧，到村外的#b#MDmap323090100##k来吧。", 32, 2430003, true, true)
                        } else {
                            if (status === c++) {
                                cm.updateInfoQuest(40202, "");
                                cm.forceStartQuest(40202, "");
                                cm.updateInfoQuest(41832, "desert=off;three=enter;afrien=off;cave=off");
                                var g = ["mirrorD_323_0_", "mirrorD_323_1_", "mirrorD_323_2_", "mirrorD_323_3_"];
                                var a = [0, 0, 0, 0];
                                var b = ["生产射手村特产品蘑菇的蘑菇山丘。", "全身由石头组成的石头人的领地。", "能一眼看到蓝天碧海的金色海滩。", "树影之间躲藏着凶恶青龙的沉睡森林之底。"];
                                var f = new Array();
                                var e = 41800 + parseInt((cm.getMapId() - 320000000) / 1000000) * 4 - 4;
                                for (var c = 0; c < b.length; c++) {
                                    if (cm.getNumberFromQuestInfo(e + c, "count") > 0) {
                                        f.push(b[c] + "\n\n通关次数:" + cm.getNumberFromQuestInfo(e + c, "count") + "\r\n最短纪录:" + cm.getNumberFromQuestInfo(e + c, "min") + "分 " + cm.getNumberFromQuestInfo(e + c, "sec") + "秒")
                                    } else {
                                        f.push(b[c] + "\n\n通关次数:- \r\n最短纪录:-分 -秒")
                                    }
                                }
                                if (cm.isQuestActive(40202)) {
                                    g.push("map323090100");
                                    a.push(0);
                                    f.push("可以和龙神安静聊天的射手村三岔路。")
                                }
                                cm.setMirrorDungeonInfo(g, a, f);
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
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/40202.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("你们来了，你们是想知道有关#p2430000#的事情吧？那么我就先问一句。你们为什么要寻找#p2430000#？莫非你们两个也认为#p2430000#是个#r怪物#k吗？你们不会是要抓它吧？", 32, 2430020, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#face11#……怪物？#p2430000#吗？", 44, 2400006, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("#face5#你在说什么？我们和#p2430000#是一家人，只是很久之前丢失了现在重新要找回去而已。", 44, 2400005, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("……嗯，明明长得一点都不像，还说是一家人，我怎么能相信。但是，你们认为#p2430000#不是怪物……至少可以看得出来你们不是来欺负#p2430000#的吧。", 32, 2430020, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("#face11##b(这小子头脑出奇得好用啊？虽然年纪这么小……)", 44, 2400005, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("好吧，我就相信你们两个。#p2430000#是几年前突然出现在村子里的孩子。大家都以为他是个被遗弃的孤儿，所以想要好好照顾#p2430000#。但是#p2430000#却有点奇怪，过了好几年都没有长大。", 32, 2430020, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("起初，人们还以为这孩子吃的不好，所以没有成长。但是过了好几年都没有看到他的成长，所以大家都觉得#p2430000#很奇怪。更何况，#p2430000#周围经常发生#r奇怪的事情#k。", 32, 2430020, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("一开始的时候都是小事，晾在#p2430000#家里的衣服从来都没干过，要么就是缸子里的大酱怎么都不会减少。但是，事情却越来越大，不久之前发生了很可怕的事情。#p2430000#竟然召唤出了#r怪物#k。", 32, 2430020, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("以前，大家都以为这只是个偶然，或者是#p2430000#太不走运了。但是召唤出怪物之后，一切都改变了。村里的警卫们虽然消灭掉了怪物，但是他们也受了很严重的伤，而且原本就体弱多病的玛亚姐姐也被怪物攻击，受了致命伤。", 32, 2430020, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("通过这次的事件，村里的大人们纷纷断定#p2430000#就是怪物。但是我不这么认为。虽然……#p2430000#的确有点奇怪，但至少他不可能是个怪物。因为……#p2430000#是个很善良的家伙。", 32, 2430020, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("#p2430000#到底有没有召唤出怪物，虽然我不知道……但即便是他召唤的怪物，那他也不会是故意的。我觉得肯定是因为事情变得异常，大家才会误会他的。", 32, 2430020, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.gainExp(1990000);
                                                        cm.forceCompleteQuest(40202);
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
                }
            }
        }
    }
};