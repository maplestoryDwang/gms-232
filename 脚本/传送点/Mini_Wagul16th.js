function enter() {
    cm.openScriptNpc()
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(mode, type, selection) {
    var reactor = "action" + cm.getNumberFromQuestInfo(100266, "wagul");
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
            cm.sendNormalTalk_Bottom("YO！你对#r#e热闹监视塔#k#n感兴趣吗？那我就给你介绍一下，要仔细听YO！", 37, 9062175, false, true, 3)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#r#e热闹监视塔#k#n非常好盖！\r\n不过，这项工作要求投入大量的#b#e集中力#k#n，这是勇士应有的特质YO！", 37, 9062175, true, true, 3)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("当旁边出现一层层的楼层时，按#r#e空格#k#n键可以把它停放下来，这一步操作是最考验集中力的！", 37, 9062175, true, true, 3)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("当楼层停放在一定范围内时，会出现闪烁的特效，同时你将获得大量的#r新复古能量#k！就像这样YO！\r\n\r\n#i3801384#", 133, 9062175, true, true, 3)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("不过，就算没能在范围内停放楼层，也不一定会失败。只是所造楼层的宽度会缩窄。\r\n\r\n#i3801385#", 133, 9062175, true, true, 3)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("随着宽度逐渐变窄，想盖高会越来越难，这个不用我讲你也知道吧？所以说，这是个需要#r集中力#k的工作！", 37, 9062175, true, true, 3)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("每10层就会在楼层两侧插上纪念旗帜，你要是想知道监视塔盖到多少层了，就抬头数数旗帜吧！\r\n盖监视塔可以获得大量#r新复古能量#k，记住咯！\r\n\r\n#i3801386#", 133, 9062175, true, true, 3)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("你要认真建造监视塔YO！\r\n我会在这里关注你的训练情况的！", 37, 9062175, true, true, 3)
                                    } else {
                                        if (status === a++) {
                                            cm.updateInfoQuest(100252, "start=end");
                                            cm.setNumberForQuestInfo(100266, "wagul", 1);
                                            status = -1
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
            cm.askMenu_Bottom("要马上出发前往#b#e热闹监视塔#k#n的施工现场吗~？\r\n\r\n#r#e（游戏期间分辨率会变成1024x768。）#k\r\n\r\n#L0#进入#e<热闹监视塔>#n#l\r\n", 132, 9062175, 3)
        } else {
            if (status === a++) {
                if (b == 0) {
                    cm.warp(993105000, 0, false)
                }
                cm.dispose()
            }
        }
    }
};