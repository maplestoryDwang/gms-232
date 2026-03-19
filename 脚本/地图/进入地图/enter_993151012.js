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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.npc_ChangeController(3004456, "oid=1133140", 737, -14, -1, 687, 787, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=1133140", "summon", 0, 0);
      cm.npc_ChangeController(3004435, "oid=1133141", 480, -62, -1, 430, 530, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=1133141", 'summon', 0, 0);
      cm.npc_SetSpecialAction("oid=1133140", 'special4', -1, 1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 748, -45);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face2#你们这帮异教徒竟敢……", 37, 3004456, false, true);
            cm.effect_Voice("Voice5.img/CH3/4_39", 128);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face2#喂，不信神者！！", 37, 3004456, true, true);
              cm.effect_Voice("Voice5.img/CH3/4_40", 128);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face2#你告诉塞伦。我很快会去把圣剑抢回来的。", 37, 3004456, true, true);
                cm.effect_Voice("Voice5.img/CH3/4_41", 128);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face1#我们也快点走吧。", 37, 3004435, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("可是还要回收证物……", 57, 0, true, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.npc_SetSpecialAction("oid=1133140", "special5", -1, 1);
                        cm.setAmbience("SoundEff.img/cernium3/magicStart", 200, 60);
                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1133141"], [0, 0, 0, 1, 0, 1, 0, 0]);
                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom('#face1#……', 37, 3004435, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom('……', 57, 0, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face1#还是不要靠近为好……", 37, 3004435, true, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.npc_ChangeController(3004465, "oid=1138484", 958, -14, -1, 908, 1008, 1, true, 1500, false);
                                    cm.npc_SetSpecialAction("oid=1138484", "summon", 0, 0);
                                    cm.npc_ChangeController(3004465, "oid=1138485", 1023, -14, -1, 973, 1073, 1, true, 1500, false);
                                    cm.npc_SetSpecialAction("oid=1138485", "summon", 0, 0);
                                    cm.npc_ChangeController(3004465, "oid=1138486", 1115, -14, -1, 1065, 1165, 1, true, 1500, false);
                                    cm.npc_SetSpecialAction("oid=1138486", "summon", 0, 0);
                                    cm.npc_ChangeController(3004465, "oid=1138487", 1209, -14, -1, 1159, 1259, 1, true, 1500, false);
                                    cm.npc_SetSpecialAction("oid=1138487", "summon", 0, 0);
                                    cm.npc_ChangeController(3004465, "oid=1138488", 1318, -14, -1, 1268, 1368, 1, true, 1500, false);
                                    cm.npc_SetSpecialAction("oid=1138488", "summon", 0, 0);
                                    cm.npc_ChangeController(3004465, "oid=1138489", 1422, -14, -1, 1372, 1472, 1, true, 1500, false);
                                    cm.npc_SetSpecialAction("oid=1138489", "summon", 0, 0);
                                    cm.npc_ChangeController(3004465, "oid=1138490", 1494, -14, -1, 1444, 1544, 1, true, 1500, false);
                                    cm.npc_SetSpecialAction("oid=1138490", "summon", 0, 0);
                                    cm.npc_ChangeController(3004465, "oid=1138491", 1560, -14, -1, 1510, 1610, 1, true, 1500, false);
                                    cm.npc_SetSpecialAction("oid=1138491", "summon", 0, 0);
                                    cm.npc_ChangeController(3004465, "oid=1138492", 1656, -14, -1, 1606, 1706, 1, true, 1500, false);
                                    cm.npc_SetSpecialAction("oid=1138492", 'summon', 0, 0);
                                    cm.npc_ChangeController(3004465, "oid=1138493", 2088, -14, -1, 2038, 2138, 1, true, 1500, false);
                                    cm.npc_SetSpecialAction("oid=1138493", "summon", 0, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1500, 1000, 1288, -45);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#快抓住他们！", 37, 3004465, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face1#来不及了。走吧！", 37, 3004435, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                            } else if (status === V++) {
                                              cm.eventSKill(0);
                                              cm.warp(993151010, 0, false);
                                              cm.npc_LeaveField("oid=1133140");
                                              cm.npc_LeaveField("oid=1133140");
                                              cm.npc_LeaveField("oid=1133141");
                                              cm.npc_LeaveField("oid=1133141");
                                              cm.npc_LeaveField("oid=1138484");
                                              cm.npc_LeaveField("oid=1138484");
                                              cm.npc_LeaveField("oid=1138485");
                                              cm.npc_LeaveField("oid=1138485");
                                              cm.npc_LeaveField("oid=1138486");
                                              cm.npc_LeaveField("oid=1138486");
                                              cm.npc_LeaveField("oid=1138487");
                                              cm.npc_LeaveField("oid=1138487");
                                              cm.npc_LeaveField("oid=1138488");
                                              cm.npc_LeaveField("oid=1138488");
                                              cm.npc_LeaveField("oid=1138489");
                                              cm.npc_LeaveField("oid=1138489");
                                              cm.npc_LeaveField("oid=1138490");
                                              cm.npc_LeaveField("oid=1138490");
                                              cm.npc_LeaveField("oid=1138491");
                                              cm.npc_LeaveField("oid=1138491");
                                              cm.npc_LeaveField("oid=1138492");
                                              cm.npc_LeaveField("oid=1138492");
                                              cm.npc_LeaveField("oid=1138493");
                                              cm.npc_LeaveField("oid=1138493");
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