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
      cm.npc_ChangeController(1530230, "oid=20464115", 1496, 243, 36, 1446, 1546, 0, true, false);
      cm.npc_SetSpecialAction("oid=20464115", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("哈哈哈……计划成功了。", 37, 1530230, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("正如传闻中的那样，希纳斯可真是天真啊。竟然连这种谎话都相信了。", 37, 1530230, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("命运之转学生。说的不就是我嘛。", 37, 1530230, true, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === V++) {
                cm.npc_SetForceMove("oid=20464115", -1, 800, 100);
                cm.sendNormalTalk_Bottom("等着吧，希纳斯。我一定会先接手这所学校，然后再俘获你的芳心的。噢哈哈哈哈……！！", 37, 1530230, false, true);
              } else {
                if (status === V++) {
                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.playVideoByScript("friendsStory.avi");
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                        } else {
                          if (status === V++) {
                            cm.setAmbience("Ambience.img/schoolbell", 100, 60);
                            cm.inGameDirectionEvent_AskAnswerTime(200);
                            cm.effect_Text(["#fn黑体##fs24#Chapter 1\r\n#fs18#~希纳斯与命运之转学生~"], [100, 2500, 4, 0, 0, 1, 4, 0, 0, 0]);
                            cm.effect_Voice("UI.img/MenuDown", 100);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(200);
                              cm.effect_Voice("UI.img/MenuUp", 100);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(200);
                                cm.effect_Voice("UI.img/WorldmapOpen", 100);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(100);
                                  cm.effect_Voice("UI.img/MenuDown", 100);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(100);
                                    cm.effect_Voice("UI.img/MenuDown", 100);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(200);
                                      cm.effect_Voice("UI.img/MenuUp", 100);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(200);
                                        cm.effect_Voice("UI.img/WorldmapOpen", 100);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(100);
                                          cm.effect_Voice("UI.img/WorldmapOpen", 100);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(200);
                                            cm.effect_Voice("UI.img/MenuDown", 100);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(200);
                                              cm.effect_Voice("UI.img/MenuUp", 100);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(100);
                                                cm.effect_Voice("UI.img/DragStart", 100);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(200);
                                                  cm.effect_Voice("UI.img/WorldmapOpen", 100);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(200);
                                                    cm.effect_Voice("UI.img/DragStart", 100);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(200);
                                                      cm.effect_Voice("UI.img/WorldmapOpen", 100);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(200);
                                                        cm.effect_Voice("UI.img/MenuUp", 100);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(200);
                                                          cm.effect_Voice("UI.img/DragStart", 100);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_Monologue("#fs30#\r\n\r\n#fNpc/1530060.img/stand/0#    Hidden Mission：嘴唇湿润#fs18#\r\n\r\n   HINT：即使捣蛋鬼出现也不要慌张，先观察周围的情况！", 1);
                                                              cm.effect_Voice("Field.img/flowervioleta/wink", 100);
                                                            } else if (status === V++) {
                                                              cm.forceCompleteQuest(32721);
                                                              cm.gainExp(Math.pow(cm.getLevel(), 3));
                                                              cm.forceStartQuest(32701, '');
                                                              cm.dispose();
                                                              cm.warp(330000000, 1);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;