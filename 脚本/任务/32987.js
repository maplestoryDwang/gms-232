var status = -1;

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.curNodeEventEnd(true);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, true);
            cm.sendNormalTalk_Bottom("笔记……难道是艾特去神殿之前留下的？", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1600)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_Monologue("#fn????#对不起，朋友。", 0)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_Monologue("#fn????#召唤我去神殿的声音没有消失。", 0)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_Monologue("", 0)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_Monologue("#fn????#也许是最后一次了，我就把秘密告诉你吧。", 0)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_Monologue("#fn????#为什么你每次靠近的时候，我都能察觉。", 1)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_Monologue("#fn????#因为你的身上，一直散发着隐隐的香气。", 0)
                                    } else {
                                        if (status === a++) {
                                            cm.inGameDirectionEvent_Monologue("#fn????#那是……迎月花的香味。", 0)
                                        } else {
                                            if (status === a++) {
                                                cm.inGameDirectionEvent_Monologue("", 0)
                                            } else {
                                                if (status === a++) {
                                                    cm.inGameDirectionEvent_Monologue("#fn????#希望你能喜欢我的礼物。", 0)
                                                } else {
                                                    if (status === a++) {
                                                        cm.inGameDirectionEvent_Monologue("", 0)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.inGameDirectionEvent_Monologue("                                                  - 艾特", 1)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("这是……迎月花……\r\n不会是真的翻遍了整个森林，才找到的吧？", 57, 0, false, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("傻瓜……真是个傻瓜……", 57, 0, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("不，都忘了吧……把它放到抽屉里……", 57, 0, false, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.fieldEffect_ProcessOnOffLayer("0", "Map/Effect3.img/DLep5/4", 0, 500, 0, 0, 0, 4, 1);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("！！", 57, 0, false, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("为什么抽屉里已经有花了呢？", 57, 0, true, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("难道这是……上一个轮回，还有上上个轮回的……", 57, 0, true, true)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk_Bottom("哈……哈哈……", 57, 0, true, true)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk_Bottom("每次……每次艾特都叫我朋友。\r\n但是我……每次都背叛他……", 57, 0, true, true);
                                                                                                        cm.effect_Voice("Voice3.img/DLep5/pangM/I_2.mp3", 100)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.sendNormalTalk_Bottom("我……到底干了些什么？", 57, 0, false, true);
                                                                                                                cm.effect_Voice("Voice3.img/DLep5/pangM/I_3.mp3", 100)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("0", "", 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1200)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1400)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.sendNormalTalk_Bottom("必须到队长室去一趟。", 57, 0, false, true)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.OnStartNavigation(307000120, 0, "", 0);
                                                                                                                                cm.forceStartQuest(32987, "");
                                                                                                                                cm.updateInfoQuest(32999, "00=h0;10=h0;01=h0;02=h0;20=h0;11=h0;21=h1;12=h0;03=h0;13=h0;04=h0;14=h0;05=h0;15=h1;06=h0;16=h1;07=h0;08=h1;17=h0;18=h0;19=h0");
                                                                                                                                cm.eventSKill(0);
                                                                                                                                cm.setInGameDirectionMode(false, true, false);
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
                    cm.updateInfoQuest(32982, "exp=1");
                    cm.forceCompleteQuest(32982);
                    cm.updateInfoQuest(32999, "10=h0;01=h0;02=h0;20=h0;11=h0;21=h0;12=h01;03=h0;13=h0;04=h0;14=h1;05=h0;15=h0;06=h0;16=h0;07=h0;08=h1;17=h0;18=h0;19=h0");
                    cm.updateInfoQuest(32999, "10=h0;01=h0;02=h0;20=h1;11=h0;21=h0;12=h01;03=h0;13=h0;04=h0;14=h1;05=h0;15=h0;06=h0;16=h0;07=h0;08=h1;17=h0;18=h0;19=h0");
                    cm.dispose();
                    cm.warp(307000210)
                } else {
                    cm.dispose()
                }
            }
        }
    }
};