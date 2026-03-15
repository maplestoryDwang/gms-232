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
            cm.sendNormalTalk_Bottom("#face0#我们到其他花朵开放的地方去看看吧。", 36, 3004732, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("但是佩皮和你为什么……刚才他们说什么来着？蒙奇怪和蘑菇狂……", 56, 0, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#本能？", 36, 3004732, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("嗯，没错，本能。虽然不知道本能到底是一种什么感觉，但刚才的蒙奇怪和蘑菇狂好像和你们截然不同……", 56, 0, true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#刚才我也说过了，最重要的是找到我的太阳。\r\n但是对蒙奇怪和蘑菇狂来说，制造混乱才是他们的本能……", 36, 3004732, true, true, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#为了找到太阳，我必须抑制住自己的本能。", 36, 3004732, true, true, 1)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#忍耐其实很容易做到。", 36, 3004732, true, true, 1)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#佩皮也一样。佩皮找到命运中的另一半并举办舞会的意志，强大到足以抑制住本能。", 36, 3004732, true, true, 1)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("......真的是因为舞会吗？", 56, 0, true, true, 1)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#他说舞会绝不允许捣乱。\r\n真的只是出于那个原因，他一直在努力地为舞会做准备。", 36, 3004732, true, true, 1)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#fc0xFFAAAAAA#（确实……皮埃尔也感觉像个舞会狂……）", 56, 0, true, true, 1)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#有什么问题吗？", 36, 3004732, true, true, 1)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("不，不，只是有点好奇。", 56, 0, true, true, 1)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face0#真是闲的。总之，蘑菇乐森林那边已经没有花了。必须到伊利亚德田野那边去看看……", 36, 3004732, true, true, 1)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.askAcceptDecline_Bottom("#face0#那里的感觉和这里又不一样。\r\n一起去看看吧。", 36, 3004732, 1)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#我和芒泰尔先走了！", 37, 3004732, false, true, 1)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.forceStartQuest(37710, "");
                                                                            cm.updateInfoQuest(37700, "00=h0;01=h0;02=h0;03=h0;04=h1;05=h1;26=h0;81=h0;36=h0;37=h0");
                                                                            cm.updateInfoQuest(37700, "00=h0;01=h0;02=h0;03=h0;04=h1;05=h0;26=h0;81=h0;36=h0;37=h0");
                                                                            cm.updateInfoQuest(37700, "00=h0;01=h0;02=h0;03=h0;04=h1;05=h0;06=h1;26=h0;81=h0;36=h0;37=h0");
                                                                            cm.updateInfoQuest(37700, "00=h0;01=h0;02=h0;03=h0;04=h1;05=h0;06=h1;07=h1;26=h0;81=h0;36=h0;37=h0");
                                                                            cm.updateInfoQuest(37711, "b1=1");
                                                                            cm.updateInfoQuest(37711, "b1=1;b2=1");
                                                                            cm.updateInfoQuest(37711, "b1=1;b2=1;b3=1");
                                                                            cm.updateInfoQuest(37711, "b1=1;b2=1;b3=1;b4=1");
                                                                            cm.updateInfoQuest(37711, "b1=1;b2=1;b3=1;b4=1;b5=1");
                                                                            cm.OnStartNavigation(450015110, 0, "west00", 37710);
                                                                            cm.npc_LeaveField("oid=53855");
                                                                            cm.npc_LeaveField("oid=53856");
                                                                            cm.npc_LeaveField("oid=53857");
                                                                            cm.npc_LeaveField("oid=53861");
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

function stage0(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/37710.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#这么快就跟上来了？也是，从村庄往旁边一直走就到了。", 36, 3004732, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#这里就是伊利亚德田野。怎么样？", 36, 3004732, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("怎么有……这么多巨大的动物……", 56, 0, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#很神奇吧？但是他们并不是真正活着的东西。", 36, 3004732, true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0##b只是看上去那样，和实际不同。", 36, 3004732, true, true, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#fc0xFFAAAAAA#（和实际不同……吗……）", 56, 0, true, true, 1)
                            } else {
                                if (status === a++) {
                                    cm.forceCompleteQuest(37710);
                                    cm.gainExp(11264558);
                                    cm.dispose()
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};