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
            cm.sendNormalTalk("你好，#e#b#h0##k#n。正好来了一个新任务，你有兴趣看看吗？", 4, 3004203, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("有位#r特殊的客人#k从西方世界来到了我们这里。他带来了一笔不错的交易，切奇决定要帮帮他。", 4, 3004203, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("啊，#e#b#h0##k#n！你有空帮我个忙吗？", 4, 3004213, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("这位就是来我们冒险岛世界学习技术的#r斯皮萨兹#k，他是侍奉古代神斯皮萨的一名祭司。", 4, 3004213, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("对！我就是信奉古代神斯皮萨的#e#r斯皮萨兹#k#n。我们教团派我来到新世界，就是为了学习这里的技术实力，壮大教团力量！", 4, 9062201, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("交易非常简单！给他稍微展示一下我们多年来的研究成果，他就会帮我们制作用途更多样的装置！", 4, 9062201, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("这一展现冒险岛世界技术实力的光荣任务，就落到我头上了，嘿嘿。", 4, 3004213, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("斯皮萨兹带来的#r黑火药#k爆炸力强悍，火焰耀眼，是非常优质的火药。一想到要使用它制作炸弹，我就激动不已。", 4, 3004213, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("我已经制造好需要的装置了。\r\n它就是#b新型爆炸机器人#k，#e#r卡彭韦伯！#n#k", 4, 3004213, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.askYesNo("为了对卡彭韦伯展开#e#r火力测试#n#k，我需要#h0#你的帮助。你能帮我完成这个任务吗？", 4, 3004213)
                                            } else {
                                                if (status === a++) {
                                                    cm.teachSkill(80002813, 0, -1);
                                                    cm.teachSkill(80002813, 1, 4);
                                                    cm.teachSkill(80002813, 1, 0);
                                                    cm.updateInfoQuest(100331, "shape=0");
                                                    cm.updateInfoQuest(100331, "power=0;shape=0");
                                                    cm.forceCompleteQuest(100329);
                                                    cm.fieldEffect_PlayFieldSound("Sound/Game.img/QuestClear", 100);
                                                    cm.playerMessage(5, "现在进入等级范围怪物所在的地方，就能见到斯皮萨兹和卡彭韦伯了。");
                                                    cm.sendNormalTalk("好！下面我来介绍一下最新型爆炸机器人，#e#b卡彭韦伯#k#n的使用方法。", 4, 3004213, false, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("\r\n#b#e卡彭韦伯#k#n是可以自由改良的#b安装型爆炸机器人#k，通过#r#e预热#k#n升温，然后安装好机器人，就可以#r喷射火焰喷射#k了。", 4, 3004213, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("\r\n#b#e<预热>#n#k\r\n\r\n消灭等级范围怪物后，经有一定概率#e#b预热#k#n机器人，获得#e#b荣耀点数#k#n。斯皮萨兹也会帮你预热的。", 4, 3004213, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("\r\n#b#e<安装>#n#k\r\n\r\n预热完毕，即可将卡彭韦伯#b安装在任意地点#k。由于卡彭韦伯为浮游型机器人，在空中也可以使用。\r\n\r\n#r※ 在新手技能栏中使用爆炸机器人：卡彭韦伯技能，即可安装。#k", 4, 3004213, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk("\r\n#b#e<安装>#n#k\r\n\r\n安装后将立即获得#e#b荣耀点数#k#n。", 4, 3004213, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk("\r\n#b#e<安装>#n#k\r\n\r\n但是，安装后机器人会在#r60秒内会处于超负荷#k状态，在此期间#r#e无法#k#n#b预热#k或领取#b荣耀点数#k。", 4, 3004213, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk("\r\n#b#e<更新和火力信息>#n#k\r\n\r\n每次#b安装卡彭韦伯#k，斯皮萨兹都要记录#b1个火力信息#k 记录。", 4, 3004213, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk("\r\n#b#e<更新和火力信息>#n#k\r\n\r\n每#b#e安装7次卡彭韦伯#k#n，收集7个火力信息，我就会#e#r更新#k#n卡彭韦伯，然后交给你测试。", 4, 3004213, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk("\r\n#b#e<更新效果>#n#k\r\n\r\n#b#e- 技能等级 1：基础技能效果\r\n- 技能等级 2：扩大范围\r\n- 技能等级 3：提高可攻击怪物数量上限\r\n- 技能等级 4：增加安装持续时间", 4, 3004213, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk("\r\n#b#e<更改火焰喷射方向>#n#k\r\n\r\n想要更改#b#e卡彭韦伯#k#n#r喷射火焰的方向#k，就来找我吧。", 4, 3004213, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk("\r\n#b#e<改变火焰喷射方向>#n#k\r\n\r\n一共有4个方向，包括向周围喷射的#e#b环绕型喷射#k#n、向左右两侧喷射的#e#b左右型喷射#k#n、向上喷射的#e#b柱形喷射#k#n，以及呈X形交叉喷射的#e#bX型喷射#k#n。", 4, 3004213, true, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk("\r\n#b#e<改变火焰喷射方向>#n#k\r\n\r\n需要改变就来找我，改变结果将从下次安装起生效。#r配合环境调整方向#k，会更加有利于作战。", 4, 3004213, true, true)
                                                                                            } else {
                                                                                                if (status === a++) {
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/100329.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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