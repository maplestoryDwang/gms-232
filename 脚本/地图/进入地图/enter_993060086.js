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
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setAmbience("Ambience.img/cyg_loop", 150, 60);
      cm.Hidden_background('spine0', 1, 0, 0, 0);
      cm.Hidden_background("spine1", 1, 0, 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1600);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion2", 100);
        cm.Hidden_background("spine0", 1, 1, 0, 0);
        cm.onSetMapObjectCreateLayerMore("spine0", 2, "main", 1);
        cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion1", 100);
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(2500);
            } else {
              if (status === V++) {
                cm.onSetMapObjectCreateLayerMore("spine0", 2, "crash1", 1);
                cm.inGameDirectionEvent_AskAnswerTime(300);
              } else {
                if (status === V++) {
                  cm.fieldEffect_InsertCanvas(1, 50, 240, 240, 240, 300, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(300);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 300, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(300);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM1/cyg_crack1", 200);
                      cm.onSetMapObjectCreateLayerMore("spine0", 2, 'crash2', 1);
                      cm.inGameDirectionEvent_AskAnswerTime(300);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_InsertCanvas(1, 50, 240, 240, 240, 300, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(300);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 300, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(300);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM1/cyg_crack2", 200);
                            cm.onSetMapObjectCreateLayerMore("spine0", 2, 'crash3', 1);
                            cm.inGameDirectionEvent_AskAnswerTime(300);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_InsertCanvas(1, 50, 240, 240, 240, 300, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(300);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 300, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(300);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM1/cyg_crack2", 200);
                                  cm.onSetMapObjectCreateLayerMore('spine0', 2, "crash4", 1);
                                  cm.playSoundEffDirectly("Ambience.img/cyg_loop");
                                  cm.sendNormalTalk_Bottom("#face2#盾牌倒下了！！请大家快躲……", 37, 3003656, false, true);
                                  cm.effect_Voice("Voice4.img/BM1/DIR8/1", 128);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM1/cyg_crack3", 200);
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else {
                                      if (status === V++) {
                                        cm.Hidden_background("spine0", 1, 0, 0, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/secretmission3", 100);
                                          cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction15.img/effect/BM1/cyg/0", 0, 1500, 0, 0, 1, 4, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face2#(巨大怪兽的眼睛还在发光。\r\n不能这么倒下，快点防御……)", 37, 3003656, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face2#……", 37, 3003656, false, true);
                                                cm.effect_Voice("Voice4.img/BM1/DIR8/2", 128);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/secretmission3", 100);
                                                  cm.fieldEffect_ProcessOnOffLayer('01', "Effect/Direction15.img/effect/BM1/cyg/1", 0, 1500, 0, 0, 1, 4, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face2#……！？", 37, 3003656, false, true);
                                                    cm.effect_Voice("Voice4.img/BM1/DIR8/3", 128);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/secretmission3", 100);
                                                      cm.fieldEffect_ProcessOnOffLayer('02', "Effect/Direction15.img/effect/BM1/cyg/2", 0, 1500, 0, 0, 1, 4, 0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#(神，神兽的盾牌……失去了力量……！？果然刚才的爆炸……)", 37, 3003656, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom('#face0#呃……', 37, 3003659, false, true);
                                                            cm.effect_Voice("Voice4.img/BM1/DIR8/8", 128);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.fieldEffect_ProcessOnOffLayer('06', "Effect/Direction20.img/effect/BM1_review/11", 0, 1500, 0, 0, 1, 4, 0);
                                                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_Monologue("#fs21##fn黑体#“我渴望的是再次……守护一切的力量……”", 0);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_Monologue("#fs21##fn黑体#\r\n\r\n不幸的是，这可怜的女皇的手无法抓住任何东西。", 0);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_Monologue("#fs21##fn黑体#虽然心情迫切，但是失去了光芒的盾牌毫无反应。", 0);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_Monologue("#fs21##fn黑体#\r\n在风暴中依然闪着寒光的刀刃在甲板上翻滚。", 0);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_Monologue("#fs21##fn黑体#互相扶持着站起来的士兵们也失去了斗志。", 1);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_Monologue("#fs21##fn黑体#“……真的要就此结束吗？”", 0);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_Monologue("#fs21##fn黑体#\r\n\r\n就在女皇想到结束的时候，女皇的蓝眼睛就看到了巨大怪兽。", 0);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_Monologue("#fs21##fn黑体#又一次陷入了无尽的恐惧中。", 0);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_Monologue("#fs21##fn黑体#失去了大军的凄惨场景在眼前掠过。", 0);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_Monologue("#fs21##fn黑体#\r\n但是在痛苦的背后，耳边响起了拯救了自己的那句话。", 0);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_Monologue("#fs21##fn黑体#让她在绝望中重新站起来的那句话。", 1);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_Monologue("#fs21##fn黑体#“就像我们各自都有需要做的事情，我认为女皇您只要做到您能做到的事情就可以。", 0);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_Monologue("#fs21##fn黑体#“能够让大家团结一心的只有您。”", 0);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_Monologue("#fs21##fn黑体#\r\n“只有我……能做到的事情。””", 0);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_Monologue("#fs21##fn黑体#\r\n联盟成员在各自的位置上奋力地战斗。", 0);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_Monologue("#fs21##fn黑体#大家都经历了无数的艰难险阻才来到这里。", 0);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_Monologue("#fs21##fn黑体#因为大家都想守护重要的人……", 1);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.inGameDirectionEvent_Monologue("#fs21##fn黑体#“好不容易创造的机会……不能在这里放弃。”", 0);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_Monologue("#fs21##fn黑体#\r\n\r\n女皇想到了之前那些刻骨铭心的牺牲。", 0);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.inGameDirectionEvent_Monologue("#fs21##fn黑体#那些牺牲让人心痛不已。", 0);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.inGameDirectionEvent_Monologue("#fs21##fn黑体#背负了这一切痛苦的正是女皇。", 0);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_Monologue("#fs21##fn黑体#能让士兵托付性命的指挥官。", 0);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.inGameDirectionEvent_Monologue("#fs21##fn黑体#\r\n自己的宿命就是要带领士兵们站起来，向前前进。", 1);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.fieldEffect_ProcessOnOffLayer('06', '', 2, 1500, 0, 0, 0, 0, 0);
                                                                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/wind", 100);
                                                                                                                  cm.fieldEffect_ProcessOnOffLayer('05', "Effect/Direction15.img/effect/BM1/cyg/5", 0, 2500, 0, 0, 1, 4, 0);
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 500, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer('01', '', 2, 500, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer('02', '', 2, 500, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer('05', '', 2, 500, 0, 0, 0, 0, 0);
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.fieldEffect_ProcessOnOffLayer('03', "Effect/Direction15.img/effect/BM1/cyg/3", 0, 1500, 0, 0, 1, 4, 0);
                                                                                                                      cm.fieldEffect_Hero9(50, 1000);
                                                                                                                      cm.setAmbience("Ambience.img/wakeUp_loop", 180, 60);
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face2#我一步也不会退缩。", 37, 3003656, false, true);
                                                                                                                        cm.effect_Voice("Voice4.img/BM1/DIR8/4", 128);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("#face2#因为守护大家的意念……", 37, 3003656, true, true);
                                                                                                                          cm.effect_Voice("Voice4.img/BM1/DIR8/5", 128);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face2#就是现在……", 37, 3003656, true, true);
                                                                                                                            cm.effect_Voice("Voice4.img/BM1/DIR8/6", 128);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.fieldEffect_ProcessOnOffLayer('04', "Effect/Direction15.img/effect/BM1/cyg/4", 0, 1500, 0, 0, 1, 4, 0);
                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face3#我要做的事情……！！", 37, 3003656, false, true);
                                                                                                                                cm.effect_Voice("Voice4.img/BM1/DIR8/7", 128);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.fieldEffect_ProcessOnOffLayer('03', '', 2, 300, 0, 0, 0, 0, 0);
                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.fieldEffect_ProcessOnOffLayer('04', '', 2, 500, 0, 0, 0, 0, 0);
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.Hidden_background("spine1", 1, 1, 0, 0);
                                                                                                                                      cm.onSetMapObjectCreateLayerMore('spine1', 2, "charge", 1);
                                                                                                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM1/wakeUp_boom", 200);
                                                                                                                                            cm.playSoundEffDirectly("Ambience.img/wakeUp_loop");
                                                                                                                                            cm.onSetMapObjectCreateLayerMore("spine1", 2, 'boom', 1);
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.fieldEffect_Hero9(80, 1000);
                                                                                                                                              cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                                                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                                                                      cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                                                                                    } else if (status === V++) {
                                                                                                                                                      cm.dispose();
                                                                                                                                                      cm.warp(993060068, 0, false);
                                                                                                                                                      cm.inGameDirectionEvent_SetHideEffect(0);
                                                                                                                                                      cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                    }
                                                                                                                                                  }
                                                                                                                                                }
                                                                                                                                              }
                                                                                                                                            }
                                                                                                                                          }
                                                                                                                                        }
                                                                                                                                      }
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}