var status = -1;
var selectionLog = [];

function start() {
    status = -1;
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
            switch (cm.getMapId()) {
                case 925100000:
                    cm.showMapEffect(true, 5120020, "必须在限定时间内消灭所有怪物，登上海盗船！", 15, false);
                    break;
                case 925100100:
                    cm.getMap().startSimpleMapEffect("我们必须证明自己！给我海盗勋章!", 5120020);
                    break;
                case 925100200:
                    cm.getMap().startSimpleMapEffect("解决问题继续前进。", 5120020);
                    break;
                case 925100300:
                    cm.getMap().startSimpleMapEffect("解决问题继续前进。", 5120020);
                    break;
                case 925100400:
                    cm.showMapEffect(true, 5120020, "在限定时间内从怪物身上搜集钥匙，关上所有的门！", 15, false);
                    break;
                case 925100500:
                    cm.showMapEffect(true, 5120020, "好了，这是最后一次。击败红鼻子海盗团的船长老海盗！", 15, false);
                    break
            }
            cm.dispose()
        } else {
            cm.dispose()
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