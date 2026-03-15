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
            cm.forceStartQuest(40201, "");
            cm.updateInfoQuest(40201, "");
            cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/40201.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("我听#p2430002#说，有两个陌生的冒险家说帮我们找到#t4033820#……找到#t4033820#了吗？看你们挺年轻的，不过本事还真不小。你们来找我有什么事情吧？", 32, 2430001, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("……什么？不会长大的人……？你们怎么知道#p2430000#的？！找#p2430000#有什么事情？！#r你们该不会是多管闲事还要给村里添乱#k吧？！你们快回去吧！对#p2430000#我不能告诉你们任何事情！", 32, 2430001, true, true)
            } else {
                if (status === a++) {
                    cm.gainExp(2900000);
                    cm.forceCompleteQuest(40201);
                    cm.forceCompleteQuest(40920);
                    cm.sendNormalTalk("#b(#face11#……怎么了？只是对那个人问了一下而已，怎么会这么大反应……叫做#p2430000#的人应该是女神之泪。)", 44, 2400005, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#b(……你们该不会是‘多管闲事还要’给村里添乱？他是这么说的)", 44, 2400006, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("#b(那就是说村里已经发生什么事情，而且原因还是#p2430000#……一开始#p2430002#和斯坦对话的时候，应该有什么事情发生过，并且因为这个事件玛亚受伤了。难道是和女神之泪有关的吗？)", 44, 2400005, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("#b(#face11#……有点奇怪啊，和#p2420000#完全不同。在阿里安特#p2420000#还是受尊敬的宰相……在这里却变成了禁忌。到底是怎么回事？得找个人告诉我们有关#p2430000#的事情。)", 44, 2400005, true, false)
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
};