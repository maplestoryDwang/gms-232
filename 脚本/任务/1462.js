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
            cm.sendNormalTalk("远道而来，真是辛苦你了。\r\n\r\n我们一直守护着这个世界的勇士，但却很少有人见过我们的样子。", 4, 1540942, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("你想获得控制艾尔达的力量？\r\n\r\n你的体内也存在着艾尔达。如果好好利用这艾尔达，你就能发挥出新力量。当然，前提是我为你提供一点点帮助。", 4, 1540942, true, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(1462, "");
                    cm.sendNormalTalk("不过，在此之前希望你能回答我一个问题。\r\n\r\n#b(女神好像有什么疑问。去听听是什么疑问吧。)#k", 4, 1540942, true, false)
                } else {
                    if (status === a++) {
                        cm.dispose()
                    }
                }
            }
        }
    }
}

function action暗影双刀_0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNextS("当我还是个什么都不会的新手时，我第一次在飞花院学习了双刀的剑术。")
    } else {
        if (status === a++) {
            cm.sendNextPrevS("我已经很久没去过飞花院了，甚至有些记不清了。但飞花院对我来说就如同我的故乡，我想守护那里。")
        } else {
            actionEnd(d, c, b, a)
        }
    }
}

function action暗影双刀_1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNextS("我在冒险岛世界旅行的时候，认识了很多朋友。如果没有遇到他们，我不会有任何值得回忆的东西，也不会变得这么强大。")
    } else {
        if (status === a++) {
            cm.sendNextPrevS("他们现在应该正在某个地方进行自己的冒险吧，我想守护他们。")
        } else {
            actionEnd(d, c, b, a)
        }
    }
}

function action神炮王_0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNextS("我想守护的是……")
    } else {
        if (status === a++) {
            cm.sendNormalTalk("呜唧！呜唧！\r\n\r\n(猴子看起来想表示当然是自己。)", 4, 1540942, true, true)
        } else {
            if (status === a++) {
                cm.sendNextS("那当然就是一直在我身旁的猴子了！我们共同经历无数战争成为了真正的朋友！")
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("呜唧唧！\r\n\r\n(猴子开心地跑跳。)", 4, 1540942, true, true)
                } else {
                    actionEnd(d, c, b, a)
                }
            }
        }
    }
}

function action神炮王_1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNextS("我想守护的是……")
    } else {
        if (status === a++) {
            cm.sendNormalTalk("呜唧！呜唧！\r\n\r\n(猴子看起来想表示当然是自己。)", 4, 1540942, true, true)
        } else {
            if (status === a++) {
                cm.sendNextS("还有当然就是不知身在何处的我未来的恋人！")
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("呜唧唧！\r\n\r\n(猴子生气。)", 4, 1540942, true, true)
                } else {
                    actionEnd(d, c, b, a)
                }
            }
        }
    }
}

function action战神_0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNextS("虽然我还没有完全恢复记忆...\r\n\r\n但我认为那些与我并肩作战的同伴们最为珍贵。我们一起在战场上经历了生死，他们现在就如同我的家人。")
    } else {
        actionEnd(d, c, b, a)
    }
}

function action战神_1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNextS("当我沉睡数百年后苏醒时，有个孩子站在我面前。\r\n\r\n她不仅等了我很长时间，还帮助我找回力量，让我重新变得强大。如果有人要伤害那个孩子，我绝不放过他。")
    } else {
        actionEnd(d, c, b, a)
    }
}

function action龙神_0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNextS("我出生在射手村的一个农家。虽然之后我一直在冒险岛四处游历，但我从未忘记过家乡的家人们。\r\n\r\n如果能守护我的家人，我什么都愿意做！")
    } else {
        actionEnd(d, c, b, a)
    }
}

function action龙神_1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNextS("嘿嘿，那当然是我的米乐啦。")
    } else {
        if (status === a++) {
            cm.sendNextPrev("主人，你真的是这么想的吗？我好感动！", 9400071)
        } else {
            if (status === a++) {
                cm.sendNextPrevS("当然啦。\r\n\r\n虽然米乐你总是不听话，还威胁我说要吃掉自己的主人，但你还算是个善良的龙。")
            } else {
                if (status === a++) {
                    cm.sendNextPrev("……主人，你是在骂我吧？", 9400071)
                } else {
                    actionEnd(d, c, b, a)
                }
            }
        }
    }
}

function action双弩精灵_0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNextS("跟我一起对抗过黑魔法师的同伴们...现在弗里德不在了，最能够理解我的人就是他们。\r\n\r\n我不想再失去他们了。")
    } else {
        actionEnd(d, c, b, a)
    }
}

function action双弩精灵_1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNextS("作为精灵之王，我有我的义务。\r\n\r\n我曾经让埃欧雷的精灵们陷入危险。只要能完全解除我们种族的诅咒，以及守护埃欧雷，我什么都愿意做。")
    } else {
        actionEnd(d, c, b, a)
    }
}

function action隐月_0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNextS("…有些事情永远不会变。\r\n\r\n虽然我从所有人的记忆里消失了，但对我来说最重要的东西永远不会变。我想守护的是曾经跟我一起对抗黑魔法师的同伴们。")
    } else {
        actionEnd(d, c, b, a)
    }
}

function action隐月_1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNextS("在我结束跟黑魔法师的战斗，睁开双眼时，有个孩子守护在我身旁。那个孩子一直照顾着落入陌生世界的我，并给了我力量\r\n\r\n……无论发生什么事，我都要守护那个孩子。")
    } else {
        actionEnd(d, c, b, a)
    }
}

function action幻影_0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNextS("如果说是数百年前接受相同的问题时，当时的我一定会毫不犹豫的回答吧，不过现在呢……\r\n\r\n不论如何一同跟黑魔法师作战的朋友是我最想珍惜的人。虽然里面有些家伙我不是很喜欢。但...这都是小问题。")
    } else {
        actionEnd(d, c, b, a)
    }
}

function action幻影_1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNextS("最重要的就是要证明女皇阿丽娅的旨意绝不是错误。能延续她的旨意的继承者也只有希纳斯女皇了，那孩子当然也做得很好……所以只要是需要我帮忙的地方，我绝对拔刀相助。")
    } else {
        actionEnd(d, c, b, a)
    }
}

function action夜光法师_0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNextS("我认为可以相互信任的同伴最为珍贵。\r\n\r\n所以我最珍惜跟我一起对抗黑魔法师的同伴们。当然，其中也有些不可靠的家伙，但...这都是小问题。")
    } else {
        actionEnd(d, c, b, a)
    }
}

function action夜光法师_1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNextS("当我还无法调节我体内的光明与黑暗之力时，曾差点害一名少女受重伤。在多次让她陷入危机后，我才明白什么对我来说最为珍贵。\r\n\r\n我现在只想守护她。")
    } else {
        actionEnd(d, c, b, a)
    }
}

function action恶魔_0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNextS("我对冒险岛世界没什么好印象。\r\n\r\n但是数百年前我和我的家人一起幸福地生活在神木村，神木村是仅存的值得我回忆的地方…仅凭这一点，我就有足够的理由守护这个世界。")
    } else {
        actionEnd(d, c, b, a)
    }
}

function action恶魔_1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNext("！！！！你……你是真心的吗，恶魔？", 3004103)
    } else {
        if (status === a++) {
            cm.sendNextPrevS("你怎么啦，马斯特玛？")
        } else {
            if (status === a++) {
                cm.sendNextPrev("没，没什么。我的心好像突然停止了跳动……呼呼。", 3004103)
            } else {
                if (status === a++) {
                    cm.sendNextPrevS("……？心脏的健康很重要。你对我来说很珍贵，所以请你好好照顾自己。")
                } else {
                    if (status === a++) {
                        cm.sendNextPrev("嗯...#b（这是什么情况啊？！我是不是提前用掉了一年的幸福啊？！)", 3004103)
                    } else {
                        actionEnd(d, c, b, a)
                    }
                }
            }
        }
    }
}

function action尖兵_0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNextS("离开实验室之后，我所珍惜的东西越来越多了。和我一起逃脱出来的鲁提，总让我感到熟悉的城市埃德尔斯坦，还有反抗者的同伴们...我想守护这一切。")
    } else {
        actionEnd(d, c, b, a)
    }
}

function action尖兵_1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNextS("最近我偶尔会浮想起以前的事情。过去的我和朋友们好像生活得很幸福。\r\n\r\n如果我还有心...我肯定会记得那些朋友。我想守护我的那些朋友。")
    } else {
        actionEnd(d, c, b, a)
    }
}

function action米哈尔_0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNextS("骑士存在的理由是为了守护某个人。\r\n\r\n守护希纳斯女皇是我的使命。")
    } else {
        actionEnd(d, c, b, a)
    }
}

function action米哈尔_1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNextS("对我来说最珍贵的是冒险骑士团的同伴们。如果骑士团长们不齐心协力，就无法从黑魔法师手中守护女皇。")
    } else {
        actionEnd(d, c, b, a)
    }
}

function action狂龙战士_0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNextS("在我获得前代狂龙战士的力量的瞬间，我要守护的东西就已经注定，那就是完成我肩负的使命。")
    } else {
        actionEnd(d, c, b, a)
    }
}

function action狂龙战士_1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNextS("有一个名叫迪奥的孩子。\r\n\r\n如果你问我最想守护谁，我首先就会想起那个孩子，原因我也不知道。说不定这就是我拥有力量的意义。")
    } else {
        actionEnd(d, c, b, a)
    }
}

function action魔链影士_0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNextS("很久之前在城里的那段日子，是我最珍贵的回忆。有父母兄弟，还有亲切友好的邻居们……")
    } else {
        if (status === a++) {
            cm.sendNextPrevS("......虽然现在再也见不到他们了，但那时的温暖记忆仍然留在我心中。")
        } else {
            actionEnd(d, c, b, a)
        }
    }
}

function action魔链影士_1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNextS("唔……我想起影子商团的同伴们了。大家一同经历喜事，也一同渡过难关，就是在这些日子里建立了坚不可摧的情谊吧，哈哈。")
    } else {
        if (status === a++) {
            cm.sendNextPrevS("支部长、科尼、帕皮鲁斯兄弟，还有棉花团……因为有这些热情友善的人在，我们才会越来越强大。")
        } else {
            actionEnd(d, c, b, a)
        }
    }
}

function action爆莉萌天使_0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNextS("自从在圣殿获得力量之后，我经历了无数次冒险。现在比起我自己的事情，爆莉萌天使的任务更加重要，女神!")
    } else {
        if (status === a++) {
            cm.sendNormalTalk("爆莉萌天使，我知道你的勇气。格兰蒂斯的女神肯定也会为你自豪的。", 4, 1540942, true, true)
        } else {
            if (status === a++) {
                cm.sendNextPrevS("嘿嘿嘿…谢谢你。")
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("…………我不在你的选项里吗？", 4, 3000132, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNextPrevS("呃嗯？爱丝卡达，这还用说嘛，你对我来说当然很重要啦。你明明知道。\r\n\r\n(其实早就忘掉了！)")
                    } else {
                        actionEnd(d, c, b, a)
                    }
                }
            }
        }
    }
}

function action爆莉萌天使_1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNextS("这个问题真的很难。如果说起对我来说最珍贵、最想守护的人……\r\n\r\n不知为何，我总是想起从小就跟我在一起的卡伊尔，女神！")
    } else {
        if (status === a++) {
            cm.sendNormalTalk("你不由自主浮想起的人，应该就是你最想守护的人。", 4, 1540942, true, true)
        } else {
            if (status === a++) {
                cm.sendNextPrevS("嘿嘿嘿…谢谢你。")
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("…………我不在你的选项里吗？", 4, 3000132, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNextPrevS("呃嗯？爱丝卡达，这还用说嘛，你对我来说当然很重要啦。你明明知道。\r\n\r\n(其实早就忘掉了！)")
                    } else {
                        actionEnd(d, c, b, a)
                    }
                }
            }
        }
    }
}

function action神之子_0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("原来如此。互相守护对方对你们来说是最重要的吗？", 4, 1540942, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk("那是当然。如果没有彼此，我们的战斗力将会大大减弱。不是吗，贝塔？", 4, 2400005, true, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("我之所以想守护阿尔法是因为他对我来说很珍贵，并不是因为战斗力。", 4, 2400006, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("你，你怎么突然这样啊？好肉麻。", 4, 2400005, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("嗯，我觉得女神应该更喜欢这样的回答。\r\n\r\n回答问题之前多斟酌下不好吗，阿尔法？", 4, 2400006, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("我不想听你说那种话！", 4, 2400005, true, true)
                        } else {
                            actionEnd(d, c, b, a)
                        }
                    }
                }
            }
        }
    }
}

function action神之子_1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("我想守护的人...那应该是在神殿帮助过我们的人。如果没有他们的帮助，就没有现在的我们。", 4, 2400005, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk("皮埃听到这句话应该会很开心的。她说不定还会流泪呢。", 4, 2400006, true, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("……我很害怕看到她的反应。我们最好不要在皮埃面前说这种话。", 4, 2400005, true, true)
            } else {
                actionEnd(d, c, b, a)
            }
        }
    }
}

function action超能力者_0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNextS("我想要守护的人啊，这不是很显然嘛？当然是杰和尤娜啦。")
    } else {
        if (status === a++) {
            cm.sendNextPrevS("如果我从这个世界上消失，他们肯定是最伤心的人。\r\n\r\n所以，对我来说他们也非常重要。")
        } else {
            actionEnd(d, c, b, a)
        }
    }
}

function action超能力者_1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("这个回答挺让我意外的。你为什么会做出这样的回答呢？", 4, 1540942, true, true)
    } else {
        if (status === a++) {
            cm.sendNextPrevS("陷坑事件发生后，我有了些感悟。\r\n\r\n我必须保护好自己，也有能力守护其他重要的东西。这就是我的回答，女神。")
        } else {
            actionEnd(d, c, b, a)
        }
    }
}

function action御剑骑士_0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("在昏暗的亚空间中，在我什么都感受不到的时候。\r\n拯救我的，是他的声音。", 16, 0, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk("虽然现在相隔很远，但我感受得到。\r\n杰罗姆正在为成为更好的王而努力。", 16, 0, true, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("我们为各自梦想离开王国的那天，就约定好了。\r\n等到杰罗姆成为国王的那天，我会再次成为他的骑士。", 16, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("一个心怀壮志、起誓要拯救里斯托尼亚王国的少年。\r\n我想守护这个再次寻回的主君。", 16, 0, true, true)
                } else {
                    actionEnd(d, c, b, a)
                }
            }
        }
    }
}

function action御剑骑士_1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("作为一名骑士，是不会对不正之风和恶行坐视不管的。\r\n想要肆意操纵世界，根本就是痴人说梦。", 16, 0, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk("有人竟企图牺牲不相干的人来实现自己的野心。\r\n这根本就是无稽之谈。", 16, 0, true, true)
        } else {
            actionEnd(d, c, b, a)
        }
    }
}

function action圣晶使徒_0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNextS("有几个朋友和我一起离开了平民翼人村庄阿叙隆。莫里奥、迪恩、卡尼里恩……还有现在已经是敌人的希娜……要是没有朋友们，我也不会有今天的成就，更无法一个人走到这里了。")
    } else {
        if (status === a++) {
            cm.sendNextPrevS("我的朋友们不仅陪伴我踏上了陌生的冒险岛世界，也更是我成长的原动力……所以我无论如何也想要保护他们。")
        } else {
            actionEnd(d, c, b, a)
        }
    }
}

function action圣晶使徒_1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNextS("我现在都还记得我们第一次穿过次元传送口，到达冒险岛世界时候的情况。后来我就在这里一边寻求他人的帮助，一边进行冒险了。")
    } else {
        if (status === a++) {
            cm.sendNextPrevS("虽然没能保护我的故乡阿叙隆的居民……但是我真心希望能够保护冒险岛世界的善良又亲切的人们。")
        } else {
            actionEnd(d, c, b, a)
        }
    }
}

function action影魂异人_0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNextS("如果说我有什么想要守护的东西，那就是来往于格兰蒂斯和冒险岛世界的时候认识的朋友们。")
    } else {
        if (status === a++) {
            cm.sendNextPrevS("我过去沉浸在失去亲人的悲痛之中，深信为了守护和平可以不择手段。")
        } else {
            if (status === a++) {
                cm.sendNextPrevS("是旅行中遇到的朋友们……让我明白了守护某个人的心，其实人人都有，并不值得夸耀。")
            } else {
                if (status === a++) {
                    cm.sendNextPrevS("我要用自己的双手保护好身边的人，不惜为此堵上自己的全部。")
                } else {
                    actionEnd(d, c, b, a)
                }
            }
        }
    }
}

function action影魂异人_1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNextS("想要守护的东西……我和好朋友有个约定。那就是阻止发生在世界各地的悲剧……虽然那个朋友的想法也许已经变了。")
    } else {
        if (status === a++) {
            cm.sendNextPrevS("在再次相遇之前，我必须用自己的双手证明：保护心爱的人的心，可以拯救所有人。")
        } else {
            actionEnd(d, c, b, a)
        }
    }
}

function action虎影_0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("离开道观的那天，我便决定要尽自己的微薄之力造福这个世界。历经磨练后，总有一天……。", 16, 0, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk("我一定会成为比师父太乙真人还要厉害的道士。这个梦想始终在我心底，从未动摇过。", 16, 0, true, true)
        } else {
            actionEnd(d, c, b, a)
        }
    }
}

function action虎影_1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("正如书中所说，尘世不是个简单的地方。在这里，你有时会感到难堪，有时又会觉得痛苦，有时还可能一命呜呼。", 16, 0, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk("可是女神大人，我还是喜欢在尘世生活。那里有好吃的泡饭，还有好多有趣的人……更重要的是，很多人都需要我。", 16, 0, true, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("饕餮也是其中之一，嘿嘿……", 16, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("你这家伙……不要瞎说！", 4, 3001651, true, true)
                } else {
                    actionEnd(d, c, b, a)
                }
            }
        }
    }
}

function action骑士团_0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNextS("守护女皇和圣地是我的使命。那是冒险骑士团的首要任务。")
    } else {
        actionEnd(d, c, b, a)
    }
}

function action骑士团_1(d, c, b, a) {
    if (status <= a++) {
        if (Math.floor(cm.getJob() / 100) == 11) {
            cm.sendNextS("米哈尔教会了我使用光之力量的方法。虽然别人可能会觉得我有点死脑筋，但我比任何人都会守护他的正义使命。")
        } else {
            if (Math.floor(cm.getJob() / 100) == 12) {
                cm.sendNextS("奥兹教会了我火焰魔法。虽然我有时候有些莽撞，但守护比谁都还要优秀的魔法师是我的使命。")
            } else {
                if (Math.floor(cm.getJob() / 100) == 13) {
                    cm.sendNextS("伊莉娜教导了我使用弓箭的方法。守护最优秀的名射手又个性耿直的伊莉娜是我的使命。")
                } else {
                    if (Math.floor(cm.getJob() / 100) == 14) {
                        cm.sendNextS("伊尔卡特教导了我如何像影子般行走的方法，守护他是我的使命。虽然你听见这样的话可能会噗滋的笑出来。")
                    } else {
                        cm.sendNextS("胡克教会了我使用闪电格斗术的方法。守护他是我的使命……呃，他本人肯定会不以为意的。")
                    }
                }
            }
        }
    } else {
        actionEnd(d, c, b, a)
    }
}

function action反抗者_0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNextS("加入反抗者之后，我明白了守护埃德尔斯坦的和平是多么有意义。我的目标是守护我们的村庄和人们。")
    } else {
        actionEnd(d, c, b, a)
    }
}

function action反抗者_1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNextS("我仍然无法忘记那天的事。\r\n\r\n在最后的瞬间……我和贝比蒂约定，一定要活下去，创造出更美好的世界！遵守那个约定对我来说是最重要的事。")
    } else {
        actionEnd(d, c, b, a)
    }
}

function action冒险家_0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNextS("我在冒险岛世界旅行的时候，认识了很多朋友。如果没有遇到他们，我不会有任何值得回忆的东西，也不会变得这么强大。")
    } else {
        actionEnd(d, c, b, a)
    }
}

function action冒险家_1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNextS("我无法忘记我第一次来到冒险岛的那一天。我从没想到会有这么美好的世界。")
    } else {
        if (status === a++) {
            cm.sendNextPrevS("冒险岛世界之所以这么美丽，都是因为这里的人们。我想我之所以开始我的冒险之旅，也是为了守护他们！")
        } else {
            actionEnd(d, c, b, a)
        }
    }
}

function actionEnd(e, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("这样啊。这并不是一个简单的问题。因为对所有人来说，珍惜的东西都不仅只有一个。\r\n\r\n这个问题并没有正确答案。我只是好奇勇士你为什么想守护这个世界而已。\r\n\r\n#b#i2435734:# #t2435734:# 1个", 4, 1540942, true, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk("这块石头叫做#b神秘石#k。这种石头可以为你唤醒新的力量。", 4, 1540942, true, true)
        } else {
            if (status === a++) {
                cm.gainItem(2435734, 1);
                cm.forceCompleteQuest(1462);
                if (cm.haveItem(2435734) && cm.haveItem(2435735) && cm.haveItem(2435736)) {
                    cm.sendNormalTalk("见到了女神，集齐了3个神秘石。旁观者好像说他会重新联络我的…等等看他的消息吧。", 16, 0, true, false)
                } else {
                    var d = "通过了女神的考验，获得了神秘石。现在去找其他女神吧。\r\n";
                    if (!cm.haveItem(2435734)) {
                        d += "\r\n#b#p1540942##k : 射手村的#b#m100000201##k"
                    }
                    if (!cm.haveItem(2435735)) {
                        d += "\r\n#b#p1540943##k : 万神殿的#b#m400000001##k"
                    }
                    if (!cm.haveItem(2435736)) {
                        d += "\r\n#b#p1540943##k : 堕落世界树的#b#m105300000##k"
                    }
                    cm.sendNormalTalk(d, 16, 0, true, false)
                }
                cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/1462.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
            }
        }
    }
}

function end(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return
    }(mode == 1) ? status++ : status--;
    selectionLog[status] = selection;
    var i = -1;
    if (status <= i++) {
        cm.dispose()
    } else {
        if (status == i++) {
            cm.sendNormalTalk("我想问的问题非常简单。", 4, 1540942, false, true)
        } else {
            if (status === i++) {
                if (Math.floor(cm.getJob() / 10) == 43) {
                    cm.askMenu("你在这个世界上最珍惜、最想守护的东西是什么？\r\n\r\n#L0#我第一次学习剑术的飞花院#l\r\n#L1#跟我一起旅行的朋友们#l", 4, 1540942)
                } else {
                    if (Math.floor(cm.getJob() / 10) == 53) {
                        cm.askMenu("你在这个世界上最珍惜、最想守护的东西是什么？\r\n\r\n#L0#猴子#l\r\n#L1#（虽然现在还没有）未来的恋人#l", 4, 1540942)
                    } else {
                        if (Math.floor(cm.getJob() / 100) == 21) {
                            cm.askMenu("你在这个世界上最珍惜、最想守护的东西是什么？\r\n\r\n#L0#和我一起对抗黑魔法师的同伴们#l\r\n#L1#利琳#l", 4, 1540942)
                        } else {
                            if (Math.floor(cm.getJob() / 100) == 22) {
                                cm.askMenu("你在这个世界上最珍惜、最想守护的东西是什么？\r\n\r\n#L0#射手村的家人们#l\r\n#L1#米乐#l", 4, 1540942)
                            } else {
                                if (Math.floor(cm.getJob() / 100) == 23) {
                                    cm.askMenu("你在这个世界上最珍惜、最想守护的东西是什么？\r\n\r\n#L0#和我一起对抗黑魔法师的同伴们#l\r\n#L1#埃欧雷和追随我的精灵们#l", 4, 1540942)
                                } else {
                                    if (Math.floor(cm.getJob() / 100) == 24) {
                                        cm.askMenu("你在这个世界上最珍惜、最想守护的东西是什么？\r\n\r\n#L0#和我一起对抗黑魔法师的同伴们#l\r\n#L1#阿丽娅的继承者希纳斯女皇#l", 4, 1540942)
                                    } else {
                                        if (Math.floor(cm.getJob() / 100) == 25) {
                                            cm.askMenu("你在这个世界上最珍惜、最想守护的东西是什么？\r\n\r\n#L0#和我一起对抗黑魔法师的同伴们#l\r\n#L1#阿琅#l", 4, 1540942)
                                        } else {
                                            if (Math.floor(cm.getJob() / 100) == 27) {
                                                cm.askMenu("你在这个世界上最珍惜、最想守护的东西是什么？\r\n\r\n#L0#和我一起对抗黑魔法师的同伴们#l\r\n#L1#拉尼娅#l", 4, 1540942)
                                            } else {
                                                if (Math.floor(cm.getJob() / 100) == 31) {
                                                    cm.askMenu("你在这个世界上最珍惜、最想守护的东西是什么？\r\n\r\n#L0#以前和家人一起生活的家#l\r\n#L1#马斯特玛#l", 4, 1540942)
                                                } else {
                                                    if (Math.floor(cm.getJob() / 100) == 36) {
                                                        cm.askMenu("你在这个世界上最珍惜、最想守护的东西是什么？\r\n\r\n#L0#埃德尔斯坦和反抗者#l\r\n#L1#依稀记得的以前的朋友们#l", 4, 1540942)
                                                    } else {
                                                        if (Math.floor(cm.getJob() / 100) == 51) {
                                                            cm.askMenu("你在这个世界上最珍惜、最想守护的东西是什么？\r\n\r\n#L0#埃德尔斯坦和反抗者#l\r\n#L1#依稀记得的以前的朋友们#l", 4, 1540942)
                                                        } else {
                                                            if (Math.floor(cm.getJob() / 100) == 61) {
                                                                cm.askMenu("你在这个世界上最珍惜、最想守护的东西是什么？\r\n\r\n#L0#作为狂龙战士的使命#l\r\n#L1#迪奥#l", 4, 1540942)
                                                            } else {
                                                                if (Math.floor(cm.getJob() / 100) == 64) {
                                                                    cm.askMenu("你在这个世界上最珍惜、最想守护的东西是什么？\r\n\r\n#L0#城堡里的回忆#l\r\n#L1#影子商团的同伴们#l", 4, 1540942)
                                                                } else {
                                                                    if (Math.floor(cm.getJob() / 100) == 65) {
                                                                        cm.askMenu("你在这个世界上最珍惜、最想守护的东西是什么？\r\n\r\n#L0#爆莉萌天使的任务#l\r\n#L1#卡伊尔#l", 4, 1540942)
                                                                    } else {
                                                                        if (Math.floor(cm.getJob() / 100) == 101) {
                                                                            cm.askMenu("你在这个世界上最珍惜、最想守护的东西是什么？\r\n\r\n#L0#阿尔法(或贝塔)#l\r\n#L1#在神殿帮助过我们的人#l", 4, 1540942)
                                                                        } else {
                                                                            if (Math.floor(cm.getJob() / 100) == 142) {
                                                                                cm.askMenu("你在这个世界上最珍惜、最想守护的东西是什么？\r\n\r\n#L0#尤娜和杰#l\r\n#L1#我自己#l", 4, 1540942)
                                                                            } else {
                                                                                if (Math.floor(cm.getJob() / 100) == 151) {
                                                                                    cm.askMenu("你在这个世界上最珍惜、最想守护的东西是什么？\r\n\r\n#L0#与杰罗姆之约#l\r\n#L1#骑士道#l", 4, 1540942)
                                                                                } else {
                                                                                    if (Math.floor(cm.getJob() / 100) == 152) {
                                                                                        cm.askMenu("你在这个世界上最珍惜、最想守护的东西是什么？\r\n\r\n#L0#莫里奥、迪恩、卡尼里恩#l\r\n#L1#冒险岛世界的居民们#l", 4, 1540942)
                                                                                    } else {
                                                                                        if (Math.floor(cm.getJob() / 100) == 155) {
                                                                                            cm.askMenu("你在这个世界上最珍惜、最想守护的东西是什么？\r\n\r\n#L0#在旅行中遇到的朋友们#l\r\n#L1#和老朋友的约定#l", 4, 1540942)
                                                                                        } else {
                                                                                            if (Math.floor(cm.getJob() / 100) == 164) {
                                                                                                cm.askMenu("你在这个世界上最珍惜、最想守护的东西是什么？\r\n\r\n#L0#青云之梦#l\r\n#L1#尘世的缘分#l", 4, 1540942)
                                                                                            } else {
                                                                                                if (Math.floor(cm.getJob() / 1000) == 1) {
                                                                                                    cm.askMenu("你在这个世界上最珍惜、最想守护的东西是什么？\r\n\r\n#L0#希纳斯女皇#l\r\n#L1#教导我的骑士团长#l", 4, 1540942)
                                                                                                } else {
                                                                                                    if (Math.floor(cm.getJob() / 1000) == 3) {
                                                                                                        cm.askMenu("你在这个世界上最珍惜、最想守护的东西是什么？\r\n\r\n#L0#埃德尔斯坦和反抗者#l\r\n#L1#和贝比蒂的约定#l", 4, 1540942)
                                                                                                    } else {
                                                                                                        cm.askMenu("你在这个世界上最珍惜、最想守护的东西是什么？\r\n\r\n#L0#一起冒险的朋友们#l\r\n#L1#冒险岛世界的居民#l", 4, 1540942)
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
            } else {
                if (Math.floor(cm.getJob() / 10) == 43) {
                    eval("action暗影双刀_" + selectionLog[2])(mode, type, selection, i)
                } else {
                    if (Math.floor(cm.getJob() / 10) == 53) {
                        eval("action神炮王_" + selectionLog[2])(mode, type, selection, i)
                    } else {
                        if (Math.floor(cm.getJob() / 100) == 21) {
                            eval("action战神_" + selectionLog[2])(mode, type, selection, i)
                        } else {
                            if (Math.floor(cm.getJob() / 100) == 22) {
                                eval("action龙神_" + selectionLog[2])(mode, type, selection, i)
                            } else {
                                if (Math.floor(cm.getJob() / 100) == 23) {
                                    eval("action双弩精灵_" + selectionLog[2])(mode, type, selection, i)
                                } else {
                                    if (Math.floor(cm.getJob() / 100) == 24) {
                                        eval("action幻影_" + selectionLog[2])(mode, type, selection, i)
                                    } else {
                                        if (Math.floor(cm.getJob() / 100) == 25) {
                                            eval("action隐月_" + selectionLog[2])(mode, type, selection, i)
                                        } else {
                                            if (Math.floor(cm.getJob() / 100) == 27) {
                                                eval("action夜光法师_" + selectionLog[2])(mode, type, selection, i)
                                            } else {
                                                if (Math.floor(cm.getJob() / 100) == 31) {
                                                    eval("action恶魔_" + selectionLog[2])(mode, type, selection, i)
                                                } else {
                                                    if (Math.floor(cm.getJob() / 100) == 36) {
                                                        eval("action尖兵_" + selectionLog[2])(mode, type, selection, i)
                                                    } else {
                                                        if (Math.floor(cm.getJob() / 100) == 51) {
                                                            eval("action米哈尔_" + selectionLog[2])(mode, type, selection, i)
                                                        } else {
                                                            if (Math.floor(cm.getJob() / 100) == 61) {
                                                                eval("action狂龙战士_" + selectionLog[2])(mode, type, selection, i)
                                                            } else {
                                                                if (Math.floor(cm.getJob() / 100) == 64) {
                                                                    eval("action魔链影士_" + selectionLog[2])(mode, type, selection, i)
                                                                } else {
                                                                    if (Math.floor(cm.getJob() / 100) == 65) {
                                                                        eval("action爆莉萌天使_" + selectionLog[2])(mode, type, selection, i)
                                                                    } else {
                                                                        if (Math.floor(cm.getJob() / 100) == 101) {
                                                                            eval("action神之子_" + selectionLog[2])(mode, type, selection, i)
                                                                        } else {
                                                                            if (Math.floor(cm.getJob() / 100) == 142) {
                                                                                eval("action超能力者_" + selectionLog[2])(mode, type, selection, i)
                                                                            } else {
                                                                                if (Math.floor(cm.getJob() / 100) == 151) {
                                                                                    eval("action御剑骑士_" + selectionLog[2])(mode, type, selection, i)
                                                                                } else {
                                                                                    if (Math.floor(cm.getJob() / 100) == 152) {
                                                                                        eval("action圣晶使徒_" + selectionLog[2])(mode, type, selection, i)
                                                                                    } else {
                                                                                        if (Math.floor(cm.getJob() / 100) == 155) {
                                                                                            eval("action影魂异人_" + selectionLog[2])(mode, type, selection, i)
                                                                                        } else {
                                                                                            if (Math.floor(cm.getJob() / 100) == 164) {
                                                                                                eval("action虎影_" + selectionLog[2])(mode, type, selection, i)
                                                                                            } else {
                                                                                                if (Math.floor(cm.getJob() / 1000) == 1) {
                                                                                                    eval("action骑士团_" + selectionLog[2])(mode, type, selection, i)
                                                                                                } else {
                                                                                                    if (Math.floor(cm.getJob() / 1000) == 3) {
                                                                                                        eval("action反抗者_" + selectionLog[2])(mode, type, selection, i)
                                                                                                    } else {
                                                                                                        eval("action冒险家_" + selectionLog[2])(mode, type, selection, i)
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
};