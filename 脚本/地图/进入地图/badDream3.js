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
      cm.npc_ChangeController(2142900, "oid=221134", 5045, 454, 145, 4995, 5095, 1, false, 0, false);
      cm.npc_ChangeController(2142901, 'oid=221135', 5130, 454, 145, 5080, 5180, 1, false, 0, false);
      cm.npc_ChangeController(2142902, "oid=221136", 4890, 454, 143, 4840, 4940, 0, false, 0, false);
      cm.npc_ChangeController(2142903, "oid=221137", 5229, 454, 147, 5179, 5279, 1, false, 0, false);
      cm.npc_ChangeController(2142904, "oid=221138", 4804, 454, 142, 4754, 4854, 0, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.fieldEffect_ScreenMsg("twilightPerion/text1");
      cm.inGameDirectionEvent_AskAnswerTime(2500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("奇怪。村里人全都做了一样的梦……", 1, 2142900, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("而且是非常可怕的梦。想想就让人觉得恐怖。", 1, 2142901, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("没想到冒险骑士团会站到黑暗的一边。谁能想到呢？", 1, 2142904, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("喂，别说的就像真的一样！", 1, 2142902, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("但是那个梦境实在太真实了……感觉圣地好像真的从天上掉下去了一样。", 1, 2142903, true, true);
              } else if (status === V++) {
                cm.dispose();
                cm.warp(913051003, 0, false);
              }
            }
          }
        }
      }
    }
  }
}