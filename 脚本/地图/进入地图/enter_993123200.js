var status = -1;
var selectionLog = [];
var round = 1;
var max;
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
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(9062239, "oid=7227318", 267, -124, 5, 217, 317, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=7227318", 'summon', 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
      cm.curNodeEventEnd(true);
      cm.forceStartQuest(39343, '');
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(2000);
        cm.effect_NormalSpeechBalloon("好了，那就开始了！", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 9062239, null, cm.getPlayer().getId());
        var O = [5, 5, 5, 5, 5, 5, 10, 20, 20, 20];
        var b = [75, 10, 5, 5, 5, 0, 0, 0, 0, 0];
        var w = cm.rand(1, 100);
        var L = 0;
        var S = cm.getLevel();
        for (var V = 1; V <= 10; V++) {
          var N = Math.round((S - 141) * (b[V - 1] - O[V - 1]) / 58 + O[V - 1]);
          L += N;
          if (w <= L) {
            max = V;
            break;
          }
        }
      } else {
        if (status === V++) {
          cm.setNpcSpecialActionReset("oid=7227318");
          cm.npc_SetSpecialAction("oid=7227318", 'swing', 0, 0);
          cm.setNpcSpecialActionReset("oid=7227318");
          cm.fieldEffect_PlayFieldSound("Sound/Skill.img/400011005/Use", 100);
          cm.inGameDirectionEvent_AskAnswerTime(1450);
        } else {
          if (status === V++) {
            cm.fieldEffect_Tremble(1, 500, 30);
            cm.inGameDirectionEvent_AskAnswerTime(300);
          } else {
            if (status === V++) {
              cm.fieldEffect_PlayFieldSound("Sound/Skill.img/80002405/Hit", 100);
              cm.inGameDirectionEvent_AskAnswerTime(200);
            } else {
              if (status === V++) {
                cm.emotion(2, 2000);
                cm.inGameDirectionEvent_AskAnswerTime(400);
              } else {
                if (status === V++) {
                  cm.getPlayer().levelUp();
                  cm.fieldEffect_PlayFieldSound("Sound/Game.img/LevelUp", 100);
                  cm.addPopupSay(9062239, 800, '#b' + round + "等级#k 上升！", '', 0);
                  cm.inGameDirectionEvent_AskAnswerTime(1070);
                  cm.effect_OnUserEff("Effect/BasicEff.img/LevelUp");
                } else {
                  if (status === V++) {
                    cm.npc_SetSpecialAction("oid=7227318", "stand", 0, 0);
                    cm.setNpcSpecialActionReset("oid=7227318");
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                    round++;
                    if (round < max) {
                      status -= 6;
                    }
                  } else {
                    if (status === V++) {
                      cm.setNpcSpecialActionReset("oid=7227318");
                      cm.npc_SetSpecialAction("oid=7227318", 'stand', -1, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("\r\n通过盖比的妖术棒总共成长了 #b#e" + (round - 1) + "级#n#k！\r\n下次再见吧！", 4, 9062239, false, true);
                      } else if (status === V++) {
                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                        cm.eventSKill(0);
                        cm.warp(993123100, 3, false);
                        cm.setInGameDirectionMode(false, true, false);
                        cm.updateInfoQuest(500840, "scene=1;lastC=8;todayCoin=0;lastDate=200416;todayC=1");
                        cm.npc_LeaveField("oid=7227318");
                        cm.npc_LeaveField("oid=7227318");
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