var status = -1;
var selectionLog = [];
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
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.Hidden_background("magic_pre", 1, 0, 0, 0);
      cm.Hidden_background("magic_start", 1, 1, 0, 0);
      cm.fieldEffect_PlayBGM("SoundEff.img/morass/magic_ab", 0, 0);
      cm.npc_ChangeController(3003401, "oid=2006031", -275, -55, 4, -325, -225, 1, false, false);
      cm.npc_SetSpecialAction("oid=2006031", "summon", 0, 0);
      cm.npc_ChangeController(3003408, "oid=2006032", -550, 0, 11, -600, -500, 0, true, false);
      cm.npc_SetSpecialAction("oid=2006032", "summon", 0, 0);
      cm.npc_ChangeController(3003408, "oid=2006033", -450, 0, 8, -500, -400, 0, true, false);
      cm.npc_SetSpecialAction("oid=2006033", "summon", 0, 0);
      cm.npc_ChangeController(3003408, "oid=2006034", -10, 0, 9, -60, 40, 1, true, false);
      cm.npc_SetSpecialAction("oid=2006034", "summon", 0, 0);
      cm.npc_ChangeController(3003408, "oid=2006035", 60, 0, 12, 10, 110, 1, true, false);
      cm.npc_SetSpecialAction("oid=2006035", "summon", 0, 0);
      cm.npc_ChangeController(3003404, "oid=2006036", 220, 0, 12, 170, 270, 1, true, false);
      cm.npc_SetSpecialAction("oid=2006036", "summon", 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -829, -20);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, -280, -200);
    } else {
      if (status === V++) {
        cm.npc_SetSpecialAction("oid=2006031", "special2", -1, 1);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face9#嗬呃呃呃！！", 37, 3003400, false, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, -275, -100);
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
                  cm.sendNormalTalk_Bottom("好严重啊……", 57, 0, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#排斥反应已经到达临界值了。", 37, 3003408, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#难道已经到达极限了……", 37, 3003404, true, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#那个丫头片子？", 37, 3003407, false, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_PushScaleInfo(450, 2000, 450, 440, 0);
                          } else {
                            if (status === V++) {
                              cm.npc_setForceFlip("oid=2006036", 1);
                              cm.npc_setForceFlip("oid=2006034", 1);
                              cm.npc_setForceFlip("oid=2006035", 1);
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                              if (status === V++) {
                                cm.npc_ChangeController(3003407, "oid=2006037", 480, 0, 14, 430, 530, 1, true, 1000, false);
                                cm.npc_SetSpecialAction("oid=2006037", "summon", 0, 0);
                                cm.npc_ChangeController(3003451, "oid=2006038", 390, 0, 14, 340, 440, 1, false, 1000, false);
                                cm.npc_SetSpecialAction("oid=2006038", "summon", 0, 0);
                                cm.npc_ChangeController(3003451, "oid=2006039", 590, 0, 14, 540, 640, 1, false, 1000, false);
                                cm.npc_SetSpecialAction("oid=2006039", "summon", 0, 0);
                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/secretmission3", 100);
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_PlayBGM("Bgm25.img/knightsStronghold", 0, 0);
                                  cm.sendNormalTalk_Bottom("(那人是海加顿！)", 57, 0, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#殿、殿下……", 37, 3003404, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_SetForceMove("oid=2006037", -1, 550, 120);
                                      cm.inGameDirectionEvent_PushScaleInfo(5000, 2000, 50000, -170, 0);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(2500);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_setForceFlip("oid=2006036", 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_setForceFlip("oid=2006035", 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_setForceFlip("oid=2006034", 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#提高强度吧。", 37, 3003407, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#可是殿下，排斥反应……", 37, 3003404, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0##fs20#我就是……王。", 37, 3003407, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(700);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.npc_SetSpecialAction("oid=2006037", "special2", 0, 1);
                                                        cm.inGameDirectionEvent_AskAnswerTime(700);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.userSetFieldFloating(940204006, 3, 3, 1);
                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/metaldrop", 100);
                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.userSetFieldFloating(940204006, 0, 0, 0);
                                                            cm.sendNormalTalk_Bottom("#face0##fs22##r你是要违抗王命吗？", 37, 3003407, false, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#……我会照做的。", 37, 3003404, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.npc_SetSpecialAction("oid=2006031", "special3", -1, 1);
                                                                  cm.setAmbience("SoundEff.img/morass/tana1", 100, 60);
                                                                  cm.userSetFieldFloating(940204006, 3, 3, 1);
                                                                  cm.sendNormalTalk_Bottom("#face0#排、排斥反应还在继续加重！", 37, 3003408, false, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face9#嗬呃……", 37, 3003400, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#根本不受控制！", 37, 3003408, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#停止实验！快退后，殿下！", 37, 3003404, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#继续！谁让你们停下了！！", 37, 3003407, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.userSetFieldFloating(940204006, 5, 5, 1);
                                                                            cm.sendNormalTalk_Bottom("#face9#（呼，呼……）", 37, 3003400, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#快、快逃！！", 37, 3003408, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.npc_SetForceMove("oid=2006032", -1, 200, 200);
                                                                                  cm.npc_SetForceMove("oid=2006033", -1, 200, 200);
                                                                                  cm.npc_SetForceMove("oid=2006034", 1, 300, 200);
                                                                                  cm.npc_SetForceMove("oid=2006035", 1, 300, 200);
                                                                                  cm.playSoundEffDirectly("SoundEff.img/morass/tana1");
                                                                                  cm.npc_SetSpecialAction("oid=2006031", "special4", 0, 1);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(700);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/morass/tana2", 100);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.userSetFieldFloating(940204006, 0, 0, 0);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, -250, -100);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.setNpcSpecialActionReset("oid=2006031");
                                                                                              cm.npc_setForceFlip("oid=2006032", 1);
                                                                                              cm.npc_setForceFlip("oid=2006033", 1);
                                                                                              cm.npc_setForceFlip("oid=2006034", -1);
                                                                                              cm.npc_setForceFlip("oid=2006035", -1);
                                                                                              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.userSetFieldFloating(940204006, 0, 0, 0);
                                                                                                cm.sendNormalTalk_Bottom("#face0#(差、差点出大事了。)", 37, 3003408, false, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face0#(殿下……不是好好的吗？)", 37, 3003408, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.npc_SetSpecialAction("oid=2006037", "special1", 0, 1);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face0#(看到了吗？刚刚殿下的身体……)", 37, 3003408, false, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face0#(他也已经失去人类的躯体了。)", 37, 3003408, true, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face0#(怪物……)", 37, 3003408, true, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.setNpcSpecialActionReset("oid=2006031");
                                                                                                              cm.sendNormalTalk_Bottom("#face0##fs18##r阿卡伊勒……离举行仪式的日子越来越近了。", 37, 3003407, false, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face0#……真是没脸见你。", 37, 3003404, true, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.OverlapScreenDetail19(0, 1000, 1500, 1);
                                                                                                                    cm.inGameDirectionEvent_PushScaleInfo(0, 3000, 0, -100, 40);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.npc_setForceFlip("oid=2006037", 1);
                                                                                                                      cm.sendNormalTalk_Bottom("#face0#不惜任何手段，一定要找到方法。", 37, 3003407, false, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face0##r#fs18#如果失败……", 37, 3003407, true, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/secretmission3", 100);
                                                                                                                          cm.sendNormalTalk_Bottom("#face0##r#fs20#你最好做好心理准备。", 37, 3003407, true, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.OverlapScreenDetail19(0, 500, 500, 1);
                                                                                                                              cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, -275, -100);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#又一次失败了。", 37, 3003408, false, true);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#不管怎么样，终于能摆脱这令人作呕的监狱了……", 37, 3003408, true, true);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#无论成功与否，试验对象都会陨灭。", 37, 3003408, true, true);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#……", 37, 3003400, false, true);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("(看来……要查看一下回忆录了。)", 57, 0, true, true);
                                                                                                                                                cm.gainItem(4161098, -1);
                                                                                                                                                cm.gainItem(4161099, 1);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                                                                                  } else if (status === V++) {
                                                                                                                                                    cm.updateInfoQuest(34261, "book=1");
                                                                                                                                                    cm.forceCompleteQuest(34261);
                                                                                                                                                    cm.gainItem(4036311, -20);
                                                                                                                                                    cm.npc_LeaveField("oid=2006031");
                                                                                                                                                    cm.npc_LeaveField("oid=2006032");
                                                                                                                                                    cm.npc_LeaveField("oid=2006033");
                                                                                                                                                    cm.npc_LeaveField("oid=2006034");
                                                                                                                                                    cm.npc_LeaveField("oid=2006035");
                                                                                                                                                    cm.npc_LeaveField("oid=2006036");
                                                                                                                                                    cm.npc_LeaveField("oid=2006037");
                                                                                                                                                    cm.npc_LeaveField("oid=2006038");
                                                                                                                                                    cm.npc_LeaveField("oid=2006039");
                                                                                                                                                    cm.dispose();
                                                                                                                                                    cm.warp(450006240, 0, true);
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
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;