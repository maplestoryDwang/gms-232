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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -400, -245);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.npc_ChangeController(3001310, "oid=671509", -820, -200, 159, -870, -770, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=671509", 'summon', 0, 0);
        cm.npc_SetSpecialAction('oid=671509', 'stuck', -1, 1);
        cm.npc_ChangeController(3001370, "oid=671510", -540, -200, 154, -590, -490, 0, true, 1000, false);
        cm.npc_SetSpecialAction("oid=671510", "summon", 0, 0);
        cm.npc_ChangeController(3001311, 'oid=671511', 120, -211, 155, 70, 170, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=671511", "summon", 0, 0);
        cm.npc_ChangeController(3001309, 'oid=671512', 60, -273, 155, 10, 110, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=671512", "summon", 0, 0);
        cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(300);
      } else {
        if (status === V++) {
          cm.playVideoByScript("Illium2.avi");
        } else {
          if (status === V++) {
            cm.playerMessage(-1, '播放动画失败。');
            cm.inGameDirectionEvent_AskAnswerTime(1500);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1200);
            } else {
              if (status === V++) {
                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1400);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face1#切，这次姑且饶了你们，下次休想！", 37, 3001309, false, true, 1);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_头顶图片(["Effect/BasicEff.img/Teleport", "oid=671511"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                    cm.inGameDirectionEvent_头顶图片(["Effect/BasicEff.img/Teleport", 'oid=671512'], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                    cm.npc_LeaveField("oid=671512");
                    cm.npc_LeaveField("oid=671511");
                    cm.sendNormalTalk_Bottom("#face2#希娜……", 37, 3001354, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face2#戴尔斯……", 37, 3001354, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face2#绝不能让他们抢走水晶！", 37, 3001354, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.updateInfoQuest(34843, "start=2");
                            cm.forceStartQuest(34843, '');
                            cm.inGameDirectionEvent_AskAnswerTime(100);
                          } else {
                            if (status === V++) {
                              cm.forceCompleteQuest(34843);
                              cm.inGameDirectionEvent_AskAnswerTime(100);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(100);
                              } else {
                                if (status === V++) {
                                  cm.updateInfoQuest(34843, "start=2;exp=1");
                                  cm.inGameDirectionEvent_AskAnswerTime(100);
                                } else {
                                  if (status === V++) {
                                    cm.gainExp(3770106);
                                    cm.inGameDirectionEvent_AskAnswerTime(100);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                      } else if (status === V++) {
                                        cm.npc_LeaveField('oid=671509');
                                        cm.npc_LeaveField("oid=671510");
                                        cm.dispose();
                                        cm.warp(940202051, 0, true);
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
  }
}