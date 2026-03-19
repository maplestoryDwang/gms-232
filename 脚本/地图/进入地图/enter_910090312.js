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
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/morass/bubble", 100);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.inGameDirectionEvent_同时移动镜头和人(1, 10);
      cm.inGameDirectionEvent_AskAnswerTime(300);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_OneTimeAction(27, 999999);
        cm.npc_ChangeController(1013350, "oid=859363", -182, 78, 9, -232, -132, 1, true, 0, false);
        cm.npc_SetSpecialAction('oid=859363', "summon", 0, 0);
        cm.npc_SetForceMove('oid=859363', 1, 10, 80);
        cm.inGameDirectionEvent_AskAnswerTime(300);
      } else {
        if (status === V++) {
          cm.npc_SetSpecialAction("oid=859363", "special2", -1, 0);
          cm.inGameDirectionEvent_PushScaleInfo(0, 1, 384000, 0, 0, -30720);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
            cm.inGameDirectionEvent_AskAnswerTime(1200);
          } else {
            if (status === V++) {
              cm.effect_AddLayer("Effect/CharacterEff.img/pathfinder/light", 0, 0);
              cm.effect_AddLayer("Effect/CharacterEff.img/HofM/0", 0, 0);
              cm.effect_AddLayer("Effect/CharacterEff.img/HofM/1", 0, 0);
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1400);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushScaleInfo(768000, 1, 256000, 768000, 0, 51200);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                } else {
                  if (status === V++) {
                    cm.userSetFieldFloating(910090312, 2, 30, 1000);
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#这里好像比预计的深得多。\r\n感觉越往下,周围的光线就变得更暗了……是错觉吗？", 37, 1013350, false, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face1#好……好像有奇怪的东西出现了,勇士！\r\n好,好像往这边来了！走,走,走开！", 37, 1013350, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.spawnMobLimit(2300211, 1, -497, 207, 100);
                          cm.inGameDirectionEvent_AskAnswerTime(300);
                        } else {
                          if (status === V++) {
                            cm.spawnMobLimit(2300211, 1, -228, 207, 100);
                            cm.inGameDirectionEvent_AskAnswerTime(300);
                          } else {
                            if (status === V++) {
                              cm.spawnMobLimit(2300211, 1, 132, 207, 100);
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                              if (status === V++) {
                                cm.spawnMobLimit(2300211, 1, 307, 455, 100);
                                cm.spawnMobLimit(2300211, 1, 495, 207, 100);
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.spawnMobLimit(2300211, 1, -319, 455, 100);
                                  cm.spawnMobLimit(2300211, 1, 43, 387, 100);
                                  cm.spawnMobLimit(2300211, 1, 314, 387, 100);
                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face4##b(本来时间就不多……真是麻烦。\r\n啧啧,只能一边清理,一边往下走了。)#k", 37, 1013358, false, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else {
                                      if (status === V++) {
                                        cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 256000, -256, -129, -129);
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
                                            } else {
                                              if (status === V++) {
                                                var O = cm.getEventManager("副本_古迹猎人_死亡沼泽");
                                                O.startInstance(cm.getPlayer(), cm.getMap());
                                                cm.npc_LeaveField("oid=859363");
                                                cm.setStandAloneMode(false);
                                                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                cm.setInGameDirectionMode(false, true, false);
                                                cm.playerMessage(5, "必须消灭一定数量的怪物,并向下移动。");
                                                cm.getTopMsgFont("必须消灭一定数量的怪物,并向下移动。", 3, 20, 4, 0, 0);
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