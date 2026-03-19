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
  if (cm.getQuestStatus(35932) != 1) {
    cm.dispose();
    return;
  }
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.Hidden_background("light", 1, 0, 0, 0);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -45, 200);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushScaleInfo(8000, 0, 1000, 8000, -28, 1850);
        } else {
          if (status === V++) {
            cm.effect_Text(["#fn黑体##fs18#水下世界深海"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0]);
            cm.inGameDirectionEvent_同时移动镜头和人(2, 520);
            cm.inGameDirectionEvent_AskAnswerTime(6500);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face3##b（果然把我带到了那个石像所在的地方。\r\n啊，遗物之光好像想让我继续前进。）#k", 37, 1013359, false, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1500, 1000, 123, 1988);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_同时移动镜头和人(2, 120);
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else {
                  if (status === V++) {
                    cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                          cm.Hidden_background("light", 1, 1, 0, 0);
                          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 123, 1988);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0##b（感觉到一股强大的能量传到了遗物中。\r\n堕落之力也与之呼应，开始激荡起来。）#k", 37, 1013359, false, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 2);
                                  cm.inGameDirectionEvent_AskAnswerTime(2600);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction22.img/effect/PF_34job/1", 0, 500, 0, 0, 1, 4, 0, -1, 0, 0, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(5100);
                                  } else {
                                    if (status === V++) {
                                      cm.effect_Text(["#fn黑体##fs35##d果然被挡住了。#k"], [50, 3600, 7, 0, -50, 1, 4, 0, 0, 0, 0]);
                                      cm.inGameDirectionEvent_AskAnswerTime(3500);
                                    } else {
                                      if (status === V++) {
                                        cm.effect_Text(["#fn黑体##fs35##d看来可以再现的古代之力就只有这么多。#k"], [50, 3600, 7, 0, -50, 1, 4, 0, 0, 0, 0]);
                                        cm.inGameDirectionEvent_AskAnswerTime(7000);
                                      } else {
                                        if (status === V++) {
                                          cm.effect_Text(["#fn黑体##fs35##d到刚才为止……#k"], [50, 3600, 7, 0, -50, 1, 4, 0, 0, 0, 0]);
                                          cm.inGameDirectionEvent_AskAnswerTime(6500);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                            cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 0, 2);
                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0##b（诅咒之印消失了。这是遗物的最后一项考验吗？\r\n但是疑问却越来越重了。）#k", 37, 1013359, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0##b（奇拉……他为什么能重现古代之力呢？\r\n被什么东西挡住了，又是什么意思呢？）#k", 37, 1013359, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0##b（在那个遗迹中……也许可以找到什么线索。\r\n到那里去看看吧。）#k", 37, 1013359, false, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                          } else if (status === V++) {
                                                            cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                            cm.eventSKill(0);
                                                            cm.setInGameDirectionMode(false, true, false);
                                                            cm.setStandAloneMode(false);
                                                            cm.dispose();
                                                            cm.warp(910090317, 0, false);
                                                          } else {
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