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
            cm.sendNormalTalk("你好，#b#h0##k。欢迎加入冒险骑士团。我的名字是#p1101002#?伯恩?卢比斯坦。职务是女皇的谋士。以后我们会经常见面，你至少得记住我的名字才行。呵呵……", 1, 1102107, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("不过你来这里干什么？#h0#？你现在应该正在修炼才对。", 1, 1102107, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("啊，这个……有一只小鸟突然出现，我跟着小鸟就……", 3, 1102107, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("哈哈哈哈，#h0#。没想到你还挺幽默的。你是因为见过我之后，忘不了我帅气的样子，所以跟过来了吗？", 5, 1102112, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("这里太乱了。先和女王一起回去吧。", 5, 1102111, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("#h0#，能见到你，真的非常高兴。下次再见。希望你能成为一名勇敢、虔诚的骑士……", 5, 1102106, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("虽然你是骑士团的一员，但还不是骑士。别说正式骑士，你连修炼骑士的任命都没有获得。你觉得自己可以这样随便乱跑吗？希望你能集中精神修炼。", 1, 1102107, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.forceStartQuest(20835, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/20835.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("别太在意南哈特的话，#h0#。在成为修炼骑士之前，你就见到了我胡克，还有希纳斯女皇和其他骑士团长们，感觉怎么样？你不想自我介绍一下吗？#h0#，快点自我介绍一下吧～！", 1, 1102112, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("大家好，我，我叫#h0#。是接受了女皇的召唤之后来到这里的。我想成为一名勇敢的骑士，击败黑魔法师，守护冒险岛世界！", 3, 1102112, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("你的梦想还挺大的嘛。希望你能成为一个能解决自己事情的人。别给我们惹麻烦。我是黑暗骑士团长伊卡尔特。", 5, 1102111, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("我是火之骑士团长奥兹。欢迎来到圣地。你是从哪里来的呢？", 5, 1102109, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("奥兹，你的问题还真多。我在你身上感觉到了不错的风。我是风之骑士团长伊莉娜。愿好运与你同在。", 5, 1102110, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("我是光之骑士团长米哈尔。希望不要放松警惕，努力自我修炼。身为骑士团的成员，必须展现出自己的意志来。#h0#，很快我们还会见面的。自我介绍就到这里……你快回去吧。", 5, 1102108, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("知道了，米哈尔。#h0#，我还有急事，没时间再谈了。我们先走了～你努力修炼吧。", 1, 1102112, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.forceCompleteQuest(20835);
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