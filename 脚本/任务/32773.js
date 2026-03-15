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
            cm.sendNormalTalk_Bottom("有一种名为安慰剂效果的说法。换句话说就是没有药效仅仅能产生心理作用的治疗效果。\r\n也就是拿假药来充当真药，给患者吃了之后，能够让其病情好转。即使没有医学成分，也能从心理上给人以安慰。", 37, 1530030, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("这么说，随便拿一种药给他吃就行了。", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.askYesNo_Bottom("嗯，就随便给他拿一种治疗便秘的药吧。", 37, 1530030)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("你把这里的怪物消灭之后就可以获得通便药了。\r\n\r\n#b（在尘土地带将尘土怪消灭，然后寻找通便药吧。12个应该足够了！）#k", 37, 1530030, false, true)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(32773, "");
                            cm.dispose()
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
            cm.sendNormalTalk_Bottom("呃呃……发烧烧得我就快死翘翘了。这是什么药啊……？", 36, 1530140, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("听说这是退烧的特效药呢。", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("真的吗……？\r\n\r\n#b（弗朗西斯虽然有些怀疑，但还是一下子把药吞了下去。）#k", 36, 1530140, true, true)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(32773, "");
                        cm.forceCompleteQuest(32773);
                        cm.sendNormalTalk_Bottom("呼，多亏了你给我拿的药，现在感觉好多了。果然是患难见真情啊。", 36, 1530140, true, false);
                        cm.gainItem(4034172, -12)
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