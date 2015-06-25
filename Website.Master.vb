Public Class WebSite
    Inherits MyMaster
    Public Shadows oRole As Roles
    Dim m_iUserid As Integer
    Protected Overloads Sub Page_Init(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Init
        If (HttpContext.Current.Session("UserID") Is Nothing) Then
            HttpContext.Current.Response.Redirect("~/Account/Login.aspx", True)
        Else
            LoginUserName.InnerText = HttpContext.Current.Session("UserName")
        End If
        Try
            m_iUserid = Convert.ToInt32(HttpContext.Current.Session("UserID"))
        Catch ex As Exception

        End Try
        oRole = New Roles(m_iUserid)


    End Sub
    Protected Sub lnkbtnlogout_Click(ByVal sender As Object, ByVal e As System.EventArgs)
        Session.Abandon()
        Session.Clear()
        Response.Redirect("~/Account/Login.aspx", False)
    End Sub



End Class
