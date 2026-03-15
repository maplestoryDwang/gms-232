var status = -1;
var selectionLog = [];
function start(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 894, 261);
    } else {
      if (status === v++) {
        cm.onTeleport(0, 3, cm.getPlayer().getId(), 828, 267);
        cm.inGameDirectionEvent_ForcedFlip(-1);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === v++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#……", 36, 3005102, false, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face0#……", 36, 3005100, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face0#我说这些是以防万一啊，问过去有什么事这种行为就……", 36, 3005102, true, true, 1);
              } else {
                if (status === v++) {
                  cm.inGameDirectionEvent_ForcedFlip(-1);
                  cm.sendNormalTalk_Bottom("#face0#小朋友，出什么事了？你哭什么？", 36, 3005100, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face0#风筝……风筝被卡在屋顶上了……", 36, 3005115, true, true, 1);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("#face7#喂，你干什么呢？我是说过会帮你在村庄带路，可没允许你多管闲事啊！", 36, 3005102, true, true, 1);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk_Bottom("#face0#小孩子就在自己眼前哭，怎么可能视若不见呢？", 36, 3005100, true, true, 1);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk_Bottom('#face0#额……', 36, 3005102, true, true, 1);
                        } else {
                          if (status === v++) {
                            cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
                            cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 1300, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(1600);
                          } else {
                            if (status === v++) {
                              cm.sendNormalTalk_Bottom("#face1#哥哥……你去哪儿了？哥哥！", 36, 3005105, false, true, 1);
                            } else {
                              if (status === v++) {
                                cm.fieldEffect_InsertCanvas11(0, 0, 0, 0, 0, 0);
                                cm.fieldEffect_InsertCanvas(1, 1, 255, 255, 255, 200, 0);
                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(1600);
                              } else {
                                if (status === v++) {
                                  cm.inGameDirectionEvent_ForcedFlip(1);
                                  cm.sendNormalTalk_Bottom("#face0#……这世上有些人只是萍水相逢。", 36, 3005102, false, true, 1);
                                } else {
                                  if (status === v++) {
                                    cm.sendNormalTalk_Bottom("#face0#可我们也不能不管啊！", 36, 3005100, true, true, 1);
                                  } else {
                                    if (status === v++) {
                                      cm.sendNormalTalk_Bottom("#face7#……#fc0xFFbfbfbf#（要不要揍上一拳？）", 36, 3005102, true, true, 1);
                                    } else {
                                      if (status === v++) {
                                        cm.sendNormalTalk_Bottom("#face0#小朋友，别担心，哥哥和姐姐会帮你的！", 36, 3005100, true, true, 1);
                                      } else {
                                        if (status === v++) {
                                          cm.sendNormalTalk_Bottom("#face0#真的吗？呜呜……", 36, 3005115, true, true, 1);
                                        } else {
                                          if (status === v++) {
                                            cm.sendNormalTalk_Bottom("#face0#要怎么帮忙？风筝挂在那么高的地方，要用什么办法拿下来？", 36, 3005102, true, true, 1);
                                          } else {
                                            if (status === v++) {
                                              cm.sendNormalTalk_Bottom("#face0#可以用石子儿之类的东西砸中吗？", 36, 3005100, true, true, 1);
                                            } else {
                                              if (status === v++) {
                                                cm.sendNormalTalk_Bottom("#face0#这样不行的，绳子死死卡住了啊。", 36, 3005102, true, true, 1);
                                              } else {
                                                if (status === v++) {
                                                  cm.sendNormalTalk_Bottom("#face6#可没尝试过就不好说嘛！", 36, 3005100, true, true, 1);
                                                } else {
                                                  if (status === v++) {
                                                    cm.sendNormalTalk_Bottom("#face0#这简直是自作主张嘛……", 36, 3005102, true, true, 1);
                                                  } else {
                                                    if (status === v++) {
                                                      cm.sendNormalTalk_Bottom("#face0#喂，你怎么就直接走了，你知道该去什么地方吗？", 36, 3005102, true, true, 1);
                                                    } else {
                                                      if (status === v++) {
                                                        cm.sendNormalTalk_Bottom("#face0#不知道！到底该去哪儿呀？", 36, 3005100, true, true, 1);
                                                      } else {
                                                        if (status === v++) {
                                                          cm.sendNormalTalk_Bottom("#face0#……#b#m410004013##k那里会有很多被丢掉的东西，\r\n要么你就去那儿捡点回来。", 36, 3005102, true, true, 1);
                                                        } else {
                                                          if (status === v++) {
                                                            cm.askYesNo_Bottom("#face0#好，那就现在走吧！\r\n#b（*前往#m410004013#击败10只#o8645225#，收集10个#t4036781#吧。）", 36, 3005100, 1);
                                                          } else {
                                                            if (status === v++) {
                                                              cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                            } else {
                                                              if (status === v++) {
                                                                cm.inGameDirectionEvent_Unknown9(1000);
                                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                                              } else if (status === v++) {
                                                                cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                cm.setInGameDirectionMode(false, true, false);
                                                                cm.setStandAloneMode(false);
                                                                cm.forceStartQuest(36205, '');
                                                                cm.OnStartNavigation(410004013, 0, '', 36205);
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
function end(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.sendNormalTalk_Bottom("#face0#呜呜呜呜……啊，这不是刚刚的哥哥和姐姐吗？", 36, 3005115, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#你真的又回来了啊！你手上那个是……鞋、鞋子？", 36, 3005115, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#嗯，只要把这个丢出去，应该就能取下那个风筝了。", 36, 3005100, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#再稍微等一等！", 36, 3005100, true, true, 1);
          } else if (status === v++) {
            cm.forceCompleteQuest(36205);
            cm.gainExp(397);
            cm.gainExp(1114);
            cm.gainItem(4036781, -10);
            cm.dispose();
          }
        }
      }
    }
  }
}