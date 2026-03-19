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
      if (cm.isQuestFinished(35622) && !cm.isQuestFinished(35625)) {
        cm.setNumberForQuestInfo(35162, 24, 'h1');
      }
      if (!cm.isQuestFinished(35624)) {
        cm.npc_ChangeController(3003687, "oid=2204868", 780, -353, 14, 730, 830, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=2204868", "summon", 0, 0);
      }
      if (!cm.isQuestActive(35623)) {
        cm.dispose();
        return;
      }
      cm.npc_ChangeController(3003624, "oid=275921", 606, -305, 13, 556, 656, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 1160, -80);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.updateInfoQuest(35162, "10=h1;12=h0;24=h0;34=h1");
      cm.npc_ChangeController(3003674, "oid=2204553", 605, -353, 13, 555, 655, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2204553", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=2204553", "energyball_loop", -1, 1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2500, 0, 475, -230);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM1/monster/M1_summon", 100);
        cm.npc_ChangeController(3003688, "oid=2204554", -250, -60, 3, -300, -200, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=2204554", 'summon', 0, 0);
        cm.npc_ChangeController(3003688, "oid=2204555", -100, -60, 3, -150, -50, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=2204555", 'summon', 0, 0);
        cm.npc_ChangeController(3003688, "oid=2204556", 50, -60, 3, 0, 100, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=2204556", "summon", 0, 0);
        cm.npc_ChangeController(3003688, "oid=2204557", 200, -60, 2, 150, 250, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=2204557", "summon", 0, 0);
        cm.npc_ChangeController(3003688, "oid=2204558", -190, -330, 10, -240, -140, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=2204558", "summon", 0, 0);
        cm.npc_ChangeController(3003688, "oid=2204559", 30, -330, 11, -20, 80, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=2204559", "summon", 0, 0);
        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM1/energyBall", 100);
        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM1/monster/M1_summon", 100);
        cm.npc_ChangeController(3003688, "oid=2204560", 350, -60, 2, 300, 400, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=2204560", "summon", 0, 0);
        cm.npc_ChangeController(3003688, "oid=2204561", 500, -60, 2, 450, 550, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=2204561", "summon", 0, 0);
        cm.npc_ChangeController(3003688, "oid=2204562", 650, -60, 1, 600, 700, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=2204562", "summon", 0, 0);
        cm.npc_ChangeController(3003688, "oid=2204563", 800, -60, 1, 750, 850, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=2204563", 'summon', 0, 0);
        cm.npc_ChangeController(3003688, "oid=2204564", 950, -60, 1, 900, 1000, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=2204564", "summon", 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(2000);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#哈……真是没完没了……。\r\n真麻烦。", 37, 3003674, false, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.OverlapScreenDetail19(0, 1000, 3000, 1);
              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(300);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 307, -140);
                  } else {
                    if (status === V++) {
                      cm.npc_SetSpecialAction("oid=2204553", "HyperMagic", -1, 1);
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/esfera/memory", 100);
                        cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(1600);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#哈啊啊啊啊啊啊啊啊啊啊！！！！！！！", 37, 3003674, false, true);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/thunder3", 100);
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/monster/M1_die", 100);
                              cm.npc_LeaveField("oid=2204554");
                              cm.npc_LeaveField("oid=2204554");
                              cm.npc_LeaveField("oid=2204555");
                              cm.npc_LeaveField("oid=2204555");
                              cm.npc_LeaveField("oid=2204556");
                              cm.npc_LeaveField("oid=2204556");
                              cm.npc_LeaveField("oid=2204557");
                              cm.npc_LeaveField("oid=2204557");
                              cm.npc_LeaveField("oid=2204558");
                              cm.npc_LeaveField("oid=2204558");
                              cm.npc_LeaveField("oid=2204559");
                              cm.npc_LeaveField("oid=2204559");
                              cm.npc_LeaveField("oid=2204560");
                              cm.npc_LeaveField("oid=2204560");
                              cm.npc_LeaveField("oid=2204561");
                              cm.npc_LeaveField("oid=2204561");
                              cm.npc_LeaveField("oid=2204562");
                              cm.npc_LeaveField("oid=2204562");
                              cm.npc_LeaveField("oid=2204563");
                              cm.npc_LeaveField("oid=2204563");
                              cm.npc_LeaveField("oid=2204564");
                              cm.npc_LeaveField("oid=2204564");
                              cm.npc_LeaveField("oid=2204553");
                              cm.npc_LeaveField("oid=2204553");
                              cm.updateInfoQuest(35162, "10=h1;12=h0;24=h1;34=h1");
                              cm.forceCompleteQuest(35623);
                              cm.gainExp(85793345);
                              cm.updateInfoQuest(35611, "d5=1;d6=1;d7=1;d8=1;d9=1;menu=0;d10=1;mPark75=1;d582=1;d30=1;di9=1;d46=1;d74=1;medal=1;d48=1;d1=1;d4=1");
                              cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 0, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(1400);
                                      } else if (status === V++) {
                                        cm.setStandAloneMode(false);
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