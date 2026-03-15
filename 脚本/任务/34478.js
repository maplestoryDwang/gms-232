var status = -1;

function start() {
    action(1, 0, 0)
}

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.forceStartQuest(34478);
            cm.dispose()
        }
    }
}

function end(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.forceCompleteQuest(34478);
            cm.finishAchievement(1152);
            cm.forceStartQuest(34458, "");
            cm.sendNormalTalk("谢谢，多亏了你，森林终于恢复了原貌，作为谢礼，我要送你#b#i1712004:# #t1712004:##k！", 0, 3003320, false, true)
        } else {
            if (status === a++) {
                cm.gainItem(1712004, 1);
                cm.sendNormalTalk("不过等那些变得邪恶的精灵重新恢复原状，可能会稍微花点时间。", 0, 3003320, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("光之漩涡很快就会消失，你也很快就会离开这里了吧？穿越这片森林，去往更为艰险的地方……", 0, 3003320, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("……朋友。", 0, 3003320, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("呜呜，就算分隔两地，我也会想着你的。不管是听着和谐的森林之歌，还是在花瓣的照拂之下，我会一直在森林里想你的。", 0, 3003320, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("那就祝你一路顺风，再见！", 0, 3003320, true, true)
                            } else {
                                if (status === a++) {
                                    cm.getTopMsgFont("可以缩短之前神秘河地区的每日任务。", 3, 20, 10, 0);
                                    cm.dispose();
                                    cm.warp(450005000, 0)
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};