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
            cm.forceStartQuest();
            cm.dispose()
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
            cm.askMenu("在#b#ho##k看来，大火经纪公司的新人歌手是哪位？\r\n\r\n\r\n#b#L0#露比#l#k\r\n#b#L1#萨皮#l#k\r\n#b#L2#佩里#l#k\r\n#b#L3#阿米#l#k\r\n#b#L4#……挑不出来。#l#k\r\n", 0, 1052203)
        } else {
            if (status === a++) {
                if (b == 0) {
                    cm.dispose();
                    cm.sendNormalTalk("露比虽然唱功还有些青涩，但她的嗓音独具魅力，能够牵动人心，而且也自信心十足，那就定露比吧……不过，其他候选人……", 0, 1052203, false, false)
                } else {
                    if (b == 1) {
                        cm.dispose();
                        cm.sendNormalTalk("萨皮在各个方面都多才多艺，更何况，她的笑容十分有魅力，能够点亮周围，那就定萨皮吧……不过，其他候选人……", 0, 1052203, false, false)
                    } else {
                        if (b == 2) {
                            cm.dispose();
                            cm.sendNormalTalk("佩里是个努力派，而且也很有感性，她说她是自己练习的，唱功也不俗，那就定佩里吧……不过，其他候选人……", 0, 1052203, false, false)
                        } else {
                            if (b == 3) {
                                cm.dispose();
                                cm.sendNormalTalk("阿米的音色有一股神秘的魅力，跟她独特的高冷形象也很搭，另外论实力，她也算是所有歌手志愿生中最顶尖的，那就定阿米吧……不过，其他候选人……", 0, 1052203, false, false)
                            } else {
                                cm.forceCompleteQuest(34417);
                                cm.sendNormalTalk("……是吧，我也觉得非要选出一个人有点难，所以我的结论是……", 0, 1052203, false, true)
                            }
                        }
                    }
                }
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("……我希望这四位全都可以参加我的新歌！作为一个新人组合！", 0, 1052203, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("四位都有着各自不同的魅力，另外综合实力和潜力来看，也很难分出高下。", 0, 1052203, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("……而且，我也想象过将四个人组成一个组合时的样子，应该能够打造出一个让她们各自的魅力都更加出彩的组合来，所以我下定决心了。", 0, 1052203, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("哈哈，现在只要将这个好消息告诉这四位就行，那现在就开始进行出道的准备工作吧……", 0, 1052203, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("哎哟，迪亚上哪儿去了？", 0, 1052203, true, false)
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
};