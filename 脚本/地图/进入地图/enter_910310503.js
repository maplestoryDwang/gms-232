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
      cm.npc_ChangeController(1052242, "oid=218929", -192, 361, 2, -242, -167, 1, false, false);
      cm.npc_ChangeController(1052243, "oid=218930", -436, 361, 1, -486, -436, 1, false, false);
      cm.npc_ChangeController(1052244, "oid=218931", -357, 361, 2, -407, -307, 1, false, false);
      cm.npc_ChangeController(1052245, "oid=218932", -4, 361, 3, -54, 46, 1, false, false);
      cm.npc_ChangeController(1052246, "oid=218933", -77, 361, 3, -127, -27, 1, false, false);
      cm.updateInfoQuest(34437, "c0=1;c1=1;c2=1");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(1052232, "oid=6277059", -272, 338, 2, -322, -222, 1, true, false);
      cm.npc_SetSpecialAction("oid=6277059", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_同时移动镜头和人(2, 270);
        cm.sendNewEffects(1, [0, 0, 0, 0, 0]);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushScaleInfo(3000, 1000, 3000, -272, 249);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(2500);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("实在是太可爱了，废都塔的偶像！让她出道吧！", 37, 1052242, false, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("萨皮小姐，请接受我的心意！", 37, 1052244, false, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face1#欢迎光临！这里是废都塔咖啡厅！您要点单吗？", 37, 1052232, false, true);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(1600);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction5.img/effect/Kerning/sapphe/0", 0, 1000, 0, -90, 12, 4, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#这是您点的冰淇淋，嘿嘿！", 37, 1052232, false, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#谢谢！欢迎下次光临！", 37, 1052232, false, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                } else if (status === V++) {
                                  cm.dispose();
                                  cm.updateInfoQuest(34407, "done=1");
                                  cm.warp(103041110, 0);
                                  cm.setInGameDirectionMode(false, true, false);
                                  cm.npc_LeaveField("oid=6277059");
                                  cm.npc_LeaveField("oid=6277059");
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