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
      cm.npc_ChangeController(9400635, "oid=204535", -1176, 106, 5, -1226, -1126, 0, true, false);
      cm.npc_ChangeController(9400636, "oid=204536", -1244, 103, 5, -1294, -1194, 0, true, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(9400590, "oid=7533399", -750, 65, 8, -800, -700, 0, true, false);
      cm.npc_SetSpecialAction("oid=7533399", "summon", 0, 0);
      cm.npc_ChangeController(9400589, "oid=7533400", -900, 65, 7, -950, -850, 0, true, false);
      cm.npc_SetSpecialAction("oid=7533400", "summon", 0, 0);
      cm.npc_ChangeController(9400592, "oid=7533401", -980, 65, 6, -1030, -930, 0, true, false);
      cm.npc_SetSpecialAction("oid=7533401", "summon", 0, 0);
      cm.sendNewEffects(17, [0, 1000, 2000, -950, 120]);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.npc_SetForceMove("oid=7533399", 1, 200, 100);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.sendNewEffects(12, [1000, -800, 120, 0, 0]);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#斯洛克？去哪？我们要用木头来做个木墙。", 37, 9400589, false, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.npc_setForceFlip("oid=7533399", -1);
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#… 我还要做这些啊？", 37, 9400590, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#那还能有谁？快来。", 37, 9400589, true, true);
                    } else {
                      if (status === V++) {
                        cm.npc_SetForceMove("oid=7533399", -1, 360, 120);
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.npc_setForceFlip("oid=7533400", -1);
                          cm.npc_setForceFlip("oid=7533401", -1);
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.npc_SetForceMove("oid=7533401", -1, 100, 100);
                            cm.inGameDirectionEvent_AskAnswerTime(250);
                          } else {
                            if (status === V++) {
                              cm.npc_SetForceMove("oid=7533400", -1, 100, 100);
                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_ForcedFlip(-1);
                                cm.sendNewEffects(12, [1000, -900, 120, 0, 0]);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#b佩图尔！", 57, 0, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.npc_setForceFlip("oid=7533400", 1);
                                    cm.npc_setForceFlip("oid=7533401", 1);
                                    cm.npc_setForceFlip("oid=7533399", 1);
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_同时移动镜头和人(1, 20);
                                      cm.sendNormalTalk_Bottom("#b… 刚才看到你扔的斧头正中怪物的头颅，这个并非是偶然吧？", 57, 0, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#呵呵，不是偶然那还能是什么。", 37, 9400589, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#b看你的身手绝不平凡，不像是个普通的木匠。", 57, 0, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#是你看错了。", 37, 9400589, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#b你否定也没有关系… 只不过佩图尔的实力对我们肯定有很大的帮助。", 57, 0, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#对……对！那群怪物不是一声不吭的倒地了吗？", 37, 9400592, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#真是的… ", 37, 9400589, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#b不管你是在隐藏实力，还是偶然，我们都需要你的力量。", 57, 0, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#但是刚才那一下绝对是运气。如果真要达到那种程度，就得拼命练习哦。", 37, 9400589, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#b我来帮你吧。", 57, 0, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#呜哇！好帅啊，佩图尔！", 37, 9400592, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#… 我也很想帮助大家… 但是刚才我一个人躲在后边瑟瑟发抖… 太惭愧了。", 37, 9400592, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#… 但是不能就这样懦弱下去了！", 37, 9400592, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#这个木墙就由我来负责，请交给我把！", 37, 9400592, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#b阿尔西，阿尔西的斧工对战斗也很有帮助。要不你也来一起训练吧？", 57, 0, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=7533401"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNewEffects(12, [1000, -1100, 120, 0, 0]);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#我… 我吗？那… 那木墙谁来做？！", 37, 9400592, false, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("这种事情就交给我们斯库亚斯的工程部队吧！", 37, 9400603, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("你们把材料带过来了，剩下的就交给我们，你们抓紧训练吧！", 37, 9400603, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.npc_setForceFlip("oid=7533401", -1);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face0#真… 真的吗？！", 37, 9400592, false, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("那当然！", 37, 9400603, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face0#很好！", 37, 9400589, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#b那么我们先去找个空地吧？", 57, 0, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.npc_setForceFlip("oid=7533401", 1);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.npc_setForceFlip("oid=7533401", -1);
                                                                                              cm.sendNormalTalk_Bottom("是，这里就不用担心了！", 37, 9400603, false, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_ForcedFlip(1);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.inGameDirectionEvent_同时移动镜头和人(2, 300);
                                                                                                    cm.npc_SetForceMove("oid=7533400", 1, 300, 100);
                                                                                                    cm.npc_SetForceMove("oid=7533401", 1, 100, 100);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face0#非… 非常感谢！也非常感谢工程部队！", 37, 9400592, false, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.npc_setForceFlip("oid=7533401", 1);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.npc_SetForceMove("oid=7533401", 1, 200, 100);
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.updateInfoQuest(64110, "dir1=1");
                                                                                                              cm.forceStartQuest(64110, '');
                                                                                                              cm.sendNewEffects(19, [0]);
                                                                                                            } else if (status === V++) {
                                                                                                              cm.warp(867202401, 0);
                                                                                                              cm.setInGameDirectionMode(false, true, false);
                                                                                                              cm.npc_LeaveField("oid=7533399");
                                                                                                              cm.npc_LeaveField("oid=7533399");
                                                                                                              cm.npc_LeaveField("oid=7533400");
                                                                                                              cm.npc_LeaveField("oid=7533400");
                                                                                                              cm.npc_LeaveField("oid=7533401");
                                                                                                              cm.npc_LeaveField("oid=7533401");
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;