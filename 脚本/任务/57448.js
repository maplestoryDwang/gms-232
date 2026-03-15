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
            cm.sendNormalTalk_Bottom("#face0#前往本能寺侦查的探子从本能寺内部拿回了一份文书。这份文书似乎是被人直接用箭射出来给我们的。", 37, 9130021, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#而送出这份文书的人你应该也曾有所耳闻……正是织田四天王之一——羽柴秀吉。", 37, 9130021, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("为什么织田军的大将要来联系我们？这里面是怎么写的啊？", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#他说，希望我们能在本能寺附近与他秘密会面。真不清楚他到底是怎么想的。他还说，没办法在信中直接写明目的，还是希望能当面把话说清楚。现在，枫叶山丘的指挥部产生了巨大分歧。一部分人认为应该接受秀吉的提议，前去与他见面。另一部分人则认为这明显是一个陷阱。", 37, 9130021, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#我觉得没什么好争的，这样的文书根本不足以采信。和敌人相比，现在我们的战斗力实在相差甚远。一旦是个陷阱，那对我们来说完全就是一场灭顶之灾。", 37, 9130006, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#嗯，你说的没错。但是，这也可能是一个能让我们获得敌人情报的千载难逢的好机会……", 37, 9130000, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#这有什么好争的！既然有人找我们出去见面，那直接去见他就是。如果这是个陷阱，那直接硬闯出来就是。这种无谓的争论，你们到底想持续到什么时候？与其再这么争下去，不如让我去算了。", 37, 9130009, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#……就是这样一个状况。这件事情你怎么看？", 37, 9130021, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("就请把这个任务交给我来办吧。", 57, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.askYesNo_Bottom("#face0#你确定吗？", 37, 9130021)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#那么，我就去转告大家，说这个任务就交给你来负责了。", 37, 9130021, false, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.forceStartQuest(57448, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/57448.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#各位，这次的任务就交给神那来负责了。", 37, 9130021, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#那怎么行！万一我们在这种时候失去了战斗力……", 37, 9130006, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("就是为了在出现意外的时候尽可能减少我方损失，我才觉得主动请缨的。你们都有着自己负责统率的队伍。而我就只有独自一人，所以才最适合去打探秀吉到底是什么意思。如果这是个陷阱，我一个人处理起来也方便许多。就请你们同意吧。", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#可是……", 37, 9130006, true, true)
                    } else {
                        if (status === a++) {
                            cm.forceCompleteQuest(57448);
                            cm.gainExp(6348411);
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};