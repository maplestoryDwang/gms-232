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
            cm.sendNormalTalk("嗯？是来参加抓蝎子大会的吗？噢，欢迎欢迎，参加是免费的。", 32, 2420018, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("抓蝎子大会是什么？就是#b抓住蝎子，并用我发放的绳子将其牢牢绑住的大会#k。如果#b在蝎子附近使用绳子#k，则能轻松抓住蝎子，新手也不例外。", 32, 2420018, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("只要抓住#b10只#k就可以了，完成之后和里边的卡乐卡萨对话，就可以出来了。", 32, 2420018, true, true)
                } else {
                    if (status === a++) {
                        cm.askAcceptDecline("如果你决定了的话，我就马上把你送进会场。怎么样？", 32, 2420018)
                    } else {
                        if (status === a++) {
                            cm.updateInfoQuest(40109, "");
                            cm.forceStartQuest(40109, "");
                            cm.gainItem(2270029, 10);
                            cm.dispose();
                            cm.warp(322090310, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/40109.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.gainExp(1220000);
            cm.forceCompleteQuest(40109);
            cm.gainItem(4033816, -10);
            cm.dispose()
        }
    }
};