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
      cm.npc_ChangeController(3004903, "oid=363581", 767, 48, 6, 717, 817, 0, false, 0, false);
      cm.npc_ChangeController(3004912, "oid=567925", 599, 3, 1, 549, 649, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=567925", "summon", 0, 0);
      cm.npc_ChangeController(3004912, "oid=567926", 394, 45, 6, 344, 444, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=567926", 'summon', 0, 0);
      cm.npc_ChangeController(3004913, "oid=567927", 537, 60, 8, 487, 587, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=567927", 'summon', 0, 0);
      cm.npc_ChangeController(3004912, 'oid=567928', 630, 58, 8, 580, 680, 0, true, 0, false);
      cm.npc_SetSpecialAction('oid=567928', 'summon', 0, 0);
      cm.npc_ChangeController(3004913, 'oid=567929', 1116, 57, 9, 1066, 1166, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=567929", "summon", 0, 0);
      cm.npc_ChangeController(3004913, "oid=567930", 1179, 25, 1, 1129, 1229, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=567930", 'summon', 0, 0);
      cm.Npc_Fadeout("oid=567925", 0, 0);
      cm.Npc_Fadeout("oid=567926", 0, 0);
      cm.Npc_Fadeout('oid=567927', 0, 0);
      cm.Npc_Fadeout("oid=567928", 0, 0);
      cm.Npc_Fadeout("oid=567929", 0, 0);
      cm.Npc_Fadeout("oid=567930", 0, 0);
      cm.npc_ChangeController(3004904, 'oid=567931', 1530, 37, 7, 1480, 1580, 1, true, 0, false);
      cm.npc_SetSpecialAction('oid=567931', 'summon', 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 783, -500);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(2500);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_SetHideEffect(1);
          cm.setAmbience("SoundEff.img/kain/HeavyRain", 80, 60);
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 5000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(6500);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushScaleInfo(5000, 0, 1500, 5000, 783, 0);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(9000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom('#face2#……', 36, 3004903, false, true, 1);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face2#切，难道还是使唤太多了？", 36, 3004904, false, true, 1);
                    cm.effect_Voice("Voice6.img/kain/25/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/1', 100);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(750);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_PushScaleInfo(750, 0, 1500, 7500, 1500, 0);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom('#face0#……', 36, 3004927, false, true, 1);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1500, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                              } else {
                                if (status === V++) {
                                  cm.npc_LeaveField('oid=567931');
                                  cm.npc_ChangeController(3004904, "oid=567949", 1000, 37, 6, 950, 1050, 1, true, 1000, false);
                                  cm.npc_SetSpecialAction("oid=567949", "summon", 0, 0);
                                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 926, 0);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(2500);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#老大………我还纳闷你藏哪儿去了，原来跑这儿来了，\r\n难不成是打算飞走吗？", 36, 3004904, false, true, 1);
                                              cm.effect_Voice("Voice6.img/kain/25/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/2', 100);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face3#我还要迎接一个人，所以……我不想弄脏了屋子。", 36, 3004903, false, true, 1);
                                                  cm.effect_Voice("Voice6.img/kain/25/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/3', 100);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face2#嗯……该隐吗？上级也在找这家伙……\r\n这家伙果然是原型吧？", 36, 3004904, false, true, 1);
                                                      cm.effect_Voice("Voice6.img/kain/25/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/4', 100);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#我本就觉得奇怪，但凡能除掉该隐那个家伙，事情就不会发展到这个地步，可你并没有这么做。", 36, 3004904, true, true, 1);
                                                        cm.effect_Voice("Voice6.img/kain/25/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/5', 100);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#那家伙将那些小鬼藏起来的时候，还有偷走安全密钥入侵仓库的时候……", 36, 3004904, true, true, 1);
                                                          cm.effect_Voice("Voice6.img/kain/25/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/6', 100);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#甚至当初在巴伊托兹那帮人的地盘和头目交易时也没有那样过，\r\n反而急着保护那家伙。", 36, 3004904, false, true, 1);
                                                              cm.effect_Voice("Voice6.img/kain/25/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/7', 100);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom('#face3#……', 36, 3004903, true, true, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.setAmbience("SoundEff.img/kain/HeavyRain", 100, 60);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#啊~雨势越来越大了呢？", 36, 3004904, false, true, 1);
                                                                      cm.effect_Voice("Voice6.img/kain/25/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/10', 100);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face4#来，现在也该有个了断了。", 36, 3004904, false, true, 1);
                                                                          cm.effect_Voice("Voice6.img/kain/25/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/11", 100);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/kain/regen", 100);
                                                                              cm.npc_SetSpecialAction("oid=567930", 'regen', 1, 1);
                                                                              cm.Npc_Fadeout("oid=567930", 255, 0);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/kain/regen", 100);
                                                                                cm.npc_SetSpecialAction('oid=567929', "regen", 1, 1);
                                                                                cm.Npc_Fadeout("oid=567929", 255, 0);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/kain/regen", 100);
                                                                                  cm.npc_SetSpecialAction("oid=567928", "regen", 1, 1);
                                                                                  cm.Npc_Fadeout("oid=567928", 255, 0);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/kain/regen", 100);
                                                                                    cm.npc_SetSpecialAction("oid=567927", "regen", 1, 1);
                                                                                    cm.Npc_Fadeout("oid=567927", 255, 0);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/kain/regen", 100);
                                                                                      cm.npc_SetSpecialAction("oid=567926", "regen", 1, 1);
                                                                                      cm.Npc_Fadeout("oid=567926", 255, 0);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/kain/regen", 100);
                                                                                        cm.npc_SetSpecialAction("oid=567925", 'regen', 1, 1);
                                                                                        cm.Npc_Fadeout('oid=567925', 255, 0);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1500, 0);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                          } else if (status === V++) {
                                                                                            cm.npc_LeaveField("oid=567925");
                                                                                            cm.npc_LeaveField("oid=567926");
                                                                                            cm.npc_LeaveField('oid=567927');
                                                                                            cm.npc_LeaveField('oid=567928');
                                                                                            cm.npc_LeaveField("oid=567929");
                                                                                            cm.npc_LeaveField('oid=567930');
                                                                                            cm.npc_LeaveField('oid=567949');
                                                                                            cm.forceJoinEvent("炼狱黑客_清怪3");
                                                                                            cm.dispose();
                                                                                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
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