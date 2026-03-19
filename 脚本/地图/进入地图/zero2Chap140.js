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
      cm.npc_ChangeController(2400012, "oid=25275", 724, -189, 39, 674, 730, 1, false, 0, false);
      cm.npc_ChangeController(2400013, 'oid=25276', -120, -78, 92, -170, -70, 0, false, 0, false);
      cm.npc_ChangeController(2400014, "oid=25277", -7, -189, 35, -10, 43, 0, false, 0, false);
      cm.npc_ChangeController(2400015, "oid=25278", 697, -410, 53, 647, 730, 1, false, 0, false);
      cm.npc_ChangeController(2400016, "oid=25279", 29, -410, 18, -10, 79, 0, false, 0, false);
      cm.npc_ChangeController(2400017, "oid=25280", 215, -230, 36, 165, 265, 0, false, 0, false);
      cm.npc_ChangeController(2400019, "oid=25281", 456, -230, 36, 406, 506, 1, false, 0, false);
      cm.npc_ChangeController(2400021, 'oid=25282', 886, -298, 100, 836, 936, 1, false, 0, false);
      cm.npc_ChangeController(2400026, "oid=25283", 365, 5, 4, 315, 415, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("嗯……这么说来……疑为女神之泪的人被村里的人给藏起来了。到底是怎么回事呢？", 33, 2400000, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("难道是女神之泪惹出什么祸了吗？或者是犯了什么滔天大罪……", 33, 2400007, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("村子本身也看起来有点奇怪，不知道会不会有什么关系。", 33, 2400018, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("那种可能性比较高，有人受伤了事情就没那么简单了……和#p2420000#可是天壤之别啊？", 41, 2400005, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("而且还不知道长什么样……找都找不到……", 41, 2400006, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("看来同一个女神之泪也并不都是相同的性格啊。每个人在不同的村子里拥有各自的生活，也有可能不是相同的。", 33, 2400000, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("不管怎样，两位先要找到女神之泪的线索，有没有想到什么？", 33, 2400000, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("村里有几个#b小孩#k，也许他们比大人们更容易开口。不过也有可能什么都不知道。", 41, 2400005, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("这么大的事情，应该会知道吧。想的真恰到好处，#p2400005#！", 33, 2400000, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("那么就去射手村吧？", 41, 2400006, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("对，去射手村去问问那个……叫#b#p2430003##k的小孩。", 41, 2400005, true, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else if (status === V++) {
                              cm.dispose();
                              cm.warp(323000000, 8, false);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;