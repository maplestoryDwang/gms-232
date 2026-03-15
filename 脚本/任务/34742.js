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
            cm.onTeleport(0, 3, cm.getPlayer().getId(), -478, -174);
            cm.updateInfoQuest(34770, "20=h2;21=h0;22=h0;23=h0;24=h0;25=h0;29=h0");
            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/12thMS/jump_s", 100);
            cm.sendNormalTalk_Bottom("#fc0xFFAAAAAA#(啊，吓我一跳……)", 57, 0, false, true);
            cm.effect_NormalSpeechBalloon("#fn黑体##fs25##r呃啊啊！！", 0, 0, 0, 1500, 1, 0, -20, 0, 4, 3002020, cm.getPlayer().getId())
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face13#呼，吓死我了。真是个真实的梦。", 36, 3002110, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("你叫玛鲁吗？", 56, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face14#你，你是谁！长得奇奇怪怪的家伙！快报上名来！", 36, 3002110, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("我叫#h0#。好像是你写的信，把我送到了这里。", 56, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face7#信……难道！？你真的收到了我的飞机？", 36, 3002110, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face6#哎呀，看你既没耳朵，又没眼睛，真是个可怜的种族……", 36, 3002110, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face5#好吧！在让你加入尖耳守备队之前，我要先测试你一下！", 36, 3002110, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("什么？测试？", 56, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.askAcceptDecline_Bottom("#face5#我总不能随便就把你收下吧？必须尽快确认一下你的实力！\r\n#b（接受时自动移动。）", 36, 3002110)
                                            } else {
                                                if (status === a++) {
                                                    cm.dispose();
                                                    cm.openNpc("副本_狐狸谷_入队试炼")
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
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.sendNormalTalk_Bottom("呼，全都解决掉了。", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#哦？挺厉害的嘛？", 37, 3002123, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("？？？", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.npc_SetSpecialAction("oid=35117042", "change", 0, 1);
                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/foxvalley/npc_doldol", 100);
                        cm.inGameDirectionEvent_AskAnswerTime(3000)
                    } else {
                        if (status === a++) {
                            cm.npc_SetSpecialAction("oid=35117042", "stand2", -1, 1);
                            cm.sendNormalTalk_Bottom("#face5#你有资格成为我们尖耳守备队的一员！很了不起！", 37, 3002110, false, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("……（听这种小鬼称赞……完全高兴不起来……）", 57, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.forceCompleteQuest(34742);
                                    cm.gainExp(29002859);
                                    cm.updateInfoQuest(34742, "exp=1;clear=1");
                                    cm.npc_LeaveField("oid=35117042");
                                    cm.npc_LeaveField("oid=35117042");
                                    cm.dispose();
                                    cm.warp(410000100, 0);
                                    cm.setInGameDirectionMode(false, true, false)
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};