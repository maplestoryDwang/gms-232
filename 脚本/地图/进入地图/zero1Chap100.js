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
      cm.npc_ChangeController(2400012, 'oid=24713', 462, -230, 36, 412, 512, 1, false, 0, false);
      cm.npc_ChangeController(2400013, "oid=24714", -120, -78, 92, -170, -70, 0, false, 0, false);
      cm.npc_ChangeController(2400014, "oid=24715", -7, -189, 35, -10, 43, 0, false, 0, false);
      cm.npc_ChangeController(2400015, 'oid=24716', 697, -410, 53, 647, 730, 1, false, 0, false);
      cm.npc_ChangeController(2400016, 'oid=24717', 29, -410, 18, -10, 79, 0, false, 0, false);
      cm.npc_ChangeController(2400017, "oid=24718", 540, -275, 49, 522, 590, 1, false, 0, false);
      cm.npc_ChangeController(2400018, "oid=24719", 584, -167, 61, 534, 634, 1, false, 0, false);
      cm.npc_ChangeController(2400019, "oid=24720", 285, -230, 36, 235, 335, 0, false, 0, false);
      cm.npc_ChangeController(2400021, 'oid=24721', 886, -298, 100, 836, 936, 1, false, 0, false);
      cm.npc_ChangeController(2400026, "oid=24722", 362, 5, 4, 312, 412, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("天呐~这么说两位已经找到了女神之泪了？果然两位值得相信。那就赶紧把#r女神之泪偷回来吧#k！", 33, 2400000, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("#face1#额啊，#p2400000#神官！怎么是偷呢！作为神之子去偷东西实在有点说不过去！", 33, 2400007, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk('都怪我们没出息……', 33, 2400008, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("额呵呵，不用想得这么悲观。女神之泪原本就是神之子的物品，反而是占为己有的他们才做得不对，不是吗？主人想要拿回自己的物品，这不能说是偷盗。", 33, 2400000, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("我们不是不去拿，只不过不想引起骚乱拿回女神之泪，实在是太困难了。而且现在又在女王的手里，无论怎样，最终事情都会变大的。", 41, 2400005, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("嗯~想拿回女神之泪，又不想把事情闹大，估计要好好琢磨一下了。可以利用阿里安特的情况，说不定能帮的上忙。#b到周围查看一下，怎么样#k？", 33, 2400000, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("也只有那样了，实在不行就直接夺回来……先去阿里安特吧？", 41, 2400005, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk('嗯。', 41, 2400006, true, true);
                    } else if (status === V++) {
                      cm.setInGameDirectionMode(false, true, false);
                      cm.dispose();
                      cm.warp(322000000, 9, false);
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