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
      cm.npc_ChangeController(1105000, "oid=221140", -405, 37, 57, -455, -355, 1, false, 0, false);
      cm.npc_ChangeController(1105002, "oid=221141", -133, 37, 57, -183, -83, 1, false, 0, false);
      cm.npc_ChangeController(1105003, "oid=221142", -482, 37, 57, -532, -432, 1, false, 0, false);
      cm.npc_ChangeController(1105004, "oid=221143", -721, 88, 14, -771, -671, 1, false, 0, false);
      cm.npc_ChangeController(1105005, "oid=221144", -700, 88, 13, -750, -650, 1, false, 0, false);
      cm.npc_ChangeController(1105006, "oid=221145", -775, 88, 14, -825, -725, 1, false, 0, false);
      cm.npc_ChangeController(1105007, "oid=221146", -842, -88, 39, -892, -792, 1, false, 0, false);
      cm.npc_ChangeController(1105008, 'oid=221147', -66, 37, 57, -116, -16, 1, false, 0, false);
      cm.npc_ChangeController(1105009, 'oid=221148', 1, 37, 57, -49, 37, 1, false, 0, false);
      cm.npc_ChangeController(1105010, 'oid=221149', 79, 88, 3, 29, 129, 1, false, 0, false);
      cm.npc_ChangeController(1105011, "oid=221150", 122, 88, 2, 72, 172, 1, false, 0, false);
      cm.npc_ChangeController(1105012, "oid=221151", 165, 88, 2, 115, 215, 1, false, 0, false);
      cm.npc_ChangeController(1105013, 'oid=221152', 206, 88, 23, 156, 256, 1, false, 0, false);
      cm.npc_ChangeController(1105014, "oid=221153", -555, 37, 57, -605, -505, 1, false, 0, false);
      cm.npc_ChangeController(2142938, 'oid=221154', -204, 37, 57, -254, -154, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.fieldEffect_ScreenMsg("twilightPerion/text2");
      cm.inGameDirectionEvent_AskAnswerTime(2500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("圣地掉到了地上，希纳斯女皇被黑暗力量控制，毁掉了射手村……那不是已经查明是虚假的未来了吗？", 1, 1105005, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("是的。那不是未来的景象，只是虚假的梦之世界。", 1, 1105003, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("但并不是说可能性就是0。", 1, 1105002, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("我不能接受你说的话。", 1, 1105014, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("喂，不能接受又能怎样？", 1, 1105006, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("别吵了！", 1, 1105001, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("我只是说那种可能性并不是不存在，大家必须注意。", 1, 1105002, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("#b(……联盟还不是很团结。要想让所有人团结一心，看来还需要一些时间。)#k", 17, 1105002, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("总之这是非常严重的问题。未来之门那边的虚假的未来正在侵入冒险岛世界居民们的梦中。", 1, 1105001, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("那可能吗？虽然我是很强的魔法师，那也是近乎不可能的事情……敌人的力量到底有多强啊！", 1, 1105004, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("不光是射手村。那个噩梦正在像传染病一样传播着。", 1, 1105000, true, true);
                          } else if (status === V++) {
                            cm.eventSKill(0);
                            cm.dispose();
                            cm.warp(913051004, 0, false);
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