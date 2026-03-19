var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  var V = "action" + cm.getNumberFromQuestInfo(39566, 'dir');
  eval(V)(f, E, e);
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
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.npc_ChangeController(3001668, "oid=7882646", 1370, -47, 28, 1320, 1420, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=7882646", "summon", 0, 0);
      cm.npc_ChangeController(3001651, "oid=7882647", 981, -47, 27, 931, 1031, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=7882647", 'summon', 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 1232, -48);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
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
              cm.sendNormalTalk_Bottom("#face7#那是……蚕茧？", 37, 3001674 + cm.getPlayer().getGender(), false, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#等待变成成虫的蚕茧怪啊，不过……有点奇怪啊？", 37, 3001651, true, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#你说奇怪……哪里奇怪？", 37, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#这最好是直接问那个家伙。", 37, 3001651, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#你是……饕餮，蚕茧？", 37, 3001668, false, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#确然如此。", 37, 3001651, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#这么个小不点，我差点没认出来啊，蚕茧！", 37, 3001668, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#这个狂妄无礼的家伙……", 37, 3001651, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom('#face6#噗哈！', 37, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#嗯……说起来，你的兄弟们都在哪儿呢？", 37, 3001651, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#兄弟？", 37, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#那帮家伙是三个一组。", 37, 3001651, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#弄丢了，蚕茧，就是掉在这里的时候。\r\n你也看到了，我们胆小，没法去找兄弟们，蚕茧。", 37, 3001668, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#要不是三个，就没办法吸收……", 37, 3001651, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#那就得由我虎影出马了，你知道东西掉在哪儿了吗？", 37, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#不知道，蚕茧……", 37, 3001668, true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#这个我饕餮能知道，随我来吧。", 37, 3001651, false, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.updateInfoQuest(39598, "10=h0;11=h0;31=h0;32=h0;33=h0;34=h1;15=h0;35=h0;16=h1;77=h0;78=h0;79=h0;02=h0;03=h1;80=h1;23=h0;81=h1;24=h0;05=h0;82=h0;25=h0;06=h0;84=h1;27=h1;08=h0;09=h1;28=h0;85=h0;29=h1");
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
                                                              cm.updateInfoQuest(39566, "dir=1;NpcSpeech=30016831;do=1");
                                                              cm.warp(410000111, 1, false);
                                                              cm.setStandAloneMode(false);
                                                              cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                              cm.setInGameDirectionMode(false, true, false);
                                                              cm.npc_LeaveField("oid=7882646");
                                                              cm.npc_LeaveField("oid=7882647");
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
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.npc_ChangeController(3001651, "oid=7887963", 981, -47, 27, 931, 1031, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=7887963", 'summon', 0, 0);
      cm.npc_ChangeController(3001668, "oid=7887964", 1370, -47, 28, 1320, 1420, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=7887964", 'summon', 0, 0);
      cm.npc_ChangeController(3001668, "oid=7887965", 1234, -47, 28, 1184, 1284, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=7887965", "summon", 0, 0);
      cm.npc_ChangeController(3001668, "oid=7887966", 1298, -47, 28, 1248, 1348, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=7887966", "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 1232, -48);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
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
              cm.sendNormalTalk_Bottom("#face0#大哥！", 37, 3001668, false, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#你没事啊，蚕茧！", 37, 3001668, true, true, 1);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（三只蚕茧怪正在聊着之前发生的事情，\r\n似乎从它们身上传来了热气。）", 37, 3001674 + cm.getPlayer().getGender(), false, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face7##fc0xFFbfbfbf#（看到这些家伙，倒是让人想起了有一阵子没见的师父，\r\n他也是这般一直为我担心……）", 37, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#看到大家都没事，我总算放心了，蚕茧。", 37, 3001668, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#现在我别无所愿了，蚕茧。\r\n我想要回到饕餮的肚子里，蚕茧。", 37, 3001668, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.npc_LeaveField("oid=7887965");
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
                                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 1232, -48);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_LeaveField("oid=7887966");
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
                                              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 1232, -48);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_LeaveField("oid=7887963");
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
                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2500, 0, 1399, 0);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#谢谢你帮我找到了兄弟们，蚕茧！", 37, 3001668, false, true, 1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.npc_SetSpecialAction("oid=7887964", "die", 1500, 0);
                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/hoyoung/appear", 100);
                                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 2);
                                                                cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.npc_LeaveField("oid=7887964");
                                                                  cm.npc_ChangeController(3001651, "oid=7890129", 1150, -57, 28, 1100, 1200, 0, true, 0, false);
                                                                  cm.npc_SetSpecialAction("oid=7890129", 'summon', 0, 0);
                                                                  cm.onTeleport(0, 3, cm.getPlayer().getId(), 820, -57);
                                                                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 1240, -27);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 0, 2);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.setNpcSpecialActionReset("oid=7890129");
                                                                        cm.npc_SetSpecialAction("oid=7890129", "special3", 1800, 0);
                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/hoyoung/D_get", 100);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1800);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.setNpcSpecialActionReset("oid=7890129");
                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1000, 1000, 1446, -117);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_同时移动镜头和人(2, 200);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.fieldEffect_ProcessOnOffLayer('09', "Effect/Direction9.img/HoyoungEffect/6", 0, 500, 430, 120, 1, 4, 0, -1, 0, 0, 0);
                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/hoyoung/complete", 100);
                                                                                cm.userSetFieldFloating(993160165, 10, 10, 10);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.userSetFieldFloating(993160165, 0, 0, 0);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.fieldEffect_ProcessOnOffLayer('09', '', 2, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                    cm.npc_LeaveField("oid=7890129");
                                                                                    cm.updateInfoQuest(39566, "dir=1;NpcSpeech=30016831;gochi1=1;gochi2=1;do=1;dir0=1");
                                                                                    cm.updateInfoQuest(39566, "dir=1;NpcSpeech=30016831;gochi1=1;gochi2=1;do=1;clear=1;dir0=1");
                                                                                    cm.updateInfoQuest(39566, "dir=1;NpcSpeech=30016831;gochi1=0;gochi2=1;do=1;clear=1;dir0=1");
                                                                                    cm.updateInfoQuest(39566, "dir=1;NpcSpeech=30016831;gochi1=0;gochi2=0;do=1;clear=1;dir0=1");
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
                                                                                          cm.warp(410000113, 0, false);
                                                                                          cm.setStandAloneMode(false);
                                                                                          cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
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