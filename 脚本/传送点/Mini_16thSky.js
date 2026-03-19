function enter() {
    cm.openScriptNpc()
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(mode, type, selection) {
    var reactor = "action" + cm.getNumberFromQuestInfo(100266, "16thSky");
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
            cm.teachSkill(80002377, 0, -1);
            cm.teachSkill(80002377, 1, 0);
            cm.sendNormalTalk_Bottom("\r\n你好YO！\r\n我是帮助新复古王国勇士们开展#b#e勇士修行#n#k的骑士甘迪YO！", 36, 9062175, false, true, 3)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("\r\n#r#e新复古飞越天际#n#k是在新复古王国上空进行的#e#b勇士修行#n#kYO！", 36, 9062175, true, true, 3)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("\r\n输入#r#e冲锋（→→）#n#k命令，在跑道上快速助跑，然后按#r#e跳跃键#n#k高高跳起，接着利用#r#e空格键#n#k打开#e气球#n，尽可能飞得远远的！", 36, 9062175, true, true, 3)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("\r\n飞行途中撞到空中漂浮的#e#b宝石#k#n时，可以获得#e#b新复古能量#n#kYO！", 36, 9062175, true, true, 3)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("\r\n#b#e天空点数#k#n达到一定水平时，#b#e飞行等级#n#k就会上升，并自动#b#e升级#k#n新复古气球，敬请期待YO~！", 36, 9062175, true, true, 3)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("\r\n现在明白新复古飞越天际怎么玩了吗~？\r\n那么，下面就去开展#b#e勇士修行#n#k吧！希望你能飞得更高！！更远！！", 36, 9062175, true, true, 3);
                                cm.setNumberForQuestInfo(100266, "16thSky", 1);
                                cm.updateInfoQuest(16625, "ark=0;distance=0");
                                cm.updateInfoQuest(100272, "start=1;sky=0;lv=1;T2=200718232137591;T=200718232137591");
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
            cm.askYesNo_Bottom("\r\n飞得更高！！更远！！#b#e新复古飞越天际！#n#k\r\n要马上开启#b#e新复古飞越天际#n#k吗~？", 37, 9062175, 3)
        } else {
            if (status === a++) {
                cm.warp(993107201, 0, false);
                cm.dispose()
            }
        }
    }
};