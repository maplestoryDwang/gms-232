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
            cm.askAcceptDecline_Bottom("#face0#想要在酒馆收获情报怕是没希望了，还是去村里转转，想办法收集吧。\r\n之后，会有蛮长一段时间不会再见了，顺带去道个别。", 36, 3001674 + cm.getPlayer().getGender())
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#我的前辈、卡琳……还有俊秀法师，是这样的吗？", 36, 3001674 + cm.getPlayer().getGender(), false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#啧啧……真是将时间浪费在无谓的事情上……", 36, 3001651, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#打招呼是很重要的，你难道不知道有句话叫“会者定离，去者必返”吗？", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#要不是找怪物我可不感兴趣，\r\n我先进去了，等结束了再叫我。", 36, 3001651, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face5#大怪物倒是极其冷静嘛。", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#真要见面了，心情还是有点沉重，我听说你安然无恙地回来了，\r\n前辈，你该不会生气了吧？", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face2#现在这会儿，应该在#r#m410000201##k……去那里看看吧。", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.forceStartQuest(39541, "");
                                            cm.OnStartNavigation(410000201, 0, "", 39541);
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
            cm.sendNormalTalk_Bottom("#face0#……", 36, 3001674 + cm.getPlayer().getGender(), false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face2#……前辈？", 36, 3001674 + cm.getPlayer().getGender(), true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face3#大可不必这么垂头丧气的。", 36, 3001653, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face3#我好歹还是做了点什么的……", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face1#哎哟……这不都是计划好的嘛？\r\n佯装逃跑再乘虚而入，这个作战计划简直太妙了。", 36, 3001653, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#一开始我真的差点就上当了呢，\r\n演技是相当专业啊，后辈，真想为你鼓掌。", 36, 3001653, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#这记忆好像被美化过了吧，前辈？\r\n照实说的话，当时也确实考虑过要不要逃跑吧？", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face2#额……那真的是……", 36, 3001653, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#……", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（怎么感觉气氛一下子冰冷下来了，我是不是不该说的？\r\n一阵后悔袭来……）", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face1#哈……这样啊，不过多亏虎影你雇佣来的那些解决师，\r\n我才能安然无恙地逃出来，这是不争的事实嘛。", 36, 3001653, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#如果被一直困在这里，谁都不敢保证会有什么后果吧？\r\n无论过程如何，后辈你都是我的救命恩人。", 36, 3001653, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0#所以你就照往常的样子待我就好，\r\n这样我反而心里踏实，唔……", 36, 3001653, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face0#都说到这个份上了……", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#呼……我们还是来聊聊鼠精的事吧，解决师。", 36, 3001653, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（我聊了许久抓住鼠精的故事，\r\n前辈似是很感兴趣一般，一边点头一边听我说。）", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（聊了聊离开村庄后将面对怎样的冒险，\r\n也聊了聊因为个人情况而不得不辗转世界各地一事。）", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("#face7#说起来，上次说的事我还没听你说呢，\r\n现在是否还留有当初开始冒险时的梦想。", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("#face3#我以为打算回到大海已经算是回答了，\r\n那个梦在很久之前已经变得模糊了。", 36, 3001653, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("#face3#没必要摆出那种表情，毕竟梦想这种东西，有一天还会再次出现，\r\n我就是为了寻找才四处转一转的。", 36, 3001653, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#哈……真要去大海啊，\r\n我应该会很怀念当初一起吃过好长一段时间的泡饭滋味吧？", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#我们彼此都是要离开的对吧？", 36, 3001653, true, true)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0#那什么，话虽如此。", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face0#如果前辈有机会再次回到陆地，我们搞不好会碰面，\r\n毕竟我也有可能会再次回到这里。", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face0#如果遇到了当然是万幸，要是万一错过了……\r\n就在酒馆留下书信如何？", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face0#呵呵……这倒不赖。", 36, 3001653, true, true)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face11#那我就先行告辞了，祝愿你总有一天能找到梦想。", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face1#哈欠……祝你梦想成真。", 36, 3001653, true, true)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face3##fc0xFFbfbfbf#（既然已经和前辈打过招呼了，就去找找卡琳吧，\r\n唔……毕竟还欠了债，现在就开始有点紧张了呢。）", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.updateInfoQuest(39541, "NpcSpeech=30016051");
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

function stage1(mode, type, selection) {
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
            cm.curNodeEventEnd(true);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, true);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
            cm.inGameDirectionEvent_AskAnswerTime(500)
        } else {
            if (status === i++) {
                cm.onTeleport(0, 3, cm.getPlayer().getId(), -106, 212);
                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -20, 220)
            } else {
                if (status === i++) {
                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
                    cm.inGameDirectionEvent_AskAnswerTime(1200)
                } else {
                    if (status === i++) {
                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(1400)
                    } else {
                        if (status === i++) {
                            cm.sendNormalTalk_Bottom("#face3#欢迎光临，这里是解决师情报商店~！", 36, 3001652, false, true)
                        } else {
                            if (status === i++) {
                                cm.sendNormalTalk_Bottom("#face4#哦，你！？是不是那位拯救了村庄的神秘英雄！？", 36, 3001652, true, true)
                            } else {
                                if (status === i++) {
                                    cm.sendNormalTalk_Bottom("#face0#要想捉弄我，要么就给钱，我为什么会找来……你懂的吧？\r\n我是因为上次的钱而来。", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                                } else {
                                    if (status === i++) {
                                        cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（将有关鼠精的情报转交给卡琳，\r\n本是抱着向解决师们寻求帮助的念头……）", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                                    } else {
                                        if (status === i++) {
                                            cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（呼……是我太小瞧那个小鬼了，\r\n还说什么要想动用解决师，就要花钱什么的。）", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                                        } else {
                                            if (status === i++) {
                                                cm.sendNormalTalk_Bottom("#face7#这么大的事怎么可能会忘？\r\n啊，所以虎影你该支付的金额是……", 36, 3001652, true, true)
                                            } else {
                                                if (status === i++) {
                                                    cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（卡琳狮子大开口。\r\n唔……那几乎是我的全部财产，但我也无可奈何。）", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                                                } else {
                                                    if (status === i++) {
                                                        cm.sendNormalTalk_Bottom("#face0#喏，给！", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                                                    } else {
                                                        if (status === i++) {
                                                            cm.sendNormalTalk_Bottom("#face3#嘻嘻，钱都已经收到了~！", 36, 3001652, true, true)
                                                        } else {
                                                            if (status === i++) {
                                                                cm.sendNormalTalk_Bottom("#face4#虽说该收的都已经收下了才敞开来说的，\r\n其实即便没有雇佣虎影你，等时机到了你也会自己行动的。", 36, 3001652, true, true)
                                                            } else {
                                                                if (status === i++) {
                                                                    cm.sendNormalTalk_Bottom("#face7#什么！？", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                                                                } else {
                                                                    if (status === i++) {
                                                                        cm.sendNormalTalk_Bottom("#face4#危机时刻守卫村庄是身为解决师的义务，\r\n嘻嘻，我难道没有说过吗？", 36, 3001652, true, true)
                                                                    } else {
                                                                        if (status === i++) {
                                                                            cm.sendNormalTalk_Bottom("#face11#呼……那什么，我差不多也猜到了。", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                                                                        } else {
                                                                            if (status === i++) {
                                                                                cm.sendNormalTalk_Bottom("#face5#嗯！？", 36, 3001652, true, true)
                                                                            } else {
                                                                                if (status === i++) {
                                                                                    cm.sendNormalTalk_Bottom("#face10#但事已至此，已经迟了，\r\n要想能救一个是一个，就必须尽快做好缜密的准备工作，你说是不是？", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                                                                                } else {
                                                                                    if (status === i++) {
                                                                                        cm.sendNormalTalk_Bottom("#face5#嘻嘻……不愧是村里的英雄。", 36, 3001652, true, true)
                                                                                    } else {
                                                                                        if (status === i++) {
                                                                                            cm.sendNormalTalk_Bottom("#face5#你打算一直捉弄我吗！？", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                                                                                        } else {
                                                                                            if (status === i++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#这些就算了，说重点，我会把剩下的钱都给你，告诉我村庄外面的消息，\r\n啊，我很快就会离开这里了。", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                                                                                            } else {
                                                                                                if (status === i++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0#哦，钱已经顺利收到了，不过一想到熟客居然要离开了，\r\n卡琳我还是有些伤心呢，噗……", 36, 3001652, true, true)
                                                                                                } else {
                                                                                                    if (status === i++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face1#啊，有关外面的消息……稍等片刻，嘻嘻嘻！", 36, 3001652, true, true)
                                                                                                    } else {
                                                                                                        if (status === i++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（卡琳从抽屉里取出了几卷卷轴。）", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                                                                                                        } else {
                                                                                                            if (status === i++) {
                                                                                                                cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 2);
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                                                selectionLog[100] = -1
                                                                                                            } else {
                                                                                                                if (status === i++) {
                                                                                                                    cm.askMenu_Bottom("#face1#商店的消息就是这些，你还想了解什么吗？\r\n\r\n#b#L0#格兰蒂斯说明书#l　#L1#翼人的昨天与今天#l　#L2#次元传送口#l\r\n#L3#走向冒险岛世界#l #k#L4#我没什么想问的#l", 37, 3001652)
                                                                                                                } else {
                                                                                                                    if (selectionLog[100] < 0) {
                                                                                                                        selectionLog[100] = selection
                                                                                                                    }
                                                                                                                    var reactor = "action分支" + selectionLog[100];
                                                                                                                    eval(reactor)(mode, type, selection, i)
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

function action分支0(d, c, b, a) {
    if (status <= a++) {
        cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#格兰蒂斯是个有着繁星点点的世界。", 0)
    } else {
        if (status === a++) {
            cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#虽然存在多如繁星的少数种族，", 0)
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#主要种族如下所示。", 0)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#翼人，阿尼玛，诺巴。", 0)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#听说翼人是人口最多的种族。", 0)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#\r\n此地的超越者有三人。", 0)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#生命超越者吉伦·达勒摩尔。", 0)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#时间超越者，克罗尼卡。", 1)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#还有光明超越者艾欧娜。", 0)
                                    } else {
                                        if (status === a++) {
                                            cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#据说克罗尼卡在一个叫编年史圣殿的地方。", 0)
                                        } else {
                                            if (status === a++) {
                                                cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#因忤逆达勒摩尔的意志，惨遭幽静，并被夺走了力量。", 0)
                                            } else {
                                                if (status === a++) {
                                                    cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#表示没人知道艾欧娜的存在。", 0)
                                                } else {
                                                    if (status === a++) {
                                                        cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#\r\n\r\n　- 少年剑士K", 1);
                                                        status -= 15
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

function action分支1(d, c, b, a) {
    if (status <= a++) {
        cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#听闻在过去，高等翼人和平民翼人曾是一体的。", 0)
    } else {
        if (status === a++) {
            cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#内战爆发，便分成了两大势力。", 0)
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#听说他们不断在打仗。", 0)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#\r\n再，再然后！", 0)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#战争的残酷达到顶峰的某一天……", 0)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#高等翼人王子吉伦·达勒摩尔觉醒为了生命超越者。", 1)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#然后便以绝对性的力量灭亡了平民翼人。", 0)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#那些阿尼玛彻底销声匿迹了。", 0)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#现在只有万神殿的诺巴还在抵抗。", 0)
                                    } else {
                                        if (status === a++) {
                                            cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#\r\n\r\n　- 好奇心少女A", 1)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face2##fc0xFFbfbfbf#（吉伦·达勒摩尔啊……我曾在书中看到过，居然想要按照自己的想法来\r\n肆意掌控世界，我不喜欢。）", 36, 3001674 + cm.getPlayer().getGender(), false, true);
                                                status -= 13
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

function action分支2(d, c, b, a) {
    if (status <= a++) {
        cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#可以通往其他次元的门。", 0)
    } else {
        if (status === a++) {
            cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#据说超越者夺取了其他超越者的力量就会形成。", 0)
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#传闻格兰蒂斯也有几道门。", 0)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#最确定的地点就是万神殿的大神殿内部。", 0)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#和那个叫冒险岛世界的地方相连。", 0)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#\r\n\r\n　- 匿名青年A", 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（次元那一头啊……师父该不会也在那里吧？）", 36, 3001674 + cm.getPlayer().getGender(), false, true);
                                status -= 9
                            }
                        }
                    }
                }
            }
        }
    }
}

function action分支3(d, c, b, a) {
    if (status <= a++) {
        cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#在荒蛮终点站穿过门就是万神殿。", 0)
    } else {
        if (status === a++) {
            cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#那边的大神殿有门啊？", 0)
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#乘着它去了一个叫冒险岛世界的地方。", 0)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#我转了转，发现这地方还挺有趣的啊！", 0)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#也有传闻说，那个被封印的超越者正要苏醒过来。", 0)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#是叫黑魔法师来着……", 1)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#……你说你信不过？", 0)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#那就打一架，谁赢了就算谁对，怎么样？", 0)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#\r\n\r\n　-打手C", 1)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face5##fc0xFFbfbfbf#（看来要去那个叫荒蛮终点站的地方啊，说起来\r\n这家伙性子可真够差的啊？搞得我很想和这家伙比试比试。）", 36, 3001674 + cm.getPlayer().getGender(), false, true);
                                            status -= 12
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

function action分支4(d, c, b, a) {
    if (status <= a++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1600)
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("#face1#这样啊，那你得到需要的所有情报了吗？", 36, 3001652, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#嗯，多亏了你。", 36, 3001674 + cm.getPlayer().getGender(), true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（冒险岛世界啊……总觉得那里会很有趣呢，\r\n那接下来的目的地就定在那里。）", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（要想过去，就得去一个叫荒蛮终点站的地方吧？\r\n送人过去的那个家伙好像就在村里某个地方来着……）", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face5#你到底想什么呢，想这么久？", 36, 3001652, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#确定下一个目的地是哪儿。", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face5#哦……那是哪里！？", 36, 3001652, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#冒险岛世界，就定在那里了。", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face1#可真远呢，虽然我不知道你会经历什么，\r\n不过我会祝愿你万事顺意的。", 36, 3001652, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face1#毕竟解决师的幸福就等同于是我的快乐，嘻嘻嘻！", 36, 3001652, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face9#就算只是嘴上说说，我也要谢谢你，卡琳。那我走咯。", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face1#嘻嘻，再见哦。", 36, 3001652, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（既然已经忙完了手头的事，最后就去会一会俊秀法师吧，\r\n那个家伙现在应该在#r#m410000230##k#fc0xFFbfbfbf#吧。）", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(500)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.inGameDirectionEvent_ForcedFlip10(1, 330);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.inGameDirectionEvent_PushScaleInfo(1500, 0, 2000, 1500, 99, 220)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("#face6##fc0xFFbfbfbf#一旦盯上目标，就绝不会失手。", 36, 3001652, false, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("#face9##fc0xFFbfbfbf#无论何时，无论何地……", 36, 3001652, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1500, 2);
                                                                                            cm.inGameDirectionEvent_PushScaleInfo(3500, 0, 3000, 3500, 99, 168)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(300)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.warp(410000230, 0, false);
                                                                                                                    cm.setStandAloneMode(false);
                                                                                                                    cm.eventSKill(0);
                                                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                                                    cm.updateInfoQuest(39541, "NpcSpeech=30016051/30016042");
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

function stage2(d, c, b) {
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
            cm.sendNormalTalk_Bottom("#face0#欢迎光临，虎影解决师。", 36, 3001665, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face8#该不会是老鼠吧！？", 36, 3001674 + cm.getPlayer().getGender(), true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#这，这怎么可能，我丢手指甲和脚趾甲的时候一直很谨慎。", 36, 3001665, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face10#不过是玩笑……有必要这么认真回应吗！？", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#说起来，我之所以会过来……也算是来道别的，\r\n之前不是经历过很多事嘛？就这么直接一走了之，实在有些舍不得。", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#我只是对虎影解决师你心存感激，\r\n长路漫漫，希望你能平安无恙。", 36, 3001665, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#谢什么，多亏了你，才让我明白了一个重要的道理，\r\n是你让我懂得，内心产生迷惘的时候，我真正想要的答案是什么。", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face2#要是当初没有在那条后巷偶遇，我……\r\n搞不好会做出令自己后悔的决定。", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#不，相信你一定会向着正确的答案而去，\r\n就算你当初没有遇到我。", 36, 3001665, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face1#我能看到你的侠义心肠，\r\n你有着崇高的理想，愿意锄强扶弱。", 36, 3001665, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face7#哈哈……那什么，既然你这么说。", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#已经送了那么长一段路，是不是该就此打住了啊？", 36, 3001665, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face9#好吧，保重，法师。村子就交给你了。", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face0#希望这会是一趟意义深远的旅行。", 36, 3001665, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face1##fc0xFFbfbfbf#（呵呵……虎影你可要比自己想象的还要出色帅气，\r\n总有一天你会明白这些的。）", 36, 3001665, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.updateInfoQuest(39541, "NpcSpeech=30016051/30016042/30016293");
                                                                        cm.dispose();
                                                                        cm.warp(410000200, 5, false)
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
            cm.sendNormalTalk_Bottom("#face0#饕餮，出来！", 36, 3001674 + cm.getPlayer().getGender(), false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face1##fc0xFF25f1ca#是不是花费太长时间了！", 36, 3001651, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#该去的地方我都转过一圈了，现在也差不多该离开了，\r\n目的地就是次元那一头的那个叫冒险岛世界的地方。", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face1##fc0xFF25f1ca#那里当真有怪物吗！？", 36, 3001651, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face9#这就要你来找出来了，也要麻烦你咯，饕餮？", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face1##fc0xFF25f1ca#唔……放肆的家伙。", 36, 3001651, true, true)
                            } else {
                                if (status === a++) {
                                    cm.updateInfoQuest(39598, "10=h0;11=h0;31=h0;32=h0;33=h0;34=h1;15=h0;35=h0;16=h1;77=h0;78=h0;79=h0;02=h0;03=h1;80=h1;23=h0;81=h1;24=h0;05=h0;82=h0;25=h0;06=h0;84=h1;27=h0;08=h0;85=h0;28=h0;09=h1;29=h1");
                                    cm.forceCompleteQuest(39541);
                                    cm.dispose()
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};