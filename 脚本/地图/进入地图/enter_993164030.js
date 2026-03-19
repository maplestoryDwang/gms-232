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
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 322, 9);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_同时移动镜头和人(1, 1, 0);
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
              cm.inGameDirectionEvent_头顶图片(["Effect/Direction26.img/kain/effect/4", "oid=0"], [0, 278, -32, 1, 0, 1, 1, 0, 0]);
              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/morass/break_stone", 100);
              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/morass/tana_skill3", 100);
              cm.inGameDirectionEvent_AskAnswerTime(1500);
            } else {
              if (status === V++) {
                cm.fieldEffect_屏幕渐入插图A(["white", "Map/Effect2.img/WhiteOut", 'cc'], [1, 0, 0, 100, 2000, -1, 1, 0, -1]);
                cm.inGameDirectionEvent_AskAnswerTime(2500);
              } else {
                if (status === V++) {
                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 322, 9);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_屏幕渐入插图A(["effect", "Effect/Direction25.img/Dlep6/effect/0", 'cc'], [1, 10, 10, 1, 0, -1, 1, 0, -1]);
                    cm.fieldEffect_屏幕渐入插图A(['00', "Effect/Direction26.img/kain/illust/3/1", 'cc'], [0, 0, 0, 0, 0, -1, 0, 0, -1]);
                    cm.inGameDirectionEvent_AskAnswerTime(3500);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face2#（无数记忆……渗透了进来。）", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_屏幕渐入插图消失A(["white"], [7500]);
                        cm.setAmbience("Ambience.img/flyingdeck_fire", 60, 60);
                        cm.inGameDirectionEvent_AskAnswerTime(9500);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face4#（露丝卡……姐姐……）", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 322, 9);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face2#(虽然还有些模糊，但我似乎依稀能记起一些了，姐姐的样子，还有……)", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_屏幕渐入插图A(['01', "Effect/Direction26.img/kain/illust/6/0", 'cc'], [1, 0, 0, 0, 2500, -1, 0, 0, -1]);
                                    cm.inGameDirectionEvent_AskAnswerTime(3500);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_PlayBGM("Bgm56/HappyBirthdayMyDear", 0, 0);
                                      cm.sendNormalTalk_Bottom("#face1#（等等，当时姐姐戴着的发卡……）", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face4#咳咳……", 37, 3004903, true, true, 1);
                                        cm.effect_Voice("Voice6.img/kain/27/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + "/16", 100);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_屏幕渐入插图消失A(['01'], [2500]);
                                          cm.inGameDirectionEvent_AskAnswerTime(4500);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face1#不可思议……老大你……？为什么？到底是怎么了……？！", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                            cm.effect_Voice("Voice6.img/kain/27/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/14", 100);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face3#为什么？！为什么你？！到底为什么？！", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                              cm.effect_Voice("Voice6.img/kain/27/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/17", 100);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(2500);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face3#为什么要这么做！为什么！！", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                                  cm.effect_Voice("Voice6.img/kain/27/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/20', 100);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face4#因为……这是让我们两个都能活下去的……唯一方法……", 36, 3004903, false, true, 1);
                                                      cm.effect_Voice("Voice6.img/kain/27/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/21', 100);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(4500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_Monologue("只要能……只要能饶我们一命，我什么都愿意做。", 1);
                                                          cm.effect_Voice("Voice6.img/kain/27/" + (cm.getPlayer().getGender() == 0 ? 'Male' : 'Female') + "/22", 100);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#……", 36, 3004929, false, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.fieldEffect_屏幕渐入插图A(['02', "Effect/Direction26.img/kain/illust/6/1", 'cc'], [1, 0, 0, 0, 2500, -1, 0, 0, -1]);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.playSoundEffDirectly("Ambience.img/flyingdeck_fire");
                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/morass/hug", 100);
                                                                    cm.fieldEffect_屏幕渐入插图消失A(['02'], [100]);
                                                                    cm.fieldEffect_屏幕渐入插图消失A(['effect'], [100]);
                                                                    cm.fieldEffect_屏幕渐入插图消失A(['00'], [100]);
                                                                    cm.sendNormalTalk_Bottom('#face4#唔！！', 36, 3004903, false, true, 1);
                                                                    cm.effect_Voice("Voice6.img/kain/27/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/23", 100);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.fieldEffect_屏幕渐入插图A(['03', "Effect/Direction26.img/kain/illust/11/1", 'cc'], [1, 0, 0, 0, 500, -1, 0, 0, -1]);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face1#露丝卡！！姐姐！！！", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                                                        cm.effect_Voice("Voice6.img/kain/27/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/24", 100);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face4#……活下去，该隐，只凭你自己的意志。", 36, 3004903, false, true, 1);
                                                                            cm.effect_Voice("Voice6.img/kain/27/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/27", 100);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ReverseCity/warn3", 100);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/lever", 100);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face1#（项圈……松开了，也就是说……！！）", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.fieldEffect_屏幕渐入插图消失A(['03'], [2500]);
                                                                                        cm.fieldEffect_屏幕渐入插图A(['04', "Effect/Direction26.img/kain/illust/11/0", 'cc'], [1, 0, 0, 0, 2500, -1, 0, 0, -1]);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(4500);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.fieldEffect_屏幕渐入插图消失A(['04'], [2500]);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(4500);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face3#额啊啊啊啊！！！", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                                                                            cm.effect_Voice("Voice6.img/kain/27/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + "/28", 100);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.fieldEffect_Hero9(0, 3500);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                                                              } else if (status === V++) {
                                                                                                cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                                cm.forceCompleteQuest(39428);
                                                                                                cm.gainExp(5725);
                                                                                                cm.gainExp(6739);
                                                                                                cm.updateInfoQuest(39400, "70=h0;51=h0;71=h1;52=h0;53=h0;73=h0;54=h0;74=h0;56=h0;75=h0;76=h0;57=h0;77=h0;58=h0;78=h0;59=h0;79=h0;60=h1;80=h0;61=h0;81=h0;62=h0;82=h0;63=h0;83=h0;64=h0;84=h0;65=h0;66=h0;85=h0;67=h1;68=h0;69=h0");
                                                                                                cm.updateInfoQuest(39400, "70=h0;51=h0;71=h0;52=h0;53=h0;73=h0;54=h0;74=h0;56=h0;75=h0;76=h0;57=h0;77=h0;58=h0;78=h0;59=h0;79=h0;60=h1;80=h0;61=h0;81=h0;62=h0;82=h0;63=h0;83=h0;64=h0;84=h0;65=h0;66=h0;85=h0;67=h1;68=h0;69=h0");
                                                                                                cm.updateInfoQuest(39400, "70=h0;51=h0;90=h1;71=h0;52=h0;53=h0;73=h0;54=h0;74=h0;56=h0;75=h0;76=h0;57=h0;77=h0;58=h0;78=h0;59=h0;79=h0;60=h1;80=h0;61=h0;81=h0;62=h0;82=h0;63=h0;83=h0;64=h0;84=h0;65=h0;66=h0;85=h0;67=h1;68=h0;69=h0");
                                                                                                cm.updateInfoQuest(39400, "70=h0;51=h0;90=h1;71=h0;52=h0;53=h0;73=h0;54=h0;74=h0;56=h0;75=h0;76=h0;57=h0;77=h0;58=h0;78=h0;59=h0;79=h0;60=h1;80=h0;61=h0;81=h0;62=h0;82=h0;63=h0;83=h0;64=h0;84=h0;65=h0;66=h0;85=h0;86=h1;67=h1;68=h0;69=h0");
                                                                                                cm.dispose();
                                                                                                cm.warp(410000419, 0, true);
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