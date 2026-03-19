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
      if (cm.getNumberFromQuestInfo(59021, 'tuto') > 0) {
        cm.dispose();
        return;
      }
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, false);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
      cm.setInGameDirectionMode(false, true, false);
      cm.setStandAloneMode(false);
      cm.teachSkill(110001506, 1, 1);
      cm.teachSkill(110001514, 0, -1);
      cm.teachSkill(110001514, 1, 1);
      cm.sendNormalTalk("你能使用可爱的波波之力了~！", 5, 9390301, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("拉伊的力量也是一样的! 老大。", 5, 9390302, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("伊卡和阿尔走的时候，给了你新的力量。请到技能窗确认下我们俩的信息，老~~大！", 5, 9390302, true, true);
        } else if (status === V++) {
          cm.openUIWithOption(195, 112000000);
          cm.playerMessage(-1, "受到伙伴们的力量的作用，守护者之身手和重返亚柏兰已被激活。");
          cm.updateInfoQuest(59021, "movie=1;fly=2;tuto=1");
          cm.dispose();
        }
      }
    }
  }
}