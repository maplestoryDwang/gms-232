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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.sendNewEffects(17, [0, 1000, 2000, 485, -50]);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.fieldEffect_ProcessOnOffLayer("noise", "Effect/DirectionWz2.img/MukhyunEff/noise/1366", 0, 500, -5, -5, 0, 4, 1, -1, 1, 0, 0);
          cm.fieldEffect_PlayFieldSound("Sound/SoundEffWz2.img/Mukhyun/noise", 100);
          cm.setAmbience("SoundEffWz2.img/Mukhyun/burning_loop", 100, 60);
          cm.inGameDirectionEvent_AskAnswerTime(3000);
        } else {
          if (status === V++) {
            cm.fieldEffect_ProcessOnOffLayer('00', "Effect/DirectionWz2.img/MukhyunStory/1", 0, 15000, 0, 0, 1, 4, 0, -1, 0, 0, 0);
            cm.setAmbience("SoundEffWz2.img/Mukhyun/scream2", 100, 60);
            cm.effect_Text(["#e#fs35##fc0xff990000#“魔、魔物过来了！”", ''], [10, 2000, 4, 0, 0, 0, 4, 3, 0, 0, -1, 1]);
          } else {
            if (status === V++) {
              cm.effect_Text(["#e#fs40#“先把#e小孩#n和#e行动不便的人#n\r\n送到城里！#fs50##e快！！！！#n”", ''], [10, 2000, 4, 0, 0, 0, 4, 3, 0, 0, -1, 1]);
            } else {
              if (status === V++) {
                cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.emotion(1, -1);
                  cm.npc_ChangeController(9401277, "oid=78423355", 400, -115, 6, 350, 450, 0, true, 0, false);
                  cm.npc_SetSpecialAction("oid=78423355", "summon", 0, 0);
                  cm.inGameDirectionEvent_OneTimeAction(4, 3000);
                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                } else {
                  if (status === V++) {
                    cm.npc_SetForceMove("oid=78423355", 1, 50, 100);
                    cm.sendNormalTalk_Bottom("#face8#" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + "? " + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + "! ", 37, 9401277, false, true, 1);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(600);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_ForcedFlip(-1);
                        cm.playSoundEffDirectly("SoundEffWz2.img/Mukhyun/scream2");
                        cm.fieldEffect_ProcessOnOffLayer("noise", '', 2, 3000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.playSoundEffDirectly("SoundEffWz2.img/Mukhyun/burning_loop");
                          cm.sendNormalTalk_Bottom("#face3##b没、没事。只是有点头晕……", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face3##b（刚才……是什么？记忆？）", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face8#啊，真是的……在余毒还未除尽的情况下，又在乱来了吗？必须好好休息！", 37, 9401277, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face3#我来带路，" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + '！', 37, 9401277, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.npc_SetForceMove("oid=78423355", 1, 300, 200);
                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_ForcedFlip(1);
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 600, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(900);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNewEffects(14, [0, 2000, 1000]);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNewEffects(19, [0]);
                                        } else if (status === V++) {
                                          cm.npc_LeaveField("oid=78423355");
                                          cm.dispose();
                                          cm.warp(875003015, 0, true);
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
}