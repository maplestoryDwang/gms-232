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
            cm.sendNormalTalk_Bottom("哈……", 37, 9310536, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("怎么又叹气了……是不是食材又不够了？", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("不是……不是因为那个……实际上，这些食材，让我想起了一个人……", 37, 9310536, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("是谁啊？", 57, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("来豫园避难之前，我曾经是外滩酒店的厨师长。那时候由上海最好的农场为我们提供最好的食材，所以制作料理时根本不用担心食材短缺的问题……", 37, 9310536, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("那个农场位于上海外围，那里出产的肉类和牛奶在当时都是品质最好的。可那个农场的主人#p9310539#却好像并没有来豫园避难。", 37, 9310536, true, true)
                            } else {
                                if (status === a++) {
                                    cm.askYesNo_Bottom("他非常热爱自己的农场，说不定现在还留在农场里呢。目前到处都有危险，真不知他是死是活……\r\n你能帮我去找找他吗？", 37, 9310536)
                                } else {
                                    if (status === a++) {
                                        cm.forceStartQuest(62123, "");
                                        cm.sendNormalTalk_Bottom("哦哦！真的吗？真是谢谢你。农场位于上海外围。要是你找到了他，请一定要把他带到豫园来……他是个很固执的人，也许会不肯来，但还是希望你……", 37, 9310536, false, false)
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
            cm.sendNormalTalk_Bottom("你是谁啊？咳咳咳", 37, 9310539, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(62123);
                cm.updateInfoQuest(62123, "chk=1");
                cm.addNumberForQuestInfo(62109, "yuyuanPoint", 2);
                cm.sendNormalTalk_Bottom("啊……你是那个厨师#p9310536#派来的啊？咳咳咳，那人净爱管闲事，还干些没用的事情。", 37, 9310539, true, false)
            } else {
                if (status == a++) {
                    cm.dispose()
                }
            }
        }
    }
};