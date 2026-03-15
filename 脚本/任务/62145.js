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
            cm.sendNormalTalk_Bottom("与真正的僵尸面对面后，你应该看清楚僵尸的模样了吧！", 37, 9310540, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("每个僵尸身上都贴着符咒。那个符咒可以控制僵尸的行动。可现在那些僵尸可以自如行动，说明那些符咒失效了！", 37, 9310540, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("看来我们必须制作新的符咒，然后重新给它们贴上。\r\n为了制作符咒，需要拿到贴在僵尸身上的#t4009373:#。用#t4009360#写一个新的符咒，然后重新贴到僵尸身上，这样就能让那些僵尸再次变得老实！", 37, 9310540, true, true)
                } else {
                    if (status === a++) {
                        cm.askMenu_Bottom("具备英雄潜质的人啊……你应该也能完成这次的任务吧？\r\n\r\n#b#L0#这个方法好像比泼洒红豆粥靠谱些。反正也没啥损失，去试试看吧！#l \r\n#L1#这个道士的话实在无法令人信服，别理他了，走吧。#l", 37, 9310540)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(62145, "");
                            cm.sendNormalTalk_Bottom("很好！那么，你去#m701103010#消灭僵尸，搜集50个#i4009373:##t4009373#。再到上海外围的#m701102000#抓鸡，搜集50个#i4009360:##t4009360#，然后再……", 37, 9310540, false, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("……以前在书写符咒时，需要支付相应的费用，这样才能使符咒发挥出效果……你可以将其理解成‘香火费’……每个符咒需要收取50000金币，所以你需要带来50万金币。", 37, 9310540, true, false)
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
        if (status == a++) {
            cm.sendNormalTalk_Bottom("啊，你把金币……哦，不对不对，你把#t4009373:#和新鲜的#t4009360:#拿来了啊？", 37, 9310540, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("你稍等一下……我现在马上就为你写符咒", 37, 9310540, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(62145);
                    cm.updateInfoQuest(62145, "chk=1");
                    cm.addNumberForQuestInfo(62109, "yuyuanPoint", 3);
                    cm.gainItem(4009373, -50);
                    cm.gainItem(4009360, -50);
                    cm.dispose()
                }
            }
        }
    }
};