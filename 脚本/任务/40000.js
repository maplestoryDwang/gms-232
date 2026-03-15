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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, true, true);
            cm.sendNormalTalk("虽然大家已经对这个队形非常熟悉，但是我重新再说一遍。本次任务攻击队只有#p2410008#一人，其他骑士全都是防御队。", 33, 2410002, false, true);
            cm.effect_Voice("Voice.img/Layla/7", 100)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("防御队骑士为防止万一只能在指定地区待命，本次任务的胜败关键，基本上全靠攻击队的实力。", 33, 2410002, true, true);
                cm.effect_Voice("Voice.img/Layla/8", 100)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("任务的最终目标是消灭掉新发现的#r9只#k#r#o9300744##k，发现的位置在#b#m321000300##k区域。", 33, 2410002, true, true);
                    cm.effect_Voice("Voice.img/Layla/9", 100)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("真抱歉，还没等你好好休息，又得让你去战斗了。你也知道，没有影子中和剂是不允许参加战斗的。", 33, 2410002, true, true);
                        cm.effect_Voice("Voice.img/Layla/10", 100)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_MoveAction(0);
                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                            cm.effect_OnUserEff("Effect/OnUserEff.img/questEffect/phantom/tutorial")
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("#face11# #b(影子中和剂，是影子骑士在和#o9300744#战斗之前都会吃的药。药效也很简单，短时间内与#o9300744#接触也不会被消灭。)", 41, 2410008, false, true);
                                cm.effect_Voice("Voice.img/Alpha/16", 100)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("#face11# #b(影子骑士团把这药想得非常重要。如果战斗时没有吃影子中和剂，有可能会受到相当于1级犯人的处罚。)", 41, 2410008, true, true);
                                    cm.effect_Voice("Voice.img/Alpha/17", 100)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("#face11# #b(正是因为这样，才在这个矛盾的村子没有感觉到任何疑问……)", 41, 2410008, true, true);
                                        cm.effect_Voice("Voice.img/Alpha/18", 100)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("#face11# #b(先拿到药再说，不然战斗也去不成了。)", 41, 2410008, true, true);
                                            cm.effect_Voice("Voice.img/Alpha/19", 100)
                                        } else {
                                            if (status === a++) {
                                                cm.updateInfoQuest(40000, "");
                                                cm.forceStartQuest(40000, "");
                                                cm.setInGameDirectionMode(false, true, false);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/40000.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.setInGameDirectionMode(true, true, true);
            cm.sendNormalTalk("啊，原来是#p2410008#啊。这次已经是第九次个人任务吧？小失误有可能会酿成大错，希望你不要放松警惕。不过以你的实力，应该没任何问题，嘿嘿……", 33, 2410000, false, true);
            cm.effect_Voice("Voice.img/Will/12", 100)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("来，这是影子中和剂。持续时间你也知道吧？才3小时……在这时间之内必须要回到村子来。那么你现在把药吃了吧？", 33, 2410000, true, true);
                cm.effect_Voice("Voice.img/Will/13", 100)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("#face5#不……这次的怪物数量不少，我想在战斗前再吃。谢谢你替我操心。", 41, 2410008, true, true);
                    cm.effect_Voice("Voice.img/Alpha/20", 100)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#face0#哪里的话，#p2410008#。千万要记得吃药。", 33, 2410000, true, true);
                        cm.effect_Voice("Voice.img/Will/14", 100)
                    } else {
                        if (status === a++) {
                            cm.forceCompleteQuest(40000);
                            cm.inGameDirectionEvent_MoveAction(2);
                            cm.inGameDirectionEvent_AskAnswerTime(8000);
                            cm.forceStartQuest(32018, "");
                            cm.forceCompleteQuest(32018)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_MoveAction(0);
                                cm.inGameDirectionEvent_AskAnswerTime(500)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("#face11# #b(千万……要记得吃药。那当然，吃了这药才能容易操纵。)", 41, 2410008, false, true);
                                    cm.effect_Voice("Voice.img/Alpha/21", 100)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("#face11# #b(这辈子从来没有起过疑心的这颗药，是能够模糊人类的精神易于洗脑的药，我也是最近才知道的。)", 41, 2410008, true, true);
                                        cm.effect_Voice("Voice.img/Alpha/22", 100)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("#face11# #b(从那以后……我再没吃过这药一次，甚至战斗过数次，但是我还未被怪物消灭。不是因为我实力出众。)", 41, 2410008, true, true);
                                            cm.effect_Voice("Voice.img/Alpha/23", 100)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("#face11# #b(#o9300744#根本就没有能消灭人类的力量，影子骑士团也根本就毫无存在的意义。)", 41, 2410008, true, true);
                                                cm.effect_Voice("Voice.img/Alpha/24", 100)
                                            } else {
                                                if (status === a++) {
                                                    cm.playerMessage(-1, "连击Ctrl键，使用时间之力破坏洗脑药。");
                                                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction13.img/effect/zero/break/0"], [3600, 786, -6, 1, 1, 1, 1, 0]);
                                                    cm.inGameDirectionEvent_BreakEffect("17#17#17#", 2, 2, 2000)
                                                } else {
                                                    if (status === a++) {
                                                        cm.playerMessage(-1, "连击Ctrl键，使用时间之力破坏洗脑药。");
                                                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction13.img/effect/zero/break/0"], [3600, 786, -6, 1, 1, 1, 1, 0]);
                                                        cm.inGameDirectionEvent_BreakEffect("17#17#17#", 2, 2, 2000)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.fieldEffect_PlayFieldSound("Cokeplay/Broken", 100);
                                                            cm.playerMessage(-1, "连击Ctrl键，使用时间之力破坏洗脑药。");
                                                            cm.inGameDirectionEvent_头顶图片(["Effect/Direction13.img/effect/zero/break/1"], [3600, 786, -6, 1, 1, 1, 1, 0]);
                                                            cm.inGameDirectionEvent_BreakEffect("17#17#17#", 2, 2, 2000)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.fieldEffect_PlayFieldSound("Cokeplay/Broken", 100);
                                                                cm.playerMessage(-1, "连击Ctrl键，使用时间之力破坏洗脑药。");
                                                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction13.img/effect/zero/break/2"], [3600, 786, -6, 1, 1, 1, 1, 0]);
                                                                cm.inGameDirectionEvent_BreakEffect("17#17#17#", 2, 2, 2000)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.fieldEffect_PlayFieldSound("Cokeplay/Broken", 100);
                                                                    cm.playerMessage(-1, "连击Ctrl键，使用时间之力破坏洗脑药。");
                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction13.img/effect/zero/break/3"], [3600, 786, -6, 1, 1, 1, 1, 0]);
                                                                    cm.inGameDirectionEvent_BreakEffect("17#17#17#", 2, 2, 2000)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.fieldEffect_PlayFieldSound("Cokeplay/Broken", 100);
                                                                        cm.sendNormalTalk("#face11# #b(……算了，先去把任务做了吧。)", 41, 2410008, false, true);
                                                                        cm.effect_Voice("Voice.img/Alpha/25", 100)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.setInGameDirectionMode(false, true, false);
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
};