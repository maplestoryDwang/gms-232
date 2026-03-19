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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -727, -90);
      cm.npc_ChangeController(2074151, "oid=1942771", -990, -137, 115, -1040, -940, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=1942771", 'summon', 0, 0);
      cm.npc_ChangeController(2074100, "oid=1942772", -795, -68, 110, -845, -745, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=1942772", "summon", 0, 0);
      cm.npc_ChangeController(2074105, "oid=1942773", -657, -64, 107, -707, -607, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=1942773", "summon", 0, 0);
      cm.npc_ChangeController(2074136, "oid=1942774", -600, -33, 107, -650, -550, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=1942774", "summon", 0, 0);
      cm.npc_ChangeController(2074107, "oid=1942775", -547, -19, 105, -597, -497, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=1942775", "summon", 0, 0);
      cm.npc_ChangeController(2074150, "oid=1942776", -499, -19, 105, -549, -449, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=1942776", "summon", 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.sendNormalTalk_Bottom("#face5#我连尸体都没有找到，剩下的只有宝玉而已。", 37, 2074151, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face5#那一天，我的面具，还有珍贵的尾狐，\r\n我自出生以来第一次拥有的所有幸福，", 37, 2074151, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face4#全都一下子毁灭了，\r\n都是因为你们人类……", 37, 2074151, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("…………", 37, 2074105, true, true);
          } else {
            if (status === V++) {
              cm.setNpcSpecialActionReset("oid=1942771");
              cm.sendNormalTalk_Bottom("#face4#它不过是想变成人类而已……", 37, 2074151, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face4#要不是你们将我们变成这样子，\r\n要不是朴大爷你乱说话……", 37, 2074151, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom('……我说。', 37, 2074105, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face5#……我绝不能原谅你们，绝对不会。", 37, 2074151, true, true);
                  } else {
                    if (status === V++) {
                      cm.npc_SetSpecialAction("oid=1942771", "upgrade", -1, 1);
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                        cm.fieldEffect_ProcessOnOffLayer('back2', "Map/Effect2.img/downtown2015/illust/1", 0, 300, 0, 0, 8, 4, 1);
                        cm.inGameDirectionEvent_AskAnswerTime(300);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_ProcessOnOffLayer("back3", "Map/Effect2.img/downtown2015/illust/12", 0, 1000, 0, 0, 9, 4, 1);
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face5##g(取出猜忌宝玉。)", 37, 2074151, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("……我说，等一下。\r\n等一下，你要是这么对宝玉！", 37, 2074105, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face5#犯下罪孽的人就应该付出代价。\r\n所以我会让你们这帮家伙付出代价。", 37, 2074151, true, true);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_ProcessOnOffLayer('back3', '', 2, 500, 0, 0, 0, 0, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face2#该死，居然将猜忌宝玉注入自己的身体！", 37, 2074100, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_PlayBGM("Bgm43/Kinesis Theme II", 0, 0);
                                      cm.npc_LeaveField("oid=1942771");
                                      cm.npc_ChangeController(2074154, "oid=1942817", -990, -137, 115, -1040, -940, 0, true, 0, false);
                                      cm.npc_SetSpecialAction("oid=1942817", "summon", 0, 0);
                                      cm.sendNormalTalk_Bottom("#face1#额啊啊！", 37, 2074154, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_ProcessOnOffLayer('back2', '', 2, 500, 0, 0, 0, 0, 0);
                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("该死！最终居然对自己使用了宝玉……", 37, 2074105, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_SetSpecialAction("oid=1942772", "pain3", -1, 1);
                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face3#额！宝玉气息……太过……强烈了。\r\n啊啊啊啊！头，我的头！", 37, 2074100, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("小可爱啊，小可爱啊！你清醒一点！\r\n宝玉气息对小可爱的影响……", 37, 2074105, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#b#h0##k，求你一定要阻止鬼怪！小可爱……小可爱！", 37, 2074105, true, true);
                                                  } else if (status === V++) {
                                                    cm.dispose();
                                                    cm.openNpc("副本_童话村_大战鬼怪");
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
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;