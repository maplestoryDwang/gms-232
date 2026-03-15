var status = -1;

function start(d, c, b) {
    if (d == 1) {
        status++
    } else {
        status--
    }
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNext_Illus("神那，刚刚负责盯守#b#m807000000##k外围的哨兵送来了一个不好的消息。他们说，似乎有身穿黑色甲胄的士兵出现在了这附近。")
        } else {
            if (status === a++) {
                cm.sendNextPrevS("果然不出所料，织田军也来到“这边”这个世界了啊。也就是说，本能寺出现的异常变化不仅影响到了我们，也影响到了织田军自己。")
            } else {
                if (status === a++) {
                    cm.sendNextPrev_Illus("听哨兵的描述，这些士兵应该就是织田军的人。不过，敌兵的动作并没有什么组织性，他们也没有携带什么武器装备，应该是织田军的侦察兵吧。")
                } else {
                    if (status === a++) {
                        cm.askAcceptDecline_Illus("他们现在应该还没有注意到我们这个本阵的存在。但要是再让他们这样侦查下去，恐怕#b#m807000000##k被敌人发现也不过是时间的问题了。我相信神那你应该有能力阻止敌人的侦查。不知道这个任务可不可以交给你来负责呢？")
                    } else {
                        if (status === a++) {
                            cm.sendPrev_Illus("太谢谢了，我就知道你是个值得信赖的人。从本阵的东门移动到#b#m807010000##k后，应该就可以看到敌军的侦察兵了。只要能击退大概30名左右的敌军，应该就可以阻止他们的侦查了。好了，接下来就拜托你了。")
                        } else {
                            cm.forceStartQuest();
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
}

function end(d, c, b) {
    if (d == 1) {
        status++
    } else {
        status--
    }
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("#face0#敌人的侦察兵击退得差不多了吗？", 37, 9130006, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#好了，敌情侦查已经完成得差不多了。虽然这是你在“这边”做的第一个任务，但是你完成得非常好。敌人应该还没有发现#b#m807000000##k的存在。而且，织田军也在派遣侦察兵四处查探，看来他们也并没有完全掌握“这边”的世界。", 37, 9130006, true, true)
            } else {
                if (status === a++) {
                    cm.gainItem(4033272, -10);
                    cm.gainItem(2430824, 1);
                    cm.sendNormalTalk_Bottom("#face0#你不必继续战斗下去了。请你返回#b#m807000000##k，去好好休息一下吧。", 37, 9130006, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#对了，你回收的侦查报告里，我们发现了一件非常有趣的事情。这个给你，记得之后去查看一下。", 37, 9130006, true, true)
                    } else {
                        if (status === a++) {
                            cm.OnStartNavigation(807010000, 1, "9130084", 0);
                            cm.forceCompleteQuest();
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};