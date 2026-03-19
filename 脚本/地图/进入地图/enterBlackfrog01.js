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
      cm.npc_ChangeController(1013206, "oid=2023448", 211, 22, 2, 161, 261, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2023448", 'summon', 0, 0);
      cm.sendNormalTalk("没想到你能找到这里来，看你的表情……好像很生气的样子。", 1, 1013206, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("你一直在骗我？！不可原谅！", 3, 1013206, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("骗你？不，那只是你自己的错觉罢了……呵呵，多亏了你，为我解决了不少麻烦。但是现在我不需要你了。现在你是我的障碍。", 1, 1013206, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("我得让你从这里消失。", 1, 1013206, true, true);
          } else if (status === V++) {
            cm.spawnMobLimit(9300393, 1, -180, 20, 100);
            cm.npc_LeaveField("oid=2023448");
            cm.npc_LeaveField("oid=2023448");
            cm.dispose();
          }
        }
      }
    }
  }
}