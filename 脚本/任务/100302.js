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
            cm.askMenu("\r\n荣耀特攻队永不止步。\r\n\r\n#L0# #b我想了解<荣耀特攻队阶位>相关内容。#k#l\r\n#L1# #b我想了解<荣耀特攻队阶位>升阶相关内容。#k#l\r\n#L2# #b我想了解<荣耀特攻队阶位>优惠相关内容。#k#l\r\n#L3# #b我想了解<荣耀特攻队之力>的情况。#k#l\r\n", 0, 3004201)
        } else {
            var reactor = "action分支" + selectionLog[1];
            eval(reactor)(mode, type, selection, i)
        }
    }
}

function action分支0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("\r\n#e<荣耀特攻队阶位>#n是联盟为荣耀特攻队队员赋予的身份阶级，完成的成就不同，获得的阶位也不同。", 0, 3004201, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk("\r\n联盟方面承诺，将根据阶位，为荣耀特攻队队员提供各项支援。", 0, 3004201, true, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("\r\n#e<荣耀特攻队阶位>#n\r\n\r\n#e - #b童子军#k #r（6阶）#k\r\n - #b军官#k #r（5阶）#k\r\n - #b守护者#k #r（4阶）#k\r\n - #b大师#k #r（3阶）#k\r\n - #b司令#k #r（2阶）#k\r\n - #b至尊#k #r（1阶）#k\r\n", 0, 3004201, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("\r\n#e提高<荣耀特攻队阶位>#n，需要消耗作为任务完成奖励发放的#b#e<荣耀币>#k#n。", 0, 3004201, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("\r\n你现在是我们荣耀特攻队的核心战斗力了，#h0#。期待你今后的活跃表现。", 0, 3004201, true, false)
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

function action分支1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("想要成长为一名出色的#e#b荣耀特攻队#k#n队员，就必须花时间积累足够的经验才行。", 0, 3004201, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk("当然，这件事对#e#h0##n你来说一定不难。", 0, 3004201, true, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("\r\n#r#e<荣耀特攻队升阶>允许日期#k\r\n\r\n- 军官：#b1月22日维护后#k\r\n- 守护者：#b2月5日维护后#k\r\n- 大师：#b2月19日上午7点后#k\r\n- 司令：#b3月4日维护后#k\r\n- 至尊：#b3月18日维护后#k#n", 0, 3004201, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("\r\n#r#e<荣耀特攻队升阶>所需荣耀币#k\r\n\r\n- 军官：#b300#k 荣耀币\r\n- 守护者：#b800#k 荣耀币\r\n- 大师：#b1，500#k 荣耀币\r\n- 司令：#b2，000#k 荣耀币\r\n- 至尊：#b3，000#k 荣耀币#n", 0, 3004201, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("\r\n#r#e<荣耀特攻队升阶>要求任务#k\r\n\r\n- 军官：完成#b[大世无界]本来面貌#k\r\n- 守护者：完成#b[Cernium]末端分叉的羽毛#k\r\n- 大师：完成#b[Cernium]保重，塞伦#k\r\n- 司令：完成#b[TheChosenOne]另一个天族#k\r\n- 至尊：#b[TheChosenOne]以夷制夷#k完成#n", 0, 3004201, true, true)
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

function action分支2(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("补给不足的情况下无法执行特殊任务。", 0, 3004201, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk("联盟将为#e#b荣耀特攻队#k#n提供各项支援。", 0, 3004201, true, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("\r\n#r#e发放<特别补给箱>#k\r\n\r\n\r\n#i2630690:# #t2630690:#\r\n#i2630691:# #t2630691:#\r\n#i2630692:# #t2630692:#\r\n#i2630693:# #t2630693:#\r\n#i2630694:# #t2630694:##n", 0, 3004201, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("\r\n#e#r更新<荣耀点数>每日数量上限#k\r\n\r\n- 童子军：#b10，000#k 荣耀点数\r\n- 军官：#b15，000#k荣耀点数\r\n- 守护者：#b20，000#k荣耀点数\r\n- 大师：#b25，000#k荣耀点数\r\n- 司令：#b35，000#k 荣耀点数\r\n- 至尊：#b50，000#k 荣耀点数#n", 0, 3004201, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("\r\n#r#e<联盟补给站>更新#k\r\n\r\n- 童子军：可以使用#b童子军#k 补给站\r\n- 军官：可以使用#b军官#k补给站 \r\n- 守护者：可以使用#b守护者#k 补给站\r\n- 大师：可以使用#b大师#k补给站\r\n- 司令：可以使用#b司令#k补给站\r\n- 至尊：#b至尊#k 补给站可以使用#n", 0, 3004201, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("\r\n#r#e<荣耀特攻队之力>更新#k\r\n\r\n- 军官：#b荣耀特攻队之力：军官#k\r\n- 守护者：#b荣耀特攻队之力：守护者#k\r\n- 大师：#b荣耀特攻队之力：大师#k\r\n- 司令：#b荣耀特攻队之力：司令#k\r\n- 至尊：#b荣耀特攻队之力：至尊#k\r\n\r\n#r※ 可在0转技能栏内查看详细效果#k", 0, 3004201, true, false)
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
}

function action分支3(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("#e#b荣耀特攻队之力#k#n是一种强大的力量，只有联盟特殊小组荣耀特攻队的队员才能获得。", 0, 3004201, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk("#e#b荣耀特攻队阶位#k#n提升后，#h0#将会获得与阶位相应的#e#b荣耀特攻队之力#k#n。", 0, 3004201, true, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("我相信你一定能将这股力量运用好。", 0, 3004201, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("\r\n#r#e<荣耀特攻队之力>#k\r\n\r\n#e[军官]#n\r\n#b#e- 攻击普通怪物时，伤害增加30%\r\n#k#n\r\n#e[守护者]#n\r\n#b#e- 攻击普通怪物时，伤害增加30%\r\n- 全属性增加100，最大HP增加5000#k#n", 0, 3004201, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("\r\n#r#e<荣耀特攻队之力>#k\r\n\r\n#e[大师]#n\r\n#b#e- 攻击普通怪物时，伤害增加30%\r\n- 全属性增加100，最大HP增加5000\r\n- 暴击率增加30%\r\n- 攻击力增加30，魔力增加30#k#n", 0, 3004201, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("\r\n#r#e<荣耀特攻队之力>#k\r\n\r\n#e[司令]#n\r\n#b#e- 攻击普通怪物时，伤害增加30%\r\n- 全属性增加100，最大HP增加5000\r\n- 暴击率增加30%\r\n- 攻击力增加30，魔力增加30\r\n- 攻击BOSS怪物时，伤害增加30%\r\n-无视怪物防御率增加30%#k#n", 0, 3004201, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("\r\n#r#e<荣耀特攻队之力>#k\r\n\r\n#e[至尊]#n\r\n#b#e- 攻击普通怪物时，伤害增加30%\r\n- 全属性增加100，最大HP增加5000\r\n- 暴击率增加30%\r\n- 攻击力增加30，魔力增加30\r\n- 攻击BOSS怪物时，伤害增加30%\r\n- 无视怪物防御率增加30%\r\n- 暴击伤害增加10%#k#n", 0, 3004201, true, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/100302.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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