import test from "@playwright/test";
import { AuthPage } from "../pages/AuthPage";

const userLogin = String(process.env.USER_LOGIN)
const userPassword = String(process.env.USER_PASSWORD)

const login = async function (authPage:AuthPage, userName, password) {
    await authPage.goto();
    await authPage.fillLogin(userName);
    await authPage.fillPassword(password);
    await authPage.submit();
  };
  

test ('Authorization in the system', async({page}) => {
    const authPage = new AuthPage(page)
    await login(authPage, userLogin, userPassword) 

})


  
  