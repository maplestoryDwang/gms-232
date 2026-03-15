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
            cm.sendNormalTalk("恩？还没有找到适合的情报收集工作啊……难道有什么其他需要的吗？难不成有什么有趣的情报？\n\r\n", 8, 1002104, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("(见到黑色之翼的人偶术士并进行了交谈。)", 2, 1002104, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("果然，黑色之翼的人偶师#p1204001#……肯定是他。#m100000000#发生的#o1210102#异常事件，以及#o1110100#变得残暴的原因，肯定都是因为那家伙。不过…… 那家伙曾提起过黑魔法师？", 8, 1002104, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("现在想来，很久之前就曾收到过情报，说是有一群势力打算重新唤醒黑魔法师，我原以为是唬人的，看样子并非如此啊……难道他们真的打算复活黑魔法师吗？预言是真的吗？", 8, 1002104, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("这个名叫黑色之翼的组织看来很有必要去调查一下才好，虽说这个组织看上去非常的隐秘……但终究是逃脱不了情报商人#p1002104#的情报网的，如果我找到了什么相关的情报会告诉你的，还请英雄去一趟#b#m140000000##k，将此事告诉#b#p1201000##k。", 8, 1002104, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("英雄的回归，追随黑魔法师的势力，还有预言……所有的事情都环环相扣，作为唤醒英雄的当事人，#p1201000#也有权知道此事。#p1201000#对英雄进行了多年的研究，说不定能帮上什么忙。", 8, 1002104, true, true)
                            } else {
                                if (status === a++) {
                                    cm.askYesNo("如果你同意我就送你去里恩。", 0, 1002104)
                                } else {
                                    if (status === a++) {
                                        cm.forceStartQuest(21720, "");
                                        cm.dispose();
                                        cm.warp(140000000, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/21720.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("有什么事吗？你不是一直在金银岛上修炼吗？真相叔叔还带口信说你帮了大忙了。……什么？黑色之翼？", 8, 1201000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b（讲述有关人偶师、黑色之翼，以及黑色之翼的目的事情。）#k", 2, 1201000, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("原来是这样……叫黑色之翼啊。居然还有这么一帮人……明知很危险也要在冒险岛世界里复活黑魔法师，太不像话了。", 8, 1201000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("是，是啊……#b（他的语气突然变得很决断，好可怕。）#k", 2, 1201000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("预言里只说到英雄会苏醒，与黑魔法师战斗。但我还一直半信半疑，这下我才明白黑魔法师是真的存在的。", 8, 1201000, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("是不是很可怕？", 2, 1201000, true, true)
                            } else {
                                if (status === a++) {
                                    cm.askYesNo("有什么可怕的？管他是什么黑魔法师还是什么别的，你都会将他们一一打倒的，还有什么好担心的呢？我们只会觉得斗志更加高涨。啊，对了，我发现了这个#b技能#k……看一眼吗？", 0, 1201000)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("你正在渐渐地变得强大起来。我会为让你强大起来而倾尽全力帮助你的。有什么好害怕的呢？千万不能退缩。我们为了打败黑魔法师不是已经等待了数百年了吗？这次一定会取得胜利的！", 8, 1201000, false, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("呐，为了这个目标必须继续修炼！修炼明白吗？前往金银岛继续修炼吧。一定要练到能打败黑魔法师的程度才行！", 8, 1201000, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("#b（咦？情报商人特鲁突然跟我说话。好像有什么事。通过画面左侧的任务提示确认一下吧。）#k", 2, 1201000, true, false);
                                                cm.forceStartQuest(21720, "");
                                                cm.forceCompleteQuest(21720);
                                                cm.gainExp(3000);
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
};