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
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -2400, -100);
      } else {
        if (status === V++) {
          cm.npc_ChangeController(2155104, "oid=42488344", -2540, -210, 16, -2590, -2490, 1, true, 0, false);
          cm.npc_SetSpecialAction("oid=42488344", "summon", 0, 0);
          cm.npc_setForceFlip("oid=42488344", 1);
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
          cm.inGameDirectionEvent_AskAnswerTime(2500);
          cm.spawnMobLimit(8250030, 1, -550, 60, 100);
          cm.spawnMobLimit(8250030, 1, -600, 60, 100);
          cm.spawnMobLimit(8250030, 1, -650, 60, 100);
          cm.spawnMobLimit(8250030, 1, -700, 60, 100);
          cm.spawnMobLimit(8250030, 1, -1550, 60, 100);
          cm.spawnMobLimit(8250030, 1, -1600, 60, 100);
          cm.spawnMobLimit(8250030, 1, -1650, 60, 100);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=42488344"], [0, 0, 0, 1, 0, 1, 0, 0]);
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 300, -1600, -50);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(300);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 1400, -1550, -50);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 300, -600, -50);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(300);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 800, -550, -50);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(800);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 300, 600, -50);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(300);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_PushScaleInfo(1500, 0, 1300, 1500, 750, -50);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(3500);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -2300, -50);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(100);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_PushMoveInfo(1, 2000, 0, 0);
                                        } else {
                                          if (status === V++) {
                                            cm.cameraSwitch_CameraSwitchBack();
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("嗯…事已至此，我不能回去。", 37, 2155104, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#奇怪，怎么感觉越走越不熟悉了。\r\n小软柿啊，拜托了。一定要突破才行。", 37, 2155121, true, true);
                                                cm.spawnMobLimit(8250030, 1, -733, 60, 100);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.npc_LeaveField("oid=42488344");
                                                    cm.npc_LeaveField("oid=42488344");
                                                    cm.inGameDirectionEvent_SetHideEffect(0);
                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 500, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                  } else if (status === V++) {
                                                    cm.eventSKill(0);
                                                    cm.setInGameDirectionMode(false, true, false);
                                                    cm.getTopMsgFont("消灭所有超级人造人, 前往尽头处吧. ", 3, 20, 20, 0, 0);
                                                    cm.addPopupSay(2155121, 3000, "#face0#我在里面藏身！你把敌人全部消灭. 拜托你了. ", '', 0);
                                                    cm.spawnMobLimit(8250030, 1, 36, 60, 100);
                                                    cm.spawnMobLimit(8250030, 1, -268, 60, 100);
                                                    cm.spawnMobLimit(8250030, 1, -30, 60, 100);
                                                    cm.spawnMobLimit(8250030, 1, 323, 60, 100);
                                                    cm.spawnMobLimit(8250030, 1, 928, 60, 100);
                                                    cm.spawnMobLimit(8250030, 1, 1084, 60, 100);
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
            }
          }
        }
      }
    }
  }
}