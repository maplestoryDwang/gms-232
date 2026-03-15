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
            cm.forceStartQuest(40206, "");
            cm.updateInfoQuest(40206, "");
            cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/40206.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("噢，这光彩……这光芒！好漂亮的#t4033821#啊！好，有了这个#p2430002#就会很开心地接受我的求……婚……吧。额！被你们听到了？", 32, 2430004, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#face4#嗯？什么？", 44, 2400005, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("没、没听到就算了。", 32, 2430004, true, true)
                } else {
                    if (status === a++) {
                        cm.fieldEffect_PlayBGM("Bgm33.img/SmileZero", 0, 0);
                        cm.sendNormalTalk("除了你要向#p2430002#用#t4033821#求婚之外，其他什么都没听到。", 44, 2400006, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("嘘！嘘！小声点！我喜欢#p2430002#可是秘密啊！不能被别人发现！尤其是把#p2430002#当成女儿的斯坦长老……如果被发现的话……可能会被他杀的！", 32, 2430004, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("#face3#啊哈，原来如此，这就是你的弱点啊……你倒是不打自招了？", 44, 2400005, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("额啊！我又说了些没用的话！喂，你们……快忘记吧！忘掉吧！等以后心情好的时候，我会向所有人公布的！对、对了！你们想要什么？我能为你们做什么？嘿嘿，只要你们能保守秘密，我什么都可以帮你们！", 32, 2430004, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("#face2#你能帮我们什么事呢！算了吧，就告诉我们一件事情，#p2430000#在哪里？你肯定知道吧？", 44, 2400005, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("#p2430000#？你们为什么问起#p2430000#？……难道你们一开始就是为了获得有关#p2430000#的情报，才接近我的吗！", 32, 2430004, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("#face3#你慌什么？只要你告诉我们#p2430000#在哪里，我们就帮你保守秘密。", 44, 2400005, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("可、可怕的家伙……但是我不能说出#p2430000#在哪里！有关#p2430000#的一切都是这个村子的秘密……", 32, 2430004, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("#face4#啊，#p2430001#！我有件事情想要……", 44, 2400005, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("啊！啊啊！我说！我说不就行了！但是你要答应我！不能加害于#p2430000#！", 32, 2430004, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("#face3#……？好吧，我们答应你！我们原本就是来救#p2430000#的，不是来消灭他的。", 44, 2400005, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk("……真的吗？你想去救#p2430000#？真的吗……像你这样的坏蛋……不，不！你想去救#p2430000#，对吧？稍等一下。我会看准适当的时机，告诉你#p2430000#在哪！不是现在，稍等一会儿！你能先把#t4033821#给我吗？", 32, 2430004, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.forceCompleteQuest(40206);
                                                                        cm.forceCompleteQuest(40922);
                                                                        cm.gainExp(3210000);
                                                                        cm.gainItem(4033821, -1);
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
};