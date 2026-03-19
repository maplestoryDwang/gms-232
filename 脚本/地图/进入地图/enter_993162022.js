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
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.npc_ChangeController(3001952, "oid=6472071", -1265, 6, 5, -1315, -1215, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=6472071", "summon", 0, 0);
      cm.npc_ChangeController(3001960, "oid=6472072", -1480, 6, 5, -1530, -1430, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=6472072", "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -1108, 17);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.onSetMapTagedObjectVisible(1, "box0", 512);
        cm.onSetMapTagedObjectVisible(1, 'box1', 512);
        cm.onSetMapTagedObjectVisible(1, "box2", 512);
        cm.onSetMapTagedObjectVisible(1, 'box3', 512);
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
              cm.sendNormalTalk_Bottom("#face0#这房间里好多旧箱子。", 36, 3001952, false, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#里面会不会装着钥匙？", 36, 3001952, true, true, 1);
              } else {
                if (status === V++) {
                  cm.npc_SetForceMove("oid=6472071", 1, 50, 120);
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/adele/box", 100);
                    cm.onSetMapTagedObjectVisible(1, 'box0', 0);
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.onSetMapTagedObjectVisible(1, 'box1', 0);
                        cm.onSetMapTagedObjectVisible(1, "box3", 0);
                        cm.sendNormalTalk_Bottom("#face6#里面说不定藏着艺术品……", 36, 3001952, false, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face7#哈，哈哈……我的感觉也有出错的时候呢。", 36, 3001952, true, true, 1);
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
                                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                  } else if (status === V++) {
                                    cm.playerMessage(5, "需消灭从箱子里蹿出的怪物。");
                                    cm.getTopMsgFont("需消灭从箱子里蹿出的怪物。", 3, 20, 20, 0, 0);
                                    cm.dispose();
                                    cm.openNpc(0, "阿黛尔_下水道_左侧房间");
                                    cm.npc_LeaveField("oid=6472071");
                                    cm.npc_LeaveField("oid=6472072");
                                    cm.setStandAloneMode(false);
                                    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
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