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
      cm.askMenu("你需要我的帮助吗？\r\n\r\n#b#L0#管理日冕技能#l#k\r\n#b#L1#购买技能点#l#k\r\n\r\n#b#L2#初始化所有日冕技能#l#k", 0, 9400965);
    } else {
      if (selectionLog[1] == 0) {
        action0(f, W, U, V);
      } else {
        if (selectionLog[1] == 1) {
          action1(f, W, U, V);
        } else if (selectionLog[1] == 2) {
          action2(f, W, U, V);
        }
      }
    }
  }
}
function action0(f, W, U, V) {
  if (status <= V++) {
    cm.coronaSkillMenu(6, 0, 99, 1);
    cm.dispose();
  }
}
function action1(f, W, U, V) {
  if (status <= V++) {
    var w = cm.getNumberFromQuestInfo(500828, "point");
    if (w >= 300) {
      cm.addNumberForQuestInfo(500828, "point", -300);
      cm.addNumberForQuestInfo(500834, 'sp', 1);
      var N = cm.getNumberFromQuestInfo(500834, 'sp');
      cm.sendNormalTalk("你的#b300日冕积分#b已经交换成了#b1技能点#k！请慎重使用！\r\n\r\n#b※所持技能点: " + (N - 1) + "点-> #r #e " + N + "点#k#n", 0, 9400965, false, true);
    } else {
      cm.sendNormalTalk("嗯？好像你的积分不足以购买技能点呢，你再确认一下吧！\r\n\r\n#r※为了购买日冕技能点，至少需要#e300日冕积分#n。", 0, 9400965, false, false);
    }
  } else if (status === V++) {
    cm.dispose();
  }
}
function action2(f, W, U, V) {
  if (status <= V++) {
    var w = cm.getNumberFromQuestInfo(500831, "reset");
    if (w == 1) {
      cm.sendNormalTalk("你已经初始化过技能了。没有机会了！", 0, 9400965, false, false);
      cm.dispose();
    } else {
      cm.askYesNo("你已经听过了说明，应该都知道了吧？我再说一次，这可是绝无仅有的机会。机会只有一次，如果要初始化技能，一定要慎重选择技能哦！\r\n\r\n#b※所有日冕技能都将被初始化，将保留已购买的技能点个数。", 0, 9400965);
    }
  } else {
    if (status === V++) {
      cm.sendNormalTalk("来，你之前选择的所有日冕技能全部初始化了，今后再也没有这样的机会了，请慎重选择哦！", 0, 9400965, false, true);
      cm.updateInfoQuest(500833, "0=1");
      cm.setNumberForQuestInfo(500831, "reset", 1);
    } else if (status === V++) {
      cm.dispose();
    }
  }
}