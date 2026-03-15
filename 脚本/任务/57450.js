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
            cm.sendNormalTalk_Bottom("#face0#我也来介绍自己的伙伴给你们认识吧。这位是与织田军结为同盟的德川家康大人。", 37, 9130025, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#我就是家康。还请各位多多关照了。这位是我的家臣本多忠胜。", 37, 9130026, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#（行礼）", 37, 9130075, true, true)
                } else {
                    if (status === a++) {
                        cm.askYesNo_Bottom("#face0#好了，毕竟这里还很危险，可不可以请你们简明扼要地把要说的事情讲清楚呢？", 37, 9130025)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#那我就不绕弯子直接说了。希望你们能让我和家康大人加入联合军。", 37, 9130025, false, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("你们这三位织田军的将领……想要加入联合军！？", 57, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#最初之所以会投靠信长大人，是我被他的性情所吸引。但是这几年，看到日渐残酷的他，我开始怀疑自己是否真的有必要继续跟随在他的左右。", 37, 9130025, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#我们也很清楚，对于一个武士而言，背弃自己的主公是一件多么耻辱的事情。但是，我们也十分确信，继续跟随信长大人只会危害世间。所以才提出了这么一个很难被接受的提议。希望联合军能够允许我们的加入。", 37, 9130025, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#我和织田虽然是同盟关系，但不过是一直被这层关系所束缚着。我对他的做法并不认同。不过现在，我的忍耐已经到达了极限。信长才是所有武人……不，应该是所有人类必须齐心协力共同打倒的敌人。我也希望能够贡献出一份力量。", 37, 9130026, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#能得到你们三位的帮助，相信我们联合军的力量也会壮大不少！", 37, 9130024, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#我不同意你们加入。如果这是敌人的计谋，想要派你们作为探子，从内部瓦解联合军的力量，那对我们而言就太危险了。", 37, 9130023, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#这件事责任重大，不能仅凭我们几人就做出决定。最好还是返回枫叶山丘，和指挥部好好商量一下……", 37, 9130022, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.forceStartQuest(57450, "");
                                                            cm.forceCompleteQuest(57450);
                                                            cm.dispose();
                                                            cm.gainExp(6274891)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/57450.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的结束脚本还没有修复哦。它的脚本位于： #b /脚本/任务/#e" + e + "#n.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻完成这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceCompleteQuest();
                cm.dispose()
            }
        }
    }
};