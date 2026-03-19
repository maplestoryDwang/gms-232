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
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(3005102, "oid=621232", 1253, 300, 12, 1203, 1303, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=621232", "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 1279, 300);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.npc_SetForceMove("oid=621232", -1, 200, 100);
            cm.inGameDirectionEvent_AskAnswerTime(1500);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1500, 1000, 1018, 300);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#妈妈！就是那个哥哥！是那个哥哥帮了我！", 37, 3005115, false, true, 1);
                } else {
                  if (status === V++) {
                    cm.npc_ChangeController(3005115, 'oid=621243', 678, 300, 5, 628, 728, 0, true, 1000, false);
                    cm.npc_SetSpecialAction("oid=621243", "summon", 0, 0);
                    cm.npc_ChangeController(3005128, "oid=621244", 740, 300, 5, 690, 790, 1, false, 1000, false);
                    cm.npc_SetSpecialAction("oid=621244", "summon", 0, 0);
                    cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1500, 1000, 820, 300);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.npc_setForceFlip('oid=621244', 1);
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#……", 37, 3005102, false, true, 1);
                        } else {
                          if (status === V++) {
                            cm.npc_SetForceMove("oid=621232", 1, 15, 100);
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.npc_setForceFlip("oid=621244", 1);
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0# 格里！", 37, 3005128, false, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.npc_setForceFlip("oid=621232", -1);
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#听说你替我家孩子取下了风筝？", 37, 3005128, false, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#刚刚你那个叫啦啦的朋友帮了我。", 37, 3005128, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#其实我明白你也是个好人。", 37, 3005128, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#还有，去后巷错不在你。", 37, 3005128, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#从前为了看领主大人的眼色，我曾对年幼的你视而不见。", 37, 3005128, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#对不起。", 37, 3005128, true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#……", 37, 3005102, true, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
                                                  cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 1300, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#别担心，下次要是领主威胁你了，我一定会帮忙的。", 37, 3005100, false, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face4#选择相信别人并不愚蠢。", 37, 3005100, true, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_InsertCanvas11(0, 0, 0, 0, 0, 0);
                                                        cm.fieldEffect_InsertCanvas(1, 1, 255, 255, 255, 200, 0);
                                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（为什么这会儿会想起那句话。）", 37, 3005102, false, true, 1);
                                                        } else if (status === V++) {
                                                          cm.inGameDirectionEvent_SetHideEffect(0);
                                                          cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                          cm.setInGameDirectionMode(false, true, false);
                                                          cm.setStandAloneMode(false);
                                                          cm.npc_LeaveField('oid=621232');
                                                          cm.npc_LeaveField('oid=621243');
                                                          cm.npc_LeaveField("oid=621244");
                                                          cm.dispose();
                                                          cm.warp(993165519, 0, true);
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