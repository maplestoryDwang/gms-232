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
            cm.sendNormalTalk_Illus_II("嗯……我想不起来放哪儿了。那上面写着解除咒术的方法……反正不是什么重要的信。", 9130102, 4, false, true, false)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Illus_II("哈哈哈哈，真正的男人丢了#fn12#小#fn10#东西的时候就不应该斤斤计较！", 9130102, 4, true, true, false)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Illus_II("我记得，信上写着最近织田军中连普通士兵都学习了咒术，因此武将即使把伤养好也醒不过来。", 9130102, 4, true, true, false)
                } else {
                    if (status === a++) {
                        cm.askYesNo_Illus_II("为了解除那个咒术，需要做几件事。你能帮我吗？", 9130102, 0, false)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Illus_II("哈哈，我就知道你会帮我的。", 9130102, 4, false, true, false)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Illus_II("我们得先搜集有关咒术的情报。从这里的 #o9450024:#应该能获得一些线索吧？", 9130102, 4, true, true, false)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Illus_II("不用很多，只要30个就够分析了。那就拜托你啦！", 9130102, 4, true, true, false)
                                } else {
                                    if (status === a++) {
                                        cm.forceStartQuest(58902, "");
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
            cm.sendNormalTalk_Illus_II("你比我想象中还要快啊。谢谢你。", 9130102, 4, false, true, false)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Illus_II("我来看一看，有没有能解除咒术的方法。你就待会再来吧。", 9130102, 4, true, true, false)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(58902);
                    cm.gainItem(4034126, -30);
                    cm.dispose()
                }
            }
        }
    }
};