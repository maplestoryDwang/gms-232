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
      cm.npc_ChangeController(3004912, "oid=363517", 1952, 51, 37, 1902, 2002, 0, false, 0, false);
      cm.npc_ChangeController(3004912, 'oid=363518', 1895, 8, 35, 1845, 1945, 0, false, 0, false);
      cm.npc_ChangeController(3004912, 'oid=363519', 1850, 51, 37, 1800, 1900, 0, false, 0, false);
      cm.npc_ChangeController(3004913, "oid=363520", 2092, 8, 36, 2042, 2142, 1, false, 0, false);
      cm.setAmbience("SoundEff.img/kain/HeavyRain", 100, 60);
      cm.npc_ChangeController(3004906, "oid=560857", 2205, -33, 36, 2155, 2255, 1, false, 0, false);
      cm.npc_SetSpecialAction('oid=560857', "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 1990, -10);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.npc_SetSpecialAction("oid=560857", "call", -1, 1);
        cm.inGameDirectionEvent_AskAnswerTime(2500);
      } else {
        if (status === V++) {
          cm.fieldEffect_PlayBGM("Bgm56/TheDispossessed", 0, 0);
          cm.inGameDirectionEvent_PushScaleInfo(8000, 0, 1000, 8000, 2300, -10);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 4500, 0);
            cm.sendNormalTalk_Bottom("#face0#已完成身份初始化，有可能泄露身份信息的个人物品目前全部在进行销毁。是，商品会立刻送往工厂，是，没错，是……诶？", 37, 3004906, false, true, 1);
            cm.effect_Voice("Voice6.img/kain/3/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/1', 100);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(2500);
            } else {
              if (status === V++) {
                cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 2355, -7);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(300);
                } else {
                  if (status === V++) {
                    cm.npc_setForceFlip("oid=560857", 1);
                    cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#该隐，是老大让改的。", 36, 3004906, false, true, 1);
                      cm.effect_Voice("Voice6.img/kain/3/" + (cm.getPlayer().getGender() == 0 ? 'Male' : 'Female') + '/2', 100);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face1#……", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                          } else {
                            if (status === V++) {
                              cm.setNpcSpecialActionReset('oid=560857');
                              cm.inGameDirectionEvent_AskAnswerTime(2500);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face5#该隐……辛苦了。", 36, 3004903, false, true, 1);
                                cm.effect_Voice("Voice6.img/kain/3/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/3', 100);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face5#等你回来了……一起吃顿饭吧。", 36, 3004903, false, true, 1);
                                    cm.effect_Voice("Voice6.img/kain/3/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/4', 100);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom('#face0#是……', 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                        cm.effect_Voice("Voice6.img/kain/3/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/5', 100);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom('#face0#……', 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_ForcedFlip(-1);
                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#终端机呢？", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                                cm.effect_Voice("Voice6.img/kain/3/" + (cm.getPlayer().getGender() == 0 ? 'Male' : 'Female') + '/6', 100);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#帮忙销毁了吧。", 36, 3004906, false, true, 1);
                                                    cm.effect_Voice("Voice6.img/kain/3/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/7', 100);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1500, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/esfera/waterdrop", 100);
                                                            cm.playSoundEffDirectly("SoundEff.img/kain/HeavyRain");
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.fieldEffect_Hero8(1);
                                                              cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.fieldEffect_屏幕渐入插图A(['00', "Effect/Direction26.img/kain/illust/9", 'cc'], [1, 0, 0, 0, 3500, -1, 0, 0, -1]);
                                                                cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.fieldEffect_屏幕渐入插图消失A(['00'], [7500]);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_Hero9(0, 5000);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(7000);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                    } else if (status === V++) {
                                                                      cm.npc_LeaveField("oid=560857");
                                                                      cm.dispose();
                                                                      cm.warp(993164003, 0, true);
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