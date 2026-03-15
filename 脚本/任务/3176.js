var status = -1;

function start(d, c, b) {
    (d == 1) ? status++ : status--;
    var a = -1;
    cm.OnStartNavigation(211060800, 1, "2161002", 3176);
    cm.forceStartQuest();
    cm.dispose()
}

function end(d, c, b) {
    (d == 1) ? status++ : status--;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNext("就像你看到的，我们王国位于冰雪覆盖的地区，是个土地贫瘠的贫穷小国。也许是因为这样，这里的人们反而拥有一颗热情的心……对物质方面的享受并不在意。")
        } else {
            if (status == a++) {
                cm.sendNext("所以才会那样的。听说黑魔法师出现的传闻的时候都还是很坦然的。因为不管黑魔法师的目的是什么他都不会闯进我们王国来。当时我们是个没什么值得抢的国家。")
            } else {
                if (status == a++) {
                    cm.sendNext("反黑魔法师同盟成立之后，他们向我们请求协助，但我们的想法依旧没有变。我们说黑魔法师和我们没关系，对于这个贫瘠的地方来说，每一个士兵的生命都是宝贵的，因此拒绝参加同盟……这就是我们的结论。")
                } else {
                    if (status == a++) {
                        cm.sendNext("但是反黑魔法师同盟不接受我们的拒绝。他们把我们说成是黑魔法师的手下，并向我们发动攻击。我们拼命抵抗，但我也说过，我们王国是个贫穷的国家……不久之后，我们的防线就崩溃了。")
                    } else {
                        if (status == a++) {
                            cm.sendNext("等出去试图说服反魔法师同盟的国王回来的时候，我们的城已经是一片火海了。他一定遭受了巨大的冲击，因为他失去了一切。陷入绝望和愤怒的国王……最终选择成为了黑魔法师的手下。")
                        } else {
                            if (status == a++) {
                                cm.forceCompleteQuest();
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
};