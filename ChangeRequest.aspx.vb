'Author: Bindhu John
'Riskcalculator project
Imports System.Data.SqlClient
Imports Telerik.Web.UI
Public Class ChangeRequest1
    Inherits System.Web.UI.Page
    Dim sqlCon As New SqlDataProvider.SqlDatabase(ConfigurationManager.ConnectionStrings("DBConn").ConnectionString)
    Dim constring As String = ConfigurationManager.ConnectionStrings("DBConn").ConnectionString
    Dim RequestList As DataTable
    Dim dr As SqlDataReader

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load

        RG_ChnageReuquest.ShowHeader = True
        If Not IsPostBack Then
            LoadCharts()
        End If
        'Dim radalertscript As String = "<script language='javascript'>alert()</script>"
        'Page.ClientScript.RegisterStartupScript(Me.[GetType](), "radalert", radalertscript)
    End Sub

    Protected Sub RG_NeedDataSource(ByVal sender As Object, ByVal e As Telerik.Web.UI.GridNeedDataSourceEventArgs)
        TryCast(sender, RadGrid).DataSource = GetRequest()
    End Sub
    'load photo list ByVal Search As String, ByVal Number As String
    Function GetRequest() As DataTable
        Dim ActionType As Integer
        Dim m_iUserid As Integer
        Dim UserType As Integer
        Dim ObjConstant As New Constants
        'If Master.oRole.UserTypeId = ObjConstant.EndUser Then
        UserType = Master.oRole.UserTypeId
        'End If
        Try
            m_iUserid = Convert.ToInt32(Session("UserID"))
        Catch ex As Exception

        End Try
        RequestList = New DataTable("LoadRequest")

        Dim param(1) As SqlParameter
        param(0) = New SqlParameter("@ActionType", SqlDbType.Int)
        param(0).Value = UserType
        param(1) = New SqlParameter("@UserID", SqlDbType.Int)
        param(1).Value = m_iUserid
        'param(2) = New SqlParameter("@PageIndex", SqlDbType.Int)
        'param(2).Value = CurrentPage
        'param(3) = New SqlParameter("@PageSize", SqlDbType.Int)
        'param(3).Value = ItemsPerPage
        'param(4) = New SqlParameter("@RecordCount", SqlDbType.Int)
        'param(4).Direction = ParameterDirection.Output
        dr = sqlCon.ExecuteReader("SP_ChangeRequest", CommandType.StoredProcedure, param)
        RequestList.Load(dr)
        Return RequestList
    End Function
    Protected Sub RG_OnItemDataBound(ByVal sender As Object, ByVal e As Telerik.Web.UI.GridItemEventArgs) Handles RG_ChnageReuquest.ItemDataBound

        If TypeOf e.Item Is GridDataItem Then
            Dim Grid_DataItem As GridDataItem = CType(e.Item, GridDataItem)

            Dim img As Image = DirectCast(Grid_DataItem.FindControl("ImgView"), Image)
            Dim lbscore As Label = DirectCast(Grid_DataItem.FindControl("LblScore"), Label)
            Dim LblRisk As Label = DirectCast(Grid_DataItem.FindControl("LblRisk"), Label)
            Dim LblStatus As Label = DirectCast(Grid_DataItem.FindControl("LbStatus"), Label)

            Dim str As String = "javascript:viewall(" + lbscore.Text + ",'" + LblRisk.Text + "')"
            If (LblStatus.Text <> "1") Then
                img.Visible = True
            Else
                img.Visible = False
            End If
            img.Attributes.Add("onclick", str)

        End If

    End Sub
    Protected Sub RG_ChnageReuquest_ItemCreated(ByVal sender As Object, ByVal e As Telerik.Web.UI.GridItemEventArgs) Handles RG_ChnageReuquest.ItemCreated

        If TypeOf e.Item Is GridCommandItem Then
            Dim commandItem As GridCommandItem = CType(e.Item, GridCommandItem)
            If RG_ChnageReuquest.MasterTableView.IsItemInserted Then
                If TypeOf commandItem.NamingContainer Is GridTHead Then
                    commandItem.FindControl("Img_NewImage").Visible = False
                    commandItem.FindControl("btnAdd").Visible = False
                    commandItem.FindControl("btnAdd1").Visible = False
                    commandItem.FindControl("Img1").Visible = False
                    commandItem.FindControl("BtnEdit").Visible = False
                    commandItem.FindControl("Img_NewImage").Visible = False
                End If
                If TypeOf commandItem.NamingContainer Is GridTFoot Then
                    commandItem.FindControl("Img_NewImage").Visible = False
                    commandItem.FindControl("btnAdd").Visible = False
                    commandItem.FindControl("btnAdd1").Visible = False
                    commandItem.FindControl("Img1").Visible = False
                    commandItem.FindControl("BtnEdit").Visible = False
                    commandItem.FindControl("Img_NewImage").Visible = False
                End If

            End If
            If RG_ChnageReuquest.EditIndexes.Count > 0 Then
                If TypeOf commandItem.NamingContainer Is GridTHead Then
                    commandItem.FindControl("Img_NewImage").Visible = False
                    commandItem.FindControl("Img1").Visible = True
                    commandItem.FindControl("BtnEdit").Visible = True
                    'Label edit = (Label)commandItem.FindControl("BtnEdit");
                    'edit.Text = un;
                    commandItem.FindControl("btnAdd").Visible = False
                    commandItem.FindControl("btnAdd1").Visible = False
                    commandItem.FindControl("Img_NewImage").Visible = False
                End If
                If TypeOf commandItem.NamingContainer Is GridTFoot Then
                    commandItem.FindControl("Img1").Visible = True
                    commandItem.FindControl("BtnEdit").Visible = True
                    'Label edit = (Label)commandItem.FindControl("BtnEdit");
                    'edit.Text = un;
                    commandItem.FindControl("Img_NewImage").Visible = False
                    commandItem.FindControl("btnAdd").Visible = False
                    commandItem.FindControl("btnAdd1").Visible = False
                    commandItem.FindControl("Img_NewImage").Visible = False
                End If
            End If
        End If

        If TypeOf e.Item Is GridNoRecordsItem Then
            Dim recorditem As GridNoRecordsItem = DirectCast(e.Item, GridNoRecordsItem)
            If RG_ChnageReuquest.MasterTableView.IsItemInserted Then
                recorditem.FindControl("lbl_Records").Visible = False
            End If
        End If

    End Sub
    Protected Sub RG_ChnageReuquest_ItemCommand(ByVal sender As Object, ByVal e As Telerik.Web.UI.GridCommandEventArgs) Handles RG_ChnageReuquest.ItemCommand
        If e.CommandName = "Delete" Then

            Dim sqlCon As New SqlDataProvider.SqlDatabase(ConfigurationManager.ConnectionStrings("DBConn").ConnectionString)
            '----------Delete youtube id from youtube --------------------
            Dim params(0) As SqlParameter
            params(0) = New SqlParameter("@ID", SqlDbType.Int)
            params(0).Value = CType((DirectCast(e.Item, GridDataItem)).GetDataKeyValue("ID").ToString(), Integer)
            sqlCon.ExecuteNonQuery("SP_DeleteRequest", CommandType.StoredProcedure, params)

            ScriptManager.RegisterClientScriptBlock(
      Me.Page,
      Me.GetType(),
      "WebUserControlSript",
      "SaveCookie(3);",
      True)
            RG_ChnageReuquest.Rebind()
        End If
        If e.CommandName = "Cancel" Then
            ScriptManager.RegisterClientScriptBlock(
Me.Page,
Me.GetType(),
"WebUserControlSript",
"RemoveEdit();",
True)
        End If
        If e.CommandName = "Edit" Then

            e.Item.OwnerTableView.IsFilterItemExpanded = False
            RG_ChnageReuquest.AllowFilteringByColumn = False
            RG_ChnageReuquest.ShowHeader = False
            RG_ChnageReuquest.MasterTableView.PagerStyle.Visible = False
            Dim item As GridDataItem = TryCast(e.Item, GridDataItem)

        End If
        If e.CommandName = "InitInsert" Then
            e.Item.OwnerTableView.IsFilterItemExpanded = False
            RG_ChnageReuquest.ShowHeader = False
            RG_ChnageReuquest.AllowPaging = False
            RG_ChnageReuquest.AllowFilteringByColumn = False
            RG_ChnageReuquest.MasterTableView.PagerStyle.Visible = False
        End If
    End Sub
    'Protected Sub RadGrid1_ItemInserted(ByVal source As Object, ByVal e As GridInsertedEventArgs) Handles RadGrid1.ItemInserted

    '    If e.Exception IsNot Nothing Then

    '        e.ExceptionHandled = True

    '        SetMessage("Customer cannot be inserted. Reason: " + e.Exception.Message)
    '    Else
    '        SetMessage("New customer is inserted!")
    '    End If
    'End Sub
    'Private Sub DisplayMessage(ByVal text As String)
    '    RadGrid1.Controls.Add(New LiteralControl(String.Format("<span style='color:red'>{0}</span>", text)))
    'End Sub

    Private Sub SetMessage(ByVal message As String)
        gridMessage = message
    End Sub

    Private gridMessage As String = Nothing

    Protected Sub RG_ChnageReuquest_PreRender(ByVal sender As Object, ByVal e As EventArgs) Handles RG_ChnageReuquest.PreRender
        For Each dataItem As GridDataItem In RG_ChnageReuquest.MasterTableView.Items

            If dataItem.ItemType = GridItemType.Item Then
                dataItem.BackColor = System.Drawing.ColorTranslator.FromHtml("#F2F2F2")
            ElseIf dataItem.ItemType = GridItemType.AlternatingItem Then

                dataItem.BackColor = System.Drawing.ColorTranslator.FromHtml("#E6E6E6")
            End If
        Next
        If RG_ChnageReuquest.EditItems.Count > 0 Then

            For Each item As GridDataItem In RG_ChnageReuquest.MasterTableView.Items
                'If item <> RG_ChnageReuquest.EditItems(0) Then
                item.Visible = False
                'End If
                item.BackColor = System.Drawing.Color.White
            Next
            For Each item As GridDataItem In RG_ChnageReuquest.MasterTableView.Items
                If TypeOf item Is GridDataItem AndAlso item.Edit Then
                    item.Visible = False
                End If
            Next
        End If
        If RG_ChnageReuquest.MasterTableView.IsItemInserted Then
            For Each item As GridItem In RG_ChnageReuquest.Items
                item.Visible = False
            Next
        End If

    End Sub

    'Protected Sub RadGrid1_InsertCommand(ByVal sender As Object, ByVal e As GridCommandEventArgs)
    '    If TypeOf e.Item Is GridEditableItem Then
    '        Dim editedItem As GridEditableItem = TryCast(e.Item, GridEditableItem)
    '        'here editedItem.SavedOldValues will be the dictionary which holds the
    '        'predefined values

    '        'Prepare new dictionary object
    '        Dim newValues As New Hashtable()
    '        'the newValues instance is the new collection of key -> value pairs
    '        'with the updated ny the user data
    '        e.Item.OwnerTableView.ExtractValuesFromItem(newValues, editedItem)
    '    End If
    'End Sub

    Private Sub LoadCharts()
        loadRiskChart()
        loadStatusChart()
    End Sub

    Sub loadRisk1Chart()
        Dim selectCommand As String = "SELECT Count(c.Risk) as 'RFC Count' FROM ChangeRequest c WHERE 1=1 "
        selectCommand += " and IsDeleted=0 Group By c.Risk ORDER BY c.Risk ASC"


        Dim dataAdapter As New SqlDataAdapter(selectCommand, constring)
        Dim table As New DataTable()
        dataAdapter.Fill(table)
        rdChartRisk.DataSource = table
        rdChartRisk.DefaultType = Telerik.Charting.ChartSeriesType.Bar

        'RadChart1.PlotArea.XAxis.DataLabelsColumn = "Age"
        rdChartRisk.PlotArea.Appearance.FillStyle.MainColor = System.Drawing.Color.Transparent
        rdChartRisk.PlotArea.Appearance.FillStyle.SecondColor = System.Drawing.Color.Transparent
        rdChartRisk.PlotArea.Appearance.Border.Color = System.Drawing.Color.Transparent
        ' rdChartAge.DefaultView.ChartArea.SmartLabelsEnabled = True
        rdChartRisk.DataBind()
    End Sub

    Function getRiskRange(ByVal risk As String)

        Dim selectCommand As String = "SELECT  n.Number FROM ChangeRequest n WHERE  1=1 "
        selectCommand += " and IsDeleted=0 AND n.Risk = '"
        selectCommand += risk.ToString()
        selectCommand += "'"


        Dim dataAdapter As New SqlDataAdapter(selectCommand, constring)
        Dim table As New DataTable()
        dataAdapter.Fill(table)
        If (table.Rows.Count > 0) Then
            Return table.Rows.Count
        Else
            Return 0
        End If

    End Function


    Sub loadRiskChart()

        Dim tbl As New DataTable()
        Dim col As New DataColumn("RFC Count")
        col.DataType = GetType(Integer)
        tbl.Columns.Add(col)

        col = New DataColumn("Age Range")
        col.DataType = GetType(String)
        tbl.Columns.Add(col)

        col = New DataColumn("Color")
        col.DataType = GetType(String)
        tbl.Columns.Add(col)

        tbl.Rows.Add(New Object() {getRiskRange("High"), "High", "#0B1842"})
        tbl.Rows.Add(New Object() {getRiskRange("Low"), "Low", "#334D64"})
        tbl.Rows.Add(New Object() {getRiskRange("Medium"), "Medium", "#138BA6"})


        rdChartRisk.DataSource = tbl
        rdChartRisk.DefaultType = Telerik.Charting.ChartSeriesType.Bar

        rdChartRisk.PlotArea.Appearance.FillStyle.MainColor = System.Drawing.Color.Transparent
        rdChartRisk.PlotArea.Appearance.FillStyle.SecondColor = System.Drawing.Color.Transparent
        rdChartRisk.PlotArea.Appearance.Border.Color = System.Drawing.Color.Transparent
        'rdChartRisk.SeriesOrientation = ChartSeriesOrientation.Horizontal
        rdChartRisk.DataBind()
    End Sub

    Function getRFCStatus(ByVal status As String)

        Dim selectCommand As String = "SELECT n.Number FROM ChangeRequest n JOIN Requeststatus r ON n.StatusID = r.statuscode WHERE  1=1  "
        selectCommand += " and IsDeleted=0 AND r.statusname = '"
        selectCommand += status.ToString()
        selectCommand += "'"


        Dim dataAdapter As New SqlDataAdapter(selectCommand, constring)
        Dim table As New DataTable()
        dataAdapter.Fill(table)
        If (table.Rows.Count > 0) Then
            Return table.Rows.Count
        Else
            Return 0
        End If

    End Function

    Sub loadStatusChart()

        Dim tbl As New DataTable()
        Dim col As New DataColumn("RFC Count")
        col.DataType = GetType(Integer)
        tbl.Columns.Add(col)

        col = New DataColumn("Status Range")
        col.DataType = GetType(String)
        tbl.Columns.Add(col)

        col = New DataColumn("Color")
        col.DataType = GetType(String)
        tbl.Columns.Add(col)

        If getRFCStatus("New") > 0 Then
            tbl.Rows.Add(New Object() {getRFCStatus("New"), "New", "#0B1842"})
        End If
        If getRFCStatus("Open") > 0 Then
            tbl.Rows.Add(New Object() {getRFCStatus("Open"), "Open", "#334D64"})
        End If
        If getRFCStatus("Approved") > 0 Then
            tbl.Rows.Add(New Object() {getRFCStatus("Approved"), "Approved", "#138BA6"})
        End If
        If getRFCStatus("Rejected") > 0 Then
            tbl.Rows.Add(New Object() {getRFCStatus("Rejected"), "Rejected", "#138BA6"})
        End If
        If getRFCStatus("Submit for Approval") > 0 Then
            tbl.Rows.Add(New Object() {getRFCStatus("Submit for Approval"), "Approval", "#138BA6"})
        End If

        If getRFCStatus("Closed") > 0 Then
            tbl.Rows.Add(New Object() {getRFCStatus("Closed"), "Closed", "#138BA6"})
        End If

        rdChartStatus.DataSource = tbl
        rdChartStatus.DefaultType = Telerik.Charting.ChartSeriesType.Bar

        rdChartStatus.PlotArea.Appearance.FillStyle.MainColor = System.Drawing.Color.Transparent
        rdChartStatus.PlotArea.Appearance.FillStyle.SecondColor = System.Drawing.Color.Transparent
        rdChartStatus.PlotArea.Appearance.Border.Color = System.Drawing.Color.Transparent
        'rdChartRisk.SeriesOrientation = ChartSeriesOrientation.Horizontal
        rdChartStatus.DataBind()
    End Sub
End Class
