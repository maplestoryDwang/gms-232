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
      cm.npc_ChangeController(9390203, "oid=107961", 284, 75, 5, 234, 334, 1, false, 0, false);
      cm.npc_ChangeController(9390202, 'oid=107962', 135, 75, 5, 85, 185, 0, false, 0, false);
      cm.npc_ChangeController(9390207, "oid=107963", -72, 75, 5, -122, -22, 4, true, 0, false);
      cm.npc_ChangeController(9390235, "oid=107964", 134, 75, 5, 84, 184, 0, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("没有睡意。因为是在他乡所以才这样的吗？", 35, 0, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("既然睡不着，要不要出去散散步呢？", 35, 0, true, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_MoveAction(2);
            cm.inGameDirectionEvent_AskAnswerTime(1500);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_MoveAction(0);
              cm.sendNormalTalk_Bottom("嗯？好像楼下有人在谈话。是莱文吗？", 35, 0, false, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(2000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("他不是那种人，爸爸。", 37, 9390202, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("哼。那个谁知道。", 37, 9390203, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("刚刚我听船员说，他不是还帮了我们商团嘛。", 37, 9390202, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("这是有目的的帮助。居然这样来利用别人。\r\n没用的家伙。", 37, 9390203, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("爸爸……", 37, 9390202, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("你听好了。即将成为商团主人的人不能随便怀疑别人，但也不能轻信别人。", 37, 9390203, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("…我知道了。", 37, 9390202, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("(难怪白天我觉得有点奇怪，原来是吉尔伯特还在怀疑我。我得寻找让他完全信任我的契机…… 现在这种状况，我还是不要出去散步比较好。)", 35, 0, true, true);
                              } else if (status === V++) {
                                cm.forceCompleteQuest(17623);
                                cm.forceCompleteQuest(17712);
                                cm.forceStartQuest(17720, '');
                                cm.setStandAloneMode(false);
                                cm.dispose();
                                cm.warp(865000002, 2);
                                cm.setInGameDirectionMode(false, true, false);
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
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;