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
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -680, 100);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(300);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_同时移动镜头和人(2, 450);
          cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 2000, 3000, -360, 100);
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
                cm.inGameDirectionEvent_AskAnswerTime(1500);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face7#声音好像是从这附近发出来的……可周围一个人都没有啊？\r\n估计是野兽的叫声听错了。", 37, 3001674 + cm.getPlayer().getGender(), false, true);
                  cm.effect_Voice("Voice5.img/hoyoung/B-1/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/1', 100);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_同时移动镜头和人(2, 10);
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_同时移动镜头和人(1, 20);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_同时移动镜头和人(2, 10);
                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_PushScaleInfo(1500, 0, 1250, 1500, -360, 10);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face8#等等，这里是……后山！？", 37, 3001674 + cm.getPlayer().getGender(), false, true);
                              cm.effect_Voice("Voice5.img/hoyoung/B-1/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/2', 100);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face8#妈呀！光顾着寻找声音出处，一下疏忽了！\r\n师父说过，绝对不能到这来！", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                cm.effect_Voice("Voice5.img/hoyoung/B-1/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/3', 100);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face8#赶紧回去吧，要是被师父发现，肯定会被他骂死……", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                  cm.effect_Voice("Voice5.img/hoyoung/B-1/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/4', 100);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#到这边来……小老虎……", 37, 3001676, false, true);
                                      cm.effect_Voice("Voice5.img/hoyoung/B-1/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/5', 100);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_同时移动镜头和人(2, 10);
                                        cm.sendNormalTalk_Bottom("#face7#诶，又是刚才那个声音？", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                        cm.effect_Voice("Voice5.img/hoyoung/B-1/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/6', 100);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_同时移动镜头和人(2, 500);
                                            cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 1500, 3000, 0, 70);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(2500);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                              } else {
                                                if (status === V++) {
                                                  cm.forceCompleteQuest(39511);
                                                  cm.gainExp(12);
                                                  cm.gainExp(29);
                                                  cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                  cm.gainItem(4036576, -10);
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
                                                        cm.setStandAloneMode(false);
                                                        cm.eventSKill(0);
                                                        cm.setInGameDirectionMode(false, true, false);
                                                        cm.dispose();
                                                        cm.warp(993160005, 0, false);
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}