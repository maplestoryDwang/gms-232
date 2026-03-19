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
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.updateInfoQuest(34125, "390=2;310=2;320=2");
      cm.npc_ChangeController(3003113, "oid=2071141", -545, 166, 46, -595, -495, 0, true, false);
      cm.npc_SetSpecialAction("oid=2071141", "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -245, 227);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
            cm.inGameDirectionEvent_同时移动镜头和人(2, 515);
            cm.npc_SetForceMove("oid=2071141", 1, 380, 180);
            cm.inGameDirectionEvent_PushScaleInfo(2000, 2000, 2000, -45, 227);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(3500);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("虽然只是坐船经过，但那里与无名村庄的景象完全不同。", 37, 3003113, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("虽然勉强沿着绝壁走了上来…… 但接下来该怎么走呢……", 37, 3003113, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_PushScaleInfo(2000, 2000, 2000, 150, 227);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("那边好像有座桥。通过那座桥应该可以到对面去。", 37, 3003113, false, true);
                      } else {
                        if (status === V++) {
                          cm.npc_SetForceMove("oid=2071141", 1, 230, 150);
                          cm.inGameDirectionEvent_同时移动镜头和人(2, 270);
                          cm.inGameDirectionEvent_AskAnswerTime(3000);
                        } else {
                          if (status === V++) {
                            cm.npc_ChangeController(3003112, "oid=2071182", -220, 140, 44, -270, -170, 0, true, false);
                            cm.npc_SetSpecialAction("oid=2071182", "summon", 0, 0);
                            cm.sendNormalTalk_Bottom("等一下！", 37, 3003112, false, true);
                          } else {
                            if (status === V++) {
                              cm.npc_SetForceMove("oid=2071182", 1, 195, 180);
                              cm.inGameDirectionEvent_PushScaleInfo(2000, 2000, 2000, 120, 227);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_同时移动镜头和人(1, 30);
                                  cm.npc_SetForceMove("oid=2071141", -1, 5, 120);
                                  cm.sendNormalTalk_Bottom("不能过那座桥！", 37, 3003112, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("这里又被称为死亡火焰地带…… 那是死亡火焰创造出的海市蜃楼！", 37, 3003112, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("如果被海市蜃楼的幻象所迷惑，一瞬间就会被火焰吞噬！", 37, 3003112, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("看来你好像刚到这里没多久啊…… 你为什么会到这么危险的地方来……", 37, 3003112, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#b(为了前往神秘河畔的尽头，所以想要通过消亡旅途。)#k", 35, 0, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("……但即使如此，你们好像对这个空间所知道的太少了。", 37, 3003112, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("如果没有情报，在这里将会举步维艰！", 37, 3003112, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 250, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(250);
                                              } else if (status === V++) {
                                                cm.dispose();
                                                cm.warp(450001100, 0);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;