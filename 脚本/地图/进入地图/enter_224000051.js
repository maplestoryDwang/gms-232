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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -2300, -20);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face0#是，我就出来！", 37, 2074100, false, true);
      } else {
        if (status === V++) {
          cm.npc_ChangeController(2074100, "oid=2606672", -2201, -74, 134, -2251, -2151, 1, true, 500, false);
          cm.npc_SetSpecialAction("oid=2606672", "summon", 0, 0);
          cm.sendNormalTalk_Bottom("#face0#来，小荳你也小心点出来。", 37, 2074100, true, true);
        } else {
          if (status === V++) {
            cm.npc_ChangeController(2074143, "oid=2606673", -2318, -74, 132, -2368, -2268, 0, false, 500, false);
            cm.npc_SetSpecialAction("oid=2606673", "summon", 0, 0);
            cm.npc_SetSpecialAction("oid=2606673", "beauty", -1, 1);
            cm.sendNormalTalk_Bottom("……怎么样？还行吗？", 37, 2074148, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#太~漂亮了！实在是太漂亮！\r\n这样的姑娘去表白，谁还会拒绝呢？", 37, 2074100, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("嘿嘿，行了，姐姐，\r\n我害羞了呢……", 37, 2074148, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#来，今天终于到了决战的日子，\r\n在郡守走之前，一定要挽留住他的心，\r\n小荳啊，肯定会很顺利的。", 37, 2074100, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("姐姐，这段时间实在是太感谢你了，\r\n那我就去了。", 37, 2074148, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#好的，一路顺利哦！", 37, 2074100, true, true);
                    } else {
                      if (status === V++) {
                        cm.npc_LeaveField("oid=2606673");
                        cm.sendNormalTalk_Bottom("#face0#来，那我们也走吧？", 37, 2074100, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom('？', 57, 0, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#做什么呢？还不跟上去？\r\n我们总得看看情况怎么样嘛！来，赶紧的，抓紧时间。", 37, 2074100, true, true);
                          } else if (status === V++) {
                            cm.dispose();
                            cm.warp(224000052, 20);
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