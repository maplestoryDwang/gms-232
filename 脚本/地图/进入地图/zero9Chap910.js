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
      cm.onZeroInfo(2);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.npc_ChangeController(2490001, "oid=3612678", 476, 81, 11, 426, 526, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=3612678", "summon", 0, 0);
      cm.sendNormalTalk("……我说女神怎么会暂时消失了一会儿…… 原来是你们呼唤的。也对，现在力量几乎用尽的女神是无法阻挡我的……", 33, 2480012, false, true);
      cm.curNodeEventEnd(true);
      cm.effect_Voice("Voice.img/Will/54", 100);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("上次是我掉以轻心了。女神说得没错。到最后都想借刀杀人的我是很愚蠢……", 33, 2480012, true, true);
        cm.effect_Voice("Voice.img/Will/55", 100);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("因此…… 这次我来亲自将两位打倒。", 33, 2480012, true, true);
          cm.effect_Voice("Voice.img/Will/56", 100);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("你说你要把谁打倒？", 41, 2400005, true, true);
            cm.effect_Voice("Voice.img/Alpha/124", 100);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("我们会消灭你，救出所有人的！", 41, 2400006, true, true);
              cm.effect_Voice("Voice.img/Beta/14", 100);
            } else {
              if (status === V++) {
                cm.npc_LeaveField("oid=3612678");
                cm.spawnMobLimit(2600800, 1, 476, 95, 100);
                cm.inGameDirectionEvent_AskAnswerTime(500);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;