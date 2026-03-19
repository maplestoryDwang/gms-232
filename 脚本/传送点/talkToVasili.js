function enter() {
    cm.openScriptNpc()
}
var status = 0;
var selectionLog = [];

function start() {
    status = -1;
    action(1, 0, 0)
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return
    }(mode == 1) ? status++ : status--;
    selectionLog[status] = selection;
    var i = -1;
    if (status <= i++) {
        cm.dispose()
    } else {
        if (cm.isQuestActive(32214)) {
            var reactor = "action蜗牛王";
            eval(reactor)(mode, type, selection, i)
        } else {
            if (cm.isQuestFinished(32214)) {
                var reactor = "action上船";
                eval(reactor)(mode, type, selection, i)
            } else {
                cm.getTopMsgFont("我还没做好准备啊。", 3, 20, 4, 0, 0)
            }
        }
    }
}

function action蜗牛王(d, c, b, a) {
    if (status <= a++) {
        cm.askYesNo("我现在就把你送进去，请你把在船内制造骚乱的怪物消灭掉吧！", 0, 10305)
    } else {
        if (status === a++) {
            cm.dispose();
            cm.warp(4000034, 0, false)
        }
    }
}

function action上船(d, c, b, a) {
    if (status <= a++) {
        cm.askYesNo("托你的福，出航准备已经全部完成了。现在上船吗？", 0, 10305)
    } else {
        if (status === a++) {
            cm.dispose();
            cm.warp(4000032, 0, false)
        }
    }
};