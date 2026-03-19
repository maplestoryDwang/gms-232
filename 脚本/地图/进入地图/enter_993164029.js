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
      cm.playVideoByScript("Kain.avi");
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(2500);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom('#face0#……', 36, 3004903, false, true, 1);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1500);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face4#（唔，难道错了……）", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1500);
              } else {
                if (status === V++) {
                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/Falldown", 100);
                  cm.inGameDirectionEvent_AskAnswerTime(750);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom('#face1#！！', 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(750);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_屏幕渐入插图A(['00', "Effect/Direction26.img/kain/illust/12", 'cc'], [1, 0, 0, 0, 2500, -1, 0, 0, -1]);
                        cm.inGameDirectionEvent_AskAnswerTime(4000);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face4#咳咳……", 36, 3004903, false, true, 1);
                          cm.effect_Voice("Voice6.img/kain/27/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/2', 100);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face1#（这伤已经……）", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                              cm.effect_Voice("Voice6.img/kain/27/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/1', 100);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face1#（难道一开始就是以这种状态作战的……）", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                cm.effect_Voice("Voice6.img/kain/27/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/3', 100);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face2#……", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(2500);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/morass/hug", 100);
                                        cm.fieldEffect_屏幕渐入插图消失A(['00'], [500]);
                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 3000, 0, 1100, 50);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(1400);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#……", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_PushScaleInfo(1500, 0, 3000, 1500, 263, 50);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#（都结束了……现在只要找回记忆就好……）", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face4#该隐……", 36, 3004903, false, true, 1);
                                                              cm.effect_Voice("Voice6.img/kain/27/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/18", 100);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_同时移动镜头和人(1, 50, 0);
                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_PushScaleInfo(500, 0, 3000, 500, 1100, 50);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face4#该隐……等找回了记忆，你有什么打算？", 36, 3004903, false, true, 1);
                                                                      cm.effect_Voice("Voice6.img/kain/27/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/4', 100);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#……", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#我要回去，\r\n然后我要找到那个人。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                                                              cm.effect_Voice("Voice6.img/kain/27/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/5', 100);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#如果已经死了，哪怕是坟墓……哪怕是尸体，我也要找到。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                                                                cm.effect_Voice("Voice6.img/kain/27/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/6', 100);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face4#你的记忆……一定会很可怕。", 36, 3004903, false, true, 1);
                                                                                    cm.effect_Voice("Voice6.img/kain/27/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/8', 100);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face4#应该会……咳咳，会很难应付。", 36, 3004903, false, true, 1);
                                                                                        cm.effect_Voice("Voice6.img/kain/27/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/9', 100);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face2#无所谓，毕竟无论如何，那都是我的记忆。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                                                                            cm.effect_Voice("Voice6.img/kain/27/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + "/10", 100);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face2#不管是愤怒还是绝望，都是我自己的。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                                                                                cm.effect_Voice("Voice6.img/kain/27/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/11", 100);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                } else if (status === V++) {
                                                                                                  cm.forceCompleteQuest(39427);
                                                                                                  cm.gainExp(9971);
                                                                                                  cm.dispose();
                                                                                                  cm.warp(410000414, 0, true);
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
    }
  }
}