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
      cm.fieldEffect_PlayBGM("Bgm55/WhiteNight", 0, 0);
      cm.npc_ChangeController(2570101, "oid=37998574", 276, 98, 2, 226, 326, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=37998574", 'summon', 0, 0);
      cm.npc_ChangeController(2570102, "oid=37998575", 557, 147, 3, 507, 607, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=37998575", "summon", 0, 0);
      cm.npc_ChangeController(2570103, "oid=37998576", 151, 146, 3, 101, 201, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=37998576", "summon", 0, 0);
      cm.npc_ChangeController(2570104, "oid=37998577", -16, 163, 5, -66, 34, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=37998577", "summon", 0, 0);
      cm.npc_ChangeController(2570105, "oid=37998578", 492, 116, 2, 442, 542, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=37998578", "summon", 0, 0);
      cm.npc_ChangeController(2570107, "oid=37998579", -101, 97, 5, -151, -51, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=37998579", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=37998579", "die", -1, 1);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -180, 150);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction25.img/Dlep6/ilust/9", 0, 2000, 0, 0, 0, 4, 1, -1, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(3000);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -160, 163);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face2#老师……对不起……我……", 36, 2570107, false, true, 1);
          cm.effect_Voice("Voice6.img/Library/prince/09-01-prince.mp3", 100);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("你不用说，我明白。", 56, 0, true, true, 1);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(1500);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face2#请你遵守当初的誓约……", 36, 2570107, false, true, 1);
                cm.effect_Voice("Voice6.img/Library/prince/09-03-prince.mp3", 100);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 2500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_ProcessOnOffLayer('01', "Effect/Direction25.img/Dlep6/ilust/4/6", 0, 1500, 0, 0, 10, 4, 1, -1, 0, 0, 0);
                      cm.fieldEffect_ProcessOnOffLayer('02', "Effect/Direction25.img/Dlep6/ilust/4/7", 0, 1500, 0, 0, 1, 4, 1, -1, 0, 0, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_ProcessOnOffLayer('03', "Effect/Direction25.img/Dlep6/ilust/4/0", 0, 1500, 0, 0, 11, 4, 1, -1, 0, 0, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("放心，我没忘。", 56, 0, false, true, 1);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_ProcessOnOffLayer('01', '', 2, 1500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                              cm.fieldEffect_ProcessOnOffLayer('02', '', 2, 1500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                              cm.fieldEffect_ProcessOnOffLayer('03', '', 2, 1500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(2500);
                            } else {
                              if (status === V++) {
                                cm.npc_SetSpecialAction("oid=37998579", "die2", -1, 1);
                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 394, 72);
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
                                        cm.inGameDirectionEvent_AskAnswerTime(5000);
                                        cm.effect_Text(["#fn黑体##fs26##r你们这群愚昧之人……", ''], [100, 2500, 4, 0, 0, 1, 4, 0, 0, 0, 0, 0]);
                                        cm.effect_Voice("Voice6.img/Library/elegoth/27-4-elegoth.1.mp3", 100);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_PushScaleInfo(300, 0, 2000, 300, -160, 163);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("……。", 56, 0, false, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_同时移动镜头和人(2, 500);
                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act1/sword2", 100);
                                                      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                    } else if (status === V++) {
                                                      cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                      cm.npc_LeaveField("oid=37998574");
                                                      cm.npc_LeaveField("oid=37998575");
                                                      cm.npc_LeaveField("oid=37998576");
                                                      cm.npc_LeaveField("oid=37998577");
                                                      cm.npc_LeaveField("oid=37998578");
                                                      cm.npc_LeaveField("oid=37998579");
                                                      cm.dispose();
                                                      cm.warp(308090010, 0, false);
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