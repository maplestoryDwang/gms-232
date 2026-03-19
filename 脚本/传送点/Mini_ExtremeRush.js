function enter() {
    cm.openScriptNpc()
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(mode, type, selection) {
    var reactor = "action" + cm.getNumberFromQuestInfo(100266, "extreme");
    eval(reactor)(mode, type, selection)
}

function action0(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("\r\n你好YO！YO！\r\n我是帮助新复古王国勇士们开展#b#e勇士修行#n#k的骑士甘迪YO！", 36, 9062175, false, true, 3)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("\r\n有种光听名字就很威风的#b#e银色野猪！\r\n你听说过吗！#n#k", 36, 9062175, true, true, 3)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("\r\n骑上坚韧的银色野猪飞驰，练习沿途躲避设置的障碍物吧！\r\n", 36, 9062175, true, true, 3)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("\r\n一阵风驰电掣的疾驰下来，爆发力和集中力不知不觉就蹭蹭提高了！\r\n", 36, 9062175, true, true, 3)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("\r\n作为真正的勇士，爆发力、集中力是必备的YO？\r\n", 36, 9062175, true, true, 3)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("\r\n在不碰到障碍物的情况下跑得越远，速度会渐渐加快，可以收集到更多新复古能量YO！\r\n", 36, 9062175, true, true, 3);
                                cm.setNumberForQuestInfo(100266, "extreme", 1);
                                status = -1
                            }
                        }
                    }
                }
            }
        }
    }
}

function action1(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.askMenu_Bottom("#b#e跑吧！银色野猪！#n#k\r\n在突然出现的障碍物之间飞速疾驰，锻炼#b#e爆发力#n#k吧~！\r\n\r\n要马上开始#b#e竞速疾跑#n#k吗~？\r\n#r（游戏期间分辨率会变成1366x768。）#k\r\n\r\n#L0#进入#e<竞速疾跑>#n#l\r\n", 132, 9062175, 3)
        } else {
            if (status === a++) {
                if (b == 0) {
                    cm.warp(993105500, 0, false)
                }
                cm.dispose()
            }
        }
    }
};