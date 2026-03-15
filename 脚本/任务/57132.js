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
            if (cm.isQuestFinished(57131)) {
                cm.forceStartQuest(57132, "");
                cm.dispose();
                cm.warp(200050001, 0, false);
                return
            }
            cm.sendNormalTalk_Bottom("#face0#剑斗。好久不见了。事出紧急，所以特意写信通知于你。", 37, 1012100, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#你有没有听说过神秘岛这个地方？在神秘岛附近，我们发现了织田军的痕迹。无论是这些人的装饰，还是他们身上的家纹图案，都和剑斗所描述的织田军完全一致，相信应该就是他们没错。", 37, 1012100, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#就和之前发生在金银岛的魔物暴动事件一样，这次应该也是织田军在暗地里计划着什么。", 37, 1012100, true, true)
                } else {
                    if (status === a++) {
                        cm.askAcceptDecline_Bottom("#face0#希望你能够尽快前往天空之城。详细情况你可以向隐藏在天空之城周边地区的斯皮罗纳进行询问。", 37, 1012100)
                    } else {
                        if (status === a++) {
                            cm.OnStartNavigation(104020110, 1, "1032008", 0);
                            cm.sendNormalTalk_Bottom("天空之城……这应该就是之前木野子曾经提到过的“大陆”吧。我记得可以在金银岛搭乘飞行船直接前往。", 57, 0, false, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("织田军已经现身了，我最好尽快去见这位名叫斯皮罗纳的人。先前往天空之城，去找找斯皮罗纳所在的位置吧。", 57, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(57131, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/57132.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            if (cm.isQuestFinished(57131)) {
                cm.sendNormalTalk_Bottom("#face0#嗯？你是什么人？", 37, 2032001, false, true);
                cm.forceCompleteQuest(57132);
                cm.gainExp(4609);
                cm.dispose();
                return
            }
            cm.npc_LeaveField("oid=6697");
            cm.npc_LeaveField("oid=6698");
            cm.askYesNo_Bottom("#face0#哦，是剑斗啊。", 37, 9130024)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("没想到能在这里见到幸盛你，真让人高兴啊。我们已经有日子没见了吧，听说你也一直在忙着执行任务呢。", 57, 0, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#嗯，我确实是一直在忙任务。而且在枫叶山丘，也有一些我不想见到的人……", 37, 9130024, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("这句话似乎之前也曾听你提到过啊，这些不想见到的人究竟是……？啊，当然了，如果你不想说也没有关系。", 57, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#没有关系，我乐意讲给剑斗你听。你应该已经知道了，我曾经是侍奉尼子家的武士。尼子家灭亡之后，我就以浪人的身份加入了联合军的队伍。", 37, 9130024, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("这件事我当然知道。大家都说幸盛可是尼子家的忠臣啊。啊，你难道是因为……", 57, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#你猜得不错。我听说剑斗你曾经侍奉的松山家是被织田军灭门的。而我所侍奉的尼子家并不是遭到织田军灭门……而是被联合军的中心人物，在枫叶山丘建立起了营地，并将群雄召集到一起的人亲手消灭的……这个人就是毛利元就。", 37, 9130024, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("原来如此……实在抱歉，我竟然一直没有意识到这一点。", 57, 0, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#没有关系。既然我已经加入了联合军，就不会立刻对毛利家动手。这些问题都是后话，至少要等到我们打倒信长，返回日本之后再说。我的使命就是找到继承了尼子家血脉的人，复兴尼子家门……在此之前，我会作为联合军的一员拼尽全力。", 37, 9130024, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("我的想法和你一样。我现在只想尽快救出姬儿，请她继承家业，让松山家恢复往日的荣光，这便是我最大的使命……在实现这个使命之前，我绝对不会轻易丢掉自己的性命。", 57, 0, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#哈哈，我们两个都是为了重建家业而努力奋斗的年轻武士……看来我和剑斗你很是投缘呢。", 37, 9130024, true, true);
                                                    cm.forceCompleteQuest(57131);
                                                    cm.gainExp(4609);
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
};