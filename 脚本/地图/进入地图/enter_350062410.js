var status = -1;
var selectionLog = [];
function action(s, L, d) {
  if (status == 0 && s == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = d;
  var O = -1;
  if (status <= O++) {
    cm.dispose();
  } else {
    if (status === O++) {
      cm.getMap().killAllMonsters(false);
      cm.npc_ChangeController(1540714, "oid=286539239", 3, 25, 4, -47, 53, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=286539239", "summon", 0, 0);
      cm.npc_ChangeController(1540717, "oid=286539240", 280, -40, 4, 230, 330, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=286539240", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_MoveAction(4);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, -90, -50);
      cm.curNodeEventEnd(true);
    } else {
      if (status === O++) {
        cm.setAmbience("Ambience.img/warning", 100, 60);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === O++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === O++) {
            cm.sendNormalTalk_Bottom("#face1#什么啊，这是怎么回事啊？！", 37, 1540470, false, true);
          } else {
            if (status === O++) {
              cm.sendNormalTalk_Bottom("#face1#该死！！！", 37, 1540470, true, true);
            } else {
              if (status === O++) {
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === O++) {
                  cm.playSoundEffDirectly("Ambience.img/warning");
                  cm.inGameDirectionEvent_MoveAction(0);
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === O++) {
                    cm.sendNormalTalk_Bottom("你的计划失败了，格里梅尔……", 57, 0, false, true);
                  } else {
                    if (status === O++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === O++) {
                        cm.sendNormalTalk_Bottom("哼！你还是先关心一下自己比较好吧？", 37, 1540470, false, true);
                      } else {
                        if (status === O++) {
                          cm.sendNormalTalk_Bottom("现在毒素应该已经扩散到你的全身了吧？", 37, 1540470, true, true);
                        } else {
                          if (status === O++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === O++) {
                              cm.inGameDirectionEvent_PushScaleInfo(1000, 2000, 1000, -50, 50);
                            } else {
                              if (status === O++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                              } else {
                                if (status === O++) {
                                  cm.sendNormalTalk_Bottom("解毒药就在这里，\r\n你来拿啊。", 37, 1540470, false, true);
                                } else {
                                  if (status === O++) {
                                    cm.npc_SetSpecialAction("oid=286539239", 'anti', 0, 1);
                                    cm.inGameDirectionEvent_AskAnswerTime(5410);
                                  } else {
                                    if (status === O++) {
                                      cm.sendNormalTalk_Bottom("你只要战胜我，就能获得解毒药。", 37, 1540470, false, true);
                                    } else {
                                      if (status === O++) {
                                        cm.sendNormalTalk_Bottom("用你那虚弱的身体来尝试一下吧！", 37, 1540470, true, true);
                                      } else {
                                        if (status === O++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else {
                                          if (status === O++) {
                                            cm.npc_LeaveField("oid=286539239");
                                            cm.npc_LeaveField("oid=286539239");
                                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                          } else if (status === O++) {
                                            cm.spawnMobLimit(8240106, 1, 3, 66, 1);
                                            cm.setInGameDirectionMode(false, true, false);
                                            cm.npc_LeaveField("oid=286539240");
                                            cm.npc_LeaveField("oid=286539240");
                                            cm.dispose();
                                            cm.scheduleWarpTask(30, 350062500, 0, false);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;