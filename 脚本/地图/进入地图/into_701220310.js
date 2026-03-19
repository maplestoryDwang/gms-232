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
      cm.spawnMob(9601069, -225, 303);
      cm.spawnMob(9601069, 390, 303);
      cm.spawnMob(9601069, -225, -168);
      cm.spawnMob(9601069, 390, -168);
      cm.spawnMob(9601069, 660, -168);
      cm.setStandAloneMode(true);
      cm.useItem(2210190, false);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1600);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_Monologue("#fs30#\r\n\r\n#fNpc/9310047.img/stand/0#   [ 寻找秘密书库！]\r\n\r\n\r\n#fs18#在限定时间内调查藏经阁5-6层，掌握秘密书库的位置！\r\n我要告诉你几个注意事项。\r\n\r\n1. 搭乘隐藏在室内的传送口，可以找到通往秘密书库的传送口。\r\n2. 变成妖怪的样子不会的话不会被妖怪攻击哦.\r\n3.如果碰到障碍物，将变回原来的样子。\r\n4.变回原来的样子就会被怪物攻击!\r\n5.任务失败的话需要放弃 [通往秘密书库的路]任务后重新接取!", 1);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1600);
        } else if (status === V++) {
          cm.eventSKill(0);
          cm.setInGameDirectionMode(false, true, false);
          cm.fieldEffect_Tremble(1, 500, 30);
          cm.updateInfoQuest(62012, "hidden=hid" + cm.rand(0, 10) + ";find=0");
          cm.dispose();
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