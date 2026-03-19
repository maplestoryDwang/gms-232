function enter() {
    var b = cm.getPortal().getId();
    var a = cm.getNumberFromQuestInfo(64006, "Ec");
    if (a == b) {
        cm.openScriptNpc()
    }
}
var status = -1;
var selectionLog = [];

function start() {
    cm.setNumberForQuestInfo(64005, "duringEvent", 1);
    action(1, 0, 0)
}

function action(mode, type, selection) {
    status++;
    selectionLog[status] = selection;
    var i = -1;
    if (status <= i++) {
        cm.dispose()
    } else {
        if (status === i++) {
            cm.莫奈德_特效(null, [0, 3]);
            cm.莫奈德_特效(null, [7, 6]);
            cm.onScriptMessage_莫奈德卷轴风格(9400583, "“前方有群怪物出没！”亚皮纳斯的骑士再次报告怪物出没的消息。\r\n提议说虽然还有段距离，但他们位于通往下个村庄的路口，先出动去干掉他们比较保险。\r\n“那些怪物究竟从哪儿冒出来的？怎么杀都杀不尽！”在一旁听着的凯恩很不耐烦地说道。\r\n           #i4036367#\r\n#b\r\n#L0#和骑士们一起去讨伐怪物。（全体友好度上升）#l\r\n#L1#等怪物靠近大篷车队伍再将其消灭。（A组友好度下降，B组友好度下降）#l\r\n#L2#绕过怪物群。（D组友好度下降）#l")
        } else {
            var reactor = "action分支" + selectionLog[1];
            eval(reactor)(mode, type, selection, i)
        }
    }
}

function action分支0(d, c, b, a) {
    if (status <= a++) {
        cm.addNumberForQuestInfo(64007, "happy0", 5, 0, 100);
        cm.addNumberForQuestInfo(64007, "happy1", 10, 0, 100);
        cm.addNumberForQuestInfo(64007, "happy2", 20, 0, 100);
        cm.addNumberForQuestInfo(64007, "happy3", 10, 0, 100);
        cm.莫奈德_特效(null, [8, 5, 10, 20, 10]);
        cm.sendNormalTalk_Bottom("#face0#你又要亲自出马？真厉害，我正好也闲得发慌，一起去吧。", 37, 9400582, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("#face0#对了，吉莉！你帮我保护艾丽卡，不许离开她半步哦！", 37, 9400582, true, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0##h0#，我不能离开艾丽卡太久，咱们速战速决吧！", 37, 9400582, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("前往#m867200650#。", 35, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.dispose();
                        cm.warp(867200650, 0);
                        for (var a = 2210207; a <= 2210211; a++) {
                            cm.dispelBuff(a)
                        }
                    }
                }
            }
        }
    }
}

function action分支1(d, c, b, a) {
    if (status <= a++) {
        cm.addNumberForQuestInfo(64007, "happy0", -5, 0, 100);
        cm.addNumberForQuestInfo(64007, "happy1", -10, 0, 100);
        cm.莫奈德_特效(null, [8, -5, -10, 0, 0]);
        cm.sendNormalTalk_Bottom("#face0#打了一天，谁都累……可如果怪物群靠近大篷车队伍，不知道会袭击谁。到时肯定有人受伤。", 37, 9400582, false, true, 1)
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("#face0#万一艾丽卡受伤，我会心碎的！我一起帮你，咱们快去消灭他们吧。", 37, 9400582, true, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#对了，吉莉！艾丽卡就拜托你咯，你要紧紧守住她哦。", 37, 9400582, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("前往#m867200650#。", 35, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.dispose();
                        cm.warp(867200650, 0);
                        for (var a = 2210207; a <= 2210211; a++) {
                            cm.dispelBuff(a)
                        }
                    }
                }
            }
        }
    }
}

function action分支2(d, c, b, a) {
    if (status <= a++) {
        cm.addNumberForQuestInfo(64007, "happy3", -10, 0, 100);
        cm.莫奈德_特效(null, [8, 0, 0, 0, -10]);
        cm.sendNormalTalk_Bottom("#face0#情况不妙，这群怪物正好挡住了我们前进的方向。", 37, 9400582, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("#face0#打了一天，谁都累……可如果怪物群靠近大篷车队伍，不知道会袭击谁。到时肯定有人受伤。", 37, 9400582, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#万一艾丽卡受伤，我会心碎的！我一起帮你，咱们快去消灭他们吧。", 37, 9400582, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#对了，吉莉！艾丽卡就拜托你咯，你要紧紧守住她哦。", 37, 9400582, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("前往#m867200650#。", 35, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.dispose();
                            cm.warp(867200650, 0);
                            for (var a = 2210207; a <= 2210211; a++) {
                                cm.dispelBuff(a)
                            }
                        }
                    }
                }
            }
        }
    }
};