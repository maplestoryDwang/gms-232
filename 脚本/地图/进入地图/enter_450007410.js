var status = -1;
var selectionLog = [];
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
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(3003520, "oid=2005485", -1090, 130, 11, -1140, -1040, 0, false, false);
      cm.npc_SetSpecialAction("oid=2005485", "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -1161, 220);
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
            cm.sendNormalTalk_Bottom("看得到什么吗？", 57, 0, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face1#几乎什么都看不见。", 37, 3003500, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#慢慢放下去，#ho#。", 37, 3003502, true, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_QTE(5);
                } else {
                  if (status === V++) {
                    cm.setAmbience("SoundEff.img/esfera/gear", 100, 60);
                    cm.npc_SetSpecialAction("oid=2005485", 'special2', -1, 1);
                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face3#再放点……再放点……", 37, 3003500, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face3#好像比想象的更深。", 37, 3003500, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face3#好像快到了。啊，发现了。", 37, 3003500, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("等一下。有什么东西正在靠近！", 57, 0, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face2#呃！无法识别。", 37, 3003500, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face2#先别管，继续往下放！就在前面！", 37, 3003500, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face2#抓住了！", 37, 3003500, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.setNpcSpecialActionReset("oid=2005485");
                                    cm.playSoundEffDirectly("SoundEff.img/esfera/gear");
                                    cm.sendNormalTalk_Bottom("#face1##h0#！快转动手柄！", 37, 3003502, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_QTE(5);
                                    } else {
                                      if (status === V++) {
                                        cm.setAmbience("SoundEff.img/esfera/gear", 100, 60);
                                        cm.npc_SetSpecialAction("oid=2005485", "special", -1, 1);
                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                      } else {
                                        if (status === V++) {
                                          cm.userSetFieldFloating(450007410, 3, 3, 50);
                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/Falldown", 100);
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else {
                                          if (status === V++) {
                                            cm.userSetFieldFloating(450007410, 0, 0, 0);
                                            cm.sendNormalTalk_Bottom("沃莉？！", 57, 0, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face2#呃！我遭到了攻击！", 37, 3003500, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face1#快拉！快！", 37, 3003502, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face2#太快了！无法确认目标！啊……又来了！", 37, 3003500, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.userSetFieldFloating(450007410, 3, 3, 20);
                                                    cm.inGameDirectionEvent_QTE(6);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face1#快拉！快拉！", 37, 3003502, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.forceCompleteQuest(34579);
                                                            cm.updateInfoQuest(34560, "30=h0;50=h0;31=h1;51=h2;32=h1;52=h0;33=h0;53=h0;34=h0;54=h0;35=h0;55=h0;36=h0;56=h0;37=h0;57=h0;38=h0;58=h0;39=h0;59=h0;40=h0;60=h0;41=h0;42=h0;43=h0;44=h0;45=h0;46=h0;47=h0;48=h0;49=h0");
                                                            cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                            cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
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
                                                                  cm.setStandAloneMode(false);
                                                                  cm.dispose();
                                                                  cm.warp(450007170, 0);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;