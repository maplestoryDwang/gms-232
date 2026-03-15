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
            cm.sendNormalTalk_Bottom("#face2#泉奈现在超生气的。可我只是实话实说啊……", 37, 9111006, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("…………（这家伙情商好低。）", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#有了！我要举办个蘑菇神社选美投票", 37, 9111006, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("（嗯呃……？他突然发什么癫……？）", 57, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face1#泉奈那么漂亮，拿冠军肯定没问题。嘿嘿", 37, 9111006, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#勇士！你要帮帮我！", 37, 9111006, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("哦……好……你说吧，什么事。", 57, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#我打算在#m800000000#入口贴张人气投票栏。麻烦你去帮我通知大家伙儿。", 37, 9111006, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#不要说是我弄的投票哦。", 37, 9111006, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("（看样子暗这家伙是不会听我劝的了。）", 57, 0, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("知道了。那我这就去通知大家。", 57, 0, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face2#对了，你不要告诉女生们，就悄悄告诉男士们就好！", 37, 9111006, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.forceStartQuest(58815, "");
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

function stage0(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom("咳咳……天……天狗。我回来的时候在蘑菇神社前面发现了好玩的东西。", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#……。？？？？", 37, 9111008, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("现在正在进行蘑菇神社选美投票哦！！哈哈，你也去看看吧。", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#哦……等我有空就去看看。", 37, 9111008, true, true)
                    } else {
                        if (status === a++) {
                            cm.updateInfoQuest(58815, "NpcSpeech=91120381");
                            cm.dispose()
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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom("镰鼬，你看见前面贴的蘑菇神社选美投票海报了吗？", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face1#哈？有这事？咯咯咯咯咯，那我要快点去投票。", 37, 9111003, true, true)
            } else {
                if (status === a++) {
                    cm.updateInfoQuest(58815, "NpcSpeech=91120381/91120332");
                    cm.dispose()
                }
            }
        }
    }
}

function stage2(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom("鵺，我听说现在正在举行蘑菇神社选美投票哦。你要不要去投上一票？", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#切，我是那么肤浅的人吗？", 37, 9111004, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face2#对了，竹野子在候选人里不？我要不要去给她投票呢……", 37, 9111004, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("(啊……不行，你给竹野子投票的话……)", 57, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.updateInfoQuest(58815, "NpcSpeech=91120381/91120332/91120343");
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
}

function stage3(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom("棘鬼，神社前面……有好玩的事……", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face1#嘿嘿嘿嘿嘿黑，你说的是蘑菇神社选美投票吧？我已经投过啦。", 37, 9111002, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face1#超搞笑的……明明木野子也是候选人，可是她一张票也没有。", 37, 9111002, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("(……我怎么有种不妙的预感。)", 57, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.updateInfoQuest(58815, "NpcSpeech=91120381/91120332/91120343/91120324");
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
            cm.sendNormalTalk_Bottom("#face1#你已经把消息都告诉给大家了吧？嘿嘿，看样子事情很轻松就能搞定了。", 37, 9111006, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("我说……你把木野子也加进候选人名单了吗……", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face1#对啊！既然是选美投票，当然一个也不能落下啊，不然就没意义了。", 37, 9111006, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("(完蛋了…………)", 57, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#嘿嘿，现在只要去看看投票结果，然后告诉泉奈，她肯定会消气的。", 37, 9111006, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#你也跟我一起去吧。", 37, 9111006, true, true)
                            } else {
                                if (status === a++) {
                                    cm.forceCompleteQuest(58815);
                                    cm.forceStartQuest(58816, "");
                                    cm.dispose();
                                    cm.warp(800021121, 0, false)
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};