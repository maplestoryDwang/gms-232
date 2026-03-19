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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(9111003, "oid=47004973", 352, -47, 22, 302, 402, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=47004973", "summon", 0, 0);
        cm.npc_ChangeController(9111005, "oid=47004974", 683, -47, 21, 633, 733, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=47004974", "summon", 0, 0);
        cm.inGameDirectionEvent_PushScaleInfo(900, 0, 1800, 1000, 470, -28);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#终于让我等到可以手刃你的一天了。", 37, 9111005, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#喂，无头鬼，我不是来跟你打架的。有话我们好好说。", 37, 9111003, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#哼！废话少说！你肯定又想用花言巧语来为自己开脱。", 37, 9111005, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#我什么时候花言巧语过，不要胡说！", 37, 9111003, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#闭嘴！我要杀了你！", 37, 9111005, true, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.npc_SetForceMove("oid=47004974", -1, 50, 200);
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_Tremble(0, 5000, 30);
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1500, 0);
                            cm.sendNormalTalk_Bottom("#face0#镰鼬你这狡猾的死黄鼠狼！你做了什么。", 37, 9111005, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#我没有啊？", 37, 9111003, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("呃，突然觉……好困……", 57, 0, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#镰……鼬……", 37, 9111005, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#不……是……我干的…… ", 37, 9111003, true, true);
                                  } else if (status === V++) {
                                    cm.warp(800021116, 0, false);
                                    cm.npc_LeaveField("oid=47004973");
                                    cm.npc_LeaveField("oid=47004973");
                                    cm.npc_LeaveField("oid=47004974");
                                    cm.npc_LeaveField("oid=47004974");
                                    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                    cm.eventSKill(0);
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