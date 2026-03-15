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
            cm.sendNormalTalk("#h0#，我有事情要拜托你。\r\n关于之前那个变身术士的追踪结果，有情报说他现在已经进到冰峰雪域的#b雪原之胜地#k中了。", 1, 1012100, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("雪原之胜地……是冒险家们为了进行转职而接受训练的地方。说不定#h0#你也去过。虽然还不知道那个人的目的，可对于将要进行转职的冒险家们来说，那里是非常重要的地方。所以最好能尽快阻止他。", 1, 1012100, true, true)
            } else {
                if (status === a++) {
                    cm.askAcceptDecline("准备好的话，我立马就送你去雪原之胜地。\r\n\r\n#b#e<接受后，立即移动到地图。>#n#k", 0, 1012100)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("谢谢你。先到的那些人应该已经在等你了。", 1, 1012100, false, true)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(32292, "");
                            cm.dispose();
                            cm.warp(211040401, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/32292.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("#h0#，你来啦！", 4, 1520015, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("(赫丽娜所说的其他冒险家，就是他们啊)", 2, 2030006, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("呵呵，有这么多人，真是太好了。独自一人的话，总归有些不安。", 4, 1520015, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("听说冒充我的家伙在这里，他应该老老实实地给我待着。", 4, 1520017, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("我要把犯人给……当然，情况也有可能正好相反。", 4, 1520018, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("什么？你这家伙也太那个了吧？", 4, 1520017, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("总之，我就是为了应对那种情况而来的。", 4, 1520018, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("那人不是提斯吗？", 2, 2030006, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("我等了很久了，我一开始就在这里等你们了。把有关变身术士在这里的情报提供给你们的人就是我。……那么，没有我这个老人家当累赘，你们应该也能顺利归来的吧！", 4, 1520016, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("瞧你说的。总归是人越多越好咯。再说，一直站在这里也挺冷的，对身体也不是很好，还是快点进去吧。", 4, 1520017, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("嗯，准备好了的话，#h0#，你把手放在这石头上。", 4, 1520015, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("呃呃呃，我不想去，太麻烦！", 4, 1520016, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("准备好了的话，通过水晶移动到其他次元的世界吧。", 2, 2030006, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.gainExp(90000);
                                                                cm.forceCompleteQuest(32292);
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
    }
};