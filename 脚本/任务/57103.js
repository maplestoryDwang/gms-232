var status = -1;

function start(d, c, b) {
    if (d == 1) {
        status++
    } else {
        status--
    }
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("#face0#我自己没有出什么问题吧？虽说是昏厥了一段时间……脑子里还是有些呆呆的。身上也多少受了一点伤。但值得庆幸的是，并不是什么重伤。", 36, 9130024, false, true)
        } else {
            if (status === a++) {
                cm.askAcceptDecline_Bottom("我是共同参加本能寺攻略战的尼子家家臣，我名为山中幸盛。在说明事情的来龙去脉之前，可不可以告诉我你的名字呢？", 56, 9130031)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(57103, "");
                    cm.dispose()
                }
            }
        }
    }
}

function end(d, c, b) {
    if (d == 1) {
        status++
    } else {
        status--
    }
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("我是松山家的家臣，姐崎朝信的儿子，名为姐崎剑斗。", 56, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face1#姐崎剑斗……真是久仰了。能见到鼎鼎有名的晓月流剑圣，实在是我的光荣。", 36, 9130024, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("阁下太客气了，能见到人称忠肝义胆的幸盛，才真是我的荣幸呢。如果知道你也参加了本能寺攻略战，我真应该早点过来和你打声招呼了。实在是太遗憾了。", 56, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#虽然还有很多话想说，但我现在还是先简单说明一下本能寺攻略战时候发生的问题，以及现在的情况吧。等你做好心理准备之后，再来和我进行对话吧。", 36, 9130024, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#我本以为你会为弄不清现在究竟是什么状况而感到混乱……还是说，你已经察觉到了呢？现在我们所处的地方和我们原本所在的日本并不相同。虽说看起来有些相似，但其实是完全不一样的两个地方。", 36, 9130024, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("看起来有些相似，但其实是完全不一样的两个地方？", 56, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#没错。说得再清楚一点吧，这里并不是日本。而是我们所不知道的完全陌生的世界。虽然不清楚究竟发生了什么事，但是在我们进行本能寺攻略战的途中，突然有一道耀眼的光柱从本堂方向射出。而后，我们就来到了这个完全未知的世界。而且，我们每个人所到达的时间点和位置都不一样。", 36, 9130024, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("未知的世界……？真的会有这样的事情发生吗？", 56, 0, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.askYesNo_Bottom("#face0#这个嘛，其实具体什么情况我也不太清楚。只不过，先我们一步到达这里的人聚在一起讨论的时候，得出了这样一个结果。先行到达的他们已经在这座丘陵之上建起了新的阵地。我们先一起到新的阵地去吧。", 36, 9130024)
                                        } else {
                                            if (status === a++) {
                                                cm.askAcceptDecline_Bottom("#face0#我们将新的据点称作枫叶山丘。这是一个飘散着鲜红枫叶的地方。好了，去营地看看吧。我来帮忙带路。", 36, 9130024)
                                            } else {
                                                if (status === a++) {
                                                    cm.forceCompleteQuest(57103);
                                                    cm.updateInfoQuest(15710, "lasttime=19/11/28/14/49");
                                                    cm.updateInfoQuest(25980, "normal=#0#;hard=#");
                                                    cm.forceStartQuest(57104, "");
                                                    cm.gainExp(1242);
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