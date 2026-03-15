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
            cm.sendNormalTalk_Bottom("#b（王都桑从角落里拿出了一样东西。）#k 来，掸掸上面的灰尘……我这次要特别免费送给你一个校服皮肤。不过下次可要拿刺针来才行哦，知道了吗？", 37, 1530340, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo_Bottom("你问我校服皮肤是什么？那就是可以把你所拥有的一套套装的外形变成校服的道具，这可是我王都桑的特别之作呢！是不是很惊讶啊？它可以覆盖在任何一套套装上，当然了，也包括你那身奇装异服。要不要现在就试试？", 37, 1530340)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(32711, "");
                    cm.sendNormalTalk_Bottom("好吧，百闻不如一见。你自己试试吧。\r\n\r\n#b（在消耗栏内双击校服皮肤就可以使用了。）#k", 37, 1530340, false, false);
                    cm.gainItem(2432788, 1)
                } else {
                    if (status === a++) {
                        cm.dispose()
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
            cm.sendNormalTalk_Bottom("你已经使用校服皮肤了吗？别忘了，只要拥有校服皮肤和一套套装的话，就可以制作出校服了！", 37, 1530340, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#b（好神奇啊……可以在保持原来套装所有性能不变的情况下，只更改服装的外形。）#k", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("不管怎样，虽然不是很完美，但我还是希望你能使用这样的校服。因为我现在实在是太忙了。我们店的所有裁缝现在都在为一个人的校服而忙碌着呢。", 37, 1530340, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("什么？你问我那个人是谁？这可真是个白痴的问题啊。在这所学校里，能穿得起如此奢侈的校服的人会是谁不是明摆着的吗？我不想再多费口舌了，你赶快走吧。", 37, 1530340, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("哦，对了！如果你没有套装的话，就再来找我吧。我可以把有DDM标记的套装低价卖给你。那么Bye~！Bye~！", 37, 1530340, true, true)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(32711, "");
                                cm.gainExp(Math.pow(cm.getLevel(), 3));
                                cm.forceCompleteQuest(32711);
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
};