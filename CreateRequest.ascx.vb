'Author: Bindhu John
'Risk Calculator Project
Imports System.Web.HttpContext
Imports System.Data.SqlClient

Public Class CreateRequest
    Inherits System.Web.UI.UserControl
    Dim sqlCon As New SqlDataProvider.SqlDatabase(ConfigurationManager.ConnectionStrings("DBConn").ConnectionString)
    Dim constring As String = ConfigurationManager.ConnectionStrings("DBConn").ConnectionString
    Dim RequestList As DataTable
    Dim dr As SqlDataReader
    Dim UserTypeId As Integer
    Private _dataItem As Object = Nothing

    Public Property DataItem() As Object
        Get
            Return Me._dataItem
        End Get
        Set(ByVal value As Object)
            Me._dataItem = value
        End Set
    End Property
    'Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
    '    Dim tid As Object = DataBinder.Eval(DataItem, "ID")

    '    If Not tid Is Nothing Then

    '        If tid.ToString().Equals("") Then
    '            btnUpdate.Visible = False
    '            btnInsert.Visible = True

    '            TxtNumber.Text = String.Empty
    '            TxtOpended.Text = String.Empty
    '            TxtCoPenDate.Text = String.Empty
    '            TxtRequestor.Text = String.Empty
    '            TxtRequestedby.Text = String.Empty
    '            RCApproval.Text = String.Empty
    '            TxtAssingnto.Text = String.Empty
    '            TxtDescription.Text = String.Empty
    '            TxtAssingnment.Text = String.Empty
    '            TxtShortDescription.Text = String.Empty
    '            TxtDescription.Text = String.Empty
    '            'RCState.Text = row("StatusID")
    '            RCType.Text = String.Empty
    '        Else
    '            btnUpdate.Visible = True
    '            btnInsert.Visible = False
    '            Dim dt As New DataTable
    '            dt = New DataTable("RequestEdit")

    '            Dim param(0) As SqlParameter
    '            param(0) = New SqlParameter("@ID", SqlDbType.NVarChar, 500)
    '            param(0).Value = tid

    '            dr = sqlCon.ExecuteReader("SP_GetRequestById", CommandType.StoredProcedure, param)
    '            dt.Load(dr)
    '            Try
    '                If (dt.Rows.Count > 0) Then
    '                    For Each row As DataRow In dt.Rows
    '                        TxtNumber.Text = row("Number")
    '                        TxtOpended.Text = row("Opened")
    '                        TxtCoPenDate.Text = row("CustomerOpenedDte")
    '                        TxtRequestor.Text = row("Requestor")
    '                        TxtRequestedby.Text = row("RequestedBy")
    '                        RCApproval.Text = row("Approval")
    '                        TxtAssingnto.Text = row("AssignedTo")
    '                        TxtAssingnment.Text = row("AssignedGroup")
    '                        TxtShortDescription.Text = row("ShortDescription")
    '                        TxtDescription.Text = row("Description")
    '                        'RCState.Text = row("StatusID")
    '                        RCType.Text = row("Type")


    '                    Next

    '                End If
    '            Catch ex As Exception

    '            End Try
    '        End If
    '    Else
    '        btnUpdate.Visible = False
    '        btnInsert.Visible = True

    '        TxtNumber.Text = String.Empty
    '        TxtOpended.Text = String.Empty
    '        TxtCoPenDate.Text = String.Empty
    '        TxtRequestor.Text = String.Empty
    '        TxtRequestedby.Text = String.Empty
    '        RCApproval.Text = String.Empty
    '        TxtAssingnto.Text = String.Empty
    '        TxtDescription.Text = String.Empty
    '        TxtAssingnment.Text = String.Empty
    '        TxtShortDescription.Text = String.Empty
    '        TxtDescription.Text = String.Empty
    '        'RCState.Text = row("StatusID")
    '        RCType.Text = String.Empty
    '    End If

    'End Sub

    Protected Overrides Sub OnInit(ByVal e As System.EventArgs)
        ' this assigns Page_PreLoad as the event handler 
        'For the PreLoad event of the Control's Page property
        AddHandler Me.DataBinding, AddressOf UserControl_Request_DataBinding
        MyBase.OnInit(e)
    End Sub
    Dim m_iUserid As Integer
    Private Sub UserControl_Request_DataBinding(ByVal sender As Object, ByVal e As System.EventArgs)

        Dim RowCount As Integer = 1
        Dim Number As String = String.Empty
        Try
            m_iUserid = Convert.ToInt32(Session("UserID"))

            '        ScriptManager.RegisterClientScriptBlock(
            'Me.Page,
            'Me.GetType(),
            '"WebUserControlSript",
            '"GoAddEdit();",
            'True)
        Catch ex As Exception

        End Try
        'Dim tid As Object = DataBinder.Eval(DataItem, "UserId")
        Dim tid As Object = DataBinder.Eval(DataItem, "ID")
        RadPageUserInfo.Selected = True
        Dim random As New Random

        Dim dt As New DataTable("Request")
        Dim StatusList As New DataTable("Status")
        Dim AssignToList As New DataTable("AssignTo")
        Dim RiskList As New DataTable("Risk")
        Dim RiskQquestionList As New DataTable("RiskQuestions")
        Dim RFC As New DataTable("RFC")
        Dim Types As New DataTable("type")
        Dim ds As New DataSet
        Dim TopId As New DataTable("topid")
        ds = New DataSet("RequestEdit")

        If Not tid Is Nothing Then
            ScriptManager.RegisterClientScriptBlock(
Me.Page,
Me.GetType(),
"WebUserControlSript",
"GoAddEdit();",
True)
            Dim dbid As String = String.Empty
            Dim db_id As String = String.Empty
            If tid.ToString().Equals("") Then
                TxtOpended.SelectedDate = DateTime.Now
                TxtCoPenDate.SelectedDate = DateTime.Now
                Dim param(2) As SqlParameter
                param(0) = New SqlParameter("@ID", SqlDbType.NVarChar, 500)
                param(0).Value = 0
                param(1) = New SqlParameter("@ActionType", SqlDbType.Int)
                param(1).Value = 2
                param(2) = New SqlParameter("@UserId", SqlDbType.Int)
                param(2).Value = m_iUserid

                ds = sqlCon.FillDataset("SP_GetRequestById", CommandType.StoredProcedure, param)
                StatusList = ds.Tables(1)
                AssignToList = ds.Tables(2)
                TopId = ds.Tables(7)
                Try
                    Dim Num As String = String.Empty
                    If (TopId.Rows.Count > 0) Then
                        Num = TopId.Rows(0)("Number").ToString
                        If (Num = String.Empty) Then
                            Number = RowCount.ToString().PadLeft(8, "0")
                        Else
                            Num = Num.Replace("CHG", "")
                            Number = (Convert.ToInt32(Num) + 1).ToString().PadLeft(8, "0")
                        End If
                    Else
                        Number = RowCount.ToString().PadLeft(8, "0")
                    End If

                Catch ex As Exception

                End Try
                Try
                    RCStatus.DataSource = StatusList
                    RCStatus.DataValueField = "ID"
                    RCStatus.DataTextField = "StatusName"
                    RCStatus.DataBind()

                    RCAssignTo.DataSource = AssignToList
                    RCAssignTo.DataBind()

                    RCBRequestor.DataSource = AssignToList
                    RCBRequestor.DataBind()

                    RCBRequestedBy.DataSource = AssignToList
                    RCBRequestedBy.DataBind()

                Catch ex As Exception

                End Try


                TxtNumber.Text = "CHG" + Number

                btnUpdate.Visible = False
                btnInsert.Visible = True
                BtnRistSubmit.Visible = False
                BtnSave1.Visible = True
                BtnUpdate1.Visible = False

                'TxtOpended.SelectedDate = ""
                Txtbackout.Text = ""
                RCBRequestor.Text = String.Empty
                RCBRequestedBy.Text = String.Empty
                RCApproval.Text = String.Empty
                RCAssignTo.Text = String.Empty
                TxtDescription.Text = String.Empty
                TxtAssingnment.Text = String.Empty
                TxtShortDescription.Text = String.Empty
                TxtDescription.Text = String.Empty
                TxtDeployment.Text = ""
                RCType.Text = String.Empty
            Else
                hfvalue.Value = tid
                BtnSave1.Visible = False
                Try
                    m_iUserid = Convert.ToInt32(Session("UserID"))
                Catch ex As Exception

                End Try
                Dim editanswer1 As Integer
                Dim editanswer2 As Integer
                Dim editanswer3 As Integer
                Dim Status_ As Integer
                Dim param(2) As SqlParameter
                param(0) = New SqlParameter("@ID", SqlDbType.NVarChar, 500)
                param(0).Value = tid
                param(1) = New SqlParameter("@ActionType", SqlDbType.Int)
                param(1).Value = 1
                param(2) = New SqlParameter("@UserId", SqlDbType.Int)
                param(2).Value = m_iUserid

                ds = sqlCon.FillDataset("SP_GetRequestById", CommandType.StoredProcedure, param)
                dt = ds.Tables(0)
                StatusList = ds.Tables(1)
                AssignToList = ds.Tables(2)
                RiskList = ds.Tables(3)
                RiskQquestionList = ds.Tables(4)
                RFC = ds.Tables(5)
                Types = ds.Tables(6)

                Try
                    RCStatus.DataSource = StatusList
                    RCStatus.DataValueField = "ID"
                    RCStatus.DataTextField = "StatusName"
                    RCStatus.DataBind()

                    RCAssignTo.DataSource = AssignToList
                    RCAssignTo.DataBind()

                    RCBRequestor.DataSource = AssignToList
                    RCBRequestor.DataBind()

                    RCBRequestedBy.DataSource = AssignToList
                    RCBRequestedBy.DataBind()

                    UserTypeId = Types.Rows(0)("UserTypeID").ToString()
                Catch ex As Exception

                End Try
                Try
                    Dim rowint As Integer = 0
                    For Each row As DataRow In RFC.Rows
                        rowint = rowint + 1
                        If (rowint = 1) Then
                            editanswer1 = row("AnswerID")
                        End If
                        If (rowint = 2) Then
                            editanswer2 = row("AnswerID")
                        End If
                        If (rowint = 3) Then
                            editanswer3 = row("AnswerID")
                        End If
                    Next

                Catch ex As Exception

                End Try
                Try
                    If (dt.Rows.Count > 0) Then
                        For Each row As DataRow In dt.Rows
                            TxtNumber.Text = row("Number")
                            TxtOpended.SelectedDate = row("Opened")
                            TxtCoPenDate.SelectedDate = row("CustomerOpenedDte")
                            RCBRequestor.SelectedValue = Convert.ToInt32(row("Requestor"))
                            RCBRequestedBy.SelectedValue = Convert.ToInt32(row("RequestedBy"))
                            RCApproval.Text = row("Approval")
                            RCAssignTo.SelectedValue = Convert.ToInt32(row("AssignedTo"))
                            TxtAssingnment.Text = row("AssignedGroup")
                            TxtShortDescription.Text = row("ShortDescription")
                            TxtDescription.Text = row("Description")
                            RCStatus.SelectedValue = Convert.ToInt32(row("StatusID"))
                            Status_ = Convert.ToInt32(row("StatusID"))
                            TxtDeployment.Text = row("Deployment")
                            Txtbackout.Text = row("Backout")
                            RCType.SelectedItem.Text = row("Type")

                            If (row("StatusID") = 2 And UserTypeId = 3) Then
                                BtnApprove.Visible = True
                                BtnReject.Visible = True
                                BtnReject1.Visible = True
                                BtnApprove1.Visible = True
                            Else
                                BtnApprove.Visible = False
                                BtnReject.Visible = False
                                BtnReject1.Visible = False
                                BtnApprove1.Visible = False
                            End If
                            If (row("StatusID") = 2) Then
                                BtnRistSubmit.Visible = False
                                btnInsert.Visible = False
                                btnUpdate.Visible = False
                                BtnSaveAndSubmit.Visible = False
                                BtnSaveandSubmit1.Visible = False
                                BtnSave1.Visible = False
                                BtnUpdate1.Visible = False
                            Else
                                btnUpdate.Visible = True
                                BtnUpdate1.Visible = True
                            End If
                            If (row("StatusID") <> 2 And UserTypeId = 3) Then
                                BtnRistSubmit.Visible = False
                                btnInsert.Visible = False
                                btnUpdate.Visible = False
                                BtnSaveAndSubmit.Visible = False
                                BtnSaveandSubmit1.Visible = False
                                BtnSave1.Visible = False
                                BtnUpdate1.Visible = False
                            End If
                            If (row("StatusID") = 1 And UserTypeId = 2) Then
                                BtnRistSubmit.Visible = True
                                BtnSaveAndSubmit.Visible = True
                                BtnSaveandSubmit1.Visible = True
                            Else
                                BtnRistSubmit.Visible = False
                                BtnSaveAndSubmit.Visible = False
                                btnUpdate.Visible = False
                                BtnSaveandSubmit1.Visible = False
                                BtnUpdate1.Visible = False

                            End If
                            If (row("StatusID") = 4 And (UserTypeId = 4 Or UserTypeId = 5)) Then
                                BtnAssign.Visible = True
                                BtnAssign1.Visible = True
                            Else
                                BtnAssign1.Visible = False
                                BtnAssign.Visible = False
                            End If
                            If (row("StatusID") = 6 And (UserTypeId = 4)) Then
                                BtnReview.Visible = True
                                BtnReview1.Visible = True
                            Else
                                BtnReview.Visible = False
                                BtnReview1.Visible = False
                            End If
                            If (row("StatusID") = 7 And (UserTypeId = 5)) Then
                                BtnClosed.Visible = True
                                BtnClosed1.Visible = True
                            Else
                                BtnClosed.Visible = False
                                BtnClosed1.Visible = False
                            End If
                            If (row("CreatedBy") = m_iUserid And row("StatusID") >= 2 And UserTypeId = 2) Then

                                'RadPageUserInfo.Selected = False
                                'RadPagePersonalInfo.Selected = True
                                'RadTfabStrip1.Tabs(0).Selected = False
                                'RadTfabStrip1.Tabs(1).Selected = True

                                Disabledform()

                            End If

                        Next

                    End If
                Catch ex As Exception

                End Try

                Try
                    Dim i1 As Integer = 0
                    If (RiskQquestionList.Rows.Count > 0) Then
                        For Each row As DataRow In RiskQquestionList.Rows
                            i1 = i1 + 1

                            If (i1 = 1) Then
                                LblComplex.InnerText = row("ShortText")
                            End If
                            If (i1 = 2) Then
                                LblVerify.InnerText = row("ShortText")
                            End If
                            If (i1 = 3) Then
                                LblDiffcult.InnerText = row("ShortText")
                            End If


                        Next

                    End If
                    Dim ccount As Integer = 0
                    Dim vcount As Integer = 0
                    Dim dcount As Integer = 0
                    If (RiskList.Rows.Count > 0) Then
                        For Each row As DataRow In RiskList.Rows


                            Dim text As String = row("Answertext").ToString.Replace(" ", "")
                            If (row("QuestionID") = 1) Then
                                ccount = ccount + 1
                                RBLComplex.Items.Add(New ListItem(text, row("AnswerID")))
                                If (editanswer1 = row("AnswerID")) Then
                                    RBLComplex.Items(ccount - 1).Selected = True
                                End If
                                If (Status_ = 2 And ccount = 1) Then
                                    RBLComplex.Items(0).Selected = True
                                End If
                            End If
                            If (row("QuestionID") = 2) Then
                                vcount = vcount + 1
                                RBLVerify.Items.Add(New ListItem(text, row("AnswerID")))
                                If (editanswer2 = row("AnswerID")) Then
                                    RBLVerify.Items(vcount - 1).Selected = True
                                End If
                                If (Status_ = 2 And vcount = 1) Then
                                    RBLVerify.Items(0).Selected = True
                                End If

                            End If
                            If (row("QuestionID") = 3) Then
                                dcount = dcount + 1
                                RBLDifficult.Items.Add(New ListItem(text, row("AnswerID")))
                                If (editanswer3 = row("AnswerID")) Then
                                    RBLDifficult.Items(dcount - 1).Selected = True
                                End If
                                If (Status_ = 2 And dcount = 1) Then
                                    RBLDifficult.Items(0).Selected = True
                                End If

                            End If
                        Next
                    End If
                Catch ex As Exception

                End Try




                btnInsert.Visible = False
                Dim InfoMessage As String = ""
                If (Status_ = 1) Then
                    InfoMessage = "Request ticket status - <b>New</b>"
                End If
                If (Status_ = 2) Then
                    InfoMessage = "Request ticket status - <b>Open.</b>" + "      " + "The request ticket is <b>waiting for Approval.</b>"
                End If
                If (Status_ = 4) Then
                    InfoMessage = "Request ticket status - <b>Approved.</b>" + "      " + "The request ticket is <b>waiting for Pending implementation.</b>"
                End If
                If (Status_ = 5) Then
                    InfoMessage = "The request ticket has been <b>Rejected!..</b>"
                End If
                If (Status_ = 6) Then
                    InfoMessage = "Request ticket status - <b>Pending Implementation.</b>" + "      " + "The request ticket <b>waiting for Review.</b>"
                End If
                If (Status_ = 7) Then
                    InfoMessage = "Request ticket status - <b>Review.</b>" + "      " + "The request ticket waiting for completion."
                End If
                If (Status_ = 8) Then
                    InfoMessage = "Request ticket status - <b>Closed.</b>"
                End If
                ScriptManager.RegisterClientScriptBlock(
  Me.Page,
  Me.GetType(),
  "WebUserControlSript",
  "InformationMessage('" + InfoMessage + "');GoAddEdit();",
  True)
            End If
        Else

            btnUpdate.Visible = False
            btnInsert.Visible = True
            BtnSave1.Visible = True
            BtnUpdate1.Visible = False
            TxtNumber.Text = String.Empty
            'TxtOpended.SelectedDate = ""
            'TxtCoPenDate.SelectedDate = ""
            RCBRequestor.Text = String.Empty
            RCBRequestedBy.Text = String.Empty
            RCApproval.Text = String.Empty
            RCAssignTo.Text = String.Empty
            TxtDescription.Text = String.Empty
            TxtAssingnment.Text = String.Empty
            TxtShortDescription.Text = String.Empty
            TxtDescription.Text = String.Empty
            'RCState.Text = row("StatusID")
            RCType.Text = String.Empty
        End If

    End Sub
    Sub Disabledform()
        TxtNumber.Enabled = False
        TxtOpended.Enabled = False
        TxtCoPenDate.Enabled = False
        RCType.Enabled = False
        RCBRequestedBy.Enabled = False
        RCApproval.Enabled = False
        RCStatus.Enabled = False
        RCAssignTo.Enabled = False
        TxtAssingnment.Enabled = False
        TxtShortDescription.Enabled = False
        TxtDescription.Enabled = False
        RCBRequestor.Enabled = False
        btnInsert.Enabled = False
        btnUpdate.Enabled = False
        TxtDeployment.Enabled = False
        Txtbackout.Enabled = False

    End Sub
    'update the video file
    Sub UpdateVideo(ByVal ID As Integer)
        Dim sqlCon As New SqlDataProvider.SqlDatabase(ConfigurationManager.ConnectionStrings("DBConn").ConnectionString)
        '----------Delete youtube id from youtube --------------------
        Dim params(1) As SqlParameter
        params(0) = New SqlParameter("@ActionType", SqlDbType.Int)
        params(0).Value = 7  ' Action Type --> 7 >> Delete   Action Type --> 2 >> Active Action Type --> 3 >> Deactive  
        params(1) = New SqlParameter("@ID", SqlDbType.Int)
        params(1).Value = ID
        sqlCon.ExecuteNonQuery("SP_ManageRequest", CommandType.StoredProcedure, params)

        ScriptManager.RegisterStartupScript(Me, [GetType](), "DeleteVideo", "SportEventCreatedConfirmation('Your video has been successfully deleted.');", True)

    End Sub

    Protected Sub btnInsert_Click(ByVal sender As Object, ByVal e As EventArgs) Handles btnInsert.Click, BtnSave1.Click
        Dim sqlCon As New SqlDataProvider.SqlDatabase(ConfigurationManager.ConnectionStrings("DBConn").ConnectionString)
        Dim ObjContants As New Constants
        Try
            m_iUserid = Convert.ToInt32(Session("UserID"))
        Catch ex As Exception

        End Try
        '----------Delete youtube id from youtube --------------------
        Dim params(17) As SqlParameter

        params(0) = New SqlParameter("@ActionType", SqlDbType.Int)
        params(0).Value = 1  ' Action Type --> 1 >> New   Action Type --> 2 >> Open Action Type --> 3 >> Submit for approval
        params(1) = New SqlParameter("@ID", SqlDbType.Int)
        params(1).Value = 0
        params(2) = New SqlParameter("@Number", SqlDbType.VarChar, 200)
        params(2).Value = TxtNumber.Text.Trim()
        params(3) = New SqlParameter("@Opened", SqlDbType.DateTime)
        params(3).Value = TxtOpended.SelectedDate
        params(4) = New SqlParameter("@CustomerOpenedDte", SqlDbType.DateTime)
        params(4).Value = TxtCoPenDate.SelectedDate
        params(5) = New SqlParameter("@Type", SqlDbType.VarChar, 200)
        params(5).Value = RCType.Text
        params(6) = New SqlParameter("@RequestedBy", SqlDbType.Int)
        params(6).Value = RCBRequestedBy.SelectedItem.Value.Trim
        params(7) = New SqlParameter("@Approval", SqlDbType.VarChar, 200)
        params(7).Value = RCApproval.Text.Trim
        params(8) = New SqlParameter("@StatusID", SqlDbType.Int)
        params(8).Value = RCStatus.SelectedItem.Value
        params(9) = New SqlParameter("@AssignedTo", SqlDbType.Int)
        params(9).Value = RCAssignTo.SelectedItem.Value
        params(10) = New SqlParameter("@AssignedGroup", SqlDbType.NVarChar, 300)
        params(10).Value = TxtAssingnment.Text
        params(11) = New SqlParameter("@ShortDescription", SqlDbType.NVarChar, 100)
        params(11).Value = TxtShortDescription.Text
        params(12) = New SqlParameter("@Description", SqlDbType.NVarChar, 8000)
        params(12).Value = TxtDescription.Text
        params(13) = New SqlParameter("@Requestor", SqlDbType.Int)
        params(13).Value = RCBRequestor.SelectedItem.Value.Trim
        params(14) = New SqlParameter("@Deployment", SqlDbType.NVarChar, 500)
        params(14).Value = TxtDeployment.Text
        params(15) = New SqlParameter("@Backout", SqlDbType.NVarChar, 500)
        params(15).Value = Txtbackout.Text.Trim
        params(16) = New SqlParameter("@ReturnID", SqlDbType.Int)
        params(16).Direction = ParameterDirection.Output
        params(17) = New SqlParameter("@CreatedBy", SqlDbType.Int)
        params(17).Value = m_iUserid
        sqlCon.ExecuteNonQuery("SP_ManageRequest", CommandType.StoredProcedure, params)

        ScriptManager.RegisterClientScriptBlock(
      Me.Page,
      Me.GetType(),
      "WebUserControlSript",
      "SaveCookie(1);",
      True)
        'Response.Redirect("~/Request/ChangeRequest.aspx", False)
    End Sub

    Protected Sub btnUpdate_Click(ByVal sender As Object, ByVal e As EventArgs) Handles btnUpdate.Click, BtnUpdate1.Click
        Dim sqlCon As New SqlDataProvider.SqlDatabase(ConfigurationManager.ConnectionStrings("DBConn").ConnectionString)
        Dim ObjContants As New Constants
        Try
            m_iUserid = Convert.ToInt32(Session("UserID"))
        Catch ex As Exception

        End Try
        '----------Delete youtube id from youtube --------------------
        Dim tid As Object = DataBinder.Eval(DataItem, "ID")
        Dim val As Integer = CType(hfvalue.Value, Integer)
        Dim params(17) As SqlParameter
        params(0) = New SqlParameter("@ActionType", SqlDbType.Int)
        params(0).Value = 2 ' Action Type --> 1 >> New   Action Type --> 2 >> Open Action Type --> 3 >> Submit for approval
        params(1) = New SqlParameter("@ID", SqlDbType.Int)
        params(1).Value = val
        params(2) = New SqlParameter("@Number", SqlDbType.VarChar, 200)
        params(2).Value = TxtNumber.Text.Trim()
        params(3) = New SqlParameter("@Opened", SqlDbType.DateTime)
        params(3).Value = TxtOpended.SelectedDate
        params(4) = New SqlParameter("@CustomerOpenedDte", SqlDbType.DateTime)
        params(4).Value = TxtCoPenDate.SelectedDate
        params(5) = New SqlParameter("@Type", SqlDbType.VarChar, 200)
        params(5).Value = RCType.Text
        params(6) = New SqlParameter("@RequestedBy", SqlDbType.Int)
        params(6).Value = RCBRequestedBy.SelectedItem.Value.Trim
        params(7) = New SqlParameter("@Approval", SqlDbType.VarChar, 200)
        params(7).Value = RCApproval.Text.Trim
        params(8) = New SqlParameter("@StatusID", SqlDbType.Int)
        params(8).Value = RCStatus.SelectedItem.Value
        params(9) = New SqlParameter("@AssignedTo", SqlDbType.Int)
        params(9).Value = RCAssignTo.SelectedItem.Value
        params(10) = New SqlParameter("@AssignedGroup", SqlDbType.NVarChar, 300)
        params(10).Value = TxtAssingnment.Text
        params(11) = New SqlParameter("@ShortDescription", SqlDbType.NVarChar, 100)
        params(11).Value = TxtShortDescription.Text
        params(12) = New SqlParameter("@Description", SqlDbType.NVarChar, 8000)
        params(12).Value = TxtDescription.Text
        params(13) = New SqlParameter("@Requestor", SqlDbType.Int)
        params(13).Value = RCBRequestor.SelectedItem.Value.Trim
        params(14) = New SqlParameter("@Deployment", SqlDbType.NVarChar, 500)
        params(14).Value = TxtDeployment.Text
        params(15) = New SqlParameter("@Backout", SqlDbType.NVarChar, 500)
        params(15).Value = Txtbackout.Text.Trim
        params(16) = New SqlParameter("@ReturnID", SqlDbType.Int)
        params(16).Direction = ParameterDirection.Output
        params(17) = New SqlParameter("@CreatedBy", SqlDbType.Int)
        params(17).Value = m_iUserid

        sqlCon.ExecuteNonQuery("SP_ManageRequest", CommandType.StoredProcedure, params)

        'Response.Redirect("~/Request/ChangeRequest.aspx?T=u",f)
        ScriptManager.RegisterClientScriptBlock(
        Me.Page,
        Me.GetType(),
        "WebUserControlSript",
        "SaveCookie(2);",
        True)
    End Sub

    Protected Sub BtnSaveAndSubmit_Click(ByVal sender As Object, ByVal e As EventArgs) Handles BtnSaveAndSubmit.Click, BtnSaveandSubmit1.Click
        Dim sqlCon As New SqlDataProvider.SqlDatabase(ConfigurationManager.ConnectionStrings("DBConn").ConnectionString)
        Dim ObjContants As New Constants
        Dim vals As Integer
        Dim val1 As Integer
        Try
            m_iUserid = Convert.ToInt32(Session("UserID"))
        Catch ex As Exception

        End Try
        '----------Delete youtube id from youtube --------------------
        If (hfvalue.Value.Equals("")) Then
            Dim params(17) As SqlParameter
            Dim val As Integer = 0
            params(0) = New SqlParameter("@ActionType", SqlDbType.Int)
            params(0).Value = 4 ' Action Type --> 1 >> New   Action Type --> 2 >> Open Action Type --> 3 >> Submit for approval  
            params(1) = New SqlParameter("@ID", SqlDbType.Int)
            params(1).Value = val
            params(2) = New SqlParameter("@Number", SqlDbType.VarChar, 200)
            params(2).Value = TxtNumber.Text.Trim()
            params(3) = New SqlParameter("@Opened", SqlDbType.DateTime)
            params(3).Value = TxtOpended.SelectedDate
            params(4) = New SqlParameter("@CustomerOpenedDte", SqlDbType.DateTime)
            params(4).Value = TxtCoPenDate.SelectedDate
            params(5) = New SqlParameter("@Type", SqlDbType.VarChar, 200)
            params(5).Value = RCType.Text
            params(6) = New SqlParameter("@RequestedBy", SqlDbType.Int)
            params(6).Value = RCBRequestedBy.SelectedItem.Value.Trim
            params(7) = New SqlParameter("@Approval", SqlDbType.VarChar, 200)
            params(7).Value = RCApproval.Text.Trim
            params(8) = New SqlParameter("@StatusID", SqlDbType.Int)
            params(8).Value = ObjContants.RequestNew
            params(9) = New SqlParameter("@AssignedTo", SqlDbType.Int)
            params(9).Value = RCAssignTo.SelectedItem.Value
            params(10) = New SqlParameter("@AssignedGroup", SqlDbType.NVarChar, 300)
            params(10).Value = TxtAssingnment.Text
            params(11) = New SqlParameter("@ShortDescription", SqlDbType.NVarChar, 100)
            params(11).Value = TxtShortDescription.Text
            params(12) = New SqlParameter("@Description", SqlDbType.NVarChar, 8000)
            params(12).Value = TxtDescription.Text
            params(13) = New SqlParameter("@Requestor", SqlDbType.Int)
            params(13).Value = RCBRequestor.SelectedItem.Value.Trim
            params(14) = New SqlParameter("@Deployment", SqlDbType.NVarChar, 500)
            params(14).Value = TxtDeployment.Text
            params(15) = New SqlParameter("@Backout", SqlDbType.NVarChar, 500)
            params(15).Value = Txtbackout.Text.Trim
            params(16) = New SqlParameter("@ReturnID", SqlDbType.Int)
            params(16).Direction = ParameterDirection.Output
            params(17) = New SqlParameter("@CreatedBy", SqlDbType.Int)
            params(17).Value = m_iUserid
            sqlCon.ExecuteNonQuery("SP_ManageRequest", CommandType.StoredProcedure, params)
            If Not params(16).Value Is DBNull.Value Then
                vals = CInt(params(16).Value)
            Else
                vals = val1
            End If

            ScriptManager.RegisterClientScriptBlock(
Me.Page,
Me.GetType(),
"WebUserControlSript",
"SubmitCookie(4);",
True)

        Else
            Dim params(17) As SqlParameter
            Dim val As Integer = CType(hfvalue.Value, Integer)
            params(0) = New SqlParameter("@ActionType", SqlDbType.Int)
            params(0).Value = 3 ' Action Type --> 1 >> New   Action Type --> 2 >> Open Action Type --> 3 >> Submit for approval  
            params(1) = New SqlParameter("@ID", SqlDbType.Int)
            params(1).Value = val
            val1 = val
            params(2) = New SqlParameter("@Number", SqlDbType.VarChar, 200)
            params(2).Value = TxtNumber.Text.Trim()
            params(3) = New SqlParameter("@Opened", SqlDbType.DateTime)
            params(3).Value = TxtOpended.SelectedDate
            params(4) = New SqlParameter("@CustomerOpenedDte", SqlDbType.DateTime)
            params(4).Value = TxtCoPenDate.SelectedDate
            params(5) = New SqlParameter("@Type", SqlDbType.VarChar, 200)
            params(5).Value = RCType.Text
            params(6) = New SqlParameter("@RequestedBy", SqlDbType.Int)
            params(6).Value = RCBRequestedBy.SelectedItem.Value.Trim
            params(7) = New SqlParameter("@Approval", SqlDbType.VarChar, 200)
            params(7).Value = RCApproval.Text.Trim
            params(8) = New SqlParameter("@StatusID", SqlDbType.Int)
            params(8).Value = ObjContants.RequestNew
            params(9) = New SqlParameter("@AssignedTo", SqlDbType.Int)
            params(9).Value = RCAssignTo.SelectedItem.Value
            params(10) = New SqlParameter("@AssignedGroup", SqlDbType.NVarChar, 300)
            params(10).Value = TxtAssingnment.Text
            params(11) = New SqlParameter("@ShortDescription", SqlDbType.NVarChar, 100)
            params(11).Value = TxtShortDescription.Text
            params(12) = New SqlParameter("@Description", SqlDbType.NVarChar, 8000)
            params(12).Value = TxtDescription.Text
            params(13) = New SqlParameter("@Requestor", SqlDbType.Int)
            params(13).Value = RCBRequestor.SelectedItem.Value.Trim
            params(14) = New SqlParameter("@Deployment", SqlDbType.NVarChar, 500)
            params(14).Value = TxtDeployment.Text
            params(15) = New SqlParameter("@Backout", SqlDbType.NVarChar, 500)
            params(15).Value = Txtbackout.Text.Trim
            params(16) = New SqlParameter("@ReturnID", SqlDbType.Int)
            params(16).Direction = ParameterDirection.Output
            params(17) = New SqlParameter("@CreatedBy", SqlDbType.Int)
            params(17).Value = m_iUserid
            sqlCon.ExecuteNonQuery("SP_ManageRequest", CommandType.StoredProcedure, params)
            If Not params(16).Value Is DBNull.Value Then
                vals = CInt(params(16).Value)
            Else
                vals = val1
            End If
            ScriptManager.RegisterClientScriptBlock(
Me.Page,
Me.GetType(),
"WebUserControlSript",
"SubmitCookie(4);",
True)
        End If


        TxtNumber.Enabled = False
        TxtOpended.Enabled = False
        TxtCoPenDate.Enabled = False
        RCType.Enabled = False
        RCBRequestedBy.Enabled = False
        RCApproval.Enabled = False
        RCStatus.Enabled = False
        RCAssignTo.Enabled = False
        TxtAssingnment.Enabled = False
        TxtShortDescription.Enabled = False
        TxtDescription.Enabled = False
        RCBRequestor.Enabled = False
        btnInsert.Enabled = False
        btnUpdate.Enabled = False
        RadPageUserInfo.Selected = False
        RadPagePersonalInfo.Selected = True

        Dim dt As New DataTable("Request")
        Dim StatusList As New DataTable("Status")
        Dim AssignToList As New DataTable("AssignTo")
        Dim RiskList As New DataTable("Risk")
        Dim RiskQquestionList As New DataTable("RiskQuestions")
        Dim RFC As New DataTable("RFC")
        Dim Types As New DataTable
        Dim ds As New DataSet
        ds = New DataSet("RequestEdit")

        hfvalue.Value = vals
        Try
            m_iUserid = Convert.ToInt32(Session("UserID"))
        Catch ex As Exception

        End Try
        Dim editanswer1 As Integer
        Dim editanswer2 As Integer
        Dim editanswer3 As Integer
        Dim Status_ As Integer
        Dim param(2) As SqlParameter
        param(0) = New SqlParameter("@ID", SqlDbType.NVarChar, 500)
        param(0).Value = vals
        param(1) = New SqlParameter("@ActionType", SqlDbType.Int)
        param(1).Value = 1
        param(2) = New SqlParameter("@UserId", SqlDbType.Int)
        param(2).Value = m_iUserid

        ds = sqlCon.FillDataset("SP_GetRequestById", CommandType.StoredProcedure, param)
        dt = ds.Tables(0)
        StatusList = ds.Tables(1)
        AssignToList = ds.Tables(2)
        RiskList = ds.Tables(3)
        RiskQquestionList = ds.Tables(4)
        RFC = ds.Tables(5)
        Types = ds.Tables(6)

        Try
            RCStatus.DataSource = StatusList
            RCStatus.DataValueField = "ID"
            RCStatus.DataTextField = "StatusName"
            RCStatus.DataBind()

            RCAssignTo.DataSource = AssignToList
            RCAssignTo.DataBind()


            RCBRequestor.DataSource = AssignToList
            RCBRequestor.DataBind()

            RCBRequestedBy.DataSource = AssignToList
            RCBRequestedBy.DataBind()
            UserTypeId = Types.Rows(0)("UserTypeID").ToString()
        Catch ex As Exception

        End Try
        Try
            Dim rowint As Integer = 0
            For Each row As DataRow In RFC.Rows
                rowint = rowint + 1
                If (rowint = 1) Then
                    editanswer1 = row("AnswerID")
                End If
                If (rowint = 2) Then
                    editanswer2 = row("AnswerID")
                End If
                If (rowint = 3) Then
                    editanswer3 = row("AnswerID")
                End If
            Next

        Catch ex As Exception

        End Try
        Try
            If (dt.Rows.Count > 0) Then
                For Each row As DataRow In dt.Rows
                    Status_ = Convert.ToInt32(row("StatusID"))
                    If (row("StatusID") = 2 And UserTypeId = 3) Then
                        BtnApprove.Visible = True
                        BtnReject.Visible = True
                        BtnReject1.Visible = True
                        BtnApprove1.Visible = True
                    Else
                        BtnApprove.Visible = False
                        BtnReject.Visible = False
                        BtnReject1.Visible = False
                        BtnApprove1.Visible = False
                    End If
                    If (row("StatusID") = 2) Then
                        BtnRistSubmit.Visible = False
                        btnInsert.Visible = False
                        btnUpdate.Visible = False
                        BtnSaveAndSubmit.Visible = False
                        BtnSaveandSubmit1.Visible = False
                        BtnSave1.Visible = False
                        BtnUpdate1.Visible = False
                    Else
                        btnUpdate.Visible = True
                        BtnUpdate1.Visible = True
                   
                    End If
                    If (row("StatusID") <> 2 And UserTypeId = 3) Then
                        BtnRistSubmit.Visible = False
                        btnInsert.Visible = False
                        btnUpdate.Visible = False
                        BtnSaveAndSubmit.Visible = False
                        BtnSaveandSubmit1.Visible = False
                        BtnSave1.Visible = False
                        BtnUpdate1.Visible = False
                    End If
                    If (row("StatusID") = 1 And UserTypeId = 2) Then
                        BtnRistSubmit.Visible = True
                        BtnSaveAndSubmit.Visible = True
                        BtnSaveandSubmit1.Visible = True
                    Else
                        BtnRistSubmit.Visible = False
                        BtnSaveAndSubmit.Visible = False
                        btnUpdate.Visible = False
                        BtnSaveandSubmit1.Visible = False
                        BtnUpdate1.Visible = False
                    End If
                    'If (row("StatusID") = 1) Then
                    '    PnlSecond.Visible = False
                    'Else
                    '    PnlSecond.Visible = True
                    'End If
                    If (row("StatusID") = 2) Then

                        TxtNumber.Enabled = False
                        TxtOpended.Enabled = False
                        TxtCoPenDate.Enabled = False
                        RCType.Enabled = False
                        RCBRequestedBy.Enabled = False
                        RCApproval.Enabled = False
                        RCStatus.Enabled = False
                        RCAssignTo.Enabled = False
                        TxtAssingnment.Enabled = False
                        TxtShortDescription.Enabled = False
                        TxtDescription.Enabled = False
                        RCBRequestor.Enabled = False
                        BtnSave1.Enabled = False
                        BtnUpdate1.Enabled = False
                        btnInsert.Enabled = False
                        btnUpdate.Enabled = False
                    End If
                Next
            End If
        Catch ex As Exception

        End Try

        Try
            Dim i As Integer = 0
            If (RiskQquestionList.Rows.Count > 0) Then
                For Each row As DataRow In RiskQquestionList.Rows
                    i = i + 1

                    If (i = 1) Then
                        LblComplex.InnerText = row("ShortText")
                    End If
                    If (i = 2) Then
                        LblVerify.InnerText = row("ShortText")
                    End If
                    If (i = 3) Then
                        LblDiffcult.InnerText = row("ShortText")
                    End If


                Next

            End If
            Dim ccount As Integer = 0
            Dim vcount As Integer = 0
            Dim dcount As Integer = 0
            If (RiskList.Rows.Count > 0) Then
                RBLComplex.Items.Clear()
                RBLVerify.Items.Clear()
                RBLDifficult.Items.Clear()
                For Each row As DataRow In RiskList.Rows


                    Dim text As String = row("Answertext").ToString.Replace(" ", "")
                    If (row("QuestionID") = 1) Then
                        ccount = ccount + 1
                        RBLComplex.Items.Add(New ListItem(text, row("AnswerID")))
                        If (editanswer1 = row("AnswerID")) Then
                            RBLComplex.Items(ccount - 1).Selected = True
                        End If
                        If (Status_ = 1 And ccount = 1) Then
                            RBLComplex.Items(0).Selected = True
                        End If
                    End If
                    If (row("QuestionID") = 2) Then
                        vcount = vcount + 1
                        RBLVerify.Items.Add(New ListItem(text, row("AnswerID")))
                        If (editanswer2 = row("AnswerID")) Then
                            RBLVerify.Items(vcount - 1).Selected = True
                        End If
                        If (Status_ = 1 And vcount = 1) Then
                            RBLVerify.Items(0).Selected = True
                        End If

                    End If
                    If (row("QuestionID") = 3) Then
                        dcount = dcount + 1
                        RBLDifficult.Items.Add(New ListItem(text, row("AnswerID")))
                        If (editanswer3 = row("AnswerID")) Then
                            RBLDifficult.Items(dcount - 1).Selected = True
                        End If
                        If (Status_ = 1 And dcount = 1) Then
                            RBLDifficult.Items(0).Selected = True
                        End If

                    End If
                Next
            End If
        Catch ex As Exception

        End Try


        BtnRistSubmit.Visible = True
        btnInsert.Visible = False
        RadPageUserInfo.Selected = False
        RadPagePersonalInfo.Selected = True
        RadTfabStrip1.Tabs(0).Selected = False
        RadTfabStrip1.Tabs(1).Selected = True



        ScriptManager.RegisterStartupScript(Me, [GetType](), "DeleteVideo", "SportEventCreatedConfirmation('Your request has been successfully submitted.');", True)
        'Response.Redirect("~/Request/ChangeRequest.aspx", False)
    End Sub
    Protected Sub BtnRistSubmit_Click(ByVal sender As Object, ByVal e As EventArgs) Handles BtnRistSubmit.Click
        Dim sqlCon As New SqlDataProvider.SqlDatabase(ConfigurationManager.ConnectionStrings("DBConn").ConnectionString)
        Dim ObjContants As New Constants
        Try
            m_iUserid = Convert.ToInt32(Session("UserID"))
        Catch ex As Exception

        End Try
        '----------Delete youtube id from youtube --------------------
        Dim tid As Object = DataBinder.Eval(DataItem, "ID")
        Dim val As Integer = CType(hfvalue.Value, Integer)
        Dim params(6) As SqlParameter

        params(0) = New SqlParameter("@ActionType", SqlDbType.Int)
        params(0).Value = 1 ' Action Type --> 1 >> New   Action Type --> 2 >> Open Action Type --> 3 >> Submit for approval
        params(1) = New SqlParameter("@ID", SqlDbType.Int)
        params(1).Value = val
        params(2) = New SqlParameter("@Number", SqlDbType.VarChar, 200)
        params(2).Value = TxtNumber.Text.Trim()
        params(3) = New SqlParameter("@StatusID", SqlDbType.Int)
        params(3).Value = ObjContants.RequestOpen
        'params(4) = New SqlParameter("@QuestionID", SqlDbType.Int)
        'params(4).Value =
        params(4) = New SqlParameter("@Complex", SqlDbType.Int)
        params(4).Value = RBLComplex.SelectedItem.Value
        params(5) = New SqlParameter("@Verify", SqlDbType.Int)
        params(5).Value = RBLVerify.SelectedItem.Value
        params(6) = New SqlParameter("@Difficult", SqlDbType.Int)
        params(6).Value = RBLDifficult.SelectedItem.Value

        sqlCon.ExecuteNonQuery("SP_ManageRist", CommandType.StoredProcedure, params)

        BtnRistSubmit.Visible = False

        ScriptManager.RegisterClientScriptBlock(
Me.Page,
Me.GetType(),
"WebUserControlSript",
"SaveCookie(4);",
True)
    End Sub
    Protected Sub BtnApprove_Click(ByVal sender As Object, ByVal e As EventArgs) Handles BtnApprove.Click, BtnApprove1.Click
        Dim ObjContants As New Constants
        UpdateStatus(ObjContants.RequestApprove)

    End Sub
    Protected Sub BtnAssign_Click(ByVal sender As Object, ByVal e As EventArgs) Handles BtnAssign1.Click, BtnAssign.Click
        Dim ObjContants As New Constants
        UpdateStatus(ObjContants.RequestPending)

    End Sub
    Protected Sub BtnReview_Click(ByVal sender As Object, ByVal e As EventArgs) Handles BtnReview.Click, BtnReview1.Click
        Dim ObjContants As New Constants
        UpdateStatus(ObjContants.RequestReview)

    End Sub
    Protected Sub BtnClosed_Click(ByVal sender As Object, ByVal e As EventArgs) Handles BtnClosed.Click, BtnClosed1.Click
        Dim ObjContants As New Constants
        UpdateStatus(ObjContants.RequestClosed)

    End Sub
    Sub UpdateStatus(ByVal action As Integer)
        Dim sqlCon As New SqlDataProvider.SqlDatabase(ConfigurationManager.ConnectionStrings("DBConn").ConnectionString)
        Dim ObjContants As New Constants
        Dim tid As Object = DataBinder.Eval(DataItem, "ID")
        Dim val As Integer = CType(hfvalue.Value, Integer)
        Try
            Try
                m_iUserid = Convert.ToInt32(Session("UserID"))
            Catch ex As Exception

            End Try
            '----------Delete youtube id from youtube --------------------

            Dim params(17) As SqlParameter
            params(0) = New SqlParameter("@ActionType", SqlDbType.Int)
            params(0).Value = 2 ' Action Type --> 1 >> New   Action Type --> 2 >> Open Action Type --> 3 >> Submit for approval
            params(1) = New SqlParameter("@ID", SqlDbType.Int)
            params(1).Value = val
            params(2) = New SqlParameter("@Number", SqlDbType.VarChar, 200)
            params(2).Value = TxtNumber.Text.Trim()
            params(3) = New SqlParameter("@Opened", SqlDbType.DateTime)
            params(3).Value = TxtOpended.SelectedDate
            params(4) = New SqlParameter("@CustomerOpenedDte", SqlDbType.DateTime)
            params(4).Value = TxtCoPenDate.SelectedDate
            params(5) = New SqlParameter("@Type", SqlDbType.VarChar, 200)
            params(5).Value = RCType.Text
            params(6) = New SqlParameter("@RequestedBy", SqlDbType.Int)
            params(6).Value = RCBRequestedBy.SelectedItem.Value.Trim
            params(7) = New SqlParameter("@Approval", SqlDbType.VarChar, 200)
            params(7).Value = RCApproval.Text.Trim
            params(8) = New SqlParameter("@StatusID", SqlDbType.Int)
            params(8).Value = RCStatus.SelectedItem.Value
            params(9) = New SqlParameter("@AssignedTo", SqlDbType.Int)
            params(9).Value = RCAssignTo.SelectedItem.Value
            params(10) = New SqlParameter("@AssignedGroup", SqlDbType.NVarChar, 300)
            params(10).Value = TxtAssingnment.Text
            params(11) = New SqlParameter("@ShortDescription", SqlDbType.NVarChar, 100)
            params(11).Value = TxtShortDescription.Text
            params(12) = New SqlParameter("@Description", SqlDbType.NVarChar, 8000)
            params(12).Value = TxtDescription.Text
            params(13) = New SqlParameter("@Requestor", SqlDbType.Int)
            params(13).Value = RCBRequestor.SelectedItem.Value.Trim
            params(14) = New SqlParameter("@Deployment", SqlDbType.NVarChar, 500)
            params(14).Value = TxtDeployment.Text
            params(15) = New SqlParameter("@Backout", SqlDbType.NVarChar, 500)
            params(15).Value = Txtbackout.Text.Trim
            params(16) = New SqlParameter("@ReturnID", SqlDbType.Int)
            params(16).Direction = ParameterDirection.Output
            params(17) = New SqlParameter("@CreatedBy", SqlDbType.Int)
            params(17).Value = m_iUserid

            sqlCon.ExecuteNonQuery("SP_ManageRequest", CommandType.StoredProcedure, params)

        Catch ex As Exception

        End Try
        '----------Delete youtube id from youtube --------------------


        Dim param(6) As SqlParameter

        param(0) = New SqlParameter("@ActionType", SqlDbType.Int)
        param(0).Value = 2 ' Action Type --> 1 >> New   Action Type --> 2 >> Open Action Type --> 3 >> Submit for approval
        param(1) = New SqlParameter("@ID", SqlDbType.Int)
        param(1).Value = val
        param(2) = New SqlParameter("@Number", SqlDbType.VarChar, 200)
        param(2).Value = TxtNumber.Text.Trim()
        param(3) = New SqlParameter("@StatusID", SqlDbType.Int)
        param(3).Value = action
        'param(4) = New SqlParameter("@QuestionID", SqlDbType.Int)
        'param(4).Value =
        param(4) = New SqlParameter("@Complex", SqlDbType.Int)
        param(4).Value = RBLComplex.SelectedItem.Value
        param(5) = New SqlParameter("@Verify", SqlDbType.Int)
        param(5).Value = RBLVerify.SelectedItem.Value
        param(6) = New SqlParameter("@Difficult", SqlDbType.Int)
        param(6).Value = RBLDifficult.SelectedItem.Value

        sqlCon.ExecuteNonQuery("SP_ManageRist", CommandType.StoredProcedure, param)

        BtnRistSubmit.Visible = False
        If (action = 4) Then
            ScriptManager.RegisterClientScriptBlock(
    Me.Page,
    Me.GetType(),
    "WebUserControlSript",
    "SaveCookie(5);",
    True)
        End If
        If (action = 6) Then
            ScriptManager.RegisterClientScriptBlock(
    Me.Page,
    Me.GetType(),
    "WebUserControlSript",
    "SaveCookie(7);",
    True)
        End If
        If (action = 7) Then
            ScriptManager.RegisterClientScriptBlock(
    Me.Page,
    Me.GetType(),
    "WebUserControlSript",
    "SaveCookie(8);",
    True)
        End If
        If (action = 8) Then
            ScriptManager.RegisterClientScriptBlock(
    Me.Page,
    Me.GetType(),
    "WebUserControlSript",
    "SaveCookie(9);",
    True)
        End If
    End Sub
    Protected Sub BtnReject_Click(ByVal sender As Object, ByVal e As EventArgs) Handles BtnReject.Click, BtnReject1.Click
        Dim sqlCon As New SqlDataProvider.SqlDatabase(ConfigurationManager.ConnectionStrings("DBConn").ConnectionString)
        Dim ObjContants As New Constants
        Try
            m_iUserid = Convert.ToInt32(Session("UserID"))
        Catch ex As Exception

        End Try
        '----------Delete youtube id from youtube --------------------
        Dim tid As Object = DataBinder.Eval(DataItem, "ID")
        Dim val As Integer = CType(hfvalue.Value, Integer)
        Dim params(6) As SqlParameter

        params(0) = New SqlParameter("@ActionType", SqlDbType.Int)
        params(0).Value = 2 ' Action Type --> 1 >> New   Action Type --> 2 >> Open Action Type --> 3 >> Submit for approval
        params(1) = New SqlParameter("@ID", SqlDbType.Int)
        params(1).Value = val
        params(2) = New SqlParameter("@Number", SqlDbType.VarChar, 200)
        params(2).Value = TxtNumber.Text.Trim()
        params(3) = New SqlParameter("@StatusID", SqlDbType.Int)
        params(3).Value = ObjContants.RequestReject
        'params(4) = New SqlParameter("@QuestionID", SqlDbType.Int)
        'params(4).Value =
        params(4) = New SqlParameter("@Complex", SqlDbType.Int)
        params(4).Value = RBLComplex.SelectedItem.Value
        params(5) = New SqlParameter("@Verify", SqlDbType.Int)
        params(5).Value = RBLVerify.SelectedItem.Value
        params(6) = New SqlParameter("@Difficult", SqlDbType.Int)
        params(6).Value = RBLDifficult.SelectedItem.Value

        sqlCon.ExecuteNonQuery("SP_ManageRist", CommandType.StoredProcedure, params)

        BtnRistSubmit.Visible = False

        ScriptManager.RegisterClientScriptBlock(
Me.Page,
Me.GetType(),
"WebUserControlSript",
"SaveCookie(6);",
True)
    End Sub
End Class
