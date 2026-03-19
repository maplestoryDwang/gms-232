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
      cm.npc_ChangeController(2074127, "oid=2600426", 180, 288, 118, 130, 230, 1, false, 500, false);
      cm.npc_SetSpecialAction("oid=2600426", "summon", 0, 0);
      cm.npc_ChangeController(2074100, "oid=2600427", 4, 288, 115, -46, 54, 0, true, 500, false);
      cm.npc_SetSpecialAction("oid=2600427", 'summon', 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 100, 325);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("哎……现在真的没有能再给他的钱了。\r\n虽然只要有材料，我什么都做得出来，但那也是有限的……\r\n该怎么办才好，再这么下去我连神都做不了了。", 37, 2074127, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#要是这么继续给钱下去，实在是没完没了了。\r\n嗯……难道就没什么方法吗？", 37, 2074100, true, true);
        } else {
          if (status === V++) {
            cm.askMenu_Bottom("#face0#需要点特殊手段……该怎么做才好呢……\r\n#b(有什么方法呢？)#k\r\n\r\n#g#L0#去寻找赚取10亿金币的方法。#l\r\n#g#L1#询问有关鬼的事情。#l", 133, 2074100);
          } else {
            var O = "action分支" + selectionLog[4];
            eval(O)(f, E, e, V);
          }
        }
      }
    }
  }
}
function action分支0(f, E, e, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("若是能找到赚取10亿金币的方法……", 57, 0, false, true);
  } else {
    if (status === V++) {
      cm.sendNormalTalk_Bottom("#face0#你说要赚10亿金币吗？\r\n你是真心的吗？贪心这东西原本就是没有尽头的。\r\n给了他10亿，往后他可能会再要20亿啊？\r\n你居然也没什么好点子……对你稍微有点失望啊。", 37, 2074100, true, true);
    } else if (status === V++) {
      cm.dispose();
      cm.warp(224000102, 3, true);
      cm.setInGameDirectionMode(false, true, false);
    }
  }
}
function action分支1(f, E, e, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("你刚刚不是说了有关鬼的什么事情吗？", 57, 0, false, true);
  } else {
    if (status === V++) {
      cm.sendNormalTalk_Bottom("#face0#鬼？没错，倒不如吓唬吓唬他，让他清醒清醒！\r\n山神爷爷，你刚刚提的鬼故事是什么啊？", 37, 2074100, true, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("其实，那只是很久之前的传说之一。\r\n鬼会出现在太贪心的人面前，让他回忆自己的一生后，便将其带回地狱。\r\n这也只是为了教训小孩才有的故事。", 37, 2074127, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#嗯，原来是这样的故事啊，\r\n这么说来……如果真的有鬼出现，打算带走樵夫，\r\n他会不会就会清醒过来了？怎么样？", 37, 2074100, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("呵呵，能让他清新过来当然是好事，\r\n但这天底下哪儿有鬼啊。", 37, 2074127, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0##b(自言自语)#k嗯……老实说，和鬼相比，山神的存在才更神奇吧……", 37, 2074100, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#哪儿会有鬼呢，在这！就在这里！\r\n#g(指着#b#h0##g)", 37, 2074100, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("？？？", 57, 0, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#山神爷爷，您说过只要有材料，你什么都可以造出来吧？\r\n你能造出白色的素装和一头长假发吗？", 37, 2074100, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("素装和假发吗？那是什么意思……\r\n哦！没错，果真！若是用这个方法……", 37, 2074127, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#没错，只要让#b#h0##k去扮鬼就好。\r\n正所谓，当一天鬼，让樵夫清醒过来！", 37, 2074100, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("这个想法不错，呵呵，鬼的服装不管要多少我都能做出来。\r\n先试着做出素装来吧。\r\n最近这附近有很多的#o5100101#，\r\n要是大概能有15个那些家伙身上的#b#t4034650##k就好了。", 37, 2074127, true, true);
                        } else if (status === V++) {
                          cm.forceStartQuest(30432, '');
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