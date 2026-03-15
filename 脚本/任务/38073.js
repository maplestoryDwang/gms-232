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
            cm.forceStartQuest();
            cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/38073.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.askMenu("你想好关键词了吗? 那就说出你想搜索的词语吧。\r\n\r\n#b#L0# 黑魔法师#l", 1, 2500002)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("黑魔法师......黑魔法师的搜索结果包括黑魔法师的封印、黑魔法师的军团长、黑魔法师的登场......等, 大概有3849个标题。", 0, 2500002, false, true)
            } else {
                if (status === a++) {
                    cm.askMenu("一定是词语太笼统了, 所以需要更具体的关键词。说出你想搜索的词语吧。\r\n\r\n#b#L0# 黑魔法师的复活#l", 1, 2500002)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("黑魔法师的复活......噢, 刚好搜出一本书。让我看看......嗯......嗯......这真是, 麻烦了。", 0, 2500002, false, true)
                    } else {
                        if (status === a++) {
                            cm.askMenu("看来从市面上无法买到有着相似内容的书籍......我不得不违背约定了。怎么办, 实在是太抱歉了?  你还有其他想好的关键词吗? \r\n\r\n#b#L0# 时间封印#l", 1, 2500002)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("时间封印......有一本名为‘禁锢着黑魔法师的时间封印’的书。好吧, 让我看看......嗯, 原来如此。嗯, 那时候原来是那样。那么这个......", 0, 2500002, false, true)
                            } else {
                                if (status === a++) {
                                    cm.askMenu("好吧, 和这些内容最相近的书叫做#r黑魔法师和五个英雄#k, 你去书店买来就可以了。这两本书基本没什么区别。那么你还有别的词语想要搜索吗? \r\n\r\n#b#L0# ......(附耳低语。)#l", 1, 2500002)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("嗯? 你是说......? 啊啊, 莫非是你的名字? 搜索自己名字的事可不常见。也是, 作为人类当然想知道自己走过的轨迹了。那么稍等, 我这就为你搜索......", 0, 2500002, false, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("......等等。算了, 请不必搜索了。", 2, 2500002, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("嗯? 怎么突然? 哦吼, 莫非你也有什么不想为人所知的秘密? 也是, 有谁会没有秘密呢? 那我就当你没有要搜索的词了。", 0, 2500002, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("(既然是记录了世间万事, 说不定也有关于我的记录。可是, 事到如今那又有什么用呢? 反正摆在我面前的路只能是往前走。)", 2, 2500002, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("(我不会回头看。也许那只会让我更痛苦。)", 2, 2500002, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.teachSkill(25120214, 0, 10);
                                                            cm.teachSkill(25120113, 0, 10);
                                                            cm.teachSkill(25120112, 0, 10);
                                                            cm.teachSkill(25121211, 0, 5);
                                                            cm.teachSkill(25120110, 0, 10);
                                                            cm.teachSkill(25121209, 0, 10);
                                                            cm.teachSkill(25121108, 0, 10);
                                                            cm.teachSkill(25121007, 0, 10);
                                                            cm.teachSkill(25121006, 0, 10);
                                                            cm.teachSkill(25121005, 0, 10);
                                                            cm.teachSkill(25121000, 0, 10);
                                                            cm.updateInfoQuest(1073, "2500=10;2510=37;2511=201;2512=201");
                                                            cm.forceCompleteQuest(38073);
                                                            cm.changeJob(2512);
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
};