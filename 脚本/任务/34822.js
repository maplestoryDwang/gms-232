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
        if (status === a++) {
            cm.sendNormalTalk_Bottom("事情我都听狂龙战士说了。你是在寻找有关#b其他次元#k的信息吧？", 36, 3000003, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("抱歉。我无意中听到了你和贝尔德大人的对话。", 37, 3000149, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("如果可以，能告诉我你为什么一定要去#b其他次元#k吗？", 37, 3000003, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#虽然不能详细告诉你，但我们寻找的东西在#b异次元#k。那东西说不定能阻止吉伦·达尔莫尔的暴走。", 37, 3001354, true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("阻止吉伦·达尔莫尔……？！", 37, 3000149, true, true, 1)
                        } else {
                            if (status === a++) {
                                cm.askAcceptDecline_Bottom("话说敌人的敌人就是朋友。你相信我能帮你前往#b异次元#k吗？前提是需要找到点材料。", 36, 3000003, 1)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(34822, "");
                                    cm.sendNormalTalk_Bottom("#face0#如果你愿意……那就太感谢了。我该做些什么？", 37, 3001354, false, true, 1)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("去#b#m400010400##k消灭#o2400014#，然后带#b30个#t4036172##k回来就行了。", 37, 3000003, true, true, 1)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#通往#b#m400010400##k的向导即将开始。", 37, 3001300, true, true, 1);
                                            cm.OnStartNavigation(400010400, 0, "", 34822);
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
            cm.forceCompleteQuest(34822);
            cm.updateInfoQuest(34822, "exp=1");
            cm.sendNormalTalk_Bottom("你竟然这么快就拿到了，太好了。", 37, 3000003, false, true, 1);
            cm.gainItem(4036172, -30);
            cm.dispose();
            cm.getPlayer().levelUp()
        }
    }
};