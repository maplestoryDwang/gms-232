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
      cm.npc_ChangeController(9390241, "oid=109895", 852, 128, 48, 802, 881, 0, false, 0, false);
      cm.npc_ChangeController(9390242, "oid=109896", 992, 131, 26, 942, 1042, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.setStandAloneMode(true);
      cm.sendNormalTalk("什么啊！你们！", 5, 9390241, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("鱼全部是我们的，喵~~~嗡！", 5, 9390242, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("厚颜无耻的小偷！我不会给你一条鱼的！居然想偷我 #e#b莱文·达尼尔拉#k#n的鱼？想都别想！", 5, 9390241, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("哈哈哈哈！就凭你自己，就想对付我们吗~~喵？还有，我还知道你受伤了~喵！抓住那家伙~~喵", 5, 9390242, true, true);
          } else {
            if (status === V++) {
              cm.npc_SetSpecialAction('oid=109896', 'q17613', 0, 0);
              cm.sendNormalTalk("居然这么卑鄙！！", 5, 9390241, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("#b(啊！危险！我得帮助他！)#k\r\n你们这些小偷猫！我来对付你们吧！", 17, 0, true, true);
              } else if (status === V++) {
                cm.setInGameDirectionMode(false, true, false);
                cm.updateInfoQuest(17613, "enter=1");
                cm.spawnMobLimit(9390847, 1, 200, 0, 100);
                cm.spawnMobLimit(9390847, 1, 200, 0, 100);
                cm.spawnMobLimit(9390847, 1, 400, 0, 100);
                cm.spawnMobLimit(9390847, 1, 400, 0, 100);
                cm.spawnMobLimit(9390847, 1, 600, 0, 100);
                cm.spawnMobLimit(9390847, 1, 600, 0, 100);
                cm.spawnMobLimit(9390847, 1, 800, 0, 100);
                cm.spawnMobLimit(9390847, 1, 800, 0, 100);
                cm.spawnMobLimit(9390847, 1, 1000, 0, 100);
                cm.spawnMobLimit(9390847, 1, 1000, 0, 100);
                cm.spawnMobLimit(9390847, 1, 1200, 0, 100);
                cm.spawnMobLimit(9390847, 1, 1200, 0, 100);
                cm.playerMessage(-1, "击退所有的猫咪!");
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