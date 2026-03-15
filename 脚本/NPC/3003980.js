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
  if (cm.getNumberFromQuestInfo(35817, "NpcSpeech", '80') !== 'h1') {
    cm.addPopupSay(3003759, 2500, '呃……', '', 0);
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
      switch (cm.rand(1, 16)) {
        case 1:
          cm.addPopupSay(3003759, 2500, "#face0#重新开始炮击！发射！", '', 0);
          break;
        case 2:
          cm.addPopupSay(3003759, 2500, "#face0#刚才好像暂时晕过去了。不过我还能战斗。", '', 0);
          break;
        case 3:
          cm.addPopupSay(3003759, 2500, "#face0#我还能继续战斗！", '', 0);
          break;
        case 4:
          cm.addPopupSay(3003759, 2500, "#face0#我们……我们还没输。", '', 0);
          break;
        case 5:
          cm.addPopupSay(3003759, 2500, "#face0#发射！发射！", '', 0);
          break;
        case 6:
          cm.addPopupSay(3003759, 2500, "#face0#伤不重。我只是休息了一会儿。", '', 0);
          break;
        case 7:
          cm.addPopupSay(3003759, 2500, "#face0#向巨人开炮！！", '', 0);
          break;
        case 8:
          cm.addPopupSay(3003759, 2500, "#face0#继续开炮。直到生命的最后一刻！", '', 0);
          break;
        case 9:
          cm.addPopupSay(3003759, 2500, "#face0#我要把这些奇奇怪怪的家伙统统干掉！", '', 0);
          break;
        case 10:
          cm.addPopupSay(3003759, 2500, "#face0#真是场没有尽头的噩梦……", '', 0);
          break;
        case 11:
          cm.addPopupSay(3003759, 2500, "#face0#还……还没结束，你们这些怪物！！", '', 0);
          break;
        case 12:
          cm.addPopupSay(3003759, 2500, "#face0#只要我还活着，这个炮就不会停！开炮！开炮！！！", '', 0);
          break;
        case 13:
          cm.addPopupSay(3003759, 2500, "#face0#我一定会活下去。我一定要重新回家。", '', 0);
          break;
        case 14:
          cm.addPopupSay(3003759, 2500, "#face0#只要打倒那个巨人，我们就能回去了吧？", '', 0);
          break;
        case 15:
          cm.addPopupSay(3003759, 2500, "#face0#只要有你在，我们就不会输，对吧？", '', 0);
          break;
        default:
          cm.addPopupSay(3003759, 2500, "#face0#我要把这些奇奇怪怪的家伙统统干掉！", '', 0);
          break;
      }
      cm.dispose();
    }
  }
}