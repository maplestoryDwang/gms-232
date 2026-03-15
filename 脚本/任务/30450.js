var status = -1;
var selectionLog = [];

function start(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }
    if (cm.getMapId() == 224000000) {
        cm.warp(224000059, 21, true);
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom("哎哟喂，这可如何是好？", 37, 2074136, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("我家！我家要是再着火！", 37, 2074107, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("牛啊，蟾蜍啊，你们去村里待着，太危险了！", 37, 2074150, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("来，来，大家都冷静一下。\r\n自从过去发生过那场大火灾之后，我们不是一直在为这种状况做准备嘛？\r\n大家都冷静一下。", 37, 2074105, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("小可爱和#b#h0##k两个人，还是先赶紧去找出这场火灾的原因。\r\n此事肯定和猜忌宝玉有关。", 37, 2074105, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face3#那我们该怎么办？", 37, 2074100, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("到底是谁，为什么要做这种事情……一定要找出#b火灾的原因#k，阻止火灾！赶紧。\r\n", 37, 2074105, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face2#是！那……啊啊，还有！\r\n你刚刚要说的有关#g猜忌宝玉#k的事情是什么？", 37, 2074100, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("那个，其实……所谓的猜忌，并不是外人能解决的事情。\r\n自我不幸的人是难以摆脱猜忌他人的心理的。", 37, 2074105, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face2#什么？那么到底该怎么……", 37, 2074100, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("……你还记得古话吗？\r\n良善者会成为永远的佳话，\r\n而邪恶者则……", 37, 2074105, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face2#邪恶者终将会，为自己的罪责付出代价……", 37, 2074100, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("我相信会这样的，\r\n方法肯定会有的。", 37, 2074105, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("来，不知不觉就越说越多了！我们得在这里阻止火灾，\r\n要找到#g大火最开始发生的地方#k，赶紧！", 37, 2074105, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#嗯……火最开始发生的地方……\r\n那边#g左上方的地方#k已经全被大火烧成了灰烬……\r\n你不觉得很奇怪吗？", 37, 2074100, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.forceStartQuest(30450, "");
                                                                        cm.forceStartQuest(30926, "1");
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