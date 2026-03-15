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
            cm.sendNormalTalk_Bottom("#face0#太突然了吗？我没妨碍到你吧？", 37, 9130010, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("没关系，土御门春秋。找我有什么事吗？", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#她……这个世界的女皇突然跟我联系。她秘密地派人来找我，好像是非常重要的事。", 37, 9130010, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("希纳斯？到底是什么事呢？", 57, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#那个去了应该就能知道了……你能替我去一趟吗？", 37, 9130010, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("当然……不过路好像有点远。", 57, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.askAcceptDecline_Bottom("#face0#幸好邀请函上施了移动咒术。接受之后，应该马上可以移动过去。", 37, 9130010)
                                } else {
                                    if (status === a++) {
                                        cm.forceStartQuest(65118, "");
                                        cm.updateInfoQuest(65118, "return=807000000");
                                        cm.dispose();
                                        cm.warp(913050204, 0, false)
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

function stage0(d, c, b) {
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/65118.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.curNodeEventEnd(true);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, true);
            cm.sendNormalTalk_Bottom("#face0#欢迎你，来自异界的魔法师。", 37, 1101000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#是不是有点太突然了？但愿没有太失礼。", 37, 1101000, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("不，我也很想再见见你。", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#再次见到你，我也很高兴。之所以请你到这里来，是有件重要的事。", 37, 1101000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#不久前，我发现黑暗力量开始重新侵蚀这个世界。很久以前，这个世界的英雄们封印了黑魔法师，但他的邪恶力量正再次威胁着这个世界。", 37, 1101000, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#我认为这个世界的所有人必须齐心协力来应对这场危机。黑魔法师的目标不仅仅是我们。吞噬掉这个世界之后，他一定又会开始觊觎其他世界。", 37, 1101000, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#现在你们所在的这个世界和你们想要回去的那个世界……都会陷入危险。", 37, 1101000, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#你愿意助我一臂之力吗？", 37, 1101000, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("不管在任何地方，恶鬼们都会给人们带去痛苦。阻止他们的恶行，是踏上阴阳之路之人的使命。我很乐意帮你。", 57, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#谢谢。这下我们又多了一个可靠的同盟。\r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 36700 exp", 37, 1101000, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.playerMessage(-1, "获得联盟的意志技能");
                                                    cm.playerMessage(5, "获得了<联盟的意志>技能。");
                                                    cm.gainExp(36700);
                                                    cm.teachSkill(40020190, 0, -1);
                                                    cm.teachSkill(40020190, 1, 0);
                                                    cm.forceCompleteQuest(65118);
                                                    cm.eventSKill(0);
                                                    cm.setInGameDirectionMode(false, true, false);
                                                    cm.gainItem(1142355, 1);
                                                    cm.dispose();
                                                    cm.warp(807000000, 0, false)
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
};