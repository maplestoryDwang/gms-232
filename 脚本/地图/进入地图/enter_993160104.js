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
      cm.npc_ChangeController(3001605, "oid=375304", -430, 161, 0, -480, -380, 1, false, 0, false);
      cm.npc_ChangeController(3001617, "oid=375305", 724, 220, 7, 724, 774, 5, true, 0, false);
      cm.npc_ChangeController(3001618, "oid=375306", -557, -77, 0, -607, -507, 1, false, 0, false);
      cm.npc_ChangeController(3001619, "oid=375307", -638, -136, 0, -688, -588, 0, false, 0, false);
      cm.npc_ChangeController(3001620, "oid=375308", 550, 220, 2, 500, 600, 5, true, 0, false);
      cm.npc_ChangeController(3001621, 'oid=375309', 618, 220, 2, 568, 668, 5, true, 0, false);
      cm.npc_ChangeController(3001622, "oid=375310", 269, 220, 2, 219, 319, 5, true, 0, false);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.npc_ChangeController(3001652, "oid=2949814", 100, 162, 1, 50, 150, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2949814", "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 107, 169);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.npc_SetSpecialAction("oid=2949814", "special_appear", 3000, 1);
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1400);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === V++) {
                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/PinkBean/beanmoving", 100);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face1#欢迎光临，这里是解决师情报商店！", 37, 3001652, false, true);
                  cm.effect_Voice("Voice5.img/hoyoung/D-1/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/1', 100);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face5#……哎哟，这位还是头一次见嘛？", 37, 3001652, false, true);
                      cm.effect_Voice("Voice5.img/hoyoung/D-1/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/2', 100);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.updateInfoQuest(39598, "11=h0;03=h0;15=h0;33=h0;34=h0;16=h0;35=h0;27=h0;09=h0;82=h0;28=h0;29=h0;84=h0;85=h0");
                          cm.updateInfoQuest(39598, "11=h0;03=h0;15=h0;33=h0;34=h0;16=h1;35=h0;27=h0;09=h0;82=h0;28=h0;29=h0;84=h0;85=h0");
                          cm.updateInfoQuest(39598, "02=h0;11=h0;03=h0;15=h0;33=h0;34=h0;16=h1;35=h0;27=h0;09=h0;82=h0;28=h0;29=h0;84=h0;85=h0");
                          cm.updateInfoQuest(39598, "02=h0;11=h0;03=h1;15=h0;33=h0;34=h0;16=h1;35=h0;27=h0;09=h0;82=h0;28=h0;29=h0;84=h0;85=h0");
                          cm.forceCompleteQuest(39546);
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
                              } else if (status === V++) {
                                cm.setStandAloneMode(false);
                                cm.warp(410000201, 0, false);
                                cm.eventSKill(0);
                                cm.setInGameDirectionMode(false, true, false);
                                cm.npc_LeaveField("oid=2949814");
                                cm.npc_LeaveField("oid=2949814");
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