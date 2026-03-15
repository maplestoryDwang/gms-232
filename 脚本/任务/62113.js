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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的开始脚本还没有修复哦。它的脚本位于： #b 脚本/任务/62113.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("你带来红豆粥和蒜了吗？", 37, 9310532, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(62113);
                cm.forceStartQuest(62114, "");
                cm.updateInfoQuest(62113, "chk=1");
                cm.addNumberForQuestInfo(62109, "yuyuanPoint", 2);
                cm.sendNormalTalk_Bottom("嗯……你还真把红豆粥和蒜带来了啊。很抱歉我怀疑了你。不过这测试非做不可。", 37, 9310532, true, true);
                cm.gainItem(4034643, -1);
                cm.gainItem(4034656, -1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("呼……我不知道你对上海有多少了解。", 37, 9310532, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("上海是著名的旅游城市！我听说上海有美丽的夜景和漂亮的街道。", 57, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("哎……那已经是过去的事情了。因为就在平凡的某一天，上海的上空突然出现了黑云。笼罩着天空的黑云让人无法分辨早晨和夜晚，那黑云甚至都没有散去的迹象。", 37, 9310532, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("事实上，一开始并没有什么大问题，这样反倒还更好了。上海是有名的夜都，这样一来旅客就更多了，不过……", 37, 9310532, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("不过？", 57, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("因为黑云的影响，已经有100多天没看到太阳了，上海还开始出现异常现象。很多动物都发疯似地乱蹦乱跳，街上的招牌和信号灯也像有生命似的开始动起来了。而且……", 37, 9310532, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("而且……还出现了僵尸。", 37, 9310532, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("僵尸？！？", 57, 0, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("没错，僵尸。就是会动的尸体。传说中的那种僵尸在上海出现了。", 37, 9310532, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("出现僵尸后，人们便纷纷往豫园避难。通往豫园的入口处有一座九曲桥，据说僵尸无法通过那座桥。", 37, 9310532, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("幸运的是，那个传说是真的。这座桥需要拐九个弯才能通过，那些僵尸当然无法做到吧。不过我们也不能放松警惕。根据传闻，有一些僵尸关节灵活、能学人说话……所以，需要对初来豫园的陌生人进行一下测试。", 37, 9310532, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("可你为什么要让我去搜集红豆粥和蒜呢？", 57, 0, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("啊 ，这是因为，僵尸讨厌红豆粥和蒜。不过，这也只是传说罢了……", 37, 9310532, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("…", 57, 0, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("啊！对了，既然你通过了测试，那我就给你一个证物吧。我现在就去找证物，你能不能稍后再跟我说话呢？", 37, 9310532, true, false)
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