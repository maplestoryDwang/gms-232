var status = -1;
var selectionLog = [];
var last = -1;
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
      cm.npc_ChangeController(9400590, "oid=4243369", -620, 300, 1, -670, -570, 0, true, false);
      cm.npc_SetSpecialAction("oid=4243369", 'summon', 0, 0);
      cm.npc_ChangeController(9400592, "oid=4243370", -565, 300, 1, -615, -515, 0, true, false);
      cm.npc_SetSpecialAction("oid=4243370", "summon", 0, 0);
      cm.npc_ChangeController(9400580, "oid=4243371", -390, 300, 1, -440, -340, 0, true, false);
      cm.npc_SetSpecialAction("oid=4243371", "summon", 0, 0);
      cm.npc_ChangeController(9400582, "oid=4243372", -335, 300, 1, -385, -285, 0, true, false);
      cm.npc_SetSpecialAction("oid=4243372", "summon", 0, 0);
      cm.forceStartQuest(64164, '');
      cm.npc_ChangeController(9400583, "oid=4243373", -285, 300, 1, -335, -235, 0, true, false);
      cm.npc_SetSpecialAction("oid=4243373", "summon", 0, 0);
      cm.npc_ChangeController(9400589, "oid=4243374", -220, 300, 1, -270, -170, 0, true, false);
      cm.npc_SetSpecialAction("oid=4243374", "summon", 0, 0);
      cm.npc_ChangeController(9400588, "oid=4243375", -160, 300, 1, -210, -110, 0, true, false);
      cm.npc_SetSpecialAction("oid=4243375", "summon", 0, 0);
      cm.forceStartQuest(64161, '');
      cm.npc_ChangeController(9400581, "oid=4243376", -80, 300, 1, -130, -30, 0, true, false);
      cm.npc_SetSpecialAction("oid=4243376", 'summon', 0, 0);
      cm.forceStartQuest(64163, "riding");
      cm.npc_ChangeController(9400591, "oid=4243377", 0, 300, 1, -50, 50, 0, true, false);
      cm.npc_SetSpecialAction("oid=4243377", "summon", 0, 0);
      cm.npc_ChangeController(9400587, "oid=4243378", 60, 300, 1, 10, 110, 0, true, false);
      cm.npc_SetSpecialAction("oid=4243378", 'summon', 0, 0);
      cm.npc_SetForceMove("oid=4243378", 1, 350, 200);
      cm.sendNewEffects(1, [0, 0, 0, 0, 0]);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNewEffects(12, [3000, 400, 160, 0, 0]);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(2000);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/exclamation", "oid=4243378"], [1000, 0, 0, 1, 0, 1, 0, 0]);
            cm.npc_SetForceMove("oid=4243377", 1, 300, 200);
            cm.inGameDirectionEvent_AskAnswerTime(2000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#出什么事了？", 37, 9400587, false, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(2000);
              } else {
                if (status === V++) {
                  cm.npc_setForceFlip("oid=4243378", -1);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.npc_setForceFlip("oid=4243378", 1);
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.npc_setForceFlip("oid=4243377", -1);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.npc_setForceFlip("oid=4243377", 1);
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("我们现在……该去哪儿？", 37, 9400591, false, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(250);
                              } else {
                                if (status === V++) {
                                  cm.npc_SetForceMove("oid=4243376", 1, 50, 100);
                                  cm.forceStartQuest(64163, '');
                                  cm.sendNewEffects(17, [3000, 1000, 2000, -200, 350]);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0##h0#，稍作休息后就出发吧。", 37, 9400581, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_setForceFlip("oid=4243376", -1);
                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_setForceFlip("oid=4243378", -1);
                                          cm.npc_SetForceMove("oid=4243378", -1, 370, 100);
                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#副团长，有很多骑士受伤了，得歇会儿才行。", 37, 9400583, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#村民们也都饥寒交加，走不动了。", 37, 9400589, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#当务之急是尽早到达安全的地方。", 37, 9400581, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#……副团长说得没错，即使疲惫，还是立即出发比较好。", 37, 9400587, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#你怎么决定，#h0#。", 37, 9400581, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNewEffects(13, [1000, -100, 0, 0, 0]);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.npc_setForceFlip("oid=4243375", -1);
                                                          cm.inGameDirectionEvent_AskAnswerTime(200);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.npc_setForceFlip("oid=4243374", -1);
                                                            cm.inGameDirectionEvent_AskAnswerTime(200);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.npc_setForceFlip("oid=4243373", -1);
                                                              cm.inGameDirectionEvent_AskAnswerTime(200);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.npc_setForceFlip("oid=4243372", -1);
                                                                cm.inGameDirectionEvent_AskAnswerTime(200);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.npc_setForceFlip("oid=4243371", -1);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.npc_setForceFlip("oid=4243377", -1);
                                                                    cm.npc_SetForceMove("oid=4243377", -1, 200, 100);
                                                                    cm.sendNormalTalk_Bottom("#face0#要是强行前进，将有更多人受伤。况且现在是晚上，肯定更危险。", 37, 9400580, false, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#咱们已经和暴风雪拉开一段距离，可以多歇歇再走。", 37, 9400580, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#大家需要生火暖暖身子，再吃点东西。", 37, 9400580, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.askMenu_Bottom("#b（不管是艾丽卡说的，还是副团长说的，都有道理 。）\r\n#L0#休息一下再走。#l\r\n#L1#立即出发。#l", 57, 0);
                                                                        } else {
                                                                          if (last < 0) {
                                                                            last = e;
                                                                          }
                                                                          var O = "action分支" + last;
                                                                          eval(O)(f, E, e, V);
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function action分支0(f, E, e, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#b先歇一会儿再走吧。", 57, 0, false, true);
  } else {
    if (status === V++) {
      cm.sendNormalTalk_Bottom("#face1#哼！", 37, 9400581, true, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face0#来来，大家都动起来！", 37, 9400589, true, true);
      } else {
        if (status === V++) {
          cm.npc_setForceFlip("oid=4243374", 1);
          cm.inGameDirectionEvent_AskAnswerTime(500);
        } else {
          if (status === V++) {
            cm.npc_SetForceMove("oid=4243374", 1, 1000, 100);
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.npc_setForceFlip("oid=4243375", 1);
              cm.npc_setForceFlip("oid=4243373", 1);
              cm.npc_setForceFlip("oid=4243372", 1);
              cm.npc_setForceFlip("oid=4243371", 1);
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === V++) {
                cm.npc_SetForceMove("oid=4243375", 1, 500, 100);
                cm.npc_SetForceMove("oid=4243373", 1, 500, 100);
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.npc_SetForceMove("oid=4243372", 1, 500, 100);
                  cm.npc_SetForceMove("oid=4243371", 1, 500, 100);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.npc_SetForceMove("oid=4243370", 1, 500, 100);
                    cm.npc_SetForceMove("oid=4243369", 1, 500, 100);
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else if (status === V++) {
                      cm.forceStartQuest(64057, '2');
                      cm.forceCompleteQuest(64035);
                      cm.updateInfoQuest(867200800, '1');
                      cm.warp(867200800, 0, true);
                      cm.setInGameDirectionMode(false, true, false);
                      cm.npc_LeaveField("oid=4243369");
                      cm.npc_LeaveField("oid=4243369");
                      cm.npc_LeaveField("oid=4243370");
                      cm.npc_LeaveField("oid=4243370");
                      cm.npc_LeaveField("oid=4243371");
                      cm.npc_LeaveField("oid=4243371");
                      cm.npc_LeaveField("oid=4243372");
                      cm.npc_LeaveField("oid=4243372");
                      cm.npc_LeaveField("oid=4243373");
                      cm.npc_LeaveField("oid=4243373");
                      cm.npc_LeaveField("oid=4243374");
                      cm.npc_LeaveField("oid=4243374");
                      cm.npc_LeaveField("oid=4243375");
                      cm.npc_LeaveField("oid=4243375");
                      cm.npc_LeaveField("oid=4243376");
                      cm.npc_LeaveField("oid=4243376");
                      cm.npc_LeaveField("oid=4243377");
                      cm.npc_LeaveField("oid=4243377");
                      cm.npc_LeaveField("oid=4243378");
                      cm.npc_LeaveField("oid=4243378");
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
function action分支1(f, E, e, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#b立即……", 57, 0, false, true, 1);
  } else {
    if (status === V++) {
      cm.inGameDirectionEvent_AskAnswerTime(500);
    } else {
      if (status === V++) {
        cm.sendNewEffects(13, [1000, 200, 0, 0, 0]);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.npc_SetSpecialAction("oid=7851497", "saveme", -1, 0);
            cm.npc_setForceFlip("oid=7851494", 1);
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.npc_setForceFlip("oid=7851498", 1);
              cm.npc_setForceFlip("oid=7851496", 1);
              cm.npc_setForceFlip("oid=7851495", 1);
              cm.npc_setForceFlip("oid=7851493", 1);
              cm.npc_setForceFlip("oid=7851492", 1);
              cm.npc_setForceFlip("oid=7851491", 1);
              cm.npc_SetForceMove("oid=7851494", 1, 300, 100);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.npc_setForceFlip("oid=7851494", -1);
                cm.sendNormalTalk_Bottom("#face0#述拉！述拉你醒醒！", 37, 9400589, false, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#谁来帮我一起抬下述拉！", 37, 9400589, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#大家都累趴了。和这些孱弱的人一起，没法再走下去了。", 37, 9400590, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#b……大家歇会儿再走吧。", 57, 0, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else if (status === V++) {
                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                        cm.warp(867200800, 0, true);
                        cm.setInGameDirectionMode(false, true, false);
                        cm.forceStartQuest(64057, '2');
                        cm.forceCompleteQuest(64035);
                        cm.npc_LeaveField("oid=7851489");
                        cm.npc_LeaveField("oid=7851490");
                        cm.npc_LeaveField("oid=7851491");
                        cm.npc_LeaveField("oid=7851492");
                        cm.npc_LeaveField("oid=7851493");
                        cm.npc_LeaveField("oid=7851494");
                        cm.npc_LeaveField("oid=7851495");
                        cm.npc_LeaveField("oid=7851496");
                        cm.npc_LeaveField("oid=7851497");
                        cm.npc_LeaveField("oid=7851498");
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;