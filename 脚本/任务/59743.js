var status = -1;
var selectionLog = [];

function start(e, c, b) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var d = "这是这段时间收集的笔记本页片。好像是侦探团的搜查日志。";
            if (cm.getQuestStatus(59703 - 1) == 2) {
                d += "\r\n#L1#第1页 - 嘟嘟失踪事件#l"
            }
            if (cm.getQuestStatus(59705 - 1) == 2) {
                d += "\r\n#L2#第2页 - 作战开始#l"
            }
            if (cm.getQuestStatus(59707 - 1) == 2) {
                d += "\r\n#L3#第3页 - 调查怪物#l"
            }
            if (cm.getQuestStatus(59709 - 1) == 2) {
                d += "\r\n#L4#第4页 - 丢失的动物#l"
            }
            if (cm.getQuestStatus(59713 - 1) == 2) {
                d += "\r\n#L5#第5页 - 新同伴！#l"
            }
            if (cm.getQuestStatus(59715 - 1) == 2) {
                d += "\r\n#L6#第6页 - 前往勇士部落#l"
            }
            if (cm.getQuestStatus(59717 - 1) == 2) {
                d += "\r\n#L7#第7页 - 赏金猎人#l"
            }
            if (cm.getQuestStatus(59720 - 1) == 2) {
                d += "\r\n#L8#第8页 - 寻找APORD#l"
            }
            if (cm.getQuestStatus(59722 - 1) == 2) {
                d += "\r\n#L9#第9页 - 东方勇士#l"
            }
            if (cm.getQuestStatus(59725 - 1) == 2) {
                d += "\r\n#L10#第10页 - 组成橡果侦探团！#l"
            }
            if (cm.getQuestStatus(59727 - 1) == 2) {
                d += "\r\n#L11#第11页 - APORD的秘密基地#l"
            }
            if (cm.getQuestStatus(59752 - 1) == 2) {
                d += "\r\n#L12#第12页 - 变样的嘟嘟#l"
            }
            if (cm.getQuestStatus(59753 - 1) == 2) {
                d += "\r\n#L13#第13页 - 变样的奈奈#l"
            }
            if (cm.getQuestStatus(59754 - 1) == 2) {
                d += "\r\n#L14#第14页 - 悲伤离别#l"
            }
            if (cm.getQuestStatus(59755 - 1) == 2) {
                d += "\r\n#L15#第15页 - 自由#l"
            }
            if (cm.getQuestStatus(59756 - 1) == 2) {
                d += "\r\n#L16#第16页 - 事件完结#l";
                d += "\r\n#L99##r收起笔记本#l"
            }
            cm.askMenu(d, 9400031)
        } else {
            if (status > 0) {
                if (selectionLog[1] == 1) {
                    start1(e, c, b, a)
                } else {
                    if (selectionLog[1] == 2) {
                        start2(e, c, b, a)
                    } else {
                        if (selectionLog[1] == 3) {
                            start3(e, c, b, a)
                        } else {
                            if (selectionLog[1] == 4) {
                                start4(e, c, b, a)
                            } else {
                                if (selectionLog[1] == 5) {
                                    start5(e, c, b, a)
                                } else {
                                    if (selectionLog[1] == 6) {
                                        start6(e, c, b, a)
                                    } else {
                                        if (selectionLog[1] == 7) {
                                            start7(e, c, b, a)
                                        } else {
                                            if (selectionLog[1] == 8) {
                                                start8(e, c, b, a)
                                            } else {
                                                if (selectionLog[1] == 9) {
                                                    start9(e, c, b, a)
                                                } else {
                                                    if (selectionLog[1] == 10) {
                                                        start10(e, c, b, a)
                                                    } else {
                                                        if (selectionLog[1] == 11) {
                                                            start11(e, c, b, a)
                                                        } else {
                                                            if (selectionLog[1] == 12) {
                                                                start12(e, c, b, a)
                                                            } else {
                                                                if (selectionLog[1] == 13) {
                                                                    start13(e, c, b, a)
                                                                } else {
                                                                    if (selectionLog[1] == 14) {
                                                                        start14(e, c, b, a)
                                                                    } else {
                                                                        if (selectionLog[1] == 15) {
                                                                            start15(e, c, b, a)
                                                                        } else {
                                                                            if (selectionLog[1] == 16) {
                                                                                start16(e, c, b, a)
                                                                            } else {
                                                                                if (selectionLog[1] == 99) {
                                                                                    start99(e, c, b, a)
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

function start1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNextNoESC("嘟嘟消失了！", 9400031)
    } else {
        if (status === a++) {
            cm.sendNextPrevNoESC("村民们说有坏人把嘟嘟绑架了！", 9400031)
        } else {
            if (status === a++) {
                cm.sendNextPrevNoESC("既然有人看见嘟嘟被带去了冒险岛世界……现在就该我出马了！哈哈！", 9400031)
            } else {
                cm.dispose()
            }
        }
    }
}

function start2(d, c, b, a) {
    if (status <= a++) {
        cm.sendNextNoESC("贴完传单已经过了一段时间，但是我没有收到任何情报啊……", 9400031)
    } else {
        if (status === a++) {
            cm.sendNextPrevNoESC("不能灰心！在这段时间里，嘟嘟……！", 9400031)
        } else {
            if (status === a++) {
                cm.sendNextPrevNoESC("既然如此……进入第2阶段！如果没有情报，那就得实地调查！", 9400031)
            } else {
                if (status === a++) {
                    cm.sendNextPrevNoESC("我得去村子里面到处搜查一下！", 9400031)
                } else {
                    cm.dispose()
                }
            }
        }
    }
}

function start3(d, c, b, a) {
    if (status <= a++) {
        cm.sendNextNoESC("按照长老的话调查了怪物……虽然它们全部都很凶残，但是有几个特别奇怪的家伙。", 9400031)
    } else {
        if (status === a++) {
            cm.sendNextPrevNoESC("我仔细查看了那些倒下的家伙，在它们体内有着微小的宝石碎片，难道与这个有关？", 9400031)
        } else {
            if (status === a++) {
                cm.sendNextPrevNoESC("希望嘟嘟能没事就好……！", 9400031)
            } else {
                if (status === a++) {
                    cm.sendNextPrevNoESC("我得按照长老所说，快点去向明明女士打听消息！", 9400031)
                } else {
                    cm.dispose()
                }
            }
        }
    }
}

function start4(d, c, b, a) {
    if (status <= a++) {
        cm.sendNextNoESC("这是大新闻啊！真是大新闻！", 9400031)
    } else {
        if (status === a++) {
            cm.sendNextPrevNoESC("根据明明女士的情报……有人在勇士部落贩卖珍稀动物！", 9400031)
        } else {
            if (status === a++) {
                cm.sendNextPrevNoESC("他应该不会要把我们的嘟嘟卖了吧，呜呜……", 9400031)
            } else {
                if (status === a++) {
                    cm.sendNextPrevNoESC("而且，在射手村有人像我一样丢了乌龟！", 9400031)
                } else {
                    if (status === a++) {
                        cm.sendNextPrevNoESC("既然玛亚知道，那我就去找她吧。", 9400031)
                    } else {
                        cm.dispose()
                    }
                }
            }
        }
    }
}

function start5(d, c, b, a) {
    if (status <= a++) {
        cm.sendNextNoESC("同伴！新的同伴就是侦探团所需要的！", 9400031)
    } else {
        if (status === a++) {
            cm.sendNextPrevNoESC("我遇到了叫做代号剑斗和代号神那的帅气同伴。", 9400031)
        } else {
            if (status === a++) {
                cm.sendNextPrevNoESC("剑斗和神那弄丢了乌龟朋友奈奈……我们得快点找到它。", 9400031)
            } else {
                if (status === a++) {
                    cm.sendNextPrevNoESC("说不定嘟嘟也会和它在一起呢？！", 9400031)
                } else {
                    if (status === a++) {
                        cm.sendNextPrevNoESC("但是……我们现在应该从什么开始呢……？问问神那吧！", 9400031)
                    } else {
                        cm.dispose()
                    }
                }
            }
        }
    }
}

function start6(d, c, b, a) {
    if (status <= a++) {
        cm.sendNextNoESC("找到了，找到了！奇怪的动物商人就在勇士部落的线索！", 9400031)
    } else {
        if (status === a++) {
            cm.sendNextPrevNoESC("代号神那真是个帅气的同伴啊。", 9400031)
        } else {
            if (status === a++) {
                cm.sendNextPrevNoESC("如果他真的把我的嘟嘟和奈奈卖了，那我一定要好好教训那个人！", 9400031)
            } else {
                cm.dispose()
            }
        }
    }
}

function start7(d, c, b, a) {
    if (status <= a++) {
        cm.sendNextNoESC("赏金猎人！虽然很帅……但是也太突然了！", 9400031)
    } else {
        if (status === a++) {
            cm.sendNextPrevNoESC("我们本来是来找贩卖珍稀动物的人……这可怎么办呢？", 9400031)
        } else {
            if (status === a++) {
                cm.sendNextPrevNoESC("叫做代号杰特的这个赏金猎人会成为我们的同伴吗？！", 9400031)
            } else {
                if (status === a++) {
                    cm.sendNextPrevNoESC("如果是这样那就好了！那就真是太帅了！", 9400031)
                } else {
                    cm.dispose()
                }
            }
        }
    }
}

function start8(d, c, b, a) {
    if (status <= a++) {
        cm.sendNextNoESC("终于得知了偷窃动物的组织的真相！看来就快要找到嘟嘟了。", 9400031)
    } else {
        if (status === a++) {
            cm.sendNextPrevNoESC("叫APORD的坏家伙们……！", 9400031)
        } else {
            if (status === a++) {
                cm.sendNextPrevNoESC("根据代号杰特的情报员提供的消息，我们现在应该去魔法密林。", 9400031)
            } else {
                if (status === a++) {
                    cm.sendNextPrevNoESC("有这么多可靠的同伴，我真是太开心了，嘿嘿！", 9400031)
                } else {
                    cm.dispose()
                }
            }
        }
    }
}

function start9(d, c, b, a) {
    if (status <= a++) {
        cm.sendNextNoESC("呀嚯！我们终于又找到了其他同伴！侦探团的乐趣就在于聚集同伴啊？！", 9400031)
    } else {
        if (status === a++) {
            cm.sendNextPrevNoESC("我们在魔法密林遇到了叫做陈的帅气同伴。", 9400031)
        } else {
            if (status === a++) {
                cm.sendNextPrevNoESC("但是，代号陈说自己重要的朋友，叫做灵灵的老虎似乎很久之前就被APORD抢走了……", 9400031)
            } else {
                if (status === a++) {
                    cm.sendNextPrevNoESC("真是太让人伤心了……我们一定要全力帮助他！", 9400031)
                } else {
                    if (status === a++) {
                        cm.sendNextPrevNoESC("有这么多可靠的同伴，我真是太开心了，嘿嘿！", 9400031)
                    } else {
                        cm.dispose()
                    }
                }
            }
        }
    }
}

function start10(d, c, b, a) {
    if (status <= a++) {
        cm.sendNextNoESC("橡果侦探团!", 9400031)
    } else {
        if (status === a++) {
            cm.sendNextPrevNoESC("代号剑斗和杰特虽然似乎不是很满意，不过我很喜欢！", 9400031)
        } else {
            if (status === a++) {
                cm.sendNextPrevNoESC("而且橡果真的很好吃，嘿嘿。", 9400031)
            } else {
                if (status === a++) {
                    cm.sendNextPrevNoESC("现在真的要去对付APORD了！跟着动物的毛发走吧！", 9400031)
                } else {
                    cm.dispose()
                }
            }
        }
    }
}

function start11(d, c, b, a) {
    if (status <= a++) {
        cm.sendNextNoESC("我们找到APORD的秘密基地了！就是他们的宇宙船！", 9400031)
    } else {
        if (status === a++) {
            cm.sendNextPrevNoESC("居然躲得这么严实……如果不是我们橡果侦探团……", 9400031)
        } else {
            if (status === a++) {
                cm.sendNextPrevNoESC("他们就会永远消失在宇宙中，再也找不回来了……！", 9400031)
            } else {
                if (status === a++) {
                    cm.sendNextPrevNoESC("嘟嘟、奈奈、灵灵……！我们得快点找到我们的朋友！", 9400031)
                } else {
                    cm.dispose()
                }
            }
        }
    }
}

function start12(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("被奇怪的宝石操纵的嘟嘟……该有多害怕，多痛苦啊！", 5, 9400031, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk("我们橡果侦探团能够合力让嘟嘟恢复了原状，真是太好了。", 5, 9400031, true, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("剑斗和神那的朋友奈奈是不是也变成了那样……？", 5, 9400031, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("我们得快点找到奈奈！", 5, 9400031, true, true)
                } else {
                    cm.dispose()
                }
            }
        }
    }
}

function start13(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("我们找到和嘟嘟一样被宝石操纵的奈奈了！", 5, 9400031, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk("虽然要伤害朋友，这让人心痛……", 5, 9400031, true, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("但是我们这是为了让它恢复，大家都能理解吧？！", 5, 9400031, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("我们能找到陈的朋友灵灵吗？已经过去了很久，灵灵会发生什么事呢……", 5, 9400031, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("请你一定要平安无事啊，灵灵……！不仅是陈，我们也在一起祈祷……！", 5, 9400031, true, true)
                    } else {
                        cm.dispose()
                    }
                }
            }
        }
    }
}

function start14(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("陈……失去了重要的朋友，非常伤心……", 5, 9400031, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk("灵灵在痛苦又孤独的时候，肯定希望能有谁来拯救自己吧……", 5, 9400031, true, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("居然绑架无辜的动物，干出这么残忍的事情……！", 5, 9400031, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("APORD……我们橡果侦探团绝对不会放过你们！", 5, 9400031, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("我们要把之前抓住的家伙们全部交给宇宙警察！", 5, 9400031, true, true)
                    } else {
                        cm.dispose()
                    }
                }
            }
        }
    }
}

function start15(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("我们把APORD绑架的动物全都放了出来！", 5, 9400031, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk("现在大家都能回到家人和朋友的身边，重新过上幸福的生活了吧？", 5, 9400031, true, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("虽然这段旅程又累又可怕……但是因为有着可靠的伙伴，我才能战胜重重困难！", 5, 9400031, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("橡子侦探团……今后我们会怎么样呢？！", 5, 9400031, true, true)
                } else {
                    if (status === a++) {
                        cm.dispose()
                    }
                }
            }
        }
    }
}

function start16(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("我们把抓住的APORD那些家伙都交给了杰特的同伴！", 5, 9400031, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk("对柔弱的动物做出残忍行为的家伙……全部都关进监狱吧！哼！", 5, 9400031, true, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("不过，他们究竟为什么要绑架那些动物呢？", 5, 9400031, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("而且，这可怕的宇宙飞船队长又是谁？！", 5, 9400031, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("有许多APORD团员藏在宇宙飞船内，已经逃跑了！", 5, 9400031, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("我们橡果侦探团的旅程已经结束了，但是作为勇士，我们的任务还没完！", 5, 9400031, true, false)
                        } else {
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
}

function start99(d, c, b, a) {
    if (status <= a++) {
        cm.askYesNoS_Bottom("#b真的要收起笔记本吗？收起来的话，以后就不再查看了。")
    } else {
        if (status === a++) {
            cm.forceCompleteQuest();
            cm.dispose()
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
            cm.forceCompleteQuest();
            cm.dispose()
        }
    }
};