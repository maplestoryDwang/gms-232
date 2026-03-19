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
      cm.npc_ChangeController(2052026, "oid=430791", -1938, 116, 19, -1988, -1888, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -1980, 50);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face7#居然能看到外星人，我实在太激动了……\r\n啊，这个装置不会就是传说中的UFO吧？", 37, 3001674 + cm.getPlayer().getGender(), false, true, 1);
            } else {
              if (status === V++) {
                cm.npc_ChangeController(2052016, "oid=7867319", -1980, 43, 19, -2030, -1930, 1, false, 0, false);
                cm.npc_SetSpecialAction("oid=7867319", "summon", 0, 0);
                cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1000, 1000, -1980, -20);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.npcMove(2052016, 0, 250, 3500);
                    cm.setAmbience("SoundEff.img/blackHeaven/crusherStay", 120, 60);
                    cm.setAmbience("SoundEff.img/HofM/act2/ABLOOP", 120, 60);
                    cm.userSetFieldFloating(993160160, 5, 5, 50);
                    cm.inGameDirectionEvent_头顶图片(["Map/Effect3.img/omegaSector/dust", "oid=7867319"], [8000, 600, 65, 1, 0, 1, 0, 0, 0]);
                    cm.inGameDirectionEvent_头顶图片(["Map/Effect3.img/omegaSector/dust2", "oid=7867319"], [8000, -600, 65, 1, 0, 1, 0, 0, 0]);
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.addPopupSay(3001674 + cm.getPlayer().getGender(), 1500, "#face0#难不成被吸进去了！？\r\n这倒是挺有趣的嘛？", '', 0);
                      cm.inGameDirectionEvent_AskAnswerTime(4000);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_头顶图片(["Map/Effect3.img/omegaSector/light1", "oid=7867319"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/omega/UFOlight.mp3", 100);
                        cm.inGameDirectionEvent_AskAnswerTime(3500);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_SetHideEffect(1);
                          cm.inGameDirectionEvent_头顶图片(["Map/Effect3.img/omegaSector/teleport"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/omega/UFOtel.mp3", 100);
                          cm.inGameDirectionEvent_AskAnswerTime(3000);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.npc_LeaveField("oid=7867319");
                              cm.userSetFieldFloating(993160160, 0, 0, 0);
                              cm.inGameDirectionEvent_SetHideEffect(0);
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
                                    cm.warp(221030530, 0, false);
                                    cm.setStandAloneMode(false);
                                    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
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