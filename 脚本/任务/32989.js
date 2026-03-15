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
            cm.npc_ChangeController(2560011, "oid=3593364", 565, -62, 4, 515, 615, 0, false, 0, false);
            cm.npc_SetSpecialAction("oid=3593364", "summon", 0, 0);
            cm.Npc_Fadeout("oid=3593364", 0, 0);
            cm.SitOnDummyPortableChair(3018035, 1);
            cm.onTeleport(0, 3, cm.getPlayer().getId(), 944, -122);
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1200)
        } else {
            if (status === a++) {
                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1400)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("晒干捣碎的石竹花瓣三勺，发光蘑菇粉末两勺，\r\n大眼青蛙卵一勺，隔水熬制后……", 57, 0, false, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("最后加上一撮月光……", 57, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.SitOnDummyPortableChair(3018037, 1);
                            cm.inGameDirectionEvent_AskAnswerTime(2000)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("艾特……", 57, 0, false, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("虽然迎月花是无法成为月亮的虚假之物……\r\n但却向我揭示了通往真相的线索。", 57, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("虽然我的存在本身不过是个幻象……", 57, 0, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("但这是我唯一可以为你做的事。", 57, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("真实药水……只要有了这个……", 57, 0, false, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.npc_ChangeController(2560000, "oid=3593596", 565, -62, 4, 515, 615, 0, false, 0, false);
                                                        cm.npc_SetSpecialAction("oid=3593596", "summon", 0, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0#真让人吃惊，影牙。没想到你真的抓住了月光。老实说，我很意外。", 37, 2560000, false, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face0#但是……你是不是什么地方搞错了？", 37, 2560000, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#你应该知道那是什么东西吧？\r\n你应该知道了你是什么。如果喝下那个东西……", 37, 2560000, true, true);
                                                                    cm.effect_Voice("Voice3.img/DLep5/will/L_2-1.mp3", 100)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("就会变回原来的样子……影子怪物，对吧？", 57, 0, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#看来你很清楚。那你是想送给艾特，是吧……", 37, 2560000, true, true);
                                                                            cm.effect_Voice("Voice3.img/DLep5/will/L_4-1.mp3", 100)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.Npc_Fadeout("oid=3593596", 0, 1000);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.Npc_Fadeout("oid=3593364", 1000, 2000);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.fieldEffect_PlayBGM("Bgm33.img/RedRoom", 0, 0);
                                                                                        cm.sendNormalTalk_Bottom("#face0#不过恐怕没那么容易。现在你想怎么办呢？", 37, 2560000, false, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("那就只能战斗了……", 57, 0, true, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#影牙，既然你执意如此，我也不会阻拦你。\r\n好吧，那就开始吧？", 37, 2560000, true, true)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.npc_LeaveField("oid=3593596");
                                                                                                    cm.npc_LeaveField("oid=3593596");
                                                                                                    cm.npc_LeaveField("oid=3593364");
                                                                                                    cm.npc_LeaveField("oid=3593364");
                                                                                                    cm.dispose();
                                                                                                    cm.warp(307090040, 0, false);
                                                                                                    cm.eventSKill(0);
                                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                                    cm.dispose();
                                                                                                    cm.warp(307090040, 0, false)
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
            cm.npc_LeaveField("oid=22233");
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.sendNormalTalk_Bottom("#face2#不可能……怎么会……", 37, 2560006, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("必须到迎月山丘去……真实药水……", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(32988);
                    cm.updateInfoQuest(32988, "exp=1;clear=1");
                    cm.setInGameDirectionMode(false, false, false);
                    cm.dispose();
                    cm.warp(307000210);
                    cm.npc_ChangeController(2560100, "oid=22362", 1010, -93, 1);
                    cm.npc_ChangeController(2500001, "oid=22363", -209, -6, 1);
                    cm.npc_ChangeController(2560120, "oid=22364", 806, -93, 0);
                    cm.npc_ChangeController(2560121, "oid=22365", 1020, -93, 1)
                } else {
                    cm.dispose()
                }
            }
        }
    }
};