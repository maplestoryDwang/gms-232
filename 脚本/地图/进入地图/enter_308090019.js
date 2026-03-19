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
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -108, 170);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
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
              cm.sendNormalTalk_Bottom("#face2#团长……", 36, 2570101, false, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face2#团长是怎么保持神志清醒的呢？我……我……根本……", 36, 2570101, true, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face2#没有变化的……还有魁格。", 36, 2570103, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face2#那家伙原本……原本就不太正常。", 36, 2570105, false, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face2#喂，魁格……魁格！", 36, 2570103, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face2#有什么……保持神志清醒的秘诀吗？嗯？", 36, 2570103, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#……。", 36, 2570104, false, true, 1);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#目标必须明确。那样就够了。", 36, 2570104, false, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face2#……。", 36, 2570103, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face6#没用的家伙……", 36, 2570103, false, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face2#不……有点道理。", 36, 2570102, false, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face2#我想我可能知道……", 36, 2570102, true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face2#你想说什么？", 36, 2570103, false, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face2#这场战争打得很艰难的原因是……不知道它什么时候才会结束。\r\n没有人……没有人知道。", 36, 2570102, true, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face2#越是这样，就应该越有强烈的动机才对……要说是我们的目标……", 36, 2570102, true, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face6#我们在守护着，这该死的圣瑞尼亚，永恒不移。", 36, 2570103, true, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face2#没错，全部就这些。", 36, 2570102, true, true, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face2#那么……那团长呢？他怎么会那样好端端的？", 36, 2570103, false, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face2#不知道，或许他有什么……我们不知道的……其他目的。", 36, 2570102, true, true, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face2#其他……其他目的……对……准是这样……", 36, 2570103, true, true, 1);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face2#我听到了……你和王子的谈话。", 36, 2570103, true, true, 1);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face2#誓约……曾许下了什么誓约。", 36, 2570103, true, true, 1);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face2#如果说许下了什么誓约……是什么吗？", 36, 2570102, true, true, 1);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("守护圣瑞尼亚。", 56, 0, false, true, 1);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_同时移动镜头和人(1, 10);
                                                                              cm.inGameDirectionEvent_PushScaleInfo(500, 0, 2000, 500, 456, 170);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("那是我的誓约。", 56, 0, false, true, 1);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("到时间了。出发。", 56, 0, false, true, 1);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_同时移动镜头和人(2, 350);
                                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face2#……。", 36, 2570103, false, true, 1);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom('#face2#……。', 36, 2570105, true, true, 1);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face2#……。", 36, 2570102, true, true, 1);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.setAccountQuestInfo(252, "count=41424;T=20210420234233");
                                                                                                    cm.inGameDirectionEvent_Monologue("团员们开始互相怀疑了。", 0);
                                                                                                    cm.effect_Voice("Voice6.img/Library/kel/18-01-kel.mp3", 100);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_Monologue("甚至，他们也忘记了这场战斗是因何而起", 0);
                                                                                                      cm.effect_Voice("Voice6.img/Library/kel/18-02-kel.mp3", 100);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.inGameDirectionEvent_Monologue("只像在泄愤似地，疯狂地挥剑砍向恶魔。", 1);
                                                                                                        cm.effect_Voice("Voice6.img/Library/kel/18-03-kel.mp3", 100);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_Monologue("估计从那时候开始。", 0);
                                                                                                            cm.effect_Voice("Voice6.img/Library/kel/18-04-kel.mp3", 100);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.inGameDirectionEvent_Monologue("我就隐隐约约地预料到了。", 0);
                                                                                                              cm.effect_Voice("Voice6.img/Library/kel/18-05-kel.mp3", 100);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.inGameDirectionEvent_Monologue("在不久的将来……", 0);
                                                                                                                cm.effect_Voice("Voice6.img/Library/kel/18-06-kel.mp3", 100);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.inGameDirectionEvent_Monologue("我会失去他们……", 1);
                                                                                                                  cm.effect_Voice("Voice6.img/Library/kel/18-07-kel.mp3", 100);
                                                                                                                } else if (status === V++) {
                                                                                                                  cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                  cm.dispose();
                                                                                                                  cm.warp(308090020, 0, false);
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
              }
            }
          }
        }
      }
    }
  }
}