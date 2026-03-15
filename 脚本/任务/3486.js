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
            cm.sendNormalTalk_Bottom("#face0#怎么样？是那里吗？", 36, 2052000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#估计得再往里走一点才能知道。", 36, 2052002, true, true)
            } else {
                if (status === a++) {
                    cm.askYesNo_Bottom("#face0#那我们也别闲着了，去消灭#b200个#k#b新白外星白鹰#k吧。", 36, 2052000)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#说不定会遭受前后夹击，提前消灭掉点敌人会比较好。", 36, 2052000, false, true)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(3486, "");
                            cm.dispose()
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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.sendNormalTalk_Bottom("#face0#啊，我是阿哲，怎么样？有什么问题吗？", 37, 2052000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face2#那个……嗯？哇！这是什么！\r\n通风口到处都是#b外星章鱼激光棒#k啊！", 37, 2052002, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#我们也是！像你们一样被缩小光线击中了！\r\n你们的想法不是明摆着呢嘛！所以我们就来通风口等着了！", 37, 2052043, true, true);
                    cm.spawnMobLimit(4230131, 1, -56, -242, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face2#这可不行！敌人实在是太多了！", 37, 2052002, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face3#那就先回来吧！", 37, 2052001, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#总不能放着敌人不管，就这么撤退吧！", 37, 2052005, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0##fs18#不要犹豫！不要退却！#b要争取！", 37, 2052005, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face1#错了，蠢货！", 37, 2052000, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#在火凤凰一战中，我可是击败过数千人！\r\n哇哈哈！上吧！外星章鱼激光棒！！", 37, 2052005, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face1#什么狗屁数千人！你那时候……！", 37, 2052002, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/punch", 100);
                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                    cm.spawnMobLimit(4230131, 1, -418, -242, 1);
                                                    cm.spawnMobLimit(4230131, 1, 684, -50, 1)
                                                } else {
                                                    if (status === a++) {
                                                        cm.fieldEffect_PlayFieldSound("Sound/Mob.img/4230133/Die", 200);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0#哦，气焰很嚣张嘛！挡不住了！", 37, 2052043, false, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face2#小俊哥哥！阿亮哥哥！请回答！", 37, 2052004, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#别担心，全都已经击退了，\r\n嗯~差不多得有#b三千人#k吧？", 37, 2052005, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face1#咳咳！应该是#r三十人#k吧！真是，莫名其妙地自讨苦吃。", 37, 2052002, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#face3#哎哟喂，真是的！还真吓到了啊。", 37, 2052003, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("#face3#别太担心了，为了生怕发生这种事情，才会派阿亮过来的嘛。\r\n你别看他那样，其实很厉害的。", 37, 2052000, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("#face3#你说别看他那样？", 37, 2052005, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("#face3#单从战斗力方面来说，确实是比较出类拔萃的，要不然早就被开掉了吧。", 37, 2052002, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("#face2#这怎么可能？！我简直难以想象。", 37, 2052004, true, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("#face1#你有必要这么吃惊吗？！", 37, 2052005, true, true)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0#闲话就到此为止，怎么样？是那里没错吗？", 37, 2052000, true, true)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face0#很可惜，并不是，那里和设计图的结构不一样。", 37, 2052002, true, true)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face0#嗯，那等阿亮和小俊到了就走吧。", 37, 2052000, true, true)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face0#好的~", 37, 2052003, true, true)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face0##fc0xFFAAAAAA#(嗯？阿琳这是怎么了？)#k", 37, 2052003, true, true)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face5##fc0xFFAAAAAA#(等一下，难道队员之中最没用的人是……我？)#k", 37, 2052004, true, true)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face5##fc0xFFAAAAAA#(啊，不会的，怎么会，我才刚刚被选中就要被开掉？)#k", 37, 2052004, true, true)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face5##fc0xFFAAAAAA#(既然还偷偷准备好了徽章……)#k", 37, 2052004, true, true)
                                                                                                                            } else {
                                                                                                                                if (status === a++) {
                                                                                                                                    cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                                                                    cm.sendNormalTalk_Bottom("#face2##fc0xFFAAAAAA#(咦？！)#k", 37, 2052004, true, true)
                                                                                                                                } else {
                                                                                                                                    if (status === a++) {
                                                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/thunder", 100);
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                                                                    } else {
                                                                                                                                        if (status === a++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("#face2##fc0xFFAAAAAA#(这里为什么会有#ho#的名字……？)#k", 37, 2052004, false, true)
                                                                                                                                        } else {
                                                                                                                                            if (status === a++) {
                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                            } else {
                                                                                                                                                if (status === a++) {
                                                                                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                    cm.fieldEffect_PlayBGM("Bgm47/DancesWithAliens", 0, 0);
                                                                                                                                                    cm.forceCompleteQuest(3486);
                                                                                                                                                    cm.gainExp(11004938);
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