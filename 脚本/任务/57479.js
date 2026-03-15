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
            cm.sendNormalTalk_Illus("你好啊，#h0#。我是#b#m807000000##k联盟成员，我名为#b#p9130021##k。", 9130021, 4, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Illus("你有没有听说#b#p9130090##k这个名字？他不仅是我们的敌人，还是威胁到冒险岛和平的新势力——织田军的阴阳师首领。", 9130021, 4, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Illus("#b#p9130090##k是个非常危险的人。他虽然年纪不大，却非常聪明，非常厉害。同时，他也拥有强大的野心。但问题就是，他的野心已经彻底扭曲了。", 9130021, 4, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Illus("正是他主导了魔王降临仪式，导致出现了此次异常问题。可以说，之所以织田军和我们联合军会来到冒险岛，都是因为他的缘故。", 9130021, 4, true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.askAcceptDecline_Illus("这个#b#p9130090##k在冰峰雪域山脉废矿坑的深处建造了一个祭坛。据说，是在准备进行一些目的不明的奇怪仪式。我们都很担心，不知道他是不是在准备进行新的魔王降临仪式。可不可以请#h0#你前去阻止他的行径呢？", 9130021, 4, 1)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(57479, "");
                                cm.sendNormalTalk_Illus("真是太谢谢你了。那就请你立刻前往冰峰雪域山脉的#b#m211041700##k，去那里寻找#b#p9130087##k吧。具体情况他会告诉你的。", 9130021, 4, false, true, 1)
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
        if (status === a++) {
            cm.forceCompleteQuest();
            cm.dispose()
        }
    }
};