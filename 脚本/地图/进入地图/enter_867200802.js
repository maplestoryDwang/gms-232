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
      cm.npc_ChangeController(9400619, "oid=201840", 656, 312, 26, 606, 706, 5, true, false);
      cm.npc_ChangeController(9400587, 'oid=201841', 793, 312, 26, 743, 843, 5, true, false);
      cm.npc_ChangeController(9400591, "oid=201842", 748, 312, 26, 698, 798, 5, true, false);
      cm.npc_ChangeController(9400588, "oid=201843", 353, 312, 26, 303, 403, 5, true, false);
      cm.npc_ChangeController(9400596, 'oid=201844', 966, 312, 26, 916, 1016, 5, true, false);
      cm.npc_ChangeController(9400589, 'oid=201845', 549, 312, 26, 499, 599, 4, true, false);
      cm.npc_ChangeController(9400580, "oid=201846", 224, 312, 26, 174, 274, 4, true, false);
      cm.npc_ChangeController(9400584, "oid=201847", 292, 312, 26, 242, 342, 5, true, false);
      cm.npc_ChangeController(9400585, 'oid=201848', 91, 312, 26, 41, 141, 4, true, false);
      cm.npc_ChangeController(9400592, 'oid=201849', 481, 312, 26, 431, 531, 4, true, false);
      cm.npc_ChangeController(9400618, "oid=201850", 904, 312, 26, 854, 954, 5, true, false);
      cm.npc_ChangeController(9400593, 'oid=201851', 697, 312, 26, 647, 747, 5, true, false);
      cm.npc_ChangeController(9400617, "oid=201852", 1016, 312, 26, 966, 1066, 5, true, false);
      cm.npc_ChangeController(9400585, "oid=201853", 1156, 312, 26, 1106, 1206, 4, true, false);
      cm.npc_ChangeController(9400585, "oid=201854", 1101, 312, 26, 1051, 1151, 4, true, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(9400590, "oid=4246980", -566, 300, 26, -616, -516, 1, true, false);
      cm.npc_SetSpecialAction("oid=4246980", "summon", 0, 0);
      cm.npc_ChangeController(9400582, "oid=4246981", 150, 300, 26, 100, 200, 0, true, false);
      cm.npc_SetSpecialAction("oid=4246981", "summon", 0, 0);
      cm.npc_ChangeController(9400583, "oid=4246982", -62, 350, 10, -112, -12, 1, true, false);
      cm.npc_SetSpecialAction("oid=4246982", "summon", 0, 0);
      cm.npc_ChangeController(9400585, "oid=4246983", -150, 350, 9, -200, -100, 0, true, false);
      cm.npc_SetSpecialAction("oid=4246983", "summon", 0, 0);
      cm.npc_ChangeController(9400585, "oid=4246984", -200, 350, 9, -250, -150, 0, true, false);
      cm.npc_SetSpecialAction("oid=4246984", "summon", 0, 0);
      cm.npc_ChangeController(9400585, "oid=4246985", -250, 350, 11, -300, -200, 0, true, false);
      cm.npc_SetSpecialAction("oid=4246985", "summon", 0, 0);
      cm.npc_ChangeController(9400585, "oid=4246986", -300, 350, 11, -350, -250, 0, true, false);
      cm.npc_SetSpecialAction("oid=4246986", "summon", 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_ForcedFlip(1);
          cm.sendNewEffects(13, [2000, 500, 0, 0, 0]);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(3000);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(3000);
            } else {
              if (status === V++) {
                cm.sendNewEffects(13, [2000, -600, 0, 0, 0]);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_ForcedFlip(-1);
                  cm.sendNewEffects(17, [2000, 1000, 2000, -600, 340]);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(300);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_同时移动镜头和人(1, 450);
                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#b斯洛克。", 57, 0, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#走开走开，我不参与，你别跟我提。", 37, 9400590, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#b大家总不能饿一晚上。拜托你了。", 57, 0, true, true);
                          } else {
                            if (status === V++) {
                              cm.npc_setForceFlip("oid=4246980", 1);
                              cm.sendNormalTalk_Bottom("#face0#我最讨厌像你这种爱管闲事的家伙，特~别烦人。", 37, 9400590, true, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#你干嘛不找那些骑士去？！", 37, 9400590, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNewEffects(12, [1000, -120, 360, 0, 0]);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_ForcedFlip(1);
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_setForceFlip("oid=4246982", 1);
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_SetForceMove("oid=4246982", 1, 1000, 200);
                                            cm.npc_SetForceMove("oid=4246983", 1, 1000, 200);
                                            cm.npc_SetForceMove("oid=4246984", 1, 1000, 200);
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_setForceFlip("oid=4246985", -1);
                                              cm.npc_setForceFlip("oid=4246986", -1);
                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_SetForceMove("oid=4246985", -1, 400, 200);
                                                cm.npc_SetForceMove("oid=4246986", -1, 400, 200);
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#……哼。", 37, 9400590, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.npc_setForceFlip("oid=4246980", -1);
                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npc_setForceFlip("oid=4246980", 1);
                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNewEffects(1, [0, 0, 0, 0, 0]);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNewEffects(12, [1000, 250, 340, 0, 0]);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.npc_LeaveField("oid=4246983");
                                                              cm.npc_LeaveField("oid=4246983");
                                                              cm.npc_LeaveField("oid=4246984");
                                                              cm.npc_LeaveField("oid=4246984");
                                                              cm.npc_LeaveField("oid=4246985");
                                                              cm.npc_LeaveField("oid=4246985");
                                                              cm.npc_LeaveField("oid=4246986");
                                                              cm.npc_LeaveField("oid=4246986");
                                                              cm.npc_LeaveField("oid=4246982");
                                                              cm.npc_LeaveField("oid=4246982");
                                                              cm.sendNormalTalk_Bottom("#face0#哎？那小子为啥成天净跟在女孩子屁股后面啊？！", 37, 9400590, false, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#b啊？哈哈哈！", 57, 0, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#喂！凯恩！", 37, 9400590, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#凯恩！！！！！！！！！！！", 37, 9400590, false, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.npc_setForceFlip("oid=4246981", -1);
                                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/whatl", "oid=4246981"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.npc_setForceFlip("oid=4246981", 1);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.npc_setForceFlip("oid=4246981", -1);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.npc_SetForceMove("oid=4246981", -1, 500, 200);
                                                                                cm.sendNewEffects(12, [3000, -450, 340, 0, 0]);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#什么事？啥事啊？", 37, 9400582, false, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face0#你跟这家伙打猎去。", 37, 9400590, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#啊，我有其他任务在身，走不开哦。", 37, 9400582, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face0#啥？", 37, 9400590, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNewEffects(12, [1000, 170, 340, 0, 0]);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                  cm.effect_NormalSpeechBalloon('……恩……！去……！', 0, 0, 0, 2000, 9400580, cm.getPlayer().getId());
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNewEffects(12, [1000, -450, 340, 0, 0]);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face0#搞定了吗？", 37, 9400590, false, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face0#啊……", 37, 9400582, true, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face0#那你也一起去吧，效率更高。", 37, 9400582, true, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face0#什么？！", 37, 9400590, true, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("#b大家都不方便的话，只能我自己去了。", 57, 0, true, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face0#……这家伙挺有手段啊。", 37, 9400590, true, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#face0#……最后一次咯，说真的。以后再别麻烦我。", 37, 9400590, true, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.npc_setForceFlip("oid=4246980", -1);
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.npc_SetForceMove("oid=4246980", -1, 100, 100);
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNewEffects(19, [0]);
                                                                                                                      } else if (status === V++) {
                                                                                                                        cm.forceStartQuest(64037, '');
                                                                                                                        cm.warp(867200810, 0);
                                                                                                                        cm.npc_LeaveField("oid=4246980");
                                                                                                                        cm.npc_LeaveField("oid=4246980");
                                                                                                                        cm.npc_LeaveField("oid=4246981");
                                                                                                                        cm.npc_LeaveField("oid=4246981");
                                                                                                                        cm.dispose();
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;