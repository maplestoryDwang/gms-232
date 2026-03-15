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
            cm.forceStartQuest(40058, "");
            cm.updateInfoQuest(40058, "");
            cm.gainItem(4033804, 1);
            cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/40058.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, true, true);
            cm.updateInfoQuest(40058, "");
            cm.forceStartQuest(40058, "");
            cm.forceCompleteQuest(40058);
            cm.forceCompleteQuest(40903);
            cm.sendNormalTalk("找到乐器了吗？啊……这个音乐盒……！以前我造访#b精灵村庄#k的时候见过，这个是精灵女王的……为什么潘姆会有这个东西？太神奇了。", 33, 2411010, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("我还担心你们演奏乐器的实力，既然拿回来音乐盒实在是太好了。那么就开始安装音乐盒吧。", 33, 2411010, true, true)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_MoveAction(0);
                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                    cm.effect_PlayMusic("Game/QueenOfElf");
                    cm.gainSkillBuff(100001263)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("这美妙的声音……仿佛来到了精灵世界。我要向你们道谢，让我听到了如此怀念的乐声。", 33, 2411010, false, true);
                        cm.effect_Direction("Effect/Direction13.img/zeroPrologue/Emotion14", 0, 0, 0)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("……嘿嘿，还好效果不错。", 41, 2400005, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("不必多礼了。现在安静了，我们该说什么就说什么吧。你到底是谁？为什么把这凶恶的#p2411011#叫做宝宝，还如此照看它？你的目的是什么？", 41, 2400005, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("我叫#p2411010#，是魔法师。我巡游世界各地做很多研究。目前为了研究龙族来到了神木村，因为某种事情暂时待在这里而已。", 33, 2411010, true, true);
                                    cm.gainSkillBuff(100001263)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("之间受到了哈夫林的委托，来调查这个可怕的龙，但发现了一个惊人的事情。这孩子……它原本不是长这样的。", 33, 2411010, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("这孩子……原本是一只善良又好奇的幼龙。不过有一天，因为好奇没有得到允许，就跑出了村庄。", 33, 2411010, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("它在陌生的森林冒险的时候，发现了闪闪发光的#b巨大沙漏#k。因为它也是第一次看到这么神奇的东西，就跑过去在地上滚动着沙漏玩耍了起来。", 33, 2411010, true, true);
                                                cm.gainSkillBuff(100001263)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("问题就是从这开始的，他玩得正起劲的时候，发现自己好像离地面变得很远，前爪和后爪也变大，声音也变得更粗……之后就变成现在这可怕的模样。", 33, 2411010, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("因为它自己也被吓得不轻，所以回到了村庄。但是却把村里的人吓了一跳，受到惊吓的人们就把它赶了出来，最后这孩子只能跑到这个洞穴里躲了起来。", 33, 2411010, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("经过调查发现，这孩子变成这样的原因……就是因为那个巨大沙漏。莫非，你们来找它就是为了那个沙漏吗？", 33, 2411010, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("如果是这样的话，希望你们快把沙漏拿走。我用魔法扫描了一下，貌似#b沙漏已经被这孩子完全吸收了#k。我想尽了各种方法，但还是无法分离出来。", 33, 2411010, true, true);
                                                                cm.gainSkillBuff(100001263)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk("那个沙漏……", 41, 2400006, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk("#face3#就是我们要找的东西。但是这个凶恶的龙吸收了沙漏，对吧？嗯……我们该怎么办？如果能#r剖腹取出沙漏是最简单的事情#k……", 41, 2400005, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk("开，开玩笑的吧？这么可爱的小家伙，你们忍心剖腹吗……绝对不可以！", 33, 2411010, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk("当然，用那个方法是最省力的，但是看起来时间之力已经被#p2411011#完全吸收掉了，剖腹了估计也不管用。我看只能回去找神官们出出主意了？", 41, 2400005, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk("嗯，那就拜托你们了……无法回到村子，就这样孤苦伶仃地活一辈子，是不是对这个幼龙太过残忍了？", 33, 2411010, true, true);
                                                                                    cm.gainSkillBuff(100001263)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                                        cm.gainExp(554000);
                                                                                        cm.gainItem(4033804, -1);
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
};