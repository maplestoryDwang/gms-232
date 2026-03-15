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
            cm.sendNormalTalk("我们实在是想不出方法来拯救幼龙和年轻冒险家，因为战争不适合我们哈夫林。所以，我们想去找#b玛瑙龙的首领阿弗利埃#k问问。", 36, 2411000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("聪慧贤明的阿弗利埃，肯定能有什么办法。而且，他活了很长时间，说不定也知道有关时间圣物的事情……你们觉得怎么样？", 36, 2411000, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("能不能帮我们去寻找阿弗利埃？", 36, 2411000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#b(……要去吗？)", 45, 2400006, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("#b(如果只有阿弗利埃知道圣物，那我们也只能去找他了。)", 45, 2400005, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("#b(那塔塔曼的委托呢？要帮他吗？)", 45, 2400006, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("#b(#face3#什么？哪有那时间，我们直接去问圣物不就好了。)", 45, 2400005, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("#b(是……嘛？)", 45, 2400006, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("#b(不过我们先答应他再说。)", 45, 2400005, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("#face5#我的天……还真是让您操心了。那么我们找到阿弗利埃之后，帮您转达这里的事情。", 45, 2400005, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("噢噢……阿弗利埃的洞穴要从这里#b通过传送门到村外，再一直向南走就能看到了#k。", 36, 2411000, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.updateInfoQuest(40053, "");
                                                        cm.forceStartQuest(40053, "");
                                                        cm.updateInfoQuest(41832, "afrien=enter");
                                                        cm.setMirrorDungeonInfo(["mirrorD_321_0_", "mirrorD_321_1_", "mirrorD_321_2_", "mirrorD_321_3_", "map321190200"], [0, 0, 0, 0, 0], ["看似美丽，但其实栖息着凶恶怪物的米纳尔西部森林。\n\n通关次数:-\r\n最短纪录:-分 -秒", "森林支配者半人马王所支配的米纳尔东部森林。\n\n通关次数:-\r\n最短纪录:-分 -秒", "被西下的太阳染红的黄昏森林。\n\n通关次数:-\r\n最短纪录:-分-秒", "蓝飞龙在险峻的岩石之间筑巢的蓝飞龙峡谷。\n\n通关次数:-\r\n最短纪录:-分-秒", "贤明的玛瑙龙阿弗利埃的巢穴。"]);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/40053.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("聪慧贤明的玛瑙龙首领，欢迎你们来到阿弗利埃的洞穴~", 36, 2411009, false, true);
            cm.gainSkillBuff(100001263)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#face3#啊……发出被锁喉的青蛙声的奇怪家伙，就是这家伙啊……莫非真的是青蛙？", 44, 2400005, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("……说不定是蜥蜴。", 44, 2400006, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("不对！我不是青蛙，也不是蜥蜴！你们没看出来我这么笔挺的姿势了吗！你们的眼睛到底是怎么回事！我是聪慧贤明的玛瑙龙首领，阿弗利埃！……的儿子！我叫米乐！", 36, 2411009, true, true);
                        cm.gainSkillBuff(100001263)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("啊……原来你不是阿弗利埃啊。", 44, 2400006, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("不要这么轻易就跳过我！", 36, 2411009, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("#face3#你身后的那龙就是阿弗利埃吗？……为什么他闭着眼睛？是在睡觉吗？", 44, 2400005, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("你们又无视我！不过我回答你们！#b阿弗利埃正准备契约#k，无法起身。如果有什么事情，就先和我说吧。", 36, 2411009, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("……看来还是白跑一趟了，怎么开头就这么不顺？还跑到这么远的地方。我们回去吧。", 44, 2400005, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("跟你们说过，不要无视我！呜哇！#b之前来的人类#k都没有这样，你们为什么这么无视我？你们太坏了！", 36, 2411009, true, true);
                                                cm.gainSkillBuff(100001263)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("你们不也是为了那个凶恶巨龙而来的吗？那么我肯定知道！", 36, 2411009, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("#face3#很抱歉，我们对龙族什么的一点兴趣都没有！我们要去找时间圣物，没时间管那条龙……", 44, 2400005, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("……？时间圣物？好像听起来和时间有关系……难不成是沙漏形状的那个东西？", 36, 2411009, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("我听说#r那条巨龙拿着这个东西#k？", 36, 2411009, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk("那条龙……拿了时间圣物？", 44, 2400006, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk("不是在说谎吧？", 44, 2400005, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk("肯定不是！虽然不太清楚，好像是幼龙吃掉了沙漏，还是巨龙吃掉了圣物……反正是听到了这样的传闻！", 36, 2411009, true, true);
                                                                            cm.gainSkillBuff(100001263)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk("#face3#……你到底在说什么？好吧，算了。青蛙小朋友，这次我就相信你的话，把我们带到那条龙那里。", 44, 2400005, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk("切，什么呀！你们不会恭敬地向我请求啊！你们不是要委托我的吗？", 36, 2411009, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk("#face2#是委托还是威胁，选择权在我手里……你喜欢哪个？", 44, 2400005, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk("呜哇……你好可怕……", 36, 2411009, true, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk("知道啦！知道啦！把你们带到那凶暴的巨龙#r#p2411011##k面前不就行了！先到#b神木村#k去吧！", 36, 2411009, true, true);
                                                                                                cm.gainSkillBuff(100001263)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk("#face2#你是要打算跟来吧？", 44, 2400005, true, true)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk("我不去的话你们不就会一直要到我家来么！哎哟，那就一起去吧！一起去不就行了！", 36, 2411009, true, true)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.gainExp(115000);
                                                                                                            cm.forceCompleteQuest(40053);
                                                                                                            cm.playerMessage(5, "现在开始可以在冒险岛世界提高专业技术和倾向。");
                                                                                                            cm.updateInfoQuest(41832, "afrien=off");
                                                                                                            cm.dispose();
                                                                                                            cm.warp(321100000, 7, false)
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
    }
};