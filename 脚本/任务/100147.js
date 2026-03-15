var status = -1;
var selectionLog = [];

function start(d, e, g) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = g;
    var c = -1;
    if (status <= c++) {
        cm.dispose()
    } else {
        if (status == c++) {
            cm.askMenu("你想装饰圣诞节蛋糕吗？\r\n#b#L0# 装饰蛋糕胚（小）#l\r\n#L1# 装饰蛋糕胚（中）#l\r\n#L2# 装饰蛋糕裱花（中）#l\r\n#L3# 装饰蛋糕胚（大）#l\r\n#L4# 装饰蛋糕裱花（大）#l\r\n#L5# 装饰蛋糕背景#l\r\n#k", 4, 1012108)
        } else {
            if (status == c++) {
                var j = "\r\n#e#b[ 更改 ]#n#k你想用哪个装饰材料来进行装饰？";
                j += "\r\n#b#L0# " + defaults[selectionLog[1]] + "#l#k";
                var b = cm.getStringFromQuestInfo(100141 + selectionLog[1], "check").toCharArray();
                var h = typeItemBorders[selectionLog[1]];
                for (var c = 1; c < b.length; c++) {
                    if (b[c] > "0") {
                        j += "\r\n#b#L" + c + "# #t" + (h + c) + "##l#k"
                    } else {
                        j += "\r\n#L" + c + "# #t" + (h + c) + "#（未获得）#l#k"
                    }
                }
                j += "\r\n";
                cm.askMenu(j, 4, 1012108)
            } else {
                if (status === c++) {
                    var f = 1;
                    var a = cm.getNumberFromQuestInfo(100136, "lv");
                    var b = cm.getStringFromQuestInfo(100141 + selectionLog[1], "check").toCharArray();
                    if (a < f) {
                        cm.sendNormalTalk("\r\n嗯……还无法对这个部位进行装饰……\r\n请先提升蛋糕等级！\r\n\r\n当前蛋糕等级：#bLv." + a + "#k\r\n需要蛋糕等级：#rLv." + f + "#k", 4, 1012108, false, false)
                    } else {
                        if (b[g] > "0") {
                            cm.setNumberForQuestInfo(100136, "part" + selectionLog[1], g + (a >= 4 ? 20 : a >= 2 ? 10 : 0));
                            cm.playerMessage(-1, "更改甜蜜绵软蛋糕装饰。");
                            cm.playerMessage(5, "更改甜蜜绵软蛋糕装饰。");
                            cm.effect_Voice("UI.img/productSuccess", 100)
                        } else {
                            cm.sendNormalTalk("\r\n暂时无法添加这种装饰材料……\r\n请搜集更多装饰材料！", 4, 1012108, false, false)
                        }
                    }
                    cm.dispose()
                }
            }
        }
    }
}
var defaults = ["蛋糕胚（小）：鲜奶油", "蛋糕胚（中）：鲜奶油", "蛋糕裱花（中）：无", "蛋糕胚（大）: 鲜奶油", "蛋糕裱花（大）: 无", "蛋糕背景：无"];
var typeItemBorders = [2630033, 2630042, 2630051, 2630059, 2630068, 2630084];

function action分支0(d, e, g, c) {
    if (status <= c++) {
        var j = "\r\n#e#b[ 更改 ]#n#k你想用哪个装饰材料来进行装饰？";
        j += "\r\n#b#L0# 蛋糕胚（小）：鲜奶油#l#k";
        var b = cm.getStringFromQuestInfo(100141, "check").toCharArray();
        var h = 2630033;
        for (var c = 1; c < b.length; c++) {
            if (b[c] > "0") {
                j += "\r\n#b#L" + c + "# #t" + (h + c) + "##l#k"
            } else {
                j += "\r\n#L" + c + "# #t" + (h + c) + "#（未获得）#l#k"
            }
        }
        j += "\r\n";
        cm.askMenu(j, 4, 1012108)
    } else {
        if (status === c++) {
            var f = 1;
            var a = cm.getNumberFromQuestInfo(100136, "lv");
            var b = cm.getStringFromQuestInfo(100141, "check").toCharArray();
            if (a < f) {
                cm.sendNormalTalk("\r\n嗯……还无法对这个部位进行装饰……\r\n请先提升蛋糕等级！\r\n\r\n当前蛋糕等级：#bLv." + a + "#k\r\n需要蛋糕等级：#rLv." + f + "#k", 4, 1012108, false, false)
            } else {
                if (b[g] > "0") {
                    cm.setNumberForQuestInfo(100136, "part0", g + (a >= 4 ? 20 : a >= 2 ? 10 : 0));
                    cm.playerMessage(-1, "更改甜蜜绵软蛋糕装饰。");
                    cm.playerMessage(5, "更改甜蜜绵软蛋糕装饰。");
                    cm.effect_Voice("UI.img/productSuccess", 100)
                } else {
                    cm.sendNormalTalk("\r\n暂时无法添加这种装饰材料……\r\n请搜集更多装饰材料！", 4, 1012108, false, false)
                }
            }
            cm.dispose()
        }
    }
}

function action分支1(d, e, g, c) {
    if (status <= c++) {
        var j = "\r\n#e#b[ 更改 ]#n#k你想用哪个装饰材料来进行装饰？";
        j += "\r\n#b#L0# 蛋糕胚（中）：鲜奶油#l#k";
        var b = cm.getStringFromQuestInfo(100142, "check").toCharArray();
        var h = 2630042;
        for (var c = 1; c < b.length; c++) {
            if (b[c] > "0") {
                j += "\r\n#b#L" + c + "# #t" + (h + c) + "##l#k"
            } else {
                j += "\r\n#L" + c + "# #t" + (h + c) + "#（未获得）#l#k"
            }
        }
        j += "\r\n";
        cm.askMenu(j, 4, 1012108)
    } else {
        if (status === c++) {
            var f = 2;
            var a = cm.getNumberFromQuestInfo(100136, "lv");
            var b = cm.getStringFromQuestInfo(100142, "check").toCharArray();
            if (a < f) {
                cm.sendNormalTalk("\r\n嗯……还无法对这个部位进行装饰……\r\n请先提升蛋糕等级！\r\n\r\n当前蛋糕等级：#bLv." + a + "#k\r\n需要蛋糕等级：#rLv." + f + "#k", 4, 1012108, false, false)
            } else {
                if (b[g] > "0") {
                    cm.setNumberForQuestInfo(100136, "part1", g + (a >= 4 ? 10 : a >= 2 ? 0 : 20));
                    cm.playerMessage(-1, "更改甜蜜绵软蛋糕装饰。");
                    cm.playerMessage(5, "更改甜蜜绵软蛋糕装饰。");
                    cm.effect_Voice("UI.img/productSuccess", 100)
                } else {
                    cm.sendNormalTalk("\r\n暂时无法添加这种装饰材料……\r\n请搜集更多装饰材料！", 4, 1012108, false, false)
                }
            }
            cm.dispose()
        }
    }
}

function action分支2(d, e, g, c) {
    if (status <= c++) {
        var j = "\r\n#e#b[ 更改 ]#n#k你想用哪个装饰材料来进行装饰？";
        j += "\r\n#b#L0# 蛋糕裱花（中）：无#l#k";
        var b = cm.getStringFromQuestInfo(100143, "check").toCharArray();
        var h = 2630051;
        for (var c = 1; c < b.length; c++) {
            if (b[c] > "0") {
                j += "\r\n#b#L" + c + "# #t" + (h + c) + "##l#k"
            } else {
                j += "\r\n#L" + c + "# #t" + (h + c) + "#（未获得）#l#k"
            }
        }
        j += "\r\n";
        cm.askMenu(j, 4, 1012108)
    } else {
        if (status === c++) {
            var f = 3;
            var a = cm.getNumberFromQuestInfo(100136, "lv");
            var b = cm.getStringFromQuestInfo(100143, "check").toCharArray();
            if (a < f) {
                cm.sendNormalTalk("\r\n嗯……还无法对这个部位进行装饰……\r\n请先提升蛋糕等级！\r\n\r\n当前蛋糕等级：#bLv." + a + "#k\r\n需要蛋糕等级：#rLv." + f + "#k", 4, 1012108, false, false)
            } else {
                if (b[g] > "0") {
                    cm.setNumberForQuestInfo(100136, "part2", (g == 0 ? b.length - 1 : g - 2) + (a >= 4 ? 10 : a >= 2 ? 0 : 20));
                    cm.playerMessage(-1, "更改甜蜜绵软蛋糕装饰。");
                    cm.playerMessage(5, "更改甜蜜绵软蛋糕装饰。");
                    cm.effect_Voice("UI.img/productSuccess", 100)
                } else {
                    cm.sendNormalTalk("\r\n暂时无法添加这种装饰材料……\r\n请搜集更多装饰材料！", 4, 1012108, false, false)
                }
            }
            cm.dispose()
        }
    }
}

function action分支3(d, e, g, c) {
    if (status <= c++) {
        var j = "\r\n#e#b[ 更改 ]#n#k你想用哪个装饰材料来进行装饰？";
        j += "\r\n#b#L0# 蛋糕胚（大）: 鲜奶油#l#k";
        var b = cm.getStringFromQuestInfo(100144, "check").toCharArray();
        var h = 2630059;
        for (var c = 1; c < b.length; c++) {
            if (b[c] > "0") {
                j += "\r\n#b#L" + c + "# #t" + (h + c) + "##l#k"
            } else {
                j += "\r\n#L" + c + "# #t" + (h + c) + "#（未获得）#l#k"
            }
        }
        j += "\r\n";
        cm.askMenu(j, 4, 1012108)
    } else {
        if (status === c++) {
            var f = 4;
            var a = cm.getNumberFromQuestInfo(100136, "lv");
            var b = cm.getStringFromQuestInfo(100144, "check").toCharArray();
            if (a < f) {
                cm.sendNormalTalk("\r\n嗯……还无法对这个部位进行装饰……\r\n请先提升蛋糕等级！\r\n\r\n当前蛋糕等级：#bLv." + a + "#k\r\n需要蛋糕等级：#rLv." + f + "#k", 4, 1012108, false, false)
            } else {
                if (b[g] > "0") {
                    cm.setNumberForQuestInfo(100136, "part3", g + (a >= 4 ? 0 : a >= 2 ? 20 : 10));
                    cm.playerMessage(-1, "更改甜蜜绵软蛋糕装饰。");
                    cm.playerMessage(5, "更改甜蜜绵软蛋糕装饰。");
                    cm.effect_Voice("UI.img/productSuccess", 100)
                } else {
                    cm.sendNormalTalk("\r\n暂时无法添加这种装饰材料……\r\n请搜集更多装饰材料！", 4, 1012108, false, false)
                }
            }
            cm.dispose()
        }
    }
}

function action分支4(d, e, g, c) {
    if (status <= c++) {
        var j = "\r\n#e#b[ 更改 ]#n#k你想用哪个装饰材料来进行装饰？";
        j += "\r\n#b#L0# 蛋糕裱花（大）: 无#l#k";
        var b = cm.getStringFromQuestInfo(100145, "check").toCharArray();
        var h = 2630068;
        for (var c = 1; c < b.length; c++) {
            if (b[c] > "0") {
                j += "\r\n#b#L" + c + "# #t" + (h + c) + "##l#k"
            } else {
                j += "\r\n#L" + c + "# #t" + (h + c) + "#（未获得）#l#k"
            }
        }
        j += "\r\n";
        cm.askMenu(j, 4, 1012108)
    } else {
        if (status === c++) {
            var f = 5;
            var a = cm.getNumberFromQuestInfo(100136, "lv");
            var b = cm.getStringFromQuestInfo(100145, "check").toCharArray();
            if (a < f) {
                cm.sendNormalTalk("\r\n嗯……还无法对这个部位进行装饰……\r\n请先提升蛋糕等级！\r\n\r\n当前蛋糕等级：#bLv." + a + "#k\r\n需要蛋糕等级：#rLv." + f + "#k", 4, 1012108, false, false)
            } else {
                if (b[g] > "0") {
                    cm.setNumberForQuestInfo(100136, "part4", g + (a >= 4 ? 0 : a >= 2 ? 20 : 10));
                    cm.playerMessage(-1, "更改甜蜜绵软蛋糕装饰。");
                    cm.playerMessage(5, "更改甜蜜绵软蛋糕装饰。");
                    cm.effect_Voice("UI.img/productSuccess", 100)
                } else {
                    cm.sendNormalTalk("\r\n暂时无法添加这种装饰材料……\r\n请搜集更多装饰材料！", 4, 1012108, false, false)
                }
            }
            cm.dispose()
        }
    }
}

function action分支5(d, e, g, c) {
    if (status <= c++) {
        var j = "\r\n#e#b[ 更改 ]#n#k你想用哪个装饰材料来进行装饰？";
        j += "\r\n#b#L0# 蛋糕背景：无#l#k";
        var b = cm.getStringFromQuestInfo(100146, "check").toCharArray();
        var h = 2630084;
        for (var c = 1; c < b.length; c++) {
            if (b[c] > "0") {
                j += "\r\n#b#L" + c + "# #t" + (h + c) + "##l#k"
            } else {
                j += "\r\n#L" + c + "# #t" + (h + c) + "#（未获得）#l#k"
            }
        }
        j += "\r\n";
        cm.askMenu(j, 4, 1012108)
    } else {
        if (status === c++) {
            var f = 6;
            var a = cm.getNumberFromQuestInfo(100136, "lv");
            var b = cm.getStringFromQuestInfo(100146, "check").toCharArray();
            if (a < f) {
                cm.sendNormalTalk("\r\n嗯……还无法对这个部位进行装饰……\r\n请先提升蛋糕等级！\r\n\r\n当前蛋糕等级：#bLv." + a + "#k\r\n需要蛋糕等级：#rLv." + f + "#k", 4, 1012108, false, false)
            } else {
                if (b[g] > "0") {
                    cm.setNumberForQuestInfo(100136, "part5", (g == 0 ? b.length : g));
                    cm.playerMessage(-1, "更改甜蜜绵软蛋糕装饰。");
                    cm.playerMessage(5, "更改甜蜜绵软蛋糕装饰。");
                    cm.effect_Voice("UI.img/productSuccess", 100)
                } else {
                    cm.sendNormalTalk("\r\n暂时无法添加这种装饰材料……\r\n请搜集更多装饰材料！", 4, 1012108, false, false)
                }
            }
            cm.dispose()
        }
    }
};