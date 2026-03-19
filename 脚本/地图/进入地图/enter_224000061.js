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
      cm.npc_ChangeController(2074100, "oid=1942102", -795, -68, 110, -845, -745, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=1942102", "summon", 0, 0);
      cm.npc_ChangeController(2074151, "oid=1942103", -990, -137, 115, -1040, -940, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=1942103", "summon", 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.sendNormalTalk_Bottom("#face3#一边去！滚到一边去！", 37, 2074151, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face2#鬼怪，是鬼怪！", 37, 2074100, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face2#喂，我说！鬼怪大叔！\r\n你先冷静一下，我们先谈一谈。", 37, 2074100, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face3#我跟你们无话可说！", 37, 2074151, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face4#都没法帮#b九尾狐报仇#k，我……我……\r\n现在……所有的一切都错了。", 37, 2074151, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face2#帮九尾狐报仇，那到底是什么意思啊？", 37, 2074100, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face4#要不是你们人类，九尾狐也不会沦落那个地步。\r\n#g朴大爷#k！我要向朴大爷那个混蛋报仇。", 37, 2074151, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face2#等一下，九尾狐怎么了？", 37, 2074100, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face1#…………", 37, 2074151, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face3#这帮人类……果然是一无所知啊。", 37, 2074151, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face1#……朴大爷难道没说什么吗？", 37, 2074151, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#他说好像是九尾狐和鬼怪……拿走了宝玉……", 37, 2074100, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face3#我就知道，那家伙果然也是一样！", 37, 2074151, true, true);
                            } else if (status === V++) {
                              cm.dispose();
                              cm.warp(224000062, 3);
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