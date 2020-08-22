package step_implementation;

import utils.Driver;

import java.util.Set;

public class CommonPageImpl {
    public  void switchToWindow(String currentPageID) {
        Set<String> set = Driver.getDriver().getWindowHandles();

        for(String window : set) {
            if(!window.equalsIgnoreCase(currentPageID))
                Driver.getDriver()
        }
    }
}
