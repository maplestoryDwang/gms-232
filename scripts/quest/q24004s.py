# Barriers of Elluel

sm.setSpeakerID(1033205) # Entrance to Elluel NPC
response = sm.sendAskYesNo("#b(看到了制造结界的魔法语言。念诵咒语，可以为埃欧雷设置结界。至少在100年之内谁也无法入侵村子的强力结界……要设置结界吗？)")

if response:
    sm.startQuestNoCheck(parentID)
    sm.completeQuest(parentID)
    sm.sendSayOkay("#b(设置了结界。这下村子应该安全了……)")
