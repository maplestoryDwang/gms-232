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
      cm.updateInfoQuest(61333, "act1=610061570;act2=610062450;act3=610063590;act4=610064430");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(9201535, "oid=2757235", 150, 153, 8, 100, 200, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2757235", "summon", 0, 0);
      cm.npc_ChangeController(9201579, "oid=2757236", 263, 153, 11, 213, 313, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2757236", "summon", 0, 0);
      cm.fieldEffect_BackgroundCanvas(4, 125, 125, 125, 2000, 0, 0);
      cm.fieldEffect_BackgroundCanvas(5, 125, 125, 125, 2000, 0, 0);
      cm.fieldEffect_BackgroundCanvas(1, 125, 125, 125, 2000, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(800);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_BackgroundCanvas(2, 125, 125, 125, 2000, 0, 0);
        cm.fieldEffect_BackgroundCanvas(3, 125, 125, 125, 2000, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(2200);
      } else {
        if (status === V++) {
          cm.npc_setForceFlip("oid=2757235", -1);
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.npc_setForceFlip("oid=2757235", 1);
            cm.inGameDirectionEvent_AskAnswerTime(1200);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("这片大陆也快支撑不住了……", 37, 9201535, false, true);
            } else {
              if (status === V++) {
                cm.npc_SetForceMove("oid=2757235", 1, 50, 50);
                cm.inGameDirectionEvent_AskAnswerTime(1200);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("该结束这一切了。\r\n为所有事都画上句号。", 37, 9201535, false, true);
                } else {
                  if (status === V++) {
                    cm.npc_SetSpecialAction("oid=2757235", "spell", -1, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("纳瑞坎……苏巴尼……", 37, 9201535, false, true);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_ProcessOnOffLayer('0', "Map/EffectGL.img/MBlockbuster/illust9", 0, 1500, 0, 0, 14, 4, 0, -1, 0, 0, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(6200);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_ProcessOnOffLayer('0', '', 2, 1500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(2200);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("格罗娜。", 37, 9201535, false, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#我们，终于能团聚了。", 37, 9201535, false, true);
                              } else {
                                if (status === V++) {
                                  cm.setNpcSpecialActionReset("oid=2757235");
                                  cm.npc_SetSpecialAction("oid=2757235", '幻日', 0, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(2200);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(1600);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                    } else if (status === V++) {
                                      cm.eventSKill(0);
                                      cm.warp(610064440, 0, true);
                                      cm.setInGameDirectionMode(false, true, false);
                                      cm.npc_LeaveField("oid=2757235");
                                      cm.npc_LeaveField("oid=2757235");
                                      cm.npc_LeaveField("oid=2757236");
                                      cm.npc_LeaveField("oid=2757236");
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