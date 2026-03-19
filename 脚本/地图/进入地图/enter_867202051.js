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
      cm.getPlayer().setInvincible(true);
      cm.dispelBuff(80011554);
      cm.gainSkillBuff(80011705);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -170, 584);
      cm.sendNewEffects(0, [0, 0, 0, 0, 0]);
      cm.curNodeEventEnd(true);
      cm.obstacleFallRepeat(3, '莫奈德_圆落石', '莫奈德_短扁落石', 5);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face2#啊啊！真是太棒了，小石啊！", 37, 9400580, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#啪嗒啪嗒！", 37, 9400595, true, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_同时移动镜头和人(3, 400);
              cm.inGameDirectionEvent_AskAnswerTime(1500);
            } else {
              if (status === V++) {
                cm.setMobImage("Mob.img/9402274/Hang", 100);
                cm.sendNewEffects(12, [2000, -180, -90, 0, 0]);
                cm.effect_OnUserEff("Effect/OnUserEff.img/emotionBalloon/exclamation3");
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_同时移动镜头和人(4, 100);
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_QTE(6);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_同时移动镜头和人(1, 300);
                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                          cm.effect_NormalSpeechBalloon("#fs15##b呃啊啊啊！", 1, 0, 0, 3000, 0, cm.getPlayer().getId());
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0##h0#，向右！", 37, 9400580, false, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_QTE(5);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_同时移动镜头和人(2, 500);
                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                cm.effect_NormalSpeechBalloon("#fs15#啊啊啊！", 1, 0, 0, 3000, 9400586, cm.getPlayer().getId());
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_QTE(6);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_同时移动镜头和人(1, 200);
                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                    cm.effect_NormalSpeechBalloon("#fs15#啪嗒啪嗒！！！！！！！！！！！！！！！", 1, 0, 0, 3000, 9400586, cm.getPlayer().getId());
                                  } else if (status === V++) {
                                    cm.warp(867202052, 0);
                                    cm.setInGameDirectionMode(false, true, false);
                                    cm.dispose();
                                    cm.getPlayer().setInvincible(false);
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