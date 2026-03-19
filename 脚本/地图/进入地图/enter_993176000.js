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
      cm.npc_ChangeController(3004660, "oid=123178448", -720, -20, 101, -770, -670, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=123178448", "summon", 0, 0);
      cm.npc_ChangeController(3004661, "oid=123178449", -800, -20, 101, -850, -750, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=123178449", 'summon', 0, 0);
      cm.npc_ChangeController(3004659, "oid=123178450", -392, -30, 101, -442, -342, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=123178450", 'summon', 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -604, 0);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1500);
      } else {
        if (status === V++) {
          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/radionoise", 100);
          cm.sendNormalTalk_Bottom("#face0#贝……唧……尔……", 36, 3004662, false, true, 1);
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
                cm.inGameDirectionEvent_AskAnswerTime(1500);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#好像是人的声音……也好像只是杂音……", 36, 3004660, false, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#电波好像已经消失了。", 36, 3004661, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#这是从哪里漂来的呢？", 36, 3004660, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#如果是顺流漂下来的，也许是……", 36, 3004659, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#那边那座城市。", 36, 3004659, false, true, 1);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 6284, -163);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
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
                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("（是从好友世界吸过来的城市吗？\r\n没想到居然有那种地方。）", 56, 0, false, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#最近从那里过来的河水流量突然变小了很多。", 36, 3004660, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#难道是出了什么事？", 36, 3004661, true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                } else if (status === V++) {
                                                  cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                  cm.warp(450001000, 1, true);
                                                  cm.setInGameDirectionMode(false, true, false);
                                                  cm.setStandAloneMode(false);
                                                  cm.forceCompleteQuest(37601);
                                                  cm.gainExp(8782820);
                                                  cm.npc_LeaveField("oid=123178448");
                                                  cm.npc_LeaveField("oid=123178449");
                                                  cm.npc_LeaveField("oid=123178450");
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