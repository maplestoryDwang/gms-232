function enter() {
    cm.openScriptNpc()
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return
    }(mode == 1) ? status++ : status--;
    selectionLog[status] = selection;
    var i = -1;
    if (status <= i++) {
        cm.dispose()
    } else {
        if (status === i++) {
            cm.askMenu_Bottom("#b#e<魔王皮洛克>#n#k\r\n这条是通往魔王皮洛克藏身处的路。\r\n你准备好挑战#r魔王皮洛克#k了吗？\r\n\r\n#b#L0# 挑战<魔王皮洛克>。#l\r\n#L1# 查看我的记录。#l\r\n#L2# 聆听伯爵斯坦的介绍。#l", 132, 9062172, 3)
        } else {
            var reactor = "action分支" + selectionLog[1];
            eval(reactor)(mode, type, selection, i)
        }
    }
}

function action分支0(d, c, b, a) {
    if (status <= a++) {
        cm.dispose();
        cm.openNpc("新复古_魔王皮洛克")
    }
}

function action分支1(e, d, c, b) {
    if (status <= b++) {
        var a = cm.getNumberFromQuestInfo(100244, "record");
        if (a < 1000) {
            cm.sendNormalTalk_Bottom("你的最高纪录是 #n#b#e" + a + "分#n#k！请继续努力", 36, 9062172, false, true, 3)
        } else {
            if (a < 5000) {
                cm.sendNormalTalk_Bottom("你的最高纪录是 #n#b#e" + a + "分#n#k！真是了不起了！", 36, 9062172, false, true, 3)
            } else {
                cm.sendNormalTalk_Bottom("你的最高纪录是 #n#b#e" + a + "分#n#k！天哪，不愧是我们的勇士！", 36, 9062172, false, true, 3)
            }
        }
    } else {
        if (status === b++) {
            cm.dispose()
        }
    }
}

function action分支2(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom("#b#e<魔王皮洛克>#n#k\r\n\r\n我先给你介绍一下分数和奖励规则。\r\n根据你对#r魔王皮洛克#k和#r迷你皮洛克#k#b造成的伤害量#k，可以获得相应的分数。", 36, 9062172, false, true, 3)
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("#b#e<魔王皮洛克>#n#k\r\n\r\n#r魔王皮洛克#k共有10个血条，每消失一条，#b防御率#k和#b等级#k就会上升。\r\n随着#r魔王皮洛克#k越来越强，为获得1分需要造成的伤害量也会增加。", 132, 9062172, true, true, 3)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#b#e<魔王皮洛克>#n#k\r\n\r\n魔王的爪牙#r迷你皮洛克#k一次出现#e5个，总共召唤10次#n。\r\n一次召唤出的迷你皮洛克全部被消灭后，将出现#b防御率#k和#b等级#k上升的迷你皮洛克。\r\n和魔王一样，随着迷你皮洛克越来越强，为获得1分需要造成的伤害量也会增加。", 132, 9062172, true, true, 3)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#b#e<魔王皮洛克>#n#k\r\n\r\n根据在#b有限时间2分钟#k内造成的伤害量，可以#b最多获得1200分#k，#b每10分可以换成1个新复古币#k。\r\n如果在限制时间结束之前先达到1200分，则挑战结束。", 132, 9062172, true, true, 3)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#b#e<魔王皮洛克>#n#k\r\n\r\n虽然挑战次数不限，但#r每个世界只能领取1次#k#b新复古币#k，建议你按照最高的记录来领取。", 36, 9062172, true, false, 3)
                    } else {
                        if (status === a++) {
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};