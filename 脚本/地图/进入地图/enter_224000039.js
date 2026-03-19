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
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 100, 325);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(2074127, "oid=2600065", 180, 288, 118, 130, 230, 1, false, 500, false);
        cm.npc_SetSpecialAction("oid=2600065", "summon", 0, 0);
        cm.npc_ChangeController(2074100, "oid=2600066", 4, 288, 115, -46, 54, 0, true, 500, false);
        cm.npc_SetSpecialAction("oid=2600066", "summon", 0, 0);
        cm.npc_ChangeController(2074128, "oid=2600067", 69, 280, 117, 19, 119, 0, false, 500, false);
        cm.npc_SetSpecialAction("oid=2600067", "summon", 0, 0);
        cm.sendNormalTalk_Bottom("#face0#我说！你也太过分了吧？", 37, 2074100, false, true);
      } else {
        if (status === V++) {
          cm.npc_setForceFlip("oid=2600067", -1);
          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2600067"], [0, 0, 0, 1, 0, 1, 0, 0]);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("额啊啊！吓我一跳！\r\n这位姑娘，我还以为你是鬼呢！\r\n哎哟……小姑娘，这事儿跟你没关系，你走吧。", 37, 2074128, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#我实在是看不下去了，你也太过分了吧。\r\n每次都过来这么要钱，你到底打算做什么啊。\r\n你也太贪心了点吧？", 37, 2074100, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("贪心？哈，你难不成是什么山神的弟子吗？\r\n孩子，我就算要钱又能要多少啊？\r\n我不过是希望为了这么多年老实过日子讨回点代价罢了。\r\n我嘛，就打算赚得有乐夫那么多就不再要了。", 37, 2074128, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#不再要了？是吗，那你打算要多少啊？", 37, 2074100, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("这个嘛……大概，给我10亿金币，那我就不再来了。", 37, 2074128, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom('额。', 37, 2074127, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#你说什么？", 37, 2074100, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("只要给我这么多，我以后就不来了，怎么样？\r\n现如今怎么也得有个10亿金币，才能买房子，才能娶媳妇嘛。", 37, 2074128, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#哎……怎么办？该说什么好呢？", 37, 2074100, true, true);
                          } else {
                            if (status === V++) {
                              cm.askMenu_Bottom("#face0#'得让他放下贪心才行……'\r\n#b(到底说什么好呢？)#k\r\n\r\n#g#L0#10亿金币？这么多就行了吗？那你以后就不再来了吧？#l\r\n#g#L1#你当10亿金币是谁家小狗的名字吗？#l", 133, 2074100);
                            } else {
                              var O = 'action分支' + selectionLog[13];
                              eval(O)(f, E, e, V);
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
function action分支0(f, E, e, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face0#10亿金币？这样就行了吗？那你以后就不会再贪心了吧？", 37, 2074100, false, true);
  } else {
    if (status === V++) {
      cm.sendNormalTalk_Bottom("什，什么？真的要给我10亿金币吗？\r\n哇，这么一来……我倒是有可能不再来这里了。", 37, 2074128, true, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face0#这里？那你还会去其他地方吗？", 37, 2074100, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("这个嘛……等我拿到10亿再说吧。\r\n其实10亿嘛，买个房子，娶了媳妇就花完了。\r\n反正这天底下多得是池塘……\r\n我只要不来这里就可以了嘛，是吧？", 37, 2074128, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0##b(小声呢喃。)\r\n哎……这好像不是什么好方法。\r\n倒不如好好教训他一顿。", 37, 2074100, true, true);
          } else if (status === V++) {
            cm.dispose();
            cm.warp(224000102, 3, true);
            cm.setInGameDirectionMode(false, true, false);
          }
        }
      }
    }
  }
}
function action分支1(f, E, e, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face0#你当10亿金币是谁家小狗的名字吗？\r\n我没那个钱。", 37, 2074100, false, true);
  } else {
    if (status === V++) {
      cm.sendNormalTalk_Bottom("你……为什么要这样！\r\n你想被鬼抓走吗……", 37, 2074127, true, true);
    } else {
      if (status === V++) {
        cm.npc_setForceFlip("oid=2600313", 1);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("啊啊，又提那该死的鬼！鬼！\r\n我小时候就听腻了鬼故事。\r\n只要贪心，鬼就会过来把人抓走？你当我是小孩子吗？\r\n要是给不了我10亿金币，那就给我金袋子！", 37, 2074128, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#哎哟，真是无语了。", 37, 2074100, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("来，在这里。\r\n拿走吧。", 37, 2074127, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("哼，哎，早点这样不就好了嘛。\r\n那……有劳你了~", 37, 2074128, true, true);
              } else {
                if (status === V++) {
                  cm.npc_setForceFlip("oid=2600313", -1);
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("你这个小孩子……哎哟，算了。", 37, 2074128, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#我不是小孩子！", 37, 2074100, true, true);
                    } else {
                      if (status === V++) {
                        cm.npc_LeaveField("oid=2600313");
                        cm.sendNormalTalk_Bottom("#face0#哼……消失不见了呢。", 37, 2074100, true, true);
                      } else {
                        if (status === V++) {
                          cm.forceStartQuest(30921, '1');
                          cm.forceCompleteQuest(30921);
                          cm.forceForfeitQuest(30921);
                          cm.gainExp(653475);
                          cm.updateInfoQuest(30921, '');
                          cm.updateInfoQuest(30431, "gExpCheck=1");
                          cm.forceStartQuest(30431, '');
                          cm.forceCompleteQuest(30431);
                          cm.inGameDirectionEvent_AskAnswerTime(400);
                          cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                        } else if (status === V++) {
                          cm.dispose();
                          cm.warp(224000102, 3, true);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;