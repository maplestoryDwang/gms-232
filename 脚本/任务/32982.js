var status = -1;

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("嗯？但是这里……", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#没错。就是你经常#b偷窥我的地方#k。", 37, 2560003, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("嗯，没错……", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("！！！呃呃呃呃？！！我，我只是……迎月花！过来看那个的！", 57, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face5#你这家伙还真好玩！我不就是逗逗你嘛。", 37, 2560003, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("我说的是真的……", 57, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#好吧，先去消灭影子怪物吧。必须先完成任务。", 37, 2560003, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("影子怪物？！！我？！", 57, 0, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#不要害怕。你足够强。\r\n我都不理解你为什么会加入医务队。", 37, 2560003, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("嗯？是……是吗？（怎么回事？感觉好像得到了认可……）", 57, 0, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("（不知道悠闲地待在这里有没有关系。）", 57, 0, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face4#干嘛还不走？", 37, 2560003, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("喝，喝点中和剂……（咕嘟咕嘟）", 57, 0, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("（嗯？味道……怎么这样？）", 57, 0, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.forceStartQuest(32982, "");
                                                                    cm.OnStartNavigation(307000230, 0, "hunt00", 0);
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

function end(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("狩猎结束了。", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#你的表情怎么这么奇怪？", 37, 2560003, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("嗯？那，那个……剩下的影子中和剂……变成了清水。", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face16#嗯……果然是因为这个啊。我说你为什么和其他人不一样。", 37, 2560003, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("嗯？", 57, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face16#迎月果。那东西让中和剂的成分失效了。", 37, 2560003, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("那是什么意思？", 57, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#跟我来。我想带你去一个地方。", 37, 2560003, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.updateInfoQuest(32982, "exp=1");
                                            cm.gainExp(2462700);
                                            cm.forceCompleteQuest(32982);
                                            cm.updateInfoQuest(32999, "10=h0;01=h0;02=h0;20=h0;11=h0;21=h0;12=h01;03=h0;13=h0;04=h0;14=h1;05=h0;15=h0;06=h0;16=h0;07=h0;08=h1;17=h0;18=h0;19=h0");
                                            cm.updateInfoQuest(32999, "10=h0;01=h0;02=h0;20=h1;11=h0;21=h0;12=h01;03=h0;13=h0;04=h0;14=h1;05=h0;15=h0;06=h0;16=h0;07=h0;08=h1;17=h0;18=h0;19=h0");
                                            cm.dispose();
                                            cm.warp(307000210, 0, false)
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