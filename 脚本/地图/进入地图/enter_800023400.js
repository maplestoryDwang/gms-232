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
      cm.setPartner(1, 9111004, 80011319, 0);
      cm.setPartner(1, 9111007, 80011320, 0);
      cm.setPartner(1, 9111002, 80011300, 0);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face2#顽劣狐妖们出现了！！", 37, 9111007, false, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1500);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face2#必须把他们全部消灭才行！", 37, 9111007, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("那些狐妖好像对我们不感兴趣啊，直接走过去不行吗？", 57, 0, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face2#当然不行！\r\n因为那些狐妖的恶作剧，我们和人类之间的关系变得更糟了。\r\n请趁这机会教训教训他们！", 37, 9111007, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face2#唔……真看不出来泉奈这么凶巴巴的！", 37, 9111002, true, true);
                  } else if (status === V++) {
                    cm.eventSKill(0);
                    cm.setInGameDirectionMode(false, true, false);
                    cm.spawnMobLimit(9400068, 1, 230, -355, 100);
                    cm.spawnMobLimit(9400069, 1, 360, -355, 100);
                    cm.spawnMobLimit(9400068, 1, 475, -355, 100);
                    cm.spawnMobLimit(9400069, 1, 585, -355, 100);
                    cm.spawnMobLimit(9400068, 1, 590, -715, 100);
                    cm.spawnMobLimit(9400069, 1, 700, -715, 100);
                    cm.spawnMobLimit(9400068, 1, 935, -715, 100);
                    cm.spawnMobLimit(9400069, 1, 1025, -715, 100);
                    cm.spawnMobLimit(9400068, 1, 1165, -355, 100);
                    cm.spawnMobLimit(9400069, 1, 1360, -355, 100);
                    cm.spawnMobLimit(9400068, 1, 540, 95, 100);
                    cm.spawnMobLimit(9400069, 1, 860, 72, 100);
                    cm.spawnMobLimit(9400068, 1, 1050, 88, 100);
                    cm.spawnMobLimit(9400068, 1, 1383, -715, 100);
                    cm.spawnMobLimit(9400068, 1, 1651, -715, 100);
                    cm.spawnMobLimit(9400069, 1, 1618, -715, 100);
                    cm.spawnMobLimit(9400068, 1, 1970, -235, 100);
                    cm.spawnMobLimit(9400069, 1, 1743, -235, 100);
                    cm.spawnMobLimit(9400068, 1, 1738, 35, 100);
                    cm.spawnMobLimit(9400069, 1, 1739, 35, 100);
                    cm.spawnMobLimit(9400068, 1, 2004, -715, 100);
                    cm.spawnMobLimit(9400069, 1, 1497, -715, 100);
                    cm.spawnMobLimit(9400068, 1, 1762, -235, 100);
                    cm.spawnMobLimit(9400069, 1, 1854, -235, 100);
                    cm.spawnMobLimit(9400068, 1, 1738, 35, 100);
                    cm.spawnMobLimit(9400069, 1, 1550, 35, 100);
                    cm.spawnMobLimit(9400068, 1, 1768, -715, 100);
                    cm.spawnMobLimit(9400069, 1, 2036, -715, 100);
                    cm.spawnMobLimit(9400068, 1, 1764, -715, 100);
                    cm.spawnMobLimit(9400068, 1, 1762, -235, 100);
                    cm.spawnMobLimit(9400069, 1, 1948, -235, 100);
                    cm.spawnMobLimit(9400068, 1, 1510, 35, 100);
                    cm.spawnMobLimit(9400069, 1, 1511, 35, 100);
                    cm.spawnMobLimit(9400068, 1, 623, -355, 100);
                    cm.spawnMobLimit(9400069, 1, 547, -355, 100);
                    cm.spawnMobLimit(9400068, 1, 234, -355, 100);
                    cm.spawnMobLimit(9400068, 1, 429, -355, 100);
                    cm.spawnMobLimit(9400069, 1, 186, -355, 100);
                    cm.spawnMobLimit(9400068, 1, 276, -355, 100);
                    cm.spawnMobLimit(9400069, 1, 218, -355, 100);
                    cm.spawnMobLimit(9400069, 1, 1376, -715, 100);
                    cm.spawnMobLimit(9400068, 1, 1384, -715, 100);
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