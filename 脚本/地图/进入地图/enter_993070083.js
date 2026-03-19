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
      cm.npc_ChangeController(3003659, "oid=277984", 708, -422, 14, 673, 708, 1, true, 0, false);
      cm.npc_ChangeController(3003659, "oid=277985", 783, -422, 28, 743, 833, 1, true, 0, false);
      cm.npc_ChangeController(3003659, "oid=277986", 863, -422, 28, 813, 871, 1, true, 0, false);
      cm.npc_ChangeController(3003659, "oid=277987", 936, -422, 15, 911, 986, 1, true, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_PlayBGM("Bgm00/Silence", 0, 0);
      cm.npc_ChangeController(3003750, "oid=2273612", 500, -622, 23, 450, 550, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2273612", "summon", 0, 0);
      cm.npc_ChangeController(3003694, "oid=2273613", 600, -622, 23, 550, 650, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2273613", "summon", 0, 0);
      cm.npc_ChangeController(3003698, "oid=2273614", 700, -622, 27, 650, 750, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2273614", 'summon', 0, 0);
      cm.npc_ChangeController(3003696, "oid=2273615", 770, -622, 27, 720, 820, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2273615", "summon", 0, 0);
      cm.npc_ChangeController(3003695, "oid=2273616", 840, -622, 24, 790, 890, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2273616", 'summon', 0, 0);
      cm.npc_ChangeController(3003697, "oid=2273617", 910, -622, 24, 860, 960, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2273617", 'summon', 0, 0);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 329, -3652);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(4500);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#时机到了。", 37, 3003750, false, true);
          cm.effect_Voice("Voice4.img/BM3/sig/30", 128);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.OverlapScreenDetail19(0, 1000, 3000, 1);
              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 329, -498);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(300);
              } else {
                if (status === V++) {
                  cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#所有舰队全部撤退。然后……", 37, 3003750, false, true);
                    cm.effect_Voice("Voice4.img/BM3/sig/31", 128);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_PlayBGM("Bgm49/FerociousBattlefield_RiserEdit", 0, 0);
                      cm.sendNormalTalk_Bottom("#face0#旗舰突击。", 37, 3003750, true, true);
                      cm.effect_Voice("Voice4.img/BM3/sig/40", 128);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#麻烦你为我们殿后，吉格蒙特。", 37, 3003750, false, true);
                          cm.effect_Voice("Voice4.img/BM3/sig/41", 128);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face3#明白了，女皇陛下。", 37, 3003672, true, true);
                            cm.effect_Voice("Voice4.img/BM3/zig/17", 128);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face3#将白色之矛的非战斗人员全部传送到本舰！", 37, 3003672, true, true);
                              cm.effect_Voice("Voice4.img/BM3/zig/21", 128);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                              } else {
                                if (status === V++) {
                                  cm.npc_SetSpecialAction("oid=2273612", "attack", 0, 1);
                                  cm.sendNormalTalk_Bottom("#face3#白色之矛全速前进！冲向巨人心脏！", 37, 3003750, false, true);
                                  cm.effect_Voice("Voice4.img/BM3/sig/45", 128);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face3#我们将化身成刺穿神的长枪！", 37, 3003750, false, true);
                                      cm.effect_Voice("Voice4.img/BM3/sig/46", 128);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/victoryshout", 100);
                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_PlayBGM("Bgm00/Silence", 0, 0);
                                          cm.playVideoByScript("BM3_story.avi");
                                        } else if (status === V++) {
                                          cm.npc_LeaveField("oid=2273612");
                                          cm.npc_LeaveField("oid=2273612");
                                          cm.npc_LeaveField("oid=2273613");
                                          cm.npc_LeaveField("oid=2273613");
                                          cm.npc_LeaveField("oid=2273614");
                                          cm.npc_LeaveField("oid=2273614");
                                          cm.npc_LeaveField("oid=2273615");
                                          cm.npc_LeaveField("oid=2273615");
                                          cm.npc_LeaveField("oid=2273616");
                                          cm.npc_LeaveField("oid=2273616");
                                          cm.npc_LeaveField("oid=2273617");
                                          cm.npc_LeaveField("oid=2273617");
                                          cm.dispose();
                                          cm.warp(993070084, 0, true);
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