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
      cm.npc_ChangeController(9401053, "oid=201011", 125, 72, 6, 64, 137, 3, true, 0, false);
      cm.npc_ChangeController(9401053, "oid=201012", 323, 74, 3, 283, 383, 4, true, 0, false);
      cm.npc_ChangeController(9401053, 'oid=201013', 577, 74, 3, 477, 577, 2, true, 0, false);
      cm.npc_ChangeController(9401053, "oid=201014", 722, 70, 1, 655, 755, 5, true, 0, false);
      cm.npc_ChangeController(9401053, 'oid=201015', 872, 70, 2, 798, 898, 4, true, 0, false);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(9401123, "oid=8648826", -330, -170, 19, -380, -280, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=8648826", "summon", 0, 0);
        cm.sendNewEffects(12, [0, -800, 150, 0, 0]);
      } else {
        if (status === V++) {
          cm.sendNewEffects(13, [4000, 1500, 0, 0, 0]);
          cm.effect_Text(["#fn黑体##fs20##e深渊地下1层"], [50, 2000, 6, -50, -50, 1, 4, 0, 0, 0, 0]);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1200);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
              cm.inGameDirectionEvent_AskAnswerTime(300);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1500);
              } else {
                if (status === V++) {
                  cm.npc_SetForceMove("oid=8648826", 1, 100, 200);
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else {
                  if (status === V++) {
                    cm.sendNewEffects(17, [1000, 1000, 2000, 350, 170]);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("这就是深渊迪格……！我还是第一次看见实物。", 37, 9401029, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("据说这个家伙就是挖出深渊之路的主犯！快看那个巨大的前爪，看来它们是为了挖掘土地才进化成这样的吧？", 37, 9401029, true, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.sendNewEffects(12, [0, -300, -100, 0, 0]);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(300);
                              } else {
                                if (status === V++) {
                                  cm.npc_setForceFlip("oid=8648826", -1);
                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("听说这怪物是用石头制成的，我还以为是石巨人之类的，没想到它竟然这么可爱～~要是它不会因光线而狂躁，我们一定能成为好朋友。", 37, 9401029, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/flower", "oid=8648826"], [3000, 0, 0, 1, 0, 1, 0, 0]);
                                      cm.sendNormalTalk_Bottom("感想就到此为止，让我们开始真正的探险吧？", 37, 9401029, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNewEffects(14, [0, 2000, 1000, 0, 0]);
                                      } else {
                                        if (status === V++) {
                                          cm.getTopMsgFont("[深渊远征队教程]为展开教程，提高了莫妮卡的成长速度。", 0, 20, 8, 0, 0);
                                          cm.playerMessage(5, "[深渊远征队教程]为展开教程，提高了莫妮卡的成长速度。");
                                          cm.eventSKill(0);
                                          cm.updateInfoQuest(64764, "chk1=1");
                                          cm.npc_LeaveField("oid=8648826");
                                          cm.npc_LeaveField("oid=8648826");
                                          cm.dispose();
                                          var O = cm.getEventManager('深渊远征队_教程1');
                                          O.startInstance(cm.getPlayer());
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