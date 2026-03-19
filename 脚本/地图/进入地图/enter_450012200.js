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
      if (cm.isQuestFinished(35805) && !cm.isQuestFinished(35806)) {
        cm.updateInfoQuest(35831, "52=h1;53=h1;55=h1;56=h1;57=h0");
        cm.curNodeEventEnd(true);
        cm.setInGameDirectionMode(true, false, true);
        cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_SetHideEffect(1);
        cm.setStandAloneMode(true);
        cm.onTeleport(0, 3, cm.getPlayer().getId(), -400, -24);
        cm.npc_ChangeController(3003957, "oid=2180352", -253, -200, 1, -303, -203, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=2180352", "summon", 0, 0);
        cm.npc_ChangeController(3003911, "oid=2180353", 0, -80, 3, -50, 50, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=2180353", "summon", 0, 0);
        cm.npc_ChangeController(3003910, "oid=2180354", 173, -80, 3, 123, 223, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=2180354", "summon", 0, 0);
        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -140, -82);
      } else {
        cm.dispose();
        return;
      }
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#太大意了……就像个傻瓜一样……", 37, 3003911, false, true);
          } else {
            if (status === V++) {
              cm.npc_SetSpecialAction("oid=2180353", "die", 1, 1);
              cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8220022/Die", 100);
              cm.inGameDirectionEvent_AskAnswerTime(2000);
            } else {
              if (status === V++) {
                cm.npc_LeaveField("oid=2180353");
                cm.npc_LeaveField("oid=2180353");
                cm.sendNormalTalk_Bottom("#face0#任务失败。", 37, 3003910, false, true);
              } else {
                if (status === V++) {
                  cm.npc_SetSpecialAction("oid=2180354", 'die', 1, 1);
                  cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8220022/Die", 100);
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else {
                  if (status === V++) {
                    cm.npc_LeaveField("oid=2180354");
                    cm.npc_LeaveField("oid=2180354");
                    cm.sendNormalTalk_Bottom("终于追上了。", 57, 0, false, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_SetHideEffect(0);
                      cm.npc_setForceFlip("oid=2180352", -1);
                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2180352"], [0, 0, -20, 1, 0, 1, 0, 0]);
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face1#（这家伙……）", 37, 3003902, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face1#（这一会儿工夫，就打败那仨上来了？）", 37, 3003902, true, true);
                        } else {
                          if (status === V++) {
                            cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(300);
                              } else if (status === V++) {
                                cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                cm.setStandAloneMode(false);
                                cm.setInGameDirectionMode(false, true, false);
                                cm.updateInfoQuest(35832, "dir000=end;dir010=end;dir200=end;skip=5;skip2=3");
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