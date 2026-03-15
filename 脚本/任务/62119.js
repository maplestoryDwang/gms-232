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
            cm.sendNormalTalk_Bottom("好久不见，#h0#！最近可好？\r\n我还是老样子……那些鬼怪和僵尸总是出现，无论怎么消灭都消灭不干净。", 37, 9310533, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("这次我们计划去外滩消灭一些僵尸。虽然无法将它们全部消灭掉，但起码……", 37, 9310533, true, true)
            } else {
                if (status === a++) {
                    cm.askYesNo_Bottom("#h0#上次你消灭了很多鬼怪，真是帮了我们大忙。\r\n所以……我能否厚着脸皮请你再来帮我们一次呢？", 37, 9310533)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(62119, "");
                        cm.sendNormalTalk_Bottom("太好了！谢谢你。穿过南京路，到达外滩，你就能发现僵尸。", 37, 9310533, false, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("拜托你消灭100只#o9600315#、100只#o9600316#和100只#o9600317#。#h0#，以你的实力，肯定立马就能解决。", 37, 9310533, true, false)
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
            cm.sendNormalTalk_Bottom("真不愧是#h0#啊。居然这么快就解决了……", 37, 9310533, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(62119);
                cm.updateInfoQuest(62119, "chk=1");
                cm.addNumberForQuestInfo(62109, "yuyuanPoint", 3);
                cm.sendNormalTalk_Bottom("我要厚着脸皮请求你下次也来帮助我们。有你这么值得信赖的伙伴，让我很受鼓舞啊。呼", 37, 9310533, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("哈哈，下次也要多多拜托你啊！", 37, 9310533, true, false)
                } else {
                    if (status === a++) {
                        cm.dispose()
                    }
                }
            }
        }
    }
};