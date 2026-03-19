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
      cm.sendNormalTalk_Bottom("芬……芬里斯来到村里了！", 37, 9400596, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("传说中的狼芬里斯突然出现，把村子……把村子烧成了一片火海！！！", 37, 9400596, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("它在不断地召来其他怪物！快……快先干掉它！", 37, 9400596, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom('#b芬里斯？', 57, 0, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("它……他是传说中的狼！虽然长……长得不太一样，但看那庞大的身躯和喷出的火焰，肯定是它！", 37, 9400588, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("长着冲天巨角！眼睛和鼻子里喷出烈火的芬里斯！", 37, 9400588, true, true);
              } else if (status === V++) {
                cm.OnStartNavigation(867200280, 0, "go0300", 0);
                cm.dispose();
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