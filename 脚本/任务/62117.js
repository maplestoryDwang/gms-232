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
            cm.sendNormalTalk_Bottom("啊！不好啦。怎么办啊？", 37, 9310533, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("出什么事了？", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("哎呀，豫园里发生了一些状况，我现在要马上赶往现场。可巡逻摩托的轮胎没气儿了，真是无语了！\r\n呼，只有我出马才能把事件圆满解决……所以我得马上赶过去才行，真是急死我了。我总不能跑着去吧……", 37, 9310533, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("你有什么好办法吗？急死我了，真是急死我了……", 37, 9310533, true, true)
                    } else {
                        if (status === a++) {
                            cm.askYesNo_Bottom("(……恩……啊！我去南京路搜集来#o9600310#的轮子，然后帮你修理吧？)", 57, 0)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("警官，请你稍等一下。我去搜集轮子！", 57, 0, false, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("(搜集50个#o9600310#的轮子吧。50个应该差不多了！)", 57, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.forceStartQuest(62117, "");
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
            cm.sendNormalTalk_Bottom("哎？你真的带轮子回来了啊？", 37, 9310533, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(62117);
                cm.updateInfoQuest(62117, "chk=1");
                cm.addNumberForQuestInfo(62109, "yuyuanPoint", 5);
                cm.sendNormalTalk_Bottom("哇！你真的帮我修好了巡逻摩托啊！非常感谢。真不知该怎么报答你……请问你叫什么名字？", 37, 9310533, true, true);
                cm.gainItem(4009368, -50)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("啊，我叫#h0#。", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#h0#……我记住了。\r\n 我是豫园最好的警察，#p9310533#。几乎豫园里的所有的事件都是由我来处理的。呼，像我这么优秀的警察能记住你，你应该感到光荣才对啊！\r\n好了。我要出发了。再见啦~！", 37, 9310533, true, false)
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