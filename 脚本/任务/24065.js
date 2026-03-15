var status = -1;

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNormalTalk("现在我们……精灵的三位长老全部聚齐了。虽然其他百姓们还被黑魔法师的诅咒困在冰里……但是有国王在，有我们在，我们就不会害怕任何人。", 0, 1033102, false, false)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("现在精灵的三位长老全部聚齐了……你还记得吗？双弩精灵，我们的国王？三位长老全部聚齐的话，就能使用一个魔法。名叫#b纯白净化#k……", 0, 1033100, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("纯白净化的话，我应该……", 2, 1033100, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("本来是在国王遇到危急情况，无法使用力量的时候使用的魔法。可以将所有精灵精神深处最纯洁最高贵的力量召唤出来。使用之后，其他陷入诅咒的人一定就会醒来。", 0, 1033100, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("你们也因为诅咒的影响而变弱了……没关系吗？", 2, 1033100, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("纯白净化可以通过精神共鸣将精灵们连接在一起，增强相互的力量……虽然不是很简单，但只需消耗很少的力量就行。现在马上就可以使用。", 0, 1033100, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("如果那个魔法可以成功……大家就都能醒来吗？那就别再犹豫了。三位长老，请把困在冰里的百姓从痛苦中拯救出来。", 2, 1033100, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.forceStartQuest(24065, "");
                                        cm.fieldEffect_ScreenMsg("mercedes/frame");
                                        cm.fieldEffect_ScreenMsg("mercedes/elfElder");
                                        cm.forceCompleteQuest(24065);
                                        cm.dispose()
                                    } else {
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

function end(c, b, a) {
    cm.dispose()
};