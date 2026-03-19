function start() {
    var d = cm.getPortal().getId();
    var b = cm.getPortal().getName();
    var e = "r";
    var h = "红色";
    var g = cm.getNumberFromQuestInfo(42006, e);
    var f = cm.getNumberFromQuestInfo(42006, e + "c");
    var a = cm.getMap().getReactorByName(e).getState();
    if (f == 1) {
        cm.getWeatherEffectNotice("已经欺骗了这个结界了，赶紧再看看其他的！", 147, 15000, 1)
    } else {
        if (g <= a + 1) {
            cm.getWeatherEffectNotice("你这张卡片不行，赶紧再找找！", 147, 15000, 1)
        } else {
            if (g == 8) {
                cm.getWeatherEffectNotice("你成功用紫色卡片欺骗了结界!", 147, 15000, 1)
            } else {
                cm.getWeatherEffectNotice("你成功用" + h + g + "卡片欺骗了结界!", 147, 15000, 1)
            }
            cm.setNumberForQuestInfo(42006, "r", 0);
            cm.setNumberForQuestInfo(42006, "g", 0);
            cm.setNumberForQuestInfo(42006, "b", 0);
            cm.setNumberForQuestInfo(42006, "y", 0);
            cm.setNumberForQuestInfo(42006, e + "c", 1);
            cm.getMap().getReactorByName(e).forceHitReactor(cm.getPlayer(), g - 1);
            cm.effect_LastingEff("Effect/OnUserEff.img/aquarisTower/card/" + e + "/9", 1, 0, 1);
            if (cm.getNumberFromQuestInfo(42006, "rc") == 1 && cm.getNumberFromQuestInfo(42006, "gc") == 1 && cm.getNumberFromQuestInfo(42006, "bc") == 1 && cm.getNumberFromQuestInfo(42006, "yc") == 1) {
                cm.getWeatherEffectNotice("你已经欺骗了所有结界!现在可以前往下一层了!", 147, 15000, 1);
                var i = cm.getEventInstance();
                var c = i.getEventManager();
                var a = c.getNumberProperty("state");
                c.setProperty("stage" + a, "clear");
                cm.openNpc(2540005, "特效_完成")
            }
        }
    }
};