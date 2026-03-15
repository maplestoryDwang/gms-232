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
            cm.sendNormalTalk("这么说来，你的名字是‘人类’了？呵呵，真是个有趣的名字。嗯？你说不是名字？那你叫什么？", 0, 3002005, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("我叫…………我叫…………(最早给无名无姓四处流浪的我起名字的是弗里德啊。现在的弗里德…………)", 2, 3002005, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("嗬，报个姓名怎么还磨磨蹭蹭的？莫非你有什么苦衷？好吧，看你的表情应该就是了。那么，我来给你起个好听的名字吧！你的毛发是黑色的，就叫玄氏吧？ 要么，你的身材高大，叫魁硕也不错。", 0, 3002005, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("不，我有名字…………", 2, 3002005, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("唉，什么呀！和人类一点都不相配。既然你是我捡回来的，名字也该由我来起。嗯…………嗯…………你说你来自那个只有一个月亮的地方，对吧？所以…………藏有一个月亮的地方。隐…………月…………嗯，隐月！隐月不错。意思是隐藏的月亮，怎么样？", 4, 3002000, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("哎呀，那个也太土了吧？黑仔和年糕之类的名字不更好吗……", 0, 3002005, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("我要叫隐月。", 2, 3002005, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("嗯？你是认真的？嗬，爱好还挺独特的。反正，既然你喜欢我也没办法…………好吧，那从现在开始你的名字就是隐月了。一开始可能会有些别扭，不过渐渐就会适应的。", 0, 3002005, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.askAcceptDecline("那么隐月，你要不要参观一下你今后生活的房子呢？因为那里已经很久都没有主人了，所以堆积了厚厚的尘埃。如果有什么不便的，不必见外，直接告诉我。", 0, 3002005)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("你沿着这条路往左径直走，就会看见一个摆着酱缸台的房子。那就是你以后住的地方，你仔细瞧瞧吧。因为房子的主人从不回来，所以比露宿街头强多了吧。所需物品我会为你准备的。", 0, 3002005, false, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.teachSkill(20050286, 0, -1);
                                                    cm.teachSkill(25001000, 0, -1);
                                                    cm.openUI(3);
                                                    cm.openUI(2);
                                                    cm.sendNormalTalk("（呼……）", 3, 3002005, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("（好像失去了所有的力量。虽然大不如前，但感觉还在。暂时应该没事了。）", 3, 3002005, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("（好了，现在到那个“房子”里去看看吧。）", 3, 3002005, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.updateInfoQuest(38002, "");
                                                                cm.forceStartQuest(38002, "");
                                                                cm.OnStartNavigation(410000000, 0, "in00", 38002);
                                                                cm.gainItem(3010766, 1);
                                                                cm.dispose();
                                                                cm.changeJob(2500)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/38002.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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