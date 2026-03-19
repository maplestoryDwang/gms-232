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
            cm.askMenuS_Bottom("世界尽头岔路，接下来去到哪里？\r\n#L0##b世界尽头2-1#l\r\n#fn微软雅黑##fs18##L1##e#r巨人心脏(黑魔法师)#k#n#l")
        } else {
            if (status === a++) {
                if (b == 0) {
                    cm.warp(450012400, 1)
                } else {
                    if (b == 1) {
                        cm.warp(450012500, 2)
                    }
                }
                cm.dispose()
            }
        }
    }
};