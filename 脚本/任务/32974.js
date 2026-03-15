var status = -1;

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("#face0#刚才是开个玩笑～\r\n因为肯老是来烦我。让我给他拿果汁和花生什么的～", 36, 2560003, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("（开玩笑……吗？）", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#来得正好。你去帮我找点花生。", 36, 2560003, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("我？为什么……", 56, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face10#嗯……果然还是不行吗？", 36, 2560003, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face14#不#fs20##r杀人灭口#k的话……", 36, 2560003, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("我，我去！", 56, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("花生应该就在这里的什么地方……啊，在哪呢……\r\n啊，一定又被他们拿走了！到地下室去看看！", 56, 0, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.forceStartQuest(32974, "");
                                            cm.OnStartNavigation(307000110, 0, "hunt00", 0);
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

function end(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.updateInfoQuest(32999, "10=h1;01=h1;02=h0;20=h0;11=h0;21=h0;12=h0;03=h0;13=h0;04=h0;14=h0;05=h0;15=h0;06=h0;16=h0;07=h0;08=h0;17=h1;18=h0;19=h0");
            cm.sendNormalTalk_Bottom("呼呼，找到了。嗯？那本书是……", 56, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#这不是你的书吗？#b“植物图鉴和神秘配方”#k", 36, 2560003, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("不，不是的……\r\n啊，要是被米露看见了，一定又要怪我不该随便拿出来。必须快点还回去，哈哈哈……", 56, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#拿出来。", 36, 2560003, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("呜呜……", 56, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#让我看看……迎月花？干嘛要看这个……难道……", 36, 2560003, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#fs18#我，我绝对没吃！！", 56, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#哦……真的吗？", 36, 2560003, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("呃……拜托了，一定要帮我保密。", 56, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face3#让我再想想。这本书先借我看一下。", 36, 2560003, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("等，等等！等一下！", 56, 0, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.updateInfoQuest(32999, "10=h0;01=h1;02=h0;20=h0;11=h0;21=h0;12=h0;03=h0;13=h0;04=h0;14=h0;05=h0;15=h0;06=h0;16=h0;07=h0;08=h0;17=h1;18=h0;19=h0");
                                                        cm.updateInfoQuest(32999, "10=h0;01=h1;02=h0;20=h0;11=h0;21=h0;12=h1;03=h0;13=h0;04=h0;14=h0;05=h0;15=h0;06=h0;16=h0;07=h0;08=h0;17=h1;18=h0;19=h0");
                                                        cm.updateInfoQuest(32999, "10=h0;01=h1;02=h0;20=h0;11=h0;21=h0;12=h1;03=h1;13=h0;04=h0;14=h0;05=h0;15=h0;06=h0;16=h0;07=h0;08=h0;17=h1;18=h0;19=h0");
                                                        cm.forceCompleteQuest(32974);
                                                        cm.updateInfoQuest(32974, "exp=1");
                                                        cm.gainExp(2462700);
                                                        cm.sendNormalTalk_Bottom("完蛋了……", 56, 0, true, true);
                                                        cm.gainItem(4036342, -40)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("还好身体好像没什么异常……必须去向队长报告……", 56, 0, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.dispose();
                                                                cm.warp(307000120, 0, false)
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