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
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 100, 250);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.npc_ChangeController(3001508, "oid=144144227", -54, 237, 1, -104, -4, 0, true, 0, false);
          cm.npc_SetSpecialAction("oid=144144227", "summon", 0, 0);
          cm.npc_ChangeController(3001509, "oid=144144228", 298, 200, 1, 248, 348, 1, true, 0, false);
          cm.npc_SetSpecialAction("oid=144144228", "summon", 0, 0);
          cm.npc_ChangeController(3001512, "oid=144144229", 374, 200, 1, 324, 424, 1, true, 0, false);
          cm.npc_SetSpecialAction("oid=144144229", "summon", 0, 0);
          cm.npc_ChangeController(3001513, "oid=144144230", 431, 200, 2, 381, 481, 1, true, 0, false);
          cm.npc_SetSpecialAction("oid=144144230", 'summon', 0, 0);
          cm.npc_ChangeController(3001510, "oid=144144231", 550, 200, 2, 500, 600, 1, true, 0, false);
          cm.npc_SetSpecialAction("oid=144144231", 'summon', 0, 0);
          cm.npc_ChangeController(3001514, "oid=144144232", -181, 200, 1, -231, -131, 0, false, 0, false);
          cm.npc_SetSpecialAction("oid=144144232", 'summon', 0, 0);
          cm.npc_ChangeController(3001515, "oid=144144233", -330, 200, 1, -380, -280, 0, false, 0, false);
          cm.npc_SetSpecialAction("oid=144144233", "summon", 0, 0);
          cm.npc_ChangeController(3001516, "oid=144144234", -275, 200, 1, -325, -225, 0, false, 0, false);
          cm.npc_SetSpecialAction("oid=144144234", "summon", 0, 0);
          cm.npc_ChangeController(3001517, "oid=144144235", -487, -5, 3, -537, -437, 0, false, 0, false);
          cm.npc_SetSpecialAction("oid=144144235", 'summon', 0, 0);
          cm.npc_ChangeController(3001518, "oid=144144236", -330, -5, 5, -380, -280, 0, false, 0, false);
          cm.npc_SetSpecialAction("oid=144144236", "summon", 0, 0);
          cm.npc_ChangeController(3001519, "oid=144144237", -435, -5, 4, -485, -385, 0, false, 0, false);
          cm.npc_SetSpecialAction("oid=144144237", "summon", 0, 0);
          cm.npc_ChangeController(3001520, "oid=144144238", -380, -5, 4, -430, -330, 0, false, 0, false);
          cm.npc_SetSpecialAction("oid=144144238", "summon", 0, 0);
          cm.npc_ChangeController(3001521, "oid=144144239", -331, 132, 9, -381, -281, 0, false, 0, false);
          cm.npc_SetSpecialAction("oid=144144239", "summon", 0, 0);
          cm.npc_ChangeController(3001522, "oid=144144240", -439, 93, 8, -489, -389, 0, false, 0, false);
          cm.npc_SetSpecialAction("oid=144144240", "summon", 0, 0);
          cm.npc_ChangeController(3001511, "oid=144144241", -830, 200, 10, -880, -780, 0, true, 0, false);
          cm.npc_SetSpecialAction("oid=144144241", "summon", 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
            cm.sendNormalTalk_Bottom("#face0#维依，巴克巴克，蹦蹦，当当，还有亚克……大家……路上小心。", 37, 3001508, 0, 1);
          } else {
            if (status === V++) {
              cm.npc_SetForceMove("oid=144144241", 1, 350, 200);
              cm.inGameDirectionEvent_AskAnswerTime(3500);
            } else {
              if (status === V++) {
                cm.npc_SetSpecialAction("oid=144144241", "falldown", 0, 1);
                cm.inGameDirectionEvent_AskAnswerTime(1500);
              } else {
                if (status === V++) {
                  cm.setNpcSpecialActionReset("oid=144144241");
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face2#嘿嘿，别受伤哦！", 37, 3001511, 0, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#要是有什么事，就通过电波装置联系，妮雅队长。不过首先得设定信号……就由队长来设定吧，叽勒。", 37, 3001510, 1, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face2#嗯……撤退时发送一次，成功发现动力源时两次，成功后返回时三次。", 37, 3001508, 1, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face3#如果……陷入危险就发送四次……希望不要发生这种情况……", 37, 3001508, 1, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face2#哈哈，别担心！我们一定会成功的。", 37, 3001509, 1, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#好了……走吧。", 37, 3001500 + cm.getPlayer().getGender(), 1, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face2#留在避难处的人做好应对空袭的准备。大家快回到原位。", 37, 3001508, 1, 1);
                              } else {
                                if (status === V++) {
                                  cm.npc_setForceFlip("oid=144144232", -1);
                                  cm.npc_setForceFlip("oid=144144233", -1);
                                  cm.npc_setForceFlip("oid=144144234", -1);
                                  cm.npc_setForceFlip("oid=144144235", -1);
                                  cm.npc_setForceFlip("oid=144144236", -1);
                                  cm.npc_setForceFlip("oid=144144237", -1);
                                  cm.npc_setForceFlip("oid=144144238", -1);
                                  cm.npc_setForceFlip("oid=144144239", -1);
                                  cm.npc_setForceFlip("oid=144144240", -1);
                                  cm.npc_setForceFlip("oid=144144241", -1);
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
                                          cm.npc_LeaveField("oid=144144232");
                                          cm.npc_LeaveField("oid=144144233");
                                          cm.npc_LeaveField("oid=144144234");
                                          cm.npc_LeaveField("oid=144144235");
                                          cm.npc_LeaveField("oid=144144236");
                                          cm.npc_LeaveField("oid=144144237");
                                          cm.npc_LeaveField("oid=144144238");
                                          cm.npc_LeaveField("oid=144144239");
                                          cm.npc_LeaveField("oid=144144240");
                                          cm.npc_LeaveField("oid=144144241");
                                          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 100, 250);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1000, 1000, 260, 250);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#哎呀，妮雅队长，还得设定避难处发送的电波信号。", 37, 3001510, 0, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face3#不用，够了，够了，那种事情不能用头脑去理解。\r\n应该用心去感觉！", 37, 3001509, 1, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face4#哈哈，激烈的心跳！嘭嘭，完美的韵律！", 37, 3001509, 1, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face2#唉，忍耐……忍耐。", 37, 3001510, 1, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 2000, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#哈，哈哈，好吧，我来告诉你。嗯，嗯……我们发送的信号……", 37, 3001508, 0, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 3000, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#现在其他人都走了，我们先制定一下计划吧。必须集中注意力听，叽勒。", 37, 3001510, 0, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.fieldEffect_ProcessOnOffLayer('d0', "Effect/Direction17.img/effect/ark/illust/8/0", 0, 500, 0, -80, -1, 4, 1, -1, 0, 0, 0);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_ProcessOnOffLayer('d1', "Effect/Direction17.img/effect/ark/illust/8/1", 0, 500, -200, 30, -1, 4, 1, -1, 0, 0, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.fieldEffect_ProcessOnOffLayer('d1', '', 1, 1000, 0, -150, 0, 0, 0, 0, 0, 0, 0);
                                                                      cm.sendNormalTalk_Bottom("#face0#叽，叽勒……除了已经发现的之外，剩下的电波共有两处。", 37, 3001510, 0, 1);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.fieldEffect_ProcessOnOffLayer('d1', '', 1, 1000, 140, 130, 0, 0, 0, 0, 0, 0, 0);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.fieldEffect_ProcessOnOffLayer('d1', '', 1, 1000, 140, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#首先……我们先去确认最近的一个。就在这一带……", 37, 3001510, 0, 1);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.fieldEffect_ProcessOnOffLayer('d1', '', 1, 1000, 100, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.fieldEffect_ProcessOnOffLayer('d1', '', 1, 1000, 0, -140, 0, 0, 0, 0, 0, 0, 0);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face4#之后去确认第三个电波……最后重新回到发光石头所在的地方。", 37, 3001510, 0, 1);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.fieldEffect_ProcessOnOffLayer('d1', '', 1, 1000, -200, 140, 0, 0, 0, 0, 0, 0, 0);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face1#嗬……这家伙……把自己当成队长了……可恶。", 37, 3001509, 0, 1);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face0#……", 37, 3001510, 1, 1);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#距离并不是很远，叽勒。有电波在，也不用担心迷路……让人担心的是……", 37, 3001510, 1, 1);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face2#哎呀，有个非常可怕的家伙经常在附近出没……", 37, 3001510, 1, 1);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face2#……但是现在我们别无选择，叽勒……快出发吧，叽勒，叽楞……", 37, 3001510, 0, 1);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.fieldEffect_ProcessOnOffLayer('d0', '', 2, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                    cm.fieldEffect_ProcessOnOffLayer('d1', '', 2, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
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
                                                                                                            cm.setStandAloneMode(false);
                                                                                                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                            cm.eventSKill(0);
                                                                                                            cm.warp(402090004, 0, false);
                                                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                                                            cm.npc_LeaveField("oid=144144227");
                                                                                                            cm.npc_LeaveField("oid=144144228");
                                                                                                            cm.npc_LeaveField("oid=144144229");
                                                                                                            cm.npc_LeaveField("oid=144144230");
                                                                                                            cm.npc_LeaveField("oid=144144231");
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