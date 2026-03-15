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
            cm.sendNormalTalk_Bottom("这个带有四个菱形图案的纹样一定就是武田家的家纹。但是，为什么这个印笼会出现在敌军手里？武田家的武士一向心高气傲，很难想象他们会向织田军投降。应该是敌兵在进行侦察任务的时候捡到了这个印笼吧。", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.askAcceptDecline_Bottom("也就是说，武田军的武士应该就在这附近吧？每个人到达“这边”的时间和地点都不一样，这种可能性也并不是没有。说不定这个人正是信玄大人本人呢。还是快点去找找看吧。", 57, 0)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(57111, "");
                    cm.dispose()
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
            cm.sendNormalTalk_Bottom("这个带有四个菱形图案的纹样一定就是武田家的家纹。但是，为什么这个印笼会出现在敌军手里？武田家的武士一向心高气傲，很难想象他们会向织田军投降。应该是敌兵在进行侦察任务的时候捡到了这个印笼吧。", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.askAcceptDecline_Bottom("也就是说，武田军的武士应该就在这附近吧？每个人到达“这边”的时间和地点都不一样，这种可能性也并不是没有。说不定这个人正是信玄大人本人呢。还是快点去找找看吧。", 57, 0)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(57111, "");
                    cm.askYesNo_Bottom("#face0#啊啊，你……你不是姐崎剑斗吗？", 37, 9130023)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#啊，真是太好了。没想到能在这种腹背受敌的境况下遇到剑斗你，看来幸运之神还没有抛弃我真田幸村啊。", 37, 9130023, false, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("幸村，你看起来似乎特别疲惫。你没有受伤吧？", 57, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#在本能寺战斗的时候，我突然被一团不可思议的光芒包裹。等我再次醒来的时候，就出现在了这个陌生的地方。还没等我反应过来呢，我就遭到了织田军的袭击。但是身体实在不听使唤，所以只能悄悄躲藏了起来。", 37, 9130023, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#最初醒来的时候，我的主公信玄大人也和我待在一起。但是，在共同对抗敌兵的时候，我们两人也完全被分散了。", 37, 9130023, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.forceCompleteQuest(57111);
                                        cm.gainExp(2574);
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