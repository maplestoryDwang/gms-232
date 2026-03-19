function enter() {
    var b = cm.getPortal().getId();
    var a = cm.getPortal().getName();
    cm.openScriptNpc()
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(c, b, a) {
    if (cm.getNumberFromQuestInfo(33129, "fail") > 1) {
        action2(c, b, a)
    } else {
        action1(c, b, a)
    }
}

function action2(d, c, b) {
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.askYesNo_Bottom("好像有粉碎机无法到达的地方。确定往那边逃跑吗？\r\n#b（是：跳过）\r\n（否：重新挑战）#k", 56, 0)
        } else {
            if (status === a++) {
                if (d > 0) {
                    cm.sendNormalTalk_Bottom("好像有条粉碎机无法追踪的路，沿着那条路走应该就能轻松逃跑了吧？\r\n#b(通关粉碎机追击战即可获得如下奖励。)\r\n#v2434783:# #t2434783##k", 57, 0, false, true)
                } else {
                    cm.playerMessage(5, "请逃离粉碎机. ");
                    cm.dispose();
                    cm.warp(350042700, 0, false)
                }
            } else {
                if (status === a++) {
                    cm.askYesNo_Bottom("试着朝粉碎机没法追踪的路逃吧？\r\n#b(是：跳过)\r\n(否：重新挑战)#k", 56, 0)
                } else {
                    if (status === a++) {
                        if (d > 0) {
                            cm.dispose();
                            cm.warp(350043000, 0, false)
                        } else {
                            cm.playerMessage(5, "请逃离粉碎机. ");
                            cm.dispose();
                            cm.warp(350042700, 0, false)
                        }
                    }
                }
            }
        }
    }
}

function action1(d, c, b) {
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
        if (status === a++) {
            cm.askYesNo_Bottom("好，打起精神出发吧！\r\n#b（如果点击“是”，即可重新挑战。）#k", 56, 0)
        } else {
            if (status === a++) {
                if (d > 0) {
                    cm.playerMessage(5, "请逃离粉碎机. ");
                    cm.warp(350042700, 0, false)
                }
                cm.dispose()
            }
        }
    }
};