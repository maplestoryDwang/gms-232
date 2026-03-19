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
      cm.npc_ChangeController(3004926, "oid=363542", 1357, 48, 3, 1307, 1407, 0, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.setAmbience("SoundEff.img/kain/HeavyRain", 100, 60);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 543, 43);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_同时移动镜头和人(1, 10);
        cm.inGameDirectionEvent_AskAnswerTime(4500);
        cm.effect_Text(["#fn黑体##fs18#昨夜……", ''], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0, 0]);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 1551, 0);
        } else {
          if (status === V++) {
            cm.onTeleport(0, 3, cm.getPlayer().getId(), 1560, 24);
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1200);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
              cm.inGameDirectionEvent_AskAnswerTime(2500);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1500);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#该隐，队员很快就上去了。", 36, 3004907, false, true, 1);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#好……我会负责善后的。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                      cm.effect_Voice("Voice6.img/kain/9/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/2', 100);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_同时移动镜头和人(2, 50);
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#姐姐……", 36, 3004915, false, true, 1);
                            cm.effect_Voice("Voice6.img/kain/9/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/3', 100);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face3#罗伊斯……", 36, 3004914, true, true, 1);
                              cm.effect_Voice("Voice6.img/kain/9/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/4', 100);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face2#切……", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                  cm.effect_Voice("Voice6.img/kain/9/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/5', 100);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_同时移动镜头和人(1, 50);
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face2#你们两个……跟我来。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                        cm.effect_Voice("Voice6.img/kain/9/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/6', 100);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                            cm.playSoundEffDirectly("SoundEff.img/kain/HeavyRain");
                                            cm.inGameDirectionEvent_AskAnswerTime(3500);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face1#（记忆……消失了。）", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face3#（那帮家伙已经夺走过一次我们的记忆，\r\n你以为他们就不会再来第二次、第三次吗？）", 36, 3004904, false, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face3#（该死……被提拉格说中了。）", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_HalfScreenBlack(2, 640692224, 1717978368, 796156773, 68);
                                                          cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#话说……为什么要这么做？", 36, 3004914, false, true, 1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#什么？", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#你为什么要帮我们？", 36, 3004914, true, true, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#……", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#不知道，我才不管什么记不记得。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#哼，切。", 36, 3004914, false, true, 1);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#嘣！", 36, 3004915, true, true, 1);
                                                                          } else if (status === V++) {
                                                                            cm.forceCompleteQuest(39411);
                                                                            cm.getPlayer().levelUp();
                                                                            cm.dispose();
                                                                            cm.warp(410000401, 0, true);
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