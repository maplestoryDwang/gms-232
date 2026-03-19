var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (cm.isQuestActive(40940)) {
    action1(f, E, e);
  } else {
    cm.dispose();
  }
}
function action1(f, E, e) {
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
      cm.npc_ChangeController(2450025, 'oid=26478', 267, -36, 21, 217, 317, 1, false, 0, false);
      cm.npc_ChangeController(2450026, 'oid=26479', -119, 46, 5, -169, -69, 0, false, 0, false);
      cm.npc_ChangeController(2450027, "oid=26480", 366, 46, 8, 316, 416, 1, false, 0, false);
      cm.npc_ChangeController(2450028, "oid=26481", 115, 46, 1, 65, 165, 0, false, 0, false);
      cm.npc_ChangeController(2450029, "oid=26482", 322, -36, 21, 272, 372, 1, false, 0, false);
      cm.npc_ChangeController(2450030, "oid=26483", 36, 46, 3, -14, 86, 0, false, 0, false);
      cm.npc_ChangeController(2450031, "oid=26484", 425, 46, 8, 375, 475, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("……想必你们也已经知道了，我的女儿#p2450003#被陌生人绑架了，几天来音讯全无。", 33, 2450025, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("绑匪阻断了电站的能源，进行示威。我们用备用电力维持着村庄的供电，但备用电力即将用完……现在我们必须决定该怎么处理现在的状况。", 33, 2450025, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("派交涉人去了解绑匪究竟想要什么，然后把绑匪想要的东西给他。或者，放弃#p2450003#……呜呜。#p2450003#！", 33, 2450025, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("不能放弃#p2450003#！得知道绑匪究竟想要什么！呜呜…… 各位！请考虑下#p2450003#！", 33, 2450025, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("啧啧。身为村庄的议会长，如此感情用事怎么行呢？绑匪想要什么，这个如何得知？如果他说想要整个村庄，那也要答应他吗？", 33, 2450020, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("公共机关对绑架这类犯罪行为妥协的话，以后此类犯罪行为会再次发生的。决不能妥协！应该召集人去消灭绑匪！", 33, 2450020, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("但是说不定绑匪的要求其实很简单呢。再加上，消灭绑匪……万一让村庄里好端端的年轻人受伤的话，那可怎么办……", 33, 2450025, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("为了打击犯罪行为，我们应当接受这样的损失。不是吗，各位？", 33, 2450020, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("不，不能自找危险。我们再讨论下吧……呜呜。", 33, 2450025, true, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(500);
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
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;