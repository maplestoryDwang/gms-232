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
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.setAmbience("SoundEff.img/HofM/act4/fire", 300, 60);
      cm.npc_ChangeController(3004431, "oid=63623891", -286, 50, 1, -336, -236, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=63623891", "summon", 0, 0);
      cm.npc_ChangeController(3004460, "oid=63623892", -425, 50, 1, -475, -375, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=63623892", "summon", 0, 0);
      cm.npc_ChangeController(3004460, "oid=63623893", -526, 50, 1, -576, -476, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=63623893", "summon", 0, 0);
      cm.npc_ChangeController(3004461, "oid=63623894", -182, 50, 2, -232, -132, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=63623894", "summon", 0, 0);
      cm.npc_ChangeController(3004461, "oid=63623895", -648, 50, 1, -698, -598, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=63623895", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=63623891", "special4", -1, 1);
      cm.npc_SetSpecialAction("oid=63623892", 'special2', -1, 1);
      cm.npc_SetSpecialAction("oid=63623893", 'special2', -1, 1);
      cm.npc_SetSpecialAction("oid=63623894", "special2", -1, 1);
      cm.npc_SetSpecialAction("oid=63623895", 'special2', -1, 1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -286, 32);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face2#咳咳！", 37, 3004431, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face2#大火烧得这么猛烈……艾伦看到该伤心了……", 37, 3004431, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face2#不过，现在好像不是想这些的时候。", 37, 3004431, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face2#啊……我的意识……", 37, 3004431, true, true);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/Falldown", 100);
                          cm.inGameDirectionEvent_AskAnswerTime(3000);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cernium3/footstep", 100);
                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face2#谁……？", 37, 3004431, false, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                              } else if (status === V++) {
                                cm.eventSKill(0);
                                cm.warp(993151024, 0, true);
                                cm.npc_LeaveField("oid=63623891");
                                cm.npc_LeaveField("oid=63623891");
                                cm.npc_LeaveField("oid=63623892");
                                cm.npc_LeaveField("oid=63623892");
                                cm.npc_LeaveField("oid=63623893");
                                cm.npc_LeaveField("oid=63623893");
                                cm.npc_LeaveField("oid=63623894");
                                cm.npc_LeaveField("oid=63623894");
                                cm.npc_LeaveField("oid=63623895");
                                cm.npc_LeaveField("oid=63623895");
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