var status = -1;
var selectionLog = [];

function start(mode, type, selection) {
    if (status >= 0 && mode == 0) {
        cm.dispose();
        return
    }(mode == 1) ? status++ : status--;
    selectionLog[status] = selection;
    var i = -1;
    if (status <= i++) {
        cm.dispose()
    } else {
        if (status == i++) {
            cm.sendNormalTalk("你那样帮我，而且刚才还打倒了怪物。看来" + cm.getPlayer().getName() + " 你已经是一个像模像样的冒险家了。你决定好选择哪个职业了吗？", 1, 10306, false, true)
        } else {
            if (status === i++) {
                cm.sendNormalTalk("#b哪个职业？#k", 17, 10306, true, true)
            } else {
                if (status === i++) {
                    cm.sendNormalTalk("恩，现在开始，你要去的金银岛中，有另外五种职业可以进行转职。嗯，我记得是……战士、魔法师、弓箭手、飞侠和海盗。有这五种职业。", 1, 10306, true, true)
                } else {
                    if (status === i++) {
                        cm.sendNormalTalk("#b那些职业各有什么不同呢？#k", 17, 10306, true, true)
                    } else {
                        if (status === i++) {
                            cm.sendNormalTalk("首先，战士的力量和体力很强，适合近距离战斗。同时，防御力也相当出色，所以不会轻易倒下。魔法师与战士不同，通过魔法进行战斗，所以相比力量，智力更加重要。因为使用魔法，所以可在远距离一次攻击多个敌人。", 1, 10306, true, true)
                        } else {
                            if (status === i++) {
                                cm.sendNormalTalk("说到远距离攻击，弓箭手才是最适合的。其可以在远距离使用箭矢，并且控制距离的能力也相当出色。飞侠虽有不亚于战士的近距离战斗能力，但在战斗时往往以速度为主，而非力量。", 1, 10306, true, true)
                            } else {
                                if (status === i++) {
                                    cm.sendNormalTalk("最后一个，海盗……其特征很难用一句话来概括。海盗既能用体术发动近身攻击，又能在远距离用手枪或大炮进行攻击。而且，无论哪种攻击方式，都相当华丽和富有个性。", 1, 10306, true, true)
                                } else {
                                    if (status === i++) {
                                        cm.askMenu("船长已经跟转职官联系过了，只要你现在先决定好的话，待会儿一到港口就能立即收到转职官的联系。" + cm.getPlayer().getName() + "你要选择什么职业呢？\r\n#b#L1# 具备强大力量和防御力的战士#l\r\n#L2# 利用高超的智力使用魔法的魔法师#l\r\n#L3# 善于远距离攻击和控制距离的弓箭手#l\r\n#L4# 进行快速攻击的飞侠#l \r\n#L5# 战斗风格华丽独特的海盗#l#k", 1, 10306)
                                    } else {
                                        var reactor = "action" + selectionLog[8];
                                        eval(reactor)(mode, type, selection, i)
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

function action1(d, c, b, a) {
    if (status <= a++) {
        cm.forceStartQuest(1406, "1");
        cm.sendNormalTalk("嗯！" + cm.getPlayer().getName() + "你一定能够成为帅气的战士！", 1, 10306, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk("" + cm.getPlayer().getName() + "成为战士的话，那我要不要成为法师呢？虽然可能还做得不够好，但也许能在远处用魔法帮助别人。", 1, 10306, true, true)
        } else {
            if (status === a++) {
                cm.curNodeEventEnd(true);
                cm.setInGameDirectionMode(true, false, false);
                cm.fieldEffect_PlayFieldSound("advStory/whistle", 100);
                cm.inGameDirectionEvent_AskAnswerTime(2000)
            } else {
                if (status === a++) {
                    cm.effect_Direction("Effect/Direction3.img/adventureStory/Scene2", 0, 0, 0);
                    cm.sendNormalTalk("看来现在船要出发了！", 1, 10306, false, true)

                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(32216);
                        cm.updateInfoQuest(39391, "level=1");
                        cm.gainExp(1242);
                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                        cm.setInGameDirectionMode(false, true, false);
                        cm.dispose();
                        while (cm.getLevel() < 10) {
                            cm.getPlayer().levelUp()
                        }
                        cm.warp(4000004, 0, false)
                    }
                }
            }
        }
    }
}

function action2(d, c, b, a) {
    if (status <= a++) {
        cm.forceStartQuest(1406, "2");
        cm.sendNormalTalk("嗯！" + cm.getPlayer().getName() + "你一定能够成为帅气的魔法师！", 1, 10306, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk("我想成为战士。我不想一味接受别人的帮助，而是想在将来成为能够独当一面的冒险家。当然，如果我的力量可以帮到别人的话，那就更好了。", 1, 10306, true, true)
        } else {
            if (status === a++) {
                cm.curNodeEventEnd(true);
                cm.setInGameDirectionMode(true, false, false);
                cm.fieldEffect_PlayFieldSound("advStory/whistle", 100);
                cm.inGameDirectionEvent_AskAnswerTime(2000)
            } else {
                if (status === a++) {
                    cm.effect_Direction("Effect/Direction3.img/adventureStory/Scene2", 0, 0, 0);
                    cm.sendNormalTalk("看来现在船要出发了！", 1, 10306, false, true)

                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(32216);
                        cm.updateInfoQuest(39391, "level=1");
                        cm.gainExp(1242);
                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                        cm.setInGameDirectionMode(false, true, false);
                        cm.dispose();
                        while (cm.getLevel() < 10) {
                            cm.getPlayer().levelUp()
                        }
                        cm.warp(4000004, 0, false)
                    }
                }
            }
        }
    }
}

function action3(d, c, b, a) {
    if (status <= a++) {
        cm.forceStartQuest(1406, "3");
        cm.sendNormalTalk("嗯！" + cm.getPlayer().getName() + "你一定能够成为帅气的弓箭手！", 1, 10306, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk("我想成为战士。我不想一味接受别人的帮助，而是想在将来成为能够独当一面的冒险家。当然，如果我的力量可以帮到别人的话，那就更好了。", 1, 10306, true, true)
        } else {
            if (status === a++) {
                cm.curNodeEventEnd(true);
                cm.setInGameDirectionMode(true, false, false);
                cm.fieldEffect_PlayFieldSound("advStory/whistle", 100);
                cm.inGameDirectionEvent_AskAnswerTime(2000)
            } else {
                if (status === a++) {
                    cm.effect_Direction("Effect/Direction3.img/adventureStory/Scene2", 0, 0, 0);
                    cm.sendNormalTalk("看来现在船要出发了！", 1, 10306, false, true)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(32216);
                        cm.updateInfoQuest(39391, "level=1");
                        cm.gainExp(1242);
                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                        cm.setInGameDirectionMode(false, true, false);
                        cm.dispose();
                        while (cm.getLevel() < 10) {
                            cm.getPlayer().levelUp()
                        }
                        cm.warp(4000004, 0, false)
                    }
                }
            }
        }
    }
}

function action4(d, c, b, a) {
    if (status <= a++) {
        cm.forceStartQuest(1406, "4");
        cm.sendNormalTalk("嗯！" + cm.getPlayer().getName() + "你一定能够成为帅气的飞侠！", 1, 10306, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk("我想成为战士。我不想一味接受别人的帮助，而是想在将来成为能够独当一面的冒险家。当然，如果我的力量可以帮到别人的话，那就更好了。", 1, 10306, true, true)
        } else {
            if (status === a++) {
                cm.curNodeEventEnd(true);
                cm.setInGameDirectionMode(true, false, false);
                cm.fieldEffect_PlayFieldSound("advStory/whistle", 100);
                cm.inGameDirectionEvent_AskAnswerTime(2000)
            } else {
                if (status === a++) {
                    cm.effect_Direction("Effect/Direction3.img/adventureStory/Scene2", 0, 0, 0);
                    cm.sendNormalTalk("看来现在船要出发了！", 1, 10306, false, true)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(32216);
                        cm.updateInfoQuest(39391, "level=1");
                        cm.gainExp(1242);
                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                        cm.setInGameDirectionMode(false, true, false);
                        cm.dispose();
                        while (cm.getLevel() < 10) {
                            cm.getPlayer().levelUp()
                        }
                        cm.warp(4000004, 0, false)
                    }
                }
            }
        }
    }
}

function action5(d, c, b, a) {
    if (status <= a++) {
        cm.forceStartQuest(1406, "5");
        cm.sendNormalTalk("嗯！" + cm.getPlayer().getName() + "你一定能够成为帅气的海盗！", 1, 10306, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk("我想成为战士。我不想一味接受别人的帮助，而是想在将来成为能够独当一面的冒险家。当然，如果我的力量可以帮到别人的话，那就更好了。", 1, 10306, true, true)
        } else {
            if (status === a++) {
                cm.curNodeEventEnd(true);
                cm.setInGameDirectionMode(true, false, false);
                cm.fieldEffect_PlayFieldSound("advStory/whistle", 100);
                cm.inGameDirectionEvent_AskAnswerTime(2000)
            } else {
                if (status === a++) {
                    cm.effect_Direction("Effect/Direction3.img/adventureStory/Scene2", 0, 0, 0);
                    cm.sendNormalTalk("看来现在船要出发了！", 1, 10306, false, true)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(32216);
                        cm.updateInfoQuest(39391, "level=1");
                        cm.gainExp(1242);
                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                        cm.setInGameDirectionMode(false, true, false);
                        cm.dispose();
                        while (cm.getLevel() < 10) {
                            cm.getPlayer().levelUp()
                        }
                        cm.warp(4000004, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/32216.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的结束脚本还没有修复哦。它的脚本位于： #b /脚本/任务/#e" + e + "#n.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻完成这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceCompleteQuest();
                cm.dispose()
            }
        }
    }
};