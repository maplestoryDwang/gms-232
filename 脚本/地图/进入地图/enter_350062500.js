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
      cm.npc_ChangeController(1540714, "oid=286564671", 0, 25, 4, -50, 50, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=286564671", "summon", 0, 0);
      cm.npc_ChangeController(1540730, "oid=286564672", 680, -40, 6, 630, 730, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=286564672", "summon", 0, 0);
      cm.npc_ChangeController(1540717, "oid=286564673", 280, -40, 4, 230, 330, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=286564673", "summon", 0, 0);
      cm.updateInfoQuest(33267, "save=3;dir=1;le=0");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_PushScaleInfo(1000, 2000, 1000, -80, 60);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_MoveAction(4);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("咳。格里梅尔……", 57, 0, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("居然输给像我这样的人，你肯定很愤怒吧？", 37, 1540470, true, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.npc_SetSpecialAction("oid=286564671", "anti2", 0, 1);
                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                } else {
                  if (status === V++) {
                    cm.npc_SetSpecialAction("oid=286564671", "anti3", -1, 1);
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.askMenu_Bottom("好了，怎么样？如果你现在向我求饶，我就把解毒药给你。\r\n#b#L0#与其这样，我还不如死了算了。#l\r\n#L1#请救救我，格里梅尔。#l", 37, 1540470);
                    } else {
                      if (status === V++) {
                        if (e == 0) {
                          cm.sendNormalTalk_Bottom("噢，好感动。那我就满足你吧。", 37, 1540470, false, true);
                        } else {
                          cm.sendNormalTalk_Bottom("嘻嘻嘻，可惜你觉悟得太晚了。", 37, 1540470, false, true);
                        }
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.npc_SetSpecialAction("oid=286564671", 'anti4', 0, 1);
                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/gal_anti", 100);
                            cm.inGameDirectionEvent_AskAnswerTime(2500);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("好了，现在唯一的解毒药已经消失。嘻嘻嘻嘻。", 37, 1540470, false, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("只要再制造更强烈的炸弹就行了。", 37, 1540470, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("在研究结束之前，我是不会停下的！", 37, 1540470, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("小的们，给我看好这家伙。", 37, 1540470, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_SetForceMove("oid=286564671", 1, 700, 140);
                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_ChangeController(1540754, "oid=286574794", -41, -40, 4, -91, 9, 1, true, 0, false);
                                            cm.npc_SetSpecialAction("oid=286574794", "summon", 0, 0);
                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/AndroidA", 100);
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_ChangeController(1540754, "oid=286576897", 29, -40, 4, -21, 79, 1, true, 0, false);
                                              cm.npc_SetSpecialAction("oid=286576897", "summon", 0, 0);
                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/AndroidA", 100);
                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_ChangeController(1540754, "oid=286577150", 99, -40, 4, 49, 149, 1, true, 0, false);
                                                cm.npc_SetSpecialAction("oid=286577150", "summon", 0, 0);
                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/AndroidA", 100);
                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_ChangeController(1540755, "oid=286577579", -261, -40, 4, -311, -211, 0, true, 0, false);
                                                  cm.npc_SetSpecialAction("oid=286577579", "summon", 0, 0);
                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/AndroidB", 100);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.npc_ChangeController(1540755, "oid=286578144", -331, -40, 4, -381, -281, 0, true, 0, false);
                                                    cm.npc_SetSpecialAction("oid=286578144", 'summon', 0, 0);
                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/AndroidB", 100);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npc_ChangeController(1540755, "oid=286579239", -401, -40, 4, -451, -351, 0, true, 0, false);
                                                      cm.npc_SetSpecialAction("oid=286579239", 'summon', 0, 0);
                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/AndroidB", 100);
                                                      cm.npc_LeaveField("oid=286564671");
                                                      cm.npc_LeaveField("oid=286564671");
                                                      cm.npc_SetSpecialAction("oid=286564672", "stand2", -1, 1);
                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("电脑！", 37, 1540470, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("2分钟后自动引爆所有智能机器人。", 37, 1540470, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.effect_OnUserEff("Effect/OnUserEff.img/emotion/oh");
                                                            cm.npc_SetSpecialAction("oid=286574794", "stand2", -1, 1);
                                                            cm.npc_SetSpecialAction("oid=286576897", 'stand2', -1, 1);
                                                            cm.npc_SetSpecialAction("oid=286577150", 'stand2', -1, 1);
                                                            cm.setAmbience("Ambience.img/warning", 100, 60);
                                                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_PushScaleInfo(1000, 2000, 1000, 618, -70);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("那再见啦！", 37, 1540470, false, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_PushScaleInfo(300, 2000, 300, -80, 60);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/AndroidB", 100);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.npc_SetSpecialAction("oid=286574794", "jump", 0, 1);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(700);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/AndroidB", 100);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.npc_SetSpecialAction("oid=286576897", "jump", 0, 1);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(700);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/AndroidB", 100);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.npc_SetSpecialAction("oid=286577150", 'jump', 0, 1);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(700);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.npc_LeaveField("oid=286574794");
                                                                                    cm.npc_LeaveField("oid=286574794");
                                                                                    cm.npc_LeaveField("oid=286576897");
                                                                                    cm.npc_LeaveField("oid=286576897");
                                                                                    cm.npc_LeaveField("oid=286577150");
                                                                                    cm.npc_LeaveField("oid=286577150");
                                                                                    cm.npc_LeaveField("oid=286577579");
                                                                                    cm.npc_LeaveField("oid=286577579");
                                                                                    cm.npc_LeaveField("oid=286578144");
                                                                                    cm.npc_LeaveField("oid=286578144");
                                                                                    cm.npc_LeaveField("oid=286579239");
                                                                                    cm.npc_LeaveField("oid=286579239");
                                                                                    cm.npc_SetSpecialAction("oid=286564672", "siege", 0, 1);
                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/gal_sieage", 100);
                                                                                    cm.inGameDirectionEvent_PushScaleInfo(1000, 2000, 1000, 618, -70);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(3600);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.npc_SetSpecialAction("oid=286564672", 'siege2', -1, 1);
                                                                                        cm.sendNormalTalk_Bottom("#face1#呃，这些家伙在搞什么啊？", 37, 1540470, false, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("爸爸……。", 45, 1540754, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face1#还不快给我下去？！", 37, 1540470, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face1#要逃走的人只有我一个！", 37, 1540470, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.npc_SetSpecialAction("oid=286564672", "siege3", 0, 1);
                                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/gal_sieage2", 100);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(3600);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.npc_SetSpecialAction("oid=286564672", 'siege4', -1, 1);
                                                                                                  cm.sendNormalTalk_Bottom("#face1#等，等等！", 37, 1540470, false, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("把我们也带走……爸爸……", 45, 1540754, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face1#我明明帮你们去除了生存本能！", 37, 1540470, true, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("不要……丢下我们……", 45, 1540754, true, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face1#还不快放开？！", 37, 1540470, true, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face1#你们只是机器！\r\n你们要为我战斗，然后死去！", 37, 1540470, true, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.inGameDirectionEvent_PushScaleInfo(1000, 1000, 1000, 270, -70);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.inGameDirectionEvent_MoveAction(0);
                                                                                                                    cm.sendNormalTalk_Bottom("(好像马上就要爆炸了。)", 57, 0, false, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("(在右边尽头处看到了控制杆。)", 57, 0, true, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.playSoundEffDirectly("Ambience.img/warning");
                                                                                                                        cm.inGameDirectionEvent_PushMoveInfo(1, 2000, 0, 0);
                                                                                                                      } else if (status === V++) {
                                                                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                                                                        cm.dispose();
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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