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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(9400638, "oid=7539664", -1526, -20, 13, -1576, -1476, 1, true, false);
      cm.npc_SetSpecialAction("oid=7539664", 'summon', 0, 0);
      cm.npc_ChangeController(9400639, "oid=7539665", -1380, 90, 4, -1430, -1330, 1, true, false);
      cm.npc_SetSpecialAction("oid=7539665", "summon", 0, 0);
      cm.npc_ChangeController(9400640, "oid=7539666", -1030, 80, 6, -1080, -980, 0, true, false);
      cm.npc_SetSpecialAction("oid=7539666", "summon", 0, 0);
      cm.updateInfoQuest(64127, "dir=1;chk1=8");
      cm.npc_ChangeController(9400602, "oid=7539667", 600, 0, 32, 550, 650, 1, true, false);
      cm.npc_SetSpecialAction("oid=7539667", "summon", 0, 0);
      cm.inGameDirectionEvent_同时移动镜头和人(2, 600);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_SetForceMove("oid=7539667", -1, 450, 100);
        cm.inGameDirectionEvent_AskAnswerTime(3000);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#…那个… ", 37, 9400602, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#你就是…#h0#… 勇士吗？", 37, 9400602, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#b你是…？", 57, 0, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#b(那个头盔…？是莎娜安做的…) ", 57, 0, true, true);
              } else {
                if (status === V++) {
                  cm.npc_SetForceMove("oid=7539667", -1, 60, 100);
                  cm.sendNewEffects(17, [1000, 1000, 2000, 100, 120]);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#… 请帮帮我。", 37, 9400602, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face1#我也… 想和大家一起！", 37, 9400602, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face1#请帮帮我，我也想和大家一起… ", 37, 9400602, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#b一起做什么呢？", 57, 0, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face1#我！我也！我也想为妹妹复仇… 请帮帮我。", 37, 9400602, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#b既然你寻求我的帮助，那我一定会帮助你。", 57, 0, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#b但是我能帮你什么呢，因为我只会打架和寻路。", 57, 0, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#b之后只能凭借自己的努力了。", 57, 0, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face1#…是，那些就够了！", 37, 9400602, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#b那好，等我把石头先搬完吧。", 57, 0, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#b你能帮我吗？", 57, 0, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face1#是的，当然。", 37, 9400602, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_setForceFlip("oid=7539667", 1);
                                              cm.inGameDirectionEvent_AskAnswerTime(250);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_SetForceMove("oid=7539667", 1, 100, 100);
                                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_setForceFlip("oid=7539667", -1);
                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                } else {
                                                  if (status === V++) {
                                                    cm.Hidden_background("rock1", 0);
                                                    cm.forceStartQuest(64168, "rock");
                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npc_SetForceMove("oid=7539667", -1, 400, 150);
                                                      cm.npc_ChangeController(9400606, "oid=7539734", 600, 0, 32, 550, 650, 1, true, false);
                                                      cm.npc_SetSpecialAction("oid=7539734", "summon", 0, 0);
                                                      cm.forceStartQuest(64169, "rock");
                                                      cm.npc_SetForceMove("oid=7539734", -1, 400, 100);
                                                      cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.updateInfoQuest(64127, "dir=1;chk1=9");
                                                        cm.npc_setForceFlip("oid=7539667", 1);
                                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.npc_SetForceMove("oid=7539667", 1, 300, 150);
                                                          cm.forceForfeitQuest(64168);
                                                          cm.sendNormalTalk_Bottom("#face0#哇噢，看他弱不禁风的样子，不过毅力倒是蛮足的。", 37, 9400582, false, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#b凯恩，都听到了。", 57, 0, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#听了又怎样？是在夸他呢", 37, 9400582, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face1#我知道我的模样看起来很憔悴… ", 37, 9400602, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face1#不过不用担心，从小开始就以各种家务锻炼过来了。", 37, 9400602, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face1#父母去世的早，打小就和妹妹相依为命，为了活下来能做的事情我都做过。", 37, 9400602, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face1#搬东西，砍树，甚至打扫烟囱… 不过那一点都不累，因为那是为妹妹所做的事情… ", 37, 9400602, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face1#现在也一点都不累。", 37, 9400602, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#啊，别误会。我不是在担心你，而是在夸你有个强健的身体。", 37, 9400582, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face1#…", 37, 9400602, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.npc_SetForceMove("oid=7539734", -1, 50, 50);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.forceStartQuest(64169, '');
                                                                                cm.Hidden_background("rock1", 1);
                                                                                cm.sendNormalTalk_Bottom("#face0#最后一个了。", 37, 9400582, false, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.npc_SetForceMove("oid=7539667", 1, 100, 150);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.npc_setForceFlip("oid=7539667", -1);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.forceStartQuest(64168, "rock");
                                                                                      cm.Hidden_background('rock1', 0);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.npc_SetForceMove("oid=7539667", -1, 450, 150);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.updateInfoQuest(64127, "dir=1;chk1=10");
                                                                                          cm.npc_setForceFlip("oid=7539667", 1);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.npc_SetForceMove("oid=7539667", 1, 300, 150);
                                                                                            cm.forceForfeitQuest(64168);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face0#喔吼！很好", 37, 9400582, false, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#现在… 请告诉我。", 37, 9400602, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face1#我也想一起打仗！请教会我打仗的方法。", 37, 9400602, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0#我喜欢你那种霸气，就收你为徒吧。那之前我先去把艾丽卡带过来。#h0#！你先去修炼空地吧", 37, 9400582, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face0#就不能让人省点心。我马上过来", 37, 9400582, true, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.npc_setForceFlip("oid=7539734", 1);
                                                                                                        cm.npc_SetForceMove("oid=7539734", 1, 300, 200);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                        } else if (status === V++) {
                                                                                                          cm.forceCompleteQuest(64127);
                                                                                                          cm.forceCompleteQuest(64128);
                                                                                                          cm.warp(867202398, 0);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;