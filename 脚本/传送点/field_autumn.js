function enter() {
    cm.openScriptNpc()
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(e, c, b) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            var d = "要去哪儿？\r\n#L0# #b晚秋之国近郊。#l";
            d += "\r\n#L1# #b秘密储藏室。#l";
            d += "\r\n#L2# #b日落大道某处。#l";
            d += "\r\n#L3# #b邪恶森林某处。#l";
            cm.askMenu(d, 24, 0)
        } else {
            cm.dispose();
            if (b == 0) {
                cm.warp(693000041, 2)
            } else {
                if (b == 1) {
                    cm.warp(693000043, 1)
                } else {
                    if (b == 1) {
                        cm.warp(693000045, 1)
                    } else {
                        if (b == 3) {
                            cm.warp(693000047, 3)
                        }
                    }
                }
            }
        }
    }
};