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
  if (cm.getQuestStatus(33049) == 0) {
    action1(f, W, U);
  } else {
    if (cm.isQuestActive(33049) && cm.getNumberFromQuestInfo(33049, 'ok') == 0) {
      if (cm.getNumberFromQuestInfo(33049, 'talk') == 0) {
        action2(f, W, U);
      } else if (cm.haveItem(2010028) && cm.haveItem(2010022) && cm.haveItem(2010023)) {
        action21(f, W, U);
      } else {
        action3(f, W, U);
      }
    } else {
      action3(f, W, U);
    }
  }
}
function action1(f, W, U) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else if (status === V++) {
    cm.sendNormalTalk_Bottom("头发可是女人的生命啊……呜呜……呜呜呜. ", 37, 1530607, false, true, 1);
  } else {
    cm.dispose();
  }
}
function action2(f, W, U) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.sendNormalTalk_Bottom("头发可是女人的生命啊……呜呜……呜呜呜. ", 37, 1530607, false, true, 1);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("你没事吧? ", 57, 0, true, true, 1);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("我不管, 我头发都变成这样了, 都没法去商店了……呜呜……呜呜呜. ", 37, 1530607, true, true, 1);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("原来你在纠结这个问题啊. ", 37, 1530070, true, true, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("要是那家店的可乐饼都卖完了, 我也就活不了了吧……? ", 37, 1530607, true, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("这是最后一片叶子吗? ", 37, 1530070, true, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("我想吃#b年糕串#k、#b吐司#k和#b香梭鱼#k……", 37, 1530607, true, true, 1);
                } else if (status === V++) {
                  cm.updateInfoQuest(33049, "talk=1");
                  cm.dispose();
                }
              }
            }
          }
        }
      }
    }
  }
}
function action21(f, W, U) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.askYesNo_Bottom("难道你想帮我去弄这些吃的? ", 36, 1530110, 1);
    } else {
      if (status === V++) {
        cm.updateInfoQuest(33049, "ok=1;talk=1");
        cm.sendNormalTalk_Bottom("#face0#谢谢……我爱你……嘿嘿嘿……", 37, 1530115, false, true, 1);
        cm.gainItem(2010028, -1);
        cm.gainItem(2010022, -1);
        cm.gainItem(2010023, -1);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("好吃吗? ", 57, 0, true, true, 1);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#吧唧吧唧……我在吃东西, 你能别跟我说话吗……", 37, 1530115, true, true, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("你幸福吗? ", 37, 1530070, true, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#嗯, 在这世界上, 我最喜欢的就是食物! ", 37, 1530115, true, true, 1);
              } else if (status === V++) {
                cm.dispose();
              }
            }
          }
        }
      }
    }
  }
}
function action3(f, W, U) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else if (status === V++) {
    cm.sendNormalTalk_Bottom("我想吃#b年糕串#k、#b吐司#k和#b香梭鱼#k……", 37, 1530607, false, true, 1);
  } else {
    cm.dispose();
  }
}