'Author - Bindhu John
'Risk calculator Project

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
    End Sub

    Protected Sub RG_NeedDataSource(ByVal sender As Object, ByVal e As Telerik.Web.UI.GridNeedDataSourceEventArgs)
        TryCast(sender, RadGrid).DataSource = GetRequest()
    End Sub
    'load photo list ByVal Search As String, ByVal Number As String
    Function GetRequest() As DataTable

        RequestList = New DataTable("LoadRequest")

        'Dim param(4) As SqlParameter
        'param(0) = New SqlParameter("@SearchWord", SqlDbType.NVarChar, 500)
        'param(0).Value = Search
        'param(1) = New SqlParameter("@UserId", SqlDbType.Int)
        'param(1).Value = ProfileId
        'param(2) = New SqlParameter("@PageIndex", SqlDbType.Int)
        'param(2).Value = CurrentPage
        'param(3) = New SqlParameter("@PageSize", SqlDbType.Int)
        'param(3).Value = ItemsPerPage
        'param(4) = New SqlParameter("@RecordCount", SqlDbType.Int)
        'param(4).Direction = ParameterDirection.Output
        dr = sqlCon.ExecuteReader("SP_ChangeRequest", CommandType.StoredProcedure)
        RequestList.Load(dr)
        Return RequestList
    End Function
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
            RG_ChnageReuquest.Rebind()
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

End Class
