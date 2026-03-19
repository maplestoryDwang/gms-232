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
      cm.setInGameDirectionMode(true, true, true);
      cm.npc_ChangeController(2410004, "oid=1356551", 1170, -16, 123, 1120, 1220, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=1356551", 'summon', 0, 0);
      cm.forceStartQuest(40011, '2');
      cm.inGameDirectionEvent_MoveAction(0);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
      cm.curNodeEventEnd(true);
      cm.effect_OnUserEff("Effect/OnUserEff.img/questEffect/phantom/tutorial");
    } else {
      if (status === V++) {
        cm.sendNormalTalk("#b(除了少数几个人留在了村庄，其他人全部到神殿去了……)", 41, 2410008, false, true);
        cm.effect_Voice("Voice.img/Alpha/81", 100);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("#face11# #b(该死……你让谁在这里安静地等待！为什么突然要攻击神殿？莫非……他们发现了我的动静？)", 41, 2410008, true, true);
          cm.effect_Voice("Voice.img/Alpha/82", 100);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("#face11# #b(……如果是的话那这就是陷阱……他们要的不是神殿里的那个女子，而是我……但是……)", 41, 2410008, true, true);
            cm.effect_Voice("Voice.img/Alpha/83", 100);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("#face11# #b(如果我不出现的话，他们可能就会摧毁那个女子，要不就是加强戒备不让人靠近神殿。)", 41, 2410008, true, true);
              cm.effect_Voice("Voice.img/Alpha/84", 100);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("#face11# #b(逃避真相……放弃复仇……就这么傻傻地活在这个村子里，还是明知是陷阱，但还是冲进去解救那个女子……)", 41, 2410008, true, true);
                cm.effect_Voice("Voice.img/Alpha/85", 100);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("#b(到了该选择的时候了？……该怎么办才好？)", 41, 2410008, true, true);
                  cm.effect_Voice("Voice.img/Alpha/86", 100);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;