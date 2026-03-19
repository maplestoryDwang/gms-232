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
      cm.updateInfoQuest(61333, "act1=610061570;act2=610062450;act3=610063590;act4=610064090");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(9201536, "oid=2745517", -173, 273, 9, -223, -123, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2745517", "summon", 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -280, 300);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1200);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("我们必须协助绯红之心。\r\n其他人都去哪了？", 37, 9201536, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("我没看到我们的战友，除了努曼纳尔。\r\n这让我有点担心了。", 37, 9201536, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom('努曼纳尔在哪？', 57, 0, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("他在城堡的入口那儿，抵御着来犯的军队。", 37, 9201536, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("利瑞尼……", 57, 0, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom('怎么了，朋友？', 37, 9201536, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("啊，没事。\r\n我想他们应该都在各自战斗吧……", 57, 0, true, true);
                        } else {
                          if (status === V++) {
                            cm.npc_ChangeController(9201566, "oid=2745640", -580, 273, 4, -630, -530, 0, true, 0, false);
                            cm.npc_SetSpecialAction("oid=2745640", 'summon', 0, 0);
                            cm.npc_ChangeController(9201567, "oid=2745641", -590, 273, 4, -640, -540, 0, true, 0, false);
                            cm.npc_SetSpecialAction("oid=2745641", "summon", 0, 0);
                            cm.npc_ChangeController(9201566, "oid=2745642", -620, 273, 4, -670, -570, 0, true, 0, false);
                            cm.npc_SetSpecialAction("oid=2745642", 'summon', 0, 0);
                            cm.npc_ChangeController(9201567, "oid=2745643", -650, 273, 11, -700, -600, 0, true, 0, false);
                            cm.npc_SetSpecialAction("oid=2745643", 'summon', 0, 0);
                            cm.inGameDirectionEvent_ForcedFlip(-1);
                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("可恶，我们没时间对付这些杂兵了！", 37, 9201536, false, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(2200);
                              } else if (status === V++) {
                                cm.eventSKill(0);
                                cm.warp(610064095, 0, true);
                                cm.setInGameDirectionMode(false, true, false);
                                cm.npc_LeaveField("oid=2745517");
                                cm.npc_LeaveField("oid=2745517");
                                cm.npc_LeaveField("oid=2745640");
                                cm.npc_LeaveField("oid=2745640");
                                cm.npc_LeaveField("oid=2745641");
                                cm.npc_LeaveField("oid=2745641");
                                cm.npc_LeaveField("oid=2745642");
                                cm.npc_LeaveField("oid=2745642");
                                cm.npc_LeaveField("oid=2745643");
                                cm.npc_LeaveField("oid=2745643");
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