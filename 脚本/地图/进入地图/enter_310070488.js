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
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1400, 0, 3930, 0);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(100);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushScaleInfo(2500, 0, 1500, 0, 3930, 0);
        } else {
          if (status === V++) {
            cm.npc_ChangeController(2155104, "oid=42484124", 3950, 0, 26, 3900, 4000, 1, true, 0, false);
            cm.npc_SetSpecialAction("oid=42484124", "summon", 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(2500);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 300, 3700, -500);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("你看到那个了吗？只要从那里进入就行了。", 37, 2155104, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("这尽头或许…连接着主机房。", 37, 2155104, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("主机房？", 57, 0, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("嗯。从这里走，应该能看到主机房。\r\n这些路我都记得。\r\n虽然我还不记得究竟发生了什么是事情…", 37, 2155104, true, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_PushMoveInfo(1, 2000, 0, 0);
                      } else {
                        if (status === V++) {
                          cm.cameraSwitch_CameraSwitchBack();
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.npc_setForceFlip("oid=42484124", 1);
                            cm.sendNormalTalk_Bottom("去看看应该就知道了。\r\n#b只要通过右边的梯子和管道爬上去就行了。#k\r\n注意点爬上去。", 37, 2155104, false, true);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                              if (status === V++) {
                                cm.npc_LeaveField("oid=42484124");
                                cm.npc_LeaveField("oid=42484124");
                                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                              } else {
                                if (status === V++) {
                                  cm.cameraSwitch_CameraSwitchBack();
                                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                } else if (status === V++) {
                                  cm.eventSKill(0);
                                  cm.setInGameDirectionMode(false, true, false);
                                  cm.setPartner(1, 2155104, 80001702, 0);
                                  cm.updateInfoQuest(39209, "enter=1");
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