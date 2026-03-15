var status = -1;
var selectionLog = [];
function start(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -203, 115);
    } else {
      if (status === v++) {
        cm.onTeleport(0, 3, cm.getPlayer().getId(), -322, 210);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === v++) {
          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/missile2", 100);
          cm.inGameDirectionEvent_AskAnswerTime(500);
        } else {
          if (status === v++) {
            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/missile2", 100);
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === v++) {
              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1200);
            } else {
              if (status === v++) {
                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1400);
              } else {
                if (status === v++) {
                  cm.npc_ChangeController(3004854, "oid=2710821", 1259, 146, 6, 1209, 1309, 1, true, 0, false);
                  cm.npc_SetSpecialAction("oid=2710821", "summon", 0, 0);
                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/radionoise", 100);
                  cm.sendNormalTalk_Bottom("#face0#（嗞嗞）……。", 36, 3004861, false, true, 1);
                } else {
                  if (status === v++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("#face0#看！是不是感觉能修好？！", 36, 3004851, false, true, 1);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk_Bottom("你拷问无线电发射机是想干什么……。", 56, 0, true, true, 1);
                      } else {
                        if (status === v++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                        } else {
                          if (status === v++) {
                            cm.sendNormalTalk_Bottom('#face0#……。', 36, 3004854, false, true, 1);
                          } else {
                            if (status === v++) {
                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === v++) {
                                cm.inGameDirectionEvent_PushScaleInfo(1500, 0, 1000, 1500, 1151, 115);
                              } else {
                                if (status === v++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(2200);
                                } else {
                                  if (status === v++) {
                                    cm.sendNormalTalk_Bottom("#face0#……。", 36, 3004854, false, true, 1);
                                  } else {
                                    if (status === v++) {
                                      cm.sendNormalTalk_Bottom("#face3#叫什么呢？", 36, 3004851, true, true, 1);
                                    } else {
                                      if (status === v++) {
                                        cm.sendNormalTalk_Bottom("会不会是说不要毁坏无线电发射机？", 56, 0, true, true, 1);
                                      } else {
                                        if (status === v++) {
                                          cm.sendNormalTalk_Bottom("#face1#……。", 36, 3004851, true, true, 1);
                                        } else {
                                          if (status === v++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                          } else {
                                            if (status === v++) {
                                              cm.sendNormalTalk_Bottom("#face1#那个手势信号……好像是叫我们过去。", 36, 3004851, false, true, 1);
                                            } else {
                                              if (status === v++) {
                                                cm.sendNormalTalk_Bottom("#face3#说来那艘潜水艇……", 36, 3004851, true, true, 1);
                                              } else {
                                                if (status === v++) {
                                                  cm.inGameDirectionEvent_PushScaleInfo(1500, 0, 1000, 1500, -203, 115);
                                                } else {
                                                  if (status === v++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                  } else {
                                                    if (status === v++) {
                                                      cm.sendNormalTalk_Bottom("#face3#会不会是海蜇号？", 36, 3004851, false, true, 1);
                                                    } else {
                                                      if (status === v++) {
                                                        cm.sendNormalTalk_Bottom("#face3#那么，那里头应该也有无线电发射机……。", 36, 3004851, true, true, 1);
                                                      } else {
                                                        if (status === v++) {
                                                          cm.sendNormalTalk_Bottom("！！！", 56, 0, true, true, 1);
                                                        } else {
                                                          if (status === v++) {
                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                          } else if (status === v++) {
                                                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                            cm.npc_LeaveField("oid=2710821");
                                                            cm.dispose();
                                                            cm.warp(993185016, 0, false);
                                                            cm.setInGameDirectionMode(false, true, false);
                                                            cm.setStandAloneMode(false);
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
function stage0(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.askYesNo("");
    } else if (status == v++) {
      cm.forceStartQuest();
      cm.dispose();
    }
  }
}
function end(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      var e = cm.getQuest();
      cm.askYesNo("");
    } else if (status == v++) {
      cm.forceCompleteQuest();
      cm.dispose();
    }
  }
}