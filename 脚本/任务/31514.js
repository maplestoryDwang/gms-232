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
            cm.sendNormalTalk("为了重新跟#b#p3001100#联系，打开发报机。", 16, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("呵呵，我正在等你跟我联系。我查看过研究结果，虽然能大致掌握了构造，但如果想找到决定性的解决办法，还需要一些线索。", 4, 3001100, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("#b不好意思，我没听懂你在说什么。", 16, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("首先，阶梯装置很有可能利用了光的三原色。维克特原本是画家，所以在使用色彩方面有高超的实力。", 4, 3001100, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("加上他又从魔法画布中获得了力量，因此可能将光之魔法混入色彩中了。简单来说，就是一瞬间将光的原色全部混合，使之变成透明状态。", 4, 3001100, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("将光的三原色全部混合后，会变成透明色。看样子那是个瞬间把阶梯变成透明色后使之消失的装置。", 4, 3001100, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("我需要点时间进行研究，你返回#b市中心黑市#k后我们再说吧。请尽快返回。", 4, 3001100, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.askAcceptDecline("#b要返回市中心黑市吗？\r\n\r\n#r#e（接受时，将自动移至该区域。）", 16, 0)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("#b嗯，赶紧返回市中心黑市，和#p3001100#谈谈吧。", 16, 0, false, true)
                                        } else {
                                            if (status === a++) {
                                                cm.forceStartQuest(31514, "");
                                                cm.forceCompleteQuest(31514);
                                                cm.gainExp(75000);
                                                cm.dispose();
                                                cm.warp(401040000, 0, false)
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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/31514.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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