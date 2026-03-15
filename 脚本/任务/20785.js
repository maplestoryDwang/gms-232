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
            cm.askMenu("呃……果然不能小看。因为是库洛姆的儿子吗？\r\n\r\n#b#L0#你是谁？怎么知道我的？为什么要攻击我？#l", 0, 1106007)
        } else {
            if (status === a++) {
                cm.askMenu("呵呵呵呵……不记得了吗？是的，那是你还小，不记得也很正常。\r\n\r\n#b#L0#不记得……难道你们……就是杀死母亲的人？#l", 0, 1106007)
            } else {
                if (status === a++) {
                    cm.askMenu("这个嘛……可以说是我们杀死的吗？我们清清楚楚地告诉库洛姆，只要他放弃他想做的事情！我们就放过他的妻子。但是他没有来，他逃走了。像个卑鄙的胆小鬼一样。杀死你母亲的人，就是你父亲库洛姆。\r\n\r\n#b#L0#不许胡说！#l", 0, 1106007)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("这个嘛…………虽然我不想承认，但那是事实。而且你比我想象得要弱啊，我是听说库洛姆的儿子出现了，所以想来看看到底是个什么样的家伙，原来是中看不中用啊，居然这么傻。我都跟你说实话了，你还不相信啊？现在，我要走了。你就带着对抛弃母亲的父亲的怨恨而活下去吧。呵呵呵\r\n#b(怪人正逃向幼魔精灵当中。追上去吧！)", 1, 1106007, false, true)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(20785, "");
                            cm.playerMessage(-1, "怪人逃到了幼魔精灵当中!");
                            cm.playerMessage(-1, "调查幼魔精灵, 寻找怪人的痕迹吧!");
                            cm.dispose();
                            cm.warp(913070410, 1, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/20785.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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