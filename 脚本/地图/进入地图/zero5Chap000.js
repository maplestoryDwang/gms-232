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
      cm.npc_ChangeController(2400012, 'oid=27024', 389, -260, 57, 339, 439, 1, false, 0, false);
      cm.npc_ChangeController(2400013, "oid=27025", -120, -78, 92, -170, -70, 0, false, 0, false);
      cm.npc_ChangeController(2400014, "oid=27026", -7, -189, 35, -10, 43, 0, false, 0, false);
      cm.npc_ChangeController(2400015, "oid=27027", 697, -410, 53, 647, 730, 1, false, 0, false);
      cm.npc_ChangeController(2400016, "oid=27028", 29, -410, 18, -10, 79, 0, false, 0, false);
      cm.npc_ChangeController(2400017, "oid=27029", 208, -230, 36, 158, 258, 0, false, 0, false);
      cm.npc_ChangeController(2400019, "oid=27030", 468, -167, 61, 418, 518, 1, false, 0, false);
      cm.npc_ChangeController(2400018, 'oid=27031', 515, -230, 36, 465, 556, 1, false, 0, false);
      cm.npc_ChangeController(2400021, "oid=27032", 886, -298, 100, 836, 936, 1, false, 0, false);
      cm.npc_ChangeController(2400026, "oid=27033", 364, 5, 4, 314, 414, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("#face0#……最终又回到了原点，必须寻找第四个女神之泪才行……", 33, 2400000, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("#face11#影子骑士团的攻击正变得更顽强、更激烈。在埃德尔斯坦发生的事情真让人始料未及……", 41, 2400005, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("#face10#…………", 41, 2400006, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("#face0#两位要走的路似乎越来越艰难了，真让我担心……", 33, 2400000, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("那也没办法。事已至此，不能现在放弃寻找女神之泪吧？有了这次经验，以后我们在寻找女神之泪的时候要更慎重才行。", 41, 2400005, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("接下来是去哪？", 41, 2400006, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("……接下来是#b玛加提亚#k。", 33, 2400008, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk('玛加提亚？', 41, 2400006, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("#face0#这次也是我们从未听过的村庄呢。冒险岛世界到底成长了多少？居然全是没听过的地名……我以后得好好参观下。", 33, 2400007, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("话说回来……这次一定要有真正的女神之泪才行啊。不是吗，#p2400008#？", 33, 2400007, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("#face0#…………", 33, 2400008, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("#p2400008#？你又在发呆吗？你是在担心什么吗？你最近经常那样发呆呢。", 33, 2400007, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("啊，没什么。那希望这次两位也能平安回来……", 33, 2400008, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("那是当然。那我们走啦。走吧，#p2400006#。", 41, 2400005, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk('嗯。', 41, 2400006, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else if (status === V++) {
                                      cm.dispose();
                                      cm.warp(326090010, 0, false);
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