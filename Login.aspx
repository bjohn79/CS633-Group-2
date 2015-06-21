<%@ Page Title="Log In" Language="vb" MasterPageFile="~/MasterPage/Users.Master" AutoEventWireup="false"
    CodeBehind="Login.aspx.vb" Inherits="ChangeRequest.Login" %>
    
                  
<asp:Content ID="HeaderContent" runat="server" ContentPlaceHolderID="HeadContent">
    <script type="text/javascript" src='<%=ResolveUrl("~/scripts/jquery.ezmark.js") %>'></script>
    <script type="text/javascript">
        $(function () {
            $('.cusCB input[type="checkbox"]').ezMark({ checkboxCls: 'ez-checkbox-gray', checkedCls: 'ez-checked-gray' })
        });
        function HideFailuremessage() {             
            $("#loggedout").removeAttr("style");
            $("#loggedout").fadeOut(5000);
        }
        function HideFailuremessageInvalid() {           
            $("#Invaliderrormessage").fadeOut(5000);
        }        
    </script>
      <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE9" />
</asp:Content>
<asp:Content ID="Content3" runat="server" ContentPlaceHolderID="MainContent">
        
  <div class="contentarea_white">
    <div class="innercontent">
        <div class="failureNotification"  id="loggedout" style="display:none;">You have successfully logged out.</div>
        <div class="logincontent_left">
            <div id="inner_login_head">LOG IN</div>
            <span id="Invaliderrormessage" class="failureNotification"><asp:Literal ID="FailureText" runat="server"></asp:Literal></span>
            <%--<asp:ValidationSummary ID="LoginUserValidationSummary" runat="server" CssClass="failureNotification" ValidationGroup="LoginUserValidationGroup"/>--%>
            <asp:Label ID="EmailAddressLabel" runat="server" AssociatedControlID="EmailAddress" CssClass="login_label">Email
              <asp:RequiredFieldValidator ID="EmailAddressRequired" runat="server" ControlToValidate="EmailAddress" CssClass="failureNotification" ErrorMessage="Email Address is required." ToolTip="Email Address is required." ValidationGroup="LoginUserValidationGroup">*</asp:RequiredFieldValidator>
            </asp:Label>
            <asp:TextBox ID="EmailAddress" runat="server" CssClass="login_textbox"></asp:TextBox>          
            <asp:Label ID="PasswordLabel" runat="server" AssociatedControlID="Password" CssClass="login_label">Password
             <asp:RequiredFieldValidator ID="PasswordRequired" runat="server" ControlToValidate="Password" CssClass="failureNotification" ErrorMessage="Password is required." ToolTip="Password is required." ValidationGroup="LoginUserValidationGroup">*</asp:RequiredFieldValidator>
            </asp:Label>
            <asp:TextBox ID="Password" runat="server" CssClass="login_textbox" TextMode="Password"></asp:TextBox>
           
            <asp:HyperLink runat="server" ID="hlForgetPass" CssClass="login_forgot"  Text="Forgot Username or Password?" />
            <div class="login_button" style="clear:both;">
                <asp:Button ID="LoginButton" runat="server" onClick="Login" Text="SUBMIT" CausesValidation="false" ValidationGroup="LoginUserValidationGroup" />
            </div>
            <div  style="padding-top:5px; margin-left:1px; width:100%">
                <asp:CheckBox ID="RememberMe" runat="server" CssClass="cusCB" />
                <asp:Label ID="RememberMeLabel" runat="server" AssociatedControlID="RememberMe" CssClass="login_remember">Remember me on this computer</asp:Label>
            </div>
            <div class="dotted_border"></div>
            <div class="login_signup">
                <div id="inner_signup_head">SIGN-UP TODAY!</div>
                <div class="create_account_button" style="clear:both;">
                    <input type="button" onclick="window.location = 'Register.aspx';" value="CREATE ACCOUNT" />
                </div>
            </div>
        </div>

        <div class="logincontent_right" style="display:none;">
            <div class="login_connect">
                <div id="inner_connect_head">LOG IN</div>
                <div class="connect_haveaccount_text">Have a Facebook account?</div>
                <div class="connect_login_text">Log in through Facebook Connect</div>
                <div class="connect_img">
                    <img src="/images/facebook_connect.png" alt="Facebook" />
                </div>
                <hr style="color:#6D6D6D; margin-bottom:15px;" />
                <div class="connect_haveaccount_text">Have a Twitter account?</div>
                <div class="connect_login_text">Log in through Twitter Connect</div>
                <div class="connect_img">
                    <img src="/images/twitter_connect.png" alt="Twitter" />
                </div>
            </div>
        </div>            
    </div>
</div>

</asp:Content>
