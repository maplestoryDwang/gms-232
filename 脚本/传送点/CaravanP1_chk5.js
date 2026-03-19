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
            cm.onScriptMessage_莫奈德卷轴风格(9400587, "可汗村长走过来，告诉我大篷车从卡夫塔佩出来已经过了小半天时间了。\r\n“咱们先停一会儿，给乡亲们分点儿食物吧。”\r\n他说村民们这半天里什么都没吃，已经饿得走不动了。\r\n           #i4036367#\r\n#b\r\n#L0#进行分粮。（全体友好度上升，食物减少）#l\r\n#L1#“为什么要分配食物？”( - ) #l\r\n#L2#强行继续前往下个村庄。（D组友好度下降）#l")
        } else {
            var reactor = "action分支" + selectionLog[1];
            eval(reactor)(mode, type, selection, i)
        }
    }
}

function action分支0(d, c, b, a) {
    if (status <= a++) {
        cm.addNumberForQuestInfo(64007, "happy0", 10, 0, 100);
        cm.addNumberForQuestInfo(64007, "happy1", 10, 0, 100);
        cm.addNumberForQuestInfo(64007, "happy2", 10, 0, 100);
        cm.addNumberForQuestInfo(64007, "happy3", 10, 0, 100);
        cm.莫奈德_特效(null, [8, 10, 10, 10, 10]);
        cm.sendNormalTalk_Bottom("#face0#……你做了明智的选择。", 37, 9400587, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("#face0#不过眼下食物有限，无法保证让所有人都吃饱。", 37, 9400587, true, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0##h0#，你要进行分粮吗？", 37, 9400580, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#先照顾小孩和负伤者吧，他们从刚才就开始感到吃力了。", 37, 9400580, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#这么感情用事的话，你会失去所有人的信任。", 37, 9400587, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#按照卡夫塔佩的惯例，我们会优先给外出打猎的人发放食物。这是支撑我们在严酷的环境中生存下来的默许的法则。", 37, 9400587, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face4#那至少先照顾孩子吧……他们耐不住饿。", 37, 9400580, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#……#h0#，你来选择吧。", 37, 9400587, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.莫奈德_特效(null, [4])
                                    } else {
                                        if (status === a++) {
                                            cm.莫奈德_特效(null, [0, 3]);
                                            cm.sendNormalTalk_Bottom("#face0#你做得很好，把剩下的粮食也分了吧。", 37, 9400587, false, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#……看起来大家都对分粮很满意呢。", 37, 9400587, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.莫奈德_特效(null, [5, -cm.getNumberFromQuestInfo(64006, "man")]);
                                                    cm.setNumberForQuestInfo(64006, "Ec", 6);
                                                    cm.莫奈德_特效(null, [6, 0, 0, 0, 0, 0]);
                                                    cm.monadForceMove("0", 0, 3000);
                                                    cm.onSetBackEffect("0", 1, 0, 0, 0);
                                                    cm.monadForceMove("1", 0, 3000);
                                                    cm.onSetBackEffect("1", 1, 0, 0, 0);
                                                    cm.monadForceMove("2", 1, 3000);
                                                    cm.onSetBackEffect("2", 1, 1, 0, 0);
                                                    cm.monadForceMove("3", 0, 3000);
                                                    cm.onSetBackEffect("3", 1, 0, 0, 0);
                                                    cm.useItem(2210209, false);
                                                    cm.莫奈德_特效(null, [8, 0, 0, 0, 0]);
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
        }
    }
}

function action分支1(mode, type, selection, i) {
    if (status <= i++) {
        cm.sendNormalTalk_Bottom("#face0#你最开始负责指挥大篷车时，我就重点强调过食物的重要性。你怎么能忘了？", 37, 9400587, false, true)
    } else {
        if (status === i++) {
            cm.sendNormalTalk_Bottom("#face0#饥饿的村民们会对你心怀不满，对你的决定产生质疑。这种情绪逐渐累积的话……最终他们会选择离开。", 37, 9400587, true, true)
        } else {
            if (status === i++) {
                cm.sendNormalTalk_Bottom("#face0#把村民们平安带到下个村庄……这是我对你唯一的请求。希望你不要忘记。", 37, 9400587, true, true)
            } else {
                if (status === i++) {
                    cm.sendNormalTalk_Bottom("#face0#……请进行分粮。", 37, 9400587, true, true)
                } else {
                    if (status === i++) {
                        cm.onScriptMessage_莫奈德卷轴风格(9400587, "“越是在混乱的情况下，人对吃的东西会特别敏感。”\r\n可汗铁着张脸继续说，为了让村民们知道大篷车状况稳定，让他们安心，每天固定时间进行一次分粮是最有效的方法。\r\n           #i4036367#\r\n#b\r\n#L0#每天进行分粮。（全体友好度上升）#l")
                    } else {
                        var reactor = "action分支0";
                        eval(reactor)(mode, type, selection, i)
                    }
                }
            }
        }
    }
}

function action分支2(mode, type, selection, i) {
    if (status <= i++) {
        cm.addNumberForQuestInfo(64007, "happy3", -10, 0, 100);
        cm.莫奈德_特效(null, [8, 0, 0, 0, -10]);
        cm.sendNormalTalk_Bottom("#face0#……强行前进？你把当初负责大篷车指挥时我给你的忠告全都忘了吗？", 37, 9400587, false, true, 1)
    } else {
        if (status === i++) {
            cm.sendNormalTalk_Bottom("#face0#饥饿的村民们会对你心怀不满，对你的决定产生质疑。这种情绪逐渐累积的话……最终他们会选择离开。", 37, 9400587, true, true, 1)
        } else {
            if (status === i++) {
                cm.sendNormalTalk_Bottom("#face0#把村民们平安带到下个村庄……这是我对你唯一的请求。希望你不要忘记。", 37, 9400587, true, true, 1)
            } else {
                if (status === i++) {
                    cm.sendNormalTalk_Bottom("#face0#……请进行分粮。", 37, 9400587, true, true)
                } else {
                    if (status === i++) {
                        cm.onScriptMessage_莫奈德卷轴风格(9400587, "“越是在混乱的情况下，人对吃的东西会特别敏感。”\r\n可汗铁着张脸继续说，为了让村民们知道大篷车状况稳定，让他们安心，每天固定时间进行一次分粮是最有效的方法。\r\n           #i4036367#\r\n#b\r\n#L0#每天进行分粮。（全体友好度上升）#l")
                    } else {
                        var reactor = "action分支0";
                        eval(reactor)(mode, type, selection, i)
                    }
                }
            }
        }
    }
};