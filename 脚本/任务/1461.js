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
            cm.sendNormalTalk("做好接受新力量的准备了吗？那么现在该去见见女神了。", 4, 2140001, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("据说，在太初的黑暗时期，女神们借助艾尔达创造了现在的世界。\r\n\r\n而且，听说无论是人类，还是精灵、魔族和龙族，其中都有极少数人获得了女神所传授的#b控制艾尔达的能力#k。", 4, 2140001, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("#b女神#k们也许知道方法。从古至今，是女神们将艾尔达和人类连接在了一起。\r\n\r\n你最好到我告诉你的地方去，见见女神们。", 4, 2140001, true, true)
                } else {
                    if (status === a++) {
                        cm.askYesNo("#fUI/tutorial.img/5skill/0/0#\r\n\r\n冒险岛世界的女神在#b射手村的弓箭手培训中心#k，格兰蒂斯的女神在#b万神殿的大神殿内部#k，绯红的女神在#b堕落世界树的废弃营地#k。相信你一定可以找到通往女神那里的路。", 4, 2140001)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(1461, "");
                            cm.sendNormalTalk("如果你迷路了，可以随时来找我。\r\n\r\n#b(去见见分散在冒险岛各处的女神，然后再回来吧。)#k", 4, 2140001, false, false)
                        } else {
                            if (status === a++) {
                                cm.dispose()
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
            cm.sendNormalTalk("你果然通过了女神的考验。", 4, 2140001, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(1461);
                cm.dispose()
            }
        }
    }
};