var status = -1;

function start(d, c, b) {
    if (d === 0) {
        status--
    } else {
        status++
    }
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNormalTalk("你好，#b#e#h0##n#k！\r\n我想为来自#e#b冒险岛世界#k#n的勇士提供一些帮助！", 4, 9010000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("你知道#i2030059##e#b[回城卷轴]#k#n吗？", 4, 9010000, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("#e#b[回城卷轴]#k#n\r\n是可以从你当前所在位置移动到#r#e最近的村庄#k#n的道具。\r\n在狩猎的过程中想要回到村庄时使用，可以节约走路的时间，因此是非常有用的道具。", 4, 9010000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#e#r使用之后会立即移动#k#n到村庄，并消耗#e#r一个#k#n回城卷轴。\r\n此外，在部分#e#r无法传送的地区#k#n无法使用回城卷轴。希望你能记住这些。", 4, 9010000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("最后，#b[回城卷轴]#k#n可以在附近村庄的#b#e杂货商人#n#k那里购买。", 4, 9010000, true, true)
                        } else {
                            if (status === a++) {
                                cm.askYesNo("现在我可以送你一些#b[回城卷轴]#k。\r\n你想现在领取#i2030059##e#b10个[回城卷轴]#k#n吗？", 4, 9010000)
                            } else {
                                if (status === a++) {
                                    cm.forceCompleteQuest(16880);
                                    cm.sendNormalTalk("#i2030059##e#b10个[回城卷轴]#k#n已经送给你了\r\n\r\n#e#b#h0##k#n，希望在冒险的时候能对你有用！", 4, 9010000, false, false);
                                    cm.gainItem(2030059, 10);
                                    cm.dispose()
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};