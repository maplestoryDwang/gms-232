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
            cm.sendNormalTalk("米纳尔森林南部一直以来就以经常发生奇怪的事情而闻名。但是像这样奇怪的事还是第一次发生。石头山竟然活了，突然站了起来……", 0, 2081000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("乍一听，你也没办法理解是怎么回事吧？但是这种事情确实发生了。", 0, 2081000, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("唯一能解释这种超自然现象的人，应该只有一个人。那就是大精灵古瓦洛……虽然他曾经被黑魔法师迷惑，成为了军团长，但现在已经不再是邪恶的人了。他正在某个地方休养生息。", 0, 2081000, true, true)
                } else {
                    if (status === a++) {
                        cm.askYesNo("我们哈夫林代代都是天空、风和森林的朋友。使用部落代代相传的秘术，就能暂时和大精灵古瓦洛接触……你想现在见见他吗？", 0, 2081000)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("好的，请集中精神……听到他的声音了吗？", 1, 2081000, false, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("岩壁巨人……没想到造出了那种荒唐的东西。全都是我的错。\r\n#b(听到了古瓦洛的声音。)#k", 5, 2210011, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("我也料到了可能会发生这种事。几百年前，我加入了黑魔法师的势力，后来被其中的某人背叛，被他吸收了力量……\r\n一切都是从那时候开始的。我在很长的时间里丧失了对精灵们的支配力，所以导致了奇怪事件的发生。", 5, 2210011, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("这是我的错误造成的，我本应该负起责任。但是我现在失去了力量……请到米纳尔森林南部去调查一个叫岩壁巨人的巨人。", 5, 2210011, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("用普通的方法是无法和岩壁巨人对话的。不过我刚才已经把我的一部分力量分给了你，你现在应可以和岩壁巨人对话了。如果我的推测没错的话……\r\n#b(古瓦洛的神秘力量渗透进了身体。)#k", 5, 2210011, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("好的，再见。需要的时候，我会再找你的。", 5, 2210011, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.forceStartQuest(31331, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/31331.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("你应该已经从大精灵古瓦洛那里听说了，这是非常严重的事件。不过对你这样的勇士来说，这件事一定也挺有趣的。怎么样？准备好了吗？\r\n\r\n\r\n#b怎么才能到岩壁巨人那里去呢？#k", 0, 2081000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("呵呵呵，你这就想走了吗？性子可真够急的。我们哈夫林中的几个探查队员已经去了那里，他们可以帮助你。\r\n\r\n\r\n#b哈夫林？#k", 0, 2081000, true, true)
            } else {
                if (status === a++) {
                    cm.askYesNo("是的，我们种族大部分人都喜欢平静、和平、淳朴的生活，但是……偶尔有些人生来就流淌着探险家的血。我根本没办法阻止那些家伙。\r\n如果你想去的话，我可以马上送你过去。怎么样？", 0, 2081000)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("好的，我马上就送你去。去了之后，顺便帮我看看那里的哈夫林的情况。", 1, 2081000, false, true)
                    } else {
                        if (status === a++) {
                            cm.forceCompleteQuest(31331);
                            cm.gainExp(1925763);
                            cm.dispose();
                            cm.warp(240090000, 0, false)
                        }
                    }
                }
            }
        }
    }
};