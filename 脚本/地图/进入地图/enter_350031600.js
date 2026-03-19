var status = -1;
var selectionLog = [];
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
      cm.fieldEffect_PlayBGM("Bgm40.img/SecretMission", 0, 0);
      cm.npc_ChangeController(1540637, "oid=22427029", 0, -150, 3, -50, 50, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=22427029", "summon", 0, 0);
      cm.npc_ChangeController(1540472, "oid=22427030", -309, 0, 27, -359, -259, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=22427030", "summon", 0, 0);
      cm.npc_ChangeController(1540608, "oid=22427031", -86, -2, 29, -136, -36, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=22427031", 'summon', 0, 0);
      cm.npc_ChangeController(1540608, "oid=22427032", 76, -20, 30, 26, 126, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=22427032", "summon", 0, 0);
      cm.npc_ChangeController(1540608, "oid=22427033", -237, -86, 5, -287, -187, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=22427033", 'summon', 0, 0);
      cm.npc_ChangeController(1540608, "oid=22427034", 233, -80, 18, 183, 283, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=22427034", "summon", 0, 0);
      cm.npc_ChangeController(1540608, "oid=22427035", 304, -14, 31, 254, 354, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=22427035", "summon", 0, 0);
      cm.setAmbience("Ambience.img/warning", 50, 60);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(2000);
        } else {
          if (status === V++) {
            cm.npc_setForceFlip("oid=22427031", -1);
            cm.npc_setForceFlip("oid=22427032", -1);
            cm.npc_setForceFlip("oid=22427033", -1);
            cm.npc_setForceFlip("oid=22427034", -1);
            cm.npc_setForceFlip("oid=22427035", -1);
            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=22427031"], [0, 0, 0, 1, 0, 1, 0, 0]);
            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=22427032"], [0, 0, 0, 1, 0, 1, 0, 0]);
            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=22427033"], [0, 0, 0, 1, 0, 1, 0, 0]);
            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=22427034"], [0, 0, 0, 1, 0, 1, 0, 0]);
            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=22427035"], [0, 0, 0, 1, 0, 1, 0, 0]);
            cm.inGameDirectionEvent_AskAnswerTime(1500);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("你来啦！终于得救了！", 37, 1540617, false, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_PushScaleInfo(1000, 1500, 1000, -3, -177);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("所有人都受到了攻击，现在没人掌舵了！", 37, 1540617, false, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom('必须尽快控制船舵！', 37, 1540617, false, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                          } else {
                            if (status === V++) {
                              cm.npc_LeaveField("oid=22427031");
                              cm.npc_LeaveField("oid=22427031");
                              cm.npc_LeaveField("oid=22427032");
                              cm.npc_LeaveField("oid=22427032");
                              cm.npc_LeaveField("oid=22427033");
                              cm.npc_LeaveField("oid=22427033");
                              cm.npc_LeaveField("oid=22427034");
                              cm.npc_LeaveField("oid=22427034");
                              cm.npc_LeaveField("oid=22427035");
                              cm.npc_LeaveField("oid=22427035");
                              cm.spawnMobLimit(9300428, 1, -86, 26, 100);
                              cm.spawnMobLimit(9300428, 1, 76, 26, 100);
                              cm.spawnMobLimit(9300428, 1, -237, -53, 100);
                              cm.spawnMobLimit(9300428, 1, 233, -52, 100);
                              cm.spawnMobLimit(9300428, 1, 304, 26, 100);
                              cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                            } else if (status === V++) {
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;