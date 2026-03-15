var status = -1;
var sel;
function action(f, W, U) {
  if (f == 1) {
    status++;
  } else {
    if (status == 0) {
      cm.dispose();
      return;
    }
    status--;
  }
  if (status == 0) {
    cm.askMenu("你现在想要做什么呢?\n\r #b#L0#前往其他钓鱼场#l \n\r #L2#返回自由市场#l");
  } else {
    if (status == 1) {
      sel = U;
      if (sel == 0) {
        cm.askMenu("你想前往那里的钓鱼场?\r\n#b#L0#外层空间钓鱼场#l\r\n#L1#梦幻王国钓鱼场#l\r\n#L2#精灵钓鱼场#l#k");
      } else {
        if (sel == 2) {
          var V = cm.getSavedLocation("FISHING");
          if (V < 0 || cm.getMap(V) == null) {
            V = 910000000;
          }
          cm.clearSavedLocation('FISHING');
          cm.warp(V, 0);
          cm.dispose();
        }
      }
    } else if (status == 2) {
      if (sel == 0 && U <= 2 && U >= 0) {
        if (cm.getMapId() < 749050500 || cm.getMapId() > 749050502) {
          cm.saveLocation("FISHING");
        }
        cm.warp(749050500 + U);
        cm.dispose();
      } else {
        cm.dispose();
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;