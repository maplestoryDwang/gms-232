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
      cm.npc_ChangeController(1105000, "oid=221174", -405, 37, 57, -455, -355, 1, false, 0, false);
      cm.npc_ChangeController(1105002, "oid=221175", -133, 37, 57, -183, -83, 1, false, 0, false);
      cm.npc_ChangeController(1105003, "oid=221176", -482, 37, 57, -532, -432, 1, false, 0, false);
      cm.npc_ChangeController(1105004, "oid=221177", -721, 88, 14, -771, -671, 1, false, 0, false);
      cm.npc_ChangeController(1105005, 'oid=221178', -700, 88, 13, -750, -650, 1, false, 0, false);
      cm.npc_ChangeController(1105006, "oid=221179", -775, 88, 14, -825, -725, 1, false, 0, false);
      cm.npc_ChangeController(1105007, "oid=221180", -842, -88, 39, -892, -792, 1, false, 0, false);
      cm.npc_ChangeController(1105008, "oid=221181", -66, 37, 57, -116, -16, 1, false, 0, false);
      cm.npc_ChangeController(1105009, "oid=221182", 1, 37, 57, -49, 37, 1, false, 0, false);
      cm.npc_ChangeController(1105010, "oid=221183", 79, 88, 3, 29, 129, 1, false, 0, false);
      cm.npc_ChangeController(1105011, "oid=221184", 122, 88, 2, 72, 172, 1, false, 0, false);
      cm.npc_ChangeController(1105012, "oid=221185", 165, 88, 2, 115, 215, 1, false, 0, false);
      cm.npc_ChangeController(1105013, "oid=221186", 206, 88, 23, 156, 256, 1, false, 0, false);
      cm.npc_ChangeController(1105014, 'oid=221187', -555, 37, 57, -605, -505, 1, false, 0, false);
      cm.npc_ChangeController(2142938, 'oid=221188', -204, 37, 57, -254, -154, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.fieldEffect_ScreenMsg("twilightPerion/text2");
      cm.inGameDirectionEvent_AskAnswerTime(2500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("……不知道敌人在冒险岛的居民中间散布噩梦的目的是什么。但可以肯定的是，我们不能让居民们一直如此不安。", 1, 1105001, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("联盟采取了什么措施呢？", 1, 1105009, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("听说十字猎人已经开始行动了。……但是光是这样还不够。", 1, 1105001, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("所以我想拜托在座的所有人。只要来和我说话，我就会把联盟的任务交给你们。相信在座的冒险岛世界的英雄们一定可以尽快让居民们镇静下来。", 1, 1105001, true, true);
            } else if (status === V++) {
              cm.warp(913050010, 0, false);
              cm.eventSKill(0);
              cm.setInGameDirectionMode(false, true, false);
              cm.forceCompleteQuest(31900);
              cm.dispose();
            }
          }
        }
      }
    }
  }
}