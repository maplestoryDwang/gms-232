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
      cm.getMap().spawnReactorIfNotExist(3500029, 0, 57, -162, 0, "graph");
      cm.getMap().spawnReactorIfNotExist(3500030, 0, 4, -285, 0, "eye");
      cm.getMap().spawnReactorIfNotExist(3500026, 0, -72, -268, 0, "leftL");
      cm.getMap().spawnReactorIfNotExist(3500032, 0, 437, -287, 0, "wall");
      cm.updateInfoQuest(33240, "act5=350053920");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.getMap().getReactorByName("eye").forceHitReactor(null, 1, 4, -285, 0);
      cm.getMap().getReactorByName('graph').forceHitReactor(null, 3, 57, -162, 0);
      cm.getMap().getReactorByName('leftL').forceHitReactor(null, 1, -72, -268, 0);
      cm.npc_ChangeController(1540703, "oid=284692025", 320, 0, 1, 270, 370, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=284692025", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=284692025", 'on', -1, 1);
      cm.npc_setForceFlip("oid=284692025", -1);
      cm.npc_ChangeController(1540490, "oid=284692026", 220, 0, 1, 170, 270, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=284692026", "summon", 0, 0);
      cm.npc_SetForceMove("oid=284692026", 1, 30, 50);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_SetSpecialAction("oid=284692025", "pushed", -1, 1);
        cm.fieldEffect_PlayFieldSound("Sound/Field.img/FriendsStory/BtClose", 100);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.getMap().getReactorByName("wall").forceHitReactor(null, 1, 437, -287, 0);
          cm.inGameDirectionEvent_AskAnswerTime(500);
        } else {
          if (status === V++) {
            cm.npc_SetForceMove("oid=284692026", 1, 20, 80);
            cm.inGameDirectionEvent_AskAnswerTime(150);
          } else {
            if (status === V++) {
              cm.fieldEffect_PlayFieldSound("Sound/Field.img/FriendsStory/BtClose", 100);
              cm.inGameDirectionEvent_AskAnswerTime(150);
            } else {
              if (status === V++) {
                cm.npc_SetSpecialAction("oid=284692025", 'on', -1, 1);
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.getMap().getReactorByName("wall").forceHitReactor(null, 0, 437, -287, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("搞什么？这个又是怎么回事啊？\r\n那个秃头，花样真多。\r\n哼…………", 37, 1540490, false, true);
                  } else {
                    if (status === V++) {
                      cm.npc_SetForceMove("oid=284692026", -1, 50, 100);
                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                    } else {
                      if (status === V++) {
                        cm.npc_SetForceMove("oid=284692026", 1, 30, 50);
                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                      } else {
                        if (status === V++) {
                          cm.npc_SetSpecialAction("oid=284692025", 'pushed', -1, 1);
                          cm.fieldEffect_PlayFieldSound("Sound/Field.img/FriendsStory/BtClose", 100);
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.getMap().getReactorByName("wall").forceHitReactor(null, 1, 437, -287, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.npc_SetForceMove("oid=284692026", 1, 30, 100);
                              cm.inGameDirectionEvent_AskAnswerTime(150);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_PlayFieldSound("Sound/Field.img/FriendsStory/BtClose", 100);
                                cm.inGameDirectionEvent_AskAnswerTime(150);
                              } else {
                                if (status === V++) {
                                  cm.npc_SetSpecialAction("oid=284692025", 'on', -1, 1);
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else {
                                  if (status === V++) {
                                    cm.getMap().getReactorByName("wall").forceHitReactor(null, 0, 437, -287, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                      cm.effect_NormalSpeechBalloon("...", 1, 0, 0, 1000, 1, 0, 0, 0, 4, 1540490, cm.getPlayer().getId());
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("这是好像需要两个人一同开启。", 57, 0, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_SetForceMove("oid=284692026", -1, 30, 100);
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face2##fs20#你给我安静点，这我也知道！！", 37, 1540490, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("现在我们俩的处境是一样的，都想从这里出去。\r\n难道你不想快点去救斯乌吗？", 57, 0, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom('…………', 37, 1540490, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("……哼，你还是来这里按着按钮吧。", 37, 1540490, true, true);
                                                } else if (status === V++) {
                                                  cm.getTopMsgFont("试着点击按钮吧. ", 3, 20, 20, 0);
                                                  cm.updateInfoQuest(33233, "start=1");
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;