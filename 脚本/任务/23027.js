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
            cm.forceStartQuest(23027, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/23027.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("我来告诉你可以变成更强大的机械师的方法吧。#h0#乘坐的金属机甲可以能过装上各种其他部件来提升能力。这些部件有引擎、晶体管、手臂、腿、机身等5种。", 0, 2151004, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("虽然用单个部件也能对金属盔甲进行升级，但如果能全部装上同类部件，就能让能力有极大的提升。", 0, 2151004, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("你想知道如何才能获得部件？你在普通区域狩猎就可以获得适用于金属机甲的部件。", 0, 2151004, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("另外，镀铜、青铜部件还可以从#p2150001#那里获得。现在还不能找到更好的部件，也许会在其他怪物身上。", 0, 2151004, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("刚好我这里有个剩余的引擎，先给你用吧。希望这个能帮到#h0#。", 0, 2151004, true, true);
                            cm.forceCompleteQuest(23027);
                            cm.gainItem(1612000, 1);
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};