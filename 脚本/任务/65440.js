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
            cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/furniture_2672135", 128);
            cm.sendNormalTalk_Bottom("#face6#哥哥，哥哥！#h0#，#h0#！快看这个！", 37, 9400920, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#怎么了？", 37, 9400921, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#b发生什么事了？", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face2#嘻嘻……快看今天的销售额，我们马上就要成为富翁了！", 37, 9400920, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face1#艾米，祝，祝贺你。", 37, 9400921, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face1#今年夏天好好营业的话，说不定可以正式开家咖啡店呢？", 37, 9400920, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face1#那我就是艾米老，老板了！ ", 37, 9400920, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face2#太幸福了！妈妈回来的话，一定会大吃一惊吧？嘿嘿", 37, 9400920, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#哎，哥哥？#h0#？你们在这里干嘛？在偷懒吗？现在材料都不够用了，你们还有闲心在这里偷懒？！", 37, 9400920, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#艾米，不是你叫我们来的吗？", 37, 9400921, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#b… ", 57, 0, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#去市场买回来10个芒果，5个柠檬，5个苹果，1个西瓜吧。", 37, 9400920, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0#我知道了……10个芒果，5个柠檬，5个苹果，1个西瓜。", 37, 9400921, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face2#客人，欢饮光临！", 37, 9400920, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.forceCompleteQuest(65440);
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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/65440.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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