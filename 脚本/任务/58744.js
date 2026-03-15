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
            cm.sendNormalTalk("喂，我有事拜托你！\r\n我听说你正在调查鵺大人。", 4, 9112009, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("哈？！\r\n（糟糕！难不成被发现了！）", 16, 9112009, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("真不愧是鵺大人！现在连生者都追随他了！\r\n言归正传，你需不需要亡者窟入场券？", 4, 9112009, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("啊，哦……我需要。\r\n（幸好……他好像没怀疑我。）", 16, 9112009, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("呵呵，太好了。不瞒你说，我最近正在保养皮肤哦。\r\n我听说鵺大人在活动中发放的黑色圣水对皮肤有超好的疗效……\r\n如果你能帮我弄些来，我就用这入场券跟你交换", 4, 9112009, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("……黑色圣水的话，你应该比我更容易弄到吧……\r\n你知道的，我没法进入接见室。", 16, 9112009, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("咦~啧啧，你不知道啊。\r\n黑色圣水是随机发放的，所以不是那么容易得到的呢。不是你参加了活动就会给你的哦。\r\n一般来说，在活动中只能得到再次入场券或超级药水。", 4, 9112009, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("虽说有极小概率可以获得与鵺大人共处的机会……\r\n可我运气太差，从来没获得过那样的特殊奖励。", 4, 9112009, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("…………", 16, 9112009, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("其他亡灵都很容易获得黑色圣水呢……呜！", 4, 9112009, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("正因为如此，常常有获得黑色圣水的人将其拿出来暗中交易……\r\n你知道哒，我身体很弱，跟其他亡灵交流的话，就会过敏发作。\r\n所以，请你快帮我去弄来黑色圣水吧", 4, 9112009, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("哦……哈？好吧，我知道了。\r\n（不管怎样，既然它答应帮我入场，去搜集点黑色圣水给它吧。)", 16, 9112009, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.forceStartQuest(58744, "");
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
            }
        }
    }
}

function stage0(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/58744.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
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
            cm.askYesNo("噢！你真的弄来了！！快，快给我！！\r\n（接受时，将移动到开展战斗的活动地图。）", 4, 9112009)
        } else {
            if (status === a++) {
                cm.dispose();
                cm.openNpc("蘑菇神社_亡者窟1")
            }
        }
    }
};