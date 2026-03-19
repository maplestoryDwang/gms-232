var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(W, j, I) {
  if (status == 0 && W == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = I;
  var d = -1;
  if (status <= d++) {
    cm.dispose();
  } else {
    if (status === d++) {
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(9130105, "oid=538202119", 139, 161, 5, 89, 189, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=538202119", "summon", 0, 0);
      cm.npc_ChangeController(9130124, "oid=538202120", 483, 170, 6, 433, 533, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=538202120", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === d++) {
        cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
        cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 1300, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1600);
      } else {
        if (status === d++) {
          cm.sendNormalTalk("父亲，关于把菖蒲再派到浓姬那里当间谍的事情，您能再考虑一下吗？", 5, 9130124, false, true);
        } else {
          if (status === d++) {
            cm.sendNormalTalk("我……认为浓姬肯定不会相信的，菖蒲可能会有危险。", 5, 9130124, true, true);
          } else {
            if (status === d++) {
              cm.sendNormalTalk("信玄公和其他首领都极力主张菖蒲必须担任间谍的工作。", 5, 9130105, true, true);
            } else {
              if (status === d++) {
                cm.sendNormalTalk(" 而且，我也认为这是最好的办法。这不是你应该关心的事情。已经很晚了，你快回去睡觉吧。", 5, 9130105, true, true);
              } else {
                if (status === d++) {
                  cm.npc_SetForceMove("oid=538202119", -1, 600, 100);
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === d++) {
                    cm.npc_LeaveField("oid=538202119");
                    cm.npc_LeaveField("oid=538202119");
                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                  } else {
                    if (status === d++) {
                      cm.npc_ChangeController(9130106, "oid=538206870", 593, 169, 7, 543, 643, 1, true, 0, false);
                      cm.npc_SetSpecialAction("oid=538206870", "summon", 0, 0);
                      cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
                      cm.npc_SetForceMove("oid=538206870", -1, 50, 100);
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === d++) {
                        cm.sendNormalTalk_Illus_II("信包大人呢？走了？", 0, 5, false, true, 9130106);
                      } else {
                        if (status === d++) {
                          cm.sendNormalTalk_Illus_II("……抱歉。我没能守护你。", 0, 5, true, true, 9130124);
                        } else {
                          if (status === d++) {
                            cm.sendNormalTalk_Illus_II("不不，我知道信包大人也束手无策。因为我是浓姬的人。", 0, 5, true, true, 9130106);
                          } else {
                            if (status === d++) {
                              cm.sendNormalTalk_Illus_II("听说是同盟的其他将军怀疑我？哼，真是些可笑的老家伙。", 0, 5, true, true, 9130106);
                            } else {
                              if (status === d++) {
                                cm.sendNormalTalk_Illus_II("我没事，樱乃不要太担心了，嘿嘿。", 0, 5, true, true, 9130106);
                              } else {
                                if (status === d++) {
                                  cm.fieldEffect_InsertCanvas11(0, 0, 0, 0, 0, 0);
                                  cm.fieldEffect_InsertCanvas(1, 1, 255, 255, 255, 200, 0);
                                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(1600);
                                } else if (status === d++) {
                                  cm.warp(811000008, 0, false);
                                  cm.eventSKill(0);
                                  cm.setInGameDirectionMode(false, true, false);
                                  cm.npc_LeaveField("oid=538202120");
                                  cm.npc_LeaveField("oid=538202120");
                                  cm.npc_LeaveField("oid=538206870");
                                  cm.npc_LeaveField("oid=538206870");
                                  cm.forceCompleteQuest(58909);
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