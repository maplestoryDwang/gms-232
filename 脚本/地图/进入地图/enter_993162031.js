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
      cm.npc_ChangeController(3001957, 'oid=434218', 301, -165, 1, 251, 351, 4, true, 0, false);
      cm.npc_ChangeController(3001959, "oid=434219", 423, -165, 4, 401, 473, 5, true, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 359, -169);
      cm.curNodeEventEnd(true);
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
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#你也看见了吧，西蒙~？传说中的骑士竟然\r\n自己找上门来了~她一定也被我的美貌迷住了~！", 36, 3001957, false, true, 1);
              cm.effect_Voice("Voice2.img/adele/present/E/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/1', 100);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#无语……您还真是自作多情。\r\n我看她好像跟潜入宅邸的那个小偷是一伙的。", 36, 3001959, true, true, 1);
                cm.effect_Voice("Voice2.img/adele/present/E/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/2', 100);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#那是她被骗了！肯定是那个坏蛋忽悠他，\r\n把她牵着鼻子走，呜呜……我的骑士好单纯~！", 36, 3001957, true, true, 1);
                  cm.effect_Voice("Voice2.img/adele/present/E/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/3', 100);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#话说，那个小偷……我看他很眼熟，\r\n就调查了一下。谁知他的身份竟然是……", 36, 3001959, true, true, 1);
                    cm.effect_Voice("Voice2.img/adele/present/E/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/4', 100);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#……里斯托尼亚王国的大王子。", 36, 3001959, false, true, 1);
                        cm.effect_Voice("Voice2.img/adele/present/E/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/5', 100);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face3#王室的嫡系血统不是全部消失了吗？", 36, 3001957, true, true, 1);
                          cm.effect_Voice("Voice2.img/adele/present/E/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/6', 100);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#小人也觉得很奇怪……但看了肖像画之后，不得不相信。", 36, 3001959, true, true, 1);
                            cm.effect_Voice("Voice2.img/adele/present/E/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/7', 100);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face3#这么说，王子他莫非正觊觎我的位置……", 36, 3001957, true, true, 1);
                              cm.effect_Voice("Voice2.img/adele/present/E/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/8', 100);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#他偷听到了我们的计划……说不定会给全部捅出去。", 36, 3001959, true, true, 1);
                                cm.effect_Voice("Voice2.img/adele/present/E/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/9', 100);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face3#钥匙……要交给高等翼人的钥匙呢？找到了吗？", 36, 3001957, true, true, 1);
                                  cm.effect_Voice("Voice2.img/adele/present/E/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/10", 100);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#小人正想和您说这事……", 36, 3001959, true, true, 1);
                                    cm.effect_Voice("Voice2.img/adele/present/E/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/11", 100);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
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
                                              cm.warp(993162032, 0, false);
                                              cm.setStandAloneMode(false);
                                              cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
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