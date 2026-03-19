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
      cm.npc_ChangeController(2400012, "oid=27585", 728, -189, 39, 678, 730, 1, false, 0, false);
      cm.npc_ChangeController(2400013, "oid=27586", -120, -78, 133, -170, -70, 0, false, 0, false);
      cm.npc_ChangeController(2400014, 'oid=27587', -7, -189, 33, -10, 43, 0, false, 0, false);
      cm.npc_ChangeController(2400015, "oid=27588", 697, -410, 53, 647, 730, 1, false, 0, false);
      cm.npc_ChangeController(2400016, "oid=27589", 29, -410, 16, -10, 79, 0, false, 0, false);
      cm.npc_ChangeController(2400017, "oid=27590", 208, -230, 34, 158, 258, 0, false, 0, false);
      cm.npc_ChangeController(2400019, 'oid=27591', 421, -276, 35, 371, 471, 1, false, 0, false);
      cm.npc_ChangeController(2400021, 'oid=27592', 886, -298, 146, 836, 936, 1, false, 0, false);
      cm.npc_ChangeController(2400026, "oid=27593", 361, 5, 4, 311, 411, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("第四个和第五个女神之泪竟然在一起…… 这真是个好消息。冒险岛世界似乎离我们更近了。", 33, 2400000, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("比起那个，竟然在时间碎片生成的空间中见到了女神…… 真让人意想不到啊。", 33, 2400000, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("不能说是见面。因为只是看到了女神和别人对话的场景。", 41, 2400005, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("即使如此…… 在两位具备自我之前，女神就已被封印，两位不是一次也没见过女神嘛。", 33, 2400000, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("……我们去到冒险岛世界的话，能救出女神吗？", 41, 2400006, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("#face0#……那是不可能的事情。虽然现在两位还没成为真正的超越者……但等我们去冒险岛世界的时候，情况就不是这样了吧。", 33, 2400000, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("#face0#两位成为超越者之后，去冒险岛世界的话，#r被封印的女神会消亡#k并完全消失。", 33, 2400000, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("#face1#消亡？！你说我们去的话，女神就会消亡？为什么？", 41, 2400005, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("#face0#因为一个世界里不能同时存在两个超越者。你们不必如此惊讶。女神起初就想过消亡，然后让两位诞生的。", 33, 2400000, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("#face0#当初我也告诉过你们吧？女神期待着与自己拥有不同未来的超越者诞生…… 因此才有了两位。", 33, 2400000, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("两位不必有负罪感。", 33, 2400000, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("#face10#…………", 41, 2400006, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("被关在这镜世界…… 还是有好处的嘛。两位不是因此见到女神了嘛？", 33, 2400000, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("#face10#…………", 41, 2400005, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else if (status === V++) {
                                    cm.dispose();
                                    cm.warp(327000000, 10, false);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;