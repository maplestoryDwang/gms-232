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
      cm.npc_ChangeController(3001204, 'oid=257769', -1701, 26, 246, -1751, -1651, 0, false, false);
      cm.npc_ChangeController(3001212, "oid=257770", -1550, -85, 51, -1600, -1500, 1, false, false);
      cm.npc_ChangeController(3001216, "oid=257771", 627, -49, 4, 577, 677, 1, false, false);
      cm.npc_ChangeController(3001217, 'oid=257772', 450, -36, 2, 400, 500, 1, false, false);
      cm.npc_ChangeController(3001227, "oid=257773", -1311, -136, 53, -1361, -1261, 1, false, false);
      cm.npc_ChangeController(3001228, 'oid=257774', -1474, 41, 247, -1524, -1424, 1, false, false);
      cm.npc_ChangeController(3001229, "oid=257775", -1159, -260, 64, -1209, -1130, 1, false, false);
      cm.npc_ChangeController(3001231, "oid=257776", -1603, 39, 246, -1653, -1553, 1, false, false);
      cm.npc_ChangeController(3001242, "oid=257777", -1469, -103, 52, -1519, -1419, 1, false, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom('嗯？', 57, 0, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("搞什么……来对地方了吗？\t", 57, 0, true, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(300);
            } else {
              if (status === V++) {
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, -2200, -150);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(100);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_PushScaleInfo(13000, 1000, 13000, -528, -150);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_PlayBGM("Bgm47/SavageTerminal", 0, 0);
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
                              cm.inGameDirectionEvent_AskAnswerTime(10000);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("这里是荒蛮终点站？", 57, 0, false, true);
                              } else {
                                if (status === V++) {
                                  cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                  cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("看着一点儿不像观光胜地……", 57, 0, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cadena/labo1", 250);
                                            cm.sendNormalTalk_Bottom("#face0#哔哩啵。", 37, 3004015, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#你好，亲爱的顾客。", 37, 3004015, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                cm.inGameDirectionEvent_ForcedFlip(-1);
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_ChangeController(3004015, "oid=7079539", -530, -840, 206, -580, -480, 0, false, 500, false);
                                                  cm.npc_SetSpecialAction("oid=7079539", "summon", 0, 0);
                                                  cm.sendNormalTalk_Bottom("#face0#欢迎来到荒蛮终点站。", 37, 3004015, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#我给你准备了小小的欢迎仪式。\r\n请按下这个按钮。哔哩啵。", 37, 3004015, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("按钮？", 57, 0, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_QTE(3);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/switch_push", 100);
                                                            cm.Hidden_background("402000000_tag", 1, 1, 0, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.npc_SetSpecialAction("oid=7079539", 'special', 1, 1);
                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/savageT/fire", 250);
                                                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#fs18#什，什么鬼？！", 57, 0, false, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction21.img/SavageT/effect/1"], [0, -963, -1150, 1, 0, 1, 1, 0]);
                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion4", 100);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.userSetFieldFloating(940203201, 5, 5, 50);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.userSetFieldFloating(940203201, 0, 0, 0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion7", 100);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.userSetFieldFloating(940203201, 15, 25, 50);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.userSetFieldFloating(940203201, 0, 0, 0);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("额……这……什么……", 57, 0, false, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.npc_ChangeController(3004014, "oid=7080025", -850, -60, 230, -900, -800, 0, true, false);
                                                                                  cm.npc_SetSpecialAction("oid=7080025", "summon", 0, 0);
                                                                                  cm.npc_ChangeController(3004014, "oid=7080026", -1000, -60, 229, -1050, -950, 0, true, false);
                                                                                  cm.npc_SetSpecialAction("oid=7080026", "summon", 0, 0);
                                                                                  cm.npc_ChangeController(3004014, "oid=7080027", -1150, -60, 251, -1200, -1100, 0, true, false);
                                                                                  cm.npc_SetSpecialAction("oid=7080027", "summon", 0, 0);
                                                                                  cm.sendNormalTalk_Bottom("#face0#那边！那边发射的！！", 37, 3004014, true, true);
                                                                                  cm.npc_LeaveField("oid=7080025");
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_PushScaleInfo(500, 1500, 500, -960, 16);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#你这家伙！！你干什么！！", 37, 3004014, false, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face0#还不快点下来？！", 37, 3004014, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("不是我干的，是这个机器人……", 57, 0, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.npc_LeaveField("oid=7079539");
                                                                                              cm.npc_LeaveField("oid=7079539");
                                                                                              cm.inGameDirectionEvent_PushScaleInfo(500, 2000, 500, -529, -800);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                                                                  cm.sendNormalTalk_Bottom("#fs18#哦？！！！", 57, 0, false, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.inGameDirectionEvent_ForcedFlip(1);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.inGameDirectionEvent_ForcedFlip(1);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#fs20#哦哦！！！？？？？？？", 57, 0, false, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                            } else if (status === V++) {
                                                                                                              cm.dispose();
                                                                                                              cm.gainExp(9487412);
                                                                                                              cm.warp(402000003, 0);
                                                                                                              cm.forceCompleteQuest(37101);
                                                                                                              cm.updateInfoQuest(37100, "31=h0");
                                                                                                              cm.updateInfoQuest(37100, "31=h0;dir=on");
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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