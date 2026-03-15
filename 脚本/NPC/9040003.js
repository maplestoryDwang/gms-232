var status = -1;
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (f == 1) {
    status++;
  } else {
    cm.dispose();
    return;
  }
  if (status == 0) {
    if (em.getProperty("leader") === cm.getPlayer().getName()) {
      if (em.getProperty("stage4clear") === "true") {
        cm.sendOk("After what I thought would be an immortal sleep, I have finally found someone that will save Sharenian. I can truly rest in peace now.");
        cm.dispose();
      } else {
        var V = em.setProperty("stage4clear", 'true', true);
        if (V == null) {
          cm.sendNext("After what I thought would be an immortal sleep, I have finally found someone that will save Sharenian. This old man will now pave the way for you to finish the quest.");
        } else {
          cm.sendOk("After what I thought would be an immortal sleep, I have finally found someone that will save Sharenian. I can truly rest in peace now.");
          cm.dispose();
        }
      }
    } else {
      if (em.getProperty("stage4clear") === 'true') {
        cm.sendOk("After what I thought would be an immortal sleep, I have finally found someone that will save Sharenian. I can truly rest in peace now.");
      } else {
        cm.sendOk("I need the leader of your party to speak with me, nobody else.");
      }
      cm.dispose();
    }
  } else if (status == 1) {
    cm.gainGP(180);
    cm.getMap().getReactorByName("ghostgate").hitReactor(cm.getC());
    cm.fieldEffect_ScreenMsg(true, "quest/party/clear");
    cm.fieldEffect_PlayFieldSound(true, "Party1/Clear");
    cm.dispose();
  }
}