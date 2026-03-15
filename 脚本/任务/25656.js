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
            cm.sendNormalTalk("孩子，你能听见我的声音吗？", 0, 1032214, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("你是谁？", 2, 1032214, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("我们终于见面了，星之子。我是欧罗拉的2代宗师。虽然我的灵魂早已消失，不存在于这世上，却还有一丝意志留在秘宝里。", 0, 1032214, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("(真是见到了一位意外的人啊！)可你刚刚叫我星之子，这是什么意思？", 2, 1032214, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("原来你还不知道自己的真正身份。不过我时间不多，就不跟你解释了。下面我要说的话可能会令你感到震惊，但这也是你的命运。", 0, 1032214, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("我已经做好心理准备了。", 2, 1032214, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("很久很久以前，我遇到一个男人。他比这世界上任何人都要光芒四射。先不提他出众的外貌和天才般的能力，他这个人的存在已经令人目眩神迷。", 0, 1032214, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("当时我对自己的实力也很有信心，所以当他要求我跟随他时，我毫不犹豫就答应了。之后我们周游世界，精心挑选优秀人才，一点一点地组成了集团。", 0, 1032214, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("这个集团正是，欧罗拉。", 2, 1032214, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("是的，那位领导我们的男人让我们知晓了“光之力量”的存在，当我们明白在这股力量的尽头有着这世界最根本的真谛时，大家都渴望研究光之力量。欧罗拉的历史就这样拉开了帷幕。", 0, 1032214, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("可惜起初的热情没能持续多久。光之力量远比我们想象的要深奥。大家都在研究过程中感到了绝望。成为欧罗拉1代宗师的那位也不例外。", 0, 1032214, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("他为了克服这种绝望感，把自己关在房间里，废寝忘食地埋头研究。然后忽然有一天，我们产生了一种未知的异常感觉。而这种感觉的根源就在于宗师紧闭的房门。在奇异的不安感和好奇心的驱使下，我们打开了门。大家都想知道在那堵高墙后的男人是否会再次向我们展现一个新世界。", 0, 1032214, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("但是我们的期待被残忍地击得粉碎。眼前站着的那个人不再是我们的宗师，只是一个被黑暗力量所侵蚀，对力量充满渴望的怪物。那天欧罗拉半数以上的人都死了。幸存的大多数人最终也由于伤口的后遗症没活过那年。", 0, 1032214, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("那个男人该不会就是？！", 2, 1032214, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk("我们不惜巨大的牺牲打败了那个被黑暗力量控制的男人，但他没死，带着重伤逃跑了。我们照料受伤的同伴后，曾出去追击过，但在我们到达的地方只找到了一些巨大邪恶的魔法痕迹和极其纯粹的光之结晶。", 0, 1032214, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk("没错，黑魔法师正是在那时诞生的。同时带着对抗黑魔法师命运的星之子也来到了这个世上。", 0, 1032214, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk("你说到星之子，我和那个事件有什么关系吗？", 2, 1032214, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk("星之子正是那时我们找到的光之结晶，准确地说，是那个男人将体内残留的光之气息和自己具有人性的部分一同分离的结果。原本这道光芒会逐渐失去自我，最后消散掉。但我们利用光之力量，让它得以在遥远的未来重生。", 0, 1032214, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk("如果你的话是真的，那么我正是从黑魔法师身上分离的那一部分了？", 2, 1032214, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk("对，你正是黑魔法师的一部分，也是这个世界上带有最纯粹光之力量的星之子。", 0, 1032214, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk("(原来古瓦洛对我说的话是这个意思。我和黑魔法师来自同一个身体。)", 2, 1032214, true, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk("你不用为自己的身世感到悲伤，你比其他人得到了更多的爱和祝福。正如黑暗力量来源于光明一样，黑魔法师的邪恶力量来源于你善良纯粹的心性。只要你牢记这一点，一定可以打败黑魔法师。", 0, 1032214, true, true)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk("……知道了。为了告诉我这些话，你把自己锁在秘宝里这么多年，非常感谢。", 2, 1032214, true, true)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk("不，不仅是我，这世界上的所有人都应该感谢你。另外，有件事我需要请求你的原谅。由于那时黑魔法师在身受重伤的情况下，耗费大量力气将你从自己身上分离出来后，并没有完全把你毁灭，所以得知我们救下你之后，一直带有戒心。只要看到疑似星之子的人，他就毫不留情地将其杀死。", 0, 1032214, true, true)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.sendNormalTalk("在不知你什么时候才会重生的情况下，我们必须下决定。以当时欧罗拉的力量，只能勉强抵抗受伤的黑魔法师。要是黑魔法师复原后再次进攻欧罗拉，结果不堪设想！", 0, 1032214, true, true)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.sendNormalTalk("……只会遭到被屠戮的命运吧。", 2, 1032214, true, true)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.sendNormalTalk("为了对付他，我们树立了两种方案。一种是将据点迁移到现在的安身之所，在和现实世界分离的独立次元空间里建立特殊的光之结界，进行双重防备。但黑魔法师的力量难以预测。所以我们准备的第二种方案，就是找一个替代品。", 0, 1032214, true, true)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.sendNormalTalk("这是什么意思？", 2, 1032214, true, true)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.sendNormalTalk("为了防止我们找到重生的星之子时，黑魔法师前来偷袭，我们决定培养代替星之子去死的人。所以我们找了一个比其他人实力更加出众，能亲近光之力量的人，精心培养她长大。", 0, 1032214, true, true)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.sendNormalTalk("听你刚才的话，露西娅是我的替身？她是代替我被杀死的……？！", 2, 1032214, true, true)
                                                                                                                            } else {
                                                                                                                                if (status === a++) {
                                                                                                                                    cm.sendNormalTalk("对不起，因为我们的力量不足，让你陷入了这样的痛苦之中。", 0, 1032214, true, true)
                                                                                                                                } else {
                                                                                                                                    if (status === a++) {
                                                                                                                                        cm.sendNormalTalk("怎么会是这样……（露西娅，你知道这些事吗？）", 2, 1032214, true, true)
                                                                                                                                    } else {
                                                                                                                                        if (status === a++) {
                                                                                                                                            cm.sendNormalTalk("我要对你说的就这么多。漫长的等待有了结果，我终于卸下这个沉重的负担，以后就要由你一力承担了。真希望能让你不要那么辛苦。露西娅已经在这个世界的某处重新诞生，过着新生活。我们能为替身做的，只有给她第二次生命。好在命运待你们不薄，重新将你和她联系了起来。终有一天，你会和她重逢的。", 0, 1032214, true, true)
                                                                                                                                        } else {
                                                                                                                                            if (status === a++) {
                                                                                                                                                cm.sendNormalTalk("愿光之力量伴随你今后的命运。我要摆脱这无尽的生命，回到宁静的安息中了。", 0, 1032214, true, true)
                                                                                                                                            } else {
                                                                                                                                                if (status === a++) {
                                                                                                                                                    cm.sendNormalTalk("……脑子里好乱，马上返回飞鱼丸那里吧。", 3, 1032214, true, true)
                                                                                                                                                } else {
                                                                                                                                                    if (status === a++) {
                                                                                                                                                        cm.forceCompleteQuest(25656);
                                                                                                                                                        cm.gainExp(273292);
                                                                                                                                                        cm.gainItem(4033334, -1);
                                                                                                                                                        cm.playerMessage(-1, "?? ?? ????? ??? ???? ??? ? ????. ?? ???? ?? ? ??? ???.");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/25656.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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