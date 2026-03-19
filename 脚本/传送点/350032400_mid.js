function enter() {
    var b = cm.getPortal().getId();
    var a = cm.getPortal().getName();
    if (cm.getNumberFromQuestInfo(33180, "enter") > 1) {
        cm.openScriptNpc()
    } else {
        if (cm.isQuestFinished(33187)) {
            cm.openNpc("黑色天堂_Act3_激战长空")
        } else {
            cm.openScriptNpc()
        }
    }
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(d, c, b) {
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("我们现在正打算找到没有敌人的道路，靠近黑色天堂！\r\n这样一来即便不展开空中战，应该也可以移动过去了！\r\n#r(如果正常通关空中战，即可获得如下奖励。)\r\n#v2434783:# #t2434783##k", 37, 1540610, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo_Bottom("#h0#现在也立刻会来我们这边吗？\r\n#r(按下‘是’即可跳过空中战进行游戏。)#k", 37, 1540610)
            } else {
                if (status === a++) {
                    selectionLog[66] = d;
                    if (selectionLog[66] == 0) {
                        cm.sendNormalTalk_Bottom("真不愧是#h0#！\r\n请尽快消灭空中的敌人，我们在黑色天堂甲板上见！", 37, 1540610, false, true)
                    } else {
                        cm.askYesNo_Bottom("不过，最好还是在空战中和敌人较量一下……\r\n确定在不进行空战的情况下，直接向我们这边移动吗？\r\n#r（如果点击“是”，可以直接跳过空战进行游戏。）#k", 37, 1540610)
                    }
                } else {
                    if (status === a++) {
                        selectionLog[67] = d;
                        if (selectionLog[66] == 0) {
                            cm.dispose();
                            cm.openNpc("黑色天堂_Act3_激战长空")
                        } else {
                            if (selectionLog[67] == 0) {
                                cm.sendNormalTalk_Bottom("真不愧是#h0#！\r\n请尽快消灭空中的敌人，我们在黑色天堂甲板上见！", 37, 1540610, false, true)
                            } else {
                                cm.askYesNo_Bottom("确定在不进行空战的情况下，直接向我们这边移动吗？\r\n#r（如果点击“是”，可以直接跳过空战进行游戏。）#k", 37, 1540610)
                            }
                        }
                    } else {
                        if (status === a++) {
                            selectionLog[68] = d;
                            if (selectionLog[67] == 0) {
                                cm.dispose();
                                cm.openNpc("黑色天堂_Act3_激战长空")
                            } else {
                                if (selectionLog[68] == 0) {
                                    cm.sendNormalTalk_Bottom("真不愧是#h0#！\r\n请尽快消灭空中的敌人，我们在黑色天堂甲板上见！", 37, 1540610, false, true)
                                } else {
                                    cm.sendNormalTalk_Bottom("那请立刻移动到我们这边吧！", 37, 1540610, false, true)
                                }
                            }
                        } else {
                            if (status === a++) {
                                cm.dispose();
                                if (selectionLog[68] == 0) {
                                    cm.openNpc("黑色天堂_Act3_激战长空")
                                } else {
                                    cm.warp(350033000, 0, false)
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};