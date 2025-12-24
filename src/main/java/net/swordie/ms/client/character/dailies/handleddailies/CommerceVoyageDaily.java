package net.swordie.ms.client.character.dailies.handleddailies;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.dailies.DailiesManager;
import net.swordie.ms.client.character.dailies.DailyType;
import net.swordie.ms.client.character.dailies.IDaily;

/**
 * Created on 28/05/2021.
 *
 * @author Asura
 */
public class CommerceVoyageDaily implements IDaily {

    private static final DailyType dailyType = DailyType.CommerceVoyage;

    @Override
    public void reset(Char chr, DailiesManager dailiesManager) {
        var vessel = chr.getVessel();
        if (vessel != null) {
            vessel.setEnergy(vessel.getMaxEnergy());
            vessel.updateToChar(chr);

            // Update the Last time updated
            dailiesManager.update(dailyType, chr);
        }
    }
}
