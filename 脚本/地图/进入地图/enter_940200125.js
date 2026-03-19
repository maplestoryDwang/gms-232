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
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 20, 160);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(3003270, "oid=1797799", 0, 120, 1, -50, 50, 1, true, false);
        cm.npc_SetSpecialAction("oid=1797799", "summon", 0, 0);
        cm.setNpcSpecialActionReset("oid=1797799");
        cm.npc_SetSpecialAction("oid=1797799", "ice", -1, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
          cm.sendNormalTalk_Bottom("#face3#…梦这东西越是想要忘记，越是难以忘记。", 37, 3003270, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face3#从梦中醒来，就看到冰冷的冰块，这就是现实。", 37, 3003270, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face4#现在都停下来吧…清醒地面对现实太痛苦了…", 37, 3003270, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face4#但是坚持不了多久，肯定又会再次做起了美梦… 啊啊… 太痛苦了… 拜托快结束吧… 快停下来…", 37, 3003270, true, true);
              } else {
                if (status === V++) {
                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/butterfly0", 200);
                  cm.fieldEffect_复合图片动画(["Map/Effect3.img/BossLucid/butterfly/005", 'animation', '', ''], [1, 0, 0, 0, 0, 0, 0, 0]);
                  cm.inGameDirectionEvent_AskAnswerTime(5000);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else if (status === V++) {
                    cm.inGameDirectionEvent_SetHideEffect(0);
                    cm.setInGameDirectionMode(false, true, false);
                    cm.npc_LeaveField("oid=1797799");
                    cm.dispose();
                    cm.warp(450003000, 0, true);
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