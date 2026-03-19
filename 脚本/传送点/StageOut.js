var points = [4, 12, 14, 16, 24, 29, 35, 46, 75, 58, 73, 77, 96, 112, 137, 139, 169, 255, 186, 223, 243, 264, 280, 331, 323, 380, 555, 394, 419, 489, 472, 580, 557, 587, 679, 975, 750, 715, 749, 862, 856, 982, 1024, 1067, 2020];
var exps = [33474, 83687, 83687, 127118, 143248, 143248, 192090, 192090, 413928, 413928, 571006, 571006, 571006, 640872, 839876, 839876, 903628, 1355442, 1656447, 1656447, 1656447, 1830930, 2395173, 2395173, 2622873, 2622873, 4667404, 4667404, 5909948, 5909948, 5909948, 7038672, 7983508, 7983508, 10080948, 12601185, 13096065, 13096065, 13096065, 13562465, 13562465, 13562465, 13562465, 13562465, 16272958];
var bypassFloor = [12, 17, 19, 22, 23, 27, 41, 44, 48];

function start() {
    var n = cm.getMapId();
    if (n < 992001000 || n > 992050000) {
        cm.openNpc(9330189, "枫之高校_离开");
        return true
    }
    var a = parseInt((n - 992000000) / 1000);
    var d = cm.getEventManager("副本_起源之塔");
    var k = cm.getEventInstance();
    var b = d.getProperty("stage" + a);
    if (a % 10 != 5 && (b == null || !b.equals("clear"))) {
        if (bypassFloor.indexOf(a) < 0) {
            cm.getPlayer().dropMessage(5, "传送阵目前还处于无法使用的状态。")
        } else {
            d.setProperty("stage" + a, "clear");
            cm.fieldEffect_ScreenMsg("UI/UIWindowPL.img/HiddenCatch/StageImg/clear")
        }
        return true
    }
    if (a == 3) {
        cm.getPlayer().removeAll(4009237);
        cm.getPlayer().removeAll(4009238)
    } else {
        if (a == 18) {
            cm.getPlayer().removeAll(4000136)
        } else {
            if (a == 29) {
                cm.getPlayer().removeAll(4009232);
                cm.getPlayer().removeAll(4034077)
            } else {
                if (a == 34) {
                    cm.getPlayer().removeAll(4009234);
                    cm.getPlayer().removeAll(4009235);
                    var j = [4009234, 4009235]
                }
            }
        }
    }
    var i = a - 1 - Math.floor(a / 5);
    var l = cm.getPlayer().hasEquipped(1113128) ? points[i] * 2 : points[i];
    var m = cm.addNumberForQuestInfo(42003, "point", l);
    cm.getPlayer().dropMessage(5, "获得了" + l + "点起源点数。现在拥有的起源点数为" + m + "点。");
    cm.gainExp(exps[i]);
    cm.updateInfoQuest(42027, "stage=" + a);
    var h = cm.setNumberForQuestInfo(42002, "f", a);
    var e = cm.setNumberForQuestInfo(42002, "tf", Math.max(e, a));
    if (a > e) {
        cm.setNumberForQuestInfo(42024, "best", 1);
        map42024.put("best", "1")
    }
    var c = cm.addNumberForQuestInfo(42024, "newPoint", c);
    var g = cm.addNumberForQuestInfo(42024, "exp", exps[i]);
    cm.updateInfoQuest(42027, "time=" + k.getTimeLeft() + ";type=1");
    cm.updateAchievement(1272, 0, l, 10000);
    cm.updateAchievement(1273, 0, l, 100000);
    cm.updateAchievement(1274, 0, l, 1000000);
    cm.updateAchievement(1275, 0, l, 1000000);
    cm.updateAchievement(1266, 0, 1, 200);
    if (n == 992050000) {
        cm.openNpc(0, "起源之塔_50F_通关")
    } else {
        cm.getPlayer().dropMessage(5, "传送到起源之塔的第" + (a + 1) + "层。");
        cm.warp(992000000 + (a + 1) * 1000, 0)
    }
    return true
};