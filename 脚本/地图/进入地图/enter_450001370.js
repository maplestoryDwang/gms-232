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
      if (cm.isQuestFinished(34115)) {
        cm.warp(450001200, 2);
        cm.dispose();
        return;
      }
      cm.forceCompleteQuest(34114);
      cm.updateInfoQuest(34125, "370=2;390=2;310=2;320=2");
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(3003113, "oid=2072759", 70, 213, 20, 20, 120, 0, true, false);
      cm.npc_SetSpecialAction("oid=2072759", "summon", 0, 0);
      cm.npc_ChangeController(3003112, "oid=2072760", 160, 213, 18, 110, 210, 0, true, false);
      cm.npc_SetSpecialAction("oid=2072760", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
        cm.sendNormalTalk_Bottom("如果用力吹这坚硬的皮……", 37, 3003112, false, true);
      } else {
        if (status === V++) {
          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/fireBird", 100);
          cm.npc_ChangeController(3003124, "oid=2072761", 1000, 75, 9, 950, 1050, 0, true, false);
          cm.npc_SetSpecialAction("oid=2072761", "summon", 0, 0);
          cm.npc_SetForceMove("oid=2072761", -1, 400, 75);
          cm.inGameDirectionEvent_AskAnswerTime(2000);
        } else {
          if (status === V++) {
            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/fireBird3", 100);
            cm.sendNormalTalk_Bottom("火焰鸟听到声音，赶来了。坐火烈鸟去的话，不一会就能到达消亡旅途的尽头。", 37, 3003112, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("啊，卡奥说要回原来的地方吗？", 37, 3003112, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("火焰鸟有个习性，它一旦出发，就会一直往前飞一定距离，所以到中途为止，你要和我们一起前行。", 37, 3003112, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("那么，请准备好硬实的螯和粘稠的油，然后坐上火焰鸟吧。", 37, 3003112, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else if (status === V++) {
                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 250, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(250);
                    cm.dispose();
                    cm.warp(450001330, 0);
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