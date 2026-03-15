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
            cm.sendNormalTalk_Bottom("你好，伊利温。我们真是好久不见了。", 36, 3000003, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#这不是万神殿大神殿的克里昂祭司吗！？真是好久不见了！", 37, 3001354, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("冒险岛世界的生活怎么样？", 37, 3000003, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#最近过得还不错。不过，是出什么事了吗？", 37, 3001354, true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.askAcceptDecline_Bottom("其实是有件急事想拜托你。方便到万神殿跟我聊聊吗？\r\n#b（接受时将自动移动。）", 37, 3000003, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#没问题。稍后见吧。", 37, 3001354, false, true, 1)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(34840, "");
                                    cm.dispose();
                                    cm.warp(400000001, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/34840.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("谢谢你为我们奔波忙碌，真的太感谢了。", 36, 3000003, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("其实贝尔德大人就夺回赫里希安的问题，向冒险岛世界的联盟发出了委托，你知道这件事吗？", 37, 3000003, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#这消息我也听说了。可贝尔德大人好像对我们不太满意，没人敢贸然出头。", 37, 3001354, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("果然如此，不过伊利温，眼下我们诺巴正需要尽可能多的支援，如果这次你们能出手相助，届时包括贝尔德在内的诺巴都会对平民翼人刮目相看的。", 37, 3000003, true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("这或许是个洗脱污名的好机会，可以让外面的人知道，并不是平民翼人的猛烈攻击导致了达尔莫尔的觉醒。", 37, 3000003, true, true, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#那也说不定。", 37, 3001354, true, true, 1)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("此外，这次的任务是反抗达尔莫尔的部下麦格纳斯，这也是处理达尔莫尔计划的一环。我们再也不能对达尔莫尔伤害其他民族的事情袖手旁观了，不是吗？", 37, 3000003, true, true, 1)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#达尔莫尔……又在做这些伤天害理的事。", 37, 3001354, true, true, 1)
                                    } else {
                                        if (status === a++) {
                                            cm.askAcceptDecline_Bottom("伊利温大人极其需要帮助。你愿意帮帮我们吗？", 37, 3000003, 1)
                                        } else {
                                            if (status === a++) {
                                                cm.forceCompleteQuest(34840);
                                                cm.updateInfoQuest(34840, "exp=1");
                                                cm.gainExp(176560);
                                                cm.sendNormalTalk_Bottom("#face0#嗯，我愿意帮忙。需要我做些什么？", 37, 3001354, false, true, 1)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("谢谢，真的太谢谢了！我这就把情况转告贝尔德大人。你去万神殿见见贝尔德大人吧。", 37, 3000003, true, true, 1)
                                                } else {
                                                    if (status === a++) {
                                                        cm.OnStartNavigation(400000000, 1, "3000002", 0);
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
};