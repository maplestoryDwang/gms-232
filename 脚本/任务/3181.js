var status = -1;

function start(e, d, c) {
    (e == 1) ? status++ : status--;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status == b++) {
            cm.askYesNo("要是……有谁听到了我的话……请过来跟我说会儿话……只要一小会儿就行！！")
        } else {
            if (status == b++) {
                cm.sendNext("你听到我的话了？呼……太好了……我还在想，要是没人听见我的话的话，我该怎么办……")
            } else {
                if (status == b++) {
                    cm.sendNext("我的名字叫#b#p2161004##k……为了寻找传说中的#b狮子王的勋章#k，我来到了这个地方……我在城堡的各处寻找勋章的时候……城堡突然开始摇晃，接着怪物就出现了……就在我慌慌张张地避开怪物逃走的时候……突然有个年轻人出现在了我的面前……")
                } else {
                    if (status == b++) {
                        cm.sendNext("那个年轻人说自己是#b狮子王班·雷昂#k，是这个城的主人……他说我未经允许就进入了城堡，然后把我变成了无法从这里离开的幽灵……可能是因为诅咒的缘故，虽然变成了幽灵，但感觉身体里有寒气在到处乱窜，身体像刀割一样地疼，从来都不会停歇……现在我光是这样说话，就已经非常痛苦了……")
                    } else {
                        if (status == b++) {
                            cm.sendNext("虽然我变成了这副模样……但是我想把这封信送给在远方等待着我的家人……你能帮我把这封信交给冰峰雪域的#b阿尔卡斯特#k吗？阿尔卡斯特会帮我把信转交给我的家人的……")
                        } else {
                            if (status == b++) {
                                if (!cm.haveItem(4032859)) {
                                    cm.gainItem(4032859, 1)
                                }
                                var a = cm.getQuestRecord(3181);
                                a.setStatus(1);
                                cm.getPlayer().updateQuest(a, true);
                                cm.sendNext("为了方便自己回去，我留了一个珍贵的魔法卷轴。我会用它把你送到#b冰峰雪域#k，帮我把信交绐阿尔卡斯特！")
                            } else {
                                if (status == b++) {
                                    cm.warp(211000000, 0);
                                    cm.OnStartNavigation(211000000, 1, "2020005", 3181);
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
    (d == 1) ? status++ : status--;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            if (cm.haveItem(4032859)) {
                cm.sendNext("嗯……给我的信？是谁给你的啊？")
            } else {
                cm.sendNext("信到底在哪里啊……别跟我开玩笑……");
                cm.dispose()
            }
        } else {
            if (status == a++) {
                cm.sendNext("呵呵……那个家伙……无视我的警告，最后变成了这个样子……啧啧……")
            } else {
                if (status == a++) {
                    cm.sendNext("几天前，#p2161004#来到了这里，说要到狮子王之城去寻找狮子王的勋章。不久前我在狮子王之城里感觉到了奇怪的气息，所以就劝他不要去，但是他却趁着夜深人静的时候溜了出去。")
                } else {
                    if (status == a++) {
                        cm.sendNext("为了找到他，我们派出了救援队。但是城里突然出现了怪物，我们没能找到他，结果变成了这个样子……")
                    } else {
                        if (status == a++) {
                            cm.sendOk("这封信我会交给他的家人的……")
                        } else {
                            if (status == a++) {
                                cm.gainItem(4032859, -1);
                                cm.forceCompleteQuest();
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
};