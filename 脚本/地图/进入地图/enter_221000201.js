var status = -1;
var selectionLog = [];
function start() {
  status = -1;
  action(1, 0, 0);
}
;
function action(f, E, e) {
  if (cm.isQuestActive(3476)) {
    action1(f, E, e);
  } else {
    cm.cancelItem(2210202);
    cm.dispose();
  }
}
function action1(f, E, e) {
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
      cm.npc_ChangeController(2051000, 'oid=11673', -343, 1022, 13, -361, -270, 5, true, false);
      cm.npc_ChangeController(2050004, "oid=11674", -101, -716, 67, -151, -51, 0, false, false);
      cm.npc_ChangeController(2050003, "oid=11675", -289, 120, 81, -293, -239, 0, false, false);
      cm.npc_ChangeController(2050000, 'oid=11676', 240, -226, 47, 190, 290, 1, false, false);
      cm.npc_ChangeController(2051001, "oid=11677", -173, 1918, 89, -223, -123, 0, false, false);
      cm.npc_ChangeController(2052020, "oid=11678", -325, -1118, 56, -375, -275, 0, false, false);
      cm.npc_ChangeController(2052021, "oid=11679", -205, 120, 81, -255, -155, 1, false, false);
      cm.npc_ChangeController(2052022, "oid=11680", -279, 1497, 6, -329, -269, 1, false, false);
      cm.npc_ChangeController(2052023, "oid=11681", -426, 1847, 9, -476, -376, 1, false, false);
      cm.npc_ChangeController(2052025, 'oid=11682', -187, -1055, 55, -237, -137, 1, false, false);
      cm.npc_ChangeController(2052007, "oid=11683", -26, 1779, 2, -76, 23, 5, true, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.useItem(2210202, false);
        cm.inGameDirectionEvent_AskAnswerTime(800);
        cm.effect_Text(["#fn黑体##fs18#第二天……#fs15##fn黑体#地球防御本部机库"], [100, 2200, 6, -50, -50, 1, 4, 0, 0, 0]);
      } else {
        if (status === V++) {
          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/text", 100);
          cm.inGameDirectionEvent_AskAnswerTime(5200);
        } else {
          if (status === V++) {
            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/radionoise", 100);
            cm.sendNormalTalk_Bottom("#face0#琳儿，你起来了吗？\r\n就要开会了，去召集一下队员们吧。", 37, 2052006, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#是~", 37, 2052027, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#那就让我们换好制服，开始新的一天吧？", 37, 2052027, true, true);
              } else {
                if (status === V++) {
                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1400);
                  } else if (status === V++) {
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