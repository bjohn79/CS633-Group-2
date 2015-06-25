Imports System.Data.SqlClient

Public Class Users
    Inherits System.Web.UI.MasterPage
    Dim constring As String = ConfigurationManager.ConnectionStrings("DBConn").ConnectionString
    ' Dim db As New DBMS
    Dim flag As Integer
    Dim dt As DataTable
    Dim dr As SqlDataReader
    'Public Shadows oClient As Clients
    Public ident As CustomIdentity
    Dim Flags As Integer
    Dim path As String
    Dim splitvalue() As String
    Public strDomain As String
    Public domain As String
    ' Dim Config As New configuration
    Dim Url As String = ""
    Dim sqlCon As New SqlDataProvider.SqlDatabase(ConfigurationManager.ConnectionStrings("DBConn").ConnectionString)
    Dim Application_NodeName As String = ""
    'Protected Overloads Sub Page_Init(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Init
    '    ' Dim sHost As String
    '    'Response.Write("<script>alert('" + HttpContext.Current.Request.ApplicationPath + "')</script>")
    '    'Or HttpContext.Current.Request.Url.Host = "192.168.1.38"
    '    If HttpContext.Current.Request.Url.Host = "localhost" Then
    '        oClient = New Clients(1004)
    '    Else
    '        '   sHost = Mid(HttpContext.Current.Request.Url.Host, 1, InStr(HttpContext.Current.Request.Url.Host, ".") - 1).ToString

    '        Try
    '            If (Config.APP_ENV() = "DEV") Then
    '                Url = HttpContext.Current.Request.ApplicationPath
    '                oClient = New Clients(Url)
    '            Else
    '                Url = HttpContext.Current.Request.Url.Host
    '                oClient = New Clients(Url)
    '            End If
    '            logo.Style.Add("BACKGROUND-IMAGE", "url(" & Page.ResolveUrl(Config.ClientLogo() & oClient.Logo.ToString) & ")")
    '            Session("cId") = oClient.ClientID
    '        Catch ex As Exception

    '        End Try


    '    End If



    'End Sub

    'Private Sub LoadUserName()
    '    ' This function for load welcome user  name display top of the header page
    '    Dim lv As LoginView
    '    Dim lbl As Label
    '    Dim ls As LoginStatus
    '    Dim uid As String = ""
    '    If Request.IsAuthenticated Then
    '        ident = CType(HttpContext.Current.User.Identity, CustomIdentity)
    '        If (Not String.IsNullOrEmpty(ident.UserID.ToString())) Then
    '            uid = ident.UserID

    '            LIMyaccount.Visible = True

    '            HFMyaccount.Visible = True
    '            'Finding the loginview id 
    '            lv = FindControl("HeadLoginView")
    '            If (Not String.IsNullOrEmpty(lv.ToString())) Then
    '                'Finding the label control id
    '                Dim lblUserName1 As Label = DirectCast(lv.FindControl("lblUserName"), Label)
    '                lbl = lv.FindControl("lblUserName")
    '                'ls = lv.FindControl("HeadLoginStatus")
    '                'ls.Attributes.Add("OnClientClick", "return confirm('Are you sure you want to logout the screen?');")
    '                Try


    '                If (Not String.IsNullOrEmpty(lbl.ToString())) Then
    '                    'Getting current username 
    '                    dt = New DataTable("getusername")

    '                    dr = sqlCon.ExecuteReader("SELECT TOP 1 fname+' '+lname as Name FROM UserProfiles ur inner join users u on ur.UserId=u.Id where  u.Id='" & uid & "'  ORDER BY U.ID ASC", CommandType.Text)
    '                    dt.Load(dr)
    '                        lbl.Text = dt.Rows(0)("Name").ToString()


    '                End If
    '                Catch ex As Exception
    '                Finally
    '                    dr.Close()
    '                End Try
    '            End If
    '        End If
    '    End If
    'End Sub

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load

        Page.Header.DataBind()
        'HFNav.Value = oClient.Logo


        Try
            Application_NodeName = Request.ApplicationPath.ToUpper

            If Request.Url.AbsolutePath.ToString() IsNot Nothing Then
                path = Request.Url.AbsolutePath.ToUpper()
            Else
                path = ""
            End If
            splitvalue = path.Split("?") 'Spliting url for select case statement 
           
            Try
                'If (Config.APP_ENV() = "DEV") Then
                Url = HttpContext.Current.Request.ApplicationPath
                'Else
                '    Url = HttpContext.Current.Request.Url.Host
                'End If
                 
            Catch ex As Exception

            End Try

            'Select Case splitvalue(0)
            '    Case Application_NodeName & "/MY_COACHES_CORNER_PUBLIC.ASPX"  ' This case for coaches corner tab 
            '        HFHome.CssClass = "level1 static"
            '        HFEvents.CssClass = "level1 static"
            '        HFCalendar.CssClass = "level1 static"
            '        HFProfile.CssClass = "level1 static"
            '        HFMyaccount.CssClass = "level1 static"
            '        HFCoaches.CssClass = "level1 static"
            '        HFMyWorld.CssClass = "level1 static"
            '        HLPublicCoach.CssClass = "level1 selected static"
            '        SiteMapPath1.Visible = True
            '        flag = 8
            '    Case Application_NodeName & "/DEFAULT.ASPX"   'This case for home tab --display searching all events                  
            '        HFHome.CssClass = "level1 static"
            '        HFEvents.CssClass = "level1 static"
            '        HFCalendar.CssClass = "level1 static"
            '        HFProfile.CssClass = "level1 static"
            '        HFMyaccount.CssClass = "level1 selected static"
            '        HFCoaches.CssClass = "level1 static"
            '        HFMyWorld.CssClass = "level1 static"
            '        HLPublicCoach.CssClass = "level1 static"

            '        SiteMapPath1.Visible = False
            '        flag = 1
            'End Select

        Catch ex As Exception

        End Try



        If Request.IsAuthenticated Then
            ' pnlNav.Visible = True
        End If


        If Request.IsAuthenticated Then
            'ident = CType(HttpContext.Current.User.Identity, CustomIdentity)

            'Dim oCommand As SqlCommand = New SqlCommand()
            'oCommand.CommandText = "getClientNameUrl"
            'oCommand.CommandType = CommandType.StoredProcedure
            'oCommand.Parameters.Add(New SqlParameter("@userid", Data.SqlDbType.Int)).Value = ident.UserID
            'dt = db.getData(oCommand)
            'If dt.Rows.Count > 0 Then

        End If

        'If HttpContext.Current.User.IsInRole("99") Or HttpContext.Current.User.IsInRole("50") Then
        '    'AdminMenu.Visible = True
        '    Dim adminitem As New MenuItem
        '    adminitem.Text = "Admin"
        '    adminitem.NavigateUrl = "~/admin"
        '    'NavigationMenu.Items.Add(adminitem)
        'End If
        'If IsUserCoach(ident.UserID) Then
        '    Dim adminitem As New MenuItem
        '    adminitem.Text = "My Account"
        '    adminitem.NavigateUrl = "~/myaccount/dashboard.aspx"
        '    'NavigationMenu.Items.Add(adminitem)
        'End If
        ' tbSearchValue.Attributes.Add("onkeydown", "if(event.which || event.keyCode){if ((event.which == 13) || (event.keyCode == 13)) { document.getElementById('MainContent_txtKeyword').click();return false;}} else {return true}; ")
        Try
            Me.Response.Headers.Add("X-XSS-Protection", "0")
        Catch ex As Exception

        End Try
    End Sub


    Function IsUserCoach(ByVal uid) As Boolean
        Dim sSQL As String = "select top 1 cs.id from CoachesSupers cs" & _
            " inner join GroupMemberTypes gmt on cs.GroupMemberType=gmt.id and gmt.AddEvents=1" & _
            " where(cs.UserID = " & uid & ")"
        Dim iRes As Integer
        Try
            iRes = sqlCon.ExecuteScalar(sSQL, CommandType.Text)
        Catch ex As Exception
            iRes = 0
        End Try
        If iRes > 0 Then
            Return True
        Else
            Return False
        End If
    End Function
    'This function for search event 

 


End Class
