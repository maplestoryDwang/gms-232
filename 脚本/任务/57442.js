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
            cm.sendNormalTalk_Bottom("#face0#什么？你是问我，最近有没有在果林附近看到什么可疑人物？这个嘛，见是见到了。前几天，太上直接来果林查看的时候，有一些过去从没见过的人从果林附近走过。", 37, 2091003, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#另外，不知道是不是巧合，那些人离开后，一直居住在果林的魔物猿公突然变得特别凶暴。而且，天鹿也变得和之前不一样了。", 37, 2091003, true, true)
            } else {
                if (status === a++) {
                    cm.askAcceptDecline_Bottom("#face0#このままでは大事な天桃の果樹園が無茶苦茶になってしまいます。お願いします、モモサルと天鹿たちをちょっとこらしめてくれませんか？", 37, 2091003)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#谢谢你。只要能给它们一点小惩大诫，相信它们就不会再来果林捣乱了吧。", 37, 2091003, false, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#不是吧……再这么下去，太上交给我负责的果林就要彻底毁在它们的手里了。你就来帮帮我吧。", 37, 2091003, true, true)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(57442, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/57442.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#击退猿公和天鹿还顺利吗？", 37, 2091003, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#谢谢你。它们总算是老实下来了。这么一来，今年的收成就不会受到什么太大的影响了。", 37, 2091003, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#什么？你说找到了证据，证明是当时那些陌生人让猿公和天鹿变得这么凶暴的？他们为什么要做这种事啊？如果他们只是想来果林捣乱，明明有更多更有效的方法啊……", 37, 2091003, true, true)
                } else {
                    if (status === a++) {
                        cm.gainItem(4033275, -20);
                        cm.forceCompleteQuest(57442);
                        cm.gainExp(987860);
                        cm.dispose()
                    }
                }
            }
        }
    }
};