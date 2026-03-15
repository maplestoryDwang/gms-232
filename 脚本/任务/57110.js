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
            cm.sendNext_Illus("剑斗。刚刚负责盯守枫叶山丘外围的哨兵传来了不好的消息。他们说，似乎有身穿黑色甲胄的士兵出现在了这附近。")
        } else {
            if (status === a++) {
                cm.sendNextPrevS("黑色甲胄……难道是织田军的士兵？果然不出所料，织田军也来到“这边”这个世界了啊！")
            } else {
                if (status === a++) {
                    cm.sendNextPrev_Illus("根据哨兵的描述，这些士兵应该就是织田军的人。不过，敌兵并没有摆出什么阵型，也没有携带什么武器装备，应该是织田军的侦察兵吧。")
                } else {
                    if (status === a++) {
                        cm.askAcceptDecline_Illus("他们现在应该还没有注意到我们这个本阵的存在。但是再让他们这样侦查下去，恐怕枫叶山丘被敌人发现也不过是时间的问题了。我相信剑斗你应该有能力阻止敌人的侦查。不知道这个任务可不可以交给你来负责呢？")
                    } else {
                        cm.forceStartQuest();
                        cm.sendNext_Illus("谢谢，有你在真是太好了。从本阵的东门移动到枫叶坡道后，应该就可以看到敌军的侦察兵了。只要能击退大概30名左右的敌军，应该就可以阻止他们的侦查了。好了，接下来就拜托你了。");
                        cm.dispose()
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
            cm.sendNormalTalk_Bottom("好了，敌人的侦察兵已经击倒得差不多了。枫叶山丘的存在应该没有暴露给敌人知道吧。而且，织田军也在派遣侦察兵四处查探，看来他们也并没有完全掌握“这边”的世界。", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("另外，这个印笼也让我非常在意……上面这四个菱形的家纹……一定就是……", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(57110);
                    cm.updateInfoQuest(15710, "lasttime=19/11/28/16/03");
                    cm.gainItem(4033306, -1);
                    cm.gainExp(2000);
                    cm.dispose()
                }
            }
        }
    }
};