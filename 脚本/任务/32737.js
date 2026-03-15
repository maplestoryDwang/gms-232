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
            cm.sendNormalTalk_Bottom("我们在这里见到也算是一种缘分！你，不想加入跆拳道部吗？", 37, 1530100, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("强大的女生最漂亮！是女生的话当然要选择跆拳道啦！", 37, 1530100, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("不是吧，要说运动的话，还是要数剑道。那将非常有助于你修身养性。", 37, 1530080, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("不，像那种固定模式的战斗并不适合你。所以你还是来我们地下社团吧。", 37, 1530090, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("喂，太过分了吧，你们！想要和我抢吗？这家伙可是我先看中的！", 37, 1530100, true, true)
                        } else {
                            if (status === a++) {
                                cm.askMenu_Bottom("\r\n#b#L0#不好意，我只想好好学习。\r\n#L1#我不要，烦死了。#l#l\r\n#L2#我可不想和你们这种人混在一起。#l", 37, 1530100)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("是吗？你可比看起来诚实多了。既然如此我也不能强求。", 37, 1530080, false, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("什么，真没劲……这完全是和米哈尔一样的货色嘛？", 37, 1530100, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("可是你呆在屋顶干什么呢？", 37, 1530080, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("你被罚打扫卫生？啊啊……原来可怜的你被学生会长派来干苦差事啦。", 37, 1530080, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("不管怎样，如果你改变主意的话，就和我联系吧。给你我们的电话号码。", 37, 1530100, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("那我们走喽！下次见。\r\n\r\n#r#b（回到2楼阅览室的南哈特那里吧）#k", 37, 1530100, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.forceStartQuest(32737, "");
                                                            cm.setNumberForQuestInfo(32759, "5f", 1);
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