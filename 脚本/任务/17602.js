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
            cm.sendNormalTalk_Bottom("根据情报，凯梅尔兹的人们非常讨厌被其他国家的影响力所左右。所以才会自成一家，宣布建立“共和国”。女皇大人的意图虽然不是那样，但凯梅尔兹共和国可能会以为我们是在要求和他们成为从属关系。那么我们和凯梅尔兹共和国的关系就可能变得非常糟糕，我们必须避免这样的事情。", 36, 1540451, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("为了避免这样的误会，我们必须非常慎重地接近他们。如果可以，在转达女皇大人的信息之前，最好能够先获得他们的信赖。女皇大人应该也是由于这个原因才会选择了你而不是单纯的信使。希望你一定不要辜负女皇大人的期待。", 36, 1540451, true, true)
            } else {
                if (status === a++) {
                    cm.askYesNo_Bottom("我已经准备了前往凯梅尔兹的船只。请你去明珠港，找到叫做“帕尔巴特”的探险家。他会带你去凯梅尔兹的。如果你准备好了，就请去明珠港吧。\r\n#b(接受时立刻前往明珠港。)", 36, 1540451)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(17602, "");
                        cm.dispose();
                        cm.warp(104000000, 5)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/17602.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("噢，好啊，你终于来啦！你就是那个人说的#h0#吧？你可让我这个老头等了很久啊！", 0, 9390200, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(17602);
                cm.dispose()
            }
        }
    }
};