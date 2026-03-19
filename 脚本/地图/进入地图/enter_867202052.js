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
      cm.gainSkillBuff(80011705);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.Hidden_background("kodol01", 0);
      cm.Hidden_background("kodol02", 0);
      cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402270/Attack2", 128);
      cm.sendNewEffects(17, [0, 1000, 1750, 0, 400]);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(600);
      } else {
        if (status === V++) {
          cm.userSetFieldFloating(867202052, 2, 2, 2);
          cm.inGameDirectionEvent_AskAnswerTime(2000);
          cm.effect_OnUserEff("Effect/OnUserEff.img/emotionBalloon/exclamation3");
        } else {
          if (status === V++) {
            cm.dispelBuff(80011705);
            cm.Hidden_background("kodol01", 1);
            cm.Hidden_background("kodol02", 1);
            cm.fieldEffect_复合图片动画(["Map/EffectPL.img/HiddenTales/Direction/Alert10s/time_red_effect_10sec", "animation", '', "spineEffect2"], [0, 1, 1, 0, 0, 0, 0, 1]);
            cm.inGameDirectionEvent_同时移动镜头和人(1, 100);
            cm.sendNewEffects(13, [1000, -100, 0, 0, 0]);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_QTE(2);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_MoveAction(5);
                cm.npc_ChangeController(9400690, "oid=7637682", -650, 130, 35, -700, -600, 0, true, false);
                cm.npc_SetSpecialAction("oid=7637682", "summon", 0, 0);
                cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402270/Attack1", 128);
                cm.npc_SetSpecialAction("oid=7637682", 'hand_grab2', -1, 0);
                cm.userSetFieldFloating(867202052, 0, 0, 0);
                cm.sendNewEffects(17, [2000, 2000, 3000, -200, 200]);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_OneTimeAction(5, 0);
                  cm.setNpcSpecialActionReset("oid=7637682");
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.npc_SetSpecialAction("oid=7637682", "hand_grabbing2", 0, 0);
                    cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402279/Attack10", 128);
                    cm.inGameDirectionEvent_AskAnswerTime(900);
                  } else {
                    if (status === V++) {
                      cm.userSetFieldFloating(867202052, 2, 2, 2);
                      cm.emotion(7, 10000);
                      cm.inGameDirectionEvent_MoveAction(4);
                      cm.inGameDirectionEvent_AskAnswerTime(900);
                      cm.effect_OnUserEff("Effect/OnUserEff.img/emotionBalloon/exclamation3");
                    } else {
                      if (status === V++) {
                        cm.sendNewEffects(13, [2000, 0, -150, 0, 0]);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 3000, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(3000);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_取消复合图片动画("spineEffect2", 0, 0);
                              cm.sendNormalTalk_Bottom("#face0##h0#！！！！！！！！！！！！！！！！！！！！！！！！", 37, 9400580, false, true);
                            } else if (status === V++) {
                              cm.warp(867202053, 0);
                              cm.npc_LeaveField("oid=7637682");
                              cm.npc_LeaveField("oid=7637682");
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;