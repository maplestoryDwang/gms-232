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
            cm.askMenu("欢迎来到你的新家，冒险岛人！这就是我们为与我们敌对的人准备的监狱！一旦进去就出不来，哦，星际假日除外！\r\n\r\n#b#L0#这种东西是关不住我的！#l\r\n#L1#那行，我就待这儿看你怎么出去好了。#l", 0, 9201174)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("我们先进的囚笼岂是你这种原始人能够理解的？你是打不开它的！头长得再大也没用！", 0, 9201174, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("就算，虽说不太可能，你能打开它，你也逃不了。除非你用上我们的超级秘密交通工具——机械座驾！它正好就离你三英尺远。在这个星球上，只有它装载的武器才能破坏我们的安保机器人！怎样？是不是绝望了！你肯定不会聪明到利用我这番话的！哇哈哈哈！", 0, 9201174, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("哇哦，好酷啊！是谁造的？肯定是你吧。我的原始人大脑已经完全跟不上你了。", 3, 9201174, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("看来你们这帮蠢猴子里还是有几个聪明的家伙嘛！当然是我造的啦，差不多！要造出机械座驾有我一个人就够了！如果有人告诉你它是我们花了无数人力花了三十多年才造出来的，你可千万别信他！完全是胡说八道！", 0, 9201174, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("嘿，这真是酷毙了。老实说吧，我不想逃跑了。你能待在这儿跟我说说你有多厉害吗？", 3, 9201174, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("你能解释下那东西的控制机制吗？你们都用上了什么索敌系统？", 3, 9201174, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("噢——噢，那个啊，当然没问题啦，毕竟是我造的，只不过……那啥，你懂的。因为保密协议啥的，这个，说了你也不明白……", 0, 9201174, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("可它不是你造的吗！再说一点内幕也不行？我该怎么操作它的主炮？门怎么打开？你不会连这么简单一扇门都不会开吧。", 3, 9201174, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("我当然会开！我可是开门大师！我跟你讲这门可不是什么人都能开的！", 0, 9201174, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("那——那你能开给我看看嘛？我只是想在这里渡过余生前见证一下你的伟大。", 3, 9201174, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("可以理解，我确实很伟大。", 0, 9201174, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("*咔嚓*", 0, 9201174, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("厉不厉害，冒险岛猴子？！", 0, 9201174, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk("(这货没救了啊！)", 3, 9201174, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk("大哥！你真是又聪明又厉害！我满足了。像你这么能干的人看守简直是浪费生命啊！你应该去和美女谈笑风生，带她们去，呃，太空安杰利斯山脉欣赏美景！", 3, 9201174, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk("我确实很想去太空安杰利斯。那里的景色让人叹服，但那里的人就不怎么样了！可惜！我错过了我上司的孩子的大变庆典，处罚就是看守你！", 0, 9201174, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk("哎呀，你肯定能说服他原谅你的啦！直接冲进去让他要么承认你有多么伟大，要么当场毙了你！你可不是什么窝囊废！这儿的东西不都是你造出来的吗！", 3, 9201174, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk("你说的有道理！那什么，虽然说我是个天才发明家有点过了，但我确实不该沦落到如此地步！", 0, 9201174, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk("可不是啊，兄弟！你得马上行动！别忘了威胁他把你当场毙了！", 3, 9201174, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk("好！没问题！谢谢你，丑陋的冒险岛人。等我看到了太空安杰利斯山，一定会想起你的。你肯定能当个好奴隶！", 0, 9201174, true, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.forceStartQuest(28824, "1");
                                                                                                cm.gainExp(70000);
                                                                                                cm.forceCompleteQuest(28750);
                                                                                                cm.dispose();
                                                                                                cm.warp(610040501, 0, false)
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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/28750.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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