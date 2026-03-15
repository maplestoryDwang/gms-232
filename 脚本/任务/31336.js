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
            cm.sendNormalTalk("怎么？你是我的粉丝吗？看来我骑士卡布的名声终于在冒险岛世界中传扬开来了。我要事先申明，我的签名可是很贵的，大概1亿金币？", 0, 2210002, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("真是个没有幽默感的朋友。\r\n我来自我介绍一下。我叫卡布！注意发音。如果说成是“卡普”或“卡波”的话，小心屁股被我踢，哈哈哈！", 0, 2210002, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("哎呀，长话短说，直奔主题？我喜欢像你这样的人。人生中最重要的是速度。\r\n到岩壁巨人那里去的路很高、很遥远，也很险峻，靠自己的两条腿是没办法过去的。不过有我卡布的骑宠的话，就另说了！当然，如果你能好好当我的助手的话。", 0, 2210002, true, true)
                } else {
                    if (status === a++) {
                        cm.askYesNo("很简单。往前走的事情交给我！你只要坐在助手座位上负责其他事情就行。百闻不如一见。要试试看吗，朋友？", 0, 2210002)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("我就喜欢你这样的人，朋友！那我们出发吧！", 1, 2210002, false, true)
                        } else {
                            if (status === a++) {
                                cm.dispose();
                                cm.warp(924030001, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/31336.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的结束脚本还没有修复哦。它的脚本位于： #b /脚本/任务/#e" + e + "#n.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻完成这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceCompleteQuest();
                cm.dispose()
            }
        }
    }
};