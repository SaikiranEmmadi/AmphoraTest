function DeleteReciept()
{
  //Clicks the 0 subitem of the '8/23/2003' item of the 'ListView' list view.
  Aliases.ExpenseIT.wndAfx.AfxMDIFrame70s.ListView.ClickItem("8/23/2003");
  //Clicks the 'Delete' item of the 'toolbar' toolbar.
  Aliases.ExpenseIT.wndAfx.toolbar.ClickItem("Delete", false);
  //Clicks the 0 subitem of the 0 item of the 'ListView' list view.
  Aliases.ExpenseIT.wndAfx.AfxMDIFrame70s.ListView.ClickItem(0);
  //Checks whether the 'wText' property of the Aliases.ExpenseIT.wndAfx.AfxMDIFrame70s.page32770.editTotal object equals '$0.00'.
  aqObject.CheckProperty(Aliases.ExpenseIT.wndAfx.AfxMDIFrame70s.page32770.editTotal, "wText", cmpEqual, "$0.00");
}