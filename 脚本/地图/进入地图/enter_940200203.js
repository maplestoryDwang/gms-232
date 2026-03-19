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
      cm.gainSkillBuff(80002228);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.setAmbience("SoundEff.img/ArcaneRiver/light", 100, 60);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -550, 250);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_MoveAction(6);
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("啊，什么情况？那个巨大的漩涡？", 57, 0, false, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushScaleInfo(3000, 1000, 3000, -47, 70);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(3500);
              } else {
                if (status === V++) {
                  cm.askMenu_Bottom("光是从外表看来就气势非凡，似乎很危险啊，怎么办才好呢……\r\n#L0# #b选项1：先行撤退。#l\r\n#L1# #b选项2：一边闪躲一边往前走。#l", 57, 0);
                } else {
                  if (status === V++) {
                    if (e == 0) {
                      cm.sendNormalTalk_Bottom("看上去实在是危险，飞鱼，我们一边闪躲一边往前走吧。", 57, 0, false, true);
                    } else {
                      cm.sendNormalTalk_Bottom("看上去实在是太危险了，还是先撤吧。飞鱼，我们还是先找个安全的地方吧。", 57, 0, false, true);
                    }
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(300);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_ForcedFlip(-1);
                        cm.inGameDirectionEvent_AskAnswerTime(600);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#b(飞鱼看上去有些力不从心。)#k", 57, 0, false, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_同时移动镜头和人(2, 150);
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("糟糕！不管怎么做都会被漩涡吸进去！", 57, 0, false, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_同时移动镜头和人(2, 600);
                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                              } else {
                                if (status === V++) {
                                  cm.userSetFieldFloating(940200203, 3, 3, 10);
                                  cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction19.img/effect/arcana/1", 0, 900, 0, 0, 12, 4, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(900);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("啊，不可以！", 57, 0, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.userSetFieldFloating(940200203, 0, 0, 0);
                                        cm.fieldEffect_ProcessOnOffLayer('01', "Effect/Direction19.img/effect/arcana/2", 0, 900, 0, 0, 12, 4, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(600);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 300, 0, 0, 0, 0, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(600);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("额啊！！！！！！！！！！！！！！！！！！！！", 57, 0, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_ProcessOnOffLayer('02', "Effect/Direction19.img/effect/arcana_maptransfer/0", 0, 2600, 0, 0, 12, 4, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(2600);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
                                                cm.fieldEffect_ProcessOnOffLayer('01', '', 2, 300, 0, 0, 0, 0, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                } else if (status === V++) {
                                                  cm.playSoundEffDirectly("SoundEff.img/ArcaneRiver/light");
                                                  cm.dispose();
                                                  cm.warp(940200204, 0, true);
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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