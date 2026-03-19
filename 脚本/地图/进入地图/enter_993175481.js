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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.fieldEffect_ProcessOnOffLayer("intro", "Effect/EventEffect.img/2019Halloween/startEff", 0, 0, 0, -50, 0, 4, 0, 0, 0, 0, 1);
      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act1_5/DemianAttack2", 100);
      cm.inGameDirectionEvent_AskAnswerTime(2100);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.effect_Text(["#fn黑体##fs20#2020 Haunted Mansion", "NewItem"], [100, 5000, 4, 0, 90, 1, 4, 3, 300, 150, 0, 0]);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.effect_Text(["#fn黑体##fs60#Episode.1", "NewItem"], [100, 4000, 4, 0, 170, 1, 4, 3, 300, 150, 0, 0]);
            cm.inGameDirectionEvent_AskAnswerTime(2300);
          } else {
            if (status === V++) {
              cm.effect_Text(["#fn黑体##fs25#可怕的假面", "NewItem"], [100, 3000, 4, 0, 200, 1, 4, 3, 300, 150, 0, 0]);
              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act4/evilS_dem", 100);
              cm.inGameDirectionEvent_AskAnswerTime(3000);
            } else {
              if (status === V++) {
                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                cm.setInGameDirectionMode(false, true, false);
                cm.setStandAloneMode(false);
                cm.curNodeEventEnd(true);
                cm.setInGameDirectionMode(true, false, false);
                cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                cm.setStandAloneMode(true);
                cm.onTeleport(0, 3, cm.getPlayer().getId(), 274, 32);
                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 252, 14);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_ForcedFlip(-1);
                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1400);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("邀请函上的地址应该是这里了。", 57, 0, false, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("怎么感觉阴森森的，不像是举行活动的地方？", 57, 0, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("先进去再说吧。", 57, 0, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_同时移动镜头和人(1, 150);
                            cm.inGameDirectionEvent_PushScaleInfo(1500, 0, 1500, 1500, -43, 14);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else if (status === V++) {
                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
                                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                cm.setInGameDirectionMode(false, true, false);
                                cm.setStandAloneMode(false);
                                cm.dispose();
                                cm.warp(993175480, 0, false);
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