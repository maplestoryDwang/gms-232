var status = -1;
var selectionLog = [];
function start() {
    action(1, 0, 0);
}
function action(f, W, U) {
    if (status == 0 && f == 0) {
        cm.dispose();
        return;
    }
    if (f == 1) {
        status++;
    } else {
        status--;
    }
    selectionLog[status] = U;
    var V = -1;
    if (status <= V++) {
        cm.dispose();
    } else {
        if (status === V++) {
            if (cm.isQuestFinished(17007)) {
                cm.askMenu("你好，#e#b#h0##k#n。欢迎来到凯梅尔兹交易所。\r\n#b\r\n#L0#进行贸易。#l#b\r\n#L1#申请个人破产补贴#l#b\r\n#L3#手动充能舰船能量#l#b\r\n#L4#手动补充贸易品#l", 0, 9390220);
            } else {
                cm.sendNormalTalk("只有完成了教程任务，才能进行交易！", 0, 9390220, false, false);
                cm.dispose();
            }
        } else {
            var w = "action分支" + selectionLog[1];
            eval(w)(f, W, U, V);
        }
    }
}
function action分支0(f, W, U, V) {
    if (status <= V++) {
        if (cm.getNumberFromQuestInfo(17010, "success") == 0) {
            cm.sendNext("很不幸，你的上一次交易由于失去你的掌舵而失败了。没有交易收益可以领取。");
        } else {
            var w = cm.getNumberFromQuestInfo(17011, 'C');
            var N = cm.getNumberFromQuestInfo(17010, "addition");
            var u = cm.getNumberFromQuestInfo(17010, "deduction");
            var Q = cm.getNumberFromQuestInfo(17011, 'E');
            var m = cm.getNumberFromQuestInfo(17011, 'M');
            cm.sendNormalTalk("最近，你通过交易所获得的经验值是 #r#e" + Q + "#k#n ，获得的#b#i4310100##z4310100##k是 #b#e" + (w + N - u) + "#k#n个，获得的总金币数为 #d#e" + m + "#k#n 。", 0, 9390220, false, true);
        }
    } else {
        if (status === V++) {
            if (cm.getNumberFromQuestInfo(17010, "success") == 0) {
                cm.openUI(554);
                cm.dispose();
            } else {
                var w = cm.getNumberFromQuestInfo(17011, 'C');
                var N = cm.getNumberFromQuestInfo(17010, "addition");
                var u = cm.getNumberFromQuestInfo(17010, 'deduction');
                cm.gainItem(4310100, w + N - u);
                cm.gainExp(Q);
                cm.gainMeso(m);
                cm.sendNormalTalk("交易收益已经发放。", 0, 9390220, false, true);
            }
            cm.setNumberForQuestInfo(17010, 'addition', 0);
            cm.setNumberForQuestInfo(17010, 'deduction', 0);
            cm.updateInfoQuest(17011, '');
            cm.updateInfoQuest(17012, '');
            cm.updateInfoQuest(17013, '');
            cm.updateInfoQuest(17014, '');
            cm.updateInfoQuest(17015, '');
            cm.updateInfoQuest(17023, "end=0");
        } else if (status === V++) {
            cm.openUI(554);
            cm.dispose();
        }
    }
}
function action分支1(f, W, U, V) {
    if (status <= V++) {
        if (cm.haveItem(4310100, 10)) {
            cm.sendNormalTalk("你的资产已经超过#b10枚#i4310100##z4310100##k，不需要补贴。", 0, 9390220, false, false);
        } else {
            cm.gainItem(4310100, 10 - cm.getItemQuantity(4310100));
            cm.sendNormalTalk("航海事业发展不易，请好好利用这份补贴。", 0, 9390220, false, false);
        }
    } else if (status === V++) {
        cm.dispose();
    }
}
function action分支3(f, W, U, V) {
    if (status <= V++) {
        if (cm.凯梅尔兹航海_每日刷新()) {
            cm.sendNormalTalk("今天已经补充过能量了。", 0, 9390220, false, true);
        } else {
            cm.sendNormalTalk("能量补充完毕，继续享受航海吧！", 0, 9390220, false, true);
        }
    } else if (status === V++) {
        cm.dispose();
    }
}
function action分支4(f, W, U, V) {
    if (status <= V++) {
        cm.sendNormalTalk("已经正常补充了贸易品或者已通过手动进行了补充。无法补充更多的贸易品。", 0, 9390220, false, true);
    } else if (status === V++) {
        cm.dispose();
    }
}