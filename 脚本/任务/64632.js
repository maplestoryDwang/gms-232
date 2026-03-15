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
            cm.sendNormalTalk_Bottom("#face1#这… 这里！没错，就是这里！和明信片一模一样！", 37, 9400920, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face1#我有一种不错的预感。", 37, 9400920, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face3#但这好广阔啊，要从哪开始找呢… 先和人们问问比较好吧！", 37, 9400920, true, true)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(64632, "");
                        cm.OnStartNavigation(865000000, 1, "9390217", 0);
                        cm.dispose()
                    }
                }
            }
        }
    }
}

function stage0(d, c, b) {
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
            cm.sendNormalTalk_Bottom("#face0#打扰了。", 37, 9400921, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#打人了？", 37, 9390217, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#…？", 37, 9400921, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#看来你们没什么幽默感啊……欢迎来到美丽的港口城市凯梅尔兹，有什么事嘛？", 37, 9390217, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face3#……嗯？难道……", 37, 9400920, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#b你知道出售这个明信片的地方吗？", 57, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#不知道啊？", 37, 9390217, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#那你看到过像我这样有橘黄色卷发的女人吗？", 37, 9400920, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#这里每天都有几百人来到凯梅尔兹，我很抱歉无法帮到你们。啊！你们要不要去找美发师 #o9390213#呢？他很擅长记人们的发型。", 37, 9390217, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.updateInfoQuest(64632, "NpcSpeech=93902171");
                                                cm.OnStartNavigation(865000000, 1, "9390213", 0);
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

function stage1(d, c, b) {
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
            cm.sendNormalTalk_Bottom("#face0#橘黄色卷发？嗯……这么说来，小姐你和雷切尔夫人长得很像啊。", 37, 9390213, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#雷……雷切尔？！那就是我妈妈！", 37, 9400920, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#b去哪里能找到她呢？", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#你们去交易所看看吧。不过不久前她说过马上要离开这里了，不知道她还在不在呢~", 37, 9390213, true, true)
                    } else {
                        if (status === a++) {
                            cm.updateInfoQuest(64632, "NpcSpeech=93902171/93902132");
                            cm.OnStartNavigation(865000001, 1, "9390220", 0);
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
            cm.sendNormalTalk_Bottom("#face0#你们好，我能帮你们什……哎呀！还真的找来了呢！", 37, 9390220, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#b真的找来了？", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#雷切尔离开的时候说过，会有长得像她一样的孩子来找她呢。", 37, 9390220, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#已经……离开了……？", 37, 9400920, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#哎呀，别哭呀，都找到这里了为什么要哭啊？", 37, 9390220, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#这里……我还以为来到了这里，呜呜……就能见到妈妈…… ", 37, 9400920, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#……艾米。", 37, 9400921, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#哎呀，总是哭的话，圣诞老爷爷可不会给你礼物的哦~ ", 37, 9390220, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face4#……谁哭了……谁哭了？", 37, 9400920, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#真是乖孩子，等一下哈。你们的父母留下了礼物，我去拿来。", 37, 9390220, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.forceCompleteQuest(64632);
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
};