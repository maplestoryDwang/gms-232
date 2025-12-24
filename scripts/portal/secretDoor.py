# Lab - 1st Floor Hallway / Lab - Area B-1 
# 261010000 / 261020200
# Warps to Secret Basement Path if Verifying the Password is completed. Also used for that specific quest.

# For reference regarding 7062's quest progress tracker: The Zenumist Lab uses the first digit, while the Alcadno lab uses the second digit
passageSides = {
    261010000: [0, 1], # Zenumist Lab - 1st Floor Hallway
    261020200: [1, 2] # Alcadno Lab - Area B-1
}

zenumist = 261010000
alcadno = 261020200
secretPassage = 261030000

verifyPassword = 3360
# This dummy quest has the original password string declared on quest accept
passwordMaster = 7061
# This dummy quest checks which sides are unlocked
passwordProgress = 7062

passageVoice = 2111024
currentSociety = sm.getFieldID()

if sm.hasQuestCompleted(verifyPassword):
    sm.chat("Your name is on the list. Now transporting to the Secret Passage.")
    sm.warp(secretPassage, passageSides[currentSociety][1])

elif sm.hasQuest(verifyPassword):
    password = sm.getQRValue(passwordMaster)
    questStatus = sm.getQRValue(passwordProgress)
    societyKey = passageSides[currentSociety][0]
    # Is the current side's door already unlocked?
    if questStatus[societyKey] == "1":
        sm.chat("The security device is already unlocked on this side.")
    else:
        sm.setSpeakerID(passageVoice)
        answer = sm.sendAskText("Please enter the passcode.", "", 1, 10)
        if answer == password:
            successStr = "The security device has been unlocked. "
            # Update 7062's QR value
            if societyKey == 0:
                questStatus = "1" + questStatus[societyKey+1:]
            else:
                questStatus = questStatus[:societyKey] + "1"

            # Did the user just unlock both sides?
            if questStatus == "11":
                successStr += "Your name has entered the list."
            
            sm.chat(successStr)
            sm.setQRValue(passwordProgress, questStatus, False)
            # If the user is done, their reward is entering the Secret Passage
            if questStatus == "11":
                sm.warp(secretPassage, passageSides[currentSociety][1])
                sm.setQRValue(verifyPassword, "1", False)
                sm.completeQuest(verifyPassword)
                # Clean up dummy quests
                sm.deleteQuest(passwordMaster)
                sm.deleteQuest(passwordProgress)
        else:
            sm.chat("The security device rejected your password.")

else:
    sm.chat("Your name is not on the list.")