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
      cm.updateInfoQuest(61333, "act1=610061570;act2=610062450;act3=610063570");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(9201539, "oid=2737681", -1830, 837, 1, -1880, -1780, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2737681", "summon", 0, 0);
      cm.npc_ChangeController(9201534, "oid=2737682", -1317, 772, 3, -1367, -1267, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2737682", 'summon', 0, 0);
      cm.npc_ChangeController(9201575, "oid=2737683", -1058, 772, 3, -1108, -1008, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2737683", 'summon', 0, 0);
      cm.npc_ChangeController(9201576, "oid=2737684", -780, 772, 3, -830, -730, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2737684", 'summon', 0, 0);
      cm.npc_SetSpecialAction("oid=2737682", "attack2", -1, 0);
      cm.inGameDirectionEvent_同时移动镜头和人(2, 300);
      cm.inGameDirectionEvent_AskAnswerTime(3200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_BackgroundCanvas(4, 125, 125, 125, 2000, 0, 0);
        cm.fieldEffect_BackgroundCanvas(5, 125, 125, 125, 2000, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(800);
      } else {
        if (status === V++) {
          cm.fieldEffect_BackgroundCanvas(2, 125, 125, 125, 2000, 0, 0);
          cm.fieldEffect_BackgroundCanvas(3, 125, 125, 125, 2000, 0, 0);
          cm.inGameDirectionEvent_头顶图片(["Map/EffectGL.img/MBlockbuster/n_attack", "oid=2737682"], [30000, 5, -30, 1, 0, 1, 0, 0]);
          cm.inGameDirectionEvent_AskAnswerTime(2200);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_QTE(3);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_QTE(2);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_QTE(7);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_QTE(2);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_QTE(2);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_QTE(3);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_QTE(7);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_QTE(7);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_QTE(3);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_QTE(2);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("他怎么会这么强？天啊！", 57, 0, false, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -1000, 800);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.setNpcSpecialActionReset("oid=2737682");
                                          cm.npc_SetSpecialAction("oid=2737683", "hurt", -1, 0);
                                          cm.npc_SetSpecialAction("oid=2737684", 'hurt', -1, 0);
                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(1400);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_SetForceMove("oid=2737682", 1, 300, 50);
                                                cm.sendNormalTalk_Bottom("#face0#好吧，米勒德……既然你不知道，那我只能问海娜了。", 37, 9201534, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#前提是她还能说得了话。", 37, 9201534, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.npc_setForceFlip("oid=2737683", 1);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("住——住手……", 37, 9201575, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("告诉我幻日在哪。", 37, 9201534, false, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("你快给我住手！\r\n我警告你，纳瑞坎，你会后悔的！", 37, 9201575, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.npc_setForceFlip("oid=2737682", -1);
                                                                cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.npc_setForceFlip("oid=2737682", 1);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face1#海娜真是可怜。", 37, 9201534, false, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("她死都不会忘记你对她见死不救吧。", 37, 9201534, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.npc_SetSpecialAction("oid=2737682", "attack2", -1, 0);
                                                                        cm.fieldEffect_BackgroundCanvas(4, 50, 50, 50, 2000, 0, 0);
                                                                        cm.fieldEffect_BackgroundCanvas(5, 50, 50, 50, 2000, 0, 0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(800);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.fieldEffect_BackgroundCanvas(2, 50, 50, 50, 2000, 0, 0);
                                                                          cm.fieldEffect_BackgroundCanvas(3, 50, 50, 50, 2000, 0, 0);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(4200);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#b冒——冒险岛世界！#k", 37, 9201575, false, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.setNpcSpecialActionReset("oid=2737682");
                                                                              cm.fieldEffect_BackgroundCanvas(4, 255, 255, 255, 1000, 0, 0);
                                                                              cm.fieldEffect_BackgroundCanvas(5, 255, 255, 255, 1000, 0, 0);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(800);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.fieldEffect_BackgroundCanvas(2, 255, 255, 255, 1000, 0, 0);
                                                                                cm.fieldEffect_BackgroundCanvas(3, 255, 255, 255, 1000, 0, 0);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.npc_setForceFlip("oid=2737682", -1);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("你说什么？", 37, 9201534, false, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("不——不……", 37, 9201576, false, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("幻日在一个叫冒险岛世界的地方。", 37, 9201575, false, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("你满意了吧。\r\n快放了海娜。", 37, 9201575, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("别再继续战斗了。", 37, 9201575, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face0#可以。识时务者为俊杰。", 37, 9201534, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.npc_SetForceMove("oid=2737682", -1, 500, 80);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(7200);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.npc_LeaveField("oid=2737682");
                                                                                                      cm.npc_LeaveField("oid=2737682");
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("请原谅我吧，父亲……\r\n对不起，苏巴尼。", 37, 9201575, false, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                          } else if (status === V++) {
                                                                                                            cm.eventSKill(0);
                                                                                                            cm.dispose();
                                                                                                            cm.warp(610063580, 0, true);
                                                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                                                            cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 2);
                                                                                                            cm.updateInfoQuest(61370, "1=1;2=1;3=1;4=1;5=1;6=1;7=1;8=1");
                                                                                                            cm.gainExp(Math.pow(cm.getLevel(), 3) / 2);
                                                                                                            cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                                                                                            cm.npc_LeaveField("oid=2737681");
                                                                                                            cm.npc_LeaveField("oid=2737681");
                                                                                                            cm.npc_LeaveField("oid=2737683");
                                                                                                            cm.npc_LeaveField("oid=2737683");
                                                                                                            cm.npc_LeaveField("oid=2737684");
                                                                                                            cm.npc_LeaveField("oid=2737684");
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}