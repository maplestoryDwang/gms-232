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
            cm.sendNormalTalk_Bottom("怎么回事，你这人？我虽然承认你的运动神经比较好，但请你以后离我们希纳斯小姐远点。", 37, 1530360, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("……？有什么我不能和她说话的理由吗？", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("哼，你以为我不知道你们这种平民心里打的什么算盘吗？为了听到‘你是第一个打我的人’这句话而去打贵族家的少爷或者小姐，这可是现在的最新流行呢。你是不是电视剧看多了？我把话说在前头，像那种电视剧里的情况是绝对不会发生的，你趁早别做梦了。", 37, 1530360, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("……？#b（电视剧……电视剧是什么？）#k", 56, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("上课铃声都响了，你怎么还在这儿晃悠呢？要是不赶快进教室的话就该迟到了。", 37, 1530360, true, true)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(32714, "");
                                cm.sendNormalTalk_Bottom("#b（金司机开着车消失在了远处。）#k\r\n\r\n这里是哪儿，而我又是谁呢……？虽然情况有些混乱，但现在还不是纠结这些的时候。还是先进学校吧。不管怎样，一定可以适应的。", 56, 0, true, false)
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