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
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 20, 80);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(3003270, "oid=1798017", 0, 120, 1, -50, 50, 1, true, false);
        cm.npc_SetSpecialAction("oid=1798017", 'summon', 0, 0);
        cm.setNpcSpecialActionReset("oid=1798017");
        cm.npc_SetSpecialAction("oid=1798017", "ice", -1, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
          cm.inGameDirectionEvent_PushScaleInfo(500, 2000, 500, 20, 160);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face1#完全的破坏… 新世界… 这是我根本无法想象的…", 37, 3003270, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face1#一直要描绘从未想过的东西… 我觉得自己的头好像要爆炸了！", 37, 3003270, true, true);
              } else {
                if (status === V++) {
                  cm.setNpcSpecialActionReset("oid=1798017");
                  cm.npc_SetSpecialAction("oid=1798017", "ice_break", 0, 0);
                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/fall2", 200);
                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/butterfly1", 200);
                    cm.fieldEffect_复合图片动画(["Map/Effect3.img/BossLucid/butterfly2/buterfly", "animation", '', ''], [1, 0, 0, 0, 0, 0, 0, 0]);
                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 250, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(250);
                    } else if (status === V++) {
                      cm.npc_LeaveField("oid=1798017");
                      cm.dispose();
                      cm.warp(940200133, 0);
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