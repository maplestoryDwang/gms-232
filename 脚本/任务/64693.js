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
            cm.forceStartQuest();
            cm.dispose()
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
            cm.npc_ChangeController(9400928, "oid=1696974", 1200, 300, 94, 1150, 1250, 0, true, false);
            cm.npc_SetSpecialAction("oid=1696974", "summon", 0, 0);
            cm.npc_ChangeController(9400929, "oid=1696975", 1375, 300, 94, 1325, 1425, 1, true, false);
            cm.npc_SetSpecialAction("oid=1696975", "summon", 0, 0);
            cm.npc_LeaveField("oid=208228");
            cm.sendNormalTalk_Bottom("#face0##h0#，#h0#！你来得正好，救救我！", 37, 9400923, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#b出什么事了？", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face2#什~~么事也没有。嘿嘿 ！", 37, 9400920, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face2#呃啊啊！怪物兄妹！", 37, 9400923, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#艾丹……你怎么能这样说呢…… ", 37, 9400921, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face2#艾米说她要练习万圣节捣蛋，埃尔宾说他要制作万圣节派对食物，他俩合起伙来欺负我！", 37, 9400923, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face1#那算什么欺负呀~", 37, 9400920, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face2#你、你！你说学了能让糖果消失的魔术，就一直拿我来练习！你说，你打我后脑勺多少下了？", 37, 9400923, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face3#唔嗯……这个…… ", 37, 9400920, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face3#艾丹，对不起。我替艾米向你道歉。", 37, 9400921, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face2#……埃尔宾，你也一样。", 37, 9400923, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face2#你总是拿着不知道哪来的黑暗料理让我吃……呕，那到底是用什么做的啊？", 37, 9400923, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face2#主要是南瓜，里面加了苹果和香肠。对了！还放了一点奶酪。怎么样？我要把这个蛋糕放到万圣节派对上。", 37, 9400921, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face2#……居然还问我怎么样……", 37, 9400923, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face2##h0#，你现在清楚这两兄妹的真面目了吧？", 37, 9400923, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#b哈哈，看来大家都在认真准备过节，那我就不用担心啦。", 57, 0, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#b艾丹也很享受的样子嘛。我先走了。", 57, 0, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#带、带上我啊！我们一起去看看米兰达在做什么吧。", 37, 9400923, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.forceCompleteQuest(64693);
                                                                                    cm.OnStartNavigation(871000000, 1, "9400924", 0);
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
        }
    }
};