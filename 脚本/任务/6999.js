var status = -1;
var selectionLog = [];

function start(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    var a = -1;
    selectionLog[status] = b;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNext("你好, 最近, 我一直听说你的成长速度非常惊人啊。")
        } else {
            if (status === a++) {
                cm.sendNextPrev("也没别的事, 我找你来只是想看看, 身为一位名声大噪的海盗是如何挑战扎昆的。")
            } else {
                if (status === a++) {
                    cm.askAcceptDecline("怎么样? 你想挑战扎昆吗? \r\n#r<< 接受后, 将会移动到#b冰峰雪域山脉长老的公馆#r。>>")
                } else {
                    if (status == a++) {
                        cm.forceStartQuest();
                        cm.warp(211000001);
                        cm.dispose()
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
    var a = -1;
    selectionLog[status] = b;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNext("你来了啊? 看来你想要挑战扎昆啊。")
        } else {
            if (status === a++) {
                cm.sendNextPrev("你做好准备挑战扎昆的话, 请随时来找我吧。")
            } else {
                if (status == a++) {
                    cm.forceCompleteQuest();
                    cm.dispose()
                }
            }
        }
    }
};