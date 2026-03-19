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
      cm.npc_ChangeController(1540510, "oid=33799", 713, 56, 2, 663, 763, 1, false, 0, false);
      cm.npc_ChangeController(1540513, "oid=33800", 275, 56, 1, 225, 325, 0, false, 0, false);
      cm.npc_ChangeController(1540450, "oid=33801", 396, 56, 1, 346, 402, 4, true, 0, false);
      cm.npc_ChangeController(1540451, "oid=33802", 336, 56, 1, 286, 386, 4, true, 0, false);
      cm.npc_ChangeController(1540458, 'oid=33803', 156, 56, 1, 106, 206, 4, true, 0, false);
      cm.npc_ChangeController(1540515, "oid=33804", 529, 56, 2, 479, 579, 1, false, 0, false);
      cm.npc_ChangeController(1540459, "oid=33805", 89, 56, 1, 39, 139, 4, true, 0, false);
      cm.npc_ChangeController(1540526, 'oid=33806', 218, 56, 1, 168, 268, 0, false, 0, false);
      cm.npc_ChangeController(1540525, "oid=33807", 634, 56, 2, 584, 684, 5, true, 0, false);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.userSetFieldFloating(350013400, 0, 2, 50);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
      cm.onHireTutorById(0, 80001600, 350013300);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.setAmbience("Ambience.img/gravity", 100, 60);
          cm.inGameDirectionEvent_AskAnswerTime(2000);
          cm.effect_NormalSpeechBalloon(" !", 1, 0, 1, 1500, 0, 0, 0, 0, 4, 1540525, cm.getPlayer().getId());
          cm.effect_NormalSpeechBalloon(" !", 1, 0, 1, 1500, 0, 0, 0, 0, 4, 1540513, cm.getPlayer().getId());
          cm.effect_NormalSpeechBalloon(" !", 1, 0, 1, 1500, 0, 0, 0, 0, 4, 1540526, cm.getPlayer().getId());
          cm.effect_NormalSpeechBalloon(" !", 1, 0, 1, 1500, 0, 0, 0, 0, 4, 1540450, cm.getPlayer().getId());
          cm.effect_NormalSpeechBalloon(" !", 1, 0, 1, 1500, 0, 0, 0, 0, 4, 1540451, cm.getPlayer().getId());
          cm.effect_NormalSpeechBalloon(" !", 1, 0, 1, 1500, 0, 0, 0, 0, 4, 1540458, cm.getPlayer().getId());
          cm.effect_NormalSpeechBalloon(" !", 1, 0, 1, 1500, 0, 0, 0, 0, 4, 1540459, cm.getPlayer().getId());
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom('物体……漂浮起来了？', 37, 1540452, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("难道……这是#r翼魔奥尔卡#k的能力？", 37, 1540451, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0##b#h0##k可能会被关在记忆中！\r\n现在必须立刻停止。", 37, 1540450, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("不过，我们现在还没有获得什么线索。\r\n抓紧时间，#b#h0##k！", 37, 1540525, true, true);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else if (status === V++) {
                    cm.playSoundEffDirectly("Ambience.img/gravity");
                    cm.userSetFieldFloating(350013400, 0, 0, 0);
                    cm.inGameDirectionEvent_SetHideEffect(0);
                    cm.dispose();
                    cm.warp(350013500, 0, false);
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