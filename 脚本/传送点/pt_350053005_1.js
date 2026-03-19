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

function action(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("……你，从我的记忆里看到了什么？", 37, 1540490, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("过去的斯乌和你。", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("斯乌和我？", 37, 1540490, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("从精灵时期开始，到现在。", 57, 0, true, false)
                    } else {
                        if (status === a++) {
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};