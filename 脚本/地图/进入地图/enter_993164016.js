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
      cm.npc_ChangeController(3004924, "oid=363547", 652, -61, 1, 602, 702, 1, false, 0, false);
      cm.npc_ChangeController(3004906, "oid=363548", 777, -14, 2, 727, 827, 1, false, 0, false);
      cm.fieldEffect_PlayBGM("Bgm56/TheDispossessed", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 665, -40);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(2500);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1500);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#你可以不用向上级报告的吗？", 36, 3004906, false, true, 1);
              cm.effect_Voice("Voice6.img/kain/13/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/1', 100);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#不必如此小题大做。", 36, 3004903, true, true, 1);
                cm.effect_Voice("Voice6.img/kain/13/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/2', 100);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#但要等医生回来，还要花上三四天的时间，修复安保系统恐怕要几天的时间，到时候可没办法收拾残局。", 36, 3004906, true, true, 1);
                  cm.effect_Voice("Voice6.img/kain/13/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/3', 100);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#或许现在报废实验对象，进入下一步……", 36, 3004906, true, true, 1);
                    cm.effect_Voice("Voice6.img/kain/13/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/4', 100);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#项目正在顺利进行中，你就直接这么汇报。", 36, 3004903, true, true, 1);
                      cm.effect_Voice("Voice6.img/kain/13/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/5', 100);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#……遵命。", 36, 3004906, false, true, 1);
                          cm.effect_Voice("Voice6.img/kain/13/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/6', 100);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                            cm.effect_Voice("Voice6.img/kain/13/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/7', 100);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#你让他们明天待命，记得找几个信得过的队员。", 36, 3004903, false, true, 1);
                              cm.effect_Voice("Voice6.img/kain/13/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/8', 100);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else if (status === V++) {
                                  cm.forceCompleteQuest(39415);
                                  cm.getPlayer().levelUp();
                                  cm.updateInfoQuest(39400, "60=h1;51=h0;61=h0;52=h0;62=h0;80=h0;53=h0;63=h0;81=h0;54=h0;82=h0;73=h0;74=h0;83=h0;75=h0;57=h0;84=h0;58=h0;76=h0;85=h0;59=h0;77=h0");
                                  cm.dispose();
                                  cm.warp(410000419, 0, true);
                                  cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                  cm.setInGameDirectionMode(false, true, false);
                                  cm.setStandAloneMode(false);
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