var status = -1;
function action(f, E, e) {
  if (cm.isQuestFinished(30070)) {
    spawn();
    return;
  }
  status++;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.forceForfeitQuest(30081);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.npc_ChangeController(1302102, "oid=19476722", -104, 285, 3, -154, -54, 1, false, false);
      cm.npc_SetSpecialAction("oid=19476722", 'summon', 0, 0);
      cm.npc_ChangeController(1302005, "oid=19476723", 133, 279, 4, 83, 183, 1, false, false);
      cm.npc_SetSpecialAction("oid=19476723", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(2000);
        cm.effect_NormalSpeechBalloon("女孩～可爱的女孩～可爱的女孩～", 1, 0, 0, 2000, 1302102, 9897148);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(2000);
          cm.effect_NormalSpeechBalloon("耶耶！可爱的女孩～", 1, 0, 0, 2000, 1302102, 9897148);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(2000);
            cm.effect_NormalSpeechBalloon("这里……真的是船长室? ", 1, 0, 0, 2000, 0, 9897148);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(2000);
              cm.effect_NormalSpeechBalloon("谁? ！", 0, 0, 0, 2000, 1302102, 9897148);
            } else {
              if (status === V++) {
                cm.fieldEffect_PlayFieldSound("flowervioleta/suprise", 100);
                cm.inGameDirectionEvent_AskAnswerTime(2000);
                cm.effect_Direction("Effect/Direction2.img/flowervioleta/face", 0, 0, 0);
                cm.effect_NormalSpeechBalloon("你是黑大海盗吗? ", 1, 0, 0, 2000, 0, 9897148);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_PushScaleInfo(1000, 3000, 1500, -420, 170);
                } else {
                  if (status === V++) {
                    cm.effect_PlayMusic("Field.img/flowervioleta/action");
                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 1500, 350, 190);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -116, 280);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                              cm.effect_NormalSpeechBalloon("这, 这是我的取向.请尊重我！", 0, 0, 0, 2000, 1302102, 9897148);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_PushScaleInfo(500, 1000, 500, -100, 170);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                    cm.effect_NormalSpeechBalloon("我什么都没说.", 1, 0, 0, 2000, 0, 9897148);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                      cm.effect_NormalSpeechBalloon("哎呀！竟然不经允许就闯进来, 不可原谅！", 1, 0, 0, 2000, 1302102, 9897148);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                        cm.effect_NormalSpeechBalloon("既然被你看到了不该看到的东西, 就不能让你活下去！", 1, 0, 0, 2000, 1302102, 9897148);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_LeaveField("oid=19476722");
                                          cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                        } else if (status === V++) {
                                          cm.eventSKill(0);
                                          cm.setInGameDirectionMode(false, true, false);
                                          spawn();
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
function spawn() {
  var f = em.getMapFactoryMap(cm.getMapId());
  var E = em.getMonster(3300110);
  em.registerMonster(E);
  f.spawnMonsterOnGroundBelow(E, new java.awt.Point(-88, 289));
  cm.dispose();
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;