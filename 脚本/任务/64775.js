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
            cm.sendNormalTalk_Bottom("我们都升阶了～没有新的调查任务吗？要奖励丰厚的那种，嘿。", 37, 9401029, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("那种任务都已经完成了。", 37, 9401022, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("最近出现了一个远征队，执行任务的速度非常快。", 37, 9401022, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("比，比我们还快？怎么可能！是谁？他们在这里吗？", 37, 9401029, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("不在，是个年轻的女孩子……就她那个年纪而言很厉害了。", 37, 9401022, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#b年轻的女孩子……？", 57, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("她是不是盘着粉色头发？！", 37, 9401029, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("是短发，下一个远征队。", 37, 9401022, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("嘁", 37, 9401029, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("大家想的都是一样的吧？", 37, 9401029, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("也许是。", 37, 9401030, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#b嗯哼………… 远征队队长是随便什么人……都可以使唤的吗？", 57, 0, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("不是！当然不是。所以这才更让人怀疑，不是吗？这一定也是她的一个骗局。", 37, 9401029, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("队长，队长！我们在这里等一下吧！她要领取奖励总会来这里的吧？", 37, 9401029, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("没时间休息了。", 37, 9401030, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("我同意这一点，但这不是休息，是潜！伏！调！查！", 37, 9401029, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("如此可疑的事件，怎么就这样放过她！", 37, 9401029, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("#b那就等一会儿看看吧？", 57, 0, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("好的！", 37, 9401029, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.warp(867147006, 0, true);
                                                                                        cm.npc_LeaveField("oid=5351203");
                                                                                        cm.npc_LeaveField("oid=5351203");
                                                                                        cm.npc_LeaveField("oid=5351204");
                                                                                        cm.npc_LeaveField("oid=5351204");
                                                                                        cm.npc_LeaveField("oid=5351205");
                                                                                        cm.npc_LeaveField("oid=5351205");
                                                                                        cm.npc_LeaveField("oid=5351206");
                                                                                        cm.npc_LeaveField("oid=5351206");
                                                                                        cm.npc_LeaveField("oid=5351207");
                                                                                        cm.npc_LeaveField("oid=5351207");
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
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/64775.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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