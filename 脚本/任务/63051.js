var status = -1;
var selectionLog = [];

function start(f, d, c) {
    if (status == 0 && f == 0) {
        cm.dispose();
        return
    }(f == 1) ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status == b++) {
            cm.sendNormalTalk("哇！！！！！！！！！！！！！！！！！", 4, 9400224, false, true)
        } else {
            if (status === b++) {
                cm.sendNormalTalk("是怪物！！！！！！！！！！！", 4, 9400225, true, true)
            } else {
                if (status === b++) {
                    cm.sendNormalTalk("#b孩子们，别怕！我是人！", 2, 0, true, true)
                } else {
                    if (status === b++) {
                        cm.sendNormalTalk("妈呀！！！！！！！你为什么是白色的？！", 4, 9400224, true, true)
                    } else {
                        if (status === b++) {
                            cm.sendNormalTalk("你是不是生病了？！", 4, 9400225, true, true)
                        } else {
                            if (status === b++) {
                                cm.sendNormalTalk("#b我没有生病！", 2, 0, true, true)
                            } else {
                                if (status === b++) {
                                    cm.sendNormalTalk("真可怜……", 4, 9400224, true, true)
                                } else {
                                    if (status === b++) {
                                        cm.sendNormalTalk("真可怜……", 4, 9400225, true, true)
                                    } else {
                                        if (status === b++) {
                                            cm.setNumberForQuestInfo(63090, "raining", 1);
                                            cm.setQuestCustomData(63092, "");
                                            cm.setQuestCustomData(63096, "sad");
                                            cm.setQuestCustomData(63252, "destroy");
                                            cm.updateInfoQuest(63089, "green=0;red=0;blue=0");
                                            var a = cm.getNumberFromQuestInfo(63090, "DnN") == 0;
                                            var e = cm.getNumberFromQuestInfo(63090, "lightning") == 1;
                                            if (!e) {
                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/PL_AfterLand/RotationBack", 128);
                                                cm.updateInfoQuest(63095, "angle=" + (a ? 0 : -90));
                                                cm.afterlandChangeMapObject("RotationBack", 0, 0, 0, 1, a ? -90 : 90, 100, 1)
                                            }
                                            cm.afterlandUpdateEnvironment();
                                            cm.updateInfoQuest(63089, "green=0;red=0;blue=0");
                                            cm.sendNormalTalk("#b突然发生什么事了？", 3, 0, true, true)
                                        } else {
                                            if (status === b++) {
                                                cm.sendNormalTalk("呜哇啊啊……", 5, 9400224, true, true)
                                            } else {
                                                if (status === b++) {
                                                    cm.sendNormalTalk("呜呜，真可怜！太令人伤心了！", 5, 9400225, true, true)
                                                } else {
                                                    if (status === b++) {
                                                        cm.askAcceptDecline("(我的模样有那么可怜吗？先让孩子们停止哭泣吧。)", 3, 0)
                                                    } else {
                                                        if (status === b++) {
                                                            cm.forceStartQuest(63051, "");
                                                            cm.sendNormalTalk("#b(为了让孩子们停止哭泣，需要找点什么呢？孩子们喜欢的零食？)", 3, 0, false, true)
                                                        } else {
                                                            if (status === b++) {
                                                                cm.sendNormalTalk("#b(去外面收集些零食吧。)", 3, 0, true, false)
                                                            } else {
                                                                if (status === b++) {
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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/63051.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
            }
        }
    }
}

function end(f, d, c) {
    if (status == 0 && f == 0) {
        cm.dispose();
        return
    }(f == 1) ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status == b++) {
            cm.sendNormalTalk("#b孩子们！别哭了，尝尝这个！是好吃的零食哦。", 2, 0, false, true)
        } else {
            if (status === b++) {
                cm.setNumberForQuestInfo(63090, "raining", 0);
                cm.setQuestCustomData(63092, "");
                cm.setQuestCustomData(63096, "happy");
                cm.setQuestCustomData(63252, "click");
                var a = cm.getNumberFromQuestInfo(63090, "DnN") == 0;
                var e = cm.getNumberFromQuestInfo(63090, "lightning") == 1;
                if (!e) {
                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/PL_AfterLand/RotationBack", 128);
                    cm.updateInfoQuest(63095, "angle=" + (a ? 90 : 180));
                    cm.afterlandChangeMapObject("RotationBack", 0, 0, 0, 1, a ? 90 : -90, 100, 1)
                }
                cm.afterlandUpdateEnvironment();
                cm.sendNormalTalk("零食？唔唔，是零食！", 5, 9400224, true, true);
                cm.gainItem(4034997, -30)
            } else {
                if (status === b++) {
                    cm.forceCompleteQuest(63051);
                    cm.gainExp(476400);
                    cm.updateInfoQuest(63051, "exp=1");
                    cm.sendNormalTalk("#b(雨停了……天气是根据孩子们的心情变化的吗？)", 3, 0, true, false)
                } else {
                    if (status === b++) {
                        cm.dispose()
                    }
                }
            }
        }
    }
};