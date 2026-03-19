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
            cm.monadForceMove("0", 0, 3000);
            cm.onSetBackEffect("0", 1, 0, 0, 0);
            cm.monadForceMove("1", 1, 3000);
            cm.onSetBackEffect("1", 1, 1, 0, 0);
            cm.monadForceMove("2", 0, 3000);
            cm.onSetBackEffect("2", 1, 0, 0, 0);
            cm.monadForceMove("3", 0, 3000);
            cm.onSetBackEffect("3", 1, 0, 0, 0);
            cm.useItem(2210208, false);
            cm.莫奈德_特效(null, [7, 6]);
            cm.onScriptMessage_莫奈德卷轴风格(9400581, "巴特勒骑着马靠过来，一脸气冲冲的表情。\r\n“刚才的战斗中有人受伤了，你为什么不说？”\r\n他的眼神充满敌意，语气中隐约透露出要试试我的意思，显然他对目前的情况颇有不满。\r\n“你能说说作为大篷车队伍的负责人，你要怎么应付这样的情况吗？”\r\n           #i4036367#\r\n#b\r\n#L0#提供药品。（A组友好度下降）#l\r\n#L1#向巴特勒请教。（A组友好度上升）#l\r\n#L2#说受伤情况不严重。（A组友好度下降，C组友好度下降）#l")
        } else {
            var reactor = "action分支" + selectionLog[1];
            eval(reactor)(mode, type, selection, i)
        }
    }
}

function action分支0(d, c, b, a) {
    if (status <= a++) {
        cm.addNumberForQuestInfo(64007, "happy0", -15, 0, 100);
        cm.莫奈德_特效(null, [8, -15, 0, 0, 0]);
        cm.sendNormalTalk_Bottom("#face1#你觉得眼下这支难民队伍有带着药品吗？", 37, 9400581, false, true, 1)
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("#face0#身为负责人，理应掌握当前拥有的补给品情况，以及同行者的能力，不是吗？", 37, 9400581, true, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#扎奈特！把扎奈特叫来。", 37, 9400581, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#在亚皮纳斯派遣团中，扎奈特是拥有治愈能力的救护队。你记住，不知道该怎么做时，向周围的人多多请教比轻率做决定要好得多。", 37, 9400581, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#不用担心，亚皮纳斯会保护你们的。", 37, 9400584, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#b啊……谢谢你，扎奈特。", 57, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#我只是与他人分享亚皮纳斯给予的祝福而已。", 37, 9400584, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#b但你年纪轻轻就拥有这样的能力，真的很了不起。", 57, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#……过奖了，全靠亚皮纳斯栽培。", 37, 9400584, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.setNumberForQuestInfo(64006, "Ec", 3);
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
}

function action分支1(d, c, b, a) {
    if (status <= a++) {
        cm.addNumberForQuestInfo(64007, "happy0", 15, 0, 100);
        cm.莫奈德_特效(null, [8, 15, 0, 0, 0]);
        cm.sendNormalTalk_Bottom("#face0#……不懂就问，也不失为一种方法。", 37, 9400581, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("#face0#在亚皮纳斯派遣团中，扎奈特是拥有治愈能力的救护队。你请她来帮忙。", 37, 9400581, true, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#不用担心，亚皮纳斯会保护你们的。", 37, 9400584, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#b谢谢你，扎奈特。", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#我只是与他人分享亚皮纳斯给予的祝福而已。", 37, 9400584, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#b但你年纪轻轻就拥有这样的能力，真的很了不起。", 57, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#……过奖了，全靠亚皮纳斯栽培。", 37, 9400584, true, true)
                            } else {
                                if (status === a++) {
                                    cm.setNumberForQuestInfo(64006, "Ec", 3);
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

function action分支2(d, c, b, a) {
    if (status <= a++) {
        cm.addNumberForQuestInfo(64007, "happy0", -15, 0, 100);
        cm.addNumberForQuestInfo(64007, "happy2", -15, 0, 100);
        cm.莫奈德_特效(null, [8, -15, 0, -15, 0]);
        cm.sendNormalTalk_Bottom("#face1#放任伤员不管，队伍士气还能维持得起来吗？", 37, 9400581, false, true, 1)
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("#face0#身为负责人，理应为同行者的情况负责，不是吗？", 37, 9400581, true, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#扎奈特！把扎奈特叫来。", 37, 9400581, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#在亚皮纳斯派遣团中，扎奈特是拥有治愈能力的救护队。你记住，不知道该怎么做时，向周围的人多多请教比轻率做决定要好得多。", 37, 9400581, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#不用担心，亚皮纳斯会保护你们的。", 37, 9400584, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#b谢谢你，扎奈特。", 57, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#我只是与他人分享亚皮纳斯给予的祝福而已。", 37, 9400584, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#b但你年纪轻轻就拥有这样的能力，真的很了不起。", 57, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#……过奖了，全靠亚皮纳斯栽培。", 37, 9400584, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.setNumberForQuestInfo(64006, "Ec", 3);
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