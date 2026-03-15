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
            cm.askMenu("如果你想说大宇是怪物, 我根本不想听, 你快走吧！……嗯？这不是锂吗？从颜色看, 应该是最高级的锂……状态也很好……嗯？你要把它给我？呵呵……锂的话, 我就不客气了. 对了……这是为什么呢？\r\n\r\n#L0##b我想告诉你大宇是怪物. #l \r\n\r\n#L1##b你听说前往沙漠的商团遭到了怪物的袭击吗？#l", 0, 2100001)
        } else {
            if (status === a++) {
                cm.askMenu("商团？……护卫的人手好像太少了. 火焰之路虽然没有太危险的怪物, 但也不能那样粗心大意……在沙漠里必须时刻保持警惕才行. \r\n\r\n#L0##b消灭了大宇, 就不会发生这种事情了. #l \r\n\r\n#L1##b这都是因为王妃对村子周围的治安疏于管理. #l", 0, 2100001)
            } else {
                if (status === a++) {
                    cm.askMenu("没错！都是因为王妃！自从那个女人来了之后……原本很聪明的阿得拉８世全变了, 阿里安特也逐渐变得干旱！绿洲变成了荒漠！这都是因为那个女人！\r\n\r\n#L0##b王妃施行暴政, 不知道沙漠的守护神会怎么做. #l \r\n\r\n#L1##b必须尽快组织军队, 使国家摆脱王妃的压迫！#l", 0, 2100001)
                } else {
                    if (status === a++) {
                        cm.askMenu("……这个嘛. 要是大宇能稍微出一点力就好了. 守护神也不闻不问的……\r\n\r\n#L0##b所以……大宇已经成了怪物, 不是吗？#l \r\n\r\n#L1##b大宇只是个怪物, 所以这是没办法的事. #l", 0, 2100001)
                    } else {
                        if (status === a++) {
                            cm.askMenu("……你说什么？大宇变成了怪物……他可是阿里安特的守护神啊……不过也是……阿里安特已经和过去不同了……\r\n\r\n#L0##b所以说嘛. 阿烈达王妃在吸收沙漠的精气, 大宇也失去了原来的灵性, 变成了怪物……#l", 0, 2100001)
                        } else {
                            if (status === a++) {
                                cm.forceCompleteQuest(3953);
                                cm.sendNormalTalk("对……也许你的话是对的. 阿里安特变成了这样……这也许是因为大宇变了的缘故. 也许大宇真的已经变成了怪物……就像年轻人说的那样, 到了除掉大宇的时候了……", 0, 2100001, false, false);
                                cm.dispose();
                                cm.warp(260000201, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/3953.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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