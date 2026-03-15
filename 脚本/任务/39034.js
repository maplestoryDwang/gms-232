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
            cm.sendNormalTalk_Bottom("#face0#那里。", 37, 3003309, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("？", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.askAcceptDecline_Bottom("#face0#请去#b精灵之树所在地#k。我有话要对你说。\r\n#r（同意后立即移动。）#k", 36, 3003309)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(39034, "");
                        cm.dispose();
                        cm.warp(450005000, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39034.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#很高兴我们又见面了。异邦人。欢迎你。", 37, 3003309, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("（看你这么热情地欢迎我，应该是有什么事要委托我吧。）", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#我忘记是从哪听来的了，是不是有一句话叫能者多劳？\r\n这句话正适合用来形容你。", 37, 3003309, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("现在有一件非常重要的事情需要你去做。哈哈……", 57, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#就算是这样，不管是过去对你有所误会，还是现在让你担负如此重大的责任，我都感觉很抱歉。", 37, 3003309, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#所以我想拜托你一件非常小的事情，可以吗？\r\n作为#b报酬#k，我会将我们在森林附近收集到的闪闪发光的东西给你。", 37, 3003309, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("有什么事吗？", 57, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#，为了大家的幸福，希望你可以与我们妖精一起携手为恢复森林的和平而努力。\r\n就是我之前所说的，还要继续麻烦你。拜托你了。", 37, 3003309, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#请帮忙消灭森林周边残暴的精灵。这样做也是为了大家好。", 37, 3003309, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#我每天会让你做#b三件#k事。\r\n你如果想为森林做其他事就告诉我。还有很多事需要有人来做。", 37, 3003309, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#那我就当你接受了。准备好了就告诉我。", 37, 3003309, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.forceCompleteQuest(39034);
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