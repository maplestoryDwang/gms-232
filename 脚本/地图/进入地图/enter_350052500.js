var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (cm.haveItem(4034279)) {
    action2(f, E, e);
  } else {
    action1(f, E, e);
  }
}
function action1(f, E, e) {
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
      cm.hideNpc(1540757);
      cm.npc_ChangeController(1540757, 'oid=37748', 514, 61, 10, 464, 514, 1, false, 0, true);
      cm.updateInfoQuest(33213, "area=D1_Z33;x=3;y=1");
      cm.updateInfoQuest(33213, "area=D1_Z33;x=3;y=0");
      cm.updateInfoQuest(33214, "ul=b87108");
      cm.openUI(254);
      cm.setPartner(1, 1540732, 80001601, 0);
      cm.setPartner(1, 1540736, 80001602, 0);
      cm.setPartner(1, 1540737, 80001635, 0);
      cm.setPartner(1, 1540738, 80001615, 0);
      cm.setPartner(1, 1540739, 80001616, 0);
      if (cm.getQuestStatus(33227) > 0) {
        cm.dispose();
        return;
      }
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_AskAnswerTime(1500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_PushMoveInfo(0, 1500, 850, -78);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1500);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("嗯……我们好像要从这里走才行，但是集装箱挡住了我们的去路。", 37, 1540451, false, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(1500);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushMoveInfo(1, 1500, 0, 0);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("从目前的情况来看，除了这条路之外，已经没有其他路线了。我们来制作炸弹，把集装箱炸毁吧。", 37, 1540451, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("利用消灭智能机器人后获得的材料，好像就能制作炸弹了。\r\n请帮我搜集10个电线束和30个电池。", 37, 1540451, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("我记得，我们刚刚经过的地方，有很多智能机器人。\r\n我想只要到那里去搜集些材料就行了。", 37, 1540451, true, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                        } else if (status === V++) {
                          cm.setInGameDirectionMode(false, true, false);
                          cm.forceStartQuest(33227, '');
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
      }
    }
  }
}
function action2(f, E, e) {
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
      cm.hideNpc(1540757);
      cm.npc_ChangeController(1540757, "oid=37748", 514, 61, 10, 464, 514, 1, false, 0, true);
      cm.updateInfoQuest(33213, "area=D1_Z33;x=3;y=0");
      cm.openUI(254);
      cm.setPartner(1, 1540732, 80001601, 0);
      cm.setPartner(1, 1540736, 80001602, 0);
      cm.setPartner(1, 1540737, 80001635, 0);
      cm.setPartner(1, 1540738, 80001615, 0);
      cm.setPartner(1, 1540739, 80001616, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_AskAnswerTime(1500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("请用我刚刚给你的炸弹，炸毁集装箱。你必须找准位置，放上炸弹。", 37, 1540451, false, true);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1500);
        } else if (status === V++) {
          cm.npc_SetSpecialAction('oid=37748', "space", -1, 0);
          cm.setInGameDirectionMode(false, true, false);
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