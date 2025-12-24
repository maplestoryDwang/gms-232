# Showa Trolley
# 9100031
# Showa Street Trolley (801,000,910)
# Showa Town Trolley (801,000,900)

sm.setSpeakerID(9100031)
current_map = sm.getFieldID()
if current_map == 801000910: #If in showa street 3 , ask them to go to showa town
    if sm.sendAskYesNo("Would you like to go to #m801000000#?"):
        sm.warp(801000000)
elif current_map == 801000900: #If in showa town, ask them to go to showa street 3
    if sm.sendAskYesNo("Would you like to go to #m801030000#?"):
        sm.warp(801030000)
