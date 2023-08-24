function CreateReciept()
{
  //Clicks the 'btnNextReceipt' button.
  Aliases.ExpenseIT.wndAfx.AfxMDIFrame70s.page32770.btnNextReceipt.ClickButton();
  //Clicks the 'editDate' object.
  Aliases.ExpenseIT.wndAfx.AfxMDIFrame70s.page32770.editDate.Click(25, 11);
  //Enters the text '8/23/2003' in the 'editDate' text editor.
  Aliases.ExpenseIT.wndAfx.AfxMDIFrame70s.page32770.editDate.SetText("8/23/2003");
  //Clicks the 'editTotal' object.
  Aliases.ExpenseIT.wndAfx.AfxMDIFrame70s.page32770.editTotal.Click(38, 10);
  //Enters the text '$40' in the 'editTotal' text editor.
  Aliases.ExpenseIT.wndAfx.AfxMDIFrame70s.page32770.editTotal.SetText("$40");
  //Clicks the 'cbxChargeTo' object.
  Aliases.ExpenseIT.wndAfx.AfxMDIFrame70s.page32770.cbxChargeTo.Click(162, 8);
  //Drags the 'Edit' object.
  Aliases.ExpenseIT.wndAfx.AfxMDIFrame70s.page32770.Edit.Drag(23, 8, -22, 4);
  //Enters the text '8%' in the 'Edit' text editor.
  Aliases.ExpenseIT.wndAfx.AfxMDIFrame70s.page32770.Edit.SetText("8%");
  //Clicks the 'Save' item of the 'toolbar' toolbar.
  Aliases.ExpenseIT.wndAfx.toolbar.ClickItem("Save", false);
  //Clicks the 'btnNextReceipt' button.
  Aliases.ExpenseIT.wndAfx.AfxMDIFrame70s.page32770.btnNextReceipt.ClickButton();
  //Clicks the 0 subitem of the '8/23/2003' item of the 'ListView' list view.
  Aliases.ExpenseIT.wndAfx.AfxMDIFrame70s.ListView.ClickItem("8/23/2003");
  //Checks whether the 'wText' property of the Aliases.ExpenseIT.wndAfx.AfxMDIFrame70s.page32770.editTotal object equals '$40.00'.
  aqObject.CheckProperty(Aliases.ExpenseIT.wndAfx.AfxMDIFrame70s.page32770.editTotal, "wText", cmpEqual, "$40.00");
}