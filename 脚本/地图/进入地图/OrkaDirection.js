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
      cm.npc_ChangeController(1033231, 'oid=255257', 916, 18, 11, 866, 966, 1, false, 0, false);
      cm.npc_ChangeController(1033230, "oid=42172036", 551, -34, 6, 501, 601, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=42172036", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.sendNormalTalk("这是…这种洞穴里怎么会有房间…到底是什么？孩子和缪奈在哪里？", 3, 1033230, false, true);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNormalTalk("你还是那么单纯，只要集中于某件事，其他的就看不见了。", 1, 1033230, true, true);
      } else {
        if (status === V++) {
          cm.effect_Voice("Voice.img/mesedesQuest_A/0", 100);
          cm.sendNormalTalk('谁？！', 3, 1033230, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("啊？这么快就把我忘了？", 1, 1033230, true, true);
          } else {
            if (status === V++) {
              cm.effect_Voice("Voice.img/mesedesQuest_A/1", 100);
              cm.sendNormalTalk("你是……", 3, 1033230, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("好久不见，双弩精灵。", 1, 1033230, true, true);
              } else {
                if (status === V++) {
                  cm.effect_Voice("Voice.img/mesedesQuest_A/2", 100);
                  cm.sendNormalTalk("黑暗主宰……奥尔卡？！", 3, 1033230, true, true);
                } else {
                  if (status === V++) {
                    cm.eventSKill(0);
                    cm.setInGameDirectionMode(false, true, false);
                    cm.effect_Direction("Effect/Direction5.img/mersedesQuest/Scene0", 0, 0, 0);
                    cm.sendNormalTalk("叮咚！正是曾带领过黑魔法师军队的#r军团长#p1033230##k！猜对了我就要给你鼓掌~啪啪啪~", 0, 1033230, false, true);
                  } else {
                    if (status === V++) {
                      cm.effect_Voice("Voice.img/mesedesQuest_A/3", 100);
                      cm.sendNormalTalk("你居然还活着！", 2, 1033230, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("嗯，当然还活着。你们不也活着吗，我怎么可能会死呢？我可想你了~所以我就使了一点小小的把戏，怎么样？", 0, 1033230, true, true);
                      } else {
                        if (status === V++) {
                          cm.effect_Voice("Voice.img/mesedesQuest_A/4", 100);
                          cm.sendNormalTalk("我说呢，黑色之翼对我一无所知，还那么盯着我不放……原来是这个原因啊，是你在盯着我。", 2, 1033230, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("嗯，我的孩子们也想和你打招呼，所以就让你们认识认识了。当然，还有个傻子还是自己跑出去的~", 0, 1033230, true, true);
                          } else {
                            if (status === V++) {
                              cm.effect_Voice("Voice.img/mesedesQuest_A/5", 100);
                              cm.sendNormalTalk("你的…孩子？", 2, 1033230, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("嗯，你来的时候没看见吗？应该看到不少了啊，刚才不是还给你引路来着吗？", 0, 1033230, true, true);
                              } else {
                                if (status === V++) {
                                  cm.effect_Voice("Voice.img/mesedesQuest_A/6", 100);
                                  cm.sendNormalTalk("难道…是你把黑色之翼……！", 2, 1033230, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("是我造出了他们，一个人待着实在是很无聊啊。", 0, 1033230, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.effect_Voice("Voice.img/mesedesQuest_A/7", 100);
                                      cm.sendNormalTalk("黑魔法师已经被封印了！可你居然还造出黑色之翼这种组织来进行活动，你还在觊觎冒险岛世界吗？", 2, 1033230, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk("是的……他确实被封印了，但马上也要……呵呵呵，好玩的事情还是留作秘密吧？", 0, 1033230, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.effect_Voice("Voice.img/mesedesQuest_A/8", 100);
                                          cm.sendNormalTalk("那么，废话就到此为止！现在我们来玩玩吧！我一直都很想和你玩玩呢。", 0, 1033230, true, true);
                                        } else if (status === V++) {
                                          cm.effect_Voice("Voice.img/mesedesQuest_A/9", 100);
                                          cm.forceStartQuest(24091, '');
                                          cm.spawnMobLimit(9300435, 1, 551, -34, 100);
                                          cm.npc_LeaveField("oid=42172036");
                                          cm.npc_LeaveField("oid=42172036");
                                          cm.forceStartQuest(24091, "001");
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
              }
            }
          }
        }
      }
    }
  }
}