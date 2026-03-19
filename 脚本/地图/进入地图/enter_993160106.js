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
      cm.setAmbience("Ambience.img/blizzard_soft", 200, 60);
      cm.emotion(1, 999999);
      cm.inGameDirectionEvent_OneTimeAction("虎影_疯狂翻滚", 999999);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 40, -1635);
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
            cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1000, 1000, 40, -1100);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.userSetFieldFloating(993160106, 30, 0, 1000);
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#要是继续这么下去，难保不会出什么意外，赶快想个法子，\r\n魂魄都已经跑那么远了啊！", 37, 3001651, false, true);
                  cm.effect_Voice("Voice5.img/hoyoung/G/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/1', 100);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face4#真是喋喋不休，吵死了！", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                    cm.effect_Voice("Voice5.img/hoyoung/G/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/2', 100);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.userSetFieldFloating(993160106, 0, 0, 0);
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
                              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 40, -1055);
                            } else {
                              if (status === V++) {
                                cm.userSetFieldFloating(993160106, 30, 0, 1000);
                                cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 2);
                                cm.inGameDirectionEvent_AskAnswerTime(1600);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face2#若是能施展轻功，飞上这片峭壁……\r\n算了，这样好像还是有点不够，怕是飞不了几步就要掉下来了。", 37, 3001674 + cm.getPlayer().getGender(), false, true);
                                  cm.effect_Voice("Voice5.img/hoyoung/G/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/3', 100);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face2#如果是师父的话定会招来筋斗云腾云驾雾，\r\n不过凭我现在的实力究竟……", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                    cm.effect_Voice("Voice5.img/hoyoung/G/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/4', 100);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face2#我说，现在需要的可不是这么没自信的话，\r\n越是危机时刻越要坚持己见，总不能让人送死吧？", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                      cm.effect_Voice("Voice5.img/hoyoung/G/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/5', 100);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face2#求生的意念会让道士变得更加强大，\r\n书中的仙人曾这么说过。", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                        cm.effect_Voice("Voice5.img/hoyoung/G/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/6', 100);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face4#天地人……集中精神在这三个字上吧！", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                          cm.effect_Voice("Voice5.img/hoyoung/G/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/7', 100);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#你问我如果想要施展道术该怎么做？专注精神，\r\n认识自我，试着去想象。", 37, 3001654, true, true);
                                            cm.effect_Voice("Voice5.img/hoyoung/G/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/8', 100);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#你一直都存在于天与地之间，\r\n你要将天地人这三个字铭记于心……", 37, 3001654, true, true);
                                              cm.effect_Voice("Voice5.img/hoyoung/G/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/9', 100);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_Hero9(0, 1000);
                                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(1600);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/hoyoung/Dong", 100);
                                                    cm.fieldEffect_PlayBGM("Bgm53/RidingOnTheClouds", 0, 0);
                                                    cm.sendNormalTalk_Bottom("#face0#天与地……这当中便是我。", 37, 3001674 + cm.getPlayer().getGender(), false, true);
                                                    cm.effect_Voice("Voice5.img/hoyoung/G/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/10', 100);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face7#……好像有线索了！我就试着在眼前画了画！", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                      cm.effect_Voice("Voice5.img/hoyoung/G/" + (cm.getPlayer().getGender() == 0 ? 'Male' : 'Female') + "/11", 100);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face4#出来吧，筋斗云！", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                        cm.effect_Voice("Voice5.img/hoyoung/G/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/12", 100);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.userSetFieldFloating(993160106, 0, 0, 0);
                                                            cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 2000, 1000, 40, -1600);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                              } else {
                                                                if (status === V++) {
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
                                                                        cm.dispose();
                                                                        cm.warp(993160138, 0, false);
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}