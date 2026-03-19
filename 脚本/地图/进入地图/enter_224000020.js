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
      cm.npc_ChangeController(2074110, "oid=2589680", -1763, 322, 496, -1813, -1713, 1, true, 500, false);
      cm.npc_SetSpecialAction("oid=2589680", "summon", 0, 0);
      cm.npc_ChangeController(2074100, "oid=2589681", -1888, 322, 493, -1938, -1838, 0, true, 500, false);
      cm.npc_SetSpecialAction("oid=2589681", "summon", 0, 0);
      cm.sendNormalTalk_Bottom("啊……这都是我的错……", 37, 2074110, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face0#嗯……让我瞧瞧\r\n既然戴着眼镜，我在想会不会是沈师铭呢……", 37, 2074100, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#b(用万花筒观察沈师铭。)#k", 57, 0, true, true);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
            cm.inGameDirectionEvent_AskAnswerTime(250);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
              cm.inGameDirectionEvent_头顶图片(["Effect/CharacterEff.img/Downtown2015/DarkEffectM", "oid=2589680"], [5000, 0, 0, 1, 0, 1, 0, 0]);
              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
              cm.inGameDirectionEvent_AskAnswerTime(600);
            } else {
              if (status === V++) {
                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 500, 0);
                cm.inGameDirectionEvent_AskAnswerTime(700);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#嗯，沈师铭被宝玉附身了。\r\n那，我们就去看看发生什么事情了吧？", 37, 2074100, false, true);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(250);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_InsertCanvas11(0, 0, 0, 0, 0, 0);
                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(600);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 500, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(700);
                      } else {
                        if (status === V++) {
                          cm.npc_SetForceMove("oid=2589681", 1, 50, 100);
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face3##b(我感受到悲伤，真是悔不当初啊……)#k", 37, 2074100, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#大叔，你怎么一直在叹气呢？", 37, 2074100, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("你见过我家青儿没有？……", 37, 2074110, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#沈青吗？没看见啊，怎么了？沈青去哪儿了吗？", 37, 2074100, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("哎……肯定是去找商人了。\r\n我就不该说那话的，就算看见了又能享受什么荣华富贵啊……", 37, 2074110, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("我就说，昨天怎么奇怪地还做了肉菜……", 37, 2074110, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#为了找到三百石供米，沈青消失不见了吗？", 37, 2074100, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("你是怎么知道的？供米的事情……\r\n难道姑娘是庙里的尼姑吗？", 37, 2074110, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face2#额，啊……嗯，是，南无阿弥陀佛~南无阿弥陀佛~\r\n供米的事情，只要是庙里的人就都知道，哈，哈，哈", 37, 2074100, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("啊……尼姑大人，我不需要能看见。\r\n求您，求您帮我找找青儿吧，青儿，我家青儿……", 37, 2074110, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("她大概有尼姑您这么高，那个……头上戴着她亲手做的#b花样发带#k。\r\n求您……我家青儿……", 37, 2074110, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face3##b(安静地)#k额！心里越来越痛了，后悔得越来越厉害了……", 37, 2074100, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face3##b(安静地)#k怎么办呢？按照原本的故事，虽然以后沈青还是会回来……\r\n但他能不能坚持到那个时候呢……心太痛了。", 37, 2074100, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("求您了，拜托您帮帮忙。\r\n#g能不能帮忙给指条明路啊？", 37, 2074110, true, true);
                                                    } else if (status === V++) {
                                                      cm.updateInfoQuest(30408, "gExpCheck=1");
                                                      cm.gainExp(142059);
                                                      cm.forceStartQuest(30408, '');
                                                      cm.forceCompleteQuest(30408);
                                                      cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                                      cm.dispose();
                                                      cm.warp(224000000, 22, true);
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