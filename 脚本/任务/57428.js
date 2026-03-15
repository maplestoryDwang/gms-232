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
            cm.sendNormalTalk_Bottom("#face0#神那，好久不见了。有一件事情必须要尽快告诉你，所以我才写了这封信。", 37, 1101002, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#你有没有听说过神秘岛这个地方？在神秘岛一个名为#b#m211000000##k的城镇附近，有人发现了织田军的痕迹。无论是这些人的装饰，还是他们身上的家纹图案，都和神那所描述的织田军完全一致，相信应该就是他们没错。", 37, 1101002, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#这些织田军应该正在打着什么鬼主意。我总有一种非常不好的预感。", 37, 1101002, true, true)
                } else {
                    if (status === a++) {
                        cm.askAcceptDecline_Bottom("#face0#请你尽快赶往这个名为#b#m211000000##k的城镇。详细情况可以直接向你那边的#b#p2020005##k进行询问。", 37, 1101002)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(57428, "");
                            cm.OnStartNavigation(130000210, 1, "1100003", 0);
                            cm.sendNormalTalk_Bottom("#face0#冰峰雪域啊……我似乎曾经听说过这里，应该是个非常寒冷的地方吧？我最不喜欢寒冷的地方了……", 37, 9130081, false, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("毛兽居然会感觉到寒冷，真是太丢脸了。", 57, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#听说有些白狐就住在寒冷的地方，但我可不一样！我从小就生在温暖的地方，一直过得非常养尊处优！", 37, 9130081, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("不管怎么说，既然织田军已经出现了，就必须直接去看看情况才行。#b#m211000000##k啊……可以从大陆的中心#b#m200000000##k直接前往吧？看来我可以先前往#b#m200000000##k，去调查一下该如何前往#b#m211000000##k吧。", 57, 0, true, true)
                                    } else {
                                        if (status == a++) {
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
            cm.sendNormalTalk_Bottom("#face0#嗯？这不是神那吗？", 37, 9130022, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(57428);
                cm.updateInfoQuest(15710, "lasttime=19/11/27/18/00");
                cm.gainExp(8000);
                cm.dispose()
            }
        }
    }
};