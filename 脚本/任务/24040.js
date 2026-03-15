var status = -1;

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.forceStartQuest(24040, "");
            cm.npc_LeaveField("oid=1328");
            cm.npc_LeaveField("oid=1329");
            cm.npc_LeaveField("oid=1330");
            cm.npc_LeaveField("oid=1337");
            cm.npc_LeaveField("oid=1338");
            cm.npc_LeaveField("oid=1320");
            cm.npc_LeaveField("oid=1324");
            cm.npc_LeaveField("oid=1325");
            cm.npc_LeaveField("oid=1326");
            cm.npc_LeaveField("oid=1327");
            cm.npc_LeaveField("oid=1332");
            cm.forceStartQuest(24093, "1");
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, true, true);
            cm.inGameDirectionEvent_头顶图片(["Effect/Direction5.img/effect/mercedesQuest/merBalloon/0", "oid=0"], [2000, 0, -100, 1, 0, 0, 0, 0]);
            cm.inGameDirectionEvent_AskAnswerTime(2000)
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_头顶图片(["Effect/Direction5.img/effect/mercedesQuest/merBalloon/1", "oid=0"], [2000, 0, -100, 1, 0, 0, 0, 0]);
                cm.inGameDirectionEvent_AskAnswerTime(2000)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("等等……好像有点奇怪？我的等级是多少？", 17, 0, false, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("10……级？！", 17, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.setInGameDirectionMode(false, true, false);
                            cm.sendNormalTalk("……到底是怎么回事？我的等级……怎么这么低？！只有10级？10级？不是100级，是10级？我还在做梦吗？掐一下自己的话，会醒来吗？啊！", 16, 0, false, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("哎呀！不是梦！这是黑魔法师的诅咒的影响吗？！……呃呃呃……可恶的黑魔法师！本来就没有任何好感，现在真的是不可原谅！\r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 500 exp", 16, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(24040, "");
                                    cm.forceCompleteQuest(24040);
                                    cm.effect_Direction("Effect/Direction5.img/mersedesQuest/Scene2", 0, 0, 0);
                                    cm.effect_OnUserEff("Effect/OnUserEff.img/questEffect/mercedes/q24040");
                                    cm.forceStartQuest(29952, "");
                                    cm.forceCompleteQuest(29952);
                                    cm.gainItem(1142336, 1);
                                    cm.sendNormalTalk("啊……啊……冷静，冷静下来，双弩精灵。着急也没用。冷静地把现在的情况整理一下。", 17, 0, false, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("1。黑魔法师的诅咒没有消失。从长老们和其他百姓们还困在冰里来看，这一点可以确认。", 17, 0, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("2。醒来的人好像只有我。虽然不知道是为什么……想到醒来之前感觉到的那个气息，也许是因为黑魔法师的封印变弱了？", 17, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("3。虽然想到外面去看看冒险岛世界的情况，但是不行。因为……我现在等级只有10级。这到底是怎么回事！我竟然只有10级！", 17, 0, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("黑魔法师的最后一个诅咒……那个诅咒的影响当然会很大，看来我是太低估了。而且也不知道过了多长时间，被困在冰里这么长时间，身体也便僵硬了。", 17, 0, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("受了伤，又受到诅咒，被困在冰里这么长时间，等级变低是当然的事情。当然的事情……怎么会这样！快让我恢复成原来的等级！我双弩精灵竟然只有10级！", 17, 0, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("……呼，呼……冷，冷静。不是尖叫的时候！先确认一下身体状态。真的只有10级了吗？该不会还有伤没好吧？手脚还能动吗？", 17, 0, true, true);
                                                            cm.dispose()
                                                        } else {
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

function end(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.forceStartQuest(24040, "");
            cm.npc_LeaveField("oid=1328");
            cm.npc_LeaveField("oid=1329");
            cm.npc_LeaveField("oid=1330");
            cm.npc_LeaveField("oid=1337");
            cm.npc_LeaveField("oid=1338");
            cm.npc_LeaveField("oid=1320");
            cm.npc_LeaveField("oid=1324");
            cm.npc_LeaveField("oid=1325");
            cm.npc_LeaveField("oid=1326");
            cm.npc_LeaveField("oid=1327");
            cm.npc_LeaveField("oid=1332");
            cm.forceStartQuest(24093, "1");
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, true, true);
            cm.inGameDirectionEvent_头顶图片(["Effect/Direction5.img/effect/mercedesQuest/merBalloon/0", "oid=0"], [2000, 0, -100, 1, 0, 0, 0, 0]);
            cm.inGameDirectionEvent_AskAnswerTime(2000)
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_头顶图片(["Effect/Direction5.img/effect/mercedesQuest/merBalloon/1", "oid=0"], [2000, 0, -100, 1, 0, 0, 0, 0]);
                cm.inGameDirectionEvent_AskAnswerTime(2000)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("等等……好像有点奇怪？我的等级是多少？", 17, 0, false, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("10……级？！", 17, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.setInGameDirectionMode(false, true, false);
                            cm.sendNormalTalk("……到底是怎么回事？我的等级……怎么这么低？！只有10级？10级？不是100级，是10级？我还在做梦吗？掐一下自己的话，会醒来吗？啊！", 16, 0, false, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("哎呀！不是梦！这是黑魔法师的诅咒的影响吗？！……呃呃呃……可恶的黑魔法师！本来就没有任何好感，现在真的是不可原谅！\r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 500 exp", 16, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(24040, "");
                                    cm.forceCompleteQuest(24040);
                                    cm.effect_Direction("Effect/Direction5.img/mersedesQuest/Scene2", 0, 0, 0);
                                    cm.effect_OnUserEff("Effect/OnUserEff.img/questEffect/mercedes/q24040");
                                    cm.forceStartQuest(29952, "");
                                    cm.forceCompleteQuest(29952);
                                    cm.gainItem(1142336, 1);
                                    cm.sendNormalTalk("啊……啊……冷静，冷静下来，双弩精灵。着急也没用。冷静地把现在的情况整理一下。", 17, 0, false, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("1。黑魔法师的诅咒没有消失。从长老们和其他百姓们还困在冰里来看，这一点可以确认。", 17, 0, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("2。醒来的人好像只有我。虽然不知道是为什么……想到醒来之前感觉到的那个气息，也许是因为黑魔法师的封印变弱了？", 17, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("3。虽然想到外面去看看冒险岛世界的情况，但是不行。因为……我现在等级只有10级。这到底是怎么回事！我竟然只有10级！", 17, 0, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("黑魔法师的最后一个诅咒……那个诅咒的影响当然会很大，看来我是太低估了。而且也不知道过了多长时间，被困在冰里这么长时间，身体也便僵硬了。", 17, 0, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("受了伤，又受到诅咒，被困在冰里这么长时间，等级变低是当然的事情。当然的事情……怎么会这样！快让我恢复成原来的等级！我双弩精灵竟然只有10级！", 17, 0, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("……呼，呼……冷，冷静。不是尖叫的时候！先确认一下身体状态。真的只有10级了吗？该不会还有伤没好吧？手脚还能动吗？", 17, 0, true, true);
                                                            cm.dispose()
                                                        } else {
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
};