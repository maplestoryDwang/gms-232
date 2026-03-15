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
            cm.sendNormalTalk_Bottom("#face0#没想到能在这里遇到你，还真是巧呢。神那你也接下了不少任务正在忙吧？最近一段时间，我们都没能在#b#m807000000##k见到面呢。而且，你的力量似乎已经恢复了大半。我都能感觉到你周身散发出的强大力量呢。", 37, 9130022, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("兼续才是，看上去就像变了个人似的。相信谦信大人也一定会为你的成长而高兴的。不说这个了，你怎么会来到这么偏远的大陆啊？", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#啊，我是受到春秋的指示，前往冒险岛各地负责收集情报的。现在，我正准备赶往一个名为水下世界的水中城镇。冒险岛里充满了各种奇奇怪怪的事物，每到一个地方感觉都很新鲜呢。", 37, 9130022, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#我现在的任务就是打倒信长，让谦信大人的志向能够传遍整个世界。不过，虽说是为了完成任务，但要我离开谦信大人这么长时间，我心中的苦……我心中的痛……究竟要怎样才能得到宽慰啊……呜呜，谦信大人……啊啊，我好想听到谦信大人的声音啊……", 37, 9130022, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#之前我就注意到了，这小子只要一提起谦信，态度就会立刻发生180度的转变。平时明明是个那么严肃认真的人，但一提起谦信简直就变得像个崇拜偶像的……", 37, 9130081, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("为了让这个世界越来越好，我们一起努力吧。相信谦信大人一定也在远方想念并关心着兼续的情况呢。", 57, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.askAcceptDecline_Bottom("#face0#呜呜……谢谢你。神那，你也要加油完成任务啊。", 37, 9130022)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#谦信大人！我是绝对不会输给这种考验的！呜哦哦哦哦哦哦哦哦哦哦哦……", 37, 9130022, false, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#总算是走了啊。简直就像吹过一阵风似的。", 37, 9130081, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("能这么干劲十足总是好的。我们也尽快赶往城镇#b#m211000000##k吧。他们不是说，只要走下这里的天空之城塔，就可以到达冰峰雪域城镇了吗？", 57, 0, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.forceStartQuest(57429, "");
                                                    cm.OnStartNavigation(211000000, 1, "2020005", 0);
                                                    cm.dispose();
                                                    cm.warp(211000000, 8)
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
            cm.sendNormalTalk_Bottom("#face0#嗯？我们是第一次见面吧。你是来找我的吗？", 37, 2020005, false, true)
        } else {
            if (status === a++) {
                cm.gainExp(8000);
                cm.forceCompleteQuest(57429);
                cm.dispose()
            }
        }
    }
};