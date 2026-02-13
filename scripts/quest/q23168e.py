# 23168 - Blaster 4th job advancement

sm.setSpeakerID(2159488) # Injured Elex
if chr.getJob() == 3711 and chr.getLevel() >= 100:
    sm.setJob(3712)
    sm.addSP(5)
    sm.completeQuest(23168)
    sm.chat("You... have outclassed me.")
    sm.warp(310000000)
else:
    sm.sendSayOkay("你成功破坏了黑色之翼的新武器吗？你果然强大到令人难以置信的地步了，我为你感到骄傲，真的，你真的辛苦了！你能站在反抗者这边我真的感到庆幸，老实说我没有想到你能成长到这个地步。")