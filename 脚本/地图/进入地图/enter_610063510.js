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
      cm.updateInfoQuest(61333, "act1=610061570;act2=610062450;act3=610063510");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(9201539, "oid=2729530", -1830, 837, 1, -1880, -1780, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2729530", 'summon', 0, 0);
      cm.npc_ChangeController(9201536, "oid=2729531", -890, 772, 3, -940, -840, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2729531", 'summon', 0, 0);
      cm.npc_ChangeController(9201568, "oid=2729532", -946, 772, 3, -996, -896, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2729532", "summon", 0, 0);
      cm.npc_ChangeController(9201571, "oid=2729533", -1100, 772, 3, -1150, -1050, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2729533", "summon", 0, 0);
      cm.npc_ChangeController(9201572, "oid=2729534", -1200, 772, 3, -1250, -1150, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2729534", "summon", 0, 0);
      cm.npc_ChangeController(9201573, "oid=2729535", -1300, 439, 3, -1350, -1250, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2729535", "summon", 0, 0);
      cm.npc_ChangeController(9201570, "oid=2729536", -680, 439, 3, -730, -630, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2729536", 'summon', 0, 0);
      cm.npc_ChangeController(9201569, "oid=2729537", -1028, 772, 3, -1078, -978, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2729537", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=2729532", "die", -1, 0);
      cm.npc_SetSpecialAction("oid=2729531", "hurt", -1, 0);
      cm.npc_SetSpecialAction("oid=2729536", "cry", -1, 0);
      cm.npc_SetSpecialAction("oid=2729537", "angry", -1, 0);
      cm.fieldEffect_BackgroundCanvas(4, 50, 50, 50, 2000, 0, 0);
      cm.fieldEffect_BackgroundCanvas(5, 50, 50, 50, 2000, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(800);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_BackgroundCanvas(2, 50, 50, 50, 2000, 0, 0);
        cm.fieldEffect_BackgroundCanvas(3, 50, 50, 50, 2000, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(2200);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_同时移动镜头和人(2, 250);
          cm.inGameDirectionEvent_AskAnswerTime(4200);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("怎么又来！我受够了！", 57, 0, false, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_QTE(1);
            } else {
              if (status === V++) {
                cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1600);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -950, 800);
                  } else {
                    if (status === V++) {
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
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.npc_SetSpecialAction("oid=2729533", "die", 0, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                              if (status === V++) {
                                cm.npc_LeaveField("oid=2729533");
                                cm.npc_LeaveField("oid=2729533");
                                cm.npc_SetSpecialAction("oid=2729534", "die", 0, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === V++) {
                                  cm.npc_LeaveField("oid=2729534");
                                  cm.npc_LeaveField("oid=2729534");
                                  cm.npc_SetSpecialAction("oid=2729535", "die", 0, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else {
                                  if (status === V++) {
                                    cm.npc_LeaveField("oid=2729535");
                                    cm.npc_LeaveField("oid=2729535");
                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_BackgroundCanvas(4, 255, 255, 255, 2000, 0, 0);
                                      cm.fieldEffect_BackgroundCanvas(5, 255, 255, 255, 2000, 0, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(800);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_BackgroundCanvas(2, 255, 255, 255, 2000, 0, 0);
                                        cm.fieldEffect_BackgroundCanvas(3, 255, 255, 255, 2000, 0, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(2200);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("纳——纳瑞坎，你是什么时候获得这么强大的力量的？", 37, 9201536, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                          } else {
                                            if (status === V++) {
                                              cm.setNpcSpecialActionReset("oid=2729537");
                                              cm.npc_SetForceMove("oid=2729537", 1, 200, 200);
                                              cm.inGameDirectionEvent_AskAnswerTime(2200);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_setForceFlip("oid=2729531", 1);
                                                cm.sendNormalTalk_Bottom("你又在干嘛？\r\n你为什么不做点什么？", 37, 9201569, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("*呜咽*", 37, 9201570, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("我们的母亲……你看看她怎么了！", 37, 9201569, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npc_SetSpecialAction("oid=2729537", "angry", -1, 0);
                                                      cm.sendNormalTalk_Bottom("你说过你也想守护她！\r\n你说过你会跟我一起守护她的！", 37, 9201569, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("对——对不起。\r\n我——我太害怕了。", 37, 9201570, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face1#纳瑞坎，别说了……现在不是时候。", 37, 9201536, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.npc_ChangeController(9201535, "oid=2730122", -1302, 772, 3, -1352, -1252, 1, true, 0, false);
                                                            cm.npc_SetSpecialAction("oid=2730122", "summon", 0, 0);
                                                            cm.npc_SetForceMove("oid=2730122", 1, 200, 200);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("格罗娜！卢坎，发生了什么事？", 37, 9201535, false, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.npc_setForceFlip("oid=2729531", -1);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.npc_setForceFlip("oid=2729537", -1);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face1#请你原谅我，绯红之心。\r\n我没能阻止他们。", 37, 9201536, false, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face1#格罗娜牺牲了自己……我……", 37, 9201536, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.npc_SetForceMove("oid=2730122", 1, 20, 50);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face1#格罗娜……", 37, 9201535, false, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.npc_SetForceMove("oid=2729537", -1, 100, 200);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("你怎么才来？", 37, 9201569, false, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("纳瑞坎……", 37, 9201535, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("回答我！\r\n你根本就没有关心过母亲吧。", 37, 9201569, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("你根本就没有关心过你的家人！！\r\n我问你，你到底为什么才来？", 37, 9201569, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("我……很抱歉。", 37, 9201535, false, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("道歉有什么用！\r\n母亲会死都是你的错！\r\n我恨你！", 37, 9201569, false, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("我恨你，父亲！", 37, 9201569, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.setNpcSpecialActionReset("oid=2729537");
                                                                                                      cm.npc_SetForceMove("oid=2729537", -1, 300, 200);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.npc_setForceFlip("oid=2730122", -1);
                                                                                                        cm.npc_LeaveField("oid=2729537");
                                                                                                        cm.npc_LeaveField("oid=2729537");
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("对——对不起！哇啊啊啊！", 37, 9201570, false, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                  } else if (status === V++) {
                                                                                                                    cm.eventSKill(0);
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