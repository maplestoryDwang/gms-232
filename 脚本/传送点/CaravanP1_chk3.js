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
            cm.onScriptMessage_莫奈德卷轴风格(9400582, "巴特勒刚离开，和艾丽卡一起的凯恩就走过来跟我搭话。\r\n“副团长跟你说啥了？”凯恩用不高兴的语气问道。\r\n听我说向巴特勒请教了负伤者处理问题后，凯恩的脸色更阴沉了。\r\n“你别太听信他的建议。他那人为了完成任务，说不定会利用你。”\r\n           #i4036367#\r\n#b\r\n#L0#“利用我？”( - ) #l\r\n#L1#说我不相信任何人。（C组友好度下降）#l")
        } else {
            var reactor = "action分支" + selectionLog[1];
            eval(reactor)(mode, type, selection, i)
        }
    }
}

function action分支0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom("#face0#对啊，任务几乎已算失败，骑士团也遭受了不小的损失。可事到如今，他也不能甩手回去！", 37, 9400582, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("#face0#对他来说，也许这阿布鲁就像一个四面封锁，无法逃脱的巨大陷阱。", 37, 9400582, true, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#在这种情况下，你突然从天而降，你说他会不会考虑要怎么利用你摆脱困境？", 37, 9400582, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#我不是叫你压根儿别相信他，只是让你多个心眼儿，自己判断。", 37, 9400582, true, true)
                } else {
                    if (status === a++) {
                        cm.setNumberForQuestInfo(64006, "Ec", 4);
                        cm.monadForceMove("0", 0, 3000);
                        cm.onSetBackEffect("0", 1, 0, 0, 0);
                        cm.monadForceMove("1", 1, 3000);
                        cm.onSetBackEffect("1", 1, 1, 0, 0);
                        cm.monadForceMove("2", 0, 3000);
                        cm.onSetBackEffect("2", 1, 0, 0, 0);
                        cm.monadForceMove("3", 0, 3000);
                        cm.onSetBackEffect("3", 1, 0, 0, 0);
                        cm.useItem(2210208, false);
                        cm.莫奈德_特效(null, [0, 2]);
                        cm.dispose();
                        cm.setNumberForQuestInfo(64005, "duringEvent", 0)
                    }
                }
            }
        }
    }
}

function action分支1(d, c, b, a) {
    if (status <= a++) {
        cm.addNumberForQuestInfo(64007, "happy2", -15, 0, 100);
        cm.莫奈德_特效(null, [8, 0, 0, -15, 0]);
        cm.sendNormalTalk_Bottom("#face0#你怎么能这么说……", 37, 9400582, false, true, 1)
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("#face0#我跟艾丽卡要伤心了。", 37, 9400582, true, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face3#干嘛拉上我……", 37, 9400580, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#你脸上大写的失落嘛？", 37, 9400582, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#……", 37, 9400580, true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#总之，眼下任务几乎已算失败，骑士团也遭受了不小的损失。可事到如今，他也不能甩手回去！", 37, 9400582, true, true, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#对他来说，也许这阿布鲁就像一个四面封锁，无法逃脱的巨大陷阱。", 37, 9400582, true, true, 1)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#在这种情况下，你突然从天而降，你说他会不会考虑要怎么利用你摆脱困境？", 37, 9400582, true, true, 1)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#我不是叫你压根儿别相信他，只是让你多个心眼儿，自己判断。", 37, 9400582, true, true, 1)
                                    } else {
                                        if (status === a++) {
                                            cm.setNumberForQuestInfo(64006, "Ec", 4);
                                            cm.monadForceMove("0", 0, 3000);
                                            cm.onSetBackEffect("0", 1, 0, 0, 0);
                                            cm.monadForceMove("1", 1, 3000);
                                            cm.onSetBackEffect("1", 1, 1, 0, 0);
                                            cm.monadForceMove("2", 0, 3000);
                                            cm.onSetBackEffect("2", 1, 0, 0, 0);
                                            cm.monadForceMove("3", 0, 3000);
                                            cm.onSetBackEffect("3", 1, 0, 0, 0);
                                            cm.useItem(2210208, false);
                                            cm.莫奈德_特效(null, [0, 2]);
                                            cm.dispose();
                                            cm.setNumberForQuestInfo(64005, "duringEvent", 0)
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};