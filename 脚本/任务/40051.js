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
            cm.sendNormalTalk("哈哈，那么就开始研究一下如何寻找女神之泪的方法吧？我拿到的记录中，只有对冒险岛世界的详细记录，但是镜世界肯定和那里不一样吧。", 33, 2400000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("镜世界是将冒险岛世界完全破碎之后，又重新组合的世界，#既像冒险岛世界又不尽相同的地方#k，也是时间和空间完全扭曲的地方……", 33, 2400000, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("我们谁都不知道镜世界。嗯……知道的话也估计只有#p2400005#才会知道。我可以向你请教一下吗？", 33, 2400000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("我也不知道。#p2410000#那家伙把我软禁在#m321000100#，给我洗脑说这个神殿是出现怪物的影子神殿。在那之前我只待在#m321000100#。", 41, 2400005, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("那就是说你对#m321000100#了解了？呵呵，这知识肯定会对我们有帮助的。", 33, 2400000, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("再怎么说，镜世界是黑魔法师和军团长居住的地方。#p2400005#也亲自和军团长面对面过，如果掌握到他的性格或特性的话，肯定会有什么有用的线索？", 33, 2400000, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("#p2410000#性格或特性吗……？嗯，外表看起来非常慈祥又深思熟虑的医疗队长。我还真没想到这家伙会在背地里捅我一刀。我还以为他根本就没有战斗能力，这么看来这家伙还真是个阴险邪恶的家伙。", 41, 2400005, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("作为医疗队长，他的能力的确很出色。细心得毫无破绽，而且又有一点执着……除此之外好像还有什么兴趣爱好，好像是拼图把。这么说来医疗室里一直放着那个#r拼图#k……对了，那个拼图……", 41, 2400005, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.inGameDirectionEvent_MoveAction(0);
                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                            cm.effect_OnUserEff("Effect/OnUserEff.img/questEffect/phantom/tutorial")
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("#face11#刚才你不是说，#b镜世界是将破碎的冒险岛世界重新组合的形态#k吗？那么这个地图也是和拼图一样的形态吧？这样一来我感觉有点思路了。", 41, 2400005, false, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("#face11#医疗队长#p2410000#……不对，军团长#p2410000#的爱好是拼图，他一天到晚待在治疗馆里盯着那个拼图。好像听说那个拼图的形态非常特别……", 41, 2400005, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("#face11#如果是这家伙的话，也有可能会把镜世界的地图拿出来谎称是拼图也说不定……因为他可以嘲笑我什么都不懂，还在这里津津有味地玩拼图。", 41, 2400005, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("嗯~#p2400005#的意思是，看起来像镜世界地图的东西在#m321000100#里，是吧？而且是军团长的东西，加上两位所掌握的性格又是如此的话，也有可能会是真的？", 33, 2400000, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("但是那里有军团长的部下……会不会太危险了？万一两位被抓住的话，所有这一切又将回到原点……我们也不会再有这么好的机会了。", 33, 2400000, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk("#face3#不用担心，没有人比我更熟悉那里的地形。更何况大部分人都被我打伤了，真正能战斗的骑士也所剩无几。只要#p2410000#小心自己就可以了。", 41, 2400005, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk("……再怎么危险……这件事情早晚都要去做的……如果我们退一步，就什么都做不了。那和被关在神殿里有什么区别……我想都不敢想了。", 41, 2400006, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk("天呐，真是好英俊潇洒呀，#p2400000#真的可以放心了。不过，万一真的遇到什么危险了，#p2400005#和#p2400006#两位一定要回到神殿来。", 33, 2400000, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk("……要继续用那个名字吗？我名字叫Zero……啊，我知道了。就那么算了吧。话说回来，这个神殿安全吗？我们离开的这段时间，万一影子骑士团攻进来，你们该怎么办？如果大本营被攻下来的话，就算我们找到女神之泪也没意义了。", 41, 2400005, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk("这你大可放心，在两位觉醒的时候，神殿已经位于冒险岛世界和镜世界中间了。所以除了我们之外，其他谁也进不了神殿。", 33, 2400000, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk("恐怕原来有神殿的地方，已经成为一片空地了，毕竟神殿已经消失了。你也不必为我们担心，当然非常感谢你这么为我们着想。嘻嘻嘻。", 33, 2400000, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk("#face6#……那么……我们……出发去#m321000100#吧？", 41, 2400005, true, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk("嗯。", 41, 2400006, true, true)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.updateInfoQuest(40051, "");
                                                                                                    cm.updateInfoQuest(40069, "");
                                                                                                    cm.forceStartQuest(40051, "");
                                                                                                    cm.forceStartQuest(41912, "9");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/40051.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("……我说的就是这个，虽然看起来像拼图，但有可能是镜世界的地图。#p2400000#会帮我们鉴定的。", 44, 2400005, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("既然已经找到了，那我们回去吧。", 44, 2400005, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("……朋友？", 44, 2400006, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("没有朋友那么要好，至少我不是这么认为的。", 44, 2400005, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("不可能影子骑士团的所有人，都有这么好的演技吧。其中肯定也有一两个是真心的。", 44, 2400005, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("好了，我们该回去了。#p2410000#随时都有可能会回来。", 44, 2400005, true, true)
                            } else {
                                if (status === a++) {
                                    cm.forceCompleteQuest(40051);
                                    cm.forceStartQuest(41912, "0");
                                    cm.dispose();
                                    cm.gainExp(1060000);
                                    cm.warp(320000000, 1, false)
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};