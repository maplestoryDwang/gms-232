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
            cm.sendNormalTalk("大家都回去了吧？", 4, 1101002, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("你是什么时候……难道一直在看戏吗？", 2, 1013425, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("因为让孩子们陷入了危险，我怕挨骂，所以就没说话。", 4, 1101002, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("……。", 2, 1013425, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("唉，这次真的非常危险。还好把你派过去了，不然也许就出事了。", 4, 1101002, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("到底是怎么回事？怪物为什么会被召唤出来呢？", 2, 1013425, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("据我们这边的魔法师说，所谓的遗物真的就只是些垃圾。问题好像出在那个#r祭坛#k和#r被诅咒的魔道书#k上。稍微调查一下，应该就能知道了。", 4, 1101002, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("字写得像狗啃一样的黑魔法师真的存在吗……。", 2, 1013425, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("对了，孩子们让我把这个交给你。", 4, 1101002, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("这是？", 2, 1013425, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("他们说谢谢你保护了他们，希望你能成为他们的#b古代怪兽#k……。\r\n\r\n#k(#i1143167# #r#t1143167##k)", 4, 1101002, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("哈……哈哈……。", 3, 1013425, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("啊，刚好调查队到了。我先去一下。", 4, 1101002, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.forceStartQuest(35980, "");
                                                                cm.forceCompleteQuest(35980);
                                                                cm.updateInfoQuest(35950, "10=h0;30=h1;11=h0;31=h1;12=h0;32=h1;13=h0;33=h1;14=h0;15=h0;16=h0;17=h0;18=h0;19=h0;00=h0;20=h0;01=h0;21=h0;02=h0;22=h0;03=h0;23=h0;04=h0;24=h0;05=h0;25=h0;06=h0;26=h0;07=h0;27=h0;08=h0;28=h0;09=h0;29=h1");
                                                                cm.gainItem(1143167, 1);
                                                                cm.gainExp(713849);
                                                                cm.gainItem(2439170, 1);
                                                                cm.forceCompleteQuest(35982);
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