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
            cm.sendNormalTalk_Bottom("你想进行测试？嗯 ，好吧！不过，如果你不是人类，而是僵尸或者鬼怪的话，我劝你还是放弃吧。", 37, 9310532, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo_Bottom("测试很简单。去找豫园的厨师#p9310536#大叔，带来红豆粥和蒜就可以了。很简单吧？", 37, 9310532)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(62112, "");
                    cm.sendNormalTalk_Bottom("那也算测试？是不是太简单了啊？", 57, 0, false, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("哼，废话少说，你快点去收集来红豆粥和蒜吧。我以后会跟你详细说明的。", 37, 9310532, true, false)
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
            cm.sendNormalTalk_Bottom("我从来没见过你啊，你是第一次来豫园吧。", 37, 9310536, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("啊啊-你问我为何会知道？呵呵，我可是豫园唯一的厨师啊。住在豫园的人，没有一个没在我的餐厅吃过饭！所以说，你要么是僵尸，不吃饭就能存活。要么就是头一次来豫园，我分析得没错吗？", 37, 9310536, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("好了！这是#i4034643:##t4034643#和#i4034656:##t4034656#，请拿好！", 37, 9310536, true, true)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(62112);
                        cm.forceStartQuest(62113, "");
                        cm.sendNormalTalk_Bottom("我都还没说呢，你怎么就已经猜到了？", 57, 0, true, true);
                        cm.gainItem(4034643, 1);
                        cm.gainItem(4034656, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("不用猜都知道！这肯定是#p9310532#给你这个头一回来豫园的异邦人准备的测试吧。#p9310532#真是太刻板了！你一看就是个正常的人类啊，居然还给你做这种测试。", 37, 9310536, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("等一下，你们一直在说什么人类啊，僵尸啊的，我有点不明白呢……", 57, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("啊，这个嘛，#p9310532#会为你详细说明的，你快回陈龙那边去吧！", 37, 9310536, true, false)
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