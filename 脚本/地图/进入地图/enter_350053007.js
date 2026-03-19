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
      cm.updateInfoQuest(33128, "act1=350013000;act2=350024300;act3=350033100;act4=350042720;act5=350053007");
      cm.updateInfoQuest(33240, "skip6=1;skip8=1;switch=1;skip23=1;skip15=1;skip17=1;act5=350053007");
      cm.setPartner(1, 1540741, 80001601, 0);
      cm.setPartner(1, 1540736, 80001602, 0);
      cm.setPartner(1, 1540737, 80001635, 0);
      cm.setPartner(1, 1540738, 80001615, 0);
      cm.setPartner(1, 1540739, 80001616, 0);
      cm.npc_ChangeController(1540492, "oid=26144669", 2280, -10, 1, 2230, 2330, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=26144669", 'summon', 0, 0);
      cm.npc_SetSpecialAction("oid=26144669", 'on', -1, 1);
      cm.npc_setForceFlip("oid=26144669", -1);
      cm.npc_ChangeController(1540446, "oid=26144670", 2780, -10, 8, 2730, 2830, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=26144670", 'summon', 0, 0);
      cm.npc_ChangeController(1540710, "oid=26144671", 3656, -10, 4, 3606, 3706, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=26144671", "summon", 0, 0);
      cm.npc_setForceFlip("oid=26144671", 1);
      cm.updateInfoQuest(33240, "skip6=1;skip8=1;switch=1;skip30=1;skip23=1;skip15=1;skip17=1;act5=350053007");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("如果再晚一步，那就糟糕了。", 37, 1540611, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("我们本来还在犹豫，不知道应不应该相信弗朗西斯所说的话。", 37, 1540452, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("弗朗西斯？", 57, 0, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("我们来的过程中，他从我们身边经过，和奥尔卡一起。\r\n他让我们赶紧到这边来看看。", 37, 1540452, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("他究竟有什么诡计呢？", 37, 1540611, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("好了，所幸我们重新聚在了一起。\r\n我有很多话要说，但现在没有时间了。", 37, 1540451, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("快抓紧时间吧，那边有电梯！", 37, 1540451, true, true);
                    } else if (status === V++) {
                      cm.setInGameDirectionMode(false, true, false);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;