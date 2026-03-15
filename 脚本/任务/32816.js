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
            cm.sendNormalTalk_Bottom("南哈特队员，说说下一步计划吧。", 37, 1530140, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("现在是时候发生个具体事件了。根据我的研究，人们在危机状况下更容易陷入爱情。因为如果由于紧张导致心脏跳动得更快的话，很容易让人误以为是爱情导致的怦然心动。", 37, 1530070, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("最好先把麦格纳斯老师送到医务室去。因为两个人得呆在一块儿才行。可问题是该如何把麦格纳斯老师送到医务室去呢……", 37, 1530070, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("这事可有难度。体育老师上次被我们放在他水瓶里的感冒病毒感染，还是生平第一次感冒呢。像他那么健康的体质，没理由去医务室啊。", 37, 1530080, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("嗬，那么就让我来施展黑魔术……", 37, 1530140, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("没别的办法，只能让他昏倒了。", 57, 1530144, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("正好#b麦格纳斯#k老师好像在#b学校正门#k。可是要怎么让他昏倒呢？", 57, 1530144, true, true);
                                    cm.effect_NormalSpeechBalloon("?!", 1, 0, 1, 1500, 1530103, cm.getPlayer().getId());
                                    cm.effect_NormalSpeechBalloon("?!", 1, 0, 1, 1500, 1530142, cm.getPlayer().getId());
                                    cm.effect_NormalSpeechBalloon("?!", 1, 0, 1, 1500, 1530082, cm.getPlayer().getId());
                                    cm.effect_NormalSpeechBalloon("?!", 1, 0, 1, 1500, 1530073, cm.getPlayer().getId())
                                } else {
                                    if (status === a++) {
                                        cm.forceStartQuest(32816, "");
                                        cm.effect_Text(["#fn黑体##fs20#计划5. 让麦格纳斯昏倒"], [100, 2500, 5, 80, 0, 1, 4, 0, 0, 0]);
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
            cm.dispose();
            cm.warp(330002307, 0)
        }
    }
};