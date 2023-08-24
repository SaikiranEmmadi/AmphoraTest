function UpdateReciept()
{
  //Clicks the 0 subitem of the '8/23/2003' item of the 'ListView' list view.
  Aliases.ExpenseIT.wndAfx.AfxMDIFrame70s.ListView.ClickItem("8/23/2003");
  //Clicks the 'editDate' object.
  Aliases.ExpenseIT.wndAfx.AfxMDIFrame70s.page32770.editDate.Click(24, 8);
  //Enters the text '8/23/2003' in the 'editDate' text editor.
  Aliases.ExpenseIT.wndAfx.AfxMDIFrame70s.page32770.editDate.SetText("8/23/2003");
  //Clicks the 'editTotal' object.
  Aliases.ExpenseIT.wndAfx.AfxMDIFrame70s.page32770.editTotal.Click(11, 6);
  //Enters the text '$80.00' in the 'editTotal' text editor.
  Aliases.ExpenseIT.wndAfx.AfxMDIFrame70s.page32770.editTotal.SetText("$80.00");
  //Clicks the 'cbxChargeTo' object.
  Aliases.ExpenseIT.wndAfx.AfxMDIFrame70s.page32770.cbxChargeTo.Click(160, 10);
  //Clicks the 'Save' item of the 'toolbar' toolbar.
  Aliases.ExpenseIT.wndAfx.toolbar.ClickItem("Save", false);
  //Clicks the 'btnNextReceipt' button.
  Aliases.ExpenseIT.wndAfx.AfxMDIFrame70s.page32770.btnNextReceipt.ClickButton();
  //Clicks the 0 subitem of the '8/23/2003' item of the 'ListView' list view.
  Aliases.ExpenseIT.wndAfx.AfxMDIFrame70s.ListView.ClickItem("8/23/2003");
  //Checks whether the 'wText' property of the Aliases.ExpenseIT.wndAfx.AfxMDIFrame70s.page32770.editDate object equals '8/23/2003'.
  aqObject.CheckProperty(Aliases.ExpenseIT.wndAfx.AfxMDIFrame70s.page32770.editDate, "wText", cmpEqual, "8/23/2003");
}