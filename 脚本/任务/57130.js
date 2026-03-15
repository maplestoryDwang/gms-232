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
            cm.sendNormalTalk_Bottom("正如我所担心的那样，与黑色之翼接触的男人，正是我们的敌人明智光秀。织田军准备与冒险岛的邪恶势力黑色之翼联手。也就是说，他们想得到的不仅仅是日本，就连冒险岛都成了他们的下一个目标……", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.askAcceptDecline_Bottom("这件事情绝对非同小可。因为这条消息不仅会给我们联合军带来巨大的冲击，对冒险岛的住民而言也是不小的威胁。弄得不好，日本那被迫屈服于信长淫威的悲惨一幕也很可能在这冒险岛中重新上演。我必须尽快将这件事情告诉给赫丽娜。", 57, 0)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(57130, "");
                    cm.OnStartNavigation(100000201, 1, "1012100", 0);
                    cm.dispose();
                    cm.warp(100000000, 1, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/57130.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.askYesNo_Bottom("#face0#剑斗，你回来了啊。有没有得到你想要知道的情报呢？", 37, 1012100)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("我去见了你在信中提到的黑色之翼的干部。果然不出所料，与黑色之翼接触的正是织田四天王之一、我的宿敌明智光秀。", 57, 0, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#为什么那个叫明智光秀的人会去找黑色之翼的干部啊……难道说……！？", 37, 1012100, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("织田军是企图支配这个世界，并进一步扩张自己的势力吧。", 57, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#你的意思是说，黑色之翼和织田军结为同盟了？", 37, 1012100, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("我所见到的黑色之翼干部不过是个中层管理人员。他说，已经把这件事报告给自己的主人，并等待主人做出决定。他也说了，并不知道自己的主人究竟会做出怎样的判断。现在只能希望他的主人能够拒绝这个提议。但是如果这两个邪恶势力真的联了手……", 57, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#虽然我不知道这个叫明智光秀究竟是个怎样的人，但是通过剑斗你的描述，这次的情况应该会对冒险岛造成非常严重的威胁，甚至可以堪比黑色之翼刚刚出现在冒险岛的时候。看来，我也不能继续对这件事坐视不管了。", 37, 1012100, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#剑斗，我听说在魔物暴动的时候，你帮忙出了不少力。作为冒险岛的一员，我也非常乐意来帮助你。", 37, 1012100, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#除了我之外，我还会把这件事告诉给冒险岛的全体成员。包括圣地的冒险骑士团，埃德尔斯坦的反抗者，还有在各地旅行的英雄好汉……我们必须要齐心协力，保护世界不受这两个邪恶组织的侵袭。", 37, 1012100, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("真是太谢谢你了。毕竟我刚来到这个世界不久，对很多事情都不了解，幸好能够得到赫丽娜你的帮助。我也要尽快返回位于枫叶山丘的联合军本阵，告诉大家我们已经得到了冒险岛成员们的帮助，可以一起对抗织田军和黑色之翼两大邪恶势力了。", 57, 0, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.forceCompleteQuest(57130);
                                                    cm.gainExp(7682);
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
};