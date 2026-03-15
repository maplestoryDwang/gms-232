var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

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
            cm.sendNormalTalk("#b(我向佩法说明了来到这里的原因。)#k", 16, 2134009, false, true)
        } else {
            if (status === a++) {
                cm.askMenu("你说你是搭乘异界之门，从其他地方来的……？看你的模样确实不是绯红的居民。被关在这里的人都是这附近小村庄的村民。说出来有些难为情，大家都是因为没什么理论，才被囚禁在这里的。\r\n\r\n#b#L0#没有人来救你们吗？#l", 0, 2134009)
            } else {
                if (status === a++) {
                    cm.askMenu("我不会有那样无谓的希望……你不是绯红的居民，所以什么也不知道。由于持续不断的战争，国家这个词语早就失去了意义，只有几个以村庄为单位的共同体在勉强维系着生活。就在我们艰难度日时，有一批身份不明的暴徒劫持了我们，就像狩猎动物一样。\r\n\r\n#b#L0#为什么？#l", 0, 2134009)
                } else {
                    if (status === a++) {
                        cm.askMenu("我也不太清楚，被劫持当时，我偶然听见他们好像说要把我们当做#b仪式祭品#k。\r\n\r\n#b#L0#仪式祭品……？#l", 0, 2134009)
                    } else {
                        if (status === a++) {
                            cm.askMenu("是的，这是经常发生的事。我说，你还真是什么都不知道啊。之前我虽有点怀疑，可跟你交谈之后，我觉得你应该和劫持我们那股势力不是一伙的。话说回来，我们没发出过什么求援消息呃？\r\n\r\n#b#L0#你们之中，有没有名叫#p2134012#的魔法师？#l", 0, 2134009)
                        } else {
                            if (status === a++) {
                                cm.askYesNo("没有没有。你觉得我们这群人里会有魔法师吗？我从没见过有那样名字的人。", 0, 2134009)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(31243, "");
                                    cm.sendNormalTalk("再想多少遍我的答案也是一样。我们之中没有名叫#p2134012#的人。\r\n\r\n#b(那么#p2134012#在哪里？再去附近找找吧。)", 0, 2134009, false, false)
                                } else {
                                    if (status === a++) {
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