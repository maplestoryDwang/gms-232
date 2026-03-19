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
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2500, 0, 315, 52);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.onTeleport(0, 3, cm.getPlayer().getId(), 180, 0);
        cm.inGameDirectionEvent_AskAnswerTime(2000);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_同时移动镜头和人(2, 100);
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.sendNormalTalk_Bottom("#face2#……", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1500);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
              cm.inGameDirectionEvent_AskAnswerTime(2500);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face2#（现在……简直就和进出自己的家一样嘛。）", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/barrier3", 100);
                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 250, 2);
                    cm.inGameDirectionEvent_AskAnswerTime(250);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_屏幕渐入插图A(['00', "Effect/Direction26.img/kain/illust/2/0", 'cc'], [1, 0, 0, 0, 300, -1, 0, 0, -1]);
                      cm.inGameDirectionEvent_AskAnswerTime(700);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom('#face0#啊……', 36, 3004914, false, true, 1);
                      } else {
                        if (status === V++) {
                          cm.effect_Voice("Voice6.img/kain/8/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/2', 100);
                          cm.sendNormalTalk_Bottom("#face0#（保护色！保护色！）", 36, 3004915, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_屏幕渐入插图A(['00', "Effect/Direction26.img/kain/illust/2/1", 'cc'], [1, 0, 0, 0, 300, -1, 0, 0, -1]);
                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom('#face2#……', 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/slap1", 100);
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/slap1", 100);
                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_屏幕渐入插图A(['00', "Effect/Direction26.img/kain/illust/2/0", 'cc'], [1, 0, 0, 0, 1000, -1, 0, 0, -1]);
                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face3#哎呀呀……", 36, 3004914, false, true, 1);
                                        cm.effect_Voice("Voice6.img/kain/8/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/3', 100);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#嘤嘤……", 36, 3004915, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face2#老实交代，是我吗？", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                              cm.effect_Voice("Voice6.img/kain/8/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/5', 100);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#什，什么？", 36, 3004914, true, true, 1);
                                                cm.effect_Voice("Voice6.img/kain/8/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/6', 100);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face2#把你们藏在这里的，就是我。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                                  cm.effect_Voice("Voice6.img/kain/8/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/7', 100);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#到、到底是什么意思……", 36, 3004914, true, true, 1);
                                                    cm.effect_Voice("Voice6.img/kain/8/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/8', 100);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face2#我……分明报告过记忆里那个地方，\r\n可从未提及过#b“那个人”#k。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                                      cm.effect_Voice("Voice6.img/kain/8/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/9', 100);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face2#不管是对医生还是对任何人，我都不记得说过这些。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                                        cm.effect_Voice("Voice6.img/kain/8/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + "/10", 100);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face2#但是老大知道的，那个……", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                                          cm.effect_Voice("Voice6.img/kain/8/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/11", 100);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face3#也就是说有人动过了我的记忆。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                                              cm.effect_Voice("Voice6.img/kain/8/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/12', 100);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face2#所以回答我，当时救了你们，将你们藏在这里的……那个人是谁？", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                                                cm.effect_Voice("Voice6.img/kain/8/" + (cm.getPlayer().getGender() == 0 ? 'Male' : 'Female') + "/13", 100);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.fieldEffect_屏幕渐入插图消失A(['00'], [1500]);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                                } else if (status === V++) {
                                                                  cm.dispose();
                                                                  cm.warp(993164012, 0, true);
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