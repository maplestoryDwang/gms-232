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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.fieldEffect_PlayBGM("Bgm55/WhereStarsRest", 0, 0);
      cm.npc_ChangeController(3004850, 'oid=678706', 191, -212, 14, 141, 241, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=678706", 'summon', 0, 0);
      cm.npc_ChangeController(3004851, "oid=678707", 13, -212, 14, -37, 63, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=678707", "summon", 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 100, -212);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 87, -145);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#天线也设置好了，只要找到信号就行。", 36, 3004851, false, true, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#嗯……希望是不远的地方。", 36, 3004850, true, true, 1);
            } else {
              if (status === V++) {
                cm.setAmbience("SoundEff.img/sellas/soma", 100, 60);
                cm.sendNormalTalk_Bottom("#face0#啊，马上就搜到信号了！", 36, 3004851, true, true, 1);
              } else {
                if (status === V++) {
                  cm.playSoundEffDirectly("SoundEff.img/sellas/soma");
                  cm.sendNormalTalk_Bottom("#face0#好，位置呢？", 36, 3004850, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.setAmbience("Ambience/hospital_urgent", 150, 60);
                    cm.sendNormalTalk_Bottom("#face2#不过，确定这是声呐信号吗？怎么这么……。", 36, 3004851, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face2#7点方向，3点方向……啊！", 36, 3004851, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face2#11点，12点，2点方向！数量在不断增加！", 36, 3004851, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face1#什么？！", 36, 3004850, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/Dlep5/willattack", 100);
                            cm.userSetFieldFloating(993185006, 10, 10, 10);
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.userSetFieldFloating(993185006, 0, 0, 0);
                              cm.fieldEffect_PlayBGM("Bgm00/Silence", 0, 0);
                              cm.sendNormalTalk_Bottom('呃……', 56, 0, false, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face1#搞什么？！突然撞到什么了？！", 36, 3004850, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face2#我，我不知道。", 36, 3004851, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face2#啊，就从上方！！直直下坠！！", 36, 3004851, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/secretmission5", 128);
                                      cm.userSetFieldFloating(993185006, 10, 10, 10);
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                      } else if (status === V++) {
                                        cm.npc_LeaveField('oid=678706');
                                        cm.npc_LeaveField('oid=678707');
                                        cm.dispose();
                                        cm.warp(993185007, 0, false);
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