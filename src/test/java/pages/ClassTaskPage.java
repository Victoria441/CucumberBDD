package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utils.Driver;

public class ClassTaskPage {
    public ClassTaskPage(){
        PageFactory.initElements(Driver.getDriver(),this);
    }
    @FindBy(xpath="(//a[@id='endpoint']//*[contains(text(),'Trending')])[1]")
    public WebElement trending;
    @FindBy(xpath="//a[text()='Gift Cards']")
    public WebElement GiftCards;
    @FindBy(xpath="//a[text()='ATM & branch']")
    public WebElement ATM;
}

