var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(z, T, h) {
  if (cm.getNumberFromQuestInfo(501469, "shopTuto2") == 0) {
    action0(z, T, h);
  } else {
    action1(z, T, h);
  }
}
function action0(z, T, h) {
  if (status == 0 && z == 0) {
    cm.dispose();
    return;
  }
  if (z == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = h;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status === v++) {
      cm.sendNormalTalk("唔……看样子你还是个不知道什么是#r#e<冒险岛互动播>#n#k的\r\n#b#e创作者新人#n#k啊？", 4, 9062559, false, true, 0);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("哼！\r\n只有创作者中#r#e被证实足够强大的人#n#k才能光顾我布莱克缤的商店！", 4, 9062559, true, true, 0);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("消灭强大首领后，粉丝们会发来#b#e#i4310313# #t4310313##n#k，你可要发愤图强哦！", 4, 9062559, true, true, 0);
        } else if (status === v++) {
          cm.setNumberForQuestInfo(501469, "shopTuto2", 1);
          cm.dispose();
        }
      }
    }
  }
}
function action1(z, T, h) {
  if (status == 0 && z == 0) {
    cm.dispose();
    return;
  }
  if (z == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = h;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else if (status === v++) {
    cm.dispose();
    cm.openShop(9062559);
  }
}