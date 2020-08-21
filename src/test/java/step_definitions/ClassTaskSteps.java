package step_definitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import pages.ClassTaskPage;
import utils.Driver;
import utils.SeleniumUtils;

public class ClassTaskSteps {
    ClassTaskPage classTaskPage = new ClassTaskPage();
    @Given("I open {string}")
    public void iOpen(String websiteName) {
        switch (websiteName){
            case "youtube": Driver.getDriver().get("https://www.youtube.com/");
                break;
            case "amazon": Driver.getDriver().get("https://www.amazon.com/");
                break;
            case "ChaseBank": Driver.getDriver().get("https://www.chase.com/");
                break;
            default:
                System.out.println("wrong");
        }
    }
    @Then("I verify title is {string}")
    public void iVerifyTitleIsYouTube(String titleName) {
        Assert.assertEquals(Driver.getDriver().getTitle(),titleName);
    }
    @When("I click {string} button")
    public void iClickButton(String button) {
        switch (button.toLowerCase()){
            case "trending":   SeleniumUtils.click(classTaskPage.trending);
                break;
            case "gift cards": SeleniumUtils.click(classTaskPage.GiftCards);
                break;
            case "atm & branch": SeleniumUtils.click(classTaskPage.ATM);
                break;
            default:
                System.out.println("cannot click");
        }
    }
}