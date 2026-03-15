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
            cm.askYesNo("你好，#h0#！需要我为你介绍一下#r冒险岛向导#k吗？", 0, 9010000)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("不知道你现在的等级该干什么？\r\n不知道应该到哪里去做什么事？", 0, 9010000, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("请马上点击#r快捷键U#k，打开#r冒险岛向导#k～", 0, 9010000, true, true)
                } else {
                    if (status === a++) {
                        cm.openUI(202);
                        cm.sendNormalTalk("点击想要了解的内容，就可以查看#b推荐等级、先行任务、奖励#k等信息。此外，通过鼠标右键点击，可以方便地了解#b位置信息#k。", 0, 9010000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("点击向导窗中显示的#fUI/UIWindow4.img/GrowHelp/BtMax/normal/0#按钮，可以查看适合各个等级的内容！", 0, 9010000, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("而且获得各个内容的完成图章后，不论等级如何都可以#r直接移动#k到相关地区！没有次数限制，也没有冷却时间。只要好好使用，会非常便利！", 0, 9010000, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("冒险岛向导的说明就到这里。好了，请马上用用看吧～", 0, 9010000, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.forceCompleteQuest(25981);
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
};