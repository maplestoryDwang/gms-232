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
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.npc_ChangeController(3004322, "oid=2787510", -150, 200, 1, -200, -100, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2787510", "summon", 0, 0);
      cm.npc_ChangeController(3004323, "oid=2787511", -85, 200, 1, -135, -35, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2787511", 'summon', 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 233, 220);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 300, 220);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(4000);
        cm.effect_Text(["#fn黑体##fs18#过去，光明神座"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0]);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("必须快点救出她才行！", 57, 0, false, true);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
            cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 1300, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1600);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_同时移动镜头和人(2, 100);
              cm.inGameDirectionEvent_AskAnswerTime(2000);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_头顶图片(["Effect/BasicEff.img/Teleport"], [0, 0, 0, 1, 0, 0, 0, 0]);
                cm.fieldEffect_PlayFieldSound("Sound/Skill.img/1111002/Use", 100);
                cm.inGameDirectionEvent_AskAnswerTime(100);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_SetHideEffect(1);
                  cm.onTeleport(0, 3, cm.getPlayer().getId(), -229, 220);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_SetHideEffect(0);
                      cm.inGameDirectionEvent_PushScaleInfo(2500, 0, 2000, 2500, -141, 220);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_InsertCanvas11(0, 0, 0, 0, 0, 0);
                          cm.fieldEffect_InsertCanvas(1, 1, 255, 255, 255, 1200, 0);
                          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2300, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(2600);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("那不是我吗？怎么会……？", 57, 0, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#现在仍是记忆沼泽的延续。", 37, 3004323, true, true);
                              cm.effect_Voice("Voice5.img/CH1/Lily/15", 128);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#这应该是注入老师体内的黑魔法师记忆再现的情景。", 37, 3004323, true, true);
                                cm.effect_Voice("Voice5.img/CH1/Lily/16", 128);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else if (status === V++) {
                                  cm.eventSKill(0);
                                  cm.warp(993133000, 0, false);
                                  cm.setInGameDirectionMode(false, true, false);
                                  cm.setStandAloneMode(false);
                                  cm.forceCompleteQuest(39718);
                                  cm.gainExp(20 * Math.pow(cm.getLevel(), 3));
                                  cm.npc_LeaveField("oid=2787510");
                                  cm.npc_LeaveField("oid=2787510");
                                  cm.npc_LeaveField("oid=2787511");
                                  cm.npc_LeaveField("oid=2787511");
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