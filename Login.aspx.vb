'Author: Bindhu John
'Riscalculator projectImports

Imports System.Data
Imports System.Data.SqlClient

Public Class Login
    Inherits System.Web.UI.Page

    Protected Sub Page_Init(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Init
        'Master.CurrentPageTitle = "Log In"
        'Master.TitleSearch = False
    End Sub

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Load
        If Not IsPostBack Then
            If Request("logout") = "true" Then
                '  loggedout.Style.Remove("display")
                ScriptManager.RegisterStartupScript(Me, [GetType](), "HideFailuremessage", "HideFailuremessage();", True)
            End If

        End If
       
    End Sub

    Protected Sub Login(ByVal sender As Object, ByVal e As System.EventArgs) Handles LoginButton.Click

        Dim sqlDR, sqlDR1 As SqlDataReader
        Dim authCookie As HttpCookie

        Dim params(1) As SqlParameter
        params(0) = New SqlParameter("@EmailAddress", SqlDbType.VarChar, 75)
        params(0).Value = EmailAddress.Text
        params(1) = New SqlParameter("@Password", SqlDbType.VarChar, 16)
        params(1).Value = Password.Text
        'params(2) = New SqlParameter("@ClientId", SqlDbType.BigInt)
        'params(2).Value = Master.oClient.ClientID
        Dim sqlCon As New SqlDataProvider.SqlDatabase(ConfigurationManager.ConnectionStrings("DBConn").ConnectionString)
        sqlDR = sqlCon.ExecuteReader("SpLoginCheck", CommandType.StoredProcedure, params)

        If sqlDR.Read() Then
            Session("UserID") = sqlDR("UserID")
            Session("UserEmail") = sqlDR("EmailAddress")
            Session("UserName") = sqlDR("Firstname") + " " + sqlDR("Lastname")
            'Session("ClientID_for_Ucontrol") = Master.oClient.ClientID

            'Dim params1(0) As SqlParameter
            'params1(0) = New SqlParameter("@UserId", SqlDbType.Int)
            'params1(0).Value = Int32.Parse(Session("UserID"))
            'sqlDR1 = sqlCon.ExecuteReader("GetUserProfiles", CommandType.StoredProcedure, params1)
            'If sqlDR1.Read() Then
            '    Session("UserProfileID") = sqlDR1("id")
            'End If
            'sqlDR1.Close()
            'Dim newTicket As FormsAuthenticationTicket = New FormsAuthenticationTicket(1, UserName.Text, DateTime.Now(), DateTime.Now.AddMinutes(30), False, sqlDR("usertype_id"))
            'authCookie = New HttpCookie(FormsAuthentication.FormsCookieName, FormsAuthentication.Encrypt(newTicket))
            'Response.Cookies.Add(authCookie)
            'Dim redirURL As String = FormsAuthentication.GetRedirectUrl(UserName.Text, False)
            'Response.Redirect(redirURL)

            'NEW LOGIN USING CUSTOM IDENT AND PRINC.
            ' Query the user store to get this user's User Data
            Dim userDataString As String = String.Concat(sqlDR("UserTypeID"), "|", sqlDR("UserID"), "|", sqlDR("EmailAddress"))

            ' Create the cookie that contains the forms authentication ticket
            'Dim authCookie As HttpCookie = FormsAuthentication.GetAuthCookie(UserName.Text, RememberMe.Checked)
            authCookie = FormsAuthentication.GetAuthCookie(EmailAddress.Text, RememberMe.Checked)

            ' Get the FormsAuthenticationTicket out of the encrypted cookie
            Dim ticket As FormsAuthenticationTicket = FormsAuthentication.Decrypt(authCookie.Value)

            ' Create a new FormsAuthenticationTicket that includes our custom User Data
            Dim newTicket As FormsAuthenticationTicket = New FormsAuthenticationTicket(ticket.Version, ticket.Name, ticket.IssueDate, ticket.Expiration, ticket.IsPersistent, userDataString)

            ' Update the authCookie's Value to use the encrypted version of newTicket
            authCookie.Value = FormsAuthentication.Encrypt(newTicket)

            ' Manually add the authCookie to the Cookies collection
            Response.Cookies.Add(authCookie)

            ' Determine redirect URL and send user there
            '   Dim redirUrl As String = FormsAuthentication.GetRedirectUrl(EmailAddress.Text, RememberMe.Checked)


            Response.Redirect("~/Request/ChangeRequest.aspx", False)
        Else
            FailureText.Text = "Email Address / Password not correct"
            ScriptManager.RegisterStartupScript(Me, [GetType](), "HideFailuremessageInvalid", "HideFailuremessageInvalid();", True)
        End If

        sqlDR.Close()
    End Sub

End Class
