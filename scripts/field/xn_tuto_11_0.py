# Video Field (931050990)  |  A Black Field used for Effects/Videos

job = sm.getChr().getJob()
if job == 2004: # Luminous Beginner Job ID
    sm.lockInGameUI(True)
    sm.showScene("Effect.wz/Direction8.img", "lightningTutorial", "Scene0")
    sm.invokeAfterDelay(5000, "warpInstanceIn", 927020000, 0) # Warp into Instance
    sm.invokeAfterDelay(4500, "showFadeTransition", 0, 500, 1500)
elif job == 2001: # Evan Beginner Job ID
    sm.lockInGameUI(True)
    sm.invokeAfterDelay(3000, "lockInGameUI", False)

    sm.showScene("Effect.wz/Direction4.img", "crash", "Scene0")
elif job == 10112:  # Zero
    sm.giveSkill(100001270, 1)  # Dual Combat
    sm.giveSkill(100000282, 1)  # Dual Combat 2
    sm.giveSkill(100001262, 1)  # Temple Recall
    sm.giveSkill(100000279, 5)  # Resolution Time
    sm.giveSkill(100001265, 1)  # Burst Jump
    sm.giveSkill(100001266, 1)  # Burst Step
    sm.giveSkill(100001269, 1)  # Burst Leap
    sm.giveSkill(100001263, 1)  # Divine Force
    sm.giveSkill(100001264, 1)  # Divine Speed
    sm.giveSkill(100001268, 1)  # Rhinne's Protection
    sm.giveSkill(100000267, 1)  # DoubleTime
    sm.warp(100000000)
