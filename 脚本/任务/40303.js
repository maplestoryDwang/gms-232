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
            cm.forceStartQuest(40303, "");
            cm.updateInfoQuest(40303, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/40303.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("哈啊啊啊~好困啊……嗯？来客人了。让我看看，你是来当神仙的吗？到前面来一点。嗯？为什么看着我？我脸上有口水吗？……", 32, 2440000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("你……女神之泪？", 44, 2400005, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("感觉到时间之力了……", 44, 2400006, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("咦？谁把我的真面目给说出来了？看来从你们身上感觉到的这股力量……难道你们是，要成为超越者的人？啊，当时我在神殿里也感觉到了，果然是两个人啊。不过你们怎么来到这里？是来找我的吗？", 32, 2440000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("当然是来找你的……但是你那表情是怎么回事？", 44, 2400005, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("唉……过去好几年都看不到你们来，我以为我已经被遗忘了，你们竟然又突然出现了……那个，#b很抱歉，你们能不能当做没见过我#k？", 32, 2440000, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("什么，你不和我们走了？", 44, 2400006, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("那个……这个嘛，我在武陵过得好好的，为什么要跟你们走呢？回去了也肯定没什么好事，我对现状非常满足。什么女神之泪……我已经#b厌倦#k了。", 32, 2440000, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("#face0#厌、厌倦？！", 44, 2400005, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("嗯，真的已经厌倦了。哈啊啊啊啊。唉，又困了。已打了4个盹了。那么我就先睡了，你们去道场玩玩吧。", 32, 2440000, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.gainExp(3800500);
                                                    cm.forceCompleteQuest(40303);
                                                    cm.forceCompleteQuest(40930);
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