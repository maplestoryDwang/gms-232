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
            cm.sendNormalTalk_Bottom("怎么样，我所生活的城市的风景是不是很棒？这里就是#h0#你将要活动的城市了。需要的时候可以随时联系我，所以请把我的号码保存一下吧。", 37, 1530000, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo_Bottom("我要再次感谢你，谢谢你答应帮我。可是，#h0#你现在所穿的衣服……你的这种打扮，一定会引起大家怀疑的。你需要换上校服才行。天桥对面有一家校服店，你先去那里吧？", 37, 1530000)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("你到学校附近的校服店，说自己是转校生，就可以领取到校服了。\r\n\r\n#b（去找校服店的王都桑吧。）#k", 37, 1530000, false, true)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(32710, "");
                        cm.updateInfoQuest(32719, "add=1");
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
            cm.sendNormalTalk_Bottom("哎呦，真是忙死我了！休息不好的话，脸就会肿得更加厉害……这下可糟糕了。\r\n\r\n#b（这个面孔好像在哪里经常见呢……？）#k", 37, 1530340, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("嗯？你是谁呢？为什么装作认识我的样子？我可是第一次见你呢。", 37, 1530340, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("你是转校生？不过……哦，我的天啊！You Are So时装恐怖主义者！你要是想玩角色扮演的话，就好好玩，你这样子像什么！是打算给学校抹黑吗？", 37, 1530340, true, true)
                } else {
                    if (status === a++) {
                        cm.askMenu_Bottom("我现在很忙，你就简明扼要地说吧。来找我有什么事？\r\n#b\r\n#L0#神兽国际学校是什么意思？#l\r\n#L1#神兽国际学校的校服是怎么产生的？#l\r\n#L2#怎样才能获得校服？#l", 37, 1530340)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("神兽国际学校是什么意思？", 56, 0, false, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("你不是说自己是转校生吗？怎么连要上的学校都不知道？这是一所神兽财团旗下的国际学校，神兽国际学校！简称神兽学校！全国最奢侈、最有前景的学生都聚集在这里了。作为转校生，对于学校的这些基本情况总该了解的吧，不是吗？", 37, 1530340, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("你连这些基础的东西都不知道，看来还真是个转校生。可是，怎么办呢？我现在实在是太忙了，所以无法为你制作上乘的校服……你先等一下，只要一会儿就好！", 37, 1530340, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.forceStartQuest(32710, "");
                                        cm.gainExp(Math.pow(cm.getLevel(), 3));
                                        cm.forceCompleteQuest(32710);
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
};