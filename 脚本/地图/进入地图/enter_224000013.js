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
      cm.npc_ChangeController(2074100, "oid=2585978", 1583, 304, 557, 1533, 1633, 0, true, 500, false);
      cm.npc_SetSpecialAction("oid=2585978", "summon", 0, 0);
      cm.npc_ChangeController(2074134, "oid=2585979", 1642, 304, 559, 1592, 1692, 1, false, 500, false);
      cm.npc_SetSpecialAction("oid=2585979", "summon", 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(1);
      cm.sendNormalTalk_Bottom("#face2#一、二、三……好吧，这个样子……\r\n行了，拜托一定要有效果啊。", 37, 2074100, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#b(嗫嚅嗫嚅)", 37, 2074134, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("额……额额……呸呸！", 37, 2074134, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("哎哟喂，我的头……\r\n哎哟喂，浑身酸痛啊……", 37, 2074134, true, true);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === V++) {
                cm.npc_LeaveField("oid=2585979");
                cm.npc_ChangeController(2074105, "oid=2585986", 1642, 304, 559, 1592, 1692, 1, false, 500, false);
                cm.npc_SetSpecialAction("oid=2585986", "summon", 0, 0);
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1200);
              } else {
                if (status === V++) {
                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(1400);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face2#爷爷！您清醒点了吗？", 37, 2074100, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("虽然不知道你是哪位，还是谢……嗯？", 37, 2074105, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("小可爱？……小可爱！你怎么会在这里啊？", 37, 2074105, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("威兹这家伙说会派个人过来帮忙，怎么是小可爱呢！", 37, 2074105, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#来帮忙的人是这里的#b#h0##k，\r\n我只不过是，担心爷爷……\r\n你没事吗？到底发生什么事情了？", 37, 2074100, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("我没事，只不过是一时晕过去罢了。\r\n我千叮咛万嘱咐让你不要过来的……", 37, 2074105, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("还有#g兴夫#k呢？兴夫在哪儿呢？", 37, 2074105, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face2#兴夫？兴夫怎么了？是兴夫让你变成这样的吗？", 37, 2074100, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("是啊……那兴夫像是着了#g愤怒宝玉#k的道。\r\n要是不赶紧拦住兴夫，特定会出大事的，咳咳，咳咳。", 37, 2074105, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("额……没时间了，看样子也没别的法子了。\r\n小可爱啊，#b宝玉#k和#b万花筒#k的事你都还记得吗？", 37, 2074105, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face1#是，我都记得。\r\n您不是说过要用#g万花筒#k找到附着#g宝玉#k的人，\r\n再解除#g宝玉气息#k才行嘛。", 37, 2074100, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("你记得很清楚嘛，喏，\r\n那这#b万花筒#k就交给你了。", 37, 2074105, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("肯定有人看到#g兴夫#k去哪儿了，\r\n刚刚是说叫#h0#吗？那就麻烦你了，#g赶紧追上兴夫，消除他的愤怒！#k", 37, 2074105, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("至于兴夫人在何处，去问#b村里人#k就可以了。", 37, 2074105, true, true);
                                            } else if (status === V++) {
                                              cm.updateInfoQuest(30402, "gExpCheck=1");
                                              cm.gainExp(369355);
                                              cm.forceCompleteQuest(30402);
                                              cm.forceStartQuest(30403, '');
                                              cm.forceStartQuest(30910, '2');
                                              cm.forceCompleteQuest(30910);
                                              cm.forceForfeitQuest(30910);
                                              cm.updateInfoQuest(30910, '');
                                              cm.gainItem(4034629, -5);
                                              cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                              cm.dispose();
                                              cm.warp(224000000, 21, true);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;