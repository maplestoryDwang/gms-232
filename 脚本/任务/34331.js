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
            cm.dispose();
            cm.warp(450003770, 0, true)
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
            cm.setInGameDirectionMode(true, false, true);
            cm.sendNormalTalk_Bottom("现在真的都结束了吗？还是还没有结束？！！", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#虽然笼罩城市的梦境还没有消失，但好像告一段落了。", 37, 3003251, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("以后你打算怎么做？", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#梦就是梦，现实就是现实，虽然不是立刻，但梦境将会逐渐减弱。", 37, 3003251, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("可是，如果梦境消失，你也……  ", 57, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#天亮的时候，噩梦消散，这是不变的法则。", 37, 3003251, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#如果成功拯救了居民和艾尔达，\r\n我存在的意义也算是完成了，现在就算消失也没有关系。", 37, 3003251, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("…………", 57, 0, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#如果红色迷雾消散，你也会出发去完成你的使命吧。", 37, 3003251, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#这场旅途肯定充满艰辛，希望你能平安无事。", 37, 3003251, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.forceCompleteQuest(34331);
                                                    cm.finishAchievement(1151);
                                                    cm.setInGameDirectionMode(false, true, false);
                                                    cm.getTopMsgFont("可以缩短之前神秘河地区的每日任务。", 3, 20, 10, 0);
                                                    cm.forceStartQuest(34450, "");
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