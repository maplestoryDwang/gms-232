var status = -1;

function start() {
    action(1, 0, 0)
}

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk("你知道音乐盒的声音是从哪来传来的吗？", 3, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("你难道不害怕吗？闭嘴，快走吧！我还想活命呢。", 5, 3003218, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("！！#r清醒者！", 3, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("清醒又有什么用，反正摆脱不了那些家伙的老巢！", 5, 3003218, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("你觉得那个女人不知道你们的所作所为吗？这只是时间问题而已。", 5, 3003218, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("你看到了路西德？看来你知道些什么。", 5, 3003201, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("切，我先告辞了。跟你们聚在一起，只会加快死亡而已。", 5, 3003218, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("等等，轻举妄动会有危险的。还是躲在被迷惑的居民之间…………", 5, 3003201, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("哼，别管我。", 5, 3003218, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("我去追他。", 5, 3003201, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("(他俩都消失在了右方。快跟上去吧！)", 3, 0, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.forceStartQuest(34322, "");
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

function end(d, c, b) {
    status++;
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