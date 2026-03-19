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
      cm.spawnMobLimit(2400562, 1, -198, -370, 100);
      cm.spawnMobLimit(2400562, 1, 213, 38, 100);
      cm.spawnMobLimit(2400562, 1, 706, 38, 100);
      cm.spawnMobLimit(2400562, 1, 687, -369, 100);
      cm.spawnMobLimit(2400562, 1, 138, 38, 100);
      cm.spawnMobLimit(2400562, 1, -229, -370, 100);
      cm.spawnMobLimit(2400562, 1, -230, -168, 100);
      cm.spawnMobLimit(2400562, 1, -505, 38, 100);
      cm.spawnMobLimit(2400562, 1, -135, -370, 100);
      cm.spawnMobLimit(2400562, 1, 302, 38, 100);
      cm.spawnMobLimit(2400562, 1, 816, -369, 100);
      cm.spawnMobLimit(2400562, 1, -13, -370, 100);
      cm.spawnMobLimit(2400562, 1, 907, -369, 100);
      cm.spawnMobLimit(2400562, 1, -1028, -168, 100);
      cm.spawnMobLimit(2400562, 1, -190, -168, 100);
      cm.spawnMobLimit(2400562, 1, 17, 38, 100);
      cm.spawnMobLimit(2400562, 1, -779, -168, 100);
      cm.spawnMobLimit(2400562, 1, -838, -168, 100);
      cm.spawnMobLimit(2400562, 1, -797, 38, 100);
      cm.spawnMobLimit(2400562, 1, -209, -168, 100);
      cm.spawnMobLimit(2400562, 1, 83, -168, 100);
      cm.spawnMobLimit(2400562, 1, 790, -369, 100);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/hoyoung/mouse", 100);
      cm.npc_ChangeController(3001651, "oid=2979807", 460, -50, 5, 410, 510, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2979807", 'summon', 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 235, -82);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face7#连个修行者的人影都没看见……", 37, 3001674 + cm.getPlayer().getGender(), false, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#到处都是老鼠啊。", 37, 3001651, false, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(500);
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
                              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 435, 23);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#我们要找的怪物……该不会是鼠精吧？", 37, 3001674 + cm.getPlayer().getGender(), false, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#并没有和我肚子里的老鼠有关的怪物。", 37, 3001651, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#难不成是忘了？好好想想！", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#……我敢肯定，只要调查那个是叫俊秀法师还是丑陋法师的家伙，\r\n应该就能知道了吧？快带路吧。", 37, 3001651, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_同时移动镜头和人(2, 300);
                                            cm.npc_SetForceMove("oid=2979807", 1, 180, 150);
                                            cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 1000, 2000, 706, -82);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(3500);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#我总有些在意那道门。", 37, 3001674 + cm.getPlayer().getGender(), false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#你说在意是什么意思？", 37, 3001651, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face9#就……该怎么说呢……应该是天才解决师的直觉？", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face7#……不过入口上锁了呢！\r\n啊，那边的老鼠手里有钥匙，不过……它去哪儿了？", 37, 3001674 + cm.getPlayer().getGender(), false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.updateInfoQuest(39598, "02=h0;11=h0;03=h1;05=h0;06=h0;15=h0;33=h0;34=h1;16=h1;35=h0;27=h0;09=h0;82=h0;28=h0;29=h0;84=h0;85=h0");
                                                          cm.updateInfoQuest(39598, "02=h0;11=h0;03=h1;05=h0;06=h0;15=h0;33=h0;34=h1;16=h1;35=h0;27=h0;09=h0;82=h1;28=h0;29=h0;84=h0;85=h0");
                                                          cm.forceStartQuest(39528, '');
                                                          cm.forceCompleteQuest(39528);
                                                          cm.gainExp(2322);
                                                          cm.gainExp(1306);
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
                                                                cm.warp(410000241, 0, false);
                                                                cm.setStandAloneMode(false);
                                                                cm.eventSKill(0);
                                                                cm.setInGameDirectionMode(false, true, false);
                                                                cm.npc_LeaveField("oid=2979807");
                                                                cm.npc_LeaveField("oid=2979807");
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