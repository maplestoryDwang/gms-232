function enter() {
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
            cm.askText("如果你想打开洞穴的门，就要说出暗号。。。", "", 2103008, 0, 11, 0)
        } else {
            if (status === a++) {
                if (cm.getText() != "芝麻开门") {
                    cm.getTopMsgFont("没有任何反应", 3, 20, 4, 0, 0)
                } else {
                    cm.warp(260010402, 0);
                    cm.playerMessage(5, "一说出暗号，一股神秘的力量驱使着进入洞穴。")
                }
                cm.dispose()
            }
        }
    }
};