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
      cm.npc_ChangeController(3003659, 'oid=276012', 766, 29, 2, 716, 816, 1, true, 0, false);
      cm.npc_ChangeController(3003659, 'oid=276013', 1039, 29, 2, 989, 1089, 1, true, 0, false);
      cm.npc_ChangeController(3003659, "oid=276014", 860, 29, 2, 810, 910, 1, true, 0, false);
      cm.npc_ChangeController(3003659, 'oid=276015', 950, 29, 2, 900, 1000, 1, true, 0, false);
      cm.npc_ChangeController(3003659, "oid=276016", 1138, 29, 2, 1088, 1188, 1, true, 0, false);
      cm.npc_ChangeController(3003659, "oid=276017", 1234, 29, 2, 1184, 1284, 1, true, 0, false);
      cm.npc_ChangeController(3003659, "oid=276018", 1329, 29, 2, 1279, 1379, 1, true, 0, false);
      cm.npc_ChangeController(3003659, 'oid=276019', -573, 58, 10, -623, -523, 0, true, 0, false);
      cm.npc_ChangeController(3003659, "oid=276020", -665, 58, 10, -715, -615, 0, true, 0, false);
      cm.npc_ChangeController(3003659, "oid=276021", -754, 58, 9, -804, -704, 0, true, 0, false);
      cm.npc_ChangeController(3003659, "oid=276022", -851, 58, 9, -901, -801, 0, true, 0, false);
      cm.npc_ChangeController(3003659, "oid=276023", -951, 58, 9, -1001, -901, 0, true, 0, false);
      cm.npc_ChangeController(3003659, "oid=276024", -1055, 58, 9, -1105, -1005, 0, true, 0, false);
      cm.npc_ChangeController(3003659, 'oid=276025', -484, 58, 10, -534, -434, 0, true, 0, false);
      cm.npc_ChangeController(3003635, 'oid=276026', 150, 58, 11, 100, 200, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -3, 56);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 900, 0, 1000, -120);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushScaleInfo(5000, 0, 1500, 5000, 100, 55);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(6000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#联盟证物是相互信任和直面邪恶的勇气的象征。\r\n那是联盟在经历了无数难关之后仍然坚守的价值。", 37, 3003656, false, true);
            } else {
              if (status === V++) {
                cm.fieldEffect_ProcessOnOffLayer('03', "Effect/Direction20.img/effect/BMPre_night/3", 0, 500, 0, -80, 1, 4, 1);
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face4#身为对联盟的信任和勇气负责的指挥官，\r\n我将会以必死的决心站在战场之上。", 37, 3003656, false, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_ProcessOnOffLayer('03', '', 2, 300, 0, 0, 0, 0, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.npc_ChangeController(3003651, "oid=2201563", -1015, 50, 9, -1065, -965, 0, true, 0, false);
                        cm.npc_SetSpecialAction("oid=2201563", 'summon', 0, 0);
                        cm.npc_SetForceMove("oid=2201563", 1, 750, 150);
                        cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(300);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -1100, 55);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(300);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_PushScaleInfo(6000, 0, 1500, 6000, 100, 55);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(7000);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#女皇陛下，联盟的所有舰队都已经准备好了。\r\n现在就等着白色之矛发出出征信号了。", 37, 3003651, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_LeaveField("oid=2201563");
                                          cm.npc_LeaveField("oid=2201563");
                                          cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                              } else {
                                                if (status === V++) {
                                                  cm.setStandAloneMode(false);
                                                  cm.setInGameDirectionMode(false, true, false);
                                                  cm.forceStartQuest(35610, '');
                                                  cm.forceCompleteQuest(35610);
                                                  cm.gainExp(85793345);
                                                  cm.updateInfoQuest(35611, "d30=1;d74=1;medal=1");
                                                  cm.npc_ChangeController(3003651, "oid=2201564", -165, 50, 11, -215, -115, 0, true, 0, false);
                                                  cm.npc_SetSpecialAction("oid=2201564", "summon", 0, 0);
                                                  cm.curNodeEventEnd(true);
                                                  cm.setInGameDirectionMode(true, false, true);
                                                  cm.setStandAloneMode(true);
                                                  cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
                                                  cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction20.img/effect/BMPre_Cygnus/0", 0, 1000, 0, 0, 1, 4, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_ProcessOnOffLayer('01', "Effect/Direction20.img/effect/BMPre_Cygnus/1", 0, 1000, 0, 0, 1, 4, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#这里是白色之矛。全体舰队请注意。\r\n现在我们舰队即将开赴黑魔法师的老巢。", 37, 3003656, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#之前我们齐心协力，度过了无数的难关。\r\n不管经历何种考验，我们坚守的价值都不会褪色。", 37, 3003656, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face4#请不要忘记，未来需要用我们的双手去创造。\r\n我们一定可以守护好这里，守护好我们的家园。", 37, 3003656, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 1000, 0, 0, 0, 0, 0);
                                                                  cm.fieldEffect_ProcessOnOffLayer('01', '', 2, 1000, 0, 0, 0, 0, 0);
                                                                  cm.playVideoByScript("BM1_story2.avi");
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
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                          cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                        } else if (status === V++) {
                                                                          cm.npc_LeaveField("oid=2201564");
                                                                          cm.npc_LeaveField("oid=2201564");
                                                                          cm.dispose();
                                                                          cm.warp(993060034, 0, false);
                                                                          cm.setStandAloneMode(false);
                                                                          cm.setInGameDirectionMode(false, true, false);
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
            }
          }
        }
      }
    }
  }
}