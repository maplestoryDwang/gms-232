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
            cm.sendNormalTalk_Bottom("现在说这个好像有点不合时宜，不过我实在好奇，你为什么会说雪是爱呢？", 36, 2550001, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("嗯？啊啊……\r\n那是在佣兵团里，最提不起精神时候的事情……", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("有一天我突然明白过来。\r\n我这样的人，不过是在用灰烬和火苗填充这个世界。", 56, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("战斗结束后，我看着一片废墟的村庄，身体因沉重的负罪感而瑟瑟发抖。", 56, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("就在那时，天上突然下起了雪。", 56, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("雪覆盖在了我犯下的错误……一片废墟的世界之上，\r\n整个大地……都变成了白茫茫一片。", 56, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("说起来有点可笑……那白茫茫的雪，在我看来就像是……", 56, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("爱啊。", 36, 2550001, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("我想起了母亲。\r\n你也知道，人犯了罪之后，就会想要找到一个能宽恕自己的人……", 56, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("……", 36, 2550001, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("怎么样，这个答案你满意吗？", 56, 0, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("呃，怎么说呢……", 36, 2550001, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("哈哈哈，好了。准备最后的战斗吧。", 56, 0, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.askYesNo_Bottom("看，敌人冲过来了。不如跟他们拼了？", 36, 2550001)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.playerMessage(5, "请坚守关卡，务必拦住敌人。");
                                                                    cm.dispose();
                                                                    cm.warp(306050500, 0, false)
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
                cm.dispose();
                cm.gainExp(186336)
            }
        }
    }
};