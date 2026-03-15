var status = -1;
var selectionLog = [];

function start(e, c, b) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk("一下雨，颜色就被冲刷掉了。", 4, 9400220, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("我们再次失去了色彩。", 4, 9400220, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("而你又重新恢复了色彩。", 4, 9400220, true, true)
                } else {
                    if (status === a++) {
                        var d = "你能和我们分享你的色彩吗？";
                        if (cm.getNumberFromQuestInfo(63090, "red") > 0) {
                            d += "\r\n#L0#分享红色。#l"
                        }
                        if (cm.getNumberFromQuestInfo(63090, "blue") > 0) {
                            d += "\r\n#L1#分享蓝色。#l"
                        }
                        if (cm.getNumberFromQuestInfo(63090, "green") > 0) {
                            d += "\r\n#L2#分享绿色。#l"
                        }
                        d += "\r\n#L3#不分享色彩。#l";
                        cm.askMenu(d, 5, cm.getNpc())
                    } else {
                        if (status === a++) {
                            if (b == 0) {
                                cm.fieldEffect_BackgroundCanvas(4, 250, 100, 100, 100, 0, cm.getNpc());
                                cm.setNumberForQuestInfo(63090, "red", 0);
                                cm.setNumberForQuestInfo(63089, "red", cm.getNpc());
                                cm.sendNormalTalk("谢谢你。这红色真漂亮，就像5月里盛开的红玫瑰一样娇艳。", 5, cm.getNpc(), false, true)
                            } else {
                                if (b == 1) {
                                    cm.fieldEffect_BackgroundCanvas(4, 75, 150, 255, 100, 0, cm.getNpc());
                                    cm.setNumberForQuestInfo(63090, "blue", 0);
                                    cm.setNumberForQuestInfo(63089, "blue", cm.getNpc());
                                    cm.sendNormalTalk("谢谢你。这蓝色就像秋天的天空一样澄澈鲜明。", 5, cm.getNpc(), false, true)
                                } else {
                                    if (b == 2) {
                                        cm.fieldEffect_BackgroundCanvas(4, 150, 210, 100, 100, 0, cm.getNpc());
                                        cm.setNumberForQuestInfo(63090, "green", 0);
                                        cm.setNumberForQuestInfo(63089, "green", cm.getNpc());
                                        cm.sendNormalTalk("谢谢你。这绿色青翠欲滴，就像春天里新发的嫩芽。", 5, cm.getNpc(), false, true)
                                    } else {
                                        cm.sendNormalTalk("我们想拥有色彩……", 5, cm.getNpc(), false, true);
                                        cm.dispose()
                                    }
                                }
                            }
                            cm.afterlandUpdateEnvironment()
                        } else {
                            if (status === a++) {
                                cm.updateInfoQuest(63050, "NpcSpeech=94002201");
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
}

function stage0(e, c, b) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk("你的色彩真美。", 4, 9400219, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("我也能拥有那样的色彩吗？", 4, 9400219, true, true)
            } else {
                if (status === a++) {
                    var d = "你能和我们分享你的色彩吗？";
                    if (cm.getNumberFromQuestInfo(63090, "red") > 0) {
                        d += "\r\n#L0#分享红色。#l"
                    }
                    if (cm.getNumberFromQuestInfo(63090, "blue") > 0) {
                        d += "\r\n#L1#分享蓝色。#l"
                    }
                    if (cm.getNumberFromQuestInfo(63090, "green") > 0) {
                        d += "\r\n#L2#分享绿色。#l"
                    }
                    d += "\r\n#L3#不分享色彩。#l";
                    cm.askMenu(d, 5, cm.getNpc())
                } else {
                    if (status === a++) {
                        if (b == 0) {
                            cm.fieldEffect_BackgroundCanvas(4, 250, 100, 100, 100, 0, cm.getNpc());
                            cm.setNumberForQuestInfo(63090, "red", 0);
                            cm.setNumberForQuestInfo(63089, "red", cm.getNpc());
                            cm.sendNormalTalk("谢谢你。这红色真漂亮，就像5月里盛开的红玫瑰一样娇艳。", 5, cm.getNpc(), false, true)
                        } else {
                            if (b == 1) {
                                cm.fieldEffect_BackgroundCanvas(4, 75, 150, 255, 100, 0, cm.getNpc());
                                cm.setNumberForQuestInfo(63090, "blue", 0);
                                cm.setNumberForQuestInfo(63089, "blue", cm.getNpc());
                                cm.sendNormalTalk("谢谢你。这蓝色就像秋天的天空一样澄澈鲜明。", 5, cm.getNpc(), false, true)
                            } else {
                                if (b == 2) {
                                    cm.fieldEffect_BackgroundCanvas(4, 150, 210, 100, 100, 0, cm.getNpc());
                                    cm.setNumberForQuestInfo(63090, "green", 0);
                                    cm.setNumberForQuestInfo(63089, "green", cm.getNpc());
                                    cm.sendNormalTalk("谢谢你。这绿色青翠欲滴，就像春天里新发的嫩芽。", 5, cm.getNpc(), false, true)
                                } else {
                                    cm.sendNormalTalk("我们想拥有色彩……", 5, cm.getNpc(), false, true);
                                    cm.dispose()
                                }
                            }
                        }
                        cm.afterlandUpdateEnvironment()
                    } else {
                        if (status === a++) {
                            cm.afterlandUpdateEnvironment();
                            cm.updateInfoQuest(63050, "NpcSpeech=94002201/94002192");
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
}

function end(e, c, b) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk("我们曾短暂地拥有色彩……那时候多么幸福啊……", 4, 9400218, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("我很想重新拥有色彩。", 4, 9400218, true, true)
            } else {
                if (status === a++) {
                    var d = "你能和我们分享你的色彩吗？";
                    if (cm.getNumberFromQuestInfo(63090, "red") > 0) {
                        d += "\r\n#L0#分享红色。#l"
                    }
                    if (cm.getNumberFromQuestInfo(63090, "blue") > 0) {
                        d += "\r\n#L1#分享蓝色。#l"
                    }
                    if (cm.getNumberFromQuestInfo(63090, "green") > 0) {
                        d += "\r\n#L2#分享绿色。#l"
                    }
                    d += "\r\n#L3#不分享色彩。#l";
                    cm.askMenu(d, 5, cm.getNpc())
                } else {
                    if (status === a++) {
                        if (b == 0) {
                            cm.fieldEffect_BackgroundCanvas(4, 250, 100, 100, 100, 0, cm.getNpc());
                            cm.setNumberForQuestInfo(63090, "red", 0);
                            cm.setNumberForQuestInfo(63089, "red", cm.getNpc());
                            cm.sendNormalTalk("谢谢你。这红色真漂亮，就像5月里盛开的红玫瑰一样娇艳。", 5, cm.getNpc(), false, true)
                        } else {
                            if (b == 1) {
                                cm.fieldEffect_BackgroundCanvas(4, 75, 150, 255, 100, 0, cm.getNpc());
                                cm.setNumberForQuestInfo(63090, "blue", 0);
                                cm.setNumberForQuestInfo(63089, "blue", cm.getNpc());
                                cm.sendNormalTalk("谢谢你。这蓝色就像秋天的天空一样澄澈鲜明。", 5, cm.getNpc(), false, true)
                            } else {
                                if (b == 2) {
                                    cm.fieldEffect_BackgroundCanvas(4, 150, 210, 100, 100, 0, cm.getNpc());
                                    cm.setNumberForQuestInfo(63090, "green", 0);
                                    cm.setNumberForQuestInfo(63089, "green", cm.getNpc());
                                    cm.sendNormalTalk("谢谢你。这绿色青翠欲滴，就像春天里新发的嫩芽。", 5, cm.getNpc(), false, true)
                                } else {
                                    cm.sendNormalTalk("我们想拥有色彩……", 5, cm.getNpc(), false, true);
                                    cm.dispose()
                                }
                            }
                        }
                        cm.afterlandUpdateEnvironment()
                    } else {
                        if (status === a++) {
                            cm.addNumberForQuestInfo(63260, "color", 1);
                            cm.updateInfoQuest(63050, "NpcSpeech=94002201/94002192/94002183");
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};