var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.sendNormalTalk("怎，怎么回事？我以为这个时候应该不会有人到机场来……难道！你是反抗者吗？", 8, 2159100, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("#b(……不认识我了吗？)#k", 2, 2159100, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("嗯，我好像在什么地方见过你……是在什么地方来着……", 8, 2159100, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk('我是来讨过去的债的。', 2, 2159100, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("原来你是之前带走实验体的那个家伙啊！因为你，我被降了级！在这里做这种杂事！我一定要报仇！", 8, 2159100, true, true);
            } else if (status === V++) {
              cm.spawnMobLimit(9001031, 1, 224, -26, 100);
              cm.npc_LeaveField("oid=868411");
              cm.playerMessage(-1, "击败席勒，把报告书拿到手！");
              cm.playerMessage(5, "击败席勒，把报告书拿到手！");
              cm.dispose();
            }
          }
        }
      }
    }
  }
}