var status = -1;
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  status++;
  if (!cm.isQuestFinished(35619)) {
    action1(f, E, e);
  } else if (cm.isQuestFinished(35619)) {
    action2(f, E, e);
  } else {
    cm.dispose();
  }
}
function action1(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.npc_ChangeController(3003616, "oid=275858", -642, 300, 1, -692, -592, 1, false, 0, false);
      cm.npc_ChangeController(3003660, "oid=275859", -185, 300, 1, -235, -135, 5, true, 0, false);
      cm.npc_ChangeController(3003660, 'oid=275860', -522, 300, 1, -572, -472, 5, true, 0, false);
      cm.npc_ChangeController(3003660, "oid=275861", -458, 300, 1, -508, -408, 5, true, 0, false);
      cm.npc_ChangeController(3003660, 'oid=275862', -394, 300, 1, -444, -344, 5, true, 0, false);
      cm.npc_ChangeController(3003660, "oid=275863", -325, 300, 1, -375, -275, 5, true, 0, false);
      cm.npc_ChangeController(3003660, 'oid=275864', -258, 300, 1, -308, -208, 5, true, 0, false);
      cm.forceCompleteQuest(35157);
      cm.userSetFieldFloating(993060048, 0, 20, 1000);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.setAmbience("Ambience.img/gravity", 80, 100);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.userSetFieldFloating(993060048, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(500);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -830, 255);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.userSetFieldFloating(993060048, 0, 20, 1000);
            cm.sendNormalTalk_Bottom("#face0#大部分的舰船好像都顺利变换了队形。\r\n呼……但愿能安全地通过迷雾……", 37, 3003660, false, true);
          } else {
            if (status === V++) {
              cm.forceStartQuest(35157, '');
              cm.inGameDirectionEvent_AskAnswerTime(1000);
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
                      cm.sendNormalTalk_Bottom("#face0#……但为什么雾气好像变得更浓了呢？\r\n#b#ho##k……真的不会出什么事吗？", 37, 3003660, false, true);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion1", 100);
                        cm.userSetFieldFloating(993060048, 10, 10, 10);
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.userSetFieldFloating(993060048, 0, 0, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.userSetFieldFloating(993060048, 0, 20, 1000);
                            cm.setAmbience("Ambience.img/warning", 50, 100);
                            cm.sendNormalTalk_Bottom("#face0#呃……周围好像发生了剧烈的碰撞。\r\n呃……但是被雾气遮挡，完全看不到。", 37, 3003660, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#快，快……和周围其他舰队联，联系……", 37, 3003660, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#周，周围发生了大碰撞！！\r\n如果有舰船受损，请回答！！", 37, 3003660, true, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.userSetFieldFloating(993060048, 0, 0, 0);
                                    cm.inGameDirectionEvent_PushScaleInfo(10000, 0, 1000, 10000, -830, -438);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ark/noise_start", 100);
                                        cm.sendNormalTalk_Bottom("叽……叽叽……巨大的……锁链……叽……", 37, 3003685, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ark/noise_loop", 100);
                                          cm.sendNormalTalk_Bottom("缠住……无法……摆脱……叽叽……叽叽叽……。", 37, 3003685, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act4/evilS_dem", 100);
                                            cm.sendNormalTalk_Bottom("（咦……那是！？沉重的锁链拖住了舰船。\r\n危险……必须马上去救他们！）", 57, 0, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#听不清楚！！！发生了什么问题！！！！", 37, 3003660, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ark/noise_loop", 100);
                                                cm.sendNormalTalk_Bottom("叽……叽叽……这里危险……", 37, 3003685, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#是，是诺巴阵营的舰船。好像在靠近这里的时候\r\n出了什么问题……", 37, 3003660, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.userSetFieldFloating(993060048, 0, 50, 1000);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.userSetFieldFloating(993060048, 0, 0, 0);
                                                        cm.inGameDirectionEvent_PushScaleInfo(10000, 0, 1000, 10000, 830, -438);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act4/bm3", 100);
                                                          cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.gainExp(171586691);
                                                                cm.updateInfoQuest(35611, "d5=1;d6=1;mPark75=1;d30=1;d46=1;d74=1;medal=1;d48=1;d1=1;d4=1");
                                                                cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                                              } else if (status === V++) {
                                                                cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                cm.forceCompleteQuest(35157);
                                                                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                cm.dispose();
                                                                cm.warp(993060048, 0, false);
                                                                cm.setStandAloneMode(false);
                                                                cm.setInGameDirectionMode(false, true, false);
                                                                cm.forceStartQuest(35619, '');
                                                                cm.forceCompleteQuest(35619);
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
function action2(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else if (status === V++) {
    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0);
    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 250);
    cm.npc_ChangeController(3003616, "oid=275858", -642, 300, 1, -692, -592, 1, false, 0, false);
    cm.npc_ChangeController(3003660, "oid=275859", -185, 300, 1, -235, -135, 5, true, 0, false);
    cm.npc_ChangeController(3003660, "oid=275860", -522, 300, 1, -572, -472, 5, true, 0, false);
    cm.npc_ChangeController(3003660, "oid=275861", -458, 300, 1, -508, -408, 5, true, 0, false);
    cm.npc_ChangeController(3003660, "oid=275862", -394, 300, 1, -444, -344, 5, true, 0, false);
    cm.npc_ChangeController(3003660, 'oid=275863', -325, 300, 1, -375, -275, 5, true, 0, false);
    cm.npc_ChangeController(3003660, 'oid=275864', -258, 300, 1, -308, -208, 5, true, 0, false);
    cm.forceCompleteQuest(35157);
    cm.userSetFieldFloating(993060048, 0, 20, 1000);
    cm.dispose();
  }
}