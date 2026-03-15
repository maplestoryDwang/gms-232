var status = -1;
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  status++;
  if (cm.getMapId() == 931000013) {
    action931000013(f, W, U);
  } else {
    cm.dispose();
    return;
  }
}
function action931000013(f, W, U) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.sendNormalTalk("……嗯，咦？到底是怎么回事？因为刚才的震动，玻璃的强度变弱了吗……？怎么碎掉了？", 0, 2159007, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("好了，现在没有东西拦着你了？我们一起走吧！", 2, 2159007, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("但，但是……", 0, 2159007, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("你想继续留在这里吗？", 2, 2159007, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("怎么可能！我不想一辈子做实验体！", 0, 2159007, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("那我们就一起逃走吧！快！", 2, 2159007, true, true);
              } else if (status === V++) {
                cm.updateInfoQuest(23007, "exp3=1;exp4=1;vel00=2;vel01=2");
                cm.dispose();
                cm.warp(931000020, 1, false);
              }
            }
          }
        }
      }
    }
  }
}
function action2(f, W, U) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {}
  }
}