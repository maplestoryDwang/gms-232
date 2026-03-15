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
            cm.askAcceptDecline("#h0#，我知道你忙着参加反抗者活动，但你能稍微给我一点时间吗？我从外部收到了求助信息，觉得你是最合适的人选。\r\n\r\n#b（※ #r妖精学院艾利涅#b是特殊主题副本。提供#r59级#b以下和勇士等级对应的怪物和任务。）", 0, 2151003)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("其实，#b妖精学院艾利涅#k里发生了某种骚乱。妖精学院艾利涅原本就位于人类不能进入的魔法密林附近，可最近，有一个人类魔法师却进到那里，引起了麻烦。", 0, 2151003, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("虽然这是过去的事情，不过与当初拒绝帮助埃德尔斯坦的冒险骑士团不同，我们反抗者不能眼睁睁看着别人陷入危险。因此，请你前往那里，化解这场矛盾吧。", 0, 2151003, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("好吧！那你现在就立刻去找#b魔法密林的潘喜#k吧。也许可以通过潘喜，进入妖精森林。。", 0, 2151003, true, true)
                    } else {
                        if (status === a++) {
                            cm.askYesNo("这次我可以破例把你立刻送去。点击是，我就马上送你去潘喜那里。", 0, 2151003)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(32151, "");
                                cm.forceStartQuest(32148, "1");
                                cm.dispose();
                                cm.warp(101030000, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/32151.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNext("喵~ 你就是受邀前来解决妖精学院艾利涅里发生的骚乱的勇士吗，喵？")
        } else {
            if (status == a++) {
                cm.sendNextPrevS("原……原来如此……不过你就是潘喜吗？")
            } else {
                if (status == a++) {
                    cm.sendNextPrev("你看上去好像并没有想象中的那么强哦，喵。但既然是有名的勇士，我就相信你一次吧，喵。")
                } else {
                    if (status == a++) {
                        cm.sendNextPrev("我介绍一下我的情况。我叫#b潘喜#k，大魔法师#b汉斯#k是我的第一位弟子……你那怀疑的目光是什么意思？没见过会说话的猫吗？会施法的猫也是头一次见吗？")
                    } else {
                        if (status == a++) {
                            cm.sendNextPrev("大魔法师 #b汉斯#k 的弟子可不是谁想做都能做的。只有对魔法拥有出众的领悟力以及强烈的热情的人，才有可能成为汉斯的弟子。我是不是很厉害？\r\n我先给你点时间，让你好好仰视一下我 #b潘喜#k吧。")
                        } else {
                            if (status == a++) {
                                cm.sendNextPrev("嗯？我想说什么来着？……喵！晕了，现在可不是说这些的时候！")
                            } else {
                                if (status == a++) {
                                    cm.sendNextPrev("#fNpc/1500011.img/stand/0#\r\n我有一个叫#b魔法师库迪#k的朋友。他也跟我一样，是大魔法师汉斯的弟子，虽然年纪轻轻，但是头脑灵力，教什么都是举一反三。虽然也有点小缺点……")
                                } else {
                                    if (status == a++) {
                                        cm.sendNextPrev("#fNpc/1500000.img/stand/0##fNpc/1500002.img/stand/0#\r\n但是，不久之前，这个朋友发生了点事情。他被妖精们关起来了！罪名竟然是 #e#r妖精绑架犯#k#n。这其中肯定是有什么误会。")
                                    } else {
                                        if (status == a++) {
                                            cm.sendNextPrev("我现在没时间解释。以后我会告诉你的，你先帮帮我吧！\r\n#b（※ #r妖精学院艾利涅#b是特殊主题副本。最大使用等级为#r59级#b，可获得与勇士等级相符的怪物和任务经验值。）")
                                        } else {
                                            if (status == a++) {
                                                cm.forceCompleteQuest();
                                                cm.forceStartQuest(32147, "1");
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
};