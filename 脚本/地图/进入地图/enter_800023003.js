var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      if (cm.getNumberFromQuestInfo(58758, 'stage0') >= 2) {
        cm.dispose();
        return;
      }
      cm.updateInfoQuest(58758, 'stage0=2');
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(9111007, "oid=3846298", 85, 30, 94, 35, 135, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=3846298", "summon", 0, 0);
      cm.npc_ChangeController(9111002, "oid=3846299", -120, 20, 91, -170, -70, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=3846299", "summon", 0, 0);
      cm.npc_ChangeController(9111004, "oid=3846300", -170, 20, 91, -220, -120, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=3846300", "summon", 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_同时移动镜头和人(2, 230);
          cm.npc_SetForceMove("oid=3846298", 1, 170, 90);
          cm.npc_SetForceMove("oid=3846299", 1, 200, 100);
          cm.npc_SetForceMove("oid=3846300", 1, 200, 90);
          cm.inGameDirectionEvent_AskAnswerTime(2500);
        } else {
          if (status === V++) {
            cm.npc_setForceFlip("oid=3846298", -1);
            cm.sendNormalTalk_Bottom("#face0#各位……！", 37, 9111007, false, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
              cm.inGameDirectionEvent_AskAnswerTime(2000);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/flower", "oid=3846298"], [0, 0, 0, 1, 0, 1, 0, 0]);
                cm.sendNormalTalk_Bottom("#face1#欢迎来到狐狸山！", 37, 9111007, false, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/shade", "oid=3846299"], [0, 0, 0, 1, 0, 1, 0, 0]);
                  cm.sendNormalTalk_Bottom("#face0#这山藏得还真是深啊。", 37, 9111002, true, true);
                } else {
                  if (status === V++) {
                    cm.npc_setForceFlip("oid=3846299", 1);
                    cm.sendNormalTalk_Bottom("#face2#后面还跟着个可疑的家伙……", 37, 9111002, true, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak", "oid=3846300"], [0, 0, 0, 1, 0, 1, 0, 0]);
                      cm.sendNormalTalk_Bottom("泉奈，离暗居住的地方还有很远吗？", 57, 0, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#就快到了！", 37, 9111007, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom('那就拜托你带路咯！', 57, 0, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face1#嗯！放心吧！", 37, 9111007, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face1#对了！接下来你们可能会碰到狐妖的攻击，要小心哦！", 37, 9111007, true, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/whatl"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                cm.sendNormalTalk_Bottom("狐妖……？我们跟你在一起也会被攻击吗？", 57, 0, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face2#是的，因为暗长时间没有在位，出现了一些顽劣狐妖……\r\n那些家伙十分不听话，你们要多加小心！", 37, 9111007, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("嗯，知道了。", 57, 0, true, true);
                                    cm.effect_OnUserEff("Effect/OnUserEff.img/emotionBalloon/noSpeak");
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak", "oid=3846299"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                      cm.sendNormalTalk_Bottom("#face2#我离开的期间，真的发生了很多事啊……\r\n居然出现了顽劣狐妖……", 37, 9111002, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face2#……哼，再怎么顽劣也不会像妖鬼那么坏！", 37, 9111007, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak", "oid=3846299"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          cm.effect_OnUserEff("Effect/OnUserEff.img/emotionBalloon/noSpeak");
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_LeaveField("oid=3846298");
                                                cm.npc_LeaveField("oid=3846298");
                                                cm.npc_LeaveField("oid=3846299");
                                                cm.npc_LeaveField("oid=3846299");
                                                cm.npc_LeaveField("oid=3846300");
                                                cm.npc_LeaveField("oid=3846300");
                                                cm.setPartner(1, 9111004, 80011319, 0);
                                                cm.setPartner(1, 9111007, 80011320, 0);
                                                cm.setPartner(1, 9111002, 80011300, 0);
                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                } else if (status === V++) {
                                                  cm.eventSKill(0);
                                                  cm.setInGameDirectionMode(false, true, false);
                                                  cm.dispose();
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