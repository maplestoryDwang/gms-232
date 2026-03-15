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
            cm.sendNormalTalk_Bottom("我以前上学时，也有些家伙喜欢用番茄酱来搞恶作剧。最后已经没人会上当了，就有家伙用糖浆和色素制作出了假的血~！", 37, 1530030, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("你这次说的也是你的故事吧？", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("吼，你挺机灵的嘛？", 37, 1530030, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("那边是什么人！", 37, 1530190, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("咳咳，是长相凶狠的看门大叔！\r\n在被发现之后，你最好快点逃跑。#h0#，这个地方是禁止出入的。\r\n#b（返回2年级教室，见见奥兹吧）#k", 37, 1530030, true, true)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(32861, "");
                                cm.updateInfoQuest(32720, "sms=151");
                                cm.updateInfoQuest(32719, "sms=1;gal=0;add=0");
                                cm.dispose();
                                cm.warp(330000000, 0)
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
            cm.sendNormalTalk_Bottom("你来啦，#h0#！你没有受伤吧？没有被鬼所迷惑吧？", 37, 1530110, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("……什么，番茄酱？\r\n这怎么可能。这么说，这次也是有人故意在搞恶作剧？", 37, 1530110, true, true)
            } else {
                if (status === a++) {
                    cm.dispose();
                    cm.warp(330002410, 0)
                }
            }
        }
    }
};