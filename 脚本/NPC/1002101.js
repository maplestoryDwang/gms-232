var status = -1;

function start() {
    action(1, 0, 0)
}

function action(c, b, a) {
    status++;
    if (cm.isQuestActive(32315) || cm.isQuestActive(32348) || cm.isQuestActive(32351)) {
        action南港(c, b, a)
    } else {
        action龙沉睡的岛(c, b, a)
    }
}

function action南港(d, c, b) {
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.askYesNo("你说你想要去冒险岛？我带你去便是，现在就出发吗？", 0, 1002101)
        } else {
            if (status === a++) {
                cm.dispose();
                cm.warp(2000100, 0, false)
            }
        }
    }
}

function action龙沉睡的岛(d, c, b) {
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.askYesNo("你想前往龙沉睡的岛吗?")
        } else {
            if (status == 1 && d == 1) {
                cm.warp(914100000, 0, false);
                cm.dispose()
            } else {
                cm.dispose()
            }
        }
    }
}

function randomNum(b, a) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * b + 1, 10);
            break;
        case 2:
            return parseInt(Math.random() * (a - b + 1) + b, 10);
            break;
        default:
            return 0;
            break
    }
};