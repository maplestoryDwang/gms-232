var status = -1;
var selectionLog = [];

function start(d, c, b) {
    if (cm.getzhizunvip() != 2) {
        cm.dispose();
        cm.playerMessage(1, "该活动是至尊版专享。");
        return
    }
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
            cm.sendNormalTalk("#b#h0##k老师！您最近好吗？", 4, 9062290, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("...\r\n\r\n#fs16##b#e短中分勇士？！", 2, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("你还记得啊！\r\n现在就算想要忘记我也做不到了吧？嘻嘻！", 4, 9062290, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("……\r\n见到你很高兴，不过你来这里有何事？", 2, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("接受了老师的谆谆教诲之后，我也要离开去冒险，变得更加强大！", 4, 9062290, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("而且还认识了#r#e一些非常强大的人#n#k。\r\n如果把他们带到#b#e师父#n#k身边，他们一定会更加强大！", 4, 9062290, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("虽然我一个人也可以变得强大……\r\n\r\n但学习的过程中要有#fs16##r#e竞争者#n#k#fs13#才更有意思！", 4, 9062290, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk(".......", 2, 0, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("嘻嘻！当然我不会把老师当作#r#e竞争者#n#k！", 4, 9062290, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("好，那些非常强大的人是谁？", 2, 0, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("总共有#e#b10位#n#k师父哦！\r\n\r\n你知道射手村的#r#e长老斯坦#n#k老师吗？\r\n\r\n废弃都市的#r#e权达开#n#k老师……\r\n明珠港的#r#e约翰#n#k老师……\r\n勇士部落的#r#e麦吉#n#k老师……\r\n还有……", 4, 9062290, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk(".......", 2, 0, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("老师，请你抛弃成见看待世界。\r\n冒险岛世界中有许多#b#e潜在的师父#n#k！", 4, 9062290, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.askYesNo("怎么样？你要和我一起去找#b#e师父#n#k们，接受#r#e特别课程#n#k\r\n吗？", 4, 9062290)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.teachSkill(80002909, 0, -1);
                                                                    cm.teachSkill(80002909, 1, 0);
                                                                    cm.teachSkill(80002909, 1, 0);
                                                                    cm.updateInfoQuest(500984, "current=0");
                                                                    cm.updateInfoQuest(500986, "count=0");
                                                                    cm.updateInfoQuest(500986, "count=0;check=0");
                                                                    cm.updateInfoQuest(500997, "0=0");
                                                                    cm.updateInfoQuest(500998, "0=0");
                                                                    cm.updateInfoQuest(500997, "0=0;1=0");
                                                                    cm.updateInfoQuest(500998, "0=0;1=0");
                                                                    cm.updateInfoQuest(500997, "0=0;1=0;2=0");
                                                                    cm.updateInfoQuest(500998, "0=0;1=0;2=0");
                                                                    cm.updateInfoQuest(500997, "0=0;1=0;2=0;3=0");
                                                                    cm.updateInfoQuest(500998, "0=0;1=0;2=0;3=0");
                                                                    cm.updateInfoQuest(500997, "0=0;1=0;2=0;3=0;4=0");
                                                                    cm.updateInfoQuest(500998, "0=0;1=0;2=0;3=0;4=0");
                                                                    cm.updateInfoQuest(500997, "0=0;1=0;2=0;3=0;4=0;5=0");
                                                                    cm.updateInfoQuest(500998, "0=0;1=0;2=0;3=0;4=0;5=0");
                                                                    cm.updateInfoQuest(500997, "0=0;1=0;2=0;3=0;4=0;5=0;6=0");
                                                                    cm.updateInfoQuest(500998, "0=0;1=0;2=0;3=0;4=0;5=0;6=0");
                                                                    cm.updateInfoQuest(500997, "0=0;1=0;2=0;3=0;4=0;5=0;6=0;7=0");
                                                                    cm.updateInfoQuest(500998, "0=0;1=0;2=0;3=0;4=0;5=0;6=0;7=0");
                                                                    cm.updateInfoQuest(500997, "0=0;1=0;2=0;3=0;4=0;5=0;6=0;7=0;8=0");
                                                                    cm.updateInfoQuest(500998, "0=0;1=0;2=0;3=0;4=0;5=0;6=0;7=0;8=0");
                                                                    cm.updateInfoQuest(500997, "0=0;1=0;2=0;3=0;4=0;5=0;6=0;7=0;8=0;9=0");
                                                                    cm.updateInfoQuest(500998, "0=0;1=0;2=0;3=0;4=0;5=0;6=0;7=0;8=0;9=0");
                                                                    cm.forceCompleteQuest(500984);
                                                                    cm.openUIWithOption(3, 80002909);
                                                                    cm.sendNormalTalk("老师！你已经获得#b#e特别课程#n#k技能！\r\n接受各位师父的教导，#r#e能力值就会上升#n#k！\r\n\r\n\r\n#r※ 获得的能力值可通过<特别课程>技能\r\n查看。", 4, 9062290, false, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk("要想被传授能力值，需要先找回那位的记忆！\r\n收集#b#e回忆碎片#n#k，帮助他们记住过去的回忆，它们就会发挥出忘掉的实力，为你带来#r#e好的指导#n#k！\r\n\r\n\r\n#r※ 收集回忆接受师父们的指导后，即可\r\n获得能力值。", 4, 9062290, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk("消灭等级范围怪物即可找到#b#e回忆碎片#n#k。收集#r#e20个#n#k碎片后就会组成某个人的回忆！\r\n\r\n\r\n#r※ 收集碎片可随机获得某位师父的回忆。", 4, 9062290, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk("努力收集回忆吧，我也会把我收集到的回忆分享给你！\r\n\r\n\r\n#r※ 完成<与短中分勇士一起寻找回忆>任务后，\r\n即可领取选定师父的回忆。", 4, 9062290, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk("我来告诉你师父们的能力值！\r\n赶快去收集#e#b回忆碎片#n#k！\r\n\r\n\r\n#r※ <与短中分勇士一起寻找回忆>任务于每天上午7点\r\n开放一个，总共由10个任务组成。", 4, 9062290, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.openUI(1266);
                                                                                        cm.updateInfoQuest(500827, "q1Set=0;q2Set=1;q3Set=0;start=0;q4Set=1;q5Set=1;lT=20/04/19;qSetDate=20/12/04;accSum=0;QuestCount=3;accCheck=201204140414274");
                                                                                        cm.updateInfoQuest(500827, "q1Set=0;q2Set=1;q3Set=0;start=0;q4Set=1;q5Set=1;lT=20/04/19;qSetDate=20/12/04;accSum=60148;QuestCount=3;accCheck=201204140414274");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/500984.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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