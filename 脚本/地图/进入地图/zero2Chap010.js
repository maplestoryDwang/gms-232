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
      cm.npc_ChangeController(2430023, "oid=25246", 3044, 334, 119, 2994, 3094, 1, false, 0, false);
      cm.npc_ChangeController(2430024, "oid=25247", 2934, 334, 97, 2884, 2984, 0, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_MoveAction(2);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_MoveAction(0);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("这里就是射手村？和阿里安特比虽有点小，但感觉也不错嘛？应该不会出现那什么幻影吧。", 41, 2400005, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("幻影……很麻烦吗？", 41, 2400006, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("#face0#只要他一出现，感觉事情就变复杂了。你不觉得吗？……算了，不说了。那边有人，不知道他们在谈论什么？", 41, 2400005, true, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushMoveInfo(0, 200, 2945, 334);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(4686);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("……玛亚的烧还没退吗？这下……可大事不妙啊。这孩子本来就体弱多病……", 33, 2430001, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("想给她治疗，但是药不够用了。先想办法弄些药材吧……", 33, 2430002, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("你也知道，现在村里的警卫队很多人都受伤了，没有多余的人手啊……等他们痊愈了才能做什么。", 33, 2430001, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("那样就太晚了，玛亚撑不到那个时候！", 33, 2430002, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("……哈啊……不知道该怎么办。反正，尽全力治疗玛亚吧。", 33, 2430001, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("是……", 33, 2430002, true, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_PushMoveInfo(0, 250, 2243, 334);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(2807);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("看来情况很糟啊……", 41, 2400006, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk("#face3#这么平静的村里，好像发生了什么事情？也好，如果第二个女神之泪是人类形态的话，村里的人肯定也能知道。我们去帮他们吧，顺便获得第二个女神之泪的情报。", 41, 2400005, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk('嗯。', 41, 2400006, true, true);
                                      } else if (status === V++) {
                                        cm.dispose();
                                        cm.warp(323000000, 8, false);
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
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;