function enter() {
    cm.openScriptNpc()
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(e, d, c) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status === b++) {
            if (cm.getInfoQuest(34817) == "m=1") {
                var a = cm.getEventManager("圣晶使徒_水晶学院_清怪1");
                a.startInstance(cm.getPlayer(), cm.getMap());
                cm.dispose()
            } else {
                if (cm.getInfoQuest(34817) == "m=1;kc=0;clear=1") {
                    var a = cm.getEventManager("圣晶使徒_水晶学院_击杀数1");
                    a.startInstance(cm.getPlayer(), cm.getMap());
                    cm.dispose()
                } else {
                    cm.warp(402000525, 3);
                    cm.dispose()
                }
            }
        }
    }
};