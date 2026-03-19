var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (cm.getMapId() == 867233150) {
    action10(f, E, e);
  } else {
    if (cm.getMapId() == 867233250) {
      action20(f, E, e);
    } else if (cm.getMapId() == 867233350) {
      action30(f, E, e);
    } else {
      cm.dispose();
    }
  }
}
function action10(f, E, e) {
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
      cm.onActionBarResult(15, 1010, 0, 3, 0);
      cm.onActionBarResult(15, 1010, 0, 3, 1);
      cm.onActionBarResult(15, 1010, 0, 3, 2);
      cm.onActionBarResult(15, 1010, 0, 3, 3);
      cm.onActionBarResult(15, 1010, 0, 3, 4);
      cm.updateInfoQuest(64001, "dir1=0;man=720;stage=0;enemy=401253;seq=0;mine=0;Fidx=0;companion=108372654;dir0=0");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(9400676, "oid=7546749", -1795, 135, 6, -1845, -1745, 0, true, false);
      cm.npc_SetSpecialAction("oid=7546749", "summon", 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_同时移动镜头和人(1, 300);
        cm.sendNewEffects(18, [2000, 1000, 2000, -250, 50]);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1500);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_OneTimeAction(7, 0);
            cm.inGameDirectionEvent_AskAnswerTime(300);
          } else {
            if (status === V++) {
              cm.fieldEffect_ScreenMsg("Map/EffectPL.img/MainStream/Skuas/screenEff/finishAttack");
              cm.inGameDirectionEvent_AskAnswerTime(900);
            } else {
              if (status === V++) {
                cm.npc_SetSpecialAction("oid=7546749", "die1", 1, 0);
                cm.fieldEffect_PlayFieldSound("PL_3min/CubeBreak", 100);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.npc_LeaveField("oid=7546749");
                  cm.npc_LeaveField("oid=7546749");
                  cm.sendNormalTalk_Bottom("击退了敌将！！！", 57, 0, false, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1440);
                  } else {
                    if (status === V++) {
                      cm.sendNewEffects(14, [0, 2000, 1000, 0, 0]);
                    } else {
                      if (status === V++) {
                        cm.sendNewEffects(19, [0]);
                      } else {
                        if (status === V++) {
                          cm.setInGameDirectionMode(false, true, false);
                          cm.updateInfoQuest(64001, "dir1=0;man=557;stage=0;enemy=401253;seq=0;mine=0;Fidx=0;companion=108372654;dir0=0");
                          cm.fieldEffect_复合图片动画(["Map/EffectPL.img/3min/clearS/skeleton_clear", "animation_text01_01", '', ''], [0, 0, 1, 0, 0, 0, 0, 0]);
                          cm.fieldEffect_PlayFieldSound("PL_3min/Clear", 100);
                          cm.sendNormalTalk_Bottom("#face0#万岁！！！", 37, 9400581, false, true);
                        } else {
                          if (status === V++) {
                            cm.openUI(1711);
                          } else if (status === V++) {
                            nextBattle(1);
                            cm.addPopupSay(9400583, 10000, "#face1#目前……目前还没事！", '', 0);
                            cm.updateInfoQuest(64001, "dir1=0;man=557;stage=0;enemy=21053;seq=0;mine=0;Fidx=0;companion=3726514;dir0=0");
                            cm.updateInfoQuest(64002, "man=56;stage=1;enemy=0;man0=0;man1=0;companion=2");
                            cm.updateInfoQuest(64003, "enemy0=2;enemy1=1;companion0=3;man0=47;companion1=7;man1=128;map0=0;map1=0");
                            cm.updateInfoQuest(64004, "0=1;1=1;2=1;3=1;4=1;5=0;6=1");
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
function action20(f, E, e) {
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
      cm.onActionBarResult(15, 1010, 0, 3, 0);
      cm.onActionBarResult(15, 1010, 0, 3, 1);
      cm.onActionBarResult(15, 1010, 0, 3, 2);
      cm.onActionBarResult(15, 1010, 0, 3, 3);
      cm.onActionBarResult(15, 1010, 0, 3, 4);
      cm.updateInfoQuest(64001, "dir1=0;man=557;stage=1;enemy=21053;seq=0;mine=0;Fidx=0;companion=3726514;dir0=0");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(9400667, "oid=7547766", -1795, 145, 6, -1845, -1745, 0, true, false);
      cm.npc_SetSpecialAction("oid=7547766", "summon", 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_同时移动镜头和人(1, 300);
        cm.sendNewEffects(18, [2000, 1000, 2000, -250, 50]);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1500);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_OneTimeAction(7, 0);
            cm.inGameDirectionEvent_AskAnswerTime(300);
          } else {
            if (status === V++) {
              cm.fieldEffect_ScreenMsg("Map/EffectPL.img/MainStream/Skuas/screenEff/finishAttack");
              cm.inGameDirectionEvent_AskAnswerTime(900);
            } else {
              if (status === V++) {
                cm.npc_SetSpecialAction("oid=7547766", "die1", 1, 0);
                cm.fieldEffect_PlayFieldSound("PL_3min/CubeBreak", 100);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.npc_LeaveField("oid=7547766");
                  cm.npc_LeaveField("oid=7547766");
                  cm.sendNormalTalk_Bottom("击退了敌将！！！", 57, 0, false, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1440);
                  } else {
                    if (status === V++) {
                      cm.sendNewEffects(14, [0, 2000, 1000, 0, 0]);
                    } else {
                      if (status === V++) {
                        cm.sendNewEffects(19, [0]);
                      } else {
                        if (status === V++) {
                          cm.setInGameDirectionMode(false, true, false);
                          cm.updateInfoQuest(64001, "dir1=0;man=382;stage=1;enemy=21053;seq=0;mine=0;Fidx=0;companion=3726514;dir0=0");
                          cm.fieldEffect_复合图片动画(["Map/EffectPL.img/3min/clearS/skeleton_clear", "animation_text01_01", '', ''], [0, 0, 1, 0, 0, 0, 0, 0]);
                          cm.fieldEffect_PlayFieldSound("PL_3min/Clear", 100);
                          cm.sendNormalTalk_Bottom("#face0#万岁！！！", 37, 9400584, false, true);
                        } else {
                          if (status === V++) {
                            cm.playerMessage(-1, "战线被击溃，正在撤退。");
                            cm.sendNormalTalk_Bottom("#face1#这是战术撤退！拉起防御线！", 37, 9400581, true, true);
                          } else {
                            if (status === V++) {
                              cm.openUI(1711);
                            } else if (status === V++) {
                              nextBattle(2);
                              cm.addPopupSay(9400580, 10000, "#face5#怪物实在是太多了，这样下去实在是……没办法安装地雷啊！", '', 0);
                              cm.updateInfoQuest(64001, "dir1=0;man=382;stage=1;enemy=5213;seq=0;mine=0;Fidx=0;companion=26514;dir0=0");
                              cm.updateInfoQuest(64002, "man=53;stage=2;enemy=2;man0=0;man1=0;companion=6");
                              cm.updateInfoQuest(64003, "enemy0=5;enemy1=1;companion0=2;man0=56;companion1=5;man1=28;map0=1;map1=1");
                              cm.updateInfoQuest(64004, "0=1;1=0;2=1;3=1;4=1;5=0;6=1");
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
function action30(f, E, e) {
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
      cm.onActionBarResult(15, 1010, 0, 3, 0);
      cm.onActionBarResult(15, 1010, 0, 3, 1);
      cm.onActionBarResult(15, 1010, 0, 3, 2);
      cm.onActionBarResult(15, 1010, 0, 3, 3);
      cm.onActionBarResult(15, 1010, 0, 3, 4);
      cm.updateInfoQuest(64001, "dir1=1;man=382;stage=2;enemy=5213;seq=0;mine=0;Fidx=0;companion=26514;dir0=0");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(9400666, "oid=7549063", -1270, 145, 14, -1320, -1220, 0, true, false);
      cm.npc_SetSpecialAction("oid=7549063", "summon", 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_同时移动镜头和人(1, 300);
        cm.sendNewEffects(18, [2000, 1000, 2000, -250, 50]);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1500);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_OneTimeAction(7, 0);
            cm.inGameDirectionEvent_AskAnswerTime(300);
          } else {
            if (status === V++) {
              cm.fieldEffect_ScreenMsg("Map/EffectPL.img/MainStream/Skuas/screenEff/finishAttack");
              cm.inGameDirectionEvent_AskAnswerTime(900);
            } else {
              if (status === V++) {
                cm.npc_SetSpecialAction("oid=7549063", 'die1', 1, 0);
                cm.fieldEffect_PlayFieldSound("PL_3min/CubeBreak", 100);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.npc_LeaveField("oid=7549063");
                  cm.npc_LeaveField("oid=7549063");
                  cm.sendNormalTalk_Bottom('击退了敌将！！！', 57, 0, false, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1440);
                  } else {
                    if (status === V++) {
                      cm.sendNewEffects(14, [0, 2000, 1000, 0, 0]);
                    } else {
                      if (status === V++) {
                        cm.sendNewEffects(19, [0]);
                      } else {
                        if (status === V++) {
                          cm.setInGameDirectionMode(false, true, false);
                          cm.updateInfoQuest(64001, "dir1=1;man=298;stage=2;enemy=5213;seq=0;mine=0;Fidx=0;companion=26514;dir0=0");
                          cm.fieldEffect_复合图片动画(["Map/EffectPL.img/3min/clearS/skeleton_clear", "animation_text01_01", '', ''], [0, 0, 1, 0, 0, 0, 0, 0]);
                          cm.fieldEffect_PlayFieldSound("PL_3min/Clear", 100);
                          cm.sendNormalTalk_Bottom("#face0#万岁！！！", 37, 9400580, false, true);
                        } else {
                          if (status === V++) {
                            cm.openUI(1711);
                          } else if (status === V++) {
                            nextBattle(3);
                            cm.addPopupSay(9400597, 10000, "#face1#干吗呢！？赶紧过来帮忙啊！你没看到我们正处于下风吗？！", '', 0);
                            cm.updateInfoQuest(64001, "dir1=1;man=298;stage=2;enemy=513;seq=0;mine=0;Fidx=0;companion=146;dir0=0");
                            cm.updateInfoQuest(64002, "man=42;stage=3;enemy=1;man0=0;man1=0;companion=4");
                            cm.updateInfoQuest(64003, "enemy0=5;enemy1=3;companion0=1;man0=135;companion1=6;man1=53;map0=2;map1=2");
                            cm.updateInfoQuest(64004, "0=1;1=0;2=1;3=0;4=0;5=0;6=1");
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
function nextBattle(f) {
  var E = [];
  var e = 0;
  for (var V = 0; V <= 5; ++e, ++V) {
    if (cm.getNumberFromQuestInfo(10006400, "mob" + V) == 1) {
      continue;
    }
    E[e] = V;
  }
  var O = E.sort(function () {
    return Math.random() - 0.5;
  });
  var E = [];
  var e = 0;
  for (var V = 0; V <= 8; ++e, ++V) {
    if (cm.getNumberFromQuestInfo(10006400, 'npc' + V) == 1) {
      continue;
    }
    E[e] = V;
  }
  var b = E.sort(function () {
    return Math.random() - 0.5;
  });
  var w = cm.rand(30, 150);
  var L = cm.rand(30, 150);
  var S = cm.rand(30, 150);
  cm.setNumberForQuestInfo(64002, "man", w);
  cm.setNumberForQuestInfo(64003, 'man0', L);
  cm.setNumberForQuestInfo(64003, "man1", S);
  cm.莫奈德_特效(null, [2, f, O[0], b[0], w, f, O[1], b[1], L, f, O[2], b[2], S]);
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;