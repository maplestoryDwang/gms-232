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
            var d = "要去哪儿？\r\n#L0# #b盛夏之国近郊。#l";
            d += "\r\n#L1# #b弗洛里纳大道某处。#l";
            d += "\r\n#L2# #b幻想主题世界某处。#l";
            d += "\r\n#L3# #b香菇村某处。#l";
            cm.askMenu(d, 24, 0)
        } else {
            cm.dispose();
            if (b == 0) {
                cm.warp(693000021, 3)
            } else {
                if (b == 1) {
                    cm.warp(693000024, 1)
                } else {
                    if (b == 2) {
                        cm.warp(693000026, 1)
                    } else {
                        if (b == 3) {
                            cm.warp(693000028, 1)
                        }
                    }
                }
            }
        }
    }
};