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
            cm.sendNormalTalk_Bottom("#face0#我先来和你说明一下进行本能寺攻略战时候的状况。相信你应该已经知道，当时，联合军冲进本能寺的时候，里面已经是一片混乱。不知道织田军是在和什么人进行交战。", 37, 9130022, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#在神那你为了阻止仪式先走一步后，我们才知道，原来与织田军战斗的竟是明智光秀的大军。他背叛了信长。或许他是想甩开信长，让自己成为日本的霸主吧？我们并不清楚他到底是怎么想的……", 37, 9130022, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#在那之后，战斗愈演愈烈。不过幸好明智军已经谋反，我们的战况变得还算顺利。但是突然之间，本能寺本堂发出一道光柱，引发了这一次的异常情况。", 37, 9130022, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#在被光芒包裹的瞬间，仪式被中断了，等我们醒来之时，已经来到了这个陌生的地方……我们是从日本移动到“这边”来的。大家分别被移动到了不同的时间和地点。", 37, 9130022, true, true)
                    } else {
                        if (status === a++) {
                            cm.askAcceptDecline_Bottom("#face0#哦哦，这不是神那吗？神那你也顺利到达“这边”了啊。你一定还没有完全适应这边的环境吧。等你休息一下之后，我们再来接着说吧。", 37, 9130022)
                        } else {
                            if (status == a++) {
                                cm.forceStartQuest();
                                cm.dispose()
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
            cm.sendNormalTalk_Bottom("#face0#正如我刚才所言，我们每个人到达“这边”的时间和场合都各不相同。我是在几天前到达的。就在我搜索自己的主公谦信大人有没有到达“这边”时，遇到了神那你。", 37, 9130022, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#先一步到达这边的人已经在这座丘陵上方建起了新的营地。你不如先前往新的营地，然后再来思考接下来应该做什么吧？我来帮忙带路。", 37, 9130022, true, true)
            } else {
                if (status == a++) {
                    cm.forceCompleteQuest();
                    cm.forceStartQuest(11620, "0");
                    cm.updateInfoQuest(15710, "lasttime=19/11/27/15/37");
                    cm.sendNormalTalk_Bottom("异常变化，“这边”这个世界……这些听起来实在让人难以相信啊。", 57, 0, false, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#不过我也知道，再怎么觉得难以相信，这也是事实。这个丘陵周围的景象虽然与日本相似，但却不是日本。因为我熟知日本的所有地方。", 37, 9130081, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("看来，正是因为我强行中断了仪式，才引发了这次的异常情况吧？如果我能更快地控制住兰丸，并早一步让仪式中断……不说这个了，不知道师父和樱乃姬现在怎么样了。", 57, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#不必太过自责，你已经拼尽了全力。先按照那个叫兼续的小子所说，前往新的据点去探探情况吧。", 37, 9130081, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("师父……姬儿……你们一定要平安无事啊……", 57, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.OnStartNavigation(807040100, 1, "9130083", 0);
                                        cm.forceStartQuest(57402, "");
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
};