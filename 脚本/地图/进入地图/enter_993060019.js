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
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.setAmbience("Ambience.img/verdel_wind0", 200, 60);
      cm.npc_ChangeController(3003651, "oid=2200991", -334, -774, 23, -384, -284, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2200991", "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -905, -100);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(300);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 1000, 3000, -120, -650);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(3000);
          } else {
            if (status === V++) {
              cm.userSetFieldFloating(993060019, 0, 30, 1000);
              cm.inGameDirectionEvent_AskAnswerTime(1500);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#女皇陛下的书信发出去之后，各地的勇士们纷纷聚集了过来。", 37, 3003651, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#对抗黑魔法师的势力团结在一起，组成了大规模的舰队。", 37, 3003651, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#那个人的预言从来没有出过差错。\r\n也许我们到最后都无法阻止他。但是……", 37, 3003651, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#是顺从预言，还是与之对抗，是自己的选择……", 37, 3003651, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#勇士们为了守护各自心爱的东西，\r\n抱着迎战命运的决心聚集到了基地。", 37, 3003651, true, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 1000, 3000, -80, -650);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                          } else {
                            if (status === V++) {
                              cm.userSetFieldFloating(993060019, 2, 30, 1000);
                              cm.sendNormalTalk_Bottom("#face0#请抓好。马上就要到码头了。", 37, 3003651, false, true);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/tilt", 100);
                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 1000, 2000, -320, -430);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 1000, 2000, -700, 0);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_PlayBGM("Bgm48/Outpost", 0, 0);
                                          cm.playSoundEffDirectly("Ambience.img/verdel_wind0");
                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction20.img/effect/BMPre_WS/0", 0, 2000, 0, -80, 1, 4, 1);
                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#你看到了吗？这就是为了消灭黑魔法师而建立的\r\n冒险岛联盟的前哨基地。", 37, 3003651, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#即便知道了绝望的预言，勇士们仍然鼓起勇气聚集到了这里。\r\n将他们的心愿凝聚在一起，是指挥官的责任。", 37, 3003651, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#希纳斯女皇陛下也会亲自参加本次远征。", 37, 3003651, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BMpre/WSappear_appear", 100);
                                                      cm.fieldEffect_ProcessOnOffLayer('01', "Effect/Direction20.img/effect/BMPre_WS/1", 0, 500, 0, -80, 1, 4, 1);
                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#那艘巨大的战舰是联盟的母舰——白色之矛。", 37, 3003651, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_ProcessOnOffLayer('01', '', 2, 500, 0, 0, 0, 0, 0);
                                                            cm.fieldEffect_ProcessOnOffLayer('02', "Effect/Direction20.img/effect/BMPre_WS/2", 0, 500, 0, -80, 1, 4, 1);
                                                            cm.sendNormalTalk_Bottom("#face0#制作成长矛形象的锐利船首，是迎战命运的意志的象征。", 37, 3003651, false, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#庞大的体型是为了在遭到攻击时保护我方舰队。", 37, 3003651, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#白色之矛是如实反映了女皇陛下意志的产物。", 37, 3003651, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#好了，前哨基地到了。", 37, 3003651, false, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BMpre/ship1", 100);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(3000);
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
                                                                          } else if (status === V++) {
                                                                            cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                            cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 300, 0, 0, 0, 0, 0);
                                                                            cm.fieldEffect_ProcessOnOffLayer('02', '', 2, 300, 0, 0, 0, 0, 0);
                                                                            cm.npc_LeaveField("oid=2200991");
                                                                            cm.npc_LeaveField("oid=2200991");
                                                                            cm.dispose();
                                                                            cm.warp(993060020, 0, false);
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
}