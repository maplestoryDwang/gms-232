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
            cm.sendNormalTalk_Bottom("#face0#据夏伊大人手下的城门士兵说，#b那位#k马上就要到了。", 36, 3003408, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#b(那位？)", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#可预订庆祝欢迎会的食材还没到。\r\n你能帮忙找找吗？", 36, 3003408, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("啊……我这就拿来。", 56, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#商店就在右侧。", 36, 3003408, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("(飞鱼再次搭话之前，继续收集情报吧。)", 56, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(34254, "");
                                    cm.OnStartNavigation(450006130, 1, "3003426", 0);
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

function end(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom("#face0#喂，大叔。你这个月的保护税交晚了啊！", 36, 3003418, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#这、这不是生意不好嘛……", 36, 3003413, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("有什么事吗？", 56, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(34254);
                        cm.updateInfoQuest(34271, "20=h1;30=h0;21=h0;31=h0;32=h0;23=h0;33=h0;34=h0;52=h0;35=h0;18=h1;36=h0;29=h1");
                        cm.sendNormalTalk_Bottom("有事吗？", 57, 0, false, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#你干什么，让开！", 37, 3003418, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#哦哦，夏伊来啦！快帮我教训那些混蛋！\r\n告诉你们！这可是大神殿的祭司！", 37, 3003413, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("(祭司？嗯……原来夏伊也是祭司啊。)", 57, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#啊啊！快逃！", 37, 3003418, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.updateInfoQuest(34271, "20=h1;30=h0;21=h0;31=h0;32=h0;23=h0;33=h0;34=h0;52=h0;35=h0;18=h0;36=h0;29=h1");
                                            cm.sendNormalTalk_Bottom("#face0#你们这些家伙！把东西给我放下再走啊！！", 37, 3003413, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.askYesNo_Bottom("哎呦喂，夏伊啊。\r\n拜托你帮忙把那些家伙带走的#b优质苹果#k找回来吧？", 36, 3003413)
                                            } else {
                                                if (status === a++) {
                                                    cm.forceStartQuest(34255, "");
                                                    cm.OnStartNavigation(450006140, 0, "", 0);
                                                    cm.sendNormalTalk_Bottom("#face0#谢谢你，夏伊。那些家伙应该在#b泼皮地盘#k。", 36, 3003413, false, true);
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