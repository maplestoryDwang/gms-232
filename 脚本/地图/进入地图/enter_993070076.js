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
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.userSetFieldFloating(993070076, 0, 0, 0);
      cm.npc_ChangeController(3003913, "oid=2180605", 188, -100, 2, 138, 238, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2180605", 'summon', 0, 0);
      cm.npc_ChangeController(3003902, "oid=2180606", -200, -100, 2, -250, -150, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2180606", "summon", 0, 0);
      cm.Npc_Fadeout("oid=2180606", 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -350, -70);
      cm.inGameDirectionEvent_AskAnswerTime(300);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -140, -82);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_ForcedFlip(1);
          cm.Hidden_background("993070020_tag", 1, 1, 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(300);
        } else {
          if (status === V++) {
            cm.userSetFieldFloating(993070076, 3, 3, 30);
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1200);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1400);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#可恶……\r\n不过就算你们过了这关，也逃不过消亡之光……", 37, 3003913, false, true);
              } else {
                if (status === V++) {
                  cm.npc_SetSpecialAction("oid=2180605", 'die1', 1, 1);
                  cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8645009/Die", 100);
                  cm.inGameDirectionEvent_AskAnswerTime(3500);
                } else {
                  if (status === V++) {
                    cm.npc_LeaveField("oid=2180605");
                    cm.npc_LeaveField("oid=2180605");
                    cm.sendNormalTalk_Bottom("消亡之光？", 57, 0, false, true);
                  } else {
                    if (status === V++) {
                      cm.userSetFieldFloating(993070076, 10, 10, 3);
                      cm.setAmbience("SoundEff.img/BM3/egg2", 200, 60);
                      cm.inGameDirectionEvent_AskAnswerTime(400);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_MoveAction(4);
                        cm.inGameDirectionEvent_AskAnswerTime(400);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("咳！指的是这个吗？！", 57, 0, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("我动不了了……！", 57, 0, true, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1300);
                            } else {
                              if (status === V++) {
                                cm.npc_SetSpecialAction("oid=2180606", 'special1', 1, 1);
                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM3/LimenOrcaDown", 100);
                                cm.Npc_Fadeout("oid=2180606", 255, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(1300);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("奥尔卡！", 57, 0, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face1#快通知联盟！我们依然在路上，还没走出去！", 37, 3003902, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("什么……？", 57, 0, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom('等等，你该不是……？', 57, 0, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face1#我说过，我已经没什么可失去的了。", 37, 3003902, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.userSetFieldFloating(993070076, 10, 10, 3);
                                            cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 2000, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_头顶图片(["Map/Effect3.img/esfera/mystic"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/esfera/tel", 128);
                                              cm.sendNormalTalk_Bottom("奥尔卡！！", 56, 0, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_SetHideEffect(1);
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 300, 0);
                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM3/giant_wave", 100);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                } else if (status === V++) {
                                                  cm.npc_LeaveField("oid=2180606");
                                                  cm.npc_LeaveField("oid=2180606");
                                                  cm.dispose();
                                                  cm.warp(993070077, 0, true);
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