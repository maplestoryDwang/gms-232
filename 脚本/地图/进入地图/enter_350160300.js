var status = -1;
var selectionLog = [];
function action(T, W, u) {
  if (status == 0 && T == 0) {
    cm.dispose();
    return;
  }
  var j = cm.getNumberFromQuestInfo(34021, 'hero1');
  var G = cm.getNumberFromQuestInfo(34021, "hero2");
  var l = [4, 6, 3, 5, 7, 2];
  status++;
  selectionLog[status] = u;
  var O = -1;
  if (status <= O++) {
    cm.dispose();
  } else {
    if (status === O++) {
      cm.setNumberForQuestCustomData(33900, 7);
      cm.showMapleHero();
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 650, -110);
      cm.curNodeEventEnd(true);
    } else {
      if (status === O++) {
        cm.inGameDirectionEvent_SetHideEffect(1);
        cm.npc_ChangeController(1540809, "oid=294629604", 1200, -200, 2, 1150, 1250, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=294629604", "summon", 0, 0);
        cm.npc_ChangeController(1540807, "oid=294629605", 200, -120, 3, 150, 250, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=294629605", 'summon', 0, 0);
        cm.npc_ChangeController(1540801 + j, "oid=294629606", 190, -120, 3, 140, 240, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=294629606", "summon", 0, 0);
        cm.npc_ChangeController(1540801 + G, "oid=294629607", 130, -120, 3, 80, 180, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=294629607", 'summon', 0, 0);
        cm.npc_ChangeController(1540805, "oid=294629608", 250, -120, 3, 200, 300, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=294629608", 'summon', 0, 0);
        cm.npc_ChangeController(1540914, "oid=294629609", 590, -120, 1, 540, 640, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=294629609", "summon", 0, 0);
        cm.npc_SetSpecialAction("oid=294629604", "stand3", -1, 1);
        cm.npc_SetSpecialAction("oid=294629609", "special", -1, 1);
        cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 520, 20);
      } else {
        if (status === O++) {
          cm.npc_SetForceMove("oid=294629605", 1, 190, 100);
          cm.npc_SetForceMove("oid=294629606", 1, 190, 100);
          cm.npc_SetForceMove("oid=294629607", 1, 190, 100);
          cm.npc_SetForceMove("oid=294629608", 1, 190, 100);
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === O++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1400);
          } else {
            if (status === O++) {
              cm.inGameDirectionEvent_AskAnswerTime(1500);
            } else {
              if (status === O++) {
                cm.sendNormalTalk_Bottom("#face3#这里到底发生了什么？", 37, 1540805, false, true);
              } else {
                if (status === O++) {
                  cm.sendNormalTalk_Bottom("#face4#受了致命伤……戴米安居然已经堕落到足以背叛自己的哥哥！", 37, 1540801 + j, true, true);
                } else {
                  if (status === O++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === O++) {
                      cm.sendNormalTalk_Bottom("#face11#你们终于来到这里了。", 37, 1540809, false, true);
                      cm.effect_Voice("Voice3.img/HofM/ACT4/ETC/1", 128);
                    } else {
                      if (status === O++) {
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === O++) {
                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=294629606"], [0, 0, 0, 1, 0, 1, 0, 0]);
                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=294629607"], [0, 0, 0, 1, 0, 1, 0, 0]);
                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=294629608"], [0, 0, 0, 1, 0, 1, 0, 0]);
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === O++) {
                            cm.inGameDirectionEvent_PushScaleInfo(500, 2000, 500, 1200, 20);
                          } else {
                            if (status === O++) {
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                              if (status === O++) {
                                cm.fieldEffect_PlayBGM("Bgm45.img/Demian Spine", 0, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                              } else {
                                if (status === O++) {
                                  cm.sendNormalTalk_Bottom("#face11#一帮愚蠢的家伙……", 37, 1540809, false, true);
                                } else {
                                  if (status === O++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                  } else {
                                    if (status === O++) {
                                      cm.inGameDirectionEvent_PushScaleInfo(500, 2000, 1000, 520, 20);
                                    } else {
                                      if (status === O++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                      } else {
                                        if (status === O++) {
                                          cm.sendNormalTalk_Bottom("#face4#我再也不能坐视你继续破坏这个世界了！", 37, 1540801 + j, false, true);
                                          cm.effect_Voice("Voice3.img/HofM/ACT4/ETC/" + l[j], 128);
                                        } else {
                                          if (status === O++) {
                                            cm.sendNormalTalk_Bottom("#face0#戴米安，你在雪龟岛上所做的事不能被原谅，\r\n现在我就要向你问责！", 37, 1540801 + G, true, true);
                                            cm.effect_Voice("Voice3.img/HofM/ACT4/ETC/" + l[G], 128);
                                          } else {
                                            if (status === O++) {
                                              cm.sendNormalTalk_Bottom("#face3#我一定会以阿弗利埃的名义，阻止你的。", 37, 1540805, true, true);
                                              cm.effect_Voice("Voice3.img/HofM/ACT4/ETC/7", 128);
                                            } else {
                                              if (status === O++) {
                                                cm.inGameDirectionEvent_PushScaleInfo(500, 2000, 500, 1200, 20);
                                              } else {
                                                if (status === O++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(700);
                                                } else {
                                                  if (status === O++) {
                                                    cm.sendNormalTalk_Bottom("#face12#好吧，既然你们都已经到了这里，那就无需多言了。", 37, 1540809, false, true);
                                                  } else {
                                                    if (status === O++) {
                                                      cm.sendNormalTalk_Bottom("#face12#想要打倒我，就用你的武器说话！", 37, 1540809, true, true);
                                                    } else {
                                                      if (status === O++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                      } else {
                                                        if (status === O++) {
                                                          cm.userSetFieldFloating(350160300, 10, 10, 10);
                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                        } else {
                                                          if (status === O++) {
                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                          } else {
                                                            if (status === O++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                            } else {
                                                              if (status === O++) {
                                                                cm.userSetFieldFloating(350160300, 0, 0, 0);
                                                                cm.inGameDirectionEvent_SetHideEffect(1);
                                                                cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, -125, -700);
                                                              } else {
                                                                if (status === O++) {
                                                                  cm.onNewSpecialEffect(3, 0);
                                                                } else {
                                                                  if (status === O++) {
                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BossDemian/phase1", 100);
                                                                    cm.fieldEffect_复合图片动画(["Map/Effect2.img/DemianIllust/1pahseSp/demian", "animation", '', ''], [0, 0, 1, 0, 0, 0, 0, 0]);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(8000);
                                                                  } else if (status === O++) {
                                                                    cm.dispose();
                                                                    cm.warp(350160320, 0, true);
                                                                    cm.inGameDirectionEvent_SetHideEffect(0);
                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                    cm.npc_LeaveField("oid=294629604");
                                                                    cm.npc_LeaveField("oid=294629604");
                                                                    cm.npc_LeaveField("oid=294629605");
                                                                    cm.npc_LeaveField("oid=294629605");
                                                                    cm.npc_LeaveField("oid=294629606");
                                                                    cm.npc_LeaveField("oid=294629606");
                                                                    cm.npc_LeaveField("oid=294629607");
                                                                    cm.npc_LeaveField("oid=294629607");
                                                                    cm.npc_LeaveField("oid=294629608");
                                                                    cm.npc_LeaveField("oid=294629608");
                                                                    cm.npc_LeaveField("oid=294629609");
                                                                    cm.npc_LeaveField("oid=294629609");
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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