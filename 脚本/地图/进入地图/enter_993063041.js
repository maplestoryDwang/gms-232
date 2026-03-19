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
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.fieldEffect_PlayBGM("Bgm49/FerociousBattlefield_ShortEdit", 0, 0);
      cm.setAmbience("SoundEff.img/BM2/powerin", 80, 100);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 25, 155);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_ForcedFlip(1);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_OneTimeAction(25, 99999);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.npc_ChangeController(3003773, "oid=2211622", -90, 220, 1, -140, -40, 0, false, 1000, false);
            cm.npc_SetSpecialAction("oid=2211622", 'summon', 0, 0);
            cm.npc_SetSpecialAction("oid=2211622", "off", -1, 1);
            cm.npc_ChangeController(3003771, "oid=2211623", 220, 220, 12, 170, 270, 1, true, 1000, false);
            cm.npc_SetSpecialAction("oid=2211623", "summon", 0, 0);
            cm.npc_SetSpecialAction("oid=2211623", "stand", -1, 1);
            cm.npc_ChangeController(3003775, "oid=2211624", 600, 220, 16, 550, 650, 1, false, 1000, false);
            cm.npc_SetSpecialAction("oid=2211624", "summon", 0, 0);
            cm.npc_ChangeController(3003774, "oid=2211625", 430, 220, 13, 380, 480, 1, true, 1000, false);
            cm.npc_SetSpecialAction("oid=2211625", 'summon', 0, 0);
            cm.npc_ChangeController(3003726, "oid=2211626", -325, 180, 3, -375, -275, 0, true, 1000, false);
            cm.npc_SetSpecialAction("oid=2211626", "summon", 0, 0);
            cm.npc_ChangeController(3003726, "oid=2211627", -475, 180, 5, -525, -425, 0, true, 1000, false);
            cm.npc_SetSpecialAction("oid=2211627", "summon", 0, 0);
            cm.npc_ChangeController(3003726, "oid=2211628", -160, 180, 1, -210, -110, 1, true, 1000, false);
            cm.npc_SetSpecialAction("oid=2211628", "summon", 0, 0);
            cm.npc_SetSpecialAction("oid=2211626", "stand", -1, 1);
            cm.npc_SetSpecialAction("oid=2211627", "stand", -1, 1);
            cm.npc_SetSpecialAction("oid=2211628", "stand", -1, 1);
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_头顶图片(["Effect/Direction20.img/effect/BM2_effect/8"], [99999, -1, 0, 1, 0, 0, 0, 0]);
              cm.inGameDirectionEvent_头顶图片(["Effect/Direction20.img/effect/BM2_effect/9"], [99999, 0, 0, 1, 0, 0, 0, 0]);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face2#那……是？", 37, 3003771, false, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_OneTimeAction(2, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.setNpcSpecialActionReset("oid=2211626");
                      cm.setNpcSpecialActionReset("oid=2211627");
                      cm.setNpcSpecialActionReset("oid=2211628");
                      cm.npc_SetSpecialAction("oid=2211626", "die1", 1, 1);
                      cm.npc_SetSpecialAction("oid=2211627", "die1", 1, 1);
                      cm.npc_SetSpecialAction("oid=2211628", "die1", 1, 1);
                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                    } else {
                      if (status === V++) {
                        cm.npc_LeaveField("oid=2211626");
                        cm.npc_LeaveField("oid=2211626");
                        cm.npc_LeaveField("oid=2211627");
                        cm.npc_LeaveField("oid=2211627");
                        cm.npc_LeaveField("oid=2211628");
                        cm.npc_LeaveField("oid=2211628");
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_同时移动镜头和人(2, 100);
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("我本以为是自己承担了一切……", 57, 0, false, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("要守护所有人的负担感，我要对一切负责的使命感……", 57, 0, false, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_同时移动镜头和人(2, 80);
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("我曾经一直以为我做不到所有人都得死，大家的生命都掌握在我手里。", 57, 0, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("这一切必须要我自己来完成。", 57, 0, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face3#你在说什么！", 37, 3003771, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.setNpcSpecialActionReset("oid=2211623");
                                            cm.npc_SetSpecialAction("oid=2211623", "attack1", 1, 1);
                                            cm.inGameDirectionEvent_AskAnswerTime(1300);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_ChangeController(3003518, "oid=2211637", -240, 180, 2, -290, -190, 0, false, 0, false);
                                              cm.npc_SetSpecialAction("oid=2211637", "summon", 0, 0);
                                              cm.npcMove(3003518, 0, -110, 0);
                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/esfera/portal_attack", 200);
                                              cm.npc_SetSpecialAction("oid=2211637", "special", 1, 1);
                                              cm.inGameDirectionEvent_AskAnswerTime(100);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1200, 0);
                                                cm.sendNormalTalk_Bottom("#face1#在哪儿！", 37, 3003773, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom('所以眼睛才被蒙蔽。', 57, 0, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("手脚才被束缚。", 57, 0, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("相信你给我看的都是真的，你让我做什么我就做什么，像木偶一样。", 57, 0, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("但是……", 57, 0, false, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction20.img/effect/BM2_mapleDefence/0", 0, 1500, 0, -80, 12, 4, 1, -1, 0, 0, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("我不是一个人。大家都在我身边……", 57, 0, false, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("大家现在也都很努力。", 57, 0, false, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.fieldEffect_ProcessOnOffLayer('01', "Effect/Direction20.img/effect/BM2_mapleDefence/1", 0, 1500, 0, -80, 12, 4, 1, -1, 0, 0, 0);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom('守护我们所爱的地方。', 57, 0, false, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.fieldEffect_ProcessOnOffLayer('02', "Effect/Direction20.img/effect/BM2_mapleDefence/2", 0, 1500, 0, -80, 12, 4, 1, -1, 0, 0, 0);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("我心里，我心里有所有人的心愿。", 57, 0, false, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("我，重新站起来了。希拉。我不会再被你邪恶的计谋束缚。", 57, 0, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom('我不会放弃。', 57, 0, false, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                              cm.fieldEffect_ProcessOnOffLayer('01', '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                              cm.fieldEffect_ProcessOnOffLayer('02', '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.fieldEffect_Hero9(0, 1000);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.fieldEffect_PlayBGM("Bgm49/DepthOfPain", 0, 0);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.fieldEffect_Hero9(80, 1000);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face1#清醒了还不过来帮忙？！", 37, 3003773, false, true);
                                                                                                          cm.effect_Voice("Voice4.img/BM2/H_add/4/1_1", 128);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face3#咳……", 37, 3003771, true, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("#face2#……", 37, 3003771, true, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face0#不，哪怕你现在稍微清醒了一些，你也不能违背伟大之人的旨意。", 37, 3003771, true, true);
                                                                                                                cm.effect_Voice("Voice4.img/BM2/H_add/2/1_1", 128);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#face0#你要是能乖乖跟着我就好了，没办法。", 37, 3003771, true, true);
                                                                                                                  cm.effect_Voice("Voice4.img/BM2/H_add/2/2_2", 128);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face0#既然你那么想找死！", 37, 3003771, true, true);
                                                                                                                    cm.effect_Voice("Voice4.img/BM2/H_add/2/3_1", 128);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.setNpcSpecialActionReset("oid=2211623");
                                                                                                                        cm.npc_SetSpecialAction("oid=2211623", "summon1", 1, 1);
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1900);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.npc_SetSpecialAction("oid=2211625", "regen", 1, 1);
                                                                                                                          cm.npc_SetSpecialAction("oid=2211624", "regen", 1, 1);
                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1800);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.npc_SetSpecialAction("oid=2211625", "stand1", -1, 1);
                                                                                                                            cm.npc_SetSpecialAction("oid=2211624", 'stand1', -1, 1);
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.inGameDirectionEvent_OneTimeAction(4, 0);
                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
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
                                                                                                                                        cm.updateInfoQuest(35730, "dir=3");
                                                                                                                                        cm.npc_LeaveField("oid=2211622");
                                                                                                                                        cm.npc_LeaveField("oid=2211622");
                                                                                                                                        cm.npc_LeaveField("oid=2211623");
                                                                                                                                        cm.npc_LeaveField("oid=2211623");
                                                                                                                                        cm.npc_LeaveField("oid=2211624");
                                                                                                                                        cm.npc_LeaveField("oid=2211624");
                                                                                                                                        cm.npc_LeaveField("oid=2211625");
                                                                                                                                        cm.npc_LeaveField("oid=2211625");
                                                                                                                                        cm.npc_LeaveField("oid=2211637");
                                                                                                                                        cm.npc_LeaveField("oid=2211637");
                                                                                                                                        cm.dispose();
                                                                                                                                        cm.warp(450010800, 0, false);
                                                                                                                                        cm.setStandAloneMode(false);
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