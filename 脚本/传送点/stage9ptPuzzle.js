var startPortal = 44;
var answers = new Array();

function start() {
    var d = cm.getEventManager("副本_起源之塔");
    var e = parseInt(d.getProperty("stage9_level"));
    if (answers.length == 0) {
        for (var c = 0; c < 8; c++) {
            answers.push(startPortal + c * 4 + parseInt(d.getProperty("stage9_puzzle_" + c)))
        }
    }
    var g = cm.getPortal().getId();
    var b = answers.indexOf(g);
    if (b < 0) {
        var a = parseInt(d.getProperty("stage9_fail")) + 1;
        d.setProperty("stage9_fail", a);
        var f = cm.getMap().getPortal(0).getPosition();
        cm.onTeleport(1, cm.getPlayer().getId(), f.getX(), f.getY());
        cm.getMap().getWeatherEffectNotice("第" + a + "次错误。虽然这全靠运气，但已经错了一次，所以请担心不要再错。", 147, 60000, 1)
    } else {
        cm.mapMessage("[stage9_level " + e + "][curPortal " + g + "][next] " + (startPortal + b * 4 + 4));
        if (b == e) {
            d.setProperty("stage9_level", b + 1);
            var f = cm.getPortal().getPosition();
            cm.spawnNpc(10310, f.getX() - 15, f.getY() - 30)
        }
        if (b + 1 == 8) {
            var f = cm.getMap().getPortal(startPortal - 1).getPosition();
            cm.onTeleport(1, cm.getPlayer().getId(), f.getX(), f.getY() - 30);
            d.setProperty("stage9", "clear");
            cm.fieldEffect_ScreenMsg("UI/UIWindowPL.img/HiddenCatch/StageImg/clear")
        } else {
            var f = cm.getMap().getPortal(startPortal + b * 4 + 4 + randomNum(0, 3)).getPosition();
            cm.onTeleport(1, cm.getPlayer().getId(), f.getX(), f.getY() - 30)
        }
    }
    return true
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