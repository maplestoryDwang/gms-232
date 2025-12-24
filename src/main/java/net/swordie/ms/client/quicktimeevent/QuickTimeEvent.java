package net.swordie.ms.client.quicktimeevent;

import net.swordie.ms.util.Util;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Created on 02/02/2022.
 *
 * @author Asura
 */
public class QuickTimeEvent {
    private List<ArrowInput> arrowInputs;

    public QuickTimeEvent(ArrowInput... arrowInputs) {
        this.arrowInputs = Arrays.stream(arrowInputs).collect(Collectors.toList());
    }

    public QuickTimeEvent(List<ArrowInput> arrowInputs) {
        this.arrowInputs = arrowInputs;
    }

    public static QuickTimeEvent generateRandom(int amount) {
        var arrowInputs = new ArrowInput[]{ArrowInput.UP, ArrowInput.RIGHT, ArrowInput.DOWN, ArrowInput.LEFT};

        var list = new ArrayList<ArrowInput>();
        for (var i = 0; i < amount; i++) {
            list.add(Util.getRandomFromCollection(arrowInputs));
        }

        return new QuickTimeEvent(list);
    }

    public List<ArrowInput> getArrowInputs() {
        return arrowInputs;
    }
}
