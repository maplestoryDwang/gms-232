var status = -1;

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("……正如你们所看到的，她现在还没有恢复意识。", 37, 1540511, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("如果让她受些冲击，她会不会醒来？", 37, 1540459, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#她并不是物品。\r\n我不允许你们粗暴地对待她。", 37, 1540450, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("哼，你还真是心慈手软。你看她可怜，就让我们原谅她吗？\r\n虽然她遭到了背叛，但#e她#n怎么说也是黑色之翼的前首领！", 37, 1540511, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("我先提前告诉你，我们反抗者只是在协助联盟而已。\r\n你们别想命令我们。", 37, 1540511, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("这个嘛，我怀疑你们是否有按照命令办事的能力。", 37, 1540451, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("什么？你说够了没有？", 37, 1540511, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("大家都别吵了！", 37, 1540450, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("希纳斯，我们因为那个女人失去了珍贵的同伴。\r\n那个女人非常危险。我们没必要同情她。", 37, 1540452, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("不过，即便如此，我们也不能失去人性。\r\n不能因为他们做了残忍的事情，我们就跟着变得残忍啊", 37, 1540450, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.askMenu_Bottom("#b#h0##k，你是怎么想的？\r\n#b#L0# 女皇说的没错，我们必须保持人性。#l  \r\n#b#L1# 在战争中，仁慈是奢侈品。#l", 37, 1540450)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("果然，你和我的想法一样。", 37, 1540450, false, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("呼……总之，你们放心。\r\n我们不会为获得情报而使用粗暴的手段。", 37, 1540452, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.forceStartQuest(33157, "");
                                                                cm.forceCompleteQuest(33157);
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

function end(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {} else {
            cm.dispose()
        }
    }
};