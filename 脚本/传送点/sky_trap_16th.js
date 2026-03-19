function enter() {
    if (cm.getNumberFromQuestInfo(100272, "end") == 0) {
        cm.setNumberForQuestInfo(100272, "end", 1);
        cm.openScriptNpc()
    }
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(e, g, h) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = h;
    var d = -1;
    if (status <= d++) {
        cm.dispose()
    } else {
        if (status === d++) {
            cm.onNewSpecialEffect(2, 1500);
            cm.dispelBuff(80002377);
            cm.dispelBuff(80002378);
            cm.dispelBuff(80002379);
            cm.dispelBuff(80002380)
        } else {
            if (status === d++) {
                cm.onNewSpecialEffect(2, 1000);
                var a = cm.getPlayer().getPosition().x + 18867;
                cm.setNumberForQuestInfo(16625, "distance", a);
                cm.新复古王国_获得点数(a / 10);
                cm.addNumberForQuestInfo(16625, "ark", a / 10)
            } else {
                if (status === d++) {
                    cm.openUI(1184);
                    cm.onNewSpecialEffect(2, 500)
                } else {
                    if (status === d++) {
                        cm.dispose();
                        cm.closeUI(1183);
                        cm.warp(993107201, 0, false);
                        var a = cm.getNumberFromQuestInfo(16625, "distance");
                        var b = cm.addNumberForQuestInfo(500743, "check", a);
                        for (var d = 0; d < exps.length; d++) {
                            var j = cm.getNumberFromQuestInfo(100272, "lv");
                            if (j < d + 2 && b >= exps[d] * 100) {
                                var c = cm.addNumberForQuestInfo(100272, "lv", 1);
                                var f = "恭喜你！\r\n你的#b飞行等级#k升到#r" + c + "级#k啦#b( " + upgrades[c - 2] + " )#k\r\n";
                                cm.addPopupSay(9062186, 10000, f, "", 0);
                                if (c == 3) {
                                    cm.teachSkill(80002377, -1, 0);
                                    cm.teachSkill(80002378, 0, -1);
                                    cm.teachSkill(80002378, 1, 0)
                                } else {
                                    if (c == 6) {
                                        cm.teachSkill(80002378, -1, 0);
                                        cm.teachSkill(80002379, 0, -1);
                                        cm.teachSkill(80002379, 1, 0)
                                    } else {
                                        if (c == 12) {
                                            cm.teachSkill(80002379, -1, 0);
                                            cm.teachSkill(80002380, 0, -1);
                                            cm.teachSkill(80002380, 1, 0)
                                        }
                                    }
                                }
                            }
                        }
                        if (a >= 25000) {
                            cm.addPopupSay(9062186, 4000, "竟能抵达这里，你真了不起！这就是勇士修行的真正价值啊！！", "", 0);
                            return
                        }
                        if (a < 2000) {
                            cm.addPopupSay(9062186, 4000, "嗯……继续认真修行，争取升级气球吧？", "", 0);
                            return
                        }
                        if (a % 10000 >= 8000) {
                            cm.addPopupSay(9062186, 4000, "再走一段，就能碰上宝石地带YO！", "", 0);
                            return
                        }
                        switch (cm.rand(1, 10)) {
                            case 1:
                                cm.addPopupSay(9062186, 4000, "冲锋（→→）之后跳跃！然后按空格键打开气球YO！", "", 0);
                                break;
                            case 2:
                                cm.addPopupSay(9062186, 4000, "性能优异的气球上搭载了可以暂时获得推进力的推进器YO。", "", 0);
                                break;
                            case 3:
                                cm.addPopupSay(9062186, 4000, "每10000m会遇到一个宝石地带YO！宝石地带里遍地都是宝石堆！！", "", 0);
                                break
                        }
                    }
                }
            }
        }
    }
}
var exps = [500, 1000, 2000, 4000, 8000, 12000, 16000, 20000, 25000, 30000, 40000, 50000, 60000, 70000];
var upgrades = ["宝石新复古能量获得量 3 → 4", "气球下降速度 600 → 450", "大型风扇上升效果 +100", "祥云、黄金祥云效果 +50", "气球下降速度 450 → 400，可使用推进器", "宝石堆新复古能量获得量 30 → 40", "大型风扇上升效果 +100", "祥云、黄金祥云效果 +50", "宝石新复古能量获得量 4 → 5", "大型风扇上升效果 +100", "气球下降速度 400 → 350", "祥云、黄金祥云效果 +50", "宝石堆新复古能量获得量 40 → 50", "大型风扇上升效果 +100"];