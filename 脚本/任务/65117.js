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
            cm.sendNormalTalk_Bottom("#face0#抱歉，这么急找你过来。", 37, 9130000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("信玄大人，有什么事吗？", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#你听说过“女皇希纳斯”吗？", 37, 9130000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("是的，听说她是冒险岛世界最受尊敬的人。她是这里很多人的精神支柱。", 57, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#收到了女皇希纳斯的邀请函。突然收到她的联系，让我感到非常惊讶。在这里依然战乱不断的情况下，我们最好是和他们保持友好的关系。听说他们也在为了正义而战，对吧？所以我希望你能以使者的身份去一趟。", 37, 9130000, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("是，信玄大人。我该去哪里呢？", 57, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.askAcceptDecline_Bottom("#face0#圣地。邀请函上施有移动咒术。接受后应该就能立即移动过去。", 37, 9130000)
                                } else {
                                    if (status === a++) {
                                        cm.forceStartQuest(65117, "");
                                        cm.updateInfoQuest(65117, "return=807000000");
                                        cm.dispose();
                                        cm.warp(913050204, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/65117.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.curNodeEventEnd(true);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, true);
            cm.sendNormalTalk_Bottom("#face0#欢迎你，来自异世界的武士。", 37, 1101000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#是不是有点太突然了？但愿没有太失礼。", 37, 1101000, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("怎么会呢？奉信玄大人之命来到此地，是在下的荣幸。", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#之所以请你到这里来，是有件重要的事。", 37, 1101000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#不久前，我发现黑暗力量开始重新侵蚀这个世界。很久以前，这个世界的英雄们封印了黑魔法师，但他的邪恶力量正再次威胁着这个世界。", 37, 1101000, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#我认为这个世界的所有人必须齐心协力来应对这场危机。黑魔法师的目标不仅仅是我们。吞噬掉这个世界之后，他一定又会开始觊觎其他世界。", 37, 1101000, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#现在你们所在的这个世界和你们想要回去的那个世界……都会陷入危险。", 37, 1101000, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#你愿意助我一臂之力吗？", 37, 1101000, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("说得很有道理。今后如果有用得着我们的地方，请随时跟我们联系。我们必定会前来相助。", 57, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#谢谢。我会等着那一天的到来。这下我们又多了一个可靠的同盟。\r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 36700 exp", 37, 1101000, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.playerMessage(-1, "获得联盟的意志技能！");
                                                    cm.playerMessage(5, "获得了<联盟的意志>技能。");
                                                    cm.gainExp(36700);
                                                    cm.teachSkill(40010190, 0, -1);
                                                    cm.teachSkill(40010190, 1, 0);
                                                    cm.forceCompleteQuest(65117);
                                                    cm.eventSKill(0);
                                                    cm.setInGameDirectionMode(false, true, false);
                                                    cm.gainItem(1142355, 1);
                                                    cm.dispose();
                                                    cm.warp(807000000, 0, false)
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