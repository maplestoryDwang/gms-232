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
            cm.askMenu("可以到各个修炼场去的电梯。请选择想要去的层数。\r\n#b#L0#地下2层训练室A.#l \r\n#b#L1#地下3层训练室B#l \r\n#b#L2#地下4层训练室C#l  \r\n#b#L3#地下5层训练室D#l  \r\n#b#L4#地下6层第四训练室#l", 0, 2151007)
        } else {
            if (status === a++) {
                switch (b) {
                    case 0:
                        cm.warp(310010100, 0);
                        break;
                    case 1:
                        cm.warp(310010200, 0);
                        break;
                    case 2:
                        cm.warp(310010300, 0);
                        break;
                    case 3:
                        cm.warp(310010400, 0);
                        break;
                    case 4:
                        cm.warp(310010500, 0);
                        break
                }
                cm.dispose()
            }
        }
    }
};