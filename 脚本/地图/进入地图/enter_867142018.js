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
      cm.npc_ChangeController(9400431, 'oid=200601', -5180, -286, 1, -5230, -5130, 4, true, 0, false);
      cm.npc_ChangeController(9400435, "oid=200603", -6552, -286, 5, -6602, -6502, 0, false, 0, false);
      cm.npc_ChangeController(9400436, "oid=200604", -6674, -286, 5, -6724, -6624, 0, false, 0, false);
      cm.npc_ChangeController(9400447, "oid=200605", -6891, -286, 5, -6941, -6841, 4, true, 0, false);
      cm.npc_ChangeController(9400450, "oid=200607", -5409, -286, 1, -5459, -5359, 1, false, 0, false);
      cm.npc_ChangeController(9400451, "oid=200608", -5517, -286, 1, -5517, -5467, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_AskAnswerTime(2200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1600);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_Monologue("#fs28#[拟真机器人前情回顾]", 0);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_Monologue("#fs20#大型企业[阿特利埃]推出了新产品，号称人类的真实同伴—[拟真机器人]。", 0);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_Monologue("拟真机器人拥有着高颜值、高智力、积极的性格，甚至拥有和人类一样的细腻感情", 0);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_Monologue("被称为尊贵版智能机器人。人们翘首以盼等待着拟真机器人的问世，阿特利埃CEO克拉尼亚收获了庞大财富和声望。", 0);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                  } else if (status === V++) {
                    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                    cm.warp(867142019, 0, true);
                    cm.eventSKill(0);
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