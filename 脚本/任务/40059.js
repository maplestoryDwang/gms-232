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
            cm.sendNormalTalk("……这么说来……神木村的幼龙发现了巨大的沙漏，玩耍的时候#b吸收了时间圣物的力量#k，变成了现在这副模样。", 36, 2400000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("但是，不知怎么回事幼龙变成了凶恶的#p2411011#，吸收的圣物也无法分离……是这样吧？", 36, 2400000, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("……#p2411011#并没有那么凶暴。", 45, 2400006, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("虽然长得很丑。", 45, 2400005, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("啊哈，原来如此。这也有可能，因为时间圣物是时间超越者的东西，如果不是主人的话就有可能会受到#r时间的诅咒#k。", 36, 2400000, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("我估计那个幼龙就是这样，以为圣物只是个单纯的沙漏，但是却受到了诅咒。受到时间诅咒的对象，会因为扭曲的时间会变成奇怪的形态，这也可以理解。", 36, 2400000, true, true);
                                cm.gainSkillBuff(100001263)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("解除时间的诅咒，也只有时间圣物的主人，也就是你们两位才能做……不过面对你们两位，圣物应该要自动分离出来才对，但是既然没有自动分离……", 36, 2400000, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("有可能是#r圣物在发脾气#k。毕竟两位主人放置圣物这么长时间不管，当然这也不是两位所愿意的，但圣物却不知道这之间的事情。", 36, 2400000, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("圣物……还会生气？", 45, 2400006, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("是的，我上次也说过吧？圣物会变成最适合主人的形态……换句话说，#b圣物也有自我，可以随着主人变身#k。", 36, 2400000, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("怎么这么麻烦……那想让圣物解气，我们该怎么办？", 45, 2400005, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("是啊……该怎么办呢？啊，这里找到一条记录了。在愤怒的圣物旁边哄哄圣物……不过这个方法貌似需要很长的时间，我们没多少时间，就找别的吧？", 36, 2400000, true, true);
                                                        cm.gainSkillBuff(100001263)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("找到了。嗯……强行解除诅咒，唤醒藏在愤怒里的圣物本身。不过要解除诅咒，就有点复杂。", 36, 2400000, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("解除诅咒的方法是，先#b找个代理祭物分散并弱化诅咒，然后再把圣物召唤进来#k就可以。只不过，分散诅咒不能靠蛮力，需要#b魔法师的帮助#k……", 36, 2400000, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk("两位在#b神木村#k遇到的#b#p2411010##k，是魔法师吧？刚好，让他帮你们分散诅咒，怎么样？据说这个魔法不是那么简单的，如果不行就只能找其他方法了。", 36, 2400000, true, true);
                                                                    cm.gainSkillBuff(100001263)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.updateInfoQuest(40059, "");
                                                                        cm.forceStartQuest(40059, "");
                                                                        cm.gainExp(650000);
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
            cm.dispose()
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
            cm.sendNormalTalk("回来了！要问的事情怎么样了？找到救出幼龙的方法了吗？这孩子好像已经到了极限了……一定要想方设法让它还原。", 36, 2411010, false, true);
            cm.gainSkillBuff(100001263)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("方法是找到了，但是要解除它身上的诅咒，就需要你的帮助。你能行吗？需要你分散诅咒。", 45, 2400005, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("你是说通过代理祭物分散诅咒的方法吗？如果是这个魔法，需要准备一点东西，不过我会使用这个魔法。但是……分散并不代表诅咒会消失。分散诅咒之后你们打算怎么做？要彻底消除诅咒才可以啊……", 36, 2411010, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("我们会吸收掉用于诅咒的时间之力的……", 45, 2400006, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("你们？！等下！这个没关系吗？你们要吸收诅咒……万一你们发生什么危险呢？！", 36, 2411010, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("…………", 45, 2400006, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("…………", 45, 2400005, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("……没什么危险。", 45, 2400006, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("是，是嘛？对不起，我还大声尖叫……不过真的没关系吗？这个诅咒的力量好像不简单啊……真的没关系吗？如果是为了#p2411011#要牺牲掉你们的话……", 36, 2411010, true, true);
                                            cm.gainSkillBuff(100001263)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("#face3#要牺牲我们的话，你会怎么办？你替我们接受诅咒吗？", 45, 2400005, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("如果需要的话？", 36, 2411010, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("……当初我们就是为了回收这个诅咒之力才会来到神木村的。这力量本身和我们的力量类似，所以对我们不会造成任何危险。绝对不会。", 45, 2400005, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("啊，是嘛？……那真是太好了！", 36, 2411010, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("……什么太好了？你只要什么都别管就行了。其实你和这件事情没有一点关联，为什么要介入这个事情？而且需要的话还要牺牲你自己？到底为什么？", 45, 2400005, true, true);
                                                                cm.gainSkillBuff(100001263)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk("只是……我一直都这么想，我拥有魔法力量，是为了能够帮助更多的人……所以，只是……很奇怪吗？", 36, 2411010, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk("是的，很奇怪。", 45, 2400006, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk("是嘛？以前人们就说我爱管闲事……原来真的是很奇怪啊……", 36, 2411010, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk("#face5#……不过也不是坏事。", 45, 2400006, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk("#face3#虽然看起来很傻，哼。", 45, 2400005, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk("看起来傻，但是并不坏，是嘛。哈哈哈。", 36, 2411010, true, true);
                                                                                        cm.gainSkillBuff(100001263)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.gainExp(193000);
                                                                                            cm.forceCompleteQuest(40059);
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