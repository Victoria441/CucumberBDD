package step_definitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import step_implementation.HomePageImpl;
import utils.Driver;

public class HomePageTest extends HomePageImpl {
    @Given("Users opens home page")
    public void users_opens_home_page() {
        Driver.getDriver().get("http://automation.techleadacademy.io/#/");

    }
    @Then("User verifies title is TLA Automation")
    public void user_verifies_title_is_tla_automation() {
        Assert.assertEquals("TLA Automation", Driver.getDriver().getTitle());
    }

}
