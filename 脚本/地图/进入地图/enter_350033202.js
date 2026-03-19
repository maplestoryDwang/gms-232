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
      cm.forceStartQuest(33189, '');
      cm.forceCompleteQuest(33190);
      cm.updateInfoQuest(33188, "court=2;scoreR=3;scoreS=2;Tscore=30;kill=Noclear");
      cm.setAmbience("Ambience.img/flyingdeck", 100, 60);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -780, -100);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(50);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
          cm.inGameDirectionEvent_MoveAction(1);
          cm.inGameDirectionEvent_AskAnswerTime(10);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_MoveAction(0);
            cm.npc_ChangeController(1540458, "oid=22520862", -1450, -127, 1, -1500, -1400, 0, true, 0, false);
            cm.npc_SetSpecialAction("oid=22520862", "summon", 0, 0);
            cm.npc_ChangeController(1540450, "oid=22520863", -1450, -127, 1, -1500, -1400, 0, true, 0, false);
            cm.npc_SetSpecialAction("oid=22520863", "summon", 0, 0);
            cm.npc_ChangeController(1540461, "oid=22520864", -1390, -220, 8, -1440, -1340, 0, true, 0, false);
            cm.npc_SetSpecialAction("oid=22520864", "summon", 0, 0);
            cm.npcMove(1540461, 0, 14, 0);
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1200);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1400);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushScaleInfo(2000, 2000, 2000, -1015, -100);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                } else {
                  if (status === V++) {
                    cm.npc_SetForceMove("oid=22520862", 1, 200, 100);
                    cm.npc_SetForceMove("oid=22520864", 1, 200, 100);
                    cm.inGameDirectionEvent_AskAnswerTime(4500);
                  } else {
                    if (status === V++) {
                      cm.npc_SetForceMove("oid=22520863", 1, 530, 100);
                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_PushScaleInfo(6000, 2000, 6000, -730, -100);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                        } else {
                          if (status === V++) {
                            cm.npc_setForceFlip("oid=22520862", -1);
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.npc_setForceFlip("oid=22520864", -1);
                              cm.inGameDirectionEvent_AskAnswerTime(4000);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0##h0#……", 37, 1540450, false, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#听说你要离开，这是真的吗？", 37, 1540450, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom('……', 57, 0, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#这件事不怪你。", 37, 1540450, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("只有我承担所有责任，联盟的纠纷才能暂时平息。", 57, 0, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0##h0#……我也不能抓住你不放。", 37, 1540450, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#但是……", 37, 1540450, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#希望你能待在我可以联络到你的地方。", 37, 1540450, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_MoveAction(2);
                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_PushScaleInfo(6000, 2000, 6000, -450, -100);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                          } else if (status === V++) {
                                                            cm.dispose();
                                                            cm.warp(350033203, 0, true);
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
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;