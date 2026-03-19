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
      cm.npc_ChangeController(3004905, "oid=363558", 388, 31, 6, 338, 438, 0, false, 0, false);
      cm.npc_ChangeController(3004906, "oid=363559", 892, 31, 1, 842, 942, 1, false, 0, false);
      cm.npc_ChangeController(3004924, "oid=363560", 821, 9, 7, 771, 871, 1, false, 0, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 0, 2);
      cm.Hidden_background("dir_993164020", 1, 0, 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 483, 5);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 676, -30);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_OneTimeAction(29, 999999);
        cm.inGameDirectionEvent_AskAnswerTime(3000);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#重点是……\r\n要适当调整，让人以为大概一年左右就能出去了。", 36, 3004903, false, true, 1);
          cm.effect_Voice("Voice6.img/kain/19/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/1', 100);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1500);
          } else {
            if (status === V++) {
              cm.fieldEffect_PlayBGM("Bgm56/HappyBirthdayMyDear", 0, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1200);
            } else {
              if (status === V++) {
                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 3000, 0);
                cm.inGameDirectionEvent_AskAnswerTime(4500);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#这已经是第六次了，你到底打算重复到什么时候？", 36, 3004906, false, true, 1);
                  cm.effect_Voice("Voice6.img/kain/19/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/2', 100);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#直到研究结束。", 36, 3004903, false, true, 1);
                      cm.effect_Voice("Voice6.img/kain/19/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/3', 100);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#不管是该隐还是其他人，总有一天会看出来的。", 36, 3004906, false, true, 1);
                          cm.effect_Voice("Voice6.img/kain/19/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/4', 100);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#到时候再将记忆夺走就行。", 36, 3004903, false, true, 1);
                              cm.effect_Voice("Voice6.img/kain/19/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/5', 100);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#……", 36, 3004906, false, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1500, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(2500);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_屏幕渐入插图A(['00', "Effect/Direction26.img/kain/illust/1", 'cc'], [1, 0, 0, 0, 1500, -1, 0, 0, -1]);
                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#这帮家伙反正无家可回了，就算离开了这里，人生也不会好起来的。", 36, 3004903, false, true, 1);
                                            cm.effect_Voice("Voice6.img/kain/19/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/7', 100);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(2500);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_屏幕渐入插图消失A(['00'], [2500]);
                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
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
                                                      cm.Hidden_background("dir_993164020", 1, 1, 0, 0);
                                                      cm.fieldEffect_PlayFieldSound("flowervioleta/spotlight", 100);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face5#……", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1500, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.fieldEffect_屏幕渐入插图A(['01', "Effect/Direction26.img/kain/illust/3/3", 'cc'], [1, 0, 0, 0, 1500, -1, 0, 0, -1]);
                                                                cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face5#啊……", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(4500);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#不过至少现在……可以做梦。", 36, 3004903, false, true, 1);
                                                                      cm.effect_Voice("Voice6.img/kain/19/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/8', 100);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.fieldEffect_屏幕渐入插图消失A(['01'], [3500]);
                                                                          cm.fieldEffect_屏幕渐入插图A(['03', "Effect/Direction26.img/kain/illust/3/0", 'cc'], [1, 0, 0, 0, 3500, -1, 0, 0, -1]);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face5#（露丝……卡）", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.fieldEffect_屏幕渐入插图消失A(['03'], [3500]);
                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/morass/memory_absorb", 100);
                                                                                cm.fieldEffect_屏幕渐入插图A(['04', "Effect/Direction26.img/kain/illust/8/0", 'cc'], [1, 0, 0, 0, 3500, -1, 0, 0, -1]);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face0#也许思念着根本就不存在的乐园度日，\r\n对他们来说会是更好的生活吧。", 36, 3004903, false, true, 1);
                                                                                  cm.effect_Voice("Voice6.img/kain/19/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/9', 100);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.fieldEffect_屏幕渐入插图消失A(['04'], [2500]);
                                                                                        cm.fieldEffect_屏幕渐入插图A(['05', "Effect/Direction26.img/kain/illust/8/1", 'cc'], [1, 0, 0, 0, 1500, -1, 0, 0, -1]);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face0#生日快乐，该隐。", 36, 3004903, false, true, 1);
                                                                                          cm.effect_Voice("Voice6.img/kain/19/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + "/10", 100);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face5#露丝……卡……", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.fieldEffect_屏幕渐入插图消失A(['05'], [5500]);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(8000);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.fieldEffect_Hero9(0, 3500);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                                                                } else if (status === V++) {
                                                                                                  cm.dispose();
                                                                                                  cm.warp(993164021, 0, true);
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