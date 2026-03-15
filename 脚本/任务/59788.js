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
            cm.sendNext_Bottom("#h #,是我呀,杰特。\r\n你恢复所有记忆了吧 ? ", 9400034)
        } else {
            if (status == a++) {
                cm.sendNextS_Bottom("杰特！")
            } else {
                if (status == a++) {
                    cm.sendNext_Bottom("你应该也意识到了,我们丧失记忆的这段时间, APORD首脑部那帮家伙已经大都逃走了。", 9400034)
                } else {
                    if (status == a++) {
                        cm.sendNextS_Bottom("…… ")
                    } else {
                        if (status == a++) {
                            cm.sendNext_Bottom("但我们控制了那些家伙丢下的设施。他们的舰船。", 9400034)
                        } else {
                            if (status == a++) {
                                cm.sendNext_Bottom("而且里面的设施还在继续运转。\r\n现在有必要进行一下调查, 看看里面是否关着其他灵物或存在更大威胁。还有必要消灭那些残党。", 9400034)
                            } else {
                                if (status == a++) {
                                    cm.askYesNo_Bottom("我现在就把坐标发给你,你能帮忙调查吗?\r\n现在立刻移动到被A0R遗弃的第6研究船上去吗 ? )", 9400034)
                                } else {
                                    if (status == a++) {
                                        cm.forceStartQuest();
                                        cm.updateInfoQuest(59744, "map=" + cm.getMapId());
                                        cm.warp(867110000, 0);
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
            cm.sendNext_Bottom("超空间魔方系统正在启动……", 9400057)
        } else {
            if (status == a++) {
                cm.sendNextS_Bottom("……！")
            } else {
                if (status == a++) {
                    cm.sendNext_Bottom("你好,欢迎你访问银河研究合作机关 APORD的第6号研究船。", 9400057)
                } else {
                    if (status == a++) {
                        cm.sendNext_Bottom("本舰用于军用兵器的开发和生产。通过超空间魔方系统的管理,以保障研究员和样品的安全。", 9400057)
                    } else {
                        if (status == a++) {
                            cm.sendNextS_Bottom("看来这些设施还在运作啊。\r\n超空间魔方系统是什么东西？")
                        } else {
                            if (status == a++) {
                                cm.sendNext_Bottom("超空间魔方是由我们自主开发的一种用于保护研究船的研究记录和研究员的系统。利用物理和时空的概念,把研究船内部的各个隔间进行分离,然后进行管理的#b次元光谱系统#k。", 9400057)
                            } else {
                                if (status == a++) {
                                    cm.sendNext_Bottom("只需要通过各个隔间的控制装置,就能在隔间之间移动,因此请听从硏究船内部的乘务员的指示。", 9400057)
                                } else {
                                    if (status == a++) {
                                        cm.sendNext_Bottom("参观研究船时,仅限16人的团体进入。并且,为了不影响研究活动,参观限时3分钟。", 9400057)
                                    } else {
                                        if (status == a++) {
                                            cm.sendNext_Bottom("进行参观的各位访客都将可以获得一份小小的纪念品,请在退场时不要忘了领取。", 9400057)
                                        } else {
                                            if (status == a++) {
                                                cm.sendNext_Bottom("最后,由于目前负责人不在,一切有关研究产物的合作咨询和研究经费支持等事项的商谈都将无法进行。敬请谅解。", 9400057)
                                            } else {
                                                if (status == a++) {
                                                    cm.sendNextS_Bottom("这好像说的就是逃跑的舰长啊。\r\n总之,APORD剩余的残党应该还在继续操作着各种设施。\r\n我们亲自进去调查一下吧!")
                                                } else {
                                                    if (status == a++) {
                                                        cm.sendNextS_Bottom("嗯?有什么东西掉到了地板上。似乎是研究日志……?")
                                                    } else {
                                                        if (status == a++) {
                                                            cm.gainItem(2435495, 1);
                                                            cm.forceCompleteQuest();
                                                            cm.updateInfoQuest(63864, "expCountEv=0");
                                                            cm.updateInfoQuest(63863, "r=0");
                                                            cm.updateInfoQuest(59793, "count=0");
                                                            cm.updateInfoQuest(59792, "killCount=0;expCount=0;score=0");
                                                            cm.updateInfoQuest(59791, "NewbieBonus=0;bCount=0;nGoalType=0;nMobType=0;nElite=0;clear=0");
                                                            cm.updateInfoQuest(59790, "stComplete=0;shop=0;ClearCount=0;enterLv=0;lastDate=19/10/13");
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
};