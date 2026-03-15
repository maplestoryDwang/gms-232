var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(a, V, c) {
  if (status == 0 && a == 0) {
    cm.dispose();
    return;
  }
  if (a == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = c;
  var F = -1;
  if (status <= F++) {
    cm.dispose();
  } else {
    if (status === F++) {
      var I = "你找我有事吗？\r\n#b#L0#魔法种子#l\r\n#b#L2#飞龙的香水瓶#l\r\n#L1#为了神木村的行动#l\r\n";
      if (cm.isQuestActive(3759)) {
        I += "\r\n#L10##r需要#b#i4032531:# #t4032531:##l\r\n";
      }
      cm.askMenu(I, 0, 2081000);
    } else {
      if (status === F++) {
        if (cm.getQuestStatus(7810) == 0) {
          cm.forceStartQuest(7810, "000000");
        }
        if (selectionLog[1] == 0) {
          cm.gainItem(4031346, 1);
          cm.dispose();
        } else {
          if (selectionLog[1] == 2) {
            cm.gainItem(4031509, 1);
            cm.dispose();
          } else if (selectionLog[1] == 10) {
            if (cm.haveItem(4032531)) {
              cm.sendOk("你已经拥有#b#i4032531:# #t4032531:##l了啊。快去制作药水吧。", 2081000);
            } else {
              cm.sendOk("嗯？是为了制作药水吗？我这边还有不少，拿去吧。", 2081000);
              cm.gainItem(4032531, 1);
            }
            cm.dispose();
          } else {
            cm.sendNormalTalk("更好的建设村落是村长的职责。所以需要更多更好的道具。你能为了村落捐献出在神木村附近收集到的道具吗？", 0, 2081000, false, true);
          }
        }
      } else {
        if (status === F++) {
          if (selectionLog[1] == 0) {} else {
            cm.askMenu("你想捐献出那种道具呢？\r\n#b#L0# #t4000226##l\r\n#L1# #t4000229##l\r\n#L2# #t4000236##l\r\n#L3# #t4000237##l\r\n#L4# #t4000260##l\r\n#L5# #t4000261##l\r\n#L6# #t4000231##l\r\n#L7# #t4000238##l\r\n#L8# #t4000239##l\r\n#L9# #t4000241##l\r\n#L10# #t4000242##l\r\n#L11# #t4000234##l\r\n#L12# #t4000232##l\r\n#L13# #t4000233##l\r\n#L14# #t4000235#\r\n#L15# #t4000243##l\r\n", 0, 2081000);
          }
        } else {
          if (status === F++) {
            if (selectionLog[1] == 0) {
              cm.dispose();
            } else {
              cm.sendNormalTalk("您并未拥有该物品。", 0, 2081000, false, true);
            }
          } else if (status === F++) {
            cm.dispose();
          }
        }
      }
    }
  }
}