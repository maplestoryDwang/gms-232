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
            var text = "\r\n#e有什么事吗？#n\r\n\r\n#L0#了解<甜蜜绵软蛋糕装饰>#l";
            text += "\r\n\r\n#L5#没别的问题了。#l\r\n";
            cm.askMenu(text, 4, 1012108)
        } else {
            var reactor = "action分支" + selectionLog[1];
            eval(reactor)(mode, type, selection, i)
        }
    }
}

function action分支0(mode, type, selection, i) {
    if (status <= i++) {
        cm.askMenu("\r\n我想了解#e<甜蜜绵软蛋糕装饰>#n！\r\n\r\n#L0# 给我介绍一下甜蜜绵软蛋糕装饰。#l\r\n#L1# 我想知道获得#t2630033#的方法。#l\r\n#L2# 告诉我今天获得的#t2630033#数量。#l\r\n#L3# 蛋糕装饰材料可以从哪里获得呢？#l\r\n#L4# 我想知道活动时间。#l\r\n#L5# 没别的问题了。#l\r\n", 4, 1012108)
    } else {
        var reactor = "action分支0_" + selectionLog[2];
        eval(reactor)(mode, type, selection, i)
    }
}

function action分支0_0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("\r\n使用#i2630033:##e#t2630033:##n，可以将圣诞节蛋糕装饰得又大又漂亮。", 4, 1012108, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk("\r\n蛋糕越大，可以装饰的部分就越多。", 4, 1012108, true, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("\r\n请把蛋糕做得又大又美味，然后用漂亮的装饰材料来装饰它！", 4, 1012108, true, true);
                status = -1
            } else {
                cm.dispose()
            }
        }
    }
}

function action分支0_1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("\r\n#i2630033:# #e#t2630033:##n可以通过狩猎#r#e等级范围内的怪物#k#n获得。\r\n\r\n #fc0xFFAAAAAA#- 等级范围内的怪物：以角色等级为基准，-20级到+20级范围内的怪物#k", 4, 1012108, false, true);
        status = -1
    } else {
        cm.dispose()
    }
}

function action分支0_2(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("\r\n#e今天获得#t2630033:#：#r0个#k\r\n今天可获得#t2630033:#：#b100个#k#n", 4, 1012108, false, true);
        status = -1
    } else {
        cm.dispose()
    }
}

function action分支0_3(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("\r\n#e#b蛋糕装饰材料#n#k可以通过狩猎精英怪物获得！", 4, 1012108, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk("\r\n此外……如果骑着#e#b巧克力水灵#n#k爬到上面去，运气可能会更好。", 4, 1012108, true, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("\r\n啊！每天搜集100个蛋糕粉，我就送你一份礼物！", 4, 1012108, true, true);
                status = -1
            } else {
                cm.dispose()
            }
        }
    }
}

function action分支0_4(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("甜蜜绵软蛋糕\r\n在#b#e2019年12月31日23点59分之前#n#k可以进行装饰！", 4, 1012108, false, true);
        status = -1
    } else {
        cm.dispose()
    }
}

function action分支0_5(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("如果有什么问题，可以随时来问我！", 4, 1012108, false, false);
        status = -1
    } else {
        if (status === a++) {
            cm.dispose()
        }
    }
}

function action分支1(mode, type, selection, i) {
    if (status <= i++) {
        cm.askMenu("\r\n你想了解#e<甜蜜松脆饼干时间>#n吗！\r\n\r\n#L0# 给我介绍一下甜蜜松脆饼干时间。#l\r\n#L1# 我想知道获得饼干的方法。#l\r\n#L2# 告诉我今天获得的饼干数量。#l\r\n#L3# 伤害皮肤该如何进行装饰？#l\r\n#L4# 我想知道活动时间。#l\r\n#L5# 没别的问题了。#l\r\n", 4, 1012108)
    } else {
        var reactor = "action分支1_" + selectionLog[2];
        eval(reactor)(mode, type, selection, i)
    }
}

function action分支1_0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("\r\n甜蜜松脆饼干时间是上午10点到午夜之间#b#e每小时15分#n#k！", 4, 1012108, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk("\r\n到整点15分的时候，射手村、神木村、无名村的天空中会落下饼干！", 4, 1012108, true, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("\r\n饼干每天只能获得5个。请搜集掉落的饼干，用来制作伤害皮肤！", 4, 1012108, true, true);
                status = -1
            } else {
                cm.dispose()
            }
        }
    }
}

function action分支1_1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("\r\n饼干可于每小时15分在射手村、神木村、无名村获得。\r\n\r\n #e#fc0xFFAAAAAA#- 饼干时间进行时间：上午10点～午夜\r\n- 饼干获得限制：每天5个#k#n", 4, 1012108, false, true);
        status = -1
    } else {
        cm.dispose()
    }
}

function action分支1_2(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("\r\n#e今天获得饼干：0个#k\r\n今天可获得饼干：5个#n", 4, 1012108, false, true);
        status = -1
    } else {
        cm.dispose()
    }
}

function action分支1_3(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("\r\n伤害皮肤可以用获得的饼干来装饰！", 4, 1012108, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk("\r\n获得饼干时，会自动把饼干添加进去。\r\n之后可以在[饼干]装饰伤害皮肤！中更改。", 4, 1012108, true, true);
            status = -1
        } else {
            cm.dispose()
        }
    }
}

function action分支1_4(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("\r\n酥脆甜饼伤害皮肤\r\n可以在#b#e2018年12月26日23点59分之前#n#k进行装饰！", 4, 1012108, false, true);
        status = -1
    } else {
        cm.dispose()
    }
}

function action分支1_5(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("如果有什么问题，可以随时来问我！", 4, 1012108, false, false)
    } else {
        if (status === a++) {
            cm.dispose()
        }
    }
}

function action分支2(mode, type, selection, i) {
    if (status <= i++) {
        cm.askMenu("\r\n你想了解#e<甜蜜粘稠巧克力水灵>#n吗！\r\n\r\n#L0# 给我介绍一下甜蜜粘稠巧克力水灵。#l\r\n#L1# 可以获得什么呢？#l\r\n#L2# 我想知道活动时间。#l\r\n#L3# 没别的问题了。#l\r\n", 4, 1012108)
    } else {
        var reactor = "action分支2_" + selectionLog[2];
        eval(reactor)(mode, type, selection, i)
    }
}

function action分支2_0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("\r\n甜蜜粘稠巧克力水灵是骑着巧克力水灵跳高的小游戏！", 4, 1012108, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk("\r\n点击每小时45分在头顶出现的邀请信时，可以移动到甜蜜粘稠巧克力水灵地图。", 4, 1012108, true, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("\r\n骑着巧克力水灵在5秒内连续跳跃时，每次跳跃力会提升10%！", 4, 1012108, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("\r\n请通过连续跳跃逐渐跳到高处，获得位于高处的奖励！", 4, 1012108, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("\r\n跳跃的时候，可以获得提高倾向的圣诞节巧克力、金币、蛋糕装饰材料、蛋糕粉！", 4, 1012108, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("\r\n啊！还有，这个小游戏#e#b每天只能参加1次#k#n。", 4, 1012108, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("\r\n\r\n#e#fc0xFFAAAAAA#- 巧克力水灵进行时间：上午10点～午夜\r\n- 参加限制：每天1次#k#n", 4, 1012108, true, true);
                                status = -1
                            } else {
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
}

function action分支2_1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("\r\n可获得道具\r\n\r\n #b#e- 圣诞节巧克力#n#k：发放随机倾向5（最多40个）\r\n #b#e- 蛋糕粉#k#n：蛋糕升级道具（无限制）\r\n #b#e- 蛋糕装饰材料#k#n：蛋糕装饰道具（最多1个）\r\n #b#e- 金币包#k#n：10万金币（最多10个）\r\n\r\n#e#fc0xFFAAAAAA#奖励在退出时发放\r\n#k", 4, 1012108, false, true);
        status = -1
    } else {
        cm.dispose()
    }
}

function action分支2_2(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("甜蜜粘稠巧克力水灵\r\n可以在#b#e2019年12月31日23点59分之前#n#k进行！", 4, 1012108, false, true);
        status = -1
    } else {
        cm.dispose()
    }
}

function action分支2_3(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("如果有什么问题，可以随时来问我！", 4, 1012108, false, false)
    } else {
        if (status === a++) {
            cm.dispose()
        }
    }
}

function action分支3(mode, type, selection, i) {
    if (status <= i++) {
        cm.askMenu("\r\n你想了解#e<卡米拉面包房的甜蜜礼物>#n吗！\r\n\r\n#L0# 甜蜜礼物该如何领取？#l\r\n#L1# 特别礼物该如何领取？#l\r\n#L2# 我想知道活动时间。#l\r\n#L3# 没别的问题了。#l\r\n", 4, 1012108)
    } else {
        var reactor = "action分支3_" + selectionLog[2];
        eval(reactor)(mode, type, selection, i)
    }
}

function action分支3_0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("\r\n甜蜜礼物是每天可以获得1次的礼物。", 4, 1012108, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk("\r\n只要执行面包房的蛋糕、饼干、巧克力任务各1次，就可以获得！", 4, 1012108, true, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("\r\n经过午夜之后任务就会初始化，请一定要注意！", 4, 1012108, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("\r\n#e每日任务#n\r\n\r\n - 蛋糕：获得100个蛋糕粉\r\n - 饼干：获得5个饼干\r\n - 巧克力：获得30个巧克力", 4, 1012108, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("\r\n#b#e<甜蜜礼物>#n#k\r\n- 在以下奖励中选1\r\n#b#i2450130:# #t2450130:#（15分钟）（3天） 2个#k #l\r\n#b#i2439869:# #t2439869:#（3天） 1个#k #l\r\n#b#i01839:# #t01839:#（永久） 20个#k #l", 4, 1012108, true, true);
                        status = -1
                    } else {
                        cm.dispose()
                    }
                }
            }
        }
    }
}

function action分支3_1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("\r\n特别礼物是根据甜蜜礼物获得次数额外发放的礼物。", 4, 1012108, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk("\r\n获得甜蜜礼物的次数达到2次、4次、6次、8次、10次时，可以获得特别礼物！", 4, 1012108, true, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("\r\n#b#e<特别礼物1>#n#k\r\n1。#i1122334:# #b#t1122334:# 1个\r\n#k2。#i2433808:# #b#t2433808:# 3个", 4, 1012108, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("\r\n#b#e<特别礼物2>#n#k\r\n1。#i2436782:# #b#t2436782:# 1个\r\n#k2。#i2593001:# #b#t2593001:# 5个", 4, 1012108, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("\r\n#b#e<特别礼物3>#n#k\r\n1。#i2433604:# #b#t2433604:# 1个\r\n#k2。#i2439505:# #b#t2439505:# 1个", 4, 1012108, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("\r\n#b#e<特别礼物4>#n#k\r\n1。#i2614026:# #b#t2614026:# 1个\r\n#k2。#i2439279:# #b#t2439279:# 1个", 4, 1012108, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("\r\n#b#e<特别礼物5>#n#k\r\n1。#i2730000:# #b#t2730000:# 10个\r\n#k2。#i2048731:# #b#t2048731:# 1个", 4, 1012108, true, true);
                                status = -1
                            } else {
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
}

function action分支3_2(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("甜蜜礼物\r\n可以在#b#e2018年12月26日23点59分之前#n#k获得！", 4, 1012108, false, true);
        status = -1
    } else {
        cm.dispose()
    }
}

function action分支3_3(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("如果有什么问题，可以随时来问我！", 4, 1012108, false, false);
        status = -1
    } else {
        if (status === a++) {
            cm.dispose()
        }
    }
}

function action分支4(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("你想了解<卡米拉的圣诞服装礼物>吗！", 4, 1012108, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk("快乐的圣诞节！\r\n甜蜜的点心很重要，但#e#b服装#k#n也非常重要，不是吗？", 4, 1012108, true, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("所以我提前做好了准备！\r\n每天赠送#e#b圣诞节服装选择券（1天）#k#n！", 4, 1012108, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("我准备的服装不是普通的服装！\r\n上面带有#e特殊能力值#n！", 4, 1012108, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("每天可以从5种服装中选择自己喜欢的服装！", 4, 1012108, true, true);
                        status = -1
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

function action分支5(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("如果有什么问题，可以随时来问我！", 4, 1012108, false, false)
    } else {
        if (status === a++) {
            cm.dispose()
        }
    }
}

function action分支11(d, c, b, a) {
    cm.dispose();
    cm.startQuestScript(9010010, 100138)
}

function action分支12(d, c, b, a) {
    cm.dispose();
    cm.startQuestScript(9010010, 100140)
}

function action分支13(d, c, b, a) {
    cm.dispose();
    cm.startQuestScript(9010010, 100147)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/100149.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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