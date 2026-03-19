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
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -2281, 381);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.setAmbience("Ambience.img/blizzard_soft", 200, 60);
        cm.inGameDirectionEvent_QTE(0);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_OneTimeAction(7, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_MoveAction(7);
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_头顶图片(["Effect/Direction19.img/effect/cadena/3"], [3000, 750, 0, 1, 0, 4, 0, 0]);
              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion1", 100);
              cm.inGameDirectionEvent_头顶图片(["Effect/Direction19.img/effect/cadena/3"], [3000, 500, 100, 1, 0, 4, 0, 0]);
              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion2", 100);
              cm.inGameDirectionEvent_头顶图片(["Effect/Direction19.img/effect/cadena/3"], [0, 2000, 57, 1, 0, 4, 0, 0]);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_头顶图片(["Effect/Direction19.img/effect/cadena/3"], [0, 420, 200, 1, 0, 4, 0, 0]);
                cm.inGameDirectionEvent_头顶图片(["Effect/Direction19.img/effect/cadena/3"], [0, 100, 30, 1, 0, 3, 0, 0]);
                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion0", 100);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction19.img/effect/cadena/3"], [3000, 190, 440, 1, 0, 3, 0, 0]);
                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction19.img/effect/cadena/3"], [0, 313, 370, 1, 0, 3, 0, 0]);
                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction19.img/effect/cadena/3"], [0, 172, 410, 1, 0, 3, 0, 0]);
                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction19.img/effect/cadena/3"], [3000, 400, 280, 1, 0, 3, 0, 0]);
                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion1", 100);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_PushScaleInfo(500, 0, 1000, 500, -2301, 350);
                  } else {
                    if (status === V++) {
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
                              cm.Hidden_background('sand', 1, 0, 0, 0);
                              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -2301, 350);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#……在这里，好像找到了。", 37, 3001500 + cm.getPlayer().getGender(), 0, 1);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 500, 0);
                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/PinkBean/expectation", 100);
                                    cm.fieldEffect_ProcessOnOffLayer('d0', "Effect/Direction17.img/effect/ark/illust/7/2", 0, 300, 0, -80, -1, 4, 1, -1, 0, 0, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 500, 0);
                                      cm.fieldEffect_ProcessOnOffLayer('d0', '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_Hero9(100, 0);
                                        cm.sendNormalTalk_Bottom("#face1#把这些东西带回避难处……我们就能重新开始旅行了……", 37, 3001510, 0, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face3#唰啊啊啊↗ 我们克服逆境活了下来↗ 唰啊啊啊↗ 哒哒！", 37, 3001509, 1, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face4#唰啊啊啊↗ 我们穿越暴风来到了这里↗ 唰啊啊啊↗ 哒哒哒哒！", 37, 3001509, 1, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face3#嘚啊啊啊↗ 我们从地狱中爬了上来↗ 嘚啊啊啊↗ 哒哒！", 37, 3001509, 1, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face4#哒哒哒哒，哒哒啦，哒哒！我们离开的日子！即将到来↗", 37, 3001509, 1, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1000, 1000, -1808, 350);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_同时移动镜头和人(2, 500);
                                                    cm.sendNormalTalk_Bottom("#face0#啊，那个东西……我好像见过。", 37, 3001500 + cm.getPlayer().getGender(), 0, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#叽勒，在远处见到过，走这么近还是第一次，叽勒……是座非常巨大的建筑……", 37, 3001510, 1, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_PushScaleInfo(4000, 0, 950, 4000, -1308, -150);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.fieldEffect_PlayBGM("Bgm45.img/Army Of Fears Theme", 0, 0);
                                                              cm.inGameDirectionEvent_AskAnswerTime(5500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face8#现在终于知道了……披着和平外衣的战争的丑陋面目……", 37, 3001500 + cm.getPlayer().getGender(), 0, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_ProcessOnOffLayer('0', "Effect/Direction17.img/effect/ark/noise/1366/0", 0, 500, 0, -10, 0, 4, 1, -1, 1, 0, 0);
                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/radionoise", 100);
                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(300);
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
                                                                              cm.setStandAloneMode(false);
                                                                              cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                              cm.warp(402090010, 0, false);
                                                                              cm.eventSKill(0);
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