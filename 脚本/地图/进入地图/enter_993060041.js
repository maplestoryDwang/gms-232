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
      cm.npc_ChangeController(3003628, "oid=275808", 349, 503, 8, 299, 399, 1, false, 0, false);
      cm.npc_ChangeController(3003676, 'oid=275809', -103, 503, 9, -153, -53, 4, true, 0, false);
      cm.npc_ChangeController(3003677, "oid=275810", -214, 503, 9, -264, -164, 4, true, 0, false);
      cm.npc_ChangeController(3003660, "oid=275811", 465, 182, 1, 462, 515, 5, true, 0, false);
      cm.npc_ChangeController(3003660, "oid=275812", 536, 182, 1, 486, 586, 5, true, 0, false);
      cm.npc_ChangeController(3003660, "oid=275813", 609, 182, 1, 559, 659, 5, true, 0, false);
      cm.npc_ChangeController(3003660, "oid=275814", 708, 182, 3, 708, 758, 5, true, 0, false);
      cm.npc_ChangeController(3003660, "oid=275815", -152, 182, 6, -202, -102, 4, true, 0, false);
      cm.npc_ChangeController(3003660, "oid=275816", -229, 182, 5, -279, -179, 4, true, 0, false);
      cm.npc_ChangeController(3003660, 'oid=275817', -339, 182, 5, -389, -289, 4, true, 0, false);
      cm.npc_ChangeController(3003660, "oid=275818", 698, 503, 8, 648, 748, 5, true, 0, false);
      cm.npc_ChangeController(3003660, "oid=275819", -368, 503, 9, -418, -318, 4, true, 0, false);
      cm.npc_ChangeController(3003660, "oid=275820", -465, 503, 9, -515, -415, 4, true, 0, false);
      cm.npc_ChangeController(3003660, "oid=275821", -422, 182, 7, -457, -422, 4, true, 0, false);
      cm.npc_ChangeController(3003675, "oid=275822", 19, 503, 9, -31, 69, 4, true, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.fieldEffect_Hero9(0, 2000);
      cm.inGameDirectionEvent_AskAnswerTime(2300);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
        cm.fieldEffect_Hero9(80, 1000);
        cm.setAmbience("Ambience.img/BM1_thunderA", 200, 60);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.effect_Text(["#fn黑体##fs18#片刻之后，迷雾屏障附近上空"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0]);
          cm.inGameDirectionEvent_AskAnswerTime(4300);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face1#这里是诺特勒斯号！！\r\n切……迷雾中的敌人又杀过来了！！", 37, 3003673, false, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face1#各位联盟成员……在通过屏障之前，\r\n请全力死守甲板！！", 37, 3003673, false, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("（好像又有敌人涌了过来。\r\n到甲板上去消灭敌人吧。）", 57, 0, false, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.updateInfoQuest(35611, "d30=1;d74=1;medal=1;d1=1;d4=1");
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
                            } else {
                              if (status === V++) {
                                cm.setStandAloneMode(false);
                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(1400);
                                } else if (status === V++) {
                                  cm.setInGameDirectionMode(false, true, false);
                                  cm.forceCompleteQuest(35614);
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