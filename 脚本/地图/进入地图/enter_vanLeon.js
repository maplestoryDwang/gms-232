var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
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
      cm.setInGameDirectionMode(true, true, false);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.setStandAloneMode(true);
      cm.npc_ChangeController(2159336, "oid=1007206", 20, -300, 3, -30, 70, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=1007206", 'summon', 0, 0);
      cm.setSessionValue("vanLeon", '1007206');
      cm.inGameDirectionEvent_MoveAction(1);
      cm.curNodeEventEnd(true);
      cm.sendNormalTalk("是#h0#吗？", 1, 2159336, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("#b好久不见，#r#p2159336#。#k", 3, 2159336, true, true);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_MoveAction(1);
          cm.curNodeEventEnd(true);
          cm.effect_Voice("Voice.img/DemonSlayerQuest_A/0", 100);
          cm.sendNormalTalk("你个叛徒到这里来做什么。", 1, 2159336, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("#b不是我背叛了谁，而是我被人背叛了。我的家人都因为黑魔法师而失去了性命。我的母亲和戴米安都是...#k", 3, 2159336, true, true);
          } else {
            if (status === V++) {
              cm.effect_Voice("Voice.img/DemonSlayerQuest_A/1", 100);
              cm.sendNormalTalk("这样啊…虽然没想到那位伟大的大人会那样，但他那么做肯定也有他的道理吧。只不过你太愚蠢，无法领会大人的意思。", 1, 2159336, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("#b胡说！！#k", 3, 2159336, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("呼…我想这不应该是一个失去故乡，把灵魂出卖给黑魔法师的人应该说的话！#k", 3, 2159336, true, true);
                } else {
                  if (status === V++) {
                    cm.npc_SetForceMove("oid=1007206", 1, 3, 100);
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.effect_Voice("Voice.img/DemonSlayerQuest_A/2", 100);
                      cm.sendNormalTalk("闭嘴！", 1, 2159336, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("好，我们彼此的伤心往事就不要再提了。但总有一天你也会被抛弃的。#p2159336#！！", 3, 2159336, true, true);
                      } else {
                        if (status === V++) {
                          cm.effect_Voice("Voice.img/DemonSlayerQuest_A/3", 100);
                          cm.sendNormalTalk("我已经走得太远了。你以为就凭一句话就能回到光明世界去吗？而且，我已经对这个世界没有任何留恋了。我失去了一切！", 1, 2159336, true, true);
                        } else {
                          if (status === V++) {
                            cm.effect_Voice("Voice.img/DemonSlayerQuest_A/4", 100);
                            cm.sendNormalTalk("你来这里就是为了说这些没用的废话吗？我想我没必要再和你这个叛徒说话了。", 1, 2159336, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("#b那好，我最后再问一次。你之外的那些军团长都是怎么回事？#k", 3, 2159336, true, true);
                            } else {
                              if (status === V++) {
                                cm.effect_Voice("Voice.img/DemonSlayerQuest_A/5", 100);
                                cm.sendNormalTalk("时间神殿…也许那里会有你要找的答案…", 1, 2159336, true, true);
                              } else {
                                if (status === V++) {
                                  cm.effect_Voice("Voice.img/DemonSlayerQuest_A/6", 100);
                                  cm.sendNormalTalk("现在，你给我滚开，你和我互为敌人。", 1, 2159336, true, true);
                                } else if (status === V++) {
                                  cm.npc_LeaveField("oid=1007206");
                                  cm.setStandAloneMode(false);
                                  cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                  cm.setInGameDirectionMode(false, true, false);
                                  cm.forceStartQuest(23272, '1');
                                  cm.dispose();
                                  cm.warp(211060000, 0, false);
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