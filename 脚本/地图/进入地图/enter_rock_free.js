var status = -1;
var selectionLog = [];
function action(f, E, e) {
  var V = cm.getMapId();
  if (V == 940200410) {
    action0(f, E, e);
  } else {
    if (V == 940200411) {
      action1(f, E, e);
    } else {
      if (V == 940200412) {
        action2(f, E, e);
      } else {
        if (V == 940200413) {
          action3(f, E, e);
        } else {
          if (V == 940200414) {
            action4(f, E, e);
          } else if (V == 940200415) {
            if (cm.getNumberFromQuestInfo(34474, 'type') == 1) {
              action51(f, E, e);
            } else {
              action52(f, E, e);
            }
          }
        }
      }
    }
  }
}
function action0(f, E, e) {
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
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(300);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 1380, -340);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(300);
        } else {
          if (status === V++) {
            cm.npc_ChangeController(3003366, "oid=1900951", 1430, -400, 52, 1380, 1480, 1, false, 0, false);
            cm.npc_SetSpecialAction("oid=1900951", "summon", 0, 0);
            cm.npc_SetSpecialAction("oid=1900951", 'stand2', -1, 1);
            cm.inGameDirectionEvent_AskAnswerTime(300);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face1#额，卡住了，卡住了啊！好，好痛苦的！", 37, 3003314, false, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_PushScaleInfo(600, 2000, 600, 1380, -380);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(600);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_QTE(0);
                    } else {
                      if (status === V++) {
                        cm.setNpcSpecialActionReset("oid=1900951");
                        cm.inGameDirectionEvent_OneTimeAction(7, 0);
                        cm.npc_SetSpecialAction("oid=1900951", "free", 0, 1);
                        cm.inGameDirectionEvent_AskAnswerTime(1600);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                          } else if (status === V++) {
                            cm.setInGameDirectionMode(false, true, false);
                            cm.dispose();
                            cm.warp(450005410, 4, true);
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function action1(f, E, e) {
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
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(300);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -2058, 177);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(300);
        } else {
          if (status === V++) {
            cm.npc_ChangeController(3003366, "oid=1901010", -2008, 117, 46, -2058, -1958, 1, false, 0, false);
            cm.npc_SetSpecialAction("oid=1901010", 'summon', 0, 0);
            cm.npc_SetSpecialAction("oid=1901010", "stand2", -1, 1);
            cm.inGameDirectionEvent_AskAnswerTime(300);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face1#额啊啊，那个巨大的根突然就长大了！那些残暴的精灵好可怕！", 37, 3003314, false, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_PushScaleInfo(600, 2000, 600, -2058, 137);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(600);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_QTE(0);
                    } else {
                      if (status === V++) {
                        cm.setNpcSpecialActionReset("oid=1901010");
                        cm.inGameDirectionEvent_OneTimeAction(7, 0);
                        cm.npc_SetSpecialAction("oid=1901010", 'free', 0, 1);
                        cm.inGameDirectionEvent_AskAnswerTime(1600);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                          } else if (status === V++) {
                            cm.setInGameDirectionMode(false, true, false);
                            cm.dispose();
                            cm.warp(450005411, 1, true);
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function action2(f, E, e) {
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
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(300);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -2803, 175);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(300);
        } else {
          if (status === V++) {
            cm.npc_ChangeController(3003366, "oid=1901084", -2753, 115, 75, -2803, -2703, 1, false, 0, false);
            cm.npc_SetSpecialAction("oid=1901084", 'summon', 0, 0);
            cm.npc_SetSpecialAction("oid=1901084", "stand2", -1, 1);
            cm.inGameDirectionEvent_AskAnswerTime(300);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face1#额啊啊，被水卷走了之后，就嘭一下卡住了！有人吗，有人能把我救出去吗！", 37, 3003314, false, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_PushScaleInfo(600, 2000, 600, -2803, 135);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(600);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_QTE(0);
                    } else {
                      if (status === V++) {
                        cm.setNpcSpecialActionReset("oid=1901084");
                        cm.inGameDirectionEvent_OneTimeAction(7, 0);
                        cm.npc_SetSpecialAction("oid=1901084", "free", 0, 1);
                        cm.inGameDirectionEvent_AskAnswerTime(1600);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                          } else if (status === V++) {
                            cm.setInGameDirectionMode(false, true, false);
                            cm.dispose();
                            cm.warp(450005412, 1, true);
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function action3(f, E, e) {
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
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(300);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -4380, 148);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(300);
        } else {
          if (status === V++) {
            cm.npc_ChangeController(3003366, "oid=1900675", -4330, 88, 37, -4380, -4280, 1, false, 0, false);
            cm.npc_SetSpecialAction("oid=1900675", "summon", 0, 0);
            cm.npc_SetSpecialAction("oid=1900675", "stand2", -1, 1);
            cm.inGameDirectionEvent_AskAnswerTime(300);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face1#额，石精灵好想咕噜噜地滚起来啊！咕噜噜，咕噜噜！", 37, 3003314, false, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_PushScaleInfo(600, 2000, 600, -4380, 108);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(600);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_QTE(0);
                    } else {
                      if (status === V++) {
                        cm.setNpcSpecialActionReset("oid=1900675");
                        cm.inGameDirectionEvent_OneTimeAction(7, 0);
                        cm.npc_SetSpecialAction("oid=1900675", "free", 0, 1);
                        cm.inGameDirectionEvent_AskAnswerTime(1600);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                          } else if (status === V++) {
                            cm.setInGameDirectionMode(false, true, false);
                            cm.dispose();
                            cm.warp(450005430, 2, true);
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function action4(f, E, e) {
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
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(300);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -4714, -270);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(300);
        } else {
          if (status === V++) {
            cm.npc_ChangeController(3003366, "oid=1900692", -4664, -330, 33, -4714, -4614, 1, false, 0, false);
            cm.npc_SetSpecialAction("oid=1900692", "summon", 0, 0);
            cm.npc_SetSpecialAction("oid=1900692", "stand2", -1, 1);
            cm.inGameDirectionEvent_AskAnswerTime(300);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face1#额，再这样下去，石精灵说不定会碎的！", 37, 3003314, false, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_PushScaleInfo(600, 2000, 600, -4714, -310);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(600);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_QTE(0);
                    } else {
                      if (status === V++) {
                        cm.setNpcSpecialActionReset("oid=1900692");
                        cm.inGameDirectionEvent_OneTimeAction(7, 0);
                        cm.npc_SetSpecialAction("oid=1900692", "free", 0, 1);
                        cm.inGameDirectionEvent_AskAnswerTime(1600);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                          } else if (status === V++) {
                            cm.setInGameDirectionMode(false, true, false);
                            cm.dispose();
                            cm.warp(450005431, 2, true);
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function action51(f, E, e) {
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
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(300);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -5462, 58);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(300);
        } else {
          if (status === V++) {
            cm.npc_ChangeController(3003366, "oid=1900732", -5412, -2, 57, -5462, -5362, 1, false, 0, false);
            cm.npc_SetSpecialAction("oid=1900732", "summon", 0, 0);
            cm.npc_SetSpecialAction("oid=1900732", 'stand2', -1, 1);
            cm.inGameDirectionEvent_AskAnswerTime(300);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face1#怎么会发生这种事呢！额，我好想见见精灵之树！额，你是谁啊！？", 37, 3003314, false, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_PushScaleInfo(600, 2000, 600, -5462, 18);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(600);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_QTE(0);
                    } else {
                      if (status === V++) {
                        cm.setNpcSpecialActionReset("oid=1900732");
                        cm.inGameDirectionEvent_OneTimeAction(7, 0);
                        cm.npc_SetSpecialAction("oid=1900732", "free", 0, 1);
                        cm.inGameDirectionEvent_AskAnswerTime(1600);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                          } else if (status === V++) {
                            cm.setInGameDirectionMode(false, true, false);
                            cm.dispose();
                            cm.warp(450005432, 3, true);
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function action52(f, E, e) {
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
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(300);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -4754, -306);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(300);
        } else {
          if (status === V++) {
            cm.npc_ChangeController(3003366, "oid=1900744", -4704, -366, 35, -4754, -4654, 1, false, 0, false);
            cm.npc_SetSpecialAction("oid=1900744", "summon", 0, 0);
            cm.npc_SetSpecialAction("oid=1900744", "stand2", -1, 1);
            cm.inGameDirectionEvent_AskAnswerTime(300);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face1#那些残暴的精灵都一窝蜂地从根里出来了！我们得赶紧逃啊！喔！", 37, 3003314, false, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_PushScaleInfo(600, 2000, 600, -4754, -346);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(600);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_QTE(0);
                    } else {
                      if (status === V++) {
                        cm.setNpcSpecialActionReset("oid=1900744");
                        cm.inGameDirectionEvent_OneTimeAction(7, 0);
                        cm.npc_SetSpecialAction("oid=1900744", "free", 0, 1);
                        cm.inGameDirectionEvent_AskAnswerTime(1600);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                          } else if (status === V++) {
                            cm.setInGameDirectionMode(false, true, false);
                            cm.dispose();
                            cm.warp(450005432, 4, true);
                          }
                        }
                      }
                    }
                  }
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