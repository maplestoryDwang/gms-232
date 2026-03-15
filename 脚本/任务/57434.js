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
            cm.sendNormalTalk_Bottom("#face0#没想到这次也是织田军在捣的鬼。他们真的和冒险岛的邪恶组织黑色之翼联手了。那个名叫希纳斯的女孩子所担心的事情还是发生了啊。", 37, 9130081, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("但我还是觉得有些无法释然。织田军究竟想要做什么呢？", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#难道说，正如同我们在冒险岛寻求地位高的人一样，织田军也在寻找新的力量吗？", 37, 9130081, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("之所以我们会寻找新生力量，也是为了与织田军进行抗衡。但是，站在织田军的立场来看，我实在想象不出与黑色之翼的联手能为他们带去怎样的帮助。至今为止，织田军都是以自身压倒性的力量让对手屈服，而从不会主动利用其它势力。", 57, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("而且，织田军还利用阴阳术让魔物们暴动……这件事又会为他们带去怎样的好处呢？这种做法只会让冒险岛陷入混乱而已啊。", 57, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#难道说，他们只是想展现出自己作为邪恶组织的一面？", 37, 9130081, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("森兰丸是负责统领织田军阴阳师的人。虽然他的人格、价值观、性格和处事作风都很有问题，但不得不承认，他确实是个聪明人。他是绝对不会漫无目的地将事情搞得这么大。", 57, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#嗯……看来我们再怎么讨论也是无济于事的了。总之，还是先返回#b#m807000000##k一趟，将事情的始末报告给大家听吧？", 37, 9130081, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("嗯，好提议。话说回来，不知道前往水下世界的兼续现在情况如何了。我也先去#b#m200000000##k看看情况吧。说不定能在那里见到兼续呢。", 57, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.forceStartQuest(57434, "");
                                                cm.dispose();
                                                cm.warp(200000000, 19)
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
            cm.sendNormalTalk_Bottom("#face0#是神那啊。你在#b#m211000000##k的任务已经顺利完成了吗？", 37, 9130022, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("（我把在#b#m211000000##k发生的事情详细说给了兼续听。）", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#你这边也出现了这样的事情啊。其实，我在水下世界也遇到了完全相同的事件。织田军和黑色之翼的联盟……对我们联合军和冒险岛来说，都是一个坏消息啊。", 37, 9130022, true, true)
                } else {
                    if (status === a++) {
                        cm.askAcceptDecline_Bottom("#face0#接下来，我会返回#b#m807000000##k，将在水下世界和#m211000000#两个区域发生的事件报告给大家知道。报告的任务交给我一个人来做就足够了。神那你还是继续留在冒险岛，负责收集织田军和黑色之翼的情报吧。", 37, 9130022)
                    } else {
                        if (status === a++) {
                            cm.forceCompleteQuest(57434);
                            cm.updateInfoQuest(15710, "lasttime=19/11/27/18/02");
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};