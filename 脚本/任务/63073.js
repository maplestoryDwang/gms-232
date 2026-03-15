var status = -1;
var selectionLog = [];

function start(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk("#b#p9400221#！发生什么事了，人们身上的色彩又消失了？", 2, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("啊，你来了？看样子你已经游历了一圈。找到钥匙了吗？", 4, 9400221, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("#b找是找到几把……先不说这个，色彩为什么又消失了？", 2, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("不久前忽然下了场雨。色彩一碰到雨水就被洗掉了。就像颜料在水里溶解一样，被冲洗得一干二净。", 4, 9400221, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("#b怎么会这样……", 2, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("这没什么好惊讶的。反正本来就不是自己身上的色彩……我就没想过能拥有保持它。只不过他们感到很失落，这点让我有点担心。", 4, 9400221, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("#b要不然我再分你们一点色彩？", 2, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.askYesNo("你能这么做那真是太好了。多少能给他们带来点活力吧。", 4, 9400221)
                                    } else {
                                        if (status === a++) {
                                            cm.forceStartQuest(63073, "");
                                            cm.updateInfoQuest(63073, "");
                                            cm.sendNormalTalk("谢谢，那你去把色彩分享给人们后再过来吧！", 4, 9400221, false, false)
                                        } else {
                                            if (status === a++) {
                                                cm.dispose()
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
                                cm.updateInfoQuest(63073, "NpcSpeech=94002201");
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
}

function stage1(e, c, b) {
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
                            cm.updateInfoQuest(63073, "NpcSpeech=94002201/94002192");
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
}

function stage2(e, c, b) {
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
                            cm.updateInfoQuest(63073, "NpcSpeech=94002201/94002192/94002183");
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
}

function end(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.forceCompleteQuest(63073);
            cm.gainExp(476400);
            cm.updateInfoQuest(63073, "NpcSpeech=94002201/94002192/94002183;exp=1");
            cm.sendNormalTalk("呵呵，你又变成白色的了。谢谢你。", 4, 9400221, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b希望人们能再次开心起来……", 2, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("他们已经明白了自己的缺陷，在弥补缺陷之前，他们将很难重新快乐起来。", 4, 9400221, true, false)
                } else {
                    if (status === a++) {
                        cm.dispose()
                    }
                }
            }
        }
    }
};