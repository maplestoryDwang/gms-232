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
      cm.npc_ChangeController(2570108, "oid=38074595", 167, 120, 2, 117, 217, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=38074595", "summon", 0, 0);
      cm.npc_ChangeController(2570106, "oid=38074596", 388, 122, 2, 338, 438, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=38074596", "summon", 0, 0);
      cm.npc_ChangeController(2570100, "oid=38074597", 229, 108, 2, 179, 279, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=38074597", "summon", 0, 0);
      cm.npc_ChangeController(2570130, "oid=38074598", 480, 170, 8, 430, 530, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=38074598", "summon", 0, 0);
      cm.npc_ChangeController(2570130, "oid=38074599", 550, 170, 8, 500, 600, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=38074599", 'summon', 0, 0);
      cm.npc_ChangeController(2570130, "oid=38074600", 115, 170, 5, 65, 165, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=38074600", "summon", 0, 0);
      cm.npc_ChangeController(2570130, "oid=38074601", 45, 170, 5, -5, 95, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=38074601", 'summon', 0, 0);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 320, 116);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.fieldEffect_ProcessOnOffLayer('10', "Effect/Direction25.img/Dlep6/effect/0", 0, 2000, 10, 10, 20, 4, 0, 0, 0, 0, -1);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.npc_SetSpecialAction("oid=38074598", "attack", -1, 1);
            cm.npc_SetSpecialAction("oid=38074599", "attack", -1, 1);
            cm.npc_SetSpecialAction("oid=38074600", "attack", -1, 1);
            cm.npc_SetSpecialAction("oid=38074601", "attack", -1, 1);
            cm.npc_SetSpecialAction("oid=38074596", "attack2", -1, 1);
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1200);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1400);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face3#请你让开，老师。照这样下去，你我都难逃一死。", 36, 2570108, false, true, 1);
                cm.effect_Voice("Voice6.img/Library/prince/22-01-prince.mp3", 100);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#不行……", 36, 2570100, true, true, 1);
                  cm.effect_Voice("Voice6.img/Library/kel/22-02-kel.1.mp3", 100);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face3#我没事。但……\r\n请你答应我一件事。", 36, 2570108, true, true, 1);
                    cm.effect_Voice("Voice6.img/Library/prince/22-03-prince.mp3", 100);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face3#如果我的人生就此终止……", 36, 2570108, true, true, 1);
                      cm.effect_Voice("Voice6.img/Library/prince/22-04-prince.mp3", 100);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face3#请老师守护圣瑞尼亚吧。", 36, 2570108, true, true, 1);
                        cm.effect_Voice("Voice6.img/Library/prince/22-05-prince.mp3", 100);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face1#直到最后的最后，\r\n只要圣瑞尼亚还剩下一位百姓……\r\n你都要保护他们。", 36, 2570108, false, true, 1);
                            cm.effect_Voice("Voice6.img/Library/prince/22-06-prince.mp3", 100);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#王子殿下……。", 36, 2570100, true, true, 1);
                              cm.effect_Voice("Voice6.img/Library/kel/22-07-kel.1.mp3", 100);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#我发誓。", 36, 2570100, false, true, 1);
                                    cm.effect_Voice("Voice6.img/Library/kel/22-08-kel.1.mp3", 100);
                                  } else if (status === V++) {
                                    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                    cm.npc_LeaveField("oid=38074595");
                                    cm.npc_LeaveField("oid=38074596");
                                    cm.npc_LeaveField("oid=38074597");
                                    cm.npc_LeaveField("oid=38074598");
                                    cm.npc_LeaveField("oid=38074599");
                                    cm.npc_LeaveField("oid=38074600");
                                    cm.npc_LeaveField("oid=38074601");
                                    cm.dispose();
                                    cm.warp(308090023, 0, true);
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
}