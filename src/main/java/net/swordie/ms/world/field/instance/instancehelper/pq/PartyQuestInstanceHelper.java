package net.swordie.ms.world.field.instance.instancehelper.pq;

import net.swordie.ms.world.field.instance.Instance;
import net.swordie.ms.world.field.instance.instancehelper.InstanceHelper;

import java.util.List;

/**
 * Created on 12/02/2022.
 *
 * @author Asura
 */
public abstract class PartyQuestInstanceHelper extends InstanceHelper {

    @Override
    protected void clearInstance() {
        removeItems();
        super.clearInstance();
    }

    @Override
    public void setup(Instance instance) {
        super.setup(instance);
        removeItems();
    }

    private void removeItems() {
        for (var chr : getInstance().getChars()) {
            if (getPartyQuestItems() == null || getPartyQuestItems().size() <= 0) {
                break;
            }

            for (var item : getPartyQuestItems()) {
                var quantity = chr.getInventories().stream().mapToInt(inv -> inv.getQuantity(item)).sum();
                chr.consumeItem(item, quantity);
            }
        }
    }

    /**
     * Items that will be removed on setup and clear
     * @return
     */
    protected abstract List<Integer> getPartyQuestItems();
}
