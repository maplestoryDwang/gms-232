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
      cm.setStandAloneMode(true);
      cm.npc_ChangeController(3002125, "oid=37777223", 399, -45, 1, 349, 449, 1, false, false);
      cm.npc_SetSpecialAction("oid=37777223", 'summon', 0, 0);
      cm.npc_ChangeController(3002110, "oid=37777224", 179, -45, 5, 129, 229, 0, true, false);
      cm.npc_SetSpecialAction("oid=37777224", "summon", 0, 0);
      cm.sendNormalTalk_Bottom("#face7#树啊树啊，快快长大！", 37, 3002110, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_SetSpecialAction("oid=37777224", "tree", 0, 1);
        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/foxvalley/npc_maru", 100);
        cm.inGameDirectionEvent_AskAnswerTime(2000);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("那种咒语……一定要喊出来吗？", 57, 0, false, true);
        } else {
          if (status === V++) {
            cm.updateInfoQuest(34770, "20=h0;21=h0;22=h0;23=h1;24=h0;25=h0;19=M;29=h0");
            cm.npc_SetSpecialAction("oid=37777223", "stand", 0, 1);
            cm.inGameDirectionEvent_AskAnswerTime(2000);
          } else {
            if (status === V++) {
              cm.npc_SetSpecialAction("oid=37777223", "S_grow", 0, 1);
              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/foxvalley/npc_tree1", 100);
              cm.inGameDirectionEvent_AskAnswerTime(2000);
            } else {
              if (status === V++) {
                cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(300);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                      cm.npc_SetSpecialAction("oid=37777223", "M_stand", -1, 1);
                      cm.sendNormalTalk_Bottom('嗯，嗯！？', 57, 0, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("树瞬间就长大了。", 57, 0, true, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.onNewSpecialEffect(3, 0);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_复合图片动画(["Map/Effect3.img/foxvalley/spine/tree/skeleton", "small", '', '01'], [0, 0, 1, 0, 0, 0, 0, 1]);
                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/foxvalley/d_tree1", 100);
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face15#嗯哼！", 37, 3002110, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("但是用来阻挡暴雨好像还不太够吧？", 57, 0, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_取消复合图片动画('01', 0, 0);
                                        cm.gainExp(16918334);
                                        cm.forceCompleteQuest(34754);
                                        cm.updateInfoQuest(34754, "exp=1");
                                        cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                        cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
                                        cm.gainItem(4036318, -1);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                          } else if (status === V++) {
                                            cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                            cm.setStandAloneMode(false);
                                            cm.dispose();
                                            cm.warp(410000118, 0);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;