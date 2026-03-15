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
            cm.forceStartQuest();
            cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/22564.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("嗯……你好像是人类，到哈夫林的村庄来干什么呢……呃！你旁边的那条龙是玛瑙龙？！是玛瑙龙吗？那么你就是#p1032001#所说的拥有玛瑙龙的人？！", 0, 2081000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b#b(咳，不愧是哈夫林，塔塔曼一下子就认出了#p1013000#是玛瑙龙。但是他是哈夫林，应该不会伤害 #p1013000#。)", 2, 2081000, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("真，真让人吃惊……没想到现在还有活着的玛瑙龙存在。不，不仅是活着的，看它这么小，好像孵化出来还没多久。没想到它真的存在……", 0, 2081000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#b#b……看来#p1032001#发现了#p1013000#是玛瑙龙，但是却装作不知道……)", 2, 2081000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("据我所知！玛瑙龙是通过契约才能诞生的特殊的龙！如果没有契约者的话，它可能连最低等的龙都比不上。你的龙看上去非常强！你难道是……", 0, 2081000, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("#b是的，我是龙神。#p1013000#，你也来打个招呼。", 2, 2081000, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("我不想和主人以外的人说话。", 4, 1013000, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("#b呃……对不起，它有点怕难为情。", 2, 2081000, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("没事，哈哈哈……听说玛瑙龙很警惕，看来果然是真的。没想到我真的能亲眼看到玛瑙龙……", 0, 2081000, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("#b……玛瑙龙很警惕，但为什么灭绝了呢？", 2, 2081000, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("这……嗯……这件事早就被人遗忘了，你可能不知道。在数百年前，有个想要让冒险岛世界灭亡的非常强大而可怕的人，是他让玛瑙龙灭绝了。", 0, 2081000, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("#b……为什么呢？", 2, 2081000, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("这我就不知道了。听说玛瑙龙和他对抗，所以被他灭绝了。我当时还小，所以只知道这些。", 0, 2081000, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("但是看来还没有灭绝啊。现在就有一条玛瑙龙在我们的眼前……你在生活上没有遇到什么不便吗？#m240000000#是有很多用于饲养龙的便利设施，你愿意在这里住下来吗？", 0, 2081000, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk("不要，我喜欢呆在主人身边。", 4, 1013000, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk("听说对于玛瑙龙来说，和契约者的关系比它们的本能还要重要，看来是真的……也是，拥有契约者的玛瑙龙，它的潜力要比任何龙都要强……", 0, 2081000, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk("你知道吗？玛瑙龙的灵魂和契约者紧密相连。契约者的力量可以让玛瑙龙变强，而契约者则可以自由地使用玛瑙龙的力量。", 0, 2081000, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk("但是不是任何人都可以签订契约。玛瑙龙非常挑剔，除非是拥有强大灵魂的人，否则它们是不会轻易和人签订契约的。看来你一定拥有非常强大的灵魂。", 0, 2081000, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk("能看到本以为已经灭绝的玛瑙龙，真让人高兴。虽然很希望它能待在#m240000000#，但恐怕太勉强了。看到了你，我想其他地方应该还有其他玛瑙龙存在。我和#p1032001#不会就此放弃，我们会继续寻找的。", 0, 2081000, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk("如果你有所发现，#p1032001#会与你联系的。\r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 7500 exp ", 0, 2081000, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.gainExp(7500);
                                                                                            cm.forceStartQuest(22564, "");
                                                                                            cm.forceCompleteQuest(22564);
                                                                                            cm.updateInfoQuest(22606, "564=2");
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