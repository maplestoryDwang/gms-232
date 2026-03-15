var status = -1;
var item = [1032227, 1113089, 1122274];
var selectionLog = [];

function start(mode, type, selection) {
    var reactor = "action" + cm.getNumberFromQuestInfo(31048, "start");
    eval(reactor)(mode, type, selection)
}

function start0(d, c, b) {
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
            cm.sendNormalTalk("虽然现在雷昂并没有感觉到我的存在，但我并没有放弃希望。", 0, 2161001, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("照塞希莉亚所说，#b#h0##k在收集我生前所做的一些饰品。", 0, 2161001, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("如果你集齐了足够多的那些饰品，我就可以做出一枚戒指(#i1113282:#)，戒指中强大的气息能够让雷昂感觉到我的存在。", 0, 2161001, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("为了制作全新的戒指，你需要收集到足够多的我生前所制作的饰品。\r\n(为了获得#i1113282:# #b#t1113282##k，需要#b10个#k伊帕娅饰品。)", 0, 2161001, true, false)
                    } else {
                        if (status === a++) {
                            cm.updateInfoQuest(31048, "start=1");
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
}

function start(f, c, b) {
    if (status == 0 && f == 0) {
        cm.dispose();
        return
    }(f == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk("为了制作全新的戒指，你需要收集到足够多的我生前所制作的饰品。\r\n(为了获得#i1113282:# #b#t1113282##k，需要#b10个#k伊帕娅饰品。)", 0, 2161001, false, false)
        } else {
            if (status == a++) {
                var d = [cm.getItemQuantity(item[0]), cm.getItemQuantity(item[1]), cm.getItemQuantity(item[2])];
                if (d[0] + d[1] + d[2] >= 10) {
                    cm.sendNext("有这些饰品应该足够了。拿着这个#b#i1113282##z1113282##k吧，这是含有我自己气息的戒指，希望有了它希望雷昂能够感受到我的存在……");
                    var e = 10;
                    for (var a = 0; a < item.length; a++) {
                        if (e > 0) {
                            e -= d[a];
                            cm.gainItem(item[a], -d[a])
                        }
                    }
                } else {
                    cm.dispose()
                }
            } else {
                if (status == a++) {
                    cm.forceStartQuest();
                    cm.gainItem(1113282, 1);
                    cm.dispose();
                    cm.forceCompleteQuest()
                }
            }
        }
    }
}

function end(c, b, a) {
    cm.dispose()
};