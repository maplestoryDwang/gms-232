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
      cm.npc_ChangeController(3004926, "oid=363523", 1359, 48, 3, 1309, 1409, 0, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.setAmbience("SoundEff.img/kain/HeavyRain", 100, 60);
      cm.inGameDirectionEvent_AskAnswerTime(1500);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.onTeleport(0, 3, cm.getPlayer().getId(), 1563, 17);
        cm.inGameDirectionEvent_同时移动镜头和人(1, 10);
        cm.inGameDirectionEvent_AskAnswerTime(1500);
      } else {
        if (status === V++) {
          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/esfera/door2", 1700);
          cm.inGameDirectionEvent_AskAnswerTime(1500);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 1551, -542);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(1500);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushScaleInfo(6000, 0, 1500, 6000, 1551, 0);
              } else {
                if (status === V++) {
                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 5000, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(4000);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(3500);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face4#搞什么……这都是孩子啊？", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#姐姐……", 36, 3004915, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face2#没事的，没事的……", 36, 3004914, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom('#face0#……', 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/headache", 100);
                                cm.playSoundEffDirectly("SoundEff.img/kain/HeavyRain");
                                cm.sendNormalTalk_Bottom("#face3#唔，头……", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face3#切……偏偏这时候……", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_屏幕渐入插图A(["effect", "Effect/Direction25.img/Dlep6/effect/0", 'cc'], [1, 10, 10, 1, 2000, -1, 0, 0, -1]);
                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_Hero8(1);
                                      cm.fieldEffect_Hero9(90, 0);
                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_PlayBGM("Bgm56/HappyBirthdayMyDear", 0, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(2500);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_屏幕渐入插图A(['00', "Effect/Direction26.img/kain/illust/3/0", 'cc'], [1, 0, 0, 0, 2000, -1, 0, 0, -1]);
                                          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 3000, 0, 1380, 66);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(5000);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(2500);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_屏幕渐入插图消失A(["effect"], [2500]);
                                                cm.fieldEffect_屏幕渐入插图消失A(['00'], [2500]);
                                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2500, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(4500);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#姐姐……", 36, 3004915, false, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face4#……", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face2#果然……不是人干的事。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_同时移动镜头和人(1, 200);
                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/thunder3", 100);
                                                                cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 300, 2);
                                                                cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.fieldEffect_Hero9(0, 2500);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_PlayBGM("Bgm00/Silence", 0, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                  } else if (status === V++) {
                                                                    cm.dispose();
                                                                    cm.warp(993164006, 0, true);
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