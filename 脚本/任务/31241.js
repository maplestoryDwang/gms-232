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
            cm.sendNormalTalk("在开始我的讲述之前……你知道吗，这个魔法图书馆并不是一个普普通通的图书馆。这里看上去虽然挺破旧，但事实上是和魔法师们的#b次元图书馆#k相连接的。", 0, 1032001, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b次元图书馆#k是记录了宇宙所有知识的一个有生命力的空间。简单地说，就是我们建造出来的一种阿卡西记录……即，一个这个世界上所有的魔法师超越时空，记录自己的团体智慧，并共享的未知空间。", 0, 1032001, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("我记录的知识会像鲜活的生命体一样飞往次元图书馆，而那地方的一部分记录也常常会飞来这座魔法图书馆。不过几天前，我在我的图书馆里发现了陌生的书。它估计是通过次元图书馆飞来的。你别看我一大把年纪，每本书都在我脑子里记得清清楚楚的……", 0, 1032001, true, true)
                } else {
                    if (status === a++) {
                        cm.askYesNo("你一定很想知道我从那书里找到了什么吧？", 0, 1032001)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("我解读了那本书其中一页上记录的奇妙文章。那上面是这样写的……\r\n\r\n#b现在绯红正处于毁灭的危险之中。秩序和纪律已消失殆尽，魔族的荣誉不复存在。如果谁能收到这条消息，就请穿过异界之门来到这里帮助我们吧。\r\n- 魔法师里德利#k", 1, 1032001, false, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("这真是件奇妙的事。之前在许多古书上都出现过#b绯红#k的字眼，但没有人知道那到底是个什么样的地方。唯一能知道的信息，就是绯红是#b魔族遥远的故乡#k，位于和冒险岛世界相距甚远的某个地方。", 1, 1032001, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("你也知道的，魔族从数百年前就隐去了踪迹。但最近他们中的一部分人又重新现世，并在隐秘地行动。\r\n我想委托你去调查一下。", 1, 1032001, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("对魔族的故乡绯红进行调查的话，也许可以获得与最近冒险岛世界里那些魔族的动向有关的线索。不管什么事情，总是始于其根源的。", 1, 1032001, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.forceStartQuest(31241, "");
                                            cm.forceCompleteQuest(31241);
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