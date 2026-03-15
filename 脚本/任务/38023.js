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
            cm.sendNext("生活在山另一边的老虎因为缺乏伴侣而常来我们狐狸村庄偷新娘呢。如果没有你，那就糟糕啦。真的很感谢你。阿琅狠狠地教训了那些老虎，他们短期内应该不敢再来了。当然，太平的日子肯定不会持续太久呢。", 3002005)
        } else {
            if (status == a++) {
                cm.sendNext("之前虽然我表面上认可你是只真正的狐狸了，但内心还是觉得你是外邦人。但是，通过这次的事情，我觉得你真的是我们的家人。我们村子中的狐狸们也是这么认为的呢。", 3002005)
            } else {
                if (status == a++) {
                    cm.sendNext("#e所以#n\r\n\r\n我们为你准备了非常特别的礼物！呵呵，这次我也花了不少心思。和之前的礼物根本不是一个级别的。嗯，你就好好期待吧。", 3002005)
                } else {
                    if (status == a++) {
                        cm.askAcceptDecline("看你的表情，好像非常期待的样子。礼物已经放到你家里了，快去看看吧。虽然直接交给你也可以，但我们狐狸是很害羞的种族。", 3002005)
                    } else {
                        if (status == a++) {
                            cm.forceStartQuest();
                            cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/38023.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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