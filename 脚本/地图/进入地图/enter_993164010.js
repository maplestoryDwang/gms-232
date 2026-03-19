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
      cm.npc_ChangeController(3004924, 'oid=363538', 653, -61, 1, 603, 703, 1, false, 0, false);
      cm.npc_ChangeController(3004906, "oid=363539", 779, -14, 2, 729, 829, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_AskAnswerTime(3000);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNormalTalk_Bottom("#face5#该隐，报告我听说了。", 36, 3004903, false, true, 1);
        cm.effect_Voice("Voice6.img/kain/7/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/1', 100);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1500);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 665, -40);
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
                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_PlayBGM("Bgm56/TheDispossessed", 0, 0);
                    cm.sendNormalTalk_Bottom("#face0#你说最后看到那些逃跑的孩子的人……是你？”", 36, 3004903, false, true, 1);
                    cm.effect_Voice("Voice6.img/kain/7/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/2', 100);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#是，我将事情交接给后来的队员后就离开了，\r\n孩子们貌似就是在这个时候逃走的。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                        cm.effect_Voice("Voice6.img/kain/7/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/3', 100);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#你看到他们偷走的东西是什么了吗？", 36, 3004903, true, true, 1);
                          cm.effect_Voice("Voice6.img/kain/7/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/4', 100);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#不，我也是事后才听说他们偷了什么东西。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                            cm.effect_Voice("Voice6.img/kain/7/" + (cm.getPlayer().getGender() == 0 ? 'Male' : 'Female') + '/5', 100);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#嗯……好……", 36, 3004903, false, true, 1);
                                cm.effect_Voice("Voice6.img/kain/7/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/6', 100);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#说说手册吧。", 36, 3004903, false, true, 1);
                                    cm.effect_Voice("Voice6.img/kain/7/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/7', 100);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#这是从那个可疑的家伙手里弄到的，那家伙貌似用了怨恨石，手册上写的内容是……", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                        cm.effect_Voice("Voice6.img/kain/7/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/8', 100);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(2500);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#是啊……这样啊。", 36, 3004903, false, true, 1);
                                            cm.effect_Voice("Voice6.img/kain/7/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/9', 100);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#老大，我有话要说……", 36, 3004906, false, true, 1);
                                                cm.effect_Voice("Voice6.img/kain/7/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/10", 100);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#……", 36, 3004903, false, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#该隐，可以走了。", 36, 3004903, true, true, 1);
                                                      cm.effect_Voice("Voice6.img/kain/7/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/11", 100);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_同时移动镜头和人(1, 20);
                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_ForcedFlip(1);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face4#……", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#难道你有什么想说的？", 36, 3004903, false, true, 1);
                                                                  cm.effect_Voice("Voice6.img/kain/7/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/13", 100);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face4#我可以问问……昨晚为什么要邀请我共进晚餐吗？", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                                                      cm.effect_Voice("Voice6.img/kain/7/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/14', 100);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#并没有什么特别的原因，只是……", 36, 3004903, false, true, 1);
                                                                          cm.effect_Voice("Voice6.img/kain/7/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/15", 100);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#我突然想听听你的故事了。", 36, 3004903, false, true, 1);
                                                                              cm.effect_Voice("Voice6.img/kain/7/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/16", 100);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face0#该隐，你说过合约结束后会回故乡对吧？", 36, 3004903, false, true, 1);
                                                                                  cm.effect_Voice("Voice6.img/kain/7/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + "/18", 100);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face4#是，我要找样东西。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                                                                    cm.effect_Voice("Voice6.img/kain/7/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/19', 100);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face0#是啊……能再次相见就好了。", 36, 3004903, true, true, 1);
                                                                                      cm.effect_Voice("Voice6.img/kain/7/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/20", 100);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face1#什么？", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                                                                        cm.effect_Voice("Voice6.img/kain/7/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/21', 100);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face0#记忆中的那个人。", 36, 3004903, true, true, 1);
                                                                                          cm.effect_Voice("Voice6.img/kain/7/" + (cm.getPlayer().getGender() == 0 ? 'Male' : 'Female') + '/22', 100);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#……", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                                                                          } else if (status === V++) {
                                                                                            cm.dispose();
                                                                                            cm.warp(993164011, 0, true);
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