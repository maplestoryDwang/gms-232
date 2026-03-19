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
      cm.spawnMobLimit(8240087, 1, 5203, -1905, 12);
      cm.spawnMobLimit(8240087, 1, 4960, -1905, 12);
      cm.spawnMobLimit(8240086, 1, 4373, -307, 7);
      cm.spawnMobLimit(8240086, 1, 5566, -307, 7);
      cm.spawnMobLimit(8240086, 1, 6371, -307, 7);
      cm.spawnMobLimit(8240087, 1, 4947, -1905, 12);
      cm.spawnMobLimit(8240087, 1, 5101, -1905, 12);
      cm.spawnMobLimit(8240087, 1, 5421, -1815, 12);
      cm.spawnMobLimit(8240086, 1, 4797, -3083, 7);
      cm.spawnMobLimit(8240086, 1, 5085, -2992, 7);
      cm.spawnMobLimit(8240086, 1, 6177, -2901, 7);
      cm.spawnMobLimit(8240085, 1, 4602, -3083, 1);
      cm.spawnMobLimit(8240087, 1, 4053, -3083, 12);
      cm.spawnMobLimit(8240087, 1, 5443, -2992, 12);
      cm.spawnMobLimit(8240087, 1, 5908, -2901, 12);
      cm.spawnMobLimit(8240087, 1, 5149, -1905, 12);
      cm.spawnMobLimit(8240087, 1, 4843, -1905, 12);
      cm.spawnMobLimit(8240087, 1, 4930, -2992, 12);
      cm.spawnMobLimit(8240086, 1, 3895, -3083, 7);
      cm.spawnMobLimit(8240087, 1, 3947, -3083, 12);
      cm.npc_ChangeController(1540743, "oid=46231", 2611, 177, 80, 2561, 2661, 1, false, 0, false);
      cm.setPartner(1, 1540741, 80001601, 0);
      cm.setPartner(1, 1540736, 80001602, 0);
      cm.setPartner(1, 1540737, 80001635, 0);
      cm.setPartner(1, 1540738, 80001615, 0);
      cm.setPartner(1, 1540739, 80001616, 0);
      cm.updateInfoQuest(33213, "area=D3_Z38;x=3;y=1");
      cm.updateInfoQuest(33213, "area=D3_Z38;x=3;y=0");
      cm.updateInfoQuest(33214, "ul=8188");
      cm.openUI(254);
      cm.updateInfoQuest(33245, "count=1;guide=1");
      if (cm.haveItem(4009324)) {
        cm.dispose();
        return;
      }
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.sendNormalTalk_Bottom("在那边！", 37, 1540451, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_PushMoveInfo(0, 1800, 4900, -3110);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(2451);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("在那么高的地方还有保安负责人……\r\n如果想获得出入证，我们只能到上面去了。", 37, 1540451, false, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushMoveInfo(0, 1800, 1178, -603);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(2491);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("你这么怕高，究竟是怎么在漂浮在空中的小岛上生存的？", 37, 1540452, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom('…………', 37, 1540451, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("好了，我们到上面看看吧。", 37, 1540451, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("居然转移话题……", 37, 1540612, true, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                        } else if (status === V++) {
                          cm.setInGameDirectionMode(false, true, false);
                          cm.setNumberForQuestInfo(33242, "savePt", 0);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;