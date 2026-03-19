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
      cm.npc_ChangeController(3002111, 'oid=258476', 162, -134, 16, 112, 212, 0, false, false);
      cm.npc_ChangeController(3002112, "oid=258477", 80, -131, 15, 30, 130, 0, false, false);
      cm.npc_ChangeController(3002113, "oid=258478", 232, -134, 36, 182, 282, 0, false, false);
      cm.npc_ChangeController(3002114, "oid=258479", -22, -138, 14, -72, 28, 0, false, false);
      cm.npc_ChangeController(3002115, 'oid=258480', -90, -142, 13, -140, -40, 0, false, false);
      cm.npc_ChangeController(3002116, "oid=258481", -165, -135, 13, -215, -115, 0, false, false);
      cm.npc_ChangeController(3002117, "oid=258482", -240, -130, 12, -290, -190, 0, false, false);
      cm.npc_ChangeController(3002129, 'oid=258483', 26, -132, 14, -24, 76, 0, false, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.setAmbience("Ambience.img/heavyrain", 200, 60);
      cm.npc_ChangeController(3002126, "oid=37987459", 113, 8, 40, 63, 163, 1, false, false);
      cm.npc_SetSpecialAction("oid=37987459", "summon", 0, 0);
      cm.npcMove(3002126, 0, -200, 0);
      cm.sendNormalTalk_Bottom("#face1#呃啊～～好可怕～！！！", 37, 3002115, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face1#狐神，狐神，救救我们！", 37, 3002116, true, true);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(2000);
        } else {
          if (status === V++) {
            cm.forceStartQuest(34768, '');
            cm.forceCompleteQuest(34769);
            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/secretmission3", 100);
            cm.playSoundEffDirectly("Ambience.img/heavyrain");
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.npcMove(3002126, 0, 100, 2000);
              cm.inGameDirectionEvent_AskAnswerTime(2000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#雨……停了！", 37, 3002112, false, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_SetHideEffect(0);
                  cm.inGameDirectionEvent_AskAnswerTime(100);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#嗯？是玛鲁！", 37, 3002114, false, true);
                  } else {
                    if (status === V++) {
                      cm.npc_ChangeController(3002110, "oid=37990118", 410, -150, 17, 360, 460, 1, true, false);
                      cm.npc_SetSpecialAction("oid=37990118", "summon", 0, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(2500);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#哎哟，这些家伙！跑到哪里去了？", 37, 3002111, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face1#玛鲁～我好担心你！", 37, 3002116, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face13#啊，那个……", 37, 3002110, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#看，乌云消失了！", 37, 3002112, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#一定是狐神听到了我们的祈祷！", 37, 3002111, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#太感谢了～！真是太好了～", 37, 3002113, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#是的……", 37, 3002110, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face5#真是太好了！", 37, 3002110, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#狐神万岁～！", 37, 3002115, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                        } else if (status === V++) {
                                          cm.forceStartQuest(34764, '');
                                          cm.gainExp(16918334);
                                          cm.forceCompleteQuest(34764);
                                          cm.updateInfoQuest(34764, "exp=1");
                                          cm.dispose();
                                          cm.warp(410000100, 0);
                                          cm.setInGameDirectionMode(false, true, false);
                                          cm.cancelItem(2210205);
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