var status = -1;
var selectionLog = [];

function start(mode, type, selection) {
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
            cm.askMenu("你好，#b#h0##k。\r\n特殊小组#b#e<荣耀特攻队>#k#n将为冒险岛世界执行各种重大任务。\r\n\r\n关于荣耀特攻队任务，你还有什么问题吗？\r\n\r\n#L1#我想了解一下#b#e荣耀特攻队任务#n#k。#l\r\n#L0#我想知道现在可以执行哪些#b#e荣耀特攻队任务#n#k。#l\r\n#L2#没有问题了。#l\r\n", 4, 3004203)
        } else {
            var reactor = "action分支" + selectionLog[1];
            eval(reactor)(mode, type, selection, i)
        }
    }
}

function action分支0(mode, type, selection, i) {
    if (status <= i++) {
        cm.askMenu("\r\n当前可以执行的该#b#e荣耀特攻队任务#n#k。\r\n\r\n#L0##e普通任务：南哈特的委托#l\r\n#L1##e普通任务：次元的缝隙#l\r\n#L3##e普通任务：不稳定的边界#l\r\n#L4##e挑战任务：攻城战车歼灭战#l\r\n#L2##e每周任务：调查异常现象#l\r\n", 4, 3004203)
    } else {
        var reactor = "action分支0_" + selectionLog[2];
        eval(reactor)(mode, type, selection, i)
    }
}

function action分支0_0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("\r\n#b#e普通任务：南哈特的委托#n#k\r\n\r\n#e执行任务时间#n\r\n2020年1月15日维护后～2020年1月21日晚上11点59分", 4, 3004203, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk("\r\n其实我们之所以组建荣耀特攻队这支精锐部队，是为了时刻准备应对险情，为冒险岛世界完成各项重大任务……", 4, 3004203, true, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("\r\n所以，虽然这种小事算不上是荣耀特攻队任务，但是……现在联盟的财政状况实在糟糕。", 4, 3004203, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("\r\n你应该知道吧，联盟在战争期间损失了许多补给品和物资。现在联盟的资金告急，所以每一个#b#e丢失的补给品#k#n都要尽量找回来。", 4, 3004203, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("\r\n所以，希望你能跟我一起寻找丢失的补给品。", 4, 3004203, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("\r\n#r在#e等级范围怪物所在的狩猎场#k#n中使用我给你的#b#e通信魔法球#k#n，我就会驾驶运输船去找你。", 4, 3004203, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("\r\n狩猎等级范围怪物，收集丢失的补给品，运送回联盟。", 4, 3004203, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("\r\n我打算#b#e分10个阶段#k#n运输补给品。\r\n因为人手不足，收集再多补给品运不走也没用啊。", 4, 3004203, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("\r\n如果你能帮助我输送补给品，我会送你#e#r#i4310272:##t4310272##k#n作为报酬。", 4, 3004203, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("\r\n#r#e荣耀特攻队第一项任务#k#n就拜托你了。", 4, 3004203, true, true);
                                            status = -1
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

function action分支0_1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("\r\n#b#e普通任务：次元缝隙#n#k\r\n\r\n#e执行任务时间#n\r\n2020年1月22日 ～2020年2月4日晚上11点59分", 4, 3003751, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk("\r\n冒险岛世界和格兰蒂斯各地异常现象频发，\r\n到处都在产生#r次元缝隙#k。", 4, 3003751, true, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("\r\n#b变成幽灵的怪物#k们从裂缝中跑出来，让世界陷入一片混乱。", 4, 3003751, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("\r\n虽然无法阻止#r次元缝隙#k的产生……", 4, 3003751, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("\r\n使用联盟倾力打造的#r追踪钟摆#k，\r\n可以将#b次元缝隙#k强行召唤至任意地点。", 4, 3003751, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("\r\n在#r#e等级范围怪物所在的狩猎场#k#n中狩猎怪物，\r\n就会激活#b追踪钟摆#k，开始收集#r次元碎片#k。", 4, 3003751, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("\r\n在#b追踪钟摆#k中累计获得了数量足够的碎片后，\r\n#h0#所在的位置将立刻出现#r次元缝隙#k。", 4, 3003751, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("\r\n在#r次元缝隙#k再次关闭前尽快消灭从中涌出的怪物，\r\n让世界恢复平静吧。", 4, 3003751, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("\r\n没办法，谁叫联盟现在人手奇缺呢。\r\n好在#b追踪钟摆#k可以将被消灭的怪物气息转换为\r\n#e#r#i4310272:##t4310272##k#n，多少能帮上一点忙吧。", 4, 3003751, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("\r\n那就拜托你了。", 4, 3003751, true, true);
                                            status = -1
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

function action分支0_2(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("\r\n#b#e每周任务：调查异常现象#n#k\r\n\r\n#e执行任务时间#n\r\n2020年1月22日 ～2020年3月31日晚上11点59分", 4, 3003751, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk("\r\n最近，冒险岛世界和格兰蒂斯#b#e频繁发生异常现象#n#k。", 4, 3003751, true, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("\r\n冒险岛世界和格兰蒂斯的许多地方都出现了混乱不堪#b#e时空裂缝#n#k。这些时空裂缝正在不断吸收周围的力量，散发出日益强大的气息。", 4, 3003751, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("\r\n联盟在调查时空裂缝内部时发现了一件事。只要消灭被吸收到裂缝中的#r所有怪物#k，裂缝就会很快#b失去力量，并自行消亡#k。", 4, 3003751, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("\r\n必须在时空裂缝凝聚更强的力量之前，#b调查时空裂缝#k，并#b消灭#k它。", 4, 3003751, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("\r\n出现时空裂缝，我就会通知你位置。\r\n请消灭时空裂缝内部的怪物，关上裂缝吧。", 4, 3003751, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("\r\n你每次完成空裂缝调查，\r\n都可以在我这里领取#e#r#i4310272:##t4310272##k#n。", 4, 3003751, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("\r\n对了，在产生时间较久，具备强大力量的时空裂缝中，有较低的概率出现名为#b#e混乱#n#k的怪物。这种怪物似乎诞生自时空裂缝所吸收的力量。", 4, 3003751, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("\r\n在时空裂缝内部发现并消灭#b#e混乱#n#k，可以特别领取#r#e5亿金币#n#k。", 4, 3003751, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("\r\n那就拜托你了。", 4, 3003751, true, true);
                                            status = -1
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

function action分支0_3(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("\r\n#b#e普通任务：不稳定的边界#n#k\r\n\r\n#e任务执行时间#n\r\n2020年1月22日～ 2020年2月4日晚上 11点59分", 4, 9062198, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk("\r\n#b#e不稳定的边界#n#k是混杂散布着两种未知能量结晶的空间。", 4, 9062198, true, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("\r\n我们的任务是，搭乘飞艇进入不稳定的边界，\r\n在两种能量爆炸之前将其清除。", 4, 9062198, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("\r\n进入不稳定的边界需要搭乘飞艇，\r\n可以按#b#eZ#n#k，#b#eX#n#k键充入冒险岛世界和格兰蒂斯的能量进行发射。", 4, 9062198, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("\r\n长按#b#eZ#n#k，#b#eX#n#k 键，可以填充飞艇下方的黄色充能进度条。在充能状态下放开按键，将根据#e#b进度条的能量格数#n#k，发射#r#b延长的能量光线#k#n。", 4, 9062198, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("\r\n用这种能量光线击中#b#e相同颜色#n#k的#b#e能量结晶#n#k，能量结晶就会被吸收，进而获得分数。\r\n一次击中的能量结晶数量越多，得分越高。", 4, 9062198, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("\r\n但是，如果击中颜色不同的能量结晶，就会#e#r扣分#k#n，你要注意点精准度。", 4, 9062198, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("\r\n为了保护勇士不受未知气息的侵害，飞艇周围包裹着一层保护罩。\r\n该保护罩可以维持#b#e最多5分钟#n#k。\r\n当保护罩消失，或得分达到5，000分时，飞艇就会自动逃出不稳定的边界。", 4, 9062198, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("\r\n成功完成任务归来的话，我会按照你获得的#b#e分数，1分换1个荣耀点数#k#n。\r\n\r\n#b（荣耀点数达到每日上限的情况下，将无法再获得点数。）#k", 4, 9062198, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("\r\n还有，一天可获得的最高分数为#r#e15，000#n#k分，达到最高分数后，将无法再参与任务。\r\n\r\n#b（即使获得的荣耀点数已达到每日上限，只要每日可获得分数还有剩余，就可以参与。）#k ", 4, 9062198, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("\r\n注意，如果在任务进行途中离开，将不会记录得分，也无法获得奖励。", 4, 9062198, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("\r\n最后要提醒的是，在任务期间，每当你在不稳定的边界里获得的分数达到一定量时，飞艇的功率就会升级。", 4, 9062198, true, true);
                                                    status = -1
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

function action分支0_4(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("\r\n#b#e挑战任务：攻城战车歼灭战#n#k\r\n\r\n#e执行任务时间#n\r\n2020年1月22日 ～2020年3月3日晚上11点59分", 4, 3003751, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk("#b#e<攻城战车歼灭战>#n#k\r\n\r\n#b攻城战车歼灭战#k是迎战进攻塞尔提乌的#r翼人军#k和#r攻城战车#k，将其击退的任务。", 4, 3004204, true, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b#e<攻城战车歼灭战>#n#k\r\n\r\n进入战场时，可以看到#b攻城战车#k朝城门猛冲过来。\r\n摧毁攻城战车后，车上的#r5个翼人军#k就会下车发动攻击。\r\n你可以根据给他们#b造成的伤害量#k获得#b分数#k，并基于该得分获得#b荣耀币#k。", 4, 3004204, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("#b#e<攻城战车歼灭战>#n#k\r\n\r\n总共会出现10台#b攻城战车#k。破坏#b攻城战车#k进入下一关，将有更强大的攻城战车等着你。", 4, 3004204, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#b#e<攻城战车歼灭战>#n#k\r\n\r\n#r攻城战车和翼人军将经过#k总共10个关卡#k提高#b防御率#k和#b等级#k。\r\n随着敌人越来越强，获得1分所需造成的伤害量也会增加。", 4, 3004204, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("#b#e<攻城战车歼灭战>#n#k\r\n\r\n根据在#b限制时间2分钟#k内造成的伤害量，可以#b最多获得1200分#k，#b每10分可以换成1个荣耀币#k。\r\n如果在限制时间结束之前先达到#b1200分#k，则任务结束。", 4, 3004204, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("#b#e<攻城战车歼灭战>#n#k\r\n\r\n挑战虽然不限次数，但#r每个世界一天只能获得1次#k#b荣耀币#k，这个你要注意哦。", 4, 3004204, true, true);
                                status = -1
                            }
                        }
                    }
                }
            }
        }
    }
}

function action分支1(mode, type, selection, i) {
    if (status <= i++) {
        cm.askMenu("\r\n#b#e<荣耀特攻队任务>#n#k\r\n\r\n加入联盟特殊小组#b荣耀特攻队#k，\r\n可以执行#r4个任务#k。\r\n\r\n#L0##e普通任务#n#k#l\r\n#L2##e精锐任务#n#k#l\r\n#L3##e挑战任务#n#k#l\r\n#L1##e每周任务#n#k#l\r\n", 4, 3004203)
    } else {
        var reactor = "action分支1_" + selectionLog[2];
        eval(reactor)(mode, type, selection, i)
    }
}

function action分支1_0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("#b#e<荣耀特攻队任务：普通任务>#n#k\r\n\r\n#b普通任务#k是可在#b一定时间内#k于冒险岛世界执行的任务，与#r荣耀特攻队阶位#k无关。\r\n\r\n可以通过与冒险岛世界的众多怪物战斗，或非战斗的其他行动执行任务。\r\n\r\n在普通任务中获得的荣耀点数也#r包括在每日荣耀点数获得上限之内#k。", 4, 3004203, false, true);
        status = -1
    }
}

function action分支1_1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("#b#e<荣耀特攻队任务：每周任务>#n#k\r\n\r\n#b每周任务#k是#r一周内#k在冒险岛世界各地执行的任务。\r\n\r\n每周任务会在 #r每周三#k重置，#b1周内每个服务器\r\n最多可执行30个任务#k。\r\n\r\n在每周任务中获得的荣耀币与#r每日荣耀点数#k互不相关。", 4, 3004203, false, true);
        status = -1
    }
}

function action分支1_2(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("#b#e<荣耀特攻队任务：精锐任务>#n#k\r\n\r\n根据#r荣耀特攻队阶位#k，可以在格兰蒂斯的新地区#b塞尔提乌#k执行#b精锐任务#k。\r\n\r\n荣耀特攻队阶位越高，可以执行的精锐任务#b数量就越多#k 。\r\n\r\n在精锐任务中获得的荣耀点数#r包括在每日荣耀点数获得上限之内#k。", 4, 3004203, false, true);
        status = -1
    }
}

function action分支1_3(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("#b#e<荣耀特攻队任务：挑战任务>#n#k\r\n\r\n#b挑战任务#k是在指定的环境中#r证明自身战斗力的任务#k。\r\n\r\n通过各种方法测试战斗力，证明你的实力，即可获得荣耀币。\r\n\r\n在挑战任务中获得的荣耀币#r包括在每日荣耀点数获得量上限之内#k。", 4, 3004203, false, true);
        status = -1
    }
}

function action分支2(d, c, b, a) {
    if (status <= a++) {
        cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/100299.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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