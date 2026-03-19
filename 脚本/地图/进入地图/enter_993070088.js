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
      cm.npc_ChangeController(3003950, 'oid=277994', -946, 6, 1, -988, -896, 1, false, 0, false);
      cm.npc_ChangeController(3003970, "oid=277995", -54, 6, 2, -88, -4, 0, false, 0, false);
      cm.npc_ChangeController(3003751, "oid=277996", 50, 6, 2, 0, 100, 1, true, 0, false);
      cm.npc_ChangeController(3003672, "oid=277997", -156, 6, 1, -206, -128, 0, true, 0, false);
      cm.npc_ChangeController(3003673, "oid=277998", 138, 6, 2, 88, 188, 1, true, 0, false);
      cm.npc_ChangeController(3003674, 'oid=277999', -244, 6, 1, -294, -194, 0, true, 0, false);
      cm.npc_ChangeController(3003675, "oid=278000", -355, 6, 1, -405, -305, 0, true, 0, false);
      cm.npc_ChangeController(3003676, "oid=278001", -460, 6, 1, -510, -410, 0, true, 0, false);
      cm.npc_ChangeController(3003677, "oid=278002", -569, 6, 1, -619, -519, 0, true, 0, false);
      cm.npc_ChangeController(3003695, "oid=278003", 390, 6, 2, 340, 440, 1, false, 0, false);
      cm.npc_ChangeController(3003696, 'oid=278004', 487, 6, 2, 437, 537, 1, false, 0, false);
      cm.npc_ChangeController(3003697, "oid=278005", 297, 6, 2, 247, 347, 1, false, 0, false);
      cm.npc_ChangeController(3003698, "oid=278006", 217, 6, 2, 167, 267, 1, false, 0, false);
      cm.npc_ChangeController(3003659, "oid=278007", -735, 6, 1, -785, -685, 0, true, 0, false);
      cm.npc_ChangeController(3003660, "oid=278008", -654, 6, 1, -704, -604, 0, true, 0, false);
      cm.npc_ChangeController(3003661, "oid=278009", -833, 6, 1, -883, -783, 0, true, 0, false);
      cm.npc_ChangeController(3003914, "oid=278010", 667, 6, 2, 617, 717, 1, false, 0, false);
      cm.forceStartQuest(35814, '');
      cm.teachSkill(80002624, -1, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.fieldEffect_PlayBGM("Bgm49/FerociousBattlefield_ShortEdit", 0, 0);
      cm.sendNormalTalk_Bottom("#face7##h0#！！", 37, 3003750, false, true);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.onTeleport(0, 3, cm.getPlayer().getId(), 563, -20);
        cm.inGameDirectionEvent_ForcedFlip(-1);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.setInGameDirectionMode(false, true, false);
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.onTeleport(0, 3, cm.getPlayer().getId(), 0, -20);
              cm.inGameDirectionEvent_ForcedFlip(-1);
              cm.fieldEffect_Hero9(0, 3000);
              cm.inGameDirectionEvent_AskAnswerTime(2000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face7##h0#……", 37, 3003750, false, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("我回来了。", 57, 0, false, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                        cm.sendNormalTalk_Bottom("遵……遵命……", 57, 0, false, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction20.img/effect/BM3_end/0", 0, 2000, 0, -80, 2, 4, 0, -1, 0, 0, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face7#能回来就好。", 37, 3003750, false, true);
                                cm.effect_Voice("Voice4.img/BM3/sig/58", 128);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face8#你做得非常出色。", 37, 3003750, false, true);
                                    cm.effect_Voice("Voice4.img/BM3/sig/65", 128);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(4000);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#巨人倒下了！", 37, 3003759, false, true);
                                          cm.effect_Voice("Voice4.img/BM3/sol/19", 128);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom('！！', 57, 0, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_PlayBGM("Bgm49/FerociousBattlefield_ShortEdit", 0, 0);
                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(1400);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("真的耶，巨人……！", 57, 0, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#看样子他因为失去心脏，所以重新化成了艾尔达。", 37, 3003751, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#这意味着……？！", 37, 3003672, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face4#意味着战争结束了吧？", 37, 3003750, false, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/victoryshout", 100);
                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face4#伙伴们……准备返航吧。", 37, 3003750, false, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                } else if (status === V++) {
                                                                  cm.dispose();
                                                                  cm.warp(993070089, 0, true);
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