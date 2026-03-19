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
      cm.setInGameDirectionMode(true, true, false);
      cm.npc_ChangeController(3000107, "oid=1053307", -2950, 20, 5, -3000, -2900, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=1053307", 'summon', 0, 0);
      cm.sendNormalTalk("狂龙战士，我还是觉得不妥，我要跟你一起去。除了我，万神殿里还有很多值得信赖的人。", 1, 3000107, false, true);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_PushMoveInfo(0, 300, -2150, 20);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(30);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_MoveAction(1);
            cm.inGameDirectionEvent_AskAnswerTime(30);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_MoveAction(0);
              cm.inGameDirectionEvent_AskAnswerTime(356);
            } else {
              if (status === V++) {
                cm.npc_SetForceMove("oid=1053307", 1, 200, 100);
                cm.inGameDirectionEvent_AskAnswerTime(416);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_MoveAction(1);
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction9.img/effect/tuto/BalloonMsg1/1"], [0, 0, -120, 0, 0, 0, 0, 0, 0]);
                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_PushMoveInfo(0, 600, -1200, 29);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_MoveAction(2);
                        cm.inGameDirectionEvent_AskAnswerTime(30);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_MoveAction(0);
                          cm.inGameDirectionEvent_AskAnswerTime(1553);
                        } else {
                          if (status === V++) {
                            cm.spawnMobLimit(9300545, 1, -1600, 29, 100);
                            cm.inGameDirectionEvent_AskAnswerTime(150);
                          } else {
                            if (status === V++) {
                              cm.spawnMobLimit(9300546, 1, -1500, 29, 100);
                              cm.inGameDirectionEvent_AskAnswerTime(150);
                            } else {
                              if (status === V++) {
                                cm.spawnMobLimit(9300545, 1, -1400, 29, 100);
                                cm.inGameDirectionEvent_AskAnswerTime(150);
                              } else {
                                if (status === V++) {
                                  cm.spawnMobLimit(9300546, 1, -1300, 29, 100);
                                  cm.inGameDirectionEvent_AskAnswerTime(150);
                                } else {
                                  if (status === V++) {
                                    cm.spawnMobLimit(9300545, 1, -1200, 29, 100);
                                    cm.inGameDirectionEvent_AskAnswerTime(150);
                                  } else {
                                    if (status === V++) {
                                      cm.spawnMobLimit(9300546, 1, -1100, 29, 100);
                                      cm.inGameDirectionEvent_AskAnswerTime(150);
                                    } else {
                                      if (status === V++) {
                                        cm.spawnMobLimit(9300545, 1, -1000, 29, 100);
                                        cm.inGameDirectionEvent_AskAnswerTime(150);
                                      } else {
                                        if (status === V++) {
                                          cm.spawnMobLimit(9300546, 1, -900, 29, 100);
                                          cm.inGameDirectionEvent_AskAnswerTime(150);
                                        } else {
                                          if (status === V++) {
                                            cm.spawnMobLimit(9300546, 1, -800, 29, 100);
                                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(0);
                                            } else if (status === V++) {
                                              cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                              cm.setInGameDirectionMode(false, true, false);
                                              cm.fieldEffect_ScreenMsg("lightning/screenMsg/0");
                                              cm.updateInfoQuest(65585, '');
                                              cm.spawnMobLimit(9300545, 1, -875, 29, 100);
                                              cm.spawnMobLimit(9300546, 1, -1068, 29, 100);
                                              cm.spawnMobLimit(9300546, 1, -995, 29, 100);
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