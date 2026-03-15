var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(p, g, T) {
  if (cm.getNumberFromQuestInfo(33990, 'check6') > 0 && cm.getNumberFromQuestInfo(33990, "check7") == 0) {
    action6(p, g, T);
  } else if (cm.getNumberFromQuestInfo(33990, "check11") > 0 && cm.getNumberFromQuestInfo(33990, 'check9') == 0) {
    action7(p, g, T);
  } else {
    cm.sendOk("藏着秘密道具的手提包。谁能想得到呢？");
    cm.dispose();
  }
}
function action6(p, g, T) {
  if (status == 0 && p == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = T;
  var D = -1;
  if (status <= D++) {
    cm.dispose();
  } else {
    if (status === D++) {
      cm.sendNormalTalk_Bottom("好吧，那就开始变装吧？\r\n#b(完美变装成相同的模样。)#k", 37, 1540879, false, true);
    } else {
      if (status === D++) {
        cm.mapleHeroDressing(0, 1, 3, 0);
      } else {
        if (status === D++) {
          if (p <= 0) {
            cm.dispose();
            return;
          } else {
            if (p == 2) {
              cm.sendNormalTalk_Bottom("#face2#不对，不对……不是长这样的。", 37, 1540879, false, true);
              cm.dispose();
              return;
            } else {
              cm.Hidden_background("HofM_Case", 1, 0, 0, 0);
              cm.useItem(2210196, false);
              cm.sendNormalTalk_Bottom("现在去#b左侧#k，找到#b吴馆长#k，拿到门卡就可以了吧。", 37, 1540891, false, true);
            }
          }
        } else {
          cm.updateInfoQuest(33990, "check1=1;check2=1;check3=1;check5=1;check6=1;check7=1;check=1");
          cm.dispose();
        }
      }
    }
  }
}
function action7(p, g, T) {
  if (status == 0 && p == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = T;
  var D = -1;
  if (status <= D++) {
    cm.dispose();
  } else {
    if (status === D++) {
      cm.mapleHeroDressing(1, 2, 1, 1);
    } else {
      if (status === D++) {
        if (p <= 0) {
          cm.dispose();
          return;
        } else {
          if (p == 2) {
            cm.sendNormalTalk_Bottom("#face2#不对，不对……不是长这样的。", 37, 1540879, false, true);
            cm.dispose();
            return;
          } else {
            cm.updateInfoQuest(33990, "check1=1;check2=1;check3=1;check5=1;check6=1;check7=1;check8=1;check9=1;check11=1;check=1");
            cm.Hidden_background("HofM_Case", 1, 0, 0, 0);
            cm.useItem(2210197, false);
            cm.sendNormalTalk_Bottom("现在去#b右侧#k，找到#b林博士#k，拿到#b门卡#k应该就可以了吧。", 37, 1540892, false, true);
          }
        }
      } else if (status === D++) {
        cm.dispose();
      }
    }
  }
}