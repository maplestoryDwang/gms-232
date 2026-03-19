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
      cm.forceCompleteQuest(100460);
      cm.updateInfoQuest(100407, "complete=1");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -52, 17);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.onTeleport(0, 3, cm.getPlayer().getId(), -81, 44);
        cm.inGameDirectionEvent_ForcedFlip(-1);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom('苏菲莉亚……', 57, 0, false, true, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("愿你和父亲在#b死者世界#k能幸福。", 57, 0, true, true, 1);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_同时移动镜头和人(1, 200);
                cm.inGameDirectionEvent_PushScaleInfo(1500, 0, 1500, 1500, -204, 17);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                } else {
                  if (status === V++) {
                    cm.npc_ChangeController(9062262, "oid=32732205", -36, 42, 5, -86, 14, 1, true, 1500, false);
                    cm.npc_SetSpecialAction("oid=32732205", "summon", 0, 0);
                    cm.npc_SetSpecialAction("oid=32732205", "shadow", -1, 1);
                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                  } else {
                    if (status === V++) {
                      cm.Npc_Fadeout("oid=32732205", 0, 1500);
                      cm.inGameDirectionEvent_ForcedFlip(1);
                      cm.inGameDirectionEvent_AskAnswerTime(2500);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("……？我好像一瞬间看到了#b暗影#k……是我的错觉吗？", 57, 0, false, true, 1);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_ForcedFlip(-1);
                            cm.inGameDirectionEvent_同时移动镜头和人(1, 350);
                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                              cm.fieldEffect_ProcessOnOffLayer("intro", "Effect/EventEffect.img/2019Halloween/finishEff", 0, 0, 0, -50, 0, 4, 0, 0, 0, 0, 1);
                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act1_5/DemianAttack2", 100);
                              cm.inGameDirectionEvent_AskAnswerTime(1800);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act4/evilS_dem", 100);
                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
                                  cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                  cm.setInGameDirectionMode(false, true, false);
                                  cm.setStandAloneMode(false);
                                  cm.npc_LeaveField("oid=32732205");
                                  cm.dispose();
                                  var O = cm.getNumberFromQuestInfo(100402, "rMap");
                                  cm.warp(O, 0, false);
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