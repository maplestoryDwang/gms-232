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
            cm.sendNormalTalk_Bottom("#face0#通往其他次元的门——次元传送口就在保护膜内部。在进去之前……你还有什么话要说吗？里面……可没时间停留。", 37, 3001551, 0, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#因为沉睡了很久，我对现在的格兰蒂斯几乎一无所知。在进入其他次元之前，我能问你几个问题吗？", 37, 3001500 + cm.getPlayer().getGender(), 1, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#在可以向外部人说明的范围内，我一定会知无不言。", 37, 3001551, 1, 1)
                } else {
                    if (status === a++) {
                        cm.askMenu("好吧，你想知道什么呢？\r\n#b#L0#保护膜#l", 5, 3001551)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#“诺巴的圣物”释放出的强大力量……形成了包围着万神殿的保护膜。是它在保护我们免受麦格纳斯和幽灵军团的侵犯。", 37, 3001551, 0, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#在首都失守的时候，贝尔德当机立断带领我们来到了万神殿。如果不是那样的话，也许我们诺巴族……", 37, 3001551, 1, 1)
                            } else {
                                if (status === a++) {
                                    cm.askMenu("好吧，你想知道什么呢？\r\n#L1#麦格纳斯#l", 5, 3001551)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#麦格纳斯，他贪婪地渴望获得力量……结果背叛了自己的族人，成为了吉伦·达尔莫尔的部下，杀害了先代狂龙战士，占领了首都。", 37, 3001551, 0, 1)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#被先代狂龙战士打败，受了致命伤之后，他为了疗伤逃到了其他次元……据说他成为了其他次元堕落的光明超越者的手下，从而获得了力量。", 37, 3001551, 1, 1)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#他从那里的大精灵身上吸取了生命力……现在成为了赫里希安城堡的暴君。", 37, 3001551, 1, 1)
                                            } else {
                                                if (status === a++) {
                                                    cm.askMenu("好吧，你想知道什么呢？\r\n#L2#次元传送口生成时间#l", 5, 3001551)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#相信你也知道，超越者是创造世界的注视者的三名代理人。分别掌管光明、时间和生命。", 37, 3001551, 0, 1)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0#生命超越者吉伦·达尔莫尔夺取并使用时间超越者克罗妮卡的力量的时候，格兰蒂斯的时空发生了震动，之后就出现了次元传送口。", 37, 3001551, 1, 1)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face0#……虽然无法确定，但据说吉伦·达尔莫尔也曾经使用过次元传送口。", 37, 3001551, 1, 1)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.askMenu("好吧，你想知道什么呢？\r\n#L3#其他次元#l\r\n", 5, 3001551)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#诺巴族了解到其他次元的存在，是最近的事情了。因为之前一直忙着对付麦格纳斯，后来又被封印了起来。", 37, 3001551, 0, 1)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#但是在封印解开之后，我们开始了解到，那里是同样存在超越者的另一个世界。被称为冒险岛世界。", 37, 3001551, 1, 1)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.askMenu("好吧，你想知道什么呢？\r\n#L4#蜂拥而来的人#l", 5, 3001551)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#那个……现在我无法回答你。现在我好像只能这么说。", 37, 3001551, 0, 1)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.askMenu("好吧，你想知道什么呢？\r\n#L5#没别的问题了。#l", 5, 3001551)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#谢谢你，这对我很有帮助。从现在开始，我好像必须亲自去调查了。", 37, 3001500 + cm.getPlayer().getGender(), 0, 1)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#那我把你送到次元传送口那里去。就在大神殿内部。我也会马上过去。", 37, 3001551, 1, 1)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.forceStartQuest(34953, "");
                                                                                                    cm.updateInfoQuest(34995, "00=h1;01=h0;10=h0;02=h0;11=h0;20=h0;12=h0;04=h0;13=h0;50=h0;05=h0;14=h0;23=h0;51=h1;06=h0;15=h0;24=h0;52=h1;07=h0;16=h0;17=h0;09=h0;18=h0;19=h0");
                                                                                                    cm.dispose();
                                                                                                    cm.warp(400000001, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/34953.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.setInGameDirectionMode(true, false, false);
            cm.sendNormalTalk_Bottom("#face0#穿过次元传送口之后，会到达冒险岛世界的六岔路口。你可以从那里到射手村去。我能告诉你的就只有这些……", 37, 3001551, 0, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#啊，我也打算随后再到冒险岛世界去一趟。如果找到了对你有帮助的情报，我会联系你的。", 37, 3001551, 1, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#这次旅行的结果如何，就看你自己了。希望你能完成一次有意义的旅行。", 37, 3001551, 1, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#（听了狂龙战士的话之后，我更加确定了。这绝对不是自然的产物。在另一个世界中一定可以找到他们的痕迹。）", 37, 3001500 + cm.getPlayer().getGender(), 1, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face5#（但是要想抓住高等翼人的尾巴可不容易。也许这将是一次漫长的旅行。好了，出发吧？）", 37, 3001500 + cm.getPlayer().getGender(), 1, 1)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_SetHideEffect(1);
                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 2000, 2000, 198, 80)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(2000)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#阻止同族的疯狂，拯救世界的宿命。内心像玻璃一样纤细的你，真的能在那条残酷的路上坚持下去吗？", 37, 3000001, 0, 1)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#……在深渊中发光的强大意志。只能希望它……能成为克服痛苦的力量。", 37, 3000001, 1, 1)
                                            } else {
                                                if (status === a++) {
                                                    cm.forceCompleteQuest(34953);
                                                    cm.gainExp(8889);
                                                    cm.updateInfoQuest(34953, "exp=1");
                                                    cm.updateInfoQuest(34995, "00=h1;01=h0;10=h0;02=h0;11=h0;20=h0;12=h0;04=h0;13=h0;50=h0;05=h0;14=h0;23=h0;51=h0;06=h0;15=h0;24=h0;52=h1;07=h0;16=h0;17=h0;09=h0;18=h0;19=h0");
                                                    cm.updateInfoQuest(34995, "00=h1;01=h0;10=h0;02=h0;11=h0;20=h0;12=h0;04=h0;13=h0;50=h0;05=h0;14=h0;23=h0;51=h0;06=h0;15=h0;24=h0;52=h0;07=h0;16=h0;17=h0;09=h0;18=h0;19=h0");
                                                    cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647)
                                                } else {
                                                    if (status === a++) {
                                                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(300)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                cm.inGameDirectionEvent_SetHideEffect(0);
                                                                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                cm.eventSKill(0);
                                                                cm.warp(104020000, 4, false);
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
};