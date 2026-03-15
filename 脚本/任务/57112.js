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
            cm.sendNext("我愿意相信剑斗你的实力。不知道可不可以请你帮忙一起去寻找信玄大人呢？我也知道，作为一个武士，去请求其他人帮忙搜索自己的主公，是一件多么耻辱的事情……但是你也看到了，我现在根本就连站都站不住了。")
        } else {
            if (status === a++) {
                cm.askAcceptDecline("虽然时间不长，但你毕竟也曾是武田家的客将。希望你能在信玄大人遇到危险之前，尽快将他解救出来。就拜托你了。")
            } else {
                if (status === a++) {
                    cm.sendNext("我和信玄大人是在后方的枫叶坡道2醒来的。说不定信玄大人还留在那里呢。")
                } else {
                    if (status === a++) {
                        cm.sendNextPrevS("我明白了。信玄大人的搜索任务就包在我身上吧。登上远处的那座丘陵，就能够看到联合军的新阵地了。等你的体力恢复之后，可以尽快赶去那边与大家汇合。")
                    } else {
                        if (status === a++) {
                            cm.sendNextPrev("真是太谢谢你了。好了剑斗，信玄大人就交给你了。")
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
            cm.sendNext_Illus("你是来取我甲斐之虎的项上人头的吗？啊哈哈，虽说我已经疲惫不堪，但想取我的人头可没那么简单。不怕死的就来吧！")
        } else {
            if (status === a++) {
                cm.sendNextPrevS("信玄大人，我可不是敌人。是我，剑斗。武田家的客将——姐崎剑斗啊。")
            } else {
                if (status === a++) {
                    cm.askYesNo_Illus("是剑斗啊！啊哈哈，没想到居然是你，我真是白白虚张声势了一番啊！真没想到能在这里遇到你，实在是太好了。明明我们才在本能寺的中庭分开没有多久，但却像是久别重逢一样，真让人高兴啊。")
                } else {
                    if (status === a++) {
                        cm.sendNextPrev("在本能寺战斗的时候，我突然被一团不可思议的光芒包裹。等我再次醒来的时候，就出现在了这个陌生的地方。还没等我反应过来呢，我就遭到了织田军的袭击。但是身体实在不听使唤，所以只能悄悄躲藏了起来。")
                    } else {
                        if (status === a++) {
                            cm.sendNextPrev("最初醒来的时候，我的主公信玄大人也和我待在一起。但是，在共同对抗敌兵的时候，我们两人也完全被分散了。")
                        } else {
                            cm.forceCompleteQuest();
                            cm.gainExp(1544);
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};