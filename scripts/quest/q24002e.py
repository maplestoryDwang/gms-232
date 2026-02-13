# Philius's Request

PHILIUS = 1033202

sm.setSpeakerID(PHILIUS)
sm.sendNext("启动了魔法阵。现在外面的人应该无法感觉到#m101050000#的存在了。")


response = sm.sendAskYesNo("Your Highness, I will dream of a more beautiful world when we awaken...")

if response:
    sm.completeQuest(parentID)
    sm.sendSayOkay("I wish you...sweet dreams...")
    sm.startQuest(24005) # Cursed Slumber
sm.dispose()
