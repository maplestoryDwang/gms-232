function enter() {
    if (cm.isQuestFinished(58752)) {
        cm.sendNormalTalk("(鵺已经从这里搬走了，里面空空荡荡，没什么好看的了。)", 16, 0, true, false)
    } else {
        cm.openScriptNpc()
    }
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
            cm.sendNormalTalk("喂喂，活人不能进去那里~", 4, 9112007, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("你是不是想死？", 4, 9112007, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("(……先去调查下其他地方吧。)", 16, 0, true, false)
                } else {
                    if (status === a++) {
                        cm.dispose()
                    }
                }
            }
        }
    }
};